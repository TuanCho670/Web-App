window.initCocosGame = function(){
    // Cấu hình cho WebGL với fallback sang Canvas
    cc.game.CONFIG_KEY.renderMode = cc.sys.capabilities.hasOwnProperty('opengl') ? 1 : 0;
    
    var ScreenManager = {
        // Kích thước thiết kế cố định cho tất cả các scene
        designWidth: 640,
        designHeight: 960,
        
        // Phương thức khởi tạo
        init: function() {
            var self = this;
            
            // Lấy kích thước container
            var containerElement = document.querySelector('.gamePokerContainer') || document.body;
            var containerWidth = containerElement.clientWidth;
            var containerHeight = containerElement.clientHeight;
            
            console.log("ScreenManager init with container: " + containerWidth + " x " + containerHeight);
            
            // Tính toán tỷ lệ
            var designRatio = this.designWidth / this.designHeight;
            var containerRatio = containerWidth / containerHeight;
            
            // Chọn resolution policy phù hợp
            var resolutionPolicy;
            if (containerRatio >= designRatio) {
                // Container rộng hơn so với tỷ lệ thiết kế
                resolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
            } else {
                // Container cao hơn so với tỷ lệ thiết kế
                resolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
            }
            
            // Áp dụng kích thước thiết kế với policy đã chọn
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, resolutionPolicy);
            console.log("Applied design resolution: " + this.designWidth + " x " + this.designHeight);
            console.log("With policy: " + (resolutionPolicy === cc.ResolutionPolicy.FIXED_HEIGHT ? "FIXED_HEIGHT" : "FIXED_WIDTH"));
            
            // Hàm xử lý resize
            this.onResize = function() {
                var newContainerWidth = containerElement.clientWidth;
                var newContainerHeight = containerElement.clientHeight;
                var newContainerRatio = newContainerWidth / newContainerHeight;
                
                console.log("Handling resize: " + newContainerWidth + " x " + newContainerHeight);
                
                // Cập nhật resolution policy
                var newResolutionPolicy;
                if (newContainerRatio >= designRatio) {
                    newResolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
                } else {
                    newResolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
                }
                
                // Áp dụng lại design resolution với policy mới
                cc.view.setDesignResolutionSize(self.designWidth, self.designHeight, newResolutionPolicy);
                
                // Thông báo cho tất cả các scene đang chạy
                var resizeEvent = new cc.EventCustom('game-resize');
                cc.eventManager.dispatchEvent(resizeEvent);
                
                console.log("Updated resolution policy: " + (newResolutionPolicy === cc.ResolutionPolicy.FIXED_HEIGHT ? "FIXED_HEIGHT" : "FIXED_WIDTH"));
            };
            
            // Đăng ký sự kiện resize
            window.addEventListener('resize', this.onResize);
            
            return this;
        },
        
        // Hàm tính toán scale dựa trên kích thước thực tế của sprite
        calculateScale: function(spriteWidth, spriteHeight) {
            var winSize = cc.director.getWinSize();
            var scaleX = winSize.width / spriteWidth;
            var scaleY = winSize.height / spriteHeight;
            
            // Tùy thuộc vào thiết bị để chọn scale phù hợp
            if (cc.sys.isMobile) {
                return Math.max(scaleX, scaleY);
            } else {
                return Math.min(scaleX, scaleY) * 0.9; // Giảm nhẹ để có khoảng trống xung quanh
            }
        },
        
        // Đặt node vào trung tâm màn hình
        centerNode: function(node) {
            var winSize = cc.director.getWinSize();
            node.setPosition(winSize.width / 2, winSize.height / 2);
            return node;
        }
    };
    
    // Sửa đổi cho CardsLoaderScene
    var CardsLoaderScene = cc.Scene.extend({
        _interval: null,
        _label: null,
        _cards: [],
        _className: "CardsLoaderScene",
        _totalResources: 0,
        _loadedResources: 0,
        _percentLabel: null,
        _cardsContainer: null, // Container cho các lá bài
        
        init: function() {
            var self = this;
            var winSize = cc.director.getWinSize();
            var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            
            console.log("CardsLoaderScene init with winSize: " + winSize.width + " x " + winSize.height);
            
            // Thêm background màu đen kích thước toàn màn hình
            var background = new cc.LayerColor(cc.color(0, 0, 0, 255), winSize.width, winSize.height);
            this.addChild(background, 0);
            
            // Tạo container cho các lá bài - đặt ở trung tâm
            var cardsContainer = new cc.Node();
            cardsContainer.setPosition(centerPos);
            this.addChild(cardsContainer, 5);
            this._cardsContainer = cardsContainer;
            
            // Tạo các nội dung loading
            this.createLoadingContent(centerPos);
            
            // Đăng ký hàm xử lý resize
            cc.eventManager.addCustomListener('game-resize', function(event) {
                self.updatePositions();
            });
            
            return true;
        },
        
        createLoadingContent: function(centerPos) {
            var self = this;
            
            // Tạo chữ "Loading..." 
            this._label = new cc.LabelTTF("Loading...", "Arial", 30);
            this._label.setPosition(centerPos.x, centerPos.y - 80);
            this._label.setColor(cc.color(255, 255, 255));
            this.addChild(this._label, 10);
            
            // Tạo phần trăm loading
            this._percentLabel = new cc.LabelTTF("0%", "Arial", 20);
            this._percentLabel.setPosition(centerPos.x, centerPos.y - 120);
            this._percentLabel.setColor(cc.color(200, 200, 200));
            this.addChild(this._percentLabel, 10);
            
            // Tạo 5 lá bài xoay
            var cardTexture = "https://tuancho670.github.io/Web-App/assets/card/card_back_bg.png";
            var cardRadius = 80; // Bán kính vòng tròn các lá bài
            
            for (var i = 0; i < 5; i++) {
                var angle = (i / 5) * Math.PI * 2; // Vị trí theo góc trong vòng tròn
                var x = Math.cos(angle) * cardRadius;
                var y = Math.sin(angle) * cardRadius;
                
                var card = new cc.Sprite(cardTexture);
                card.setPosition(x, y);
                card.setScale(0.7); // Điều chỉnh kích thước lá bài
                
                // Hiệu ứng xoay cho lá bài
                var rotateAction = cc.RotateBy.create(2, 360); // Xoay 360 độ trong 2 giây
                var repeatAction = cc.RepeatForever.create(rotateAction);
                card.runAction(repeatAction);
                
                // Lưu trữ tham chiếu đến lá bài
                this._cards.push(card);
                this._cardsContainer.addChild(card, 5);
                
                // Làm cho các lá bài xoay với tốc độ khác nhau
                card.runAction(cc.Sequence.create(
                    cc.DelayTime.create(i * 0.2),
                    cc.CallFunc.create(function(target) {
                        var currentRotation = target.getRotation();
                        target.stopAllActions();
                        
                        // Tốc độ xoay ngẫu nhiên cho mỗi lá bài
                        var duration = 1.5 + Math.random(); // 1.5 đến 2.5 giây
                        var rotateAction = cc.RotateBy.create(duration, 360);
                        var repeatAction = cc.RepeatForever.create(rotateAction);
                        
                        target.runAction(repeatAction);
                    }, card)
                ));
                
                // Thêm hiệu ứng nhảy lên xuống (bounce)
                var moveUpDown = cc.Sequence.create(
                    cc.MoveBy.create(0.5, cc.p(0, 10)),
                    cc.MoveBy.create(0.5, cc.p(0, -10))
                );
                card.runAction(cc.RepeatForever.create(moveUpDown));
            }
            
            // Hiệu ứng nhấp nháy cho chữ Loading
            var fadeAction = cc.Sequence.create(
                cc.FadeTo.create(0.7, 150),
                cc.FadeTo.create(0.7, 255)
            );
            this._label.runAction(cc.RepeatForever.create(fadeAction));
        },
        
        updatePositions: function() {
            var winSize = cc.director.getWinSize();
            var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            
            console.log("Updating CardsLoaderScene positions with new winSize: " + winSize.width + " x " + winSize.height);
            
            // Cập nhật vị trí container
            if (this._cardsContainer) {
                this._cardsContainer.setPosition(centerPos);
            }
            
            // Cập nhật vị trí labels
            if (this._label) {
                this._label.setPosition(centerPos.x, centerPos.y - 80);
            }
            
            if (this._percentLabel) {
                this._percentLabel.setPosition(centerPos.x, centerPos.y - 120);
            }
        },
        
        onEnter: function() {
            cc.Node.prototype.onEnter.call(this);
            this.schedule(this._startLoading, 0.3);
        },
        
        onExit: function() {
            cc.Node.prototype.onExit.call(this);
            this.unschedule(this._startLoading);
            
            // Xóa listener khi scene thoát
            cc.eventManager.removeCustomListeners('game-resize');
        },
        
        initWithResources: function(resources, cb) {
            if (cc.isString(resources))
                resources = [resources];
            this.resources = resources || [];
            this.cb = cb;
            this._totalResources = resources.length;
            this._loadedResources = 0;
        },
        
        _startLoading: function() {
            var self = this;
            self.unschedule(self._startLoading);
            
            var res = self.resources;
            cc.loader.load(res, function(result, count, loadedCount) {
                self._loadedResources = loadedCount;
                var percent = loadedCount / count;
                self._percentLabel.setString(Math.floor(percent * 100) + "%");
                
                // Cập nhật các lá bài khi loading
                for (var i = 0; i < self._cards.length; i++) {
                    var cardThreshold = (i + 1) / self._cards.length;
                    if (percent >= cardThreshold) {
                        // Lá bài sẽ nhấp nháy khi đạt đến ngưỡng %
                        self._cards[i].runAction(cc.Sequence.create(
                            cc.ScaleTo.create(0.2, 0.9),
                            cc.ScaleTo.create(0.2, 0.7)
                        ));
                    }
                }
            }, function() {
                if (self.cb)
                    self.cb();
            });
        }
    });
    
    // Sửa đổi cho StartScene
    var StartScene = cc.Scene.extend({
        _className: "StartScene",
        logo: null,
        startButton: null,
        titleLabel: null,
        
        init: function() {
            var self = this;
            var winSize = cc.director.getWinSize();
            var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            
            console.log("StartScene init with winSize: " + winSize.width + " x " + winSize.height);
            
            // Thêm background màu tối - FULL SCREEN
            var background = new cc.LayerColor(cc.color(0, 10, 30, 255), winSize.width, winSize.height);
            this.addChild(background, 0);
            
            // Hiệu ứng gradient cho background
            var gradient = new cc.LayerGradient(
                cc.color(0, 30, 60, 255),
                cc.color(0, 0, 0, 255),
                cc.p(0, -1)
            );
            gradient.setContentSize(cc.size(winSize.width, winSize.height));
            this.addChild(gradient, 1);
            
            // Tạo container chính ở giữa màn hình để chứa nội dung
            this.mainContainer = new cc.Node();
            this.mainContainer.setPosition(centerPos);
            this.addChild(this.mainContainer, 5);
            
            // Thêm logo game
            this.logo = new cc.Sprite("https://tuancho670.github.io/Web-App/assets/card/poker_logo.png");
            // Nếu không có logo riêng, có thể dùng sprite từ game
            if (!cc.textureCache.getTextureForKey(this.logo.getTexture())) {
                this.logo = new cc.Sprite("https://tuancho670.github.io/Web-App/assets/card/card_back_bg.png");
            }
            
            this.logo.setPosition(0, 100);
            this.logo.setScale(1.5);
            this.mainContainer.addChild(this.logo, 2);
            
            // Thêm animation cho logo
            this.logo.runAction(cc.RepeatForever.create(
                cc.Sequence.create(
                    cc.ScaleTo.create(1.0, 1.6),
                    cc.ScaleTo.create(1.0, 1.5)
                )
            ));
            
            // Thêm tiêu đề game
            this.titleLabel = new cc.LabelTTF("POKER AOF/NLH", "Arial Bold", 60);
            this.titleLabel.setPosition(0, 250);
            this.titleLabel.setColor(cc.color(255, 215, 0)); // Màu vàng
            
            // Thêm hiệu ứng glow cho tiêu đề
            this.titleLabel.enableShadow(cc.color(255, 100, 0, 255), cc.size(0, 0), 10);
            this.mainContainer.addChild(this.titleLabel, 2);
            
            // Animation nhấp nháy cho tiêu đề
            this.titleLabel.runAction(cc.RepeatForever.create(
                cc.Sequence.create(
                    cc.FadeTo.create(1.0, 200),
                    cc.FadeTo.create(1.0, 255)
                )
            ));
            
            // Tạo nút Start
            this.createStartButton(0, -100);
            
            // Thêm text copyright hoặc phiên bản
            var versionLabel = new cc.LabelTTF("Version 1.0 Beta", "Arial", 24);
            versionLabel.setPosition(0, -winSize.height / 2 + 40);
            versionLabel.setColor(cc.color(150, 150, 150));
            this.mainContainer.addChild(versionLabel, 2);
            
            // Đăng ký hàm xử lý resize
            cc.eventManager.addCustomListener('game-resize', function(event) {
                self.updatePositions();
            });
            
            return true;
        },

        
        
        updatePositions: function() {
            var winSize = cc.director.getWinSize();
            var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            
            console.log("Updating StartScene positions with new winSize: " + winSize.width + " x " + winSize.height);
            
            // Cập nhật vị trí container chính
            if (this.mainContainer) {
                this.mainContainer.setPosition(centerPos);
            }
        },

        // Thêm vào MyScene.prototype hoặc trong phương thức createPlayers

        
        createStartButton: function(x, y) {
            var self = this;
            
            // Thay thế bằng Button của Cocos2d thay vì Node
            var button = new ccui.Button();
            button.loadTextures(
                "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png",
                "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png",
                "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png"
            );
            button.setPosition(cc.p(x, y));
            button.setScale(1.5);
            
            // Thêm text "START"
            var startLabel = new cc.LabelTTF("START GAME", "Arial Bold", 32);
            startLabel.setPosition(button.width/2, button.height/2);
            startLabel.setColor(cc.color(255, 255, 255));
            button.addChild(startLabel);
            
            // Thêm animation
            var scaleAction = cc.RepeatForever.create(
                cc.Sequence.create(
                    cc.ScaleTo.create(0.5, 1.6),
                    cc.ScaleTo.create(0.5, 1.5)
                )
            );
            button.runAction(scaleAction);
            
            // Thiết lập callback trực tiếp cho button
            button.addTouchEventListener(function(sender, type) {
                if (type === ccui.Widget.TOUCH_ENDED) {
                    console.log("START button clicked!");
                    
                    // Phát âm thanh khi nhấp nút (nếu đã load)
                    try {
                        if (MyScene.prototype && MyScene.prototype.soundManager) {
                            MyScene.prototype.soundManager.play("button");
                        }
                    } catch(e) {
                        console.log("Sound manager not initialized yet");
                    }
                    
                    // Hiệu ứng fade out toàn màn hình
                    var fadeOut = cc.FadeOut.create(0.5);
                    
                    // Chuyển sang game scene sau khi fade out
                    var callback = cc.CallFunc.create(function() {
                        // Bắt đầu tải tài nguyên và chuyển qua MainScene
                        self.startMainGame();
                    });
                    
                    self.runAction(cc.Sequence.create(fadeOut, callback));
                }
            }, this);
            
            // Lưu tham chiếu
            this.startButton = button;
            
            // Thêm vào container chính thay vì scene
            this.mainContainer.addChild(button, 5);
            
            return button;
        },
        
        startMainGame: function() {
            // Khởi chạy game mới
            var gameScene = new MyScene();
            cc.director.runScene(gameScene);
        },
        
        onEnter: function() {
            this._super();
        },
        
        onExit: function() {
            this._super();
            // Xóa listener khi scene thoát
            cc.eventManager.removeCustomListeners('game-resize');
        }
    });

   // Thay thế hàm preload mặc định
   CardsLoaderScene.preload = function(resources, cb) {
       var _loaderScene = null;
       if(!_loaderScene) {
           _loaderScene = new CardsLoaderScene();
           _loaderScene.init();
       }
       _loaderScene.initWithResources(resources, cb);
       
       cc.director.runScene(_loaderScene);
       return _loaderScene;
   };

var MyScene = cc.Scene.extend({
    //------------------------------------------------------------------------
    // PROPERTIES
    //------------------------------------------------------------------------
    cardBaseUrl: "https://tuancho670.github.io/Web-App/assets/card/",
    tableScale: null,
    foldButton: null,
    allinButton: null,
    
    // State variables for button/interaction control
    buttonActive: false,
    buttonActionInProgress: false,
    
    // Player references
    topPlayer: null,
    bottomPlayer: null,
    
    // Pot related variables
    potPosition: null,
    potBg: null,
    potAmountLabel: null,
    potAmount: 0,
    buttonsHiddenManually: false,

    
    // Chip images
    chipImages: {
        orange: "https://tuancho670.github.io/Web-App/assets/Chips/common_chips_orange.png"
    },
    
    soundManager: {
        sounds: {
            cardReveal: "https://tuancho670.github.io/Web-App/assets/sound/card_reveal.mp3",
            chipCollect: "https://tuancho670.github.io/Web-App/assets/sound/chip_collect.mp3",
            win: "https://tuancho670.github.io/Web-App/assets/sound/win.mp3",
            lose: "https://tuancho670.github.io/Web-App/assets/sound/lose.mp3",
            button: "https://tuancho670.github.io/Web-App/assets/sound/button_click.mp3",
            deal: "https://tuancho670.github.io/Web-App/assets/sound/card_deal.mp3",
            pot:'https://tuancho670.github.io/Web-App/assets/sound/pot.mp3',
            chipWin: 'https://tuancho670.github.io/Web-App/assets/sound/win_chip.mp3',
            cardSlide: 'https://tuancho670.github.io/Web-App/assets/sound/card_slide.mp3'
        },
        
        audioElements: {},
        enabled: true,
        
        preloadAll: function() {
            try {
                for (var key in this.sounds) {
                    if (this.sounds.hasOwnProperty(key)) {
                        // Sử dụng HTML5 Audio API
                        var audio = new Audio();
                        audio.src = this.sounds[key];
                        audio.load(); // Preload
                        this.audioElements[key] = audio;
                    }
                }
                console.log("Preloaded all sound effects using HTML5 Audio");
            } catch (e) {
                console.error("Error preloading sounds:", e);
            }
        },
        
        play: function(soundKey) {
            if (!this.enabled) return;
            
            try {
                var audio = this.audioElements[soundKey];
                if (audio) {
                    // Clone audio để có thể phát đồng thời nhiều âm thanh
                    var audioClone = audio.cloneNode();
                    audioClone.play();
                    console.log("Playing sound:", soundKey);
                } else {
                    console.log("Sound not found:", soundKey);
                }
            } catch (e) {
                console.error("Error playing sound:", e);
            }
        },
        
        toggleSound: function() {
            this.enabled = !this.enabled;
            return this.enabled;
        }
    },
    
    // Game state
    gameState: {
        state: "waiting", // waiting, dealing, playerTurn, showdown
        pot: 0,
        minBet: 4,
        playerStack: 0,  // Thay đổi thành 0 thay vì 32 cho người chơi
        aiStack: 32,     // AI giữ nguyên stack mặc định
        playerWallet: 1000, // Ví của người chơi với 1000 chip ban đầu
        playerDefaultStack: 32, // Stack mặc định của người chơi
        aiDefaultStack: 32, // Stack mặc định của AI
        playerCards: [],
        aiCards: [],
        communityCards: [],
        winner: null
    },
    
    //------------------------------------------------------------------------
    // INITIALIZATION METHODS
    //------------------------------------------------------------------------
    
    onEnter: function() {
        this._super();
    var size = cc.director.getWinSize();
    var self = this;
    
    console.log("Scene entered - initializing game");
    
    // Flag để ngăn xử lý chồng chéo
    this.isGameInProgress = false;
    
    // Tính toán scale dựa vào kích thước thực tế
    var calculateScale = function(imageWidth, imageHeight) {
        var scaleX = size.width / imageWidth;
        var scaleY = size.height / imageHeight;
        
        // Xác định scale phù hợp dựa vào thiết bị
        if (cc.sys.isMobile) {
            return Math.max(scaleX, scaleY);
        } else {
            return Math.min(scaleX, scaleY) + 0.1;
        }
    };
    
    // Thiết lập background và table
    var background = new cc.Sprite("https://tuancho670.github.io/Web-App/assets/fee0be5a-9db2-4716-a806-ff84222f03ca.jpg");
    background.setPosition(size.width / 2, size.height / 2);
    var bgScale = calculateScale(background.width, background.height);
    background.setScale(bgScale);
    this.addChild(background, 0);
    
    var table = new cc.Sprite("https://tuancho670.github.io/Web-App/assets/0f1f7e3e-05c6-47e8-9444-d517276d37d1.png");
    table.setPosition(size.width / 2, size.height / 2);
    this.tableScale = calculateScale(table.width, table.height);
    table.setScale(this.tableScale);
    this.addChild(table, 1);
    
    // Lưu tham chiếu đến table
    this.table = table;
    
    // Khởi tạo vị trí pot
    this.potPosition = cc.p(size.width / 2, size.height / 2 + 115);
    
    // Tạo thông tin người chơi
    this.createPlayers();
    
    var centerX = size.width / 2;
    var buttonSpacing = 120; // khoảng cách ngang
    var yPos = 60; // khoảng cách từ đáy màn hình

    this.foldButton = this.createActionButton(centerX - buttonSpacing, yPos, 'fold');
    this.addChild(this.foldButton, 10);

    this.allinButton = this.createActionButton(centerX + buttonSpacing, yPos, 'allin');
    this.addChild(this.allinButton, 10);
    
    // Khởi tạo pot trống
    this.initPot();
    
    // Preload âm thanh
    this.soundManager.preloadAll();
    
    // Tạo và hiển thị loading indicator
    var loadingLabel = new cc.LabelTTF("Đang tải dữ liệu ví...", "Arial Bold", 32 * this.tableScale);
    loadingLabel.setPosition(size.width / 2, size.height / 2);
    loadingLabel.setColor(cc.color(255, 255, 255));
    
    // Thêm shadow để dễ đọc
    loadingLabel.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, 2), 3);
    
    this.addChild(loadingLabel, 100);
    
    // Thêm hiệu ứng đợi để tăng trải nghiệm người dùng
    var dots = ".";
    loadingLabel.schedule(function() {
        dots = dots.length >= 3 ? "." : dots + ".";
        loadingLabel.setString("Đang tải dữ liệu ví" + dots);
    }, 0.5);
    
    // Kiểm tra nếu có GameBackEndBridge
    if (window.GameBackEndBridge) {
        // Tải điểm từ server
        window.GameBackEndBridge.getGamePoints()
            .then(function(result) {
                console.log("Kết quả lấy điểm từ server:", result);
                
                if (result.success) {
                    // Cập nhật ví người chơi từ server
                    self.gameState.playerWallet = result.points;
                    console.log("Đã cập nhật ví người chơi:", self.gameState.playerWallet);
                    
                    // Đặt stack người chơi về 0 ban đầu để đảm bảo trừ chính xác từ ví
                    // AI vẫn giữ stack mặc định
                    self.gameState.playerStack = 0;
                    
                    // Hiển thị thông tin ví
                    self.displayWalletInfo();
                    
                    // Kiểm tra số dư ví để quyết định luồng tiếp theo
                    if (self.gameState.playerWallet >= self.gameState.playerDefaultStack) {
                        // Có đủ tiền trong ví, tiến hành trừ tiền và bắt đầu game
                        loadingLabel.unscheduleAllCallbacks();
                        loadingLabel.removeFromParent(true);
                        
                        // Bắt đầu ván mới sau khi kiểm tra đủ điều kiện
                        self.scheduleOnce(function() {
                            console.log("Starting new hand after wallet check");
                            self.startNewHand();
                            self.isGameInProgress = false;
                        }, 0.5);
                    } else if (self.gameState.playerWallet > 0) {
                        // Không đủ tiền, nhưng có tiền - hiển thị thông báo
                        loadingLabel.unscheduleAllCallbacks();
                        loadingLabel.setString("Số dư không đủ! Cần " + 
                                             self.gameState.playerDefaultStack + 
                                             " chip để chơi. Bạn có " + 
                                             self.gameState.playerWallet + " chip.");
                        
                        // Tự động ẩn sau 3 giây
                        self.scheduleOnce(function() {
                            loadingLabel.removeFromParent(true);
                            
                            // Bắt đầu ván mới với số tiền hiện có
                            self.startNewHand();
                            self.isGameInProgress = false;
                        }, 3.0);
                    } else {
                        // Ví rỗng, hiển thị thông báo nạp tiền
                        loadingLabel.unscheduleAllCallbacks();
                        loadingLabel.setString("Ví của bạn rỗng! Vui lòng nạp thêm CEXCOIN để chơi.");
                        
                        // Tạo nút nạp tiền
                        var rechargeButton = self.createRechargeButton(size.width / 2, size.height / 2 - 80);
                        self.addChild(rechargeButton, 101);
                        
                        // Không tự động ẩn thông báo
                    }
                } else {
                    // Lỗi từ server, sử dụng giá trị mặc định
                    console.warn("Không thể lấy điểm từ server, sử dụng giá trị mặc định");
                    loadingLabel.unscheduleAllCallbacks();
                    loadingLabel.removeFromParent(true);
                    
                    // Reset stack người chơi về 0, AI giữ nguyên mặc định
                    self.gameState.playerStack = 0;
                    
                    // Hiển thị thông tin ví
                    self.displayWalletInfo();
                    
                    // Bắt đầu ván mới
                    self.scheduleOnce(function() {
                        console.log("Starting new hand with default wallet value");
                        self.startNewHand();
                        self.isGameInProgress = false;
                    }, 0.5);
                }
            })
            .catch(function(error) {
                console.error("Lỗi khi lấy điểm từ server:", error);
                
                // Hiển thị thông báo lỗi
                loadingLabel.unscheduleAllCallbacks();
                loadingLabel.setString("Không thể kết nối đến server. Đang sử dụng dữ liệu offline.");
                
                // Reset stack người chơi về 0, AI giữ nguyên mặc định
                self.gameState.playerStack = 0;
                
                // Tự động xóa thông báo sau 2 giây
                self.scheduleOnce(function() {
                    loadingLabel.removeFromParent(true);
                    
                    // Hiển thị thông tin ví với giá trị mặc định
                    self.displayWalletInfo();
                    
                    // Bắt đầu ván mới
                    console.log("Starting new hand with default wallet value");
                    self.startNewHand();
                    self.isGameInProgress = false;
                }, 2.0);
            });
    } else {
        console.warn("GameBackEndBridge không tồn tại, sử dụng giá trị mặc định");
        
        // Reset stack người chơi về 0, AI giữ nguyên mặc định
        self.gameState.playerStack = 0;
        
        // Xóa loading label ngay lập tức
        loadingLabel.removeFromParent(true);
        
        // Hiển thị thông tin ví
        self.displayWalletInfo();
        
        // Bắt đầu ván mới
        self.scheduleOnce(function() {
            console.log("Starting new hand with default wallet value");
            self.startNewHand();
            self.isGameInProgress = false;
        }, 0.5);
    }
    },

    // Thêm phương thức tạo nút nạp tiền
createRechargeButton: function(x, y) {
    var self = this;
    
    // Tạo button
    var button = new ccui.Button();
    button.loadTextures(
        "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png",
        "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png",
        "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png"
    );
    button.setPosition(cc.p(x, y));
    button.setScale(this.tableScale * 1.5);
    
    // Thêm text "NẠP CEXCOIN"
    var label = new cc.LabelTTF("NẠP CEXCOIN", "Arial Bold", 32);
    label.setPosition(button.width/2, button.height/2);
    label.setColor(cc.color(255, 255, 255));
    button.addChild(label);
    
    // Thêm animation
    var scaleAction = cc.RepeatForever.create(
        cc.Sequence.create(
            cc.ScaleTo.create(0.5, this.tableScale * 1.6),
            cc.ScaleTo.create(0.5, this.tableScale * 1.5)
        )
    );
    button.runAction(scaleAction);
    
    // Thiết lập callback cho button
    button.addTouchEventListener(function(sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            console.log("Recharge button clicked!");
            
            // Phát âm thanh khi nhấp nút
            self.soundManager.play("button");
            
            // Gọi TelegramWebApp để mở menu chính
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.close();
            } else {
                // Fallback: Hiển thị alert nếu không có Telegram WebApp
                alert("Vui lòng quay lại và làm nhiệm vụ để nhận thêm CEXCOIN!");
            }
        }
    }, this);
    
    return button;
},
    
    
    // Tạo thông tin người chơi
    createPlayers: function() {
        var size = cc.director.getWinSize();
        var centerX = size.width / 2;
        var centerY = size.height / 2;
        var self = this;
        
        // Vị trí người chơi điều chỉnh theo tableScale
        var topPlayerY = centerY + 500 * self.tableScale;
        var bottomPlayerY = centerY - 450 * self.tableScale;
        
        // Lấy tên từ Telegram nếu có
        var playerName = "Em Non L...";
        if (this.telegramUser && this.telegramUser.first_name) {
            playerName = this.telegramUser.first_name;
            if (this.telegramUser.last_name) {
                playerName += " " + this.telegramUser.last_name;
            }
            
            // Rút gọn tên nếu quá dài
            if (playerName.length > 10) {
                playerName = playerName.substring(0, 7) + "...";
            }
        }
        
        var topPlayer = this.createPlayerInfo(centerX, topPlayerY, "Enise Fid...", self.gameState.aiStack);
        var bottomPlayer = this.createPlayerInfo(centerX, bottomPlayerY, playerName, self.gameState.playerStack);
        
        // Lưu tham chiếu để cập nhật sau này
        this.topPlayer = topPlayer;
        this.bottomPlayer = bottomPlayer;
        
        this.addChild(topPlayer, 3);
        this.addChild(bottomPlayer, 3);
    },
    
   // Phương thức kiểm tra và in trạng thái đầy đủ của nút


// Sửa phương thức createActionButton để log mỗi lần có sự kiện click

    
    // Helper: Tạo thông tin người chơi
    createPlayerInfo: function(x, y, playerName, chips) {
        var container = new cc.Node();
        container.setPosition(x, y);
        var self = this;
        
        // Avatar frame 
        var frameTexture = cc.textureCache.addImage("https://replay.x-game.net/v2/assets/resources/native/1c/1c46648e0.png");
        var avatarFrame = new cc.Sprite(frameTexture, cc.rect(679, 510, 134, 134));
        
        // Background frame 
        var bgFrameTexture = cc.textureCache.addImage("https://tuancho670.github.io/Web-App/assets/head_frame_bg.png");
        var bgFrame = new cc.Sprite(bgFrameTexture);
        bgFrame.setPosition(avatarFrame.width/2, avatarFrame.height/2);
        avatarFrame.addChild(bgFrame);
        
        // Avatar tròn (đã cắt sẵn)
        var avatarTexture = cc.textureCache.addImage("https://tuancho670.github.io/Web-App/assets/circular_images/circular_player_head_33.png");
        var avatar = new cc.Sprite(avatarTexture);
        
        // Điều chỉnh scale avatar
        avatar.setScale(self.tableScale * 0.75);
        avatar.setPosition(avatarFrame.width/2, avatarFrame.height/2);
        avatarFrame.addChild(avatar);
        
        // Scale frame theo kích thước canvas
        avatarFrame.setScale(self.tableScale * 1.2);
        container.addChild(avatarFrame);
        
        // Info box frame theo table scale
        var infoBoxTexture = cc.textureCache.addImage("https://replay.x-game.net/v2/assets/main/native/18/188b0c9fe.png");
        var infoBox = new cc.Sprite(infoBoxTexture, cc.rect(863, 594, 121, 60));
        if (cc.sys.isMobile) {
            infoBox.setScale(self.tableScale * 1.2);
            infoBox.setPosition(0, -86 * self.tableScale);
        } else {
            infoBox.setScale(self.tableScale * 1.1);
            infoBox.setPosition(0, -75 * self.tableScale + 0.2);
        }
        container.addChild(infoBox);
        
        // Font size điều chỉnh theo kích thước canvas
        var fontSize = cc.sys.isMobile ? 23 : 22;
        var fontSizeChip = cc.sys.isMobile ? 26 : 25;
        var nameLabel = new cc.LabelTTF(playerName, "Arial", fontSize * self.tableScale);
        if (cc.sys.isMobile) {
            nameLabel.setPosition(0, -75 * self.tableScale);
        } else {
            nameLabel.setPosition(0, -65 * self.tableScale);
        }
        nameLabel.setColor(cc.color(255, 255, 255));
        container.addChild(nameLabel);
        
        // Chips amount
        var chipsLabel = new cc.LabelTTF(chips.toLocaleString(), "Arial", fontSizeChip * self.tableScale);
        if (cc.sys.isMobile) {
            chipsLabel.setPosition(0, -105 * self.tableScale);
        } else {
            chipsLabel.setPosition(0, -95 * self.tableScale);
        }
        chipsLabel.setColor(cc.color(255, 215, 0));
        container.addChild(chipsLabel);
        
        return container;
    },
    
    // Helper: Tạo nút hành động (Fold, All-in)
    createActionButton: function(x, y, type) {
        var self = this;
        var texture = type === 'fold' 
            ? "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_red.png"
            : "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png";
        
        // Tạo button
        var button = new ccui.Button();
        button.loadTextures(texture, texture, texture);
        button.setPosition(cc.p(x, y));
        
        // Thiết lập scale
        button.setScale(this.tableScale * 1.2);
        
        // Lưu loại nút
        button.type = type;
        
        // Thiết lập callback cho sự kiện touch
        button.addTouchEventListener(function(sender, eventType) {
            if (eventType === ccui.Widget.TOUCH_ENDED) {
                if (!self.buttonActive || self.buttonActionInProgress) {
                    console.log("Button ignored - not active or action in progress");
                    return;
                }
                
                console.log(type.toUpperCase() + " button clicked");
                
                // Phát âm thanh
                self.soundManager.play("button");
                
                // Vô hiệu hóa các nút ngay lập tức
                self.setButtonsActive(false);
                self.buttonActionInProgress = true;
                
                // Ẩn nút
                self.hideActionButtons();
                
                // Thực hiện hành động tương ứng
                if (type === 'fold') {
                    self.performFold();
                } else if (type === 'allin') {
                    self.performAllIn();
                }
            }
        }, this);
        
        // Thêm text
        var text = type === 'fold' ? "FOLD" : "ALL IN";
        var fontSize = (cc.sys.isMobile ? 50 : 50) * this.tableScale;
        var label = new cc.LabelTTF(text, "Arial", fontSize);
        label.setPosition(button.width/2, button.height/2);
        label.setColor(cc.color(255, 255, 255));
        button.addChild(label);
        
        // Ban đầu ẩn nút
        button.setVisible(false);
        
        return button;
    },
    
    //------------------------------------------------------------------------
    // BUTTON CONTROL METHODS
    //------------------------------------------------------------------------
    
   // Sửa phương thức hideActionButtons để log chi tiết hơn

   logButtonStatus: function() {
    if (!this.foldButton || !this.allinButton) {
        console.log("Buttons not initialized yet");
        return;
    }
    
    console.log("-------- BUTTON STATUS --------");
    console.log("Fold button visible:", this.foldButton.isVisible());
    console.log("All-in button visible:", this.allinButton.isVisible());
    console.log("Button active:", this.buttonActive);
    console.log("Action in progress:", this.buttonActionInProgress);
    console.log("Game state:", this.gameState.state);
    console.log("Buttons hidden flag:", this.buttonsHidden);
    console.log("------------------------------");
},

hideActionButtons: function() {
    console.log("hideActionButtons() called");

    if (this.foldButton && this.allinButton) {
        console.log("Before hiding - Fold visible:", this.foldButton.isVisible(), 
                    "All-in visible:", this.allinButton.isVisible());

        this.foldButton.setVisible(false);
        this.allinButton.setVisible(false);

        this.buttonsHidden = true;

        // ✅ Ghi nhận ẩn bằng tay
        this.buttonsHiddenManually = true;

        console.log("After hiding - Fold visible:", this.foldButton.isVisible(), 
                    "All-in visible:", this.allinButton.isVisible(),
                    "buttonsHidden:", this.buttonsHidden,
                    "buttonsHiddenManually:", this.buttonsHiddenManually);
    } else {
        console.log("Cannot hide buttons - not initialized");
    }
},


// Sửa phương thức showActionButtons để log chi tiết hơn
showActionButtons: function() {
console.log("showActionButtons() called - game state:", this.gameState.state);

// ✅ Ngăn show lại nếu đã bị ẩn bằng tay
if (this.buttonsHiddenManually) {
console.log("Blocked showActionButtons() - hidden manually");
return;
}

if (this.gameState.state !== "playerTurn") {
console.log("Not showing buttons - not player's turn");
return;
}

if (this.foldButton && this.allinButton) {
console.log("Before showing - Fold visible:", this.foldButton.isVisible(), 
            "All-in visible:", this.allinButton.isVisible(),
            "buttonActive:", this.buttonActive,
            "buttonActionInProgress:", this.buttonActionInProgress);

this.buttonActionInProgress = false;

this.foldButton.setVisible(true);
this.allinButton.setVisible(true);
this.setButtonsActive(true);
this.buttonsHidden = false;

console.log("After showing - Fold visible:", this.foldButton.isVisible(), 
            "All-in visible:", this.allinButton.isVisible(),
            "buttonActive:", this.buttonActive,
            "buttonsHidden:", this.buttonsHidden);
} else {
console.log("Cannot show buttons - not initialized");
}
},


    
    // Thiết lập trạng thái active của buttons
    setButtonsActive: function(active) {
        this.buttonActive = active;
        console.log("Buttons active state set to:", active);
    },
    
    //------------------------------------------------------------------------
    // GAME CONTROL METHODS
    //------------------------------------------------------------------------
    
    // Bắt đầu ván mới
    startNewHand: function() {
        var self = this;
        console.log("Starting new hand");
    
        this.buttonsHiddenManually = false;
        
        // Đảm bảo trừ tiền từ ví cho người chơi
        var refillPlayerSuccess = this.refillPlayerStack();
        
        // Đảm bảo AI luôn có đúng 32 chip (không thừa không thiếu)
        this.balanceAIStack();
        
        // Chỉ tiếp tục nếu refill thành công hoặc đã có đủ chip
        if (!refillPlayerSuccess && this.gameState.playerStack < this.gameState.playerDefaultStack) {
            console.log("Not enough chips to start a new hand");
            
            // Hiển thị thông báo không đủ chip
            var size = cc.director.getWinSize();
            var notEnoughLabel = new cc.LabelTTF(
                "Số chip không đủ để chơi! Bạn cần " + this.gameState.playerDefaultStack + " chip.",
                "Arial Bold", 32 * this.tableScale
            );
            notEnoughLabel.setPosition(size.width / 2, size.height / 2);
            notEnoughLabel.setColor(cc.color(255, 100, 100));
            notEnoughLabel.enableShadow(cc.color(0, 0, 0, 255), cc.size(2, 2), 3);
            this.addChild(notEnoughLabel, 100);
            
            // Tạo nút nạp tiền
            var rechargeButton = this.createRechargeButton(size.width / 2, size.height / 2 - 80);
            this.addChild(rechargeButton, 101);
            
            return;
        }
        
        // Log trạng thái stack trước khi bắt đầu ván
        console.log("Before starting new hand - Player stack:", this.gameState.playerStack, "AI stack:", this.gameState.aiStack);
        
        // Cập nhật hiển thị
        this.displayWalletInfo();
        this.updateStackDisplay();
        
        // Xóa tất cả các scheduled functions
        this.unscheduleAllCallbacks();
        
        // Xóa bàn
        this.clearTable();
        
        this.buttonActionInProgress = false;
        this.setButtonsActive(false); // Bắt đầu với nút không active
    
        // Đợi hoàn thành animation xóa bàn
        this.scheduleOnce(function() {
            console.log("Table cleared, starting blind animation");
            
            // Đặt trạng thái game
            self.gameState.state = "dealing";
            
            // Chuẩn bị bài mới
            self.prepareNewCards();
            
            // Tính toán tiền cược mặc định
            var bigBlind = self.gameState.minBet;
            var anteAmount = bigBlind;
            
            // Vị trí người chơi
            var size = cc.director.getWinSize();
            var bottomPlayerPos = cc.p(size.width / 2, size.height * 0.19);
            var topPlayerPos = cc.p(size.width / 2, size.height * 0.88);
            
            // Hiển thị animation chip bay vào pot từ người chơi
            self.showChipsAtPlayer(bottomPlayerPos, anteAmount, function(bottomChips) {
                // Trừ tiền người chơi
                self.gameState.playerStack -= anteAmount;
                self.updateStackDisplay();
                
                self.flyChipsToPot(bottomChips, anteAmount, function() {
                    // Cập nhật pot
                    self.gameState.pot += anteAmount;
                    self.updatePotDisplay();
                    
                    // Animation chip bay từ AI
                    self.showChipsAtPlayer(topPlayerPos, anteAmount, function(topChips) {
                        // Trừ tiền AI
                        self.gameState.aiStack -= anteAmount;
                        self.updateStackDisplay();
                        
                        self.flyChipsToPot(topChips, anteAmount, function() {
                            // Cập nhật pot
                            self.gameState.pot += anteAmount;
                            self.updatePotDisplay();
                            
                            console.log("Blind animation completed, pot =", self.gameState.pot);
                            
                            // Chia bài
                            self.dealCards();
                            
                            // Chia flop
                            self.scheduleOnce(function() {
                                console.log("Dealing flop");
                                self.dealFlop();
                                
                                // Chuyển sang lượt người chơi
                                self.scheduleOnce(function() {
                                    console.log("Player turn after flop");
                                    self.gameState.state = "playerTurn";
                                    self.showActionButtons();
                                }, 1.5);
                            }, 2.0);
                        });
                    });
                });
            });
        }, 0.5);
    },
    
    // Chuẩn bị bài mới cho ván chơi
    prepareNewCards: function() {
        console.log("Preparing new cards");
        
        // Mảng theo dõi bài đã dùng
        var usedCards = [];
        
        // Tạo bộ bài 0-51
        var deck = [];
        for (var i = 0; i < 52; i++) {
            deck.push(i);
        }
        
        // Trộn bài
        this.shuffleDeck(deck);
        console.log("Shuffled deck:", deck);
        
        // Lấy 2 lá cho người chơi
        var playerCards = [deck.pop(), deck.pop()];
        usedCards = usedCards.concat(playerCards);
        
        // Lấy 2 lá cho AI
        var aiCards = [deck.pop(), deck.pop()];
        usedCards = usedCards.concat(aiCards);
        
        // Lấy 5 lá community cards
        var communityCards = [];
        for (var i = 0; i < 5; i++) {
            communityCards.push(deck.pop());
        }
        usedCards = usedCards.concat(communityCards);
        
        // Kiểm tra trùng lặp
        var uniqueCards = {};
        var duplicates = [];
        for (var i = 0; i < usedCards.length; i++) {
            var card = usedCards[i];
            if (uniqueCards[card]) {
                duplicates.push(card);
            } else {
                uniqueCards[card] = true;
            }
        }
        
        if (duplicates.length > 0) {
            console.error("DUPLICATE CARDS DETECTED:", duplicates);
            // Thực hiện lại nếu phát hiện trùng lặp
            return this.prepareNewCards();
        }
        
        // Lưu vào gameState
        this.gameState.playerCards = playerCards;
        this.gameState.aiCards = aiCards;
        this.gameState.communityCards = communityCards;
        
        console.log("Cards prepared successfully");
        console.log("Player cards:", playerCards);
        console.log("AI cards:", aiCards);
        console.log("Community cards:", communityCards);
    },
    
    // Trộn bài
    shuffleDeck: function(deck) {
        // Thuật toán Fisher-Yates
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    },
    
    // Thực hiện hành động fold
    performFold: function() {
        console.log("Performing fold action");
        
        this.gameState.state = "showdown";
        this.gameState.winner = "ai";
        
        // Cập nhật hiển thị
        this.updateStackDisplay();
        
        // Tạo container pot
        var potContainer = new cc.Node();
        potContainer.setPosition(this.potPosition);
        this.addChild(potContainer, 10);
        
        // Tính phí 4%
        var totalPot = this.gameState.pot;
        var amountAfterFee = totalPot * 0.96;
        
        console.log("AI wins by fold, pot:", totalPot, "after fee:", amountAfterFee);
        
        var self = this;
        
        // Animation chip bay từ pot đến AI
        this.flyChipsFromPotToPlayer(this.topPlayer.getPosition(), amountAfterFee, function() {
            // Cập nhật tiền
            self.gameState.aiStack += amountAfterFee;
            self.gameState.pot = 0;
            
            // Cân bằng stack
            self.balanceAIStack();
            
            // Cập nhật hiển thị
            self.updateStackDisplay();
            self.updatePotDisplay();
            
            // Bắt đầu ván mới
            self.scheduleOnce(function() {
                self.startNewHand();
            }, 1.5);
        });

        this.buttonActionInProgress = false;
    },
    
    // Thực hiện hành động all-in
    performAllIn: function() {
        console.log("Performing all-in action");
        
        var allInAmount = this.gameState.playerStack;
        console.log("Player all-in amount:", allInAmount);
        
        // Đặt stack về 0
        this.gameState.playerStack = 0;
        
        // Cập nhật hiển thị
        this.updateStackDisplay();
        
        // Tạo container giả
        var playerContainer = new cc.Node();
        if (this.bottomPlayer) {
            playerContainer.setPosition(this.bottomPlayer.getPosition());
        } else {
            var size = cc.director.getWinSize();
            playerContainer.setPosition(size.width / 2, size.height * 0.19);
        }
        this.addChild(playerContainer, 10);
        
        var self = this;
        
        // Animation chip bay đến pot
        this.flyChipsToPot(playerContainer, allInAmount, function() {
            // Cập nhật pot
            self.gameState.pot += allInAmount;
            console.log("Updated pot after all-in:", self.gameState.pot);
            
            // Cập nhật hiển thị
            self.updateStackDisplay();
            self.updatePotDisplay();
            
            // AI quyết định
            self.scheduleOnce(function() {
                self.aiDecision();
            }, 1.0);
        });
        this.buttonActionInProgress = false;
    },
    
    // AI quyết định theo/fold
    aiDecision: function() {
        // Đánh giá bài của AI
        var handValue = this.evaluateHand(this.gameState.aiCards, this.gameState.communityCards);
        
        // AI quyết định dựa trên giá trị bài
        if (handValue >= 1 || Math.random() < 0.3) { // 30% cơ hội AI sẽ theo bài
            console.log("AI decides to call");
            
            // AI theo bài
            var callAmount = this.gameState.aiStack;  // All-in
            this.gameState.aiStack = 0;
            this.gameState.pot += callAmount;
            
            // Tạo container giả
            var aiContainer = new cc.Node();
            if (this.topPlayer) {
                aiContainer.setPosition(this.topPlayer.getPosition());
            } else {
                var size = cc.director.getWinSize();
                aiContainer.setPosition(size.width / 2, size.height * 0.88);
            }
            this.addChild(aiContainer, 10);
            
            var self = this;
            
            // Animation chip bay đến pot
            this.flyChipsToPot(aiContainer, callAmount, function() {
                // Cập nhật hiển thị
                self.updateStackDisplay();
                self.updatePotDisplay();
                
                // Hiển thị bài của AI
                self.showAICards();
                
                // Chia turn và river
                self.scheduleOnce(function() {
                    // Chia turn
                    self.dealTurnCard();
                    
                    // Chia river
                    self.scheduleOnce(function() {
                        self.dealRiverCard();
                        
                        // Showdown
                        self.scheduleOnce(function() {
                            self.showdown();
                        }, 1.0);
                    }, 1.0);
                }, 1.0);
            });
        } else {
            console.log("AI decides to fold");
            
            // AI fold
            this.gameState.state = "showdown";
            this.gameState.winner = "player";
            
            // Tạo container giả
            var potContainer = new cc.Node();
            potContainer.setPosition(this.potPosition);
            this.addChild(potContainer, 10);
            
            // Tính phí 4%
            var totalPot = this.gameState.pot;
            var amountAfterFee = totalPot * 0.96;
            
            console.log("Player wins by fold, pot:", totalPot, "after fee:", amountAfterFee);
            
            var self = this;
            
            // Animation chip bay từ pot đến người chơi
            this.flyChipsFromPotToPlayer(self.bottomPlayer.getPosition(), amountAfterFee, function() {
                // Cập nhật tiền
                self.gameState.playerStack += amountAfterFee;
                self.gameState.pot = 0;
                
                // Cân bằng stack
                self.balancePlayerStack();
                
                // Cập nhật hiển thị
                self.updateStackDisplay();
                self.updatePotDisplay();
                
                // Bắt đầu ván mới
                self.scheduleOnce(function() {
                    self.startNewHand();
                }, 3.0);
            });
        }
    },

    dealCards: function() {
        var size = cc.director.getWinSize();
        var self = this;
        
        // Vị trí bắt đầu chia bài (giữa bàn)
        var startPos = cc.p(size.width / 2, size.height / 2);
        
        // Lấy vị trí thực tế của người chơi từ các đối tượng
        var bottomPlayerPos = this.bottomPlayer ? this.bottomPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.19);
        var topPlayerPos = this.topPlayer ? this.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);
        
        console.log("Player positions - Bottom:", bottomPlayerPos.x, bottomPlayerPos.y, "Top:", topPlayerPos.x, topPlayerPos.y);
        
        //------------------------
        // BOTTOM PLAYER CARDS (Người chơi thật)
        //------------------------
        
        // Sử dụng bài từ gameState
        var playerCard1 = this.gameState.playerCards[0];
        var playerCard2 = this.gameState.playerCards[1];
        
        console.log("Dealing player cards:", playerCard1, playerCard2);
        
        // Các thông số tương đối dựa trên tableScale
        var cardXOffsetFromPlayer = 120 * this.tableScale; // Khoảng cách X từ vị trí người chơi
        var cardOverlap = 50 * this.tableScale; // Độ chồng lấp giữa các lá bài
        
        // Tính toán vị trí X dựa trên vị trí người chơi
        var higherCardPosX = bottomPlayerPos.x + cardXOffsetFromPlayer;
        var lowerCardPosX = higherCardPosX + cardOverlap;
        
        // Vị trí Y dựa trên vị trí người chơi, có thể thêm offset nếu cần
        var cardOffsetY = -20 * this.tableScale; // Giảm độ cao 30 đơn vị (điều chỉnh con số này)
        var cardsY = bottomPlayerPos.y + cardOffsetY; // Thêm offset vào vị trí Y
        
        // Vị trí cuối cùng cho mỗi lá bài 
        var cardPos1 = cc.p(higherCardPosX, cardsY);
        var cardPos2 = cc.p(lowerCardPosX, cardsY);
        
        //------------------------
        // TOP PLAYER CARDS (AI)
        //------------------------
        
        // Tương tự, tính toán vị trí cho lá bài trên cùng dựa trên vị trí topPlayer
        var topCardOffsetY = -20 * this.tableScale; // Offset nhỏ theo trục Y
        var topCardOffsetX = 10 * this.tableScale; // Khoảng cách từ vị trí người chơi
        var topCardOverlap = 10 * this.tableScale; // Độ chồng lấp giữa các lá bài
        
        // Vị trí Y dựa trên vị trí topPlayer
        var topCardY = topPlayerPos.y + topCardOffsetY;
        
        // Thêm offset chung theo trục X (dương là sang phải, âm là sang trái)
        var topCardCommonOffsetX = 40 * this.tableScale; // Di chuyển cả hai lá bài sang trái 30 đơn vị
    
        var topCardLeftPosX = topPlayerPos.x - topCardOffsetX + topCardCommonOffsetX;
        var topCardRightPosX = topPlayerPos.x + topCardOffsetX + topCardCommonOffsetX;
        
        // Vị trí cuối cùng cho các lá bài top player
        var topCardPos1 = cc.p(topCardLeftPosX, topCardY);
        var topCardPos2 = cc.p(topCardRightPosX, topCardY);
        
        // Góc nghiêng cho lá bài
        var rotationAngle1 = -14;
        var rotationAngle2 = 14;
        
        //------------------------
        // CARD SCALES
        //------------------------
        
        // Scale cho bài - điều chỉnh để phù hợp
        var topCardScale = this.tableScale * 0.45;
        var bottomCardScale = this.tableScale * 0.85;
        
        //------------------------
        // BOTTOM PLAYER CARD CREATION & ANIMATION
        //------------------------
        
        // Phát âm thanh chia bài
        this.soundManager.play("deal");
        
        // 1. Chia lá bài đầu tiên cho bottom player
        var card1 = new cc.Sprite(this.getCardTexture(playerCard1));
        card1.setPosition(startPos);
        card1.setScale(0);
        card1.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        this.addChild(card1, 4);
        
        // 2. Chia lá bài thứ hai cho bottom player
        var card2 = new cc.Sprite(this.getCardTexture(playerCard2));
        card2.setPosition(startPos);
        card2.setScale(0);
        card2.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        this.addChild(card2, 5);
        
        // Chia bài đồng thời cho bottom player
        var dealCard1 = cc.Sequence.create(
            cc.DelayTime.create(0.3),
            cc.Spawn.create(
                cc.MoveTo.create(0.5, cardPos1),
                cc.ScaleTo.create(0.5, bottomCardScale)
            )
        );
        
        var dealCard2 = cc.Sequence.create(
            cc.DelayTime.create(0.3),
            cc.Spawn.create(
                cc.MoveTo.create(0.5, cardPos2),
                cc.ScaleTo.create(0.5, bottomCardScale)
            )
        );
        
        //------------------------
        // TOP PLAYER CARD CREATION & ANIMATION
        //------------------------
        
        // 3. Chia hai lá bài cho top player (úp) với lá bên phải đè lên lá bên trái
        var topCard1 = new cc.Sprite(this.cardBaseUrl + "card_back_bg.png");
        topCard1.setPosition(startPos);
        topCard1.setScale(0);
        topCard1.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        this.addChild(topCard1, 4);
        
        var topCard2 = new cc.Sprite(this.cardBaseUrl + "card_back_bg.png");
        topCard2.setPosition(startPos);
        topCard2.setScale(0);
        topCard2.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        this.addChild(topCard2, 5);
        
        var dealTopCards1 = cc.Sequence.create(
            cc.DelayTime.create(1.0),
            cc.Spawn.create(
                cc.MoveTo.create(0.5, topCardPos1),
                cc.ScaleTo.create(0.5, topCardScale),
                cc.RotateTo.create(0.5, rotationAngle1)
            )
        );
        
        var dealTopCards2 = cc.Sequence.create(
            cc.DelayTime.create(1.0),
            cc.Spawn.create(
                cc.MoveTo.create(0.5, topCardPos2),
                cc.ScaleTo.create(0.5, topCardScale),
                cc.RotateTo.create(0.5, rotationAngle2)
            ),
            cc.CallFunc.create(function() {
                // After dealing player cards, highlight bottom cards
                self.highlightBottomCards(card1, card2);
            })
        );
        
        //------------------------
        // RUN ANIMATIONS
        //------------------------
        
        // Chạy các animation
        card1.runAction(dealCard1);
        card2.runAction(dealCard2);
        topCard1.runAction(dealTopCards1);
        topCard2.runAction(dealTopCards2);
    },
    
    // Thêm phương thức highlightBottomCards
    highlightBottomCards: function(card1, card2) {
        // Làm hiệu ứng nhấp nháy cho lá bài của người chơi
        var highlight = cc.Sequence.create(
            cc.ScaleTo.create(0.15, card1.getScale() * 1.1),
            cc.ScaleTo.create(0.15, card1.getScale())
        );
        
        card1.runAction(highlight);
        
        var highlight2 = cc.Sequence.create(
            cc.DelayTime.create(0.1),
            cc.ScaleTo.create(0.15, card2.getScale() * 1.1),
            cc.ScaleTo.create(0.15, card2.getScale())
        );
        
        card2.runAction(highlight2);
    },

      // Phương thức lấy texture cho lá bài từ giá trị số
getCardTexture: function(cardValue) {
// Convert numerical value to card image
// 0-12: Spades (A,2,3,...,K)
// 13-25: Hearts (A,2,3,...,K)
// 26-38: Clubs (A,2,3,...,K)
// 39-51: Diamonds (A,2,3,...,K)

// Xác định chất bài (suit)
var suitMap = {
0: "number_1", // Spades
1: "number_2", // Hearts
2: "number_3", // Clubs
3: "number_4"  // Diamonds
};
var suitNumber = Math.floor(cardValue / 13);
var suit = suitMap[suitNumber];

// Xác định giá trị bài (value)
var faceValue = cardValue % 13;
var valueMap;

// Kiểm tra nếu là lá J, Q, K, A thì dùng chữ cái, ngược lại dùng số
if (faceValue === 0) { // Ace
valueMap = "_a";
} else if (faceValue === 10) { // Jack
valueMap = "_j";
} else if (faceValue === 11) { // Queen
valueMap = "_q";
} else if (faceValue === 12) { // King
valueMap = "_k";
} else { // 2-10
valueMap = "_" + (faceValue + 1);
}

// Tạo đường dẫn đầy đủ đến tệp ảnh
return this.cardBaseUrl + suit + valueMap + ".png";
},

// Khởi tạo pot
initPot: function() {
// Cập nhật potPosition bất kể nó đã tồn tại chưa
var size = cc.director.getWinSize();
this.potPosition = cc.p(size.width / 2, size.height / 2 + 150); // Sử dụng giá trị cố định thay vì tableScale
console.log("Setting pot position to Y: " + this.potPosition.y);

// Xóa bất kỳ pot cũ nào nếu tồn tại
if (this.potBg) {
this.potBg.removeFromParent(true);
this.potBg = null;
}
if (this.potAmountLabel) {
this.potAmountLabel.removeFromParent(true);
this.potAmountLabel = null;
}

// Tạo background mới
var potBg = new cc.Sprite("https://tuancho670.github.io/Web-App/assets/Chips/deep_chips_bg.png");
potBg.setPosition(this.potPosition);
potBg.setScale(this.tableScale * 1.5);
this.addChild(potBg, 5);
this.potBg = potBg;

// Tạo label hiển thị số tiền pot
this.potAmountLabel = new cc.LabelTTF("0", "Arial Bold", 40 * this.tableScale);
this.potAmountLabel.setPosition(this.potPosition.x, this.potPosition.y - 4);
this.potAmountLabel.setColor(cc.color(255, 255, 255));
this.addChild(this.potAmountLabel, 6);

// Hiển thị pot ngay từ đầu với giá trị 0
this.potBg.setVisible(true);
this.potAmountLabel.setVisible(true);

// Khởi tạo giá trị ban đầu
this.potAmount = 0;

console.log("Pot initialized at Y: " + this.potPosition.y);
},

// Cập nhật số tiền trong pot
updatePotDisplay: function() {
// Đảm bảo pot đã được khởi tạo
if (!this.potBg || !this.potAmountLabel) {
this.initPot();
}

// Đồng bộ hóa giữa potAmount và gameState.pot
this.potAmount = this.gameState.pot;

// Đặt giá trị pot label từ gameState
if (this.potAmountLabel) {
// Kiểm tra xem pot có phải số nguyên không
if (Number.isInteger(this.gameState.pot)) {
    this.potAmountLabel.setString(this.gameState.pot.toString());
} else {
    // Nếu có phần thập phân, hiển thị với tối đa 2 chữ số thập phân
    this.potAmountLabel.setString(this.gameState.pot.toFixed(2));
}
}

console.log("Pot display updated to:", this.gameState.pot);

// Hiệu ứng nhấp nháy khi cập nhật
if (this.potBg) {
this.potBg.runAction(cc.Sequence.create(
    cc.ScaleTo.create(0.1, this.tableScale * 1.6),
    cc.ScaleTo.create(0.1, this.tableScale * 1.5)
));
}

if (this.potAmountLabel) {
this.potAmountLabel.runAction(cc.Sequence.create(
    cc.ScaleTo.create(0.1, 1.1),
    cc.ScaleTo.create(0.1, 1.0)
));
}
},

// Hiển thị chip tại người chơi
showChipsAtPlayer: function(playerPos, numChips, callback) {
var self = this;
var size = cc.director.getWinSize();

// Đảm bảo vị trí người chơi hợp lệ
if (!playerPos) {
playerPos = cc.p(size.width / 2, size.height / 3);
}

// Xác định vị trí của chip dựa vào vị trí người chơi (top hay bottom)
var isTopPlayer = playerPos.y > size.height / 2;
var chipPos;

if (isTopPlayer) {
// Top player: đặt chip xuống dưới avatar
chipPos = cc.p(playerPos.x, playerPos.y - 140);
} else {
// Bottom player: đặt chip lên trên avatar
chipPos = cc.p(playerPos.x, playerPos.y + 50);
}

// Tạo container để chứa các chip
var container = new cc.Node();
container.setPosition(chipPos);
this.addChild(container, 10);

// Số lượng chip hiển thị - giống với flyChipsToPot
var numChipsToShow = 3;

// Thêm nhiều chip xếp chồng
for (var i = 0; i < numChipsToShow; i++) {
var chip = new cc.Sprite(this.chipImages.orange);
// Tạo hiệu ứng xếp tầng với một chút offset
chip.setPosition(cc.p(0, i * 4)); 
chip.setScale(this.tableScale * 1.6);
container.addChild(chip, i + 1);
}

// Hiển thị số tiền
var chipAmount = numChips;
var chipText = chipAmount >= 100 ? chipAmount.toLocaleString() : chipAmount.toFixed(2);

var amountLabel = new cc.LabelTTF(chipText, "Arial Bold", 30 * this.tableScale);

// Vị trí số tiền khác nhau cho top và bottom player
if (isTopPlayer) {
// Top player: số tiền ở bên trái
amountLabel.setPosition(cc.p(-35, 0));
} else {
// Bottom player: số tiền ở bên phải
amountLabel.setPosition(cc.p(35, 0));
}

amountLabel.setColor(cc.color(255, 255, 255));
container.addChild(amountLabel, numChipsToShow + 1);

// Hiệu ứng xuất hiện từ từ
container.setOpacity(0); // Bắt đầu với opacity = 0

// Hiệu ứng fade in và nhấp nháy
container.runAction(cc.Sequence.create(
cc.FadeIn.create(0.2),
cc.ScaleTo.create(0.1, 1.05),
cc.ScaleTo.create(0.1, 1.0),
cc.CallFunc.create(function() {
    if (callback) callback(container);
})
));

return container;
},

// Animation bay chip vào pot
flyChipsToPot: function(startContainer, amount, callback) {
var self = this;
var size = cc.director.getWinSize();

this.soundManager.play("pot");

console.log("Flying chips to pot, amount:", amount);

try {
// 1. Đảm bảo potPosition đã được khởi tạo
if (!this.potPosition) {
    this.potPosition = {x: size.width / 2, y: size.height / 2 + 90};
}

// 2. Đảm bảo pot background đã hiển thị
if (this.potBg) {
    this.potBg.setVisible(true);
    this.potAmountLabel.setVisible(true);
}

// 3. Lấy vị trí bắt đầu từ container
var startPos;
if (startContainer && startContainer.getPosition) {
    var containerPos = startContainer.getPosition();
    if (containerPos && typeof containerPos.x === 'number') {
        startPos = {x: containerPos.x, y: containerPos.y};
    } else {
        // Fallback nếu không lấy được vị trí
        startPos = {x: size.width / 2, y: size.height / 3};
    }
} else {
    // Fallback nếu không có container
    startPos = {x: size.width / 2, y: size.height / 3};
}

// 4. Ẩn container gốc sau khi lấy vị trí
if (startContainer) {
    startContainer.setVisible(false);
}

// 5. Scale cho chip
var chipScale = this.tableScale * 1.6;

// 6. Số lượng chip dựa trên số tiền (tối thiểu 3, tối đa 8)
var numChips = Math.min(Math.max(3, Math.floor(amount / 100) + 3), 8);
console.log("Chips to display:", numChips);
var chipTracker = { count: 0 };

// 7. Vị trí đích
var endPos = {x: this.potPosition.x, y: this.potPosition.y};

// 8. Tạo và animate từng chip
for (var i = 0; i < numChips; i++) {
    // Tạo chip mới
    var chip = new cc.Sprite(this.chipImages.orange);
    chip.setPosition(startPos.x, startPos.y);
    chip.setScale(chipScale);
    this.addChild(chip, 15 - i);
    
    // Delay cho mỗi chip
    var delay = i * 0.1;
    
    // Di chuyển chip đến pot với đường cong
    var bezierConfig = [
        cc.p(startPos.x, startPos.y), // Điểm bắt đầu
        cc.p((startPos.x + endPos.x) / 2, Math.max(startPos.y, endPos.y) + 30), // Điểm điều khiển
        cc.p(endPos.x, endPos.y) // Điểm kết thúc
    ];
    
    chip.runAction(cc.Sequence.create(
        cc.DelayTime.create(delay),
        cc.BezierTo.create(0.5, bezierConfig),
        cc.CallFunc.create(function(target) {
            // Hiệu ứng nảy và biến mất
            target.runAction(cc.Sequence.create(
                cc.ScaleTo.create(0.05, chipScale * 1.2),
                cc.ScaleTo.create(0.05, chipScale),
                cc.FadeOut.create(0.1),
                cc.RemoveSelf.create(),
                cc.CallFunc.create(function() {
                    // Đếm số chip đã hoàn thành
                    chipTracker.count++;
                    
                    // Khi tất cả chip đã bay xong
                    if (chipTracker.count === numChips) {
                        // Hiệu ứng ở pot
                        if (self.potBg) {
                            self.potBg.runAction(cc.Sequence.create(
                                cc.ScaleTo.create(0.05, self.tableScale * 1.6),
                                cc.ScaleTo.create(0.05, self.tableScale * 1.5)
                            ));
                        }
                        
                        // Xóa container gốc
                        if (startContainer && startContainer.parent) {
                            try {
                                startContainer.removeFromParent(true);
                            } catch (e) {
                                console.log("Error removing container:", e);
                            }
                        }
                        
                        // Gọi callback khi hoàn thành
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                })
            ));
        })
    ));
}
} catch (e) {
console.error("Error in flyChipsToPot:", e);

// Đảm bảo callback luôn được gọi
if (typeof callback === 'function') {
    setTimeout(callback, 300);
}

// Xóa container gốc nếu có lỗi
if (startContainer && startContainer.parent) {
    try {
        startContainer.removeFromParent(true);
    } catch (e) {
        console.log("Error removing container:", e);
    }
}
}
},

// Animation bay chip từ pot về người chơi
flyChipsFromPotToPlayer: function(targetPos, amount, callback) {
var self = this;
var size = cc.director.getWinSize();

this.soundManager.play("chipWin");

console.log("Flying chips from pot to player, amount:", amount);

try {
// Vị trí bắt đầu là pot
var startPos = this.potPosition;

// Scale cho chip
var chipScale = this.tableScale * 1.6;

// Số lượng chip dựa trên số tiền (tối thiểu 3, tối đa 8)
var numChips = Math.min(Math.max(3, Math.floor(amount / 100) + 3), 8);
console.log("Chips to display:", numChips);
var chipTracker = { count: 0 };

// Tạo và animate từng chip
for (var i = 0; i < numChips; i++) {
    // Tạo chip mới
    var chip = new cc.Sprite(this.chipImages.orange);
    chip.setPosition(startPos.x, startPos.y);
    chip.setScale(chipScale);
    this.addChild(chip, 15 - i);
    
    // Delay cho mỗi chip
    var delay = i * 0.1;
    
    // Di chuyển chip từ pot đến người chơi với đường cong
    var bezierConfig = [
        cc.p(startPos.x, startPos.y), // Điểm bắt đầu
        cc.p((startPos.x + targetPos.x) / 2, Math.max(startPos.y, targetPos.y) + 30), // Điểm điều khiển
        cc.p(targetPos.x, targetPos.y) // Điểm kết thúc
    ];
    
    chip.runAction(cc.Sequence.create(
        cc.DelayTime.create(delay),
        cc.BezierTo.create(0.5, bezierConfig),
        cc.CallFunc.create(function(target) {
            // Hiệu ứng nảy và biến mất
            target.runAction(cc.Sequence.create(
                cc.ScaleTo.create(0.05, chipScale * 1.2),
                cc.ScaleTo.create(0.05, chipScale),
                cc.FadeOut.create(0.1),
                cc.RemoveSelf.create(),
                cc.CallFunc.create(function() {
                    // Đếm số chip đã hoàn thành
                    chipTracker.count++;
                    
                    // Khi tất cả chip đã bay xong
                    if (chipTracker.count === numChips) {
                        // Hiển thị số chip được chia về trên đầu avatar
                        self.showWinningAmount(targetPos, amount);
                        
                        // Gọi callback sau khi hiệu ứng hoàn tất
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                })
            ));
        })
    ));
}
} catch (e) {
console.error("Error in flyChipsFromPotToPlayer:", e);

// Đảm bảo callback luôn được gọi
if (typeof callback === 'function') {
    setTimeout(callback, 300);
}
}
},

// Hiển thị số tiền thắng
showWinningAmount: function(position, amount) {
var size = cc.director.getWinSize();

// Hiển thị chính xác số chip thắng được, giữ nguyên số thập phân
var displayAmount;
if (Number.isInteger(amount)) {
displayAmount = amount.toString();
} else {
// Nếu có phần thập phân, hiển thị tối đa 2 chữ số thập phân
displayAmount = amount.toFixed(2);
}

// Tạo label hiển thị số chip thắng được
var winLabel = new cc.LabelTTF("+" + displayAmount, "Arial Bold", 50 * this.tableScale);

// Vị trí ban đầu - ngay trên đầu avatar
winLabel.setPosition(position.x, position.y + 60 * this.tableScale);

// Màu xanh lá để biểu thị thắng
winLabel.setColor(cc.color(0, 255, 0));

// Thêm hiệu ứng glow xung quanh text
winLabel.enableShadow(cc.color(0, 100, 0, 255), cc.size(2, 2), 2);

// Thêm vào layer
this.addChild(winLabel, 20);

// Hiệu ứng animation: hiện lên, di chuyển lên trên và mờ dần
winLabel.runAction(cc.Sequence.create(
cc.Spawn.create(
    cc.MoveBy.create(1.0, cc.p(0, 40 * this.tableScale)),
    cc.Sequence.create(
        cc.ScaleTo.create(0.2, 1.2),
        cc.ScaleTo.create(0.2, 1.0),
        cc.DelayTime.create(0.4),
        cc.FadeOut.create(0.6)
    )
),
cc.RemoveSelf.create()
));

return winLabel;
},

// Hiển thị bài của AI
showAICards: function() {
var self = this;
var size = cc.director.getWinSize();

console.log("Showing AI cards...");

this.soundManager.play("cardReveal");

// Lấy vị trí của avatar AI
var topPlayerPos = this.topPlayer ? this.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);

// Lấy bài của AI từ gameState
var aiCard1 = this.gameState.aiCards[0];
var aiCard2 = this.gameState.aiCards[1];

console.log("AI cards:", aiCard1, aiCard2);

// Tìm và xóa lá bài úp cũ
var backCards = [];
var children = this.getChildren();
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (child instanceof cc.Sprite) {
    var url = "";
    if (child.getTexture && child.getTexture()) {
        url = child.getTexture().url || "";
    }
    
    // Kiểm tra nếu là lá bài úp của AI
    if (url.indexOf("card_back") >= 0) {
        backCards.push(child);
    }
}
}

// Xóa các lá bài úp cũ
for (var i = 0; i < backCards.length; i++) {
backCards[i].removeFromParent(true);
}

console.log("Removed " + backCards.length + " back cards");

// Tính toán vị trí mới cho 2 lá bài to đùng tại vị trí avatar AI
// Giữ cùng vị trí Y với avatar nhưng cách nhau xa hơn theo trục X
var cardSpacing = 24; // Khoảng cách cố định 30 pixel giữa các lá bài

// Scale lớn hơn cho lá bài
var cardScale = this.tableScale * 0.80; // Tăng scale để lá bài lớn hơn

// Vị trí cho 2 lá bài (tại vị trí avatar AI)
var cardPos1 = cc.p(topPlayerPos.x - cardSpacing, topPlayerPos.y);
var cardPos2 = cc.p(topPlayerPos.x + cardSpacing, topPlayerPos.y);

// Tạo và hiển thị lá bài thật của AI với hiệu ứng lật
var showCard1 = new cc.Sprite(this.getCardTexture(aiCard1));
showCard1.setPosition(cardPos1);
showCard1.setScale(0); // Bắt đầu với scale = 0
showCard1.cardFlag = true; // Đánh dấu là card để dễ xóa sau
this.addChild(showCard1, 20); // zOrder cao để hiển thị trên cùng

var showCard2 = new cc.Sprite(this.getCardTexture(aiCard2));
showCard2.setPosition(cardPos2);
showCard2.setScale(0); // Bắt đầu với scale = 0
showCard2.cardFlag = true; // Đánh dấu là card để dễ xóa sau
this.addChild(showCard2, 21); // zOrder cao để hiển thị trên cùng

// Hiệu ứng hiện lá bài với animation mở rộng
showCard1.runAction(cc.Sequence.create(
cc.ScaleTo.create(0.3, cardScale),
cc.CallFunc.create(function() {
    // Thêm hiệu ứng nhấp nháy sau khi hiện
    showCard1.runAction(cc.Sequence.create(
        cc.ScaleTo.create(0.1, cardScale * 1.05),
        cc.ScaleTo.create(0.1, cardScale)
    ));
})
));

showCard2.runAction(cc.Sequence.create(
cc.DelayTime.create(0.1), // Delay nhẹ để tạo hiệu ứng lần lượt
cc.ScaleTo.create(0.3, cardScale),
cc.CallFunc.create(function() {
    // Thêm hiệu ứng nhấp nháy sau khi hiện
    showCard2.runAction(cc.Sequence.create(
        cc.ScaleTo.create(0.1, cardScale * 1.05),
        cc.ScaleTo.create(0.1, cardScale)
    ));
})
));

console.log("Added large AI cards at avatar position");
},

// Chia flop (3 lá bài community)
dealFlop: function() {
var size = cc.director.getWinSize();
var self = this;

// Scale cho các lá bài flop
this.flopCardScale = this.tableScale * 0.9;

// Lấy giá trị của 3 lá flop từ gameState
var flopValues = this.gameState.communityCards.slice(0, 3);
console.log("Dealing flop cards:", flopValues);

// Lên lịch cho hiệu ứng flop sau khi chia xong bài player
this.scheduleOnce(function() {
// Chỉ lật lá bài đầu tiên với tham số callback
self.flipFirstCard(flopValues);
}, 1.0);
},

// Phương thức lật lá bài đầu tiên của flop
flipFirstCard: function(cardValues) {
var self = this;

// URL của sprite sheet
var spriteSheetUrl = "https://tuancho670.github.io/Web-App/assets/card/card_turn_ani.png";

// Thông tin frame đầu tiên
var firstFrameInfo = {
x: 204, 
y: 398, 
width: 130, 
height: 200,
rotated: true
};

// Tính toán vị trí cho các lá bài community
if (!this.flopCardPositions || this.flopCardPositions.length === 0) {
var size = cc.director.getWinSize();
var centerX = size.width / 2;
var centerY = size.height / 2;

// Sử dụng tableScale cho tất cả các tính toán
var baseCardSpacing = 80; // Giá trị cơ bản cho khoảng cách
var cardSpacing = baseCardSpacing * this.tableScale;

// Thêm offset Y để điều chỉnh độ cao của các lá bài flop
var flopYOffset = 35 * this.tableScale; // Giá trị âm để đẩy xuống, dương để đẩy lên

// Tính toán vị trí Y mới cho các lá bài flop
var flopY = centerY + flopYOffset;

// Offset để di chuyển sang trái (cũng theo tableScale)
var groupOffsetX = -85 * this.tableScale;

this.flopCardPositions = [
    {x: centerX - cardSpacing + groupOffsetX, y: flopY},
    {x: centerX + groupOffsetX, y: flopY},
    {x: centerX + cardSpacing + groupOffsetX, y: flopY}
];

// Vị trí cho turn và river cũng sử dụng Y đã điều chỉnh
this.turnCardPosition = {x: centerX + cardSpacing * 2 + groupOffsetX, y: flopY};
this.riverCardPosition = {x: centerX + cardSpacing * 3 + groupOffsetX, y: flopY};
}

// Lấy vị trí lá bài đầu tiên
var position = this.flopCardPositions[0];
var cardValue = cardValues[0];

// Tải sprite sheet
cc.textureCache.addImageAsync(spriteSheetUrl, function() {
var texture = cc.textureCache.getTextureForKey(spriteSheetUrl);
if (!texture) {
    console.error("Không thể tải texture:", spriteSheetUrl);
    return;
}

// Tạo sprite với frame đầu tiên
var rect = cc.rect(
    firstFrameInfo.x,
    firstFrameInfo.y,
    firstFrameInfo.rotated ? firstFrameInfo.height : firstFrameInfo.width,
    firstFrameInfo.rotated ? firstFrameInfo.width : firstFrameInfo.height
);

var flipSprite = new cc.Sprite(texture, rect);
flipSprite.setPosition(position);

// Scale phù hợp với bàn
flipSprite.setScale(self.flopCardScale);

// Xoay sprite nếu cần
if (firstFrameInfo.rotated) {
    flipSprite.setRotation(-90);
}

// Tiếp tục phương thức flipFirstCard
self.addChild(flipSprite, 10);

// Tạo animation lật bài
var animation = self.createCardFlipAnimation();
var animate = cc.Animate.create(animation);

// Chạy animation và hiển thị lá bài thật khi kết thúc
flipSprite.runAction(cc.Sequence.create(
    animate,
    cc.CallFunc.create(function() {
        // Xóa sprite animation
        flipSprite.removeFromParent(true);
        
        // Hiển thị lá bài thật đầu tiên
        var firstCard = self.showFirstCard(cardValue, position);
        
        // Sau khi hiện lá đầu tiên, chờ 0.4s rồi slide hai lá còn lại
        self.scheduleOnce(function() {
            self.slideOtherCards(cardValues.slice(1), firstCard);
        }, 0.4);
    })
));
});
},

// Hiển thị lá bài đầu tiên và trả về tham chiếu đến nó
showFirstCard: function(cardValue, position) {
var self = this;

this.soundManager.play("cardSlide");

// Tạo sprite cho lá bài thật
var card = new cc.Sprite(this.getCardTexture(cardValue));
card.setPosition(position);
card.setScale(this.flopCardScale);
card.cardFlag = true; // Đánh dấu là card để dễ xóa sau
this.addChild(card, 5);

// Hiệu ứng nhấp nháy
card.runAction(cc.Sequence.create(
cc.ScaleTo.create(0.1, this.flopCardScale * 1.1),
cc.ScaleTo.create(0.1, this.flopCardScale)
));

// Trả về tham chiếu đến lá bài để sử dụng sau
return card;
},

// Hiệu ứng slide ra từ lá bài đầu tiên
slideOtherCards: function(cardValues, firstCard) {
var self = this;
var delay = 0.25; // Độ trễ giữa các lá bài slide

this.soundManager.play("cardSlide");

// Vị trí bắt đầu (vị trí lá bài đầu tiên)
var startPos = this.flopCardPositions[0];

// Hiển thị từng lá bài với hiệu ứng slide
for (var i = 0; i < cardValues.length; i++) {
(function(index) {
    var finalPos = self.flopCardPositions[index + 1]; // Vị trí cuối cùng
    
    self.scheduleOnce(function() {
        // Tạo sprite cho lá bài thật
        var card = new cc.Sprite(self.getCardTexture(cardValues[index]));
        
        // Bắt đầu từ vị trí lá bài đầu tiên
        card.setPosition(startPos);
        card.setScale(self.flopCardScale);
        card.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        self.addChild(card, 5);
        
        // Hiệu ứng slide từ vị trí bắt đầu đến vị trí cuối cùng
        var slideAction = cc.Sequence.create(
            cc.MoveTo.create(0.25, finalPos), // Di chuyển đến vị trí cuối
            cc.CallFunc.create(function() {
                // Nhấp nháy khi đến vị trí
                card.runAction(cc.Sequence.create(
                    cc.ScaleTo.create(0.1, self.flopCardScale * 1.1),
                    cc.ScaleTo.create(0.1, self.flopCardScale)
                ));
            })
        );
        
        card.runAction(slideAction);
    }, delay * index);
})(i);
}

// Hiển thị nút sau khi tất cả lá bài đã được hiển thị
self.scheduleOnce(function() {
if (self.gameState.state === "playerTurn") {
    self.showActionButtons();
}
}, delay * cardValues.length + 0.5); // Đợi thêm 0.5s sau lá bài cuối
},

// Tạo animation lật bài từ 4 frame đầu tiên
createCardFlipAnimation: function() {
// Cache animation để tránh tạo lại nhiều lần
if (this._cachedCardFlipAnimation) {
return this._cachedCardFlipAnimation;
}

// Thông tin frames từ plist đã điều chỉnh
var frames = [
{frame: {x: 204, y: 398, width: 130, height: 200}, rotated: true},  // card_turn_ani1
{frame: {x: 2,   y: 398, width: 130, height: 200}, rotated: true},  // card_turn_ani2
{frame: {x: 204, y: 266, width: 130, height: 200}, rotated: true},  // card_turn_ani3
{frame: {x: 2,   y: 266, width: 130, height: 200}, rotated: true},  // card_turn_ani4
{frame: {x: 204, y: 134, width: 130, height: 200}, rotated: true},  // card_turn_ani5
{frame: {x: 2,   y: 134, width: 130, height: 200}, rotated: true},  // card_turn_ani6
{frame: {x: 204, y: 2,   width: 130, height: 200}, rotated: true},  // card_turn_ani7
{frame: {x: 2,   y: 2,   width: 130, height: 200}, rotated: true}   // card_turn_ani8
];

var spriteUrl = "https://tuancho670.github.io/Web-App/assets/card/card_turn_ani.png";

// Pre-load texture để đảm bảo nó đã được tải
if (!cc.textureCache.getTextureForKey(spriteUrl)) {
cc.textureCache.addImage(spriteUrl);
}

var animation = new cc.Animation();
var texture = cc.textureCache.getTextureForKey(spriteUrl);

// Tạo các frame cho animation
for (var i = 0; i < frames.length; i++) {
var frameInfo = frames[i];

// Tính toán rect dựa trên thông tin frame
var rect = cc.rect(
    frameInfo.frame.x,
    frameInfo.frame.y, 
    frameInfo.rotated ? frameInfo.frame.height : frameInfo.frame.width,
    frameInfo.rotated ? frameInfo.frame.width : frameInfo.frame.height
);

// Tạo sprite frame và thêm vào animation - KHÔNG thiết lập rotated
var spriteFrame = new cc.SpriteFrame(texture, rect);
animation.addSpriteFrame(spriteFrame);
}

// Thiết lập tốc độ animation
animation.setDelayPerUnit(0.027); // 25ms mỗi frame
animation.setRestoreOriginalFrame(false);

// Lưu animation vào cache
this._cachedCardFlipAnimation = animation;

return animation;
},

// Sửa lại dealTurnCard để sử dụng lá bài từ gameState
dealTurnCard: function() {
var self = this;
var position = this.turnCardPosition;

this.soundManager.play("cardSlide");

// Đảm bảo tính toán lại nếu chưa có vị trí
if (!position) {
var positions = this.calculateCardPositions();
position = positions.turnPosition;
}

// Lấy lá turn card từ gameState (lá thứ 4)
var turnCardValue = this.gameState.communityCards[3];
console.log("Dealing turn card:", turnCardValue);

var spriteSheetUrl = "https://tuancho670.github.io/Web-App/assets/card/card_turn_ani.png";

cc.textureCache.addImageAsync(spriteSheetUrl, function() {
var texture = cc.textureCache.getTextureForKey(spriteSheetUrl);
if (!texture) return;

var rect = cc.rect(204, 398, 200, 130);
var flipSprite = new cc.Sprite(texture, rect);
flipSprite.setPosition(position);
flipSprite.setScale(self.flopCardScale);
flipSprite.setRotation(-90);
self.addChild(flipSprite, 10);

var animation = self.createCardFlipAnimation();
var animate = cc.Animate.create(animation);

flipSprite.runAction(cc.Sequence.create(
    animate,
    cc.CallFunc.create(function() {
        flipSprite.removeFromParent(true);
        
        // Sử dụng lá bài từ gameState
        var turnCard = new cc.Sprite(self.getCardTexture(turnCardValue));
        turnCard.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        turnCard.setPosition(position);
        turnCard.setScale(self.flopCardScale);
        self.addChild(turnCard, 5);
        
        turnCard.runAction(cc.Sequence.create(
            cc.ScaleTo.create(0.1, self.flopCardScale * 1.1),
            cc.ScaleTo.create(0.1, self.flopCardScale)
        ));
    })
));
});
},

// Sửa lại dealRiverCard để sử dụng lá bài từ gameState
dealRiverCard: function() {
var self = this;
var position = this.riverCardPosition;

this.soundManager.play("cardSlide");

// Đảm bảo tính toán lại nếu chưa có vị trí
if (!position) {
var positions = this.calculateCardPositions();
position = positions.riverPosition;
}

// Lấy lá river card từ gameState (lá thứ 5)
var riverCardValue = this.gameState.communityCards[4];
console.log("Dealing river card:", riverCardValue);

var spriteSheetUrl = "https://tuancho670.github.io/Web-App/assets/card/card_turn_ani.png";

cc.textureCache.addImageAsync(spriteSheetUrl, function() {
var texture = cc.textureCache.getTextureForKey(spriteSheetUrl);
if (!texture) return;

var rect = cc.rect(204, 398, 200, 130);
var flipSprite = new cc.Sprite(texture, rect);
flipSprite.setPosition(position);
flipSprite.setScale(self.flopCardScale);
flipSprite.setRotation(-90);
self.addChild(flipSprite, 10);

var animation = self.createCardFlipAnimation();
var animate = cc.Animate.create(animation);

flipSprite.runAction(cc.Sequence.create(
    animate,
    cc.CallFunc.create(function() {
        flipSprite.removeFromParent(true);
        
        // Sử dụng lá bài từ gameState
        var riverCard = new cc.Sprite(self.getCardTexture(riverCardValue));
        riverCard.cardFlag = true; // Đánh dấu là card để dễ xóa sau
        riverCard.setPosition(position);
        riverCard.setScale(self.flopCardScale);
        self.addChild(riverCard, 5);
        
        riverCard.runAction(cc.Sequence.create(
            cc.ScaleTo.create(0.1, self.flopCardScale * 1.1),
            cc.ScaleTo.create(0.1, self.flopCardScale)
        ));
    })
));
});
},

// Phương thức tính toán vị trí của các lá bài
calculateCardPositions: function() {
var size = cc.director.getWinSize();
var centerX = size.width / 2;
var centerY = size.height / 2;
var self = this;

// Sử dụng tableScale để tính khoảng cách giữa các lá bài
var cardSpacing = 10 * this.tableScale; // Khoảng cách cố định nhân với tableScale

// Có thể điều chỉnh vị trí Y của các lá bài flop
var flopY = centerY; // Vị trí Y mặc định

// Điều chỉnh vị trí Y dựa trên tableScale nếu cần
var flopYOffset = 0 * this.tableScale; // Thêm offset nếu bạn muốn đẩy lên hoặc xuống
flopY += flopYOffset;

// Cập nhật vị trí của các lá bài flop
this.flopCardPositions = [
{x: centerX - cardSpacing, y: flopY},
{x: centerX, y: flopY},
{x: centerX + cardSpacing, y: flopY}
];

// Vị trí cho turn và river
this.turnCardPosition = {x: centerX + cardSpacing * 2, y: flopY};
this.riverCardPosition = {x: centerX + cardSpacing * 3, y: flopY};

console.log("Card positions calculated with tableScale=" + this.tableScale + ", spacing=" + cardSpacing);

return {
flopPositions: this.flopCardPositions,
turnPosition: this.turnCardPosition,
riverPosition: this.riverCardPosition
};
},

// Cập nhật hiển thị số chip/tiền của người chơi
updateStackDisplay: function() {
// Cập nhật hiển thị số tiền của người chơi
if (this.topPlayer && this.bottomPlayer) {
// Lặp qua tất cả các thành phần con của topPlayer (AI) để tìm label hiển thị tiền
var aiChipsLabel = null;
var children = this.topPlayer.getChildren();
for (var i = 0; i < children.length; i++) {
    if (children[i] instanceof cc.LabelTTF) {
        // Tìm label nằm ở vị trí Y thấp hơn (thường là label hiển thị số chip)
        if (children[i].getPositionY() < -90 * this.tableScale) {
            aiChipsLabel = children[i];
            break;
        }
    }
}

// Lặp qua tất cả các thành phần con của bottomPlayer (người chơi) để tìm label hiển thị tiền
var playerChipsLabel = null;
children = this.bottomPlayer.getChildren();
for (var i = 0; i < children.length; i++) {
    if (children[i] instanceof cc.LabelTTF) {
        // Tìm label nằm ở vị trí Y thấp hơn (thường là label hiển thị số chip)
        if (children[i].getPositionY() < -90 * this.tableScale) {
            playerChipsLabel = children[i];
            break;
        }
    }
}

// Cập nhật giá trị
if (aiChipsLabel) {
    // Kiểm tra xem giá trị có phải là số nguyên không
    if (Number.isInteger(this.gameState.aiStack)) {
        aiChipsLabel.setString(this.gameState.aiStack.toString());
    } else {
        // Hiển thị với 2 chữ số thập phân
        aiChipsLabel.setString(this.gameState.aiStack.toFixed(2));
    }
    console.log("Updated AI stack display to:", this.gameState.aiStack);
} else {
    console.log("AI chips label not found!");
}

if (playerChipsLabel) {
    // Kiểm tra xem giá trị có phải là số nguyên không
    if (Number.isInteger(this.gameState.playerStack)) {
        playerChipsLabel.setString(this.gameState.playerStack.toString());
    } else {
        // Hiển thị với 2 chữ số thập phân
        playerChipsLabel.setString(this.gameState.playerStack.toFixed(2));
    }
    console.log("Updated player stack display to:", this.gameState.playerStack);
} else {
    console.log("Player chips label not found!");
}
} else {
console.log("Players not initialized yet!");
}
},

displayWalletInfo: function() {
var size = cc.director.getWinSize();

// Xóa hiển thị cũ nếu có
if (this.walletLabel) {
this.walletLabel.removeFromParent(true);
this.walletLabel = null;
}

// Tạo label hiển thị thông tin ví
var walletInfo = "Ví: " + (Number.isInteger(this.gameState.playerWallet) ? 
                     this.gameState.playerWallet.toString() : 
                     this.gameState.playerWallet.toFixed(2)) + " chip";

// Tạo ví mới với font chữ lớn hơn
this.walletLabel = new cc.LabelTTF(walletInfo, "Arial", 50 * this.tableScale);

// Thay đổi vị trí ví lên góc trên bên trái
this.walletLabel.setPosition(size.width * 0.40, size.height * 0.95);  // Dịch sang phải

// Màu vàng nổi bật
this.walletLabel.setColor(cc.color(255, 215, 0));

// Thêm shadow để dễ đọc
this.walletLabel.enableShadow(cc.color(0, 0, 0, 255), cc.size(3, -3), 2);

// Thêm vào màn hình
this.addChild(this.walletLabel, 10);
},

// Sửa lại phương thức refillPlayerStack trong MyScene
refillPlayerStack: function() {
    // Kiểm tra xem người chơi có đủ chip mặc định không
    if (this.gameState.playerStack < this.gameState.playerDefaultStack) {
        console.log("Player stack is below default amount, refilling from wallet");

        var amountNeeded = this.gameState.playerDefaultStack - this.gameState.playerStack;
        console.log("Amount needed to refill:", amountNeeded);

        // Kiểm tra xem wallet có đủ chip để nạp không
        if (this.gameState.playerWallet >= amountNeeded) {
            // Trừ chip từ ví để nạp vào stack
            const oldWalletAmount = this.gameState.playerWallet;
            this.gameState.playerWallet -= amountNeeded;
            this.gameState.playerStack = this.gameState.playerDefaultStack;
            
            console.log("Refilled player stack to:", this.gameState.playerDefaultStack);
            console.log("Player wallet reduced from", oldWalletAmount, "to", this.gameState.playerWallet);
            
            // Đồng bộ số dư ví mới về server ngay lập tức
            if (window.GameBackEndBridge) {
                window.GameBackEndBridge.updateWalletDirectly(this.gameState.playerWallet)
                    .then(result => {
                        console.log("Đã cập nhật số dư ví về server:", result);
                    })
                    .catch(err => {
                        console.error("Lỗi khi cập nhật số dư ví:", err);
                    });
            }
            
            return true; // Refill thành công
        } else if (this.gameState.playerWallet > 0) {
            // Nếu ví còn chip nhưng không đủ, nạp số còn lại
            const oldWalletAmount = this.gameState.playerWallet;
            this.gameState.playerStack += this.gameState.playerWallet;
            this.gameState.playerWallet = 0;
            
            console.log("Partially refilled player stack to:", this.gameState.playerStack);
            console.log("Player wallet is now empty, reduced from", oldWalletAmount);
            
            // Đồng bộ số dư ví mới về server ngay lập tức
            if (window.GameBackEndBridge) {
                window.GameBackEndBridge.updateWalletDirectly(0)
                    .then(result => {
                        console.log("Đã cập nhật số dư ví về server:", result);
                    })
                    .catch(err => {
                        console.error("Lỗi khi cập nhật số dư ví:", err);
                    });
            }
            
            return false; // Refill không đủ
        } else {
            console.log("Cannot refill player stack: wallet is empty");
            return false; // Không thể refill
        }
    } else {
        console.log("Player stack is already at or above default amount, no refill needed");
        return true; // Không cần refill
    }
},

// AI luôn tự động nạp lại đủ stack
refillAIStack: function() {
      // Đặt trực tiếp về 32 chip, bất kể giá trị hiện tại
      this.gameState.aiStack = this.gameState.aiDefaultStack;
      console.log("AI stack set to default:", this.gameState.aiDefaultStack);
      
      return true; // AI luôn có đủ chip để chơi
},

// Cân bằng stack của người chơi
balancePlayerStack: function() {
// Nếu stack > defaultStack, chuyển phần dư vào ví
if (this.gameState.playerStack > this.gameState.playerDefaultStack) {
// Tính số dư cần chuyển vào ví
var surplus = this.gameState.playerStack - this.gameState.playerDefaultStack;

console.log("Moving surplus chips to wallet:", surplus);

// Chuyển phần dư vào ví
this.gameState.playerWallet += surplus;

// Đặt lại stack về giá trị mặc định
this.gameState.playerStack = this.gameState.playerDefaultStack;

console.log("Player stack balanced to:", this.gameState.playerDefaultStack);
console.log("Player wallet updated to:", this.gameState.playerWallet);
}
// Nếu stack < defaultStack, bổ sung từ ví nếu có thể
else if (this.gameState.playerStack < this.gameState.playerDefaultStack) {
this.refillPlayerStack();
}
},

// Phương thức tương tự cho AI
balanceAIStack: function() {
 // Logic đơn giản: LUÔN đưa về đúng 32 chip
 if (this.gameState.aiStack !== this.gameState.aiDefaultStack) {
    // Log giá trị trước khi thay đổi
    var oldStack = this.gameState.aiStack;
    
    // Đặt giá trị stack về chính xác 32 chip
    this.gameState.aiStack = this.gameState.aiDefaultStack;
    
    console.log("AI stack reset from", oldStack, "to exactly", this.gameState.aiDefaultStack);
}
},

// Xóa bàn để bắt đầu ván mới
clearTable: function() {
var self = this;
console.log("Clearing table...");

// Hủy bỏ tất cả lịch chờ
this.unscheduleAllCallbacks();

// Tìm và xóa tất cả sprite lá bài trên bàn
var children = this.getChildren();
var cardsToRemove = [];

for (var i = 0; i < children.length; i++) {
var child = children[i];
if (child instanceof cc.Sprite) {
    // Kiểm tra nếu là lá bài (dựa trên URL hoặc texture)
    var url = "";
    if (child.getTexture && child.getTexture()) {
        url = child.getTexture().url || "";
    }
    
    // Kiểm tra nếu là lá bài (có chứa "card" trong URL hoặc đã được đánh dấu)
    if (url.indexOf("card") >= 0 || child.cardFlag) {
        cardsToRemove.push(child);
    }
}
}

// Xóa từng lá bài với hiệu ứng mờ dần
for (var i = 0; i < cardsToRemove.length; i++) {
var card = cardsToRemove[i];
card.runAction(cc.Sequence.create(
    cc.FadeOut.create(0.3),
    cc.CallFunc.create(function(target) {
        if (target && target.parent) {
            target.removeFromParent(true);
        }
    })
));
}

console.log("Removed " + cardsToRemove.length + " cards from table");

// Reset pot và UI khác
if (this.potBg && this.potAmountLabel) {
this.potAmount = 0;
this.potAmountLabel.setString("0");
}
},

// Đánh giá cơ bản cho giá trị bộ bài
evaluateHand: function(holeCards, communityCards) {
// Đây là phiên bản đơn giản để chỉ đánh giá loại bài

// Kết hợp hole cards và community cards
var allCards = holeCards.concat(communityCards);

// Đếm số lượng mỗi giá trị bài
var valueCounts = {};
for (var i = 0; i < allCards.length; i++) {
var value = allCards[i] % 13;
if (!valueCounts[value]) {
    valueCounts[value] = 1;
} else {
    valueCounts[value]++;
}
}

// Đếm số lượng mỗi chất bài
var suitCounts = {};
for (var i = 0; i < allCards.length; i++) {
var suit = Math.floor(allCards[i] / 13);
if (!suitCounts[suit]) {
    suitCounts[suit] = 1;
} else {
    suitCounts[suit]++;
}
}

// Kiểm tra có flush không (5 lá cùng chất)
var hasFlush = false;
for (var suit in suitCounts) {
if (suitCounts[suit] >= 5) {
    hasFlush = true;
    break;
}
}

// Kiểm tra các loại bài
var pairCount = 0;
var hasThreeOfAKind = false;
var hasFourOfAKind = false;

for (var value in valueCounts) {
if (valueCounts[value] === 2) {
    pairCount++;
} else if (valueCounts[value] === 3) {
    hasThreeOfAKind = true;
} else if (valueCounts[value] === 4) {
    hasFourOfAKind = true;
}
}

// Xác định giá trị bộ bài
if (hasFourOfAKind) return 7; // Four of a kind
if (hasThreeOfAKind && pairCount >= 1) return 6; // Full house
if (hasFlush) return 5; // Flush
if (hasThreeOfAKind) return 3; // Three of a kind
if (pairCount >= 2) return 2; // Two pair
if (pairCount === 1) return 1; // One pair

return 0; // High card
},

// Khởi tạo game
initGame: function() {
var renderer = cc._renderType === cc.game.RENDER_TYPE_CANVAS ? "Canvas" : "WebGL";
console.log("Game is running with " + renderer + " renderer");

// Tối ưu cài đặt dựa trên renderer
if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
// Tận dụng sức mạnh WebGL
cc.director.setDepthTest(true);
this.useAdvancedEffects = true;
} else {
// Giảm hiệu ứng nếu không có WebGL
this.useAdvancedEffects = false;
}

// Bắt đầu ván mới
this.startNewHand();
},

// Showdown - xác định người thắng
showdown: function() {
    var self = this;
    
    // Log trạng thái AI trước khi showdown
    console.log("BEFORE showdown - AI stack:", this.gameState.aiStack);

    // Đánh giá bài của cả hai bên
    var playerHandValue = this.evaluateHandDetailed(this.gameState.playerCards, this.gameState.communityCards);
    var aiHandValue = this.evaluateHandDetailed(this.gameState.aiCards, this.gameState.communityCards);

    // Log chi tiết để debug
    console.log("------- SHOWDOWN DETAILS -------");
    console.log("Community cards:", this.gameState.communityCards);
    console.log("Player cards:", this.gameState.playerCards);
    console.log("Player hand evaluation:", playerHandValue);
    console.log("AI cards:", this.gameState.aiCards);
    console.log("AI hand evaluation:", aiHandValue);

    // So sánh rank trước
    var result = "";
    var potContainer = new cc.Node();
    potContainer.setPosition(this.potPosition);
    this.addChild(potContainer, 10);

    // Quyết định người thắng và hiển thị bài thắng
    if (playerHandValue.rank > aiHandValue.rank) {
        // Người chơi thắng vì có bộ bài mạnh hơn
        console.log("Player wins with higher rank:", this.getHandName(playerHandValue.rank), "vs", this.getHandName(aiHandValue.rank));
        this.gameState.winner = "player";
        result = "Bạn thắng với " + this.getHandName(playerHandValue.rank) + "!";

        // Hiển thị bài thắng của người chơi
        this.highlightWinningCards(this.getHandName(playerHandValue.rank), this.getBestHand(this.gameState.playerCards, this.gameState.communityCards, playerHandValue));

        // QUAN TRỌNG: Đảm bảo callback luôn được gọi với timeout đủ lớn
        this.scheduleOnce(function() {
            self.handleWinnerAnimation("player", result, potContainer);
        }, 0.5);

    } else if (aiHandValue.rank > playerHandValue.rank) {
        // AI thắng vì có bộ bài mạnh hơn
        console.log("AI wins with higher rank:", this.getHandName(aiHandValue.rank), "vs", this.getHandName(playerHandValue.rank));
        this.gameState.winner = "ai";
        result = "AI thắng với " + this.getHandName(aiHandValue.rank) + "!";

        // Hiển thị bài thắng của AI
        this.highlightWinningCards(this.getHandName(aiHandValue.rank), this.getBestHand(this.gameState.aiCards, this.gameState.communityCards, aiHandValue));

        // QUAN TRỌNG: Đảm bảo callback luôn được gọi với timeout đủ lớn
        this.scheduleOnce(function() {
            self.handleWinnerAnimation("ai", result, potContainer);
        }, 0.5);

    } else {
        // Cùng rank, so sánh giá trị chi tiết
        var playerValues = playerHandValue.values;
        var aiValues = aiHandValue.values;

        console.log("Same rank, comparing card values:");
        console.log("Player values:", playerValues);
        console.log("AI values:", aiValues);

        // So sánh từng lá một, lá cao hơn sẽ thắng
        var isPlayerWin = false;
        var isAIWin = false;

        for (var i = 0; i < Math.min(playerValues.length, aiValues.length); i++) {
            console.log("Comparing card #" + i + ": Player " + playerValues[i] + " vs AI " + aiValues[i]);
            if (playerValues[i] > aiValues[i]) {
                isPlayerWin = true;
                console.log("Player card is higher");
                break;
            } else if (aiValues[i] > playerValues[i]) {
                isAIWin = true;
                console.log("AI card is higher");
                break;
            } else {
                console.log("Cards are equal, continuing comparison");
            }
        }

        // Thêm hiển thị bài thắng tùy theo kết quả
        if (isPlayerWin) {
            this.gameState.winner = "player";
            result = "Bạn thắng với " + this.getHandName(playerHandValue.rank) + "!";
            this.highlightWinningCards(this.getHandName(playerHandValue.rank), this.getBestHand(this.gameState.playerCards, this.gameState.communityCards, playerHandValue));
            
            this.scheduleOnce(function() {
                self.handleWinnerAnimation("player", result, potContainer);
            }, 0.5);
            
        } else if (isAIWin) {
            this.gameState.winner = "ai";
            result = "AI thắng với " + this.getHandName(aiHandValue.rank) + "!";
            this.highlightWinningCards(this.getHandName(aiHandValue.rank), this.getBestHand(this.gameState.aiCards, this.gameState.communityCards, aiHandValue));
            
            this.scheduleOnce(function() {
                self.handleWinnerAnimation("ai", result, potContainer);
            }, 0.5);
            
        } else {
            // Nếu hòa, có thể hiển thị cả hai bộ bài và chia đều tiền
            this.gameState.winner = "tie";
            result = "Hòa với " + this.getHandName(playerHandValue.rank) + "!";
            this.highlightWinningCards(this.getHandName(playerHandValue.rank) + " (Tie)", this.getBestHand(this.gameState.playerCards, this.gameState.communityCards, playerHandValue));
            
            this.scheduleOnce(function() {
                self.handleWinnerAnimation("tie", result, potContainer);
            }, 0.5);
        }
    }

    console.log("Final result:", result);
    console.log("----------------------------");

    // Thêm một fallback để đảm bảo game không bị treo
    this.scheduleOnce(function() {
        // Kiểm tra xem pot còn tồn tại không (nếu không tồn tại, animation đã diễn ra)
        if (self.gameState.pot > 0) {
            console.log("FALLBACK: Đang xử lý pot còn lại, có thể animation không diễn ra");
            
            // Tính phí 4% và làm tròn xuống
            var totalPot = self.gameState.pot;
            var amountAfterFee = Math.floor(totalPot * 0.96);
            
            // Gán tiền trực tiếp cho người thắng hoặc chia đều
            if (self.gameState.winner === "player") {
                // Cập nhật trực tiếp vào ví người chơi
                self.gameState.playerWallet += amountAfterFee;
                
                // Đồng bộ ví về server
                if (window.GameBackEndBridge) {
                    window.GameBackEndBridge.updateWalletDirectly(self.gameState.playerWallet);
                }
                
                // Đảm bảo AI stack về đúng 32
                self.balanceAIStack();
            } else if (self.gameState.winner === "ai") {
                // Cộng tiền vào stack của AI
                self.gameState.aiStack += amountAfterFee;
                
                // Sau đó reset về đúng 32
                self.balanceAIStack();
            } else {
                // Chia đều tiền khi hòa
                var halfPot = Math.floor(totalPot / 2);
                var playerAmount = Math.floor(halfPot * 0.96);
                var aiAmount = Math.floor(halfPot * 0.96);
                
                // Cập nhật ví người chơi và đồng bộ về server
                self.gameState.playerWallet += playerAmount;
                
                // Cộng tiền vào stack của AI rồi reset về 32
                self.gameState.aiStack += aiAmount;
                self.balanceAIStack();
                
                if (window.GameBackEndBridge) {
                    window.GameBackEndBridge.updateWalletDirectly(self.gameState.playerWallet);
                }
            }
            
            self.gameState.pot = 0;
            self.updateStackDisplay();
            self.updatePotDisplay();
            self.displayWalletInfo();
            
            // Bắt đầu ván mới
            self.scheduleOnce(function() {
                self.startNewHand();
            }, 3.0);
        }
    }, 8.0);
    
    // Log trạng thái AI sau khi showdown
    console.log("AFTER showdown function - AI stack:", this.gameState.aiStack);
},

// Xử lý animation người thắng
handleWinnerAnimation: function(winner, resultMessage, potContainer) {
var self = this;
var size = cc.director.getWinSize();

// Tổng số chip trong pot
var totalPot = this.gameState.pot;

// Tính phí chia bài 4% - giữ nguyên số thập phân
var amountAfterFee = totalPot * 0.96;

// Xác định vị trí người chơi chiến thắng
var targetPos;
if (winner === "player") {
targetPos = this.bottomPlayer ? this.bottomPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.19);

// Animation chip bay từ pot đến người chơi
this.flyChipsFromPotToPlayer(targetPos, amountAfterFee, function() {
    // Cập nhật tiền
    self.gameState.playerStack += amountAfterFee;
    self.gameState.pot = 0;
    
    // Cân bằng stack - chuyển phần dư vào ví
    self.balancePlayerStack();
    
    // Cập nhật hiển thị
    self.updateStackDisplay();
    self.updatePotDisplay();
    self.displayWalletInfo();
    
    // Đợi một chút rồi bắt đầu ván mới
    self.scheduleOnce(function() {
        self.startNewHand();
    }, 1.5); // Giảm thời gian chờ từ 3.0 xuống 1.5
});
} 
else if (winner === "ai") {
// Code tương tự cho AI thắng
targetPos = this.topPlayer ? this.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);

this.flyChipsFromPotToPlayer(targetPos, amountAfterFee, function() {
    self.gameState.aiStack += amountAfterFee;
    self.gameState.pot = 0;
    
    self.updateStackDisplay();
    self.updatePotDisplay();
    
    self.scheduleOnce(function() {
        self.startNewHand();
    }, 1.5);
});
}
else {
// Code cho trường hợp hòa
var halfPot = totalPot / 2;
var playerAmount = halfPot * 0.96;
var aiAmount = halfPot * 0.96;

// Ẩn container pot ban đầu nếu có
if (potContainer) {
    potContainer.setVisible(false);
}

var playerPos = this.bottomPlayer ? this.bottomPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.19);
this.flyChipsFromPotToPlayer(playerPos, playerAmount, function() {
    var aiPos = self.topPlayer ? self.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);
    self.flyChipsFromPotToPlayer(aiPos, aiAmount, function() {
        self.gameState.playerStack += playerAmount;
        self.gameState.aiStack += aiAmount;
        self.gameState.pot = 0;
        
        self.balancePlayerStack();
        self.balanceAIStack();
        
        self.updateStackDisplay();
        self.updatePotDisplay();
        self.displayWalletInfo();
        
        self.scheduleOnce(function() {
            self.startNewHand();
        }, 1.5);
    });
});
}
},

// Đánh giá chi tiết bộ bài
evaluateHandDetailed: function(holeCards, communityCards) {
// Kết hợp cả 2 lá bài riêng và 5 lá bài chung
var allCards = holeCards.concat(communityCards);
console.log("Evaluating all 7 cards:", allCards);

// Xử lý giá trị và chất bài
var values = [];
var suits = [];
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
var value = card % 13;
var adjustedValue = value === 0 ? 14 : value + 1; // A = 14, 2 = 2, ..., K = 13
var suit = Math.floor(card / 13);

values.push(adjustedValue);
suits.push(suit);
}

// Đếm số lượng mỗi giá trị bài
var valueCounts = {};
for (var i = 0; i < values.length; i++) {
var value = values[i];
if (!valueCounts[value]) {
    valueCounts[value] = 1;
} else {
    valueCounts[value]++;
}
}

// Log chi tiết về các cặp, bộ ba, bộ bốn tìm thấy
console.log("Value counts:", valueCounts);
for (var value in valueCounts) {
if (valueCounts[value] === 2) {
    console.log("Found a pair of", value);
} else if (valueCounts[value] === 3) {
    console.log("Found three of a kind of", value);
} else if (valueCounts[value] === 4) {
    console.log("Found four of a kind of", value);
}
}

// Sắp xếp giá trị bài theo tần suất và giá trị giảm dần
var sortedValues = Object.keys(valueCounts).map(function(x) { return parseInt(x, 10); });
sortedValues.sort(function(a, b) {
if (valueCounts[b] !== valueCounts[a]) {
    return valueCounts[b] - valueCounts[a]; // Sắp xếp theo tần suất giảm dần
}
return b - a; // Nếu cùng tần suất, sắp xếp theo giá trị giảm dần
});

console.log("Sorted values by frequency and rank:", sortedValues);

// Phân loại theo chất bài để kiểm tra Flush
var suitGroups = { 0: [], 1: [], 2: [], 3: [] };
for (var i = 0; i < allCards.length; i++) {
var suit = suits[i];
var value = values[i];
suitGroups[suit].push(value);
}

// Tìm chất bài có ít nhất 5 lá (Flush)
var flushSuit = -1;
var flushValues = [];
for (var suit in suitGroups) {
if (suitGroups[suit].length >= 5) {
    flushSuit = parseInt(suit, 10);
    // Sắp xếp các giá trị cùng chất theo thứ tự giảm dần
    flushValues = suitGroups[suit].slice();
    flushValues.sort(function(a, b) { return b - a; });
    flushValues = flushValues.slice(0, 5); // Lấy 5 lá cao nhất
    console.log("Found flush in suit", flushSuit, "with values", flushValues);
    break;
}
}

// Kiểm tra Straight
// Loại bỏ giá trị trùng lặp và sắp xếp giảm dần
var uniqueValues = [];
for (var i = 0; i < values.length; i++) {
if (uniqueValues.indexOf(values[i]) === -1) {
    uniqueValues.push(values[i]);
}
}
uniqueValues.sort(function(a, b) { return b - a; });

console.log("Unique values sorted:", uniqueValues);

// Tìm Straight
var straightHighCard = 0;

// Kiểm tra A-5-4-3-2 (wheel straight)
if (uniqueValues.indexOf(14) !== -1 && 
uniqueValues.indexOf(5) !== -1 && 
uniqueValues.indexOf(4) !== -1 && 
uniqueValues.indexOf(3) !== -1 && 
uniqueValues.indexOf(2) !== -1) {
straightHighCard = 5;
console.log("Found wheel straight (A-5-4-3-2)");
} else {
// Kiểm tra các straight thông thường
for (var i = 0; i <= uniqueValues.length - 5; i++) {
    // Kiểm tra 5 lá liên tiếp
    var consecutive = true;
    for (var j = 0; j < 4; j++) {
        if (uniqueValues[i+j] - uniqueValues[i+j+1] !== 1) {
            consecutive = false;
            break;
        }
    }
    
    if (consecutive) {
        straightHighCard = uniqueValues[i];
        console.log("Found straight with high card:", straightHighCard);
        break;
    }
}
}

// Kiểm tra Straight Flush
var straightFlushHighCard = 0;
if (flushSuit >= 0) {
var flushUniqueValues = [];
// Lấy giá trị duy nhất từ các lá cùng chất
for (var i = 0; i < suitGroups[flushSuit].length; i++) {
    if (flushUniqueValues.indexOf(suitGroups[flushSuit][i]) === -1) {
        flushUniqueValues.push(suitGroups[flushSuit][i]);
    }
}
// Sắp xếp giảm dần
flushUniqueValues.sort(function(a, b) { return b - a; });

console.log("Flush unique values:", flushUniqueValues);

// Kiểm tra wheel straight flush (A-5-4-3-2)
if (flushUniqueValues.indexOf(14) !== -1 && 
    flushUniqueValues.indexOf(5) !== -1 && 
    flushUniqueValues.indexOf(4) !== -1 && 
    flushUniqueValues.indexOf(3) !== -1 && 
    flushUniqueValues.indexOf(2) !== -1) {
    straightFlushHighCard = 5;
    console.log("Found wheel straight flush (A-5-4-3-2)");
} else {
    // Kiểm tra straight flush thông thường
    for (var i = 0; i <= flushUniqueValues.length - 5; i++) {
        // Kiểm tra 5 lá liên tiếp cùng chất
        var consecutive = true;
        for (var j = 0; j < 4; j++) {
            if (flushUniqueValues[i+j] - flushUniqueValues[i+j+1] !== 1) {
                consecutive = false;
                break;
            }
        }
        
        if (consecutive) {
            straightFlushHighCard = flushUniqueValues[i];
            console.log("Found straight flush with high card:", straightFlushHighCard);
            break;
        }
    }
}
}

// Xác định rank bài và giá trị chi tiết
var handRank = 0;
var handValue = [];

// Royal Flush
if (straightFlushHighCard === 14) {
handRank = 9;
handValue = [14];
console.log("Hand is a Royal Flush");
}
// Straight Flush
else if (straightFlushHighCard > 0) {
handRank = 8;
handValue = [straightFlushHighCard];
console.log("Hand is a Straight Flush");
}
// Four of a Kind (Tứ quý)
else if (valueCounts[sortedValues[0]] === 4) {
handRank = 7;
handValue = [sortedValues[0]];
// Thêm lá kicker cao nhất
for (var i = 1; i < sortedValues.length; i++) {
    if (valueCounts[sortedValues[i]] === 1) {
        handValue.push(sortedValues[i]);
        break;
    }
}
console.log("Hand is Four of a Kind with values:", handValue);
}
// Full House (Cù lũ)
else if (valueCounts[sortedValues[0]] === 3 && valueCounts[sortedValues[1]] >= 2) {
handRank = 6;
handValue = [sortedValues[0], sortedValues[1]];
console.log("Hand is a Full House with values:", handValue);
}
// Flush (Thùng)
else if (flushSuit >= 0) {
handRank = 5;
handValue = flushValues;
console.log("Hand is a Flush with values:", handValue);
}
// Straight (Sảnh)
else if (straightHighCard > 0) {
handRank = 4;
handValue = [straightHighCard];
console.log("Hand is a Straight with high card:", handValue);
}
// Three of a Kind (Bộ ba)
else if (valueCounts[sortedValues[0]] === 3) {
handRank = 3;
handValue = [sortedValues[0]];
// Thêm 2 lá kicker cao nhất
var kickerCount = 0;
for (var i = 1; i < sortedValues.length && kickerCount < 2; i++) {
    if (valueCounts[sortedValues[i]] === 1) {
        handValue.push(sortedValues[i]);
        kickerCount++;
    }
}
console.log("Hand is Three of a Kind with values:", handValue);
}
// Two Pair (Hai đôi)
else if (valueCounts[sortedValues[0]] === 2 && valueCounts[sortedValues[1]] === 2) {
handRank = 2;
handValue = [sortedValues[0], sortedValues[1]];
// Thêm lá kicker cao nhất
for (var i = 2; i < sortedValues.length; i++) {
    if (valueCounts[sortedValues[i]] === 1) {
        handValue.push(sortedValues[i]);
        break;
    }
}
console.log("Hand is Two Pair with values:", handValue);
}
// One Pair (Một đôi)
else if (valueCounts[sortedValues[0]] === 2) {
handRank = 1;
handValue = [sortedValues[0]];
// Thêm 3 lá kicker cao nhất
var kickerCount = 0;
for (var i = 1; i < sortedValues.length && kickerCount < 3; i++) {
    if (valueCounts[sortedValues[i]] === 1) {
        handValue.push(sortedValues[i]);
        kickerCount++;
    }
}
console.log("Hand is One Pair with values:", handValue);
}
// High Card (Lá cao nhất)
else {
handRank = 0;
// Lấy 5 lá cao nhất
handValue = uniqueValues.slice(0, 5);
console.log("Hand is High Card with values:", handValue);
}

var result = {
rank: handRank,
values: handValue,
highCard: handValue[0]
};

console.log("Final hand evaluation:", result);
return result;
},

// Lấy tên bộ bài từ giá trị
getHandName: function(value) {
var names = [
"High Card",
"One Pair",
"Two Pair",
"Three of a Kind",
"Straight",
"Flush",
"Full House",
"Four of a Kind",
"Straight Flush",
"Royal Flush"
];

return names[value];
},

// Phương thức để lấy 5 lá bài tốt nhất cho bộ bài thắng
getBestHand: function(holeCards, communityCards, handEvaluation) {
var allCards = holeCards.concat(communityCards);
var result = [];
var rank = handEvaluation.rank;

switch (rank) {
case 8: // Straight Flush
case 9: // Royal Flush
    // Tìm 5 lá liên tiếp cùng chất
    return this.findStraightFlushCards(allCards, handEvaluation.highCard);
    
case 7: // Four of a Kind
    // 4 lá giống nhau + 1 kicker
    return this.findFourOfAKindCards(allCards, handEvaluation.values[0]);
    
case 6: // Full House
    // 3 lá giống nhau + 2 lá giống nhau
    return this.findFullHouseCards(allCards, handEvaluation.values[0], handEvaluation.values[1]);
    
case 5: // Flush
    // 5 lá cùng chất
    return this.findFlushCards(allCards, handEvaluation.values);
    
case 4: // Straight
    // 5 lá liên tiếp
    return this.findStraightCards(allCards, handEvaluation.highCard);
    
case 3: // Three of a Kind
    // 3 lá giống nhau + 2 kicker
    return this.findThreeOfAKindCards(allCards, handEvaluation.values[0]);
    
case 2: // Two Pair
    // 2 đôi + 1 kicker
    return this.findTwoPairCards(allCards, handEvaluation.values[0], handEvaluation.values[1]);
    
case 1: // One Pair
    // 1 đôi + 3 kicker
    return this.findOnePairCards(allCards, handEvaluation.values[0]);
    
case 0: // High Card
default:
    // 5 lá cao nhất
    return this.findHighCardHand(allCards, handEvaluation.values);
}
},

// Các phương thức helper để tìm lá bài theo từng loại bộ bài
findStraightFlushCards: function(allCards, highCard) {
// Tìm 5 lá liên tiếp cùng chất
var values = [];
var suits = [];

// Trích xuất giá trị và chất từ các lá bài
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
var value = card % 13;
var suit = Math.floor(card / 13);

values.push(value);
suits.push(suit);
}

// Xác định chất của straight flush
var straightFlushSuit = -1;
for (var suit = 0; suit < 4; suit++) {
var suitCards = [];
for (var i = 0; i < allCards.length; i++) {
    if (Math.floor(allCards[i] / 13) === suit) {
        suitCards.push(allCards[i] % 13);
    }
}

suitCards.sort(function(a, b) { return b - a; });

// Kiểm tra có straight không
for (var i = 0; i <= suitCards.length - 5; i++) {
    var consecutive = true;
    for (var j = 0; j < 4; j++) {
        if (suitCards[i + j] - suitCards[i + j + 1] !== 1) {
            consecutive = false;
            break;
        }
    }
    
    if (consecutive && suitCards[i] === highCard % 13) {
        straightFlushSuit = suit;
        break;
    }
}

if (straightFlushSuit >= 0) break;
}

// Trả về 5 lá bài tạo thành straight flush
var result = [];
if (straightFlushSuit >= 0) {
var startValue = highCard % 13;
for (var v = startValue; v > startValue - 5; v--) {
    for (var i = 0; i < allCards.length; i++) {
        var card = allCards[i];
        if (card % 13 === v && Math.floor(card / 13) === straightFlushSuit) {
            result.push(card);
            break;
        }
    }
}
}

return result;
},

// Tìm bộ tứ quý
findFourOfAKindCards: function(allCards, fourValue) {
// Tìm 4 lá giống nhau + 1 kicker cao nhất
var result = [];
var kickers = [];

// Lấy 4 lá giống nhau
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === fourValue % 13) {
    result.push(card);
} else {
    kickers.push(card);
}
}

// Sắp xếp kickers theo giá trị giảm dần
kickers.sort(function(a, b) {
var valueA = a % 13;
var valueB = b % 13;

// Xử lý Ace (0) như giá trị cao nhất (13)
if (valueA === 0) valueA = 13;
if (valueB === 0) valueB = 13;

return valueB - valueA;
});

// Thêm kicker cao nhất
if (kickers.length > 0) {
result.push(kickers[0]);
}

return result;
},

// Cần thêm các helper method khác như findFullHouseCards, findFlushCards, v.v...
// Tôi sẽ bỏ qua chúng để không làm quá dài mã và tập trung vào method chính là highlightWinningCards

highlightWinningCards: function(winningHandType, cardValues) {
var self = this;
var size = cc.director.getWinSize();

console.log("Showing winning hand:", winningHandType);

// Map the hand type to the correct image filename
var handImageMap = {
"High Card": "high.png",
"One Pair": "pair.png",
"Two Pair": "twopair.png",
"Three of a Kind": "three.png",
"Straight": "straight.png",
"Flush": "flush.png",
"Full House": "fullhouse.png",
"Four of a Kind": "four.png",
"Straight Flush": "straightflush.png",
"Royal Flush": "royal.png"
};

// Get the appropriate image filename
var imageFileName = "high.png"; // Default fallback

// Parse the hand type (extract base type in case of "X (Tie)")
var baseHandType = winningHandType.split(" (")[0];

if (handImageMap[baseHandType]) {
imageFileName = handImageMap[baseHandType];
}

// Create the full image URL
var handImageUrl = "https://tuancho670.github.io/Web-App/assets/highlight/card_highlight_" + imageFileName;

// Create sprite for the winning hand image
var handImage = new cc.Sprite(handImageUrl);

// Position below the pot
if (this.potPosition) {
// Sử dụng tableScale để tính toán offset
var yOffset = 90 * this.tableScale;
handImage.setPosition(this.potPosition.x, this.potPosition.y - yOffset);
} else {
// Fallback position
var fallbackOffset = 70 * this.tableScale;
handImage.setPosition(size.width / 2, size.height / 2 - fallbackOffset);
}

// Use a much larger scale - adjust this value as needed
// Start with a scale that's 3-4 times normal for a significantly larger image
var targetScale = this.tableScale * 1.5;
handImage.setScale(targetScale);

// Add to scene with high z-order
this.addChild(handImage, 100);

// Log original image dimensions to help with debugging
console.log("Image original dimensions:", handImage.getContentSize().width, "x", handImage.getContentSize().height);
console.log("Applied scale:", targetScale);
console.log("Resulting dimensions:", handImage.getContentSize().width * targetScale, "x", handImage.getContentSize().height * targetScale);

// Add entrance animation
handImage.setOpacity(0);
handImage.runAction(cc.Sequence.create(
cc.FadeIn.create(0.3),
cc.DelayTime.create(0.2),
cc.ScaleTo.create(0.15, targetScale * 1.1),
cc.ScaleTo.create(0.15, targetScale)
));

// Automatically remove the hand image after 4 seconds
this.scheduleOnce(function() {
handImage.runAction(cc.Sequence.create(
    cc.FadeOut.create(0.5),
    cc.RemoveSelf.create()
));
}, 4.0);

return handImage;
},

// Tìm bộ full house
findFullHouseCards: function(allCards, threeValue, pairValue) {
// Tìm 3 lá giống nhau + 2 lá giống nhau
var result = [];

// Lấy 3 lá giống nhau
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === threeValue % 13) {
    result.push(card);
    if (result.length === 3) break;
}
}

// Lấy 2 lá giống nhau
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === pairValue % 13) {
    result.push(card);
    if (result.length === 5) break;
}
}

return result;
},

// Tìm bộ thùng (flush)
findFlushCards: function(allCards, flushValues) {
// Tìm 5 lá cùng chất cao nhất
var result = [];

// Phân loại bài theo chất
var suitGroups = [[], [], [], []];
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
var suit = Math.floor(card / 13);
suitGroups[suit].push(card);
}

// Tìm chất có ít nhất 5 lá
for (var suit = 0; suit < 4; suit++) {
if (suitGroups[suit].length >= 5) {
    // Sắp xếp theo giá trị giảm dần
    suitGroups[suit].sort(function(a, b) {
        var valueA = a % 13;
        var valueB = b % 13;
        
        // Xử lý Ace (0) như giá trị cao nhất (13)
        if (valueA === 0) valueA = 13;
        if (valueB === 0) valueB = 13;
        
        return valueB - valueA;
    });
    
    // Lấy 5 lá cao nhất
    result = suitGroups[suit].slice(0, 5);
    break;
}
}

return result;
},

// Tìm bộ sảnh (straight)
findStraightCards: function(allCards, highCard) {
// Tìm 5 lá liên tiếp
var result = [];

// Lấy giá trị duy nhất và sắp xếp giảm dần
var uniqueValues = [];
for (var i = 0; i < allCards.length; i++) {
var value = allCards[i] % 13;
if (uniqueValues.indexOf(value) === -1) {
    uniqueValues.push(value);
}
}

uniqueValues.sort(function(a, b) { return b - a; });

// Tìm vị trí của lá cao nhất trong straight
var startIndex = uniqueValues.indexOf(highCard % 13);

if (startIndex >= 0) {
// Lấy giá trị của 5 lá trong straight
var straightValues = [];
for (var i = 0; i < 5; i++) {
    var targetValue = (highCard - i) % 13;
    straightValues.push(targetValue);
}

// Tìm 5 lá bài tốt nhất cho straight
for (var i = 0; i < straightValues.length; i++) {
    var targetValue = straightValues[i];
    
    // Tìm lá bài phù hợp
    var bestCard = null;
    for (var j = 0; j < allCards.length; j++) {
        var card = allCards[j];
        if (card % 13 === targetValue) {
            if (bestCard === null || card > bestCard) {
                bestCard = card;
            }
        }
    }
    
    if (bestCard !== null) {
        result.push(bestCard);
    }
}
}

return result;
},

// Tìm bộ ba (three of a kind)
findThreeOfAKindCards: function(allCards, threeValue) {
// Tìm 3 lá giống nhau + 2 kicker cao nhất
var result = [];
var kickers = [];

// Lấy 3 lá giống nhau
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === threeValue % 13) {
    result.push(card);
    if (result.length === 3) break;
}
}

// Lấy các lá còn lại làm kicker
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 !== threeValue % 13) {
    kickers.push(card);
}
}

// Sắp xếp kickers theo giá trị giảm dần
kickers.sort(function(a, b) {
var valueA = a % 13;
var valueB = b % 13;

// Xử lý Ace (0) như giá trị cao nhất (13)
if (valueA === 0) valueA = 13;
if (valueB === 0) valueB = 13;

return valueB - valueA;
});

// Thêm 2 kicker cao nhất
result = result.concat(kickers.slice(0, 2));

return result;
},

// Tìm hai đôi (two pair)
findTwoPairCards: function(allCards, pairValue1, pairValue2) {
// Tìm 2 đôi + 1 kicker cao nhất
var result = [];
var kickers = [];

// Lấy đôi thứ nhất
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === pairValue1 % 13) {
    result.push(card);
    if (result.length === 2) break;
}
}

// Lấy đôi thứ hai
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === pairValue2 % 13) {
    result.push(card);
    if (result.length === 4) break;
}
}

// Lấy các lá còn lại làm kicker
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 !== pairValue1 % 13 && card % 13 !== pairValue2 % 13) {
    kickers.push(card);
}
}

// Sắp xếp kickers theo giá trị giảm dần
kickers.sort(function(a, b) {
var valueA = a % 13;
var valueB = b % 13;

// Xử lý Ace (0) như giá trị cao nhất (13)
if (valueA === 0) valueA = 13;
if (valueB === 0) valueB = 13;

return valueB - valueA;
});

// Thêm kicker cao nhất
if (kickers.length > 0) {
result.push(kickers[0]);
}

return result;
},

// Tìm một đôi (one pair)
findOnePairCards: function(allCards, pairValue) {
// Tìm 1 đôi + 3 kicker cao nhất
var result = [];
var kickers = [];

// Lấy đôi
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 === pairValue % 13) {
    result.push(card);
    if (result.length === 2) break;
}
}

// Lấy các lá còn lại làm kicker
for (var i = 0; i < allCards.length; i++) {
var card = allCards[i];
if (card % 13 !== pairValue % 13) {
    kickers.push(card);
}
}

// Sắp xếp kickers theo giá trị giảm dần
kickers.sort(function(a, b) {
var valueA = a % 13;
var valueB = b % 13;

// Xử lý Ace (0) như giá trị cao nhất (13)
if (valueA === 0) valueA = 13;
if (valueB === 0) valueB = 13;

return valueB - valueA;
});

// Thêm 3 kicker cao nhất
result = result.concat(kickers.slice(0, 3));

return result;
},

// Tìm lá cao nhất (high card)
findHighCardHand: function(allCards, highValues) {
// Tìm 5 lá cao nhất
var result = [];

// Sắp xếp bài theo giá trị giảm dần
var sortedCards = allCards.slice().sort(function(a, b) {
var valueA = a % 13;
var valueB = b % 13;

// Xử lý Ace (0) như giá trị cao nhất (13)
if (valueA === 0) valueA = 13;
if (valueB === 0) valueB = 13;

return valueB - valueA;
});

// Lấy 5 lá cao nhất
result = sortedCards.slice(0, 5);

return result;
},

});

   cc.game.onStart = function() {

     ScreenManager.init();

      // Khởi tạo Telegram Bridge
    if (typeof window.TelegramBridge === 'object') {
        window.TelegramBridge.initialize();
    }
    
    // Sử dụng scene riêng cho loading
    CardsLoaderScene.preload([
        "HelloWorld.png", 
        "https://tuancho670.github.io/Web-App/assets/fee0be5a-9db2-4716-a806-ff84222f03ca.jpg",
        "https://tuancho670.github.io/Web-App/assets/0f1f7e3e-05c6-47e8-9444-d517276d37d1.png",
        "https://replay.x-game.net/v2/assets/resources/native/12/1206c74af.png",
        "https://replay.x-game.net/v2/assets/resources/native/1c/1c46648e0.png",
        "https://replay.x-game.net/v2/assets/main/native/18/188b0c9fe.png",
        "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_red.png",
        "https://tuancho670.github.io/Web-App/assets/Button_tag/btn_table_yellow.png",
        "https://tuancho670.github.io/Web-App/assets/player_head_34.jpg",
        "https://tuancho670.github.io/Web-App/assets/card/card_back_bg.png"
    ], function () {
        // Chạy Start Scene sau khi tải xong
        var startScene = new StartScene();
        startScene.init();
        cc.director.runScene(startScene);
        console.log("Loading complete, showing Start Screen");

        if (window.TelegramBridge) {
            var telegramUser = window.TelegramBridge.getUserInfo();
            console.log("Game - User info from Telegram:", telegramUser);
            
            // Lưu thông tin người dùng vào MyScene để sử dụng sau này
            if (telegramUser && MyScene.prototype) {
                MyScene.prototype.telegramUser = telegramUser;
            }
        }
    });

    var optimizeForTablet = function() {
        var size = cc.director.getWinSize();
        var aspectRatio = size.width / size.height;
        
        console.log("Current device: width=" + size.width + ", height=" + size.height + ", ratio=" + aspectRatio.toFixed(2));
        
        // Xác định nếu là iPad hoặc tablet khác (tỷ lệ gần vuông)
        var isTablet = (aspectRatio > 0.7 && aspectRatio < 0.85) || // iPad portrait
                       (aspectRatio > 1.2 && aspectRatio < 1.5);    // iPad landscape
        
        if (isTablet) {
            console.log("Optimizing layout for tablet device");
            
            // Điều chỉnh scale của bàn to hơn để tận dụng không gian
            if (self.table) {
                var newScale = self.tableScale * 1.15; // Tăng thêm 15%
                self.table.setScale(newScale);
                self.tableScale = newScale;
                console.log("Table scale adjusted to", newScale);
            }
            
            // Cập nhật vị trí của người chơi để phù hợp với bàn lớn hơn
            if (self.topPlayer) {
                self.topPlayer.setPosition(size.width / 2, size.height * 0.9);
            }
            if (self.bottomPlayer) {
                self.bottomPlayer.setPosition(size.width / 2, size.height * 0.17);
            }
        }
    };
    
    // Gọi hàm này sau khi khởi tạo bàn và người chơi
    optimizeForTablet();

    // Find the container element
    var containerElement = document.querySelector('.gamePokerContainer');
    if (!containerElement) {
      console.error("Container element '.gamePokerContainer' not found, using body as container");
      containerElement = document.body;
    }
    
    // Get device pixel ratio for high-DPI displays
    var devicePixelRatio = window.devicePixelRatio || 1;
    console.info("DPR (Device Pixel Ratio): " + devicePixelRatio);
    
    // Get the container's dimensions
    var containerWidth = containerElement.clientWidth;
    var containerHeight = containerElement.clientHeight;
    console.log("Container size: " + containerWidth + " x " + containerHeight + " px");
    
    // Get the canvas element
    var canvas = document.getElementById("gameCanvas");
    
    // Calculate the design size and aspect ratio
    // Use a fixed design aspect ratio (16:9 is common for mobile games)
    var designWidth = 640;  // Standard design width
    var designHeight = 960; // Standard design height
    var designRatio = designWidth / designHeight;
    
    // Calculate the container's aspect ratio
    var containerRatio = containerWidth / containerHeight;
    
    // Determine the best fit strategy based on aspect ratios
    var canvasWidth, canvasHeight;
    var resolutionPolicy;
    
    if (containerRatio >= designRatio) {
      // Container is wider than design ratio (letterboxing on sides)
      canvasHeight = containerHeight;
      canvasWidth = containerHeight * designRatio;
      resolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
    } else {
      // Container is taller than design ratio (letterboxing on top/bottom)
      canvasWidth = containerWidth;
      canvasHeight = containerWidth / designRatio;
      resolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
    }
    
    // Set canvas style dimensions (CSS pixels)
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
    
    // Set canvas actual dimensions (accounting for high-DPI displays)
    canvas.width = canvasWidth * devicePixelRatio;
    canvas.height = canvasHeight * devicePixelRatio;
    
    console.log("Canvas style size: " + canvasWidth + " x " + canvasHeight + " px");
    console.log("Canvas actual size: " + canvas.width + " x " + canvas.height + " px");
    
    // Store configuration for global access
    window.gameConfig = {
      containerWidth: containerWidth,
      containerHeight: containerHeight,
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight,
      designWidth: designWidth,
      designHeight: designHeight,
      devicePixelRatio: devicePixelRatio,
      resolutionPolicy: resolutionPolicy
    };
    
    // Set the design resolution with the appropriate policy
    cc.view.setDesignResolutionSize(designWidth, designHeight, resolutionPolicy);
    
    // Enable auto full screen mode adaptation
    cc.view.enableAutoFullScreen(true);
    
    // Report final canvas size from cc.director
    var winSize = cc.director.getWinSize();
    console.log("FINAL CANVAS SIZE (from cc.director.getWinSize): " + 
                winSize.width + " x " + winSize.height + " px");
    
    // Handle window resizing
    window.addEventListener('resize', function() {
      // Recalculate everything on resize
      devicePixelRatio = window.devicePixelRatio || 1;
      containerWidth = containerElement.clientWidth;
      containerHeight = containerElement.clientHeight;
      containerRatio = containerWidth / containerHeight;
      
      console.log("RESIZE - New container size: " + containerWidth + " x " + containerHeight + " px");
      
      // Apply the same logic as initialization
      if (containerRatio >= designRatio) {
        canvasHeight = containerHeight;
        canvasWidth = containerHeight * designRatio;
        resolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
      } else {
        canvasWidth = containerWidth;
        canvasHeight = containerWidth / designRatio;
        resolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
      }
      
      // Update canvas style dimensions
      canvas.style.width = canvasWidth + "px";
      canvas.style.height = canvasHeight + "px";
      
      // Update canvas actual dimensions
      canvas.width = canvasWidth * devicePixelRatio;
      canvas.height = canvasHeight * devicePixelRatio;
      
      // Update stored configuration
      window.gameConfig.containerWidth = containerWidth;
      window.gameConfig.containerHeight = containerHeight;
      window.gameConfig.canvasWidth = canvasWidth;
      window.gameConfig.canvasHeight = canvasHeight;
      window.gameConfig.resolutionPolicy = resolutionPolicy;
      
      // Update design resolution
      cc.view.setDesignResolutionSize(designWidth, designHeight, resolutionPolicy);
      
      // Report new size
      var newWinSize = cc.director.getWinSize();
      console.log("FINAL CANVAS SIZE after resize: " + 
                  newWinSize.width + " x " + newWinSize.height + " px");
      
      // Notify the current scene to update layout
    //   var currentScene = cc.director.getRunningScene();
    //   if (currentScene && typeof currentScene.updateLayout === 'function') {
    //     currentScene.updateLayout();
    //   }
    });
       

           // Khởi tạo MyScene sau khi load xong 
};

// Định nghĩa GameBridge ngay sau khi các Scene đã được định nghĩa
window.GameBridge = {
    // Trạng thái hiện tại của game
    currentScene: null,
    gameInitialized: false,
    isPaused: false,
    
    // Hàm khởi tạo game
    initGame: function() {
        console.log("GameBridge: Khởi tạo game");
        this.gameInitialized = true;
        
        // Gọi hàm khởi tạo game gốc (đã có trong ladipage-start.js)
        window.initCocosGame();
    },
    
    // Ghi nhận scene hiện tại
    setCurrentScene: function(sceneName) {
        console.log("GameBridge: Scene chuyển sang " + sceneName);
        this.currentScene = sceneName;
        
        // Thông báo cho index.html biết về sự thay đổi scene
        if (typeof window.onGameSceneChanged === 'function') {
            window.onGameSceneChanged(sceneName);
        }
    },
    
    // Tạm dừng game và chuyển về StartScene nếu có thể
    pauseGame: function() {
        console.log("GameBridge: Tạm dừng game");
        this.isPaused = true;
        
        if (typeof cc !== 'undefined' && cc.director) {
            try {
                cc.director.pause();
                // Thử chuyển về StartScene nếu đang trong game
                if (this.currentScene !== "StartScene") {
                    this.returnToStartScene();
                }
            } catch (e) {
                console.error("GameBridge: Lỗi khi pause game", e);
            }
        }
        
        // Thông báo ra ngoài
        if (typeof window.onGamePaused === 'function') {
            window.onGamePaused(this.currentScene === "StartScene");
        }
    },
    
    // Tiếp tục game từ trạng thái tạm dừng
    resumeGame: function() {
        console.log("GameBridge: Tiếp tục game");
        this.isPaused = false;
        
        if (typeof cc !== 'undefined' && cc.director) {
            cc.director.resume();
        }
        
        // Thông báo ra ngoài
        if (typeof window.onGameResumed === 'function') {
            window.onGameResumed();
        }
    },
    
    // Phương thức đơn giản trở lại StartScene 
    returnToStartScene: function() {
        console.log("GameBridge: Đang chuyển về StartScene");
        
        if (typeof cc === 'undefined' || !cc.director) {
            console.error("cc hoặc cc.director không tồn tại");
            return false;
        }
        
        try {
            // Trực tiếp sử dụng StartScene đã được định nghĩa trong file này
            var startScene = new StartScene();
            startScene.init();
            cc.director.runScene(startScene);
            this.setCurrentScene("StartScene");
            return true;
        } catch (e) {
            console.error("Lỗi khi tạo StartScene:", e);
            return false;
        }
    }
};

// Tích hợp Telegram Mini App API - Phiên bản đơn giản
window.TelegramBridge = {
    // Lưu trữ dữ liệu từ Telegram
    userData: null,
    initData: null,
    tg: null,
    
    // Khởi tạo kết nối với Telegram Mini App API
    initialize: function() {
        console.log("TelegramBridge: Đang khởi tạo...");
        
        try {
            // Kiểm tra xem script Telegram đã được load chưa
            if (window.Telegram && window.Telegram.WebApp) {
                this.connectWithTelegram();
            } else {
                // Nếu chưa load, thêm script Telegram Web App
                var script = document.createElement('script');
                script.src = 'https://telegram.org/js/telegram-web-app.js';
                script.onload = this.connectWithTelegram.bind(this);
                document.head.appendChild(script);
                
                console.log("TelegramBridge: Đang tải Telegram WebApp API...");
            }
        } catch (e) {
            console.log("TelegramBridge: Lỗi khi khởi tạo", e);
        }
    },
    
    // Kết nối với Telegram sau khi đã load script
    connectWithTelegram: function() {
        try {
            if (!window.Telegram || !window.Telegram.WebApp) {
                console.log("TelegramBridge: Telegram WebApp API không có sẵn");
                return;
            }
            
            // Kết nối với API
            this.tg = window.Telegram.WebApp;
            
            // Lấy thông tin người dùng
            if (this.tg.initDataUnsafe && this.tg.initDataUnsafe.user) {
                this.userData = this.tg.initDataUnsafe.user;
                console.log("TelegramBridge: Thông tin người dùng:", this.userData);
            } else {
                console.log("TelegramBridge: Không tìm thấy thông tin người dùng");
            }
            
            // Lấy initData
            this.initData = this.tg.initData;
            
            // Log ra để debug
            console.log("TelegramBridge: Kết nối thành công với Telegram WebApp");
            console.log("TelegramBridge: initData:", this.initData);
            
            // Ghi lại toàn bộ thông tin có sẵn từ Telegram.WebApp vào console để debug
            console.log("TelegramBridge: Toàn bộ thông tin WebApp:", this.tg);
            
        } catch (e) {
            console.log("TelegramBridge: Lỗi khi kết nối với Telegram", e);
        }
    },
    
    // Lấy thông tin người dùng Telegram
    getUserInfo: function() {
        if (!this.userData) {
            console.log("TelegramBridge: Không có thông tin người dùng");
            return null;
        }
        
        return this.userData;
    }
};

// Tạo GameBackEndBridge để giao tiếp với backend server
window.GameBackEndBridge = {
    // Cấu hình
    serverUrl: 'https://cexgametest.tuanbmtx00019.workers.dev',
    
    // Lấy điểm Game từ server
    async getGamePoints() {
        try {
            // Lấy thông tin người dùng từ Telegram
            const userData = this.getUserData();
            if (!userData || !userData.id) {
                console.warn("Không tìm thấy thông tin người dùng để lấy điểm Game");
                return { success: false, error: "Missing user data" };
            }
            
            // Gọi API để lấy điểm Game
            const response = await fetch(this.serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'getGamePoints',
                    userId: userData.id
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Cập nhật vào cache local
                this.cacheUserGamePoints(result.points);
                
                // Cập nhật vào game nếu đang chạy
                this.updateGameWallet(result.points);
                
                console.log("Đã lấy gamePoints từ server:", result.points);
                return { success: true, points: result.points || 0 };
            } else {
                console.error("Lỗi khi lấy điểm Game:", result.error || result.message);
                return result;
            }
        } catch (error) {
            console.error("Lỗi trong quá trình lấy điểm Game:", error);
            return { success: false, error: error.message || "Unknown error" };
        }
    },
    
    // Cập nhật điểm Game lên server
    async updateGamePoints(pointsChange) {
        try {
            // Lấy thông tin người dùng từ Telegram
            const userData = this.getUserData();
            if (!userData || !userData.id) {
                console.warn("Không tìm thấy thông tin người dùng để cập nhật điểm Game");
                return { success: false, error: "Missing user data" };
            }
            
            // Gọi API để cập nhật điểm Game
            const response = await fetch(this.serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'updateGamePoints',
                    userId: userData.id,
                    pointsChange: pointsChange
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Cập nhật vào cache local
                this.cacheUserGamePoints(result.newPoints);
                
                // Cập nhật vào game nếu đang chạy
                this.updateGameWallet(result.newPoints);
                
                console.log("Cập nhật điểm Game thành công, điểm mới:", result.newPoints);
                return { success: true, newPoints: result.newPoints };
            } else {
                console.error("Lỗi khi cập nhật điểm Game:", result.error || result.message);
                return result;
            }
        } catch (error) {
            console.error("Lỗi trong quá trình cập nhật điểm Game:", error);
            return { success: false, error: error.message || "Unknown error" };
        }
    },
    
    // Lấy thông tin người dùng từ Telegram hoặc localStorage
    getUserData() {
        // Ưu tiên lấy từ Telegram Bridge nếu có
        if (window.TelegramBridge && typeof window.TelegramBridge.getUserInfo === 'function') {
            const telegramUser = window.TelegramBridge.getUserInfo();
            if (telegramUser && telegramUser.id) {
                return telegramUser;
            }
        }
        
        // Nếu không có, thử lấy từ localStorage
        try {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (userData && userData.user && userData.user.id) {
                    return userData.user;
                }
            }
        } catch (e) {
            console.error("Lỗi khi đọc userData từ localStorage:", e);
        }
        
        return null;
    },
    
    // Lưu điểm Game vào localStorage
    cacheUserGamePoints(points) {
        try {
            // Lấy userData hiện tại
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (userData && userData.user) {
                    // Cập nhật điểm Game
                    userData.user.gamePoints = points;
                    localStorage.setItem('userData', JSON.stringify(userData));
                }
            }
        } catch (e) {
            console.error("Lỗi khi lưu gamePoints vào localStorage:", e);
        }
    },
    
    // Cập nhật ví trong game hiện tại
    updateGameWallet(points) {
        if (window.cc && cc.director) {
            const currentScene = cc.director.getRunningScene();
            if (currentScene && currentScene.gameState) {
                // Cập nhật ví người chơi trong game
                currentScene.gameState.playerWallet = points;
                
                // Cập nhật hiển thị ví nếu có
                if (typeof currentScene.displayWalletInfo === 'function') {
                    currentScene.displayWalletInfo();
                }
            }
        }
    },

    // Thêm vào GameBackEndBridge
async updateWalletDirectly(newAmount) {
    try {
        // Lấy thông tin người dùng từ Telegram
        const userData = this.getUserData();
        if (!userData || !userData.id) {
            console.warn("Không tìm thấy thông tin người dùng để cập nhật ví");
            return { success: false, error: "Missing user data" };
        }
        
        console.log("Cập nhật trực tiếp số dư ví về server:", newAmount);
        
        // Gọi API để đặt số dư ví trực tiếp
        const response = await fetch(this.serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'setWalletAmount',
                userId: userData.id,
                walletAmount: newAmount
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Cập nhật vào cache local
            this.cacheUserGamePoints(newAmount);
            
            console.log("Cập nhật số dư ví thành công:", newAmount);
            return { success: true, walletAmount: newAmount };
        } else {
            console.error("Lỗi khi cập nhật số dư ví:", result.error || result.message);
            return result;
        }
    } catch (error) {
        console.error("Lỗi trong quá trình cập nhật số dư ví:", error);
        return { success: false, error: error.message || "Unknown error" };
    }
},
    

// Đồng bộ điểm sau khi kết thúc ván đấu
syncGameResult(winner, pot) {
    const currentScene = cc.director.getRunningScene();
    if (!currentScene || !currentScene.gameState) {
        console.error("Không thể đồng bộ kết quả: không tìm thấy scene hiện tại");
        return;
    }
    
    // Tính toán số điểm thay đổi dựa trên kết quả
    let pointsChange = 0;
    
    if (winner === "player") {
        // Người chơi thắng, tính điểm cộng
        const amountAfterFee = pot * 0.96;
        pointsChange = Math.floor(amountAfterFee);
        console.log("Người chơi thắng, cộng điểm:", pointsChange);
    } else if (winner === "ai") {
        // AI thắng, người chơi thua, tính điểm trừ
        const lostAmount = currentScene.gameState.playerDefaultStack - currentScene.gameState.playerStack;
        pointsChange = -Math.floor(lostAmount);
        console.log("AI thắng, trừ điểm:", pointsChange);
    } else if (winner === "tie") {
        // Hòa, không thay đổi điểm
        console.log("Ván hòa, không thay đổi điểm");
        return; // Không cần cập nhật
    }
    
    console.log("Chi tiết thay đổi điểm:", {
        winner: winner,
        pot: pot,
        pointsChange: pointsChange,
        playerStack: currentScene.gameState.playerStack,
        playerDefaultStack: currentScene.gameState.playerDefaultStack
    });
    
    // Chỉ cập nhật nếu có thay đổi điểm
    if (pointsChange !== 0) {
        // Cập nhật wallet trong game trước để UI hiển thị ngay
        currentScene.gameState.playerWallet += pointsChange;
        currentScene.displayWalletInfo();
        
        // ***QUAN TRỌNG: Cập nhật ví trực tiếp về sheet***
        this.updateWalletDirectly(currentScene.gameState.playerWallet)
            .then(result => {
                console.log("Đã cập nhật số dư ví về server:", result);
            })
            .catch(err => {
                console.error("Lỗi khi cập nhật số dư ví:", err);
            });
    }
},
    
    // Phương thức khởi tạo cho bridge
    initialize() {
        console.log("GameBackEndBridge: Đang khởi tạo...");
        
        // Lấy điểm Game ban đầu từ server
        this.getGamePoints()
            .then(result => {
                console.log("Khởi tạo điểm Game thành công:", result);
            })
            .catch(err => {
                console.error("Lỗi khi khởi tạo điểm Game:", err);
            });
        
        // Tích hợp với MyScene để tự động đồng bộ kết quả
        if (window.MyScene && MyScene.prototype) {
            this.integrateWithGameScene();
        }
        
        console.log("GameBackEndBridge: Khởi tạo hoàn tất");
    },
    
    // Tích hợp với MyScene
// Thay đổi trong hàm integrateWithGameScene của GameBackEndBridge
integrateWithGameScene() {
    if (!window.MyScene || !MyScene.prototype) return;
    
    const self = this;
    
    // Lưu lại phương thức handleWinnerAnimation gốc
    const originalHandleWinner = MyScene.prototype.handleWinnerAnimation;
    
   // Sửa lại phương thức handleWinnerAnimation để cập nhật số tiền thắng vào ví người chơi
// Sửa lại hàm handleWinnerAnimation để đảm bảo AI luôn có 32 chip sau khi xử lý thắng/thua
MyScene.prototype.handleWinnerAnimation = function(winner, resultMessage, potContainer) {
    var self = this;
    var size = cc.director.getWinSize();

    // Tổng số chip trong pot
    var totalPot = this.gameState.pot;

    // Tính phí chia bài 4% - giữ nguyên số thập phân
    var amountAfterFee = totalPot * 0.96;

    // Ghi log số tiền AI có trước khi thắng/thua
    console.log("BEFORE animation - AI stack:", this.gameState.aiStack);

    // Xác định vị trí người chơi chiến thắng
    var targetPos;
    if (winner === "player") {
        targetPos = this.bottomPlayer ? this.bottomPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.19);

        // Animation chip bay từ pot đến người chơi
        this.flyChipsFromPotToPlayer(targetPos, amountAfterFee, function() {
            // Cập nhật tiền vào ví người chơi thay vì stack
            self.gameState.playerWallet += amountAfterFee;
            self.gameState.pot = 0;
            
            // Cập nhật stack từ ví để hiển thị
            self.refillPlayerStack();
            
            // Cập nhật hiển thị
            self.updateStackDisplay();
            self.updatePotDisplay();
            self.displayWalletInfo();
            
            // Đồng bộ số dư ví mới về server
            if (window.GameBackEndBridge) {
                window.GameBackEndBridge.updateWalletDirectly(self.gameState.playerWallet)
                    .then(result => {
                        console.log("Đã cập nhật số dư ví mới về server sau khi thắng:", result);
                    })
                    .catch(err => {
                        console.error("Lỗi khi cập nhật số dư ví về server:", err);
                    });
            }
            
            // Luôn đưa AI stack về đúng 32 
            self.balanceAIStack();
            console.log("AFTER player win - AI stack balanced to:", self.gameState.aiStack);
            
            // Đợi một chút rồi bắt đầu ván mới
            self.scheduleOnce(function() {
                self.startNewHand();
            }, 1.5);
        });
    } 
    else if (winner === "ai") {
        targetPos = this.topPlayer ? this.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);

        this.flyChipsFromPotToPlayer(targetPos, amountAfterFee, function() {
            // Cộng tiền vào stack của AI
            var oldStack = self.gameState.aiStack;
            self.gameState.aiStack += amountAfterFee;
            console.log("AI stack temporary increased from", oldStack, "to", self.gameState.aiStack);
            
            // Luôn đưa AI stack về đúng 32
            var surplus = self.gameState.aiStack - self.gameState.aiDefaultStack;
            if (surplus > 0) {
                console.log("Removing surplus", surplus, "chips from AI to maintain 32 chips");
            }
            
            self.balanceAIStack();
            self.gameState.pot = 0;
            
            // Ghi log số tiền AI sau khi cân bằng
            console.log("AFTER AI win - AI stack balanced to:", self.gameState.aiStack);
            
            self.updateStackDisplay();
            self.updatePotDisplay();
            
            self.scheduleOnce(function() {
                self.startNewHand();
            }, 1.5);
        });
    }
    else {
        // Xử lý trường hợp hòa
        var halfPot = totalPot / 2;
        var playerAmount = halfPot * 0.96;
        var aiAmount = halfPot * 0.96;

        // Ẩn container pot ban đầu nếu có
        if (potContainer) {
            potContainer.setVisible(false);
        }

        var playerPos = this.bottomPlayer ? this.bottomPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.19);
        this.flyChipsFromPotToPlayer(playerPos, playerAmount, function() {
            var aiPos = self.topPlayer ? self.topPlayer.getPosition() : cc.p(size.width / 2, size.height * 0.88);
            self.flyChipsFromPotToPlayer(aiPos, aiAmount, function() {
                // Cập nhật ví người chơi thay vì stack
                self.gameState.playerWallet += playerAmount;
                
                // Cộng tiền vào stack của AI trước khi balance
                var oldStack = self.gameState.aiStack;
                self.gameState.aiStack += aiAmount;
                console.log("AI stack temporary increased from", oldStack, "to", self.gameState.aiStack);
                
                // Luôn đưa AI stack về đúng 32
                self.balanceAIStack();
                self.gameState.pot = 0;
                
                // Ghi log số tiền AI sau khi cân bằng
                console.log("AFTER tie - AI stack balanced to:", self.gameState.aiStack);
                
                // Cập nhật stack từ ví
                self.refillPlayerStack();
                
                // Cập nhật hiển thị
                self.updateStackDisplay();
                self.updatePotDisplay();
                self.displayWalletInfo();
                
                // Đồng bộ số dư ví mới về server
                if (window.GameBackEndBridge) {
                    window.GameBackEndBridge.updateWalletDirectly(self.gameState.playerWallet)
                        .then(result => {
                            console.log("Đã cập nhật số dư ví mới về server sau khi hòa:", result);
                        })
                        .catch(err => {
                            console.error("Lỗi khi cập nhật số dư ví về server:", err);
                        });
                }
                
                self.scheduleOnce(function() {
                    self.startNewHand();
                }, 1.5);
            });
        });
    }
};
    
    // Sửa đổi balancePlayerStack để đồng bộ với server
    const originalBalancePlayer = MyScene.prototype.balancePlayerStack;
    
// Sửa lại hàm balancePlayerStack để đảm bảo luôn về đúng 32 sau khi thắng
MyScene.prototype.balancePlayerStack = function() {
    // Nếu stack > defaultStack, chuyển phần dư vào ví
    if (this.gameState.playerStack > this.gameState.playerDefaultStack) {
        // Tính số dư cần chuyển vào ví
        var surplus = this.gameState.playerStack - this.gameState.playerDefaultStack;

        console.log("Moving surplus chips to wallet:", surplus);

        // Chuyển phần dư vào ví
        this.gameState.playerWallet += surplus;

        // Đặt lại stack về giá trị mặc định
        this.gameState.playerStack = this.gameState.playerDefaultStack;

        console.log("Player stack balanced to exactly:", this.gameState.playerDefaultStack);
        console.log("Player wallet updated to:", this.gameState.playerWallet);
    }
    // Nếu stack < defaultStack, bổ sung từ ví nếu có thể
    else if (this.gameState.playerStack < this.gameState.playerDefaultStack) {
        this.refillPlayerStack();
    }
};
    
    // Thêm một phương thức tiện ích mới để kiểm tra và đồng bộ số dư ví
MyScene.prototype.syncWalletWithServer = function() {
    if (window.GameBackEndBridge) {
        window.GameBackEndBridge.updateWalletDirectly(this.gameState.playerWallet)
            .then(result => {
                console.log("Đã đồng bộ thành công số dư ví với server:", result);
            })
            .catch(err => {
                console.error("Lỗi khi đồng bộ số dư ví với server:", err);
            });
    }
};
    
    console.log("Đã tích hợp GameBackEndBridge với MyScene");
}
};

// Khởi tạo GameBackEndBridge sau khi trang đã load hoàn tất
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo GameBackEndBridge sau khi Telegram đã khởi tạo (nếu có)
    if (window.TelegramBridge) {
        // Đợi Telegram Bridge khởi tạo xong
        setTimeout(function() {
            window.GameBackEndBridge.initialize();
        }, 1000);
    } else {
        // Khởi tạo ngay nếu không có Telegram
        window.GameBackEndBridge.initialize();
    }
});

// Thông báo cho index.html biết rằng GameBridge đã sẵn sàng
document.dispatchEvent(new Event('gameBridgeReady'));

cc.game.run("gameCanvas");
};
