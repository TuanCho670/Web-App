System.register("chunks:///_virtual/g_init.ts", ["cc", "./xconfig.ts"], (function(e) {
    "use strict";
    var n, w, t, r, _, o, a, T, i, c, d;
    return {
        setters: [function(e) {
            n = e.cclegacy,
            w = e.Vec2,
            t = e.Vec3,
            r = e.js,
            _ = e.log,
            o = e.Overflow,
            a = e.UITransform,
            T = e.resources,
            i = e.SpriteFrame,
            c = e.tween
        }
        , function(e) {
            d = e.X_CONFIG
        }
        ],
        execute: function() {
            var u, R, I, f, l, E;
            e({
                g_card: void 0,
                g_const: void 0,
                g_func: void 0,
                g_speed: void 0
            }),
            n._RF.push({}, "17e8ccl+WhFZpIAn6yTmjLA", "g_init", void 0),
            function(e) {
                var n, r, _, o, a, T, i, c, d, u;
                e.CARD_NUM_2_STRING = ["0", "0", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"],
                e.CARD_COLOR_2_STRING = ["0", "1", "2", "3", "4"];
                !function(e) {
                    e[e.NONE = 0] = "NONE",
                    e[e.TWO = 2] = "TWO",
                    e[e.THREE = 3] = "THREE",
                    e[e.FOUR = 4] = "FOUR",
                    e[e.FIVE = 5] = "FIVE",
                    e[e.SIX = 6] = "SIX"
                }(u || (u = {})),
                e.HAND_COUNT = u;
                e.DEAL_CARD_POS = new w(0,270),
                e.SHOW_POT_COUNT = 4,
                e.MAX_POT_COUNT = 8,
                e.HILO_CARD_TYPE_NODE_POS = [[], [], [new w(-143,-80), new w(-143,-72)], [new w(5,-132), new w(-143,-80), new w(-5,-132)], [new w(0,-132), new w(-143,-80), new w(0,-132), new w(-143,-72)], [new w(15,-132), new w(-5,-132), new w(-143,-80), new w(5,-132), new w(-15,-132)], [new w(8,-132), new w(-5,-132), new w(-143,-80), new w(5,-132), new w(-8,-132), new w(-143,-72)], [new w(143,-72), new w(5,-132), new w(0,-132), new w(-143,-80), new w(0,-132), new w(-5,-132), new w(-143,-72)], [new w(0,-132), new w(0,-132), new w(0,-132), new w(-143,-80), new w(0,-132), new w(0,-132), new w(0,-132), new w(-143,-72)], [new w(143,-72), new w(0,-132), new w(0,-132), new w(-5,-132), new w(-143,-80), new w(5,-132), new w(0,-132), new w(0,-132), new w(-143,-72)]],
                e.HEAD_NODE_POS = [[], [], [new w(0,-437), new w(0,528)], [new w(255,388), new w(0,-437), new w(-255,388)], [new w(290,-42), new w(0,-437), new w(-290,-42), new w(0,525)], [new w(255,393), new w(295,-52), new w(0,-437), new w(-295,-52), new w(-255,393)], [new w(275,307), new w(295,-151), new w(0,-437), new w(-295,-151), new w(-275,307), new w(0,525)], [new w(135,503), new w(284,293), new w(285,-142), new w(0,-437), new w(-285,-142), new w(-284,293), new w(-135,503)], [new w(275,373), new w(290,8), new w(290,-232), new w(0,-437), new w(-290,-232), new w(-290,8), new w(-275,373), new w(0,525)], [new w(135,503), new w(284,303), new w(290,33), new w(297,-217), new w(0,-437), new w(-297,-217), new w(-290,33), new w(-284,303), new w(-135,503)]],
                e.DEALER_BUTTON_POS = [[], [], [new w(-91,35), new w(83,-55)], [new w(-100,-27), new w(-91,35), new w(100,-27)], [new w(-85,-92), new w(-91,35), new w(85,-92), new w(83,-55)], [new w(-95,-27), new w(-85,-85), new w(-91,35), new w(85,-85), new w(95,-27)], [new w(-81,0), new w(-85,-50), new w(-91,35), new w(85,-50), new w(81,0), new w(83,-55)], [new w(-81,-88), new w(-96,-125), new w(-88,-50), new w(-91,35), new w(88,-50), new w(96,-125), new w(81,-88)], [new w(-90,-71), new w(-81,-90), new w(-81,-90), new w(-91,35), new w(81,-90), new w(81,-90), new w(90,-71), new w(81,-91)], [new w(-81,-25), new w(-81,-12), new w(-79,-92), new w(-81,-70), new w(-91,35), new w(81,-70), new w(79,-92), new w(81,-12), new w(81,-25)]],
                e.BET_CHIPS_POS = [[], [], [new w(-6,115), new w(-12,-135)], [new w(-100,-63), new w(-6,115), new w(100,-63)], [new w(-100,25), new w(-6,115), new w(100,25), new w(-12,-130)], [new w(-90,-63), new w(-85,25), new w(-6,115), new w(85,25), new w(90,-63)], [new w(-87,-115), new w(-85,-95), new w(-6,115), new w(85,-95), new w(87,-115), new w(-12,-135)], [new w(15,-123), new w(-92,-90), new w(-87,-97), new w(-12,113), new w(87,-97), new w(92,-90), new w(-15,-123)], [new w(-92,-34), new w(-83,-55), new w(-100,-28), new w(-6,115), new w(100,-28), new w(83,-55), new w(92,-34), new w(15,-127)], [new w(20,-135), new w(-87,-112), new w(-90,-54), new w(-110,-30), new w(-12,113), new w(110,-30), new w(90,-54), new w(87,-112), new w(-20,-135)]],
                e.BET_CHIPS_DIRECTION = [[], [], [0, 0], [1, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 0, 0, 0]],
                e.PUBLIC_CAED_POS = [new w(-170,0), new w(-85,0), new w(0,0), new w(85,0), new w(170,0)],
                e.DOUBLE_BOARD_CAED_POS = [new w(-170,-120), new w(-85,-120), new w(0,-120), new w(85,-120), new w(170,-120)],
                e.MULTI_CAED_POS = [[new t(-150,-120), new t(-75,-120), new t(0,-120), new t(75,-120), new t(150,-120)], [new t(-150,-230), new t(-75,-230), new t(0,-230), new t(75,-230), new t(150,-230)]];
                var R = e.NLH_PLO_ACTION_TAG_POS = {
                    RIGHT: new w(20,40),
                    LEFT: new w(-25,40)
                };
                e.NLH_PLO_ACTION_TAG_POS_RELACTIVE = ((d = {})[9] = ((n = {})[0] = R.LEFT,
                n[1] = R.LEFT,
                n[2] = R.LEFT,
                n[3] = R.LEFT,
                n[4] = R.RIGHT,
                n[5] = R.RIGHT,
                n[6] = R.RIGHT,
                n[7] = R.RIGHT,
                n[8] = R.RIGHT,
                n),
                d[8] = ((r = {})[0] = R.LEFT,
                r[1] = R.LEFT,
                r[2] = R.LEFT,
                r[3] = R.RIGHT,
                r[4] = R.RIGHT,
                r[5] = R.RIGHT,
                r[6] = R.RIGHT,
                r[7] = R.LEFT,
                r),
                d[7] = ((_ = {})[0] = R.LEFT,
                _[1] = R.LEFT,
                _[2] = R.LEFT,
                _[3] = R.RIGHT,
                _[4] = R.RIGHT,
                _[5] = R.RIGHT,
                _[6] = R.RIGHT,
                _),
                d[6] = ((o = {})[0] = R.LEFT,
                o[1] = R.LEFT,
                o[2] = R.RIGHT,
                o[3] = R.RIGHT,
                o[4] = R.RIGHT,
                o[5] = R.RIGHT,
                o),
                d[5] = ((a = {})[0] = R.LEFT,
                a[1] = R.LEFT,
                a[2] = R.RIGHT,
                a[3] = R.RIGHT,
                a[4] = R.RIGHT,
                a),
                d[4] = ((T = {})[0] = R.LEFT,
                T[1] = R.RIGHT,
                T[2] = R.RIGHT,
                T[3] = R.RIGHT,
                T),
                d[3] = ((i = {})[0] = R.LEFT,
                i[1] = R.RIGHT,
                i[2] = R.RIGHT,
                i),
                d[2] = ((c = {})[0] = R.RIGHT,
                c[1] = R.RIGHT,
                c),
                d)
            }(u || (u = e("g_const", {}))),
            (I = R || (R = e("g_speed", {}))).board_move = .15,
            I.deal_board = .18,
            I.deal_delay = .04,
            I.bet_chips_fly = .15,
            I.fold_card = .5,
            I.bet_chips_fly_to_pot = .3,
            I.card_fly_time = .4,
            I.turn_card_time = .24,
            (l = f || (f = e("g_card", {}))).decode_card = function(e) {
                return {
                    x_number: Math.floor(e % 256),
                    x_color: Math.floor(e / 256),
                    x_code: e
                }
            }
            ,
            l.get_card_image_by_code = function(e) {
                var n = "card/card_back_bg.png";
                if (0 == e)
                    return n;
                var w = f.decode_card(e)
                  , t = u.CARD_NUM_2_STRING[w.x_number]
                  , _ = u.CARD_COLOR_2_STRING[w.x_color];
                return null == t || null == _ || "0" == t || "0" == _ ? n : r.formatStr("card/number_%s_%s/spriteFrame", _, t)
            }
            ,
            function(e) {
                function n(e) {
                    var n = e.toString().split(".");
                    return n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    n.join(".")
                }
                e.x_log = function(e) {
                    if (0 != d.SHOW_LOG) {
                        for (var n = arguments.length, w = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
                            w[t - 1] = arguments[t];
                        _.call(this, "%c[%s] -- " + r.formatStr.apply(cc, [e, w]), "color:#b23aee;", (new Date).toLocaleString())
                    }
                }
                ,
                e.thousand_separate_num = n,
                e.display_number = function(e, w, t) {
                    void 0 === w && (w = !1),
                    void 0 === t && (t = !1);
                    var _ = Math.abs(e / 100)
                      , o = "";
                    if (_ >= 1e9)
                        _ >= 1e9 && (o = _ % 1e9 == 0 ? _ / 1e9 + "B" : Math.round(_ / 1e7) / 100 + "B");
                    else if (_ >= 1e6)
                        o = _ % 1e6 == 0 ? _ / 1e6 + "M" : Math.round(_ / 1e4) / 100 + "M";
                    else if (_ >= 1e5)
                        if (Math.floor(_) == _) {
                            var a = _ % 1e3;
                            o = 0 == a ? _ / 1e3 + "k" : 0 == (a = _ % 100) ? Math.round(_ / 100) / 10 + "K" : n(o = r.formatStr("%d", _))
                        } else
                            o = n(o = t ? _.toString() : Math.round(_) + "");
                    else
                        o = n(o = _ % 1 == 0 ? _.toString() : _.toFixed(2));
                    return e < 0 ? o = "-" + o : w && e > 0 && (o = "+" + o),
                    o
                }
                ,
                e.get_omit_string_with_width = function(e, n, w) {
                    if (e.overflow != o.NONE)
                        return n;
                    var t = "";
                    e.string = n,
                    e.updateRenderData(!0);
                    var r = e.getComponent(a);
                    if (null == r)
                        return n;
                    if (r.contentSize.width <= w)
                        return n;
                    for (var _ = 0, T = n.length; _ < T; ) {
                        var i = n.substring(_, _ + 1);
                        i = i || "",
                        e.string = t + i + "...",
                        e.updateRenderData(!0);
                        var c = e.getComponent(a);
                        if (c && c.contentSize.width > w) {
                            t += "...";
                            break
                        }
                        t += i,
                        _ += 1
                    }
                    return t
                }
                ,
                e.load_texture = function(e, n, w) {
                    T.load(n, i, (function(n, t) {
                        e.spriteFrame = t,
                        w && w()
                    }
                    ))
                }
                ,
                e.do_action_delay = function(e, n, w) {
                    if (e)
                        return c(e).delay(w || .05).call((function() {
                            n && n()
                        }
                        )).start()
                }
            }(E || (E = e("g_func", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/public_board.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts", "./poker_card.ts"], (function(_) {
    "use strict";
    var t, a, e, i, o, r, n, d, h, l, s, c, g, u, m, b, f, p, v, D, A, E, O;
    return {
        setters: [function(_) {
            t = _.cclegacy,
            a = _._decorator,
            e = _.Sprite,
            i = _.Label,
            o = _.tween,
            r = _.Vec3,
            n = _.Component,
            d = _.resources,
            h = _.Prefab,
            l = _.instantiate
        }
        , function(_) {
            s = _.g_const,
            c = _.g_func,
            g = _.g_speed
        }
        , function(_) {
            u = _.applyDecoratedDescriptor,
            m = _.inheritsLoose,
            b = _.initializerDefineProperty,
            f = _.assertThisInitialized,
            p = _.defineProperty,
            v = _.createForOfIteratorHelperLoose
        }
        , function(_) {
            D = _.g_type
        }
        , function(_) {
            A = _.g_instance
        }
        , function(_) {
            E = _.GAME_CONFIG
        }
        , function(_) {
            O = _.poker_card
        }
        ],
        execute: function() {
            var w, C, P, y, B, S, L, U, I, R, x, T, N, F, k, G, M, q, X;
            t._RF.push({}, "223d6sTOBNLTogDDFb1EaS5", "public_board", void 0);
            var z = a.ccclass
              , H = a.property;
            _("public_board", (w = z("public_board"),
            C = H({
                type: [O]
            }),
            P = H({
                type: [O]
            }),
            y = H(e),
            B = H(e),
            S = H(e),
            L = H(i),
            U = H(e),
            I = H(e),
            w((T = u((x = function(_) {
                function t() {
                    for (var t, a = arguments.length, e = new Array(a), i = 0; i < a; i++)
                        e[i] = arguments[i];
                    return t = _.call.apply(_, [this].concat(e)) || this,
                    b(f(t), "tb_card", T, f(t)),
                    b(f(t), "double_board_card", N, f(t)),
                    b(f(t), "showdown_bg", F, f(t)),
                    b(f(t), "showdown_type", k, f(t)),
                    b(f(t), "showdown_low_bg", G, f(t)),
                    b(f(t), "low_type", M, f(t)),
                    b(f(t), "db_showdown_bg", q, f(t)),
                    b(f(t), "db_showdown_type", X, f(t)),
                    p(f(t), "multi_card", []),
                    t
                }
                m(t, _);
                var a = t.prototype;
                return a.onLoad = function() {
                    for (var _ = 0; _ < 5; _++)
                        this.tb_card[_].node.active = !1,
                        this.tb_card[_].node.setPosition(s.PUBLIC_CAED_POS[_].x, s.PUBLIC_CAED_POS[_].y);
                    for (_ = 0; _ < 5; _++)
                        this.double_board_card[_].node.active = !1,
                        this.double_board_card[_].node.setPosition(s.DOUBLE_BOARD_CAED_POS[_].x, s.DOUBLE_BOARD_CAED_POS[_].y);
                    this.showdown_bg.node.active = !1,
                    this.showdown_low_bg.node.active = !1,
                    this.db_showdown_bg.node.active = !1,
                    this.create_public_cards(),
                    this.create_double_board_cards(),
                    this.create_multi_board_build()
                }
                ,
                a.create_public_cards = function() {
                    for (var _, t = A.game_data_manager.json_data.handInfo.round, a = [], e = v(t); !(_ = e()).done; ) {
                        var i = _.value;
                        if (i.card)
                            for (var o, r = v(i.card); !(o = r()).done; ) {
                                var n = o.value;
                                n && a.push(n)
                            }
                    }
                    for (var d = 0; d < a.length; d++)
                        this.tb_card[d] && this.tb_card[d].update_card(a[d])
                }
                ,
                a.create_double_board_cards = function() {
                    for (var _, t = A.game_data_manager.json_data.handInfo.round, a = [], e = v(t); !(_ = e()).done; ) {
                        var i = _.value;
                        if (i.double_board_card)
                            for (var o, r = v(i.double_board_card); !(o = r()).done; ) {
                                var n = o.value;
                                n && a.push(n)
                            }
                    }
                    for (var d = 0; d < a.length; d++)
                        this.double_board_card[d] && this.double_board_card[d].update_card(a[d])
                }
                ,
                a.create_multi_board_build = function() {
                    var _ = this
                      , t = A.game_data_manager.json_data.handInfo.risk_data;
                    if (0 != t.length)
                        for (var a = t[0].boards, e = function() {
                            var t = a[i]
                              , e = function() {
                                var a = s.PUBLIC_CAED_POS[o]
                                  , e = o;
                                d.load("prefabs/poker_card", h, (function(i, o) {
                                    var r = l(o);
                                    r.parent = _.node,
                                    r.setPosition(a.x, a.y),
                                    r.getComponent(O).update_card(t[e]),
                                    r.setScale(E.PUBLIC_CARD_SCALE, E.PUBLIC_CARD_SCALE, E.PUBLIC_CARD_SCALE),
                                    r.active = !1,
                                    _.multi_card.push(r)
                                }
                                ))
                            };
                            for (o = 0; o < s.PUBLIC_CAED_POS.length; o++)
                                e()
                        }, i = 0; i < a.length - 1; i++) {
                            var o;
                            e()
                        }
                }
                ,
                a.init_public_cards = function() {
                    var _, t = null === (_ = A.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.board_cards;
                    if (t && t.length > 0)
                        for (var a = 0; a < t.length; a++)
                            t[a] && t[a] > 0 && this.tb_card[a] && (this.tb_card[a].update_card(t[a]),
                            this.tb_card[a].node.active = !0);
                    this.init_multi_cards();
                    var e = D.is_double_board_room(A.game_mgr.game_sub_kind)
                      , i = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , o = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                    if (e || o && i) {
                        var r = A.game_mgr.enter_room_data.texas_game_detail.double_board_cards;
                        if (r && r.length > 0)
                            for (a = 0; a < r.length; a++)
                                r[a] && r[a] > 0 && this.double_board_card[a] && (this.double_board_card[a].update_card(r[a]),
                                this.double_board_card[a].node.active = !0)
                    }
                }
                ,
                a.set_flop_card = function(_, t, a) {
                    var e = this;
                    void 0 === t && (t = !0);
                    for (var i = function(i) {
                        var n = e.tb_card[i];
                        if (n.node.active = !0,
                        1 == t) {
                            n.node.setPosition(s.PUBLIC_CAED_POS[0].x, s.PUBLIC_CAED_POS[0].y),
                            n.card.node.active = !1;
                            var d = i
                              , h = A.game_mgr.get_animation_speed_specified(g.board_move)
                              , l = A.game_mgr.get_animation_speed_specified(g.turn_card_time);
                            o(n.node).call((function() {
                                n.update_card(_[d] || 0),
                                n.play_turn_card_ani()
                            }
                            )).delay(l).to(h, {
                                position: new r(s.PUBLIC_CAED_POS[d].x,s.PUBLIC_CAED_POS[d].y)
                            }).call((function() {
                                2 == i && a && a()
                            }
                            )).start()
                        } else
                            n.update_card(_[i] || 0)
                    }, n = 0; n < 3; n++)
                        i(n);
                    var d = D.is_double_board_room(A.game_mgr.game_sub_kind)
                      , h = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , l = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                    if (d || l && h)
                        for (var c = function(_) {
                            var i = e.double_board_card[_];
                            if (i.node.active = !0,
                            1 == t) {
                                i.node.setPosition(s.DOUBLE_BOARD_CAED_POS[0].x, s.DOUBLE_BOARD_CAED_POS[0].y),
                                i.card.node.active = !1;
                                var n = _
                                  , d = A.game_mgr.get_animation_speed_specified(g.board_move)
                                  , h = A.game_mgr.get_animation_speed_specified(g.turn_card_time);
                                o(i.node).call((function() {
                                    i.play_turn_card_ani()
                                }
                                )).delay(h).to(d, {
                                    position: new r(s.DOUBLE_BOARD_CAED_POS[n].x,s.DOUBLE_BOARD_CAED_POS[n].y)
                                }).call((function() {
                                    2 == _ && a && a()
                                }
                                )).start()
                            }
                        }, u = 0; u < 3; u++)
                            c(u)
                }
                ,
                a.set_turn_card = function(_, t, a) {
                    void 0 === t && (t = !0);
                    var e = this.tb_card[3];
                    e.node.active = !0,
                    e.node.setPosition(s.PUBLIC_CAED_POS[3].x, s.PUBLIC_CAED_POS[3].y),
                    e.update_card(_),
                    1 == t && e.play_turn_card_ani(),
                    a && a();
                    var i = D.is_double_board_room(A.game_mgr.game_sub_kind)
                      , o = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , r = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                    if (i || r && o) {
                        var n = this.double_board_card[3];
                        n.node.active = !0,
                        n.node.setPosition(s.DOUBLE_BOARD_CAED_POS[3].x, s.DOUBLE_BOARD_CAED_POS[3].y),
                        1 == t && n.play_turn_card_ani()
                    }
                }
                ,
                a.set_river_card = function(_, t, a) {
                    void 0 === t && (t = !0);
                    var e = this.tb_card[4];
                    e.node.setPosition(s.PUBLIC_CAED_POS[4].x, s.PUBLIC_CAED_POS[4].y),
                    e.update_card(_),
                    e.node.active = !0,
                    1 == t && e.play_turn_card_ani(),
                    a && a();
                    var i = D.is_double_board_room(A.game_mgr.game_sub_kind)
                      , o = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , r = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                    if (i || r && o) {
                        var n = this.double_board_card[4];
                        n.node.setPosition(s.DOUBLE_BOARD_CAED_POS[4].x, s.DOUBLE_BOARD_CAED_POS[4].y),
                        n.node.active = !0,
                        1 == t && n.play_turn_card_ani()
                    }
                }
                ,
                a.set_all_visible = function(_) {
                    for (var t, a = v(this.tb_card); !(t = a()).done; ) {
                        t.value.node.active = _
                    }
                }
                ,
                a.turn_card_insurance = function() {
                    this.tb_card[3].play_insurance_ani()
                }
                ,
                a.river_card_insurance = function() {
                    this.tb_card[4].play_insurance_ani()
                }
                ,
                a.on_realtime_highlight_card_hi = function(_, t, a, e) {
                    var i = this;
                    if (void 0 === _ && (_ = !1),
                    t) {
                        for (var o = 0; o < 5; o++) {
                            for (var r, n = this.tb_card[o], d = n.code, h = !1, l = v(t); !(r = l()).done; ) {
                                if (r.value.x_code == d) {
                                    h = !0;
                                    break
                                }
                            }
                            n.show_high_light(h),
                            n.show_gray_mask(!h),
                            h && _ ? n.node.setPosition(s.PUBLIC_CAED_POS[o].x, s.PUBLIC_CAED_POS[o].y + 10) : n.node.setPosition(s.PUBLIC_CAED_POS[o].x, s.PUBLIC_CAED_POS[o].y),
                            _ || n.show_gray_mask(!1)
                        }
                        if (a && a > 0) {
                            c.load_texture(this.db_showdown_type, "table/highlight/highlight_high/spriteFrame", (function() {
                                i.db_showdown_bg.node.active = !0
                            }
                            ))
                        } else
                            this.db_showdown_bg.node.active = !1;
                        if (a && a > 0) {
                            var g = "table/highlight/card_highlight_high/spriteFrame";
                            10 == a ? g = "table/highlight/card_highlight_high/spriteFrame" : 20 == a ? g = "table/highlight/card_highlight_pair/spriteFrame" : 30 == a ? g = "table/highlight/card_highlight_twopair/spriteFrame" : 40 == a ? g = "table/highlight/card_highlight_three/spriteFrame" : 50 == a ? g = "table/highlight/card_highlight_straight/spriteFrame" : 60 == a || 75 == a ? g = "table/highlight/card_highlight_flush/spriteFrame" : 70 == a ? g = "table/highlight/card_highlight_fullhouse/spriteFrame" : 80 == a ? g = "table/highlight/card_highlight_quads/spriteFrame" : 90 == a ? g = "table/highlight/card_highlight_straightflush/spriteFrame" : 100 == a && (g = "table/highlight/card_highlight_royalflush/spriteFrame"),
                            c.load_texture(this.showdown_type, g, (function() {
                                i.showdown_bg.node.active = !0
                            }
                            ))
                        } else
                            this.showdown_bg.node.active = !1
                    }
                }
                ,
                a.on_realtime_highlight_card_low = function(_, t, a, e) {
                    var i = this;
                    if (void 0 === _ && (_ = !1),
                    t) {
                        for (var o = 0; o < 5; o++) {
                            for (var r, n = this.tb_card[o], d = n.code, h = !1, l = v(t); !(r = l()).done; ) {
                                if (r.value.x_code == d) {
                                    h = !0;
                                    break
                                }
                            }
                            n.show_high_light(h),
                            n.show_gray_mask(!h),
                            h && _ ? n.node.setPosition(s.PUBLIC_CAED_POS[o].x, s.PUBLIC_CAED_POS[o].y + 10) : n.node.setPosition(s.PUBLIC_CAED_POS[o].x, s.PUBLIC_CAED_POS[o].y),
                            _ || n.show_gray_mask(!1)
                        }
                        if (a) {
                            c.load_texture(this.db_showdown_type, "table/highlight/highlight_low/spriteFrame", (function() {
                                i.db_showdown_bg.node.active = !0
                            }
                            )),
                            this.showdown_low_bg.node.active = !0;
                            var g = a.replace("A", "1");
                            this.low_type.string = g
                        } else
                            this.showdown_low_bg.node.active = !1;
                        c.x_log("on_realtime_highlight_card_hi", a),
                        this.showdown_bg.node.active = !1
                    }
                }
                ,
                a.on_realtime_highlight_card = function(_, t, a, e, i) {
                    var o = this;
                    if (void 0 === _ && (_ = !1),
                    void 0 === i && (i = !1),
                    t) {
                        for (var r = 0; r < 5; r++) {
                            for (var n, d = this.tb_card[r], h = d.code, l = !1, g = v(t); !(n = g()).done; ) {
                                if (n.value.x_code == h) {
                                    l = !0;
                                    break
                                }
                            }
                            d.show_high_light(l),
                            d.show_gray_mask(!l),
                            l && _ ? i ? d.node.setPosition(s.DOUBLE_BOARD_CAED_POS[r].x, s.DOUBLE_BOARD_CAED_POS[r].y + 10) : d.node.setPosition(s.PUBLIC_CAED_POS[r].x, s.PUBLIC_CAED_POS[r].y + 10) : i ? d.node.setPosition(s.DOUBLE_BOARD_CAED_POS[r].x, s.DOUBLE_BOARD_CAED_POS[r].y) : d.node.setPosition(s.PUBLIC_CAED_POS[r].x, s.PUBLIC_CAED_POS[r].y),
                            _ || d.show_gray_mask(!1)
                        }
                        var u = D.is_double_board_room(A.game_mgr.game_sub_kind)
                          , m = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                          , b = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                        if (u || b && m) {
                            for (r = 0; r < 5; r++) {
                                for (var f, p = this.double_board_card[r], E = p.code, O = !1, w = v(t); !(f = w()).done; ) {
                                    if (f.value.x_code == E) {
                                        O = !0;
                                        break
                                    }
                                }
                                p.show_high_light(O),
                                p.show_gray_mask(!O),
                                O && _ ? i ? p.node.setPosition(s.PUBLIC_CAED_POS[r].x, s.PUBLIC_CAED_POS[r].y + 10) : p.node.setPosition(s.DOUBLE_BOARD_CAED_POS[r].x, s.DOUBLE_BOARD_CAED_POS[r].y + 10) : i ? p.node.setPosition(s.PUBLIC_CAED_POS[r].x, s.PUBLIC_CAED_POS[r].y) : p.node.setPosition(s.DOUBLE_BOARD_CAED_POS[r].x, s.DOUBLE_BOARD_CAED_POS[r].y),
                                _ || p.show_gray_mask(!1)
                            }
                            if (a && a > 0) {
                                var C = "table/highlight/highlight_board1/spriteFrame";
                                i && (C = "table/highlight/highlight_board2/spriteFrame"),
                                c.load_texture(this.db_showdown_type, C, (function() {
                                    o.db_showdown_bg.node.active = !0
                                }
                                ))
                            } else
                                this.db_showdown_bg.node.active = !1
                        }
                        if (a && a > 0) {
                            var P = "table/highlight/card_highlight_high/spriteFrame";
                            10 == a ? P = "table/highlight/card_highlight_high/spriteFrame" : 20 == a ? P = "table/highlight/card_highlight_pair/spriteFrame" : 30 == a ? P = "table/highlight/card_highlight_twopair/spriteFrame" : 40 == a ? P = "table/highlight/card_highlight_three/spriteFrame" : 50 == a ? P = "table/highlight/card_highlight_straight/spriteFrame" : 60 == a || 75 == a ? P = "table/highlight/card_highlight_flush/spriteFrame" : 70 == a ? P = "table/highlight/card_highlight_fullhouse/spriteFrame" : 80 == a ? P = "table/highlight/card_highlight_quads/spriteFrame" : 90 == a ? P = "table/highlight/card_highlight_straightflush/spriteFrame" : 100 == a && (P = "table/highlight/card_highlight_royalflush/spriteFrame"),
                            c.load_texture(this.showdown_type, P, (function() {
                                o.showdown_bg.node.active = !0
                            }
                            ))
                        } else
                            this.showdown_bg.node.active = !1
                    }
                }
                ,
                a.unhighlight_public_card = function() {
                    for (var _, t = v(this.tb_card); !(_ = t()).done; ) {
                        _.value.show_high_light(!1)
                    }
                }
                ,
                a.clean_other_ui = function() {
                    this.db_showdown_bg.node.active = !1,
                    this.showdown_low_bg.node.active = !1
                }
                ,
                a.clean_public_cards = function(_) {
                    for (var t = 0; t < 5; t++) {
                        var a = s.PUBLIC_CAED_POS[t];
                        this.tb_card[t].node.setPosition(a.x, a.y),
                        this.tb_card[t].node.active = !1
                    }
                    var e = D.is_double_board_room(A.game_mgr.game_sub_kind)
                      , i = A.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , o = A.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                    if (e || o && i)
                        for (t = 0; t < 5; t++) {
                            var r = s.DOUBLE_BOARD_CAED_POS[t];
                            this.double_board_card[t].node.setPosition(r.x, r.y),
                            this.double_board_card[t].node.active = !1
                        }
                }
                ,
                a.clean_multi_public_cards = function(_) {
                    A.game_mgr.enter_room_data.texas_game_detail.multi_times_boards;
                    for (var t, a = v(this.multi_card); !(t = a()).done; ) {
                        t.value.active = !1
                    }
                    if (this.multi_card && !(this.multi_card.length <= 0))
                        for (var e = 0; e < 5; e++) {
                            var i = s.PUBLIC_CAED_POS[e];
                            this.multi_card[e].setPosition(i.x, i.y),
                            this.multi_card[e].active = !1,
                            this.multi_card.length > 5 && (this.multi_card[e + 5].setPosition(i.x, i.y),
                            this.multi_card[e + 5].active = !1)
                        }
                }
                ,
                a.update_game_public_board = function(_, t) {
                    var a = !1;
                    t && (a = !0);
                    for (var e, i = 0, o = v(_); !(e = o()).done; ) {
                        e.value;
                        i += 1
                    }
                    if (i > 0) {
                        var r = A.game_mgr.enter_room_data.texas_game_detail.curr_round;
                        this.create_public_card_with_animation(r, a)
                    } else
                        A.game_task_queue.attemp_done("TEXAS_ROUND_BEGIN")
                }
                ,
                a.create_public_card_with_animation = function(_, t) {
                    var a = this
                      , e = function() {
                        c.do_action_delay(a, (function() {
                            A.game_task_queue.attemp_done("TEXAS_ROUND_BEGIN"),
                            A.game_card_highlight.show_card_highlight()
                        }
                        ), .4)
                    };
                    if (_ == E.ENUM_ROUND_STAGE.FLOP) {
                        var i = A.game_mgr.enter_room_data.texas_game_detail.board_cards;
                        this.set_flop_card(i, !0, e)
                    } else if (_ == E.ENUM_ROUND_STAGE.TURN) {
                        var o = A.game_mgr.enter_room_data.texas_game_detail.board_cards;
                        this.set_turn_card(o[3], !0, e)
                    } else if (_ == E.ENUM_ROUND_STAGE.RIVER) {
                        var r = A.game_mgr.enter_room_data.texas_game_detail.board_cards;
                        this.set_river_card(r[4], !0, e)
                    }
                }
                ,
                a.change_first_row_and_double_board_pos = function() {
                    for (var _ = 0; _ < 5; _++) {
                        var t = s.PUBLIC_CAED_POS[_]
                          , a = s.DOUBLE_BOARD_CAED_POS[_]
                          , e = this.tb_card[_]
                          , i = this.double_board_card[_];
                        o(e.node).to(.3, {
                            position: new r(a.x,a.y)
                        }, {
                            easing: "quadOut"
                        }).start(),
                        o(i.node).to(.3, {
                            position: new r(t.x,t.y)
                        }, {
                            easing: "quadOut"
                        }).start()
                    }
                }
                ,
                a.on_multi_board_build = function(_) {
                    var t = A.game_mgr.enter_room_data.texas_game_detail.curr_round;
                    t == D.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_PREFLOP ? this.deal_multi_round_preflop(_) : t == D.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_FLOP ? this.deal_multi_round_flop(_) : t == D.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_TURN ? this.deal_multi_round_turn(_) : t == D.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_RIVER && this.deal_multi_round_river(_)
                }
                ,
                a.deal_multi_round_preflop = function(_) {
                    for (var t = this, a = _.multi_count, e = _.boards, i = 0, o = function() {
                        var _ = e[r]
                          , o = r;
                        for (A.game_mgr.update_game_public_card({
                            board_cards: _
                        }),
                        n = 0; n < _.length; n++)
                            2 == n && (c.do_action_delay(t, (function() {
                                t.set_flop_card(_)
                            }
                            ), i),
                            i += 1.5),
                            3 == n && (c.do_action_delay(t, (function() {
                                t.set_turn_card(_[3])
                            }
                            ), i),
                            i += .8),
                            4 == n && (c.do_action_delay(t, (function() {
                                t.set_river_card(_[4])
                            }
                            ), i),
                            i += .8);
                        c.do_action_delay(t, (function() {
                            A.game_card_highlight.show_multi_highlight_animation(o)
                        }
                        ), i),
                        i += 1,
                        o < e.length - 1 ? (t.multi_card_move(a, o, i),
                        i += .2) : o == e.length - 1 && (i += .2,
                        c.do_action_delay(t, (function() {
                            A.game_task_queue.attemp_done("TEXAS_MULTI_BOARD_CREATE")
                        }
                        ), i))
                    }, r = 0; r < e.length; r++) {
                        var n;
                        o()
                    }
                }
                ,
                a.deal_multi_round_flop = function(_) {
                    for (var t = this, a = _.multi_count, e = _.boards, i = 0, o = function() {
                        var _ = e[r]
                          , o = r;
                        for (A.game_mgr.update_game_public_card({
                            board_cards: _
                        }),
                        n = 0; n < _.length; n++)
                            3 == n && (c.do_action_delay(t, (function() {
                                t.set_turn_card(_[3])
                            }
                            ), i),
                            i += .8),
                            4 == n && (c.do_action_delay(t, (function() {
                                t.set_river_card(_[4])
                            }
                            ), i),
                            i += .8);
                        c.do_action_delay(t, (function() {
                            A.game_card_highlight.show_multi_highlight_animation(o)
                        }
                        ), i),
                        i += 1,
                        o < e.length - 1 ? (t.multi_card_move(a, o, i, 3),
                        i += .2) : o == e.length - 1 && (i += .2,
                        c.do_action_delay(t, (function() {
                            A.game_task_queue.attemp_done("TEXAS_MULTI_BOARD_CREATE")
                        }
                        ), i))
                    }, r = 0; r < e.length; r++) {
                        var n;
                        o()
                    }
                }
                ,
                a.deal_multi_round_turn = function(_) {
                    for (var t = this, a = _.multi_count, e = _.boards, i = 0, o = function() {
                        var _ = e[r]
                          , o = r;
                        for (A.game_mgr.update_game_public_card({
                            board_cards: _
                        }),
                        n = 0; n < _.length; n++)
                            4 == n && (c.do_action_delay(t, (function() {
                                t.set_river_card(_[4])
                            }
                            ), i),
                            i += .8);
                        c.do_action_delay(t, (function() {
                            A.game_card_highlight.show_multi_highlight_animation(o)
                        }
                        ), i),
                        i += 1,
                        o < e.length - 1 ? (t.multi_card_move(a, o, i, 4),
                        i += .2) : o == e.length - 1 && (i += .2,
                        c.do_action_delay(t, (function() {
                            A.game_task_queue.attemp_done("TEXAS_MULTI_BOARD_CREATE")
                        }
                        ), i))
                    }, r = 0; r < e.length; r++) {
                        var n;
                        o()
                    }
                }
                ,
                a.deal_multi_round_river = function(_) {
                    A.game_task_queue.attemp_done("TEXAS_MULTI_BOARD_CREATE")
                }
                ,
                a.multi_card_move = function(_, t, a, e) {
                    var i = this;
                    void 0 === e && (e = 0);
                    var n = t;
                    c.do_action_delay(this, (function() {
                        A.game_card_highlight.hide_highlight_animation();
                        for (var t = 0; t < 5; t++)
                            t >= e && (i.tb_card[t].node.active = !1);
                        if (2 == _) {
                            var a = s.MULTI_CAED_POS[0];
                            for (t = 0; t < 5; t++)
                                t >= e && (i.multi_card[t].active = !0,
                                i.multi_card[t].getComponent(O).show_multi_card(),
                                o(i.multi_card[t]).to(.2, {
                                    position: a[t],
                                    scale: new r(E.HAND_CARD_SCALE,E.HAND_CARD_SCALE,0)
                                }, {
                                    easing: "quadOut"
                                }).start())
                        }
                        if (3 == _) {
                            var d = s.MULTI_CAED_POS[1]
                              , h = 0;
                            1 == n && (h = 5,
                            d = s.MULTI_CAED_POS[0]);
                            for (t = 0; t < 5; t++)
                                t >= e && (i.multi_card[t + h].active = !0,
                                i.multi_card[t + h].getComponent(O).show_multi_card(),
                                o(i.multi_card[t + h]).to(.2, {
                                    position: d[t],
                                    scale: new r(E.HAND_CARD_SCALE,E.HAND_CARD_SCALE,0)
                                }, {
                                    easing: "quadOut"
                                }).start())
                        }
                    }
                    ), a)
                }
                ,
                a.init_multi_cards = function() {
                    var _ = A.game_mgr.enter_room_data.texas_game_detail.board_cards
                      , t = A.game_mgr.enter_room_data.texas_game_detail.multi_times_boards;
                    if (t && !(t.length <= 0))
                        for (var a = t.length, e = 0; e < t.length; e++) {
                            var i = e;
                            if (e == t.length - 1)
                                this.set_flop_card(t[e], !1),
                                this.set_turn_card(t[e][3], !1),
                                this.set_river_card(t[e][4], !1);
                            else {
                                if (2 == a)
                                    for (var n = s.MULTI_CAED_POS[0], d = 0; d < 5; d++)
                                        d >= _.length && (this.multi_card[d].active = !0,
                                        this.multi_card[d].getComponent(O).show_multi_card(),
                                        o(this.multi_card[d]).to(0, {
                                            position: n[d],
                                            scale: new r(E.HAND_CARD_SCALE,E.HAND_CARD_SCALE,0)
                                        }, {
                                            easing: "quadOut"
                                        }).start());
                                if (3 == a) {
                                    var h = s.MULTI_CAED_POS[1]
                                      , l = 0;
                                    1 == i && (l = 5,
                                    h = s.MULTI_CAED_POS[0]);
                                    for (var c = 0; c < 5; c++)
                                        c >= _.length && (this.multi_card[c + l].active = !0,
                                        this.multi_card[c + l].getComponent(O).show_multi_card(),
                                        o(this.multi_card[c + l]).to(0, {
                                            position: h[c],
                                            scale: new r(E.HAND_CARD_SCALE,E.HAND_CARD_SCALE,0)
                                        }, {
                                            easing: "quadOut"
                                        }).start())
                                }
                            }
                        }
                }
                ,
                t
            }(n)).prototype, "tb_card", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            N = u(x.prototype, "double_board_card", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            F = u(x.prototype, "showdown_bg", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = u(x.prototype, "showdown_type", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = u(x.prototype, "showdown_low_bg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = u(x.prototype, "low_type", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = u(x.prototype, "db_showdown_bg", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            X = u(x.prototype, "db_showdown_type", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = x)) || R));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/deal_card_controller.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(e) {
    "use strict";
    var a, t, r, _, n, l, s, d, i, o, c, p, y, h;
    return {
        setters: [function(e) {
            a = e.cclegacy,
            t = e._decorator,
            r = e.resources,
            _ = e.Prefab,
            n = e.instantiate,
            l = e.UIOpacity,
            s = e.tween,
            d = e.Vec3,
            i = e.Component
        }
        , function(e) {
            o = e.g_const
        }
        , function(e) {
            c = e.inheritsLoose,
            p = e.defineProperty,
            y = e.assertThisInitialized
        }
        , function(e) {
            h = e.g_instance
        }
        ],
        execute: function() {
            var f;
            a._RF.push({}, "2d867jQPxROOI7kcWGyOdKU", "deal_card_controller", void 0);
            var u = t.ccclass;
            t.property,
            e("deal_card_controller", u("deal_card_controller")(f = function(e) {
                function a() {
                    for (var a, t = arguments.length, r = new Array(t), _ = 0; _ < t; _++)
                        r[_] = arguments[_];
                    return a = e.call.apply(e, [this].concat(r)) || this,
                    p(y(a), "deal_players", []),
                    p(y(a), "card_fly", .18),
                    p(y(a), "deal_delay", .04),
                    a
                }
                c(a, e);
                var t = a.prototype;
                return t.clean_deal_players = function() {
                    this.deal_players = []
                }
                ,
                t.add_deal_player = function(e) {
                    this.deal_players.push(e)
                }
                ,
                t.start_deal_card = function() {
                    var e = h.game_mgr.hand_count
                      , a = e * this.deal_players.length;
                    e == o.HAND_COUNT.TWO ? (this.deal_delay = .04,
                    this.card_fly = .2) : a <= 15 ? (this.deal_delay = .06,
                    this.card_fly = .18) : a <= 25 ? (this.deal_delay = .04,
                    this.card_fly = .18) : a <= 40 && (this.deal_delay = .02,
                    this.card_fly = .16);
                    for (var t = 0, r = 0; r < e; r++)
                        for (var _ = 0; _ < this.deal_players.length; _++)
                            this.deal_one_card(this.deal_players[_], r, t, _),
                            t += h.game_mgr.get_animation_speed_specified(this.deal_delay)
                }
                ,
                t.deal_one_card = function(e, a, t, i) {
                    var c = this
                      , p = e.get_pos();
                    r.load("prefabs/poker_card", _, (function(r, _) {
                        var y = n(_);
                        y.parent = c.node,
                        y.setPosition(o.DEAL_CARD_POS.x, o.DEAL_CARD_POS.y),
                        y.setScale(.3, .3),
                        y.addComponent(l);
                        var f = y.getComponent(l);
                        f.opacity = 0;
                        var u = h.game_mgr.my_seat_id;
                        u == e.seat_id && (p.x = p.x + 100),
                        s(y).delay(t).to(h.game_mgr.get_animation_speed_specified(c.card_fly), {
                            position: new d(p.x,p.y)
                        }).call((function() {
                            u == e.seat_id ? e.show_my_hand_card(a, !1) : e.set_hand_card_back_visible(!0, a),
                            a == h.game_mgr.hand_count - 1 && i == c.deal_players.length - 1 && h.game_task_queue.attemp_done("TEXAS_DEAL_CARD")
                        }
                        )).removeSelf().start(),
                        s(f).delay(t).to(h.game_mgr.get_animation_speed_specified(c.card_fly), {
                            opacity: 255
                        }).start()
                    }
                    ))
                }
                ,
                a
            }(i)) || f);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/protocol_table.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./game_config.ts"], (function(_) {
    "use strict";
    var a, e, t, r, m;
    return {
        setters: [function(_) {
            a = _.cclegacy
        }
        , function(_) {
            e = _.g_func
        }
        , function(_) {
            t = _.createForOfIteratorHelperLoose
        }
        , function(_) {
            r = _.g_instance
        }
        , function(_) {
            m = _.GAME_CONFIG
        }
        ],
        execute: function() {
            a._RF.push({}, "2e2f3CjqdhHVJIdSmf/J8oz", "protocol_table", void 0);
            _("protocol_table", function() {
                function _() {}
                var a = _.prototype;
                return a.recv_msg_TexasGameStartS2A = function(_) {
                    e.x_log("牌桌开始");
                    var a = function() {
                        r.game_mgr.on_update_info_while_game_start(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_TABLE_GAME_START_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_GAME_START", a)
                }
                ,
                a.recv_msg_TexasRoundEndS2A = function(_) {
                    e.x_log("回合结束");
                    var a = function() {
                        r.game_mgr.update_pot_info(_.pot),
                        r.game_mgr.update_turn_to_player_action(-1);
                        for (var a = [], e = r.game_mgr.enter_room_data.texas_game_detail.seat_detail, t = 0; t < e.length; t++)
                            e[t] && e[t].is_on_seat && (e[t].action_kind,
                            m.ACTION_TO_NUM.ACTION_SITED),
                            e[t].inpot_chips && e[t].inpot_chips > 0 && a.push(t);
                        if (r.game_mgr.refresh_data_while_new_round(),
                        r.game_mgr.clean_all_player_bet_value(),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD)
                            r.evt_center.dispatch_event("EVT_ROUND_END_BRC", {
                                params: _,
                                extra: {
                                    bet_players: a
                                }
                            });
                        else
                            for (var o, A = null === (o = r.game_mgr.enter_room_data.texas_game_detail) || void 0 === o ? void 0 : o.seat_detail, g = 0; g < A.length; g++) {
                                var n = A[g];
                                n.is_on_seat && (n.action_kind == m.ACTION_TO_NUM.ACTION_FOLD || 0 == n.playing_chips || r.game_mgr.update_player_key_data(g, "action_kind", 0))
                            }
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_ROUND_END", a)
                }
                ,
                a.recv_msg_SushiGameEventS2A = function(_) {
                    var a = function() {
                        r.game_mgr.update_sushi_bonus(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_SUSHI_REWARD_CHANGE_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("SUSHI_REWARD_CHANGE", a)
                }
                ,
                a.recv_msg_TexasGameActionS2A = function(_) {
                    var a = function() {
                        var a;
                        e.x_log("是否需要操作提醒", _.remind),
                        _.remind && r.game_mgr.turn_to_which_player_action(_);
                        var t = _.seat_id
                          , o = _.action
                          , A = _.action_chips
                          , g = _.remaining_chips;
                        e.x_log("某人行动", _.seat_id, _.action, _.action_chips),
                        e.x_log("操作 ", m.NUM_TO_ACTION[o]);
                        var n = null === (a = r.game_mgr.enter_room_data.texas_game_detail) || void 0 === a ? void 0 : a.seat_detail;
                        for (n[t] && (n[t].action_kind = o); ; ) {
                            if (o == m.ACTION_TO_NUM.ACTION_BET) {
                                r.game_mgr.on_somebody_bet(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_FOLD || o == m.ACTION_TO_NUM.ACTION_FLASH_FOLD) {
                                r.game_mgr.on_somebody_fold(t);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_AUTO_FOLD) {
                                r.game_mgr.on_somebody_fold(t);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_CHECK) {
                                r.game_mgr.on_somebody_check(t);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_AUTO_CHECK) {
                                r.game_mgr.on_somebody_check(t);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_CALL || o == m.ACTION_TO_NUM.ACTION_POST_BB) {
                                r.game_mgr.on_somebody_call(t, A, g, o);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_RAISE) {
                                r.game_mgr.on_somebody_raise(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_NONE || o == m.ACTION_TO_NUM.ACTION_SITED)
                                break;
                            if (o == m.ACTION_TO_NUM.ACTION_SB) {
                                r.game_mgr.on_somebody_blind(t, A, g, 1);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_BB) {
                                r.game_mgr.on_somebody_blind(t, A, g, 2);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_ANTE) {
                                r.game_mgr.on_somebody_blind(t, A, g, 3);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_STRADDLE) {
                                r.game_mgr.on_somebody_straddle(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_POT) {
                                r.game_mgr.on_somebody_pot(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_BOMB_POT) {
                                r.game_mgr.on_somebody_bomb_pot(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE) {
                                r.game_mgr.on_somebody_voluntary_straddle(t, A, g);
                                break
                            }
                            if (o == m.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE) {
                                r.game_mgr.on_somebody_voluntary_restraddle(t, A, g);
                                break
                            }
                            break
                        }
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_SOMEONE_ACTION_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task(m.NUM_TO_ACTION[_.action], a)
                }
                ,
                a.recv_msg_TexasRoundBeginS2A = function(_) {
                    e.x_log("回合开始 ", _.round);
                    var a = function() {
                        var a = r.game_mgr.game_stage == m.ENUM_ROOM_STAGE.WAIT;
                        r.game_mgr.update_data_while_round_start(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_ROUND_START_BRC", {
                            params: _,
                            is_from_wait_stage: a
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_ROUND_BEGIN", a)
                }
                ,
                a.recv_msg_WaitNLH31DiscardCardNoticeS2A = function(_) {
                    e.x_log("等待NLH31弃牌 ", _.discard_card);
                    var a = function() {
                        var a = r.game_mgr.my_seat_id;
                        if (a >= 0) {
                            for (var e, t = null === (e = r.game_mgr.enter_room_data.texas_game_detail) || void 0 === e ? void 0 : e.seat_detail, o = t[a].hand_cards, A = [0, 0, 0, 0, 0, 0], g = 0, n = 0; n < o.length; n++)
                                o[n] > 0 && o[n] != _.discard_card && (A[g] = o[n],
                                g++);
                            t[a].hand_cards = A
                        }
                        var s = r.game_mgr.enter_room_data.texas_player_detail
                          , i = s.hand_cards
                          , c = [0, 0, 0, 0, 0, 0]
                          , T = 0;
                        for (n = 0; n < i.length; n++)
                            i[n] > 0 && i[n] != _.discard_card && (c[T] = i[n],
                            T++);
                        s.hand_cards = c,
                        r.game_mgr.is_nlh31_discard_card = !0,
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_NLH31_DISCARD_CARD_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_DEAL_NLH31_DISCARD_CARD", a)
                }
                ,
                a.recv_msg_TexasSelfHandS2A = function(_) {
                    e.x_log("获得手牌", _.seat_id),
                    _.hands.sort((function(_, a) {
                        return Math.floor(_ % 256) < Math.floor(a % 256) ? 1 : Math.floor(_ % 256) > Math.floor(a % 256) ? -1 : 0
                    }
                    ));
                    var a = function() {
                        var a;
                        r.game_mgr.clean_player_hand_card_data();
                        var e = r.game_mgr.my_seat_id
                          , t = null === (a = r.game_mgr.enter_room_data.texas_game_detail) || void 0 === a ? void 0 : a.seat_detail;
                        e >= 0 && (t[e].hand_cards = _.hands),
                        r.game_mgr.enter_room_data.texas_player_detail.hand_cards = _.hands;
                        for (var o = r.game_mgr.seat_count, A = r.game_mgr.enter_room_data.texas_game_detail.sb_seat_id, g = A + o, n = A; n < g; n++) {
                            var s = n;
                            t[s = n <= o - 1 ? n : n - o].action_kind;
                            t[s].is_on_seat && r.game_mgr.update_player_key_data(s, "hold_hand", !0)
                        }
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_DEAL_HAND_CARD_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_DEAL_CARD", a)
                }
                ,
                a.recv_msg_ActionInfoBroadcastS2A = function(_) {
                    e.x_log("轮到某人行动", _.seat_id);
                    var a = function() {
                        r.game_mgr.turn_to_which_player_action(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_TURN_SOMEONE_ACTION", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_ACTION_HINT", a)
                }
                ,
                a.recv_msg_ReturnExcessChipsS2A = function(_) {
                    var a = function() {
                        var a = _.seat_id
                          , e = _.excess_chips || 0;
                        if (_.action_kind == m.ACTION_TO_NUM.ACTION_ANTE) {
                            var t = r.game_mgr.total_ante_value;
                            (t -= e) < 0 && (t = 0),
                            r.game_mgr.total_ante_value = t
                        } else {
                            var o = r.game_mgr.get_player_key_data(a, "inpot_chips");
                            o > 0 && ((o -= e) < 0 && (o = 0),
                            r.game_mgr.update_player_key_data(a, "inpot_chips", o))
                        }
                        var A = r.game_mgr.get_player_key_data(a, "playing_chips") || 0;
                        r.game_mgr.update_player_key_data(a, "playing_chips", A + e),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_CHIPS_BACK", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_RETURN_CHIPS", a)
                }
                ,
                a.recv_msg_ShowHandCardS2A = function(_) {
                    var a = function() {
                        for (var a, e, o = null === (a = r.game_mgr.enter_room_data.texas_game_detail) || void 0 === a ? void 0 : a.seat_detail, A = t(_.seat_hands); !(e = A()).done; ) {
                            var g = e.value;
                            g.card_hands.sort((function(_, a) {
                                return Math.floor(_ % 256) < Math.floor(a % 256) ? 1 : Math.floor(_ % 256) > Math.floor(a % 256) ? -1 : 0
                            }
                            )),
                            o[g.seat_id].hand_cards = g.card_hands
                        }
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_SHOW_HAND_CARD_FORCE", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_SHOW_CARD_SYSTEM", a)
                }
                ,
                a.recv_msg_GameResultS2A = function(_) {
                    var a = function() {
                        r.game_mgr.on_game_result_update(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD ? r.evt_center.dispatch_event("EVT_GAME_RESULT_BRC", {
                            params: _
                        }) : (r.game_mgr.enter_room_data.texas_game_detail.table_pots = [0, 0, 0, 0, 0, 0, 0, 0],
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_pot = [0, 0, 0, 0],
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_data = [],
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = [])
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_GAME_RESULT", a)
                }
                ,
                a.recv_msg_72_GameResultS2A = function(_) {
                    var a = function() {
                        r.game_mgr.on_72_game_result_update(_),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD ? r.evt_center.dispatch_event("EVT_72_GAME_RESULT_BRC", {
                            params: _
                        }) : (r.game_mgr.enter_room_data.texas_game_detail.table_pots = [0, 0, 0, 0, 0, 0, 0, 0],
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_pot = [0, 0, 0, 0],
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_data = [],
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = [])
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_72_GAME_RESULT", a)
                }
                ,
                a.recv_msg_InsuranceDetailS2A = function(_) {
                    e.x_log("购买保险");
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_pot = _.insurance_pot,
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_RISK_INFO_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_RISK_INFO_BRC", a)
                }
                ,
                a.recv_msg_HitInsuranceS2A = function(_) {
                    e.x_log("击中保险");
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_pot = _.insurance_pot,
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_data = [],
                        r.game_mgr.enter_room_data.texas_game_detail.insurance_data = JSON.parse(JSON.stringify(_.insurance_data)),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_RISK_HIT_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_RISK_HIT_BRC", a)
                }
                ,
                a.recv_msg_RMRunMultiTimesResultS2A = function(_) {
                    e.x_log("發多次", _);
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.multi_times_boards = _.boards,
                        r.game_mgr.is_in_multi_times = !0,
                        r.game_mgr.multi_players = _.players,
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_MULTI_BOARD_CREATE", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_MULTI_BOARD_CREATE", a)
                }
                ,
                a.recv_msg_EvchopDetailS2C = function(_) {
                    e.x_log("evchop 返回");
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = [],
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = JSON.parse(JSON.stringify(_.deal_evchop_data)),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_EVCHOP_MYSELF_POT_RSP", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_EVCHOP_WAIT_PROCESS_RSP", a)
                }
                ,
                a.recv_msg_EvchopDetailS2A = function(_) {
                    e.x_log("evchop 广播");
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = [],
                        r.game_mgr.enter_room_data.texas_game_detail.evchop_data = JSON.parse(JSON.stringify(_.deal_evchop_data)),
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_EVCHOP_NOTIFICATION_BRC", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_EVCHOP_DETAIL_BRC", a)
                }
                ,
                a.recv_msg_ShowHandS2A = function(_) {
                    e.x_log("主动亮牌", _);
                    var a = function() {
                        r.game_mgr.enter_room_data.texas_game_detail.show_card_active_data = _.seat_hands,
                        r.game_mgr.is_show_card_active = !0,
                        r.game_mgr.game_control_state != m.GAME_PLAY_STATE.GAME_BACKWARD && r.evt_center.dispatch_event("EVT_SHOW_HAND_CARD_ACTIVE", {
                            params: _
                        })
                    };
                    r.game_mgr.game_control_state == m.GAME_PLAY_STATE.GAME_BACKWARD ? a() : r.game_task_queue.push_task("TEXAS_SHOW_CARD_ACTIVE", a)
                }
                ,
                _
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/jackpot_player_item.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./player_head.ts"], (function(e) {
    "use strict";
    var a, t, r, i, n, l, o, _, c, s;
    return {
        setters: [function(e) {
            a = e.cclegacy,
            t = e._decorator,
            r = e.Label,
            i = e.Component
        }
        , function(e) {
            n = e.applyDecoratedDescriptor,
            l = e.inheritsLoose,
            o = e.initializerDefineProperty,
            _ = e.assertThisInitialized
        }
        , function(e) {
            c = e.g_instance
        }
        , function(e) {
            s = e.player_head
        }
        ],
        execute: function() {
            var u, p, f, m, d, g, h, y, b;
            a._RF.push({}, "302f3iCsVVAyYFKStRaDzJa", "jackpot_player_item", void 0);
            var v = t.ccclass
              , k = t.property;
            e("jackpot_player_item", (u = v("jackpot_player_item"),
            p = k(s),
            f = k(r),
            m = k(r),
            u((h = n((g = function(e) {
                function a() {
                    for (var a, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                        r[i] = arguments[i];
                    return a = e.call.apply(e, [this].concat(r)) || this,
                    o(_(a), "head_node", h, _(a)),
                    o(_(a), "chips_label", y, _(a)),
                    o(_(a), "name_label", b, _(a)),
                    a
                }
                return l(a, e),
                a.prototype.set_data = function(e) {
                    var a = e.avatar || "default:3"
                      , t = e.name;
                    if (c.game_mgr.enter_room_data.is_anonymity_share) {
                        a = "default:52";
                        for (var r = c.game_mgr.enter_room_data.texas_game_detail.seat_detail, i = 0; i < r.length; i++)
                            if (r[i] && r[i].player_info && r[i].player_info.uid == e.uid) {
                                t = c.game_lang_mgr.language_string("MULTI_PLAYER") + (i + 1);
                                break
                            }
                    }
                    this.head_node.refresh_head(a);
                    var n = c.game_data_manager.convert_super_value_to_local(e.chips, !0);
                    this.chips_label.string = n / 100 + "",
                    this.name_label.string = t
                }
                ,
                a
            }(i)).prototype, "head_node", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = n(g.prototype, "chips_label", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = n(g.prototype, "name_label", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = g)) || d));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/load_ani_node.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var r, o, n, t, i, l, a, c;
    return {
        setters: [function(e) {
            r = e.cclegacy,
            o = e._decorator,
            n = e.Sprite,
            t = e.Component
        }
        , function(e) {
            i = e.applyDecoratedDescriptor,
            l = e.inheritsLoose,
            a = e.initializerDefineProperty,
            c = e.assertThisInitialized
        }
        ],
        execute: function() {
            var u, p, s, f, b, y, d, _, g, h, m;
            r._RF.push({}, "3a4b65hJytDO4SyXNyx9ktC", "load_ani_node", void 0);
            var v = o.ccclass
              , z = o.property;
            e("load_ani_node", (u = v("load_ani_node"),
            p = z(n),
            s = z(n),
            f = z(n),
            b = z(n),
            u((_ = i((d = function(e) {
                function r() {
                    for (var r, o = arguments.length, n = new Array(o), t = 0; t < o; t++)
                        n[t] = arguments[t];
                    return r = e.call.apply(e, [this].concat(n)) || this,
                    a(c(r), "color1", _, c(r)),
                    a(c(r), "color2", g, c(r)),
                    a(c(r), "color3", h, c(r)),
                    a(c(r), "color4", m, c(r)),
                    r
                }
                return l(r, e),
                r
            }(t)).prototype, "color1", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = i(d.prototype, "color2", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = i(d.prototype, "color3", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = i(d.prototype, "color4", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = d)) || y));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/card_highlight.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts", "./card_logic.ts"], (function(_) {
    "use strict";
    var a, e, o, i, t, r, n;
    return {
        setters: [function(_) {
            a = _.cclegacy
        }
        , function(_) {
            e = _.g_card
        }
        , function(_) {
            o = _.createForOfIteratorHelperLoose
        }
        , function(_) {
            i = _.g_type
        }
        , function(_) {
            t = _.g_instance
        }
        , function(_) {
            r = _.GAME_CONFIG
        }
        , function(_) {
            n = _.card_logic
        }
        ],
        execute: function() {
            a._RF.push({}, "3df1bhC/ZJGOo1HA1RawlDV", "card_highlight", void 0);
            _("card_highlight", function() {
                function _() {}
                var a = _.prototype;
                return a.show_highlight_animation_main_side_winner = function(_, a, i, r) {
                    if (!t.game_mgr.is_in_multi_times) {
                        var n;
                        this.hide_highlight_animation();
                        for (var d, m = [], l = o(_); !(d = l()).done; ) {
                            var v = d.value;
                            if (v >= 0) {
                                if (!n) {
                                    var c = this.check_card_data(v)
                                      , s = this.get_top_type(v);
                                    c && (null == s ? void 0 : s.max_val) && (n = null == s ? void 0 : s.max_val)
                                }
                                var h = i[v];
                                if (h)
                                    for (var g, u = o(h); !(g = u()).done; ) {
                                        var f = g.value;
                                        m.push(e.decode_card(f))
                                    }
                            }
                        }
                        for (var p, b = [], y = o(a); !(p = y()).done; ) {
                            var x = p.value;
                            if (x >= 0) {
                                var w = t.game_mgr.get_player_key_data(x, "hand_cards")
                                  , A = r[x];
                                for (var H in w)
                                    if (w[H] && w[H] > 0)
                                        for (var R, E = o(A); !(R = E()).done; ) {
                                            (f = R.value) == w[H] && b.push(e.decode_card(f))
                                        }
                            }
                        }
                        var T;
                        T = m.concat(b),
                        t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                            max_comb: T,
                            top_type: n,
                            is_show_down: !0
                        })
                    }
                }
                ,
                a.show_highlight_animation_main_side_winner_hi = function(_, a, i, r) {
                    if (!t.game_mgr.is_in_multi_times) {
                        var n;
                        this.hide_highlight_animation();
                        for (var d, m = [], l = o(_); !(d = l()).done; ) {
                            var v = d.value;
                            if (v >= 0) {
                                if (!n) {
                                    var c = this.check_card_data(v)
                                      , s = this.get_top_type(v);
                                    c && (null == s ? void 0 : s.max_val) && (n = null == s ? void 0 : s.max_val)
                                }
                                var h = i[v];
                                if (h)
                                    for (var g, u = o(h); !(g = u()).done; ) {
                                        var f = g.value;
                                        m.push(e.decode_card(f))
                                    }
                            }
                        }
                        for (var p, b = [], y = o(a); !(p = y()).done; ) {
                            var x = p.value;
                            if (x >= 0) {
                                var w = t.game_mgr.get_player_key_data(x, "hand_cards")
                                  , A = r[x];
                                for (var H in w)
                                    if (w[H] && w[H] > 0)
                                        for (var R, E = o(A); !(R = E()).done; ) {
                                            (f = R.value) == w[H] && b.push(e.decode_card(f))
                                        }
                            }
                        }
                        var T;
                        T = m.concat(b),
                        t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                            max_comb: T,
                            top_type: n,
                            is_show_down: !0,
                            is_hi: !0
                        })
                    }
                }
                ,
                a.show_highlight_animation_main_side_winner_low = function(_, a, i, r) {
                    if (!t.game_mgr.is_in_multi_times) {
                        var n;
                        this.hide_highlight_animation();
                        for (var d, m = [], l = o(_); !(d = l()).done; ) {
                            var v = d.value;
                            if (v >= 0) {
                                if (!n) {
                                    var c = this.check_card_data(v)
                                      , s = this.get_omaha_low_type(v);
                                    c && (null == s ? void 0 : s.min_comb) && (n = null == s ? void 0 : s.low_type_string)
                                }
                                var h = i[v];
                                if (h)
                                    for (var g, u = o(h); !(g = u()).done; ) {
                                        var f = g.value;
                                        m.push(e.decode_card(f))
                                    }
                            }
                        }
                        for (var p, b = [], y = o(a); !(p = y()).done; ) {
                            var x = p.value;
                            if (x >= 0) {
                                var w = t.game_mgr.get_player_key_data(x, "hand_cards")
                                  , A = r[x];
                                for (var H in w)
                                    if (w[H] && w[H] > 0)
                                        for (var R, E = o(A); !(R = E()).done; ) {
                                            (f = R.value) == w[H] && b.push(e.decode_card(f))
                                        }
                            }
                        }
                        var T;
                        T = m.concat(b),
                        t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                            max_comb: T,
                            low_type: n,
                            is_show_down: !0,
                            is_low: !0
                        })
                    }
                }
                ,
                a.show_double_board_highlight_animation_main_side_winner = function(_, a, i, r) {
                    if (!t.game_mgr.is_in_multi_times) {
                        var n;
                        this.hide_highlight_animation();
                        for (var d, m = [], l = o(_); !(d = l()).done; ) {
                            var v = d.value;
                            if (v >= 0) {
                                if (!n) {
                                    var c = this.check_card_data(v)
                                      , s = this.get_double_board_top_type(v);
                                    c && (null == s ? void 0 : s.max_val) && (n = null == s ? void 0 : s.max_val)
                                }
                                var h = i[v];
                                if (h)
                                    for (var g, u = o(h); !(g = u()).done; ) {
                                        var f = g.value;
                                        m.push(e.decode_card(f))
                                    }
                            }
                        }
                        for (var p, b = [], y = o(a); !(p = y()).done; ) {
                            var x = p.value;
                            if (x >= 0) {
                                var w = t.game_mgr.get_player_key_data(x, "hand_cards")
                                  , A = r[x];
                                for (var H in w)
                                    if (w[H] && w[H] > 0)
                                        for (var R, E = o(A); !(R = E()).done; ) {
                                            (f = R.value) == w[H] && b.push(e.decode_card(f))
                                        }
                            }
                        }
                        var T;
                        T = m.concat(b),
                        t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                            max_comb: T,
                            top_type: n,
                            is_show_down: !0,
                            double_board: !0
                        })
                    }
                }
                ,
                a.show_multi_highlight_animation = function(_) {
                    this.hide_highlight_animation();
                    for (var a, e = t.game_mgr.multi_players, i = [], r = o(e); !(a = r()).done; ) {
                        var d = a.value
                          , m = {
                            seat_id: t.game_mgr.get_seat_id(d),
                            max_val: 0,
                            max_comb: []
                        };
                        if (!this.check_card_data(m.seat_id))
                            return;
                        var l = this.get_top_type(m.seat_id, !0, _);
                        if (!(null == l ? void 0 : l.max_comb))
                            return;
                        m.max_val = l.max_val,
                        m.max_comb = l.max_comb,
                        i.push(m)
                    }
                    if (!(i.length < 2)) {
                        var v = i[0];
                        if (i[0].max_val == i[1].max_val) {
                            var c = n.cal_hand_values(i[0].max_val, i[0].max_comb)
                              , s = n.cal_hand_values(i[1].max_val, i[1].max_comb)
                              , h = i[0].max_comb;
                            c == s && (h = i[0].max_comb.concat(i[1].max_comb)),
                            c < s && (h = i[1].max_comb),
                            t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                                max_comb: h,
                                top_type: v.max_val,
                                is_show_down: !0
                            })
                        } else
                            i[0].max_val < i[1].max_val && (v = i[1]),
                            t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                                max_comb: v.max_comb,
                                top_type: v.max_val,
                                is_show_down: !0
                            })
                    }
                }
                ,
                a.hide_highlight_animation = function() {
                    t.evt_center.dispatch_event("EVT_HIGHLIGHT_PLAYER_HAND_CARD", {
                        max_comb: [],
                        is_show_down: !1
                    })
                }
                ,
                a.check_card_data = function(_) {
                    if (-1 == _)
                        return !1;
                    var a = t.game_mgr.enter_room_data.texas_game_detail
                      , e = null == a ? void 0 : a.seat_detail
                      , o = null == a ? void 0 : a.board_cards
                      , i = null;
                    return e[_] && (i = e[_].hand_cards),
                    !(!i || 0 == i.length) && !(!o || 0 == o.length)
                }
                ,
                a.get_top_type = function(_, a, r) {
                    void 0 === a && (a = !1),
                    void 0 === r && (r = 0);
                    var d, m = t.game_mgr.game_kind, l = t.game_mgr.game_sub_kind, v = i.is_six_plus_room(l), c = t.game_mgr.enter_room_data.texas_game_detail, s = null == c ? void 0 : c.board_cards, h = t.game_mgr.get_player_key_data(_, "hand_cards");
                    if (a && (s = c.multi_times_boards[r]),
                    i.is_plo_room(m) || i.is_flash_plo_room(m)) {
                        var g = [];
                        for (var u in h)
                            if (h[u] && h[u] > 0) {
                                var f = e.decode_card(h[u]);
                                g.push(f)
                            }
                        var p = [];
                        for (var u in s)
                            if (s[u] && s[u] > 0) {
                                var b = e.decode_card(s[u]);
                                p.push(b)
                            }
                        for (var y, x = n.get_combination_list(g, 2), w = n.get_combination_list(p, 3), A = [], H = o(x); !(y = H()).done; )
                            for (var R, E = y.value, T = o(w); !(R = T()).done; ) {
                                var N = R.value
                                  , k = E.concat(N);
                                A.push(k)
                            }
                        d = n.get_top_type_combination(A)
                    } else {
                        var D = [];
                        for (var u in h)
                            if (h[u] && h[u] > 0) {
                                var G = e.decode_card(h[u]);
                                D.push(G)
                            }
                        for (var u in s)
                            if (s[u] && s[u] > 0) {
                                var I = e.decode_card(s[u]);
                                D.push(I)
                            }
                        var L = n.get_combination_list(D, 5);
                        d = n.get_top_type_combination(L, v)
                    }
                    return d
                }
                ,
                a.get_double_board_top_type = function(_, a, r) {
                    void 0 === a && (a = !1),
                    void 0 === r && (r = 0);
                    var d, m = t.game_mgr.game_kind, l = t.game_mgr.game_sub_kind, v = i.is_six_plus_room(l), c = t.game_mgr.enter_room_data.texas_game_detail, s = null == c ? void 0 : c.double_board_cards, h = t.game_mgr.get_player_key_data(_, "hand_cards");
                    if (a && (s = c.multi_times_boards[r]),
                    i.is_plo_room(m) || i.is_flash_plo_room(m)) {
                        var g = [];
                        for (var u in h)
                            if (h[u] && h[u] > 0) {
                                var f = e.decode_card(h[u]);
                                g.push(f)
                            }
                        var p = [];
                        for (var u in s)
                            if (s[u] && s[u] > 0) {
                                var b = e.decode_card(s[u]);
                                p.push(b)
                            }
                        for (var y, x = n.get_combination_list(g, 2), w = n.get_combination_list(p, 3), A = [], H = o(x); !(y = H()).done; )
                            for (var R, E = y.value, T = o(w); !(R = T()).done; ) {
                                var N = R.value
                                  , k = E.concat(N);
                                A.push(k)
                            }
                        d = n.get_top_type_combination(A)
                    } else {
                        var D = [];
                        for (var u in h)
                            if (h[u] && h[u] > 0) {
                                var G = e.decode_card(h[u]);
                                D.push(G)
                            }
                        for (var u in s)
                            if (s[u] && s[u] > 0) {
                                var I = e.decode_card(s[u]);
                                D.push(I)
                            }
                        var L = n.get_combination_list(D, 5);
                        d = n.get_top_type_combination(L, v)
                    }
                    return d
                }
                ,
                a.get_omaha_low_type = function(_, a, r) {
                    void 0 === a && (a = !1),
                    void 0 === r && (r = 0);
                    t.game_mgr.game_kind;
                    var d, m = t.game_mgr.game_sub_kind, l = t.game_mgr.enter_room_data.texas_game_detail, v = null == l ? void 0 : l.board_cards, c = t.game_mgr.get_player_key_data(_, "hand_cards");
                    if (a && (v = l.multi_times_boards[r]),
                    i.is_plo_hilo_room(m)) {
                        var s = [];
                        for (var h in c)
                            if (c[h] && c[h] > 0) {
                                var g = e.decode_card(c[h]);
                                s.push(g)
                            }
                        var u = [];
                        for (var h in v)
                            if (v[h] && v[h] > 0) {
                                var f = e.decode_card(v[h]);
                                u.push(f)
                            }
                        for (var p, b = n.get_omaha_low_combination_list(s, 2), y = n.get_omaha_low_combination_list(u, 3), x = [], w = o(b); !(p = w()).done; )
                            for (var A, H = p.value, R = o(y); !(A = R()).done; ) {
                                var E = A.value
                                  , T = H.concat(E);
                                x.push(T)
                            }
                        d = n.get_low_card_type_combination(x)
                    }
                    return d
                }
                ,
                a.show_card_highlight = function() {
                    var _ = t.game_mgr.my_seat_id;
                    if (!(_ < 0)) {
                        for (var a = t.game_mgr.get_player_key_data(_, "hand_cards"), e = 0, o = 0; o < a.length; o++)
                            a[o] > 0 && (e += 1);
                        if (e == t.game_mgr.hand_count) {
                            var d = t.game_mgr.enter_room_data.texas_game_detail.board_cards
                              , m = 0;
                            for (o = 0; o < d.length; o++)
                                d[o] > 0 && (m += 1);
                            if (!(m < 3)) {
                                var l = t.game_mgr.enter_room_data.texas_game_detail.curr_round;
                                if (l == r.ENUM_ROUND_STAGE.FLOP || l == r.ENUM_ROUND_STAGE.TURN || l == r.ENUM_ROUND_STAGE.RIVER)
                                    if (this.check_card_data(_)) {
                                        var v = this.get_top_type(_);
                                        if (null == v ? void 0 : v.max_comb) {
                                            var c = n.CARD_RANKING_TO_NAME[null == v ? void 0 : v.max_val].label
                                              , s = this.get_omaha_low_type(_)
                                              , h = "-";
                                            (null == s ? void 0 : s.min_comb) && (h = null == s ? void 0 : s.low_type_string);
                                            var g = i.is_double_board_room(t.game_mgr.game_sub_kind)
                                              , u = t.game_mgr.room_info_data.enable_db_when_bomb_pot
                                              , f = t.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                                            if (g || f && u) {
                                                var p = this.get_double_board_top_type(_);
                                                (null == p ? void 0 : p.max_comb) && (h = n.CARD_RANKING_TO_NAME[null == p ? void 0 : p.max_val].label)
                                            }
                                            t.evt_center.dispatch_event("EVT_CARD_TYPE_HINT", {
                                                card_type: c,
                                                low_card_type: h,
                                                is_show: !0
                                            })
                                        }
                                    }
                            }
                        }
                    }
                }
                ,
                a.clean_cardtype_hint = function() {
                    t.evt_center.dispatch_event("EVT_CARD_TYPE_HINT", {
                        card_type: "",
                        low_card_type: "",
                        is_show: !1
                    })
                }
                ,
                a.show_hilo_win = function(_) {
                    var a = _.seat_id
                      , e = "";
                    if (_.hi_pot_profit > 0) {
                        var o = this.get_top_type(a);
                        (null == o ? void 0 : o.max_comb) && (e = n.CARD_RANKING_TO_NAME[null == o ? void 0 : o.max_val].label)
                    }
                    var i = "";
                    if (_.low_pot_profit > 0) {
                        var t = this.get_omaha_low_type(a);
                        (null == t ? void 0 : t.min_comb) && (i = null == t ? void 0 : t.low_type_string)
                    }
                    return {
                        card_type: e,
                        low_card_type: i,
                        is_show: !0
                    }
                }
                ,
                _
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/play_scene.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts", "./audio_manager.ts", "./back_layer.ts", "./player_control.ts", "./player_layer.ts", "./table_info_layer.ts", "./jackpot_result_node.ts"], (function(_) {
    "use strict";
    var e, a, t, n, i, o, r, s, l, d, h, c, y, p, u, m, g, T, f, A;
    return {
        setters: [function(_) {
            e = _.cclegacy,
            a = _._decorator,
            t = _.tween,
            n = _.Component
        }
        , function(_) {
            i = _.g_func,
            o = _.g_speed
        }
        , function(_) {
            r = _.applyDecoratedDescriptor,
            s = _.inheritsLoose,
            l = _.initializerDefineProperty,
            d = _.assertThisInitialized,
            h = _.createForOfIteratorHelperLoose
        }
        , function(_) {
            c = _.g_type
        }
        , function(_) {
            y = _.g_instance
        }
        , function(_) {
            p = _.GAME_CONFIG
        }
        , function(_) {
            u = _.audio_manager
        }
        , function(_) {
            m = _.back_layer
        }
        , function(_) {
            g = _.player_control
        }
        , function(_) {
            T = _.player_layer
        }
        , function(_) {
            f = _.table_info_layer
        }
        , function(_) {
            A = _.jackpot_result_node
        }
        ],
        execute: function() {
            var N, b, O, C, E, v, I, R, S, U, w, M, L, D, k;
            e._RF.push({}, "3ef48KWQjpM+5rsv4Ypc2h3", "play_scene", void 0);
            var B = a.ccclass
              , G = a.property;
            _("play_scene", (N = B("play_scene"),
            b = G(m),
            O = G(f),
            C = G(T),
            E = G(A),
            v = G(g),
            I = G(u),
            N((U = r((S = function(_) {
                function e() {
                    for (var e, a = arguments.length, t = new Array(a), n = 0; n < a; n++)
                        t[n] = arguments[n];
                    return e = _.call.apply(_, [this].concat(t)) || this,
                    l(d(e), "back_layer_node", U, d(e)),
                    l(d(e), "table_info_layer_node", w, d(e)),
                    l(d(e), "player_layer_node", M, d(e)),
                    l(d(e), "jackpot_layer", L, d(e)),
                    l(d(e), "player_control_node", D, d(e)),
                    l(d(e), "audio_manager_node", k, d(e)),
                    e
                }
                s(e, _);
                var a = e.prototype;
                return a.onLoad = function() {
                    y.evt_center.add_listener("EVT_TABLE_GAME_START_BRC", this.on_game_start_brc, this),
                    y.evt_center.add_listener("EVT_SUSHI_REWARD_CHANGE_BRC", this.on_sushi_reward_change_rsp, this),
                    y.evt_center.add_listener("EVT_ROUND_END_BRC", this.on_round_end, this),
                    y.evt_center.add_listener("EVT_SOMEONE_ACTION_BRC", this.on_somebody_action, this),
                    y.evt_center.add_listener("EVT_ROUND_START_BRC", this.on_round_start, this),
                    y.evt_center.add_listener("EVT_DEAL_HAND_CARD_BRC", this.on_deal_hand_card, this),
                    y.evt_center.add_listener("EVT_NLH31_DISCARD_CARD_BRC", this.on_deal_nlh31_discard_card, this),
                    y.evt_center.add_listener("EVT_TURN_SOMEONE_ACTION", this.on_turn_somebody_action, this),
                    y.evt_center.add_listener("EVT_SHOW_HAND_CARD_FORCE", this.on_show_hand_card_force, this),
                    y.evt_center.add_listener("EVT_GAME_RESULT_BRC", this.on_game_result, this),
                    y.evt_center.add_listener("EVT_72_GAME_RESULT_BRC", this.on_72_game_result, this),
                    y.evt_center.add_listener("EVT_CHIPS_BACK", this.on_chips_back, this),
                    y.evt_center.add_listener("EVT_RECONNECT_ENTER_ROOM", this.on_reconnect_enter_room, this),
                    y.evt_center.add_listener("EVT_RISK_INFO_BRC", this.on_insurance_info_brc, this),
                    y.evt_center.add_listener("EVT_RISK_HIT_BRC", this.on_risk_hit_brc, this),
                    y.evt_center.add_listener("EVT_MULTI_BOARD_CREATE", this.on_multi_board_build, this),
                    y.evt_center.add_listener("EVT_EVCHOP_MYSELF_POT_RSP", this.on_evchop_myself_pot_rsp, this),
                    y.evt_center.add_listener("EVT_EVCHOP_NOTIFICATION_BRC", this.on_evchop_notification_brc, this),
                    y.evt_center.add_listener("EVT_WAIT_VOLUNTARY_STRADDLE_BRC", this.on_wait_voluntary_straddle_brc, this),
                    y.evt_center.add_listener("EVT_SHOW_HAND_CARD_ACTIVE", this.on_show_hand_initiative, this)
                }
                ,
                a.onDestroy = function() {
                    y.evt_center.remove_listener("EVT_TABLE_GAME_START_BRC", this.on_game_start_brc),
                    y.evt_center.remove_listener("EVT_SUSHI_REWARD_CHANGE_BRC", this.on_sushi_reward_change_rsp),
                    y.evt_center.remove_listener("EVT_ROUND_END_BRC", this.on_round_end),
                    y.evt_center.remove_listener("EVT_SOMEONE_ACTION_BRC", this.on_somebody_action),
                    y.evt_center.remove_listener("EVT_ROUND_START_BRC", this.on_round_start),
                    y.evt_center.remove_listener("EVT_DEAL_HAND_CARD_BRC", this.on_deal_hand_card),
                    y.evt_center.remove_listener("EVT_NLH31_DISCARD_CARD_BRC", this.on_deal_nlh31_discard_card),
                    y.evt_center.remove_listener("EVT_TURN_SOMEONE_ACTION", this.on_turn_somebody_action),
                    y.evt_center.remove_listener("EVT_SHOW_HAND_CARD_FORCE", this.on_show_hand_card_force),
                    y.evt_center.remove_listener("EVT_GAME_RESULT_BRC", this.on_game_result),
                    y.evt_center.remove_listener("EVT_72_GAME_RESULT_BRC", this.on_72_game_result),
                    y.evt_center.remove_listener("EVT_CHIPS_BACK", this.on_chips_back),
                    y.evt_center.remove_listener("EVT_RECONNECT_ENTER_ROOM", this.on_reconnect_enter_room),
                    y.evt_center.remove_listener("EVT_RISK_INFO_BRC", this.on_insurance_info_brc),
                    y.evt_center.remove_listener("EVT_RISK_HIT_BRC", this.on_risk_hit_brc),
                    y.evt_center.remove_listener("EVT_MULTI_BOARD_CREATE", this.on_multi_board_build),
                    y.evt_center.remove_listener("EVT_EVCHOP_MYSELF_POT_RSP", this.on_evchop_myself_pot_rsp),
                    y.evt_center.remove_listener("EVT_EVCHOP_NOTIFICATION_BRC", this.on_evchop_notification_brc),
                    y.evt_center.remove_listener("EVT_WAIT_VOLUNTARY_STRADDLE_BRC", this.on_wait_voluntary_straddle_brc),
                    y.evt_center.remove_listener("EVT_SHOW_HAND_CARD_ACTIVE", this.on_show_hand_initiative)
                }
                ,
                a.start = function() {
                    this.refresh_player_while_enter_room(),
                    this.refresh_roominfo_while_enter_room()
                }
                ,
                a.refresh_player_while_enter_room = function() {
                    var _ = this.player_layer_node.get_countdown_player_index();
                    _ && _ > 0 && this.player_layer_node.stop_player_action_countdown(_),
                    this.update_all_player_sitting_out(),
                    this.jackpot_layer.jackpot_hide()
                }
                ,
                a.refresh_roominfo_while_enter_room = function() {
                    this.table_info_layer_node.refresh_game_pot(),
                    this.table_info_layer_node.refresh_real_time_pot_info();
                    var _ = y.game_mgr.my_state;
                    _ != p.ENUM_ACTION_STATE.CAN_RAISE && _ != p.ENUM_ACTION_STATE.CAN_BET || (y.game_mgr.my_state = p.ENUM_ACTION_STATE.CAN_ACTION)
                }
                ,
                a.update_all_player_sitting_out = function() {
                    for (var _, e = null === (_ = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.seat_detail, a = 0; a < e.length; a++) {
                        var t = e[a];
                        t.is_on_seat && this.player_layer_node.update_seat_status(a, t.sitting_out)
                    }
                }
                ,
                a.on_game_start_brc = function(_) {
                    var e, a = _.data.params;
                    this.table_info_layer_node.update_hand_id_label(a.hand_id),
                    y.game_card_highlight.hide_highlight_animation(),
                    this.clean_public_card_and_function_node(!0),
                    this.player_layer_node.preflop_clean_player_action_tag(),
                    this.player_layer_node.play_retrieve_card_animation(),
                    this.player_layer_node.refresh_player_card_back_visible(!1),
                    this.player_layer_node.refresh_all_player_hand_card_visible(!1),
                    this.player_layer_node.refresh_show_fold_gray_bg(!1);
                    for (var t = null === (e = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === e ? void 0 : e.seat_detail, n = 0; n < t.length; n++) {
                        t[n].is_on_seat && this.player_layer_node.refresh_player_hand_chips(n)
                    }
                    this.player_layer_node.refresh_dealer(a.dealer_seat_id, a.sb_seat_id),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_GAME_START")
                    }
                    ), p.TEXAS_RETRIEVE_ANI_DURATION + 4 * p.TEXAS_RETRIEVE_ANI_GAP)
                }
                ,
                a.on_sushi_reward_change_rsp = function(_) {
                    var e = _.data.params
                      , a = y.game_mgr.enter_room_data.texas_game_detail.sb_seat_id;
                    this.player_layer_node.chips_fly_to_sushi(e, a)
                }
                ,
                a.clean_public_card_and_function_node = function(_) {
                    void 0 === _ && (_ = !1),
                    this.table_info_layer_node.clean_public_cards(_),
                    this.table_info_layer_node.clean_multi_public_cards(_)
                }
                ,
                a.on_round_end = function(_) {
                    for (var e, a = this, n = _.data.params, i = _.data.extra.bet_players, r = null === (e = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === e ? void 0 : e.seat_detail, s = 0; s < r.length; s++) {
                        r[s].is_on_seat && this.refresh_seat_action_tag(s, "", [p.ENUM_ACTION_TAG.FOLD_TAG, p.ENUM_ACTION_TAG.ALLIN_TAG])
                    }
                    this.player_layer_node.bet_chips_fly_to_pot(i),
                    i.length > 0 && this.audio_manager_node.play_chip_to_pot_sound(),
                    this.player_layer_node.refresh_bet_chips_visible(!1),
                    t(this).delay(o.card_fly_time).call((function() {
                        a.table_info_layer_node.refresh_target_pot_info(-1, !1);
                        for (var _ = 0; _ < n.pot.length; _++) {
                            var e = _;
                            a.table_info_layer_node.refresh_target_pot_info(e, !0)
                        }
                    }
                    )).delay(.5).call((function() {
                        y.game_task_queue.attemp_done("TEXAS_ROUND_END")
                    }
                    )).start()
                }
                ,
                a.refresh_seat_action_tag = function(_, e, a) {
                    this.player_layer_node.refresh_seat_action_tag(_, e, a)
                }
                ,
                a.on_somebody_action = function(_) {
                    var e = this
                      , a = _.data.params
                      , t = a.seat_id;
                    a.remind ? (this.player_layer_node.somebody_turn_to_action(t),
                    i.do_action_delay(this, (function() {
                        e.on_somebody_action_func(a)
                    }
                    ), 1)) : this.on_somebody_action_func(a)
                }
                ,
                a.on_somebody_action_func = function(_) {
                    var e, a = this, t = _.seat_id, n = _.action, o = ((e = {}).ACTION_BET = function() {
                        a.on_somebody_bet(t)
                    }
                    ,
                    e.ACTION_SB = function() {
                        a.on_somebody_blind(t, 1)
                    }
                    ,
                    e.ACTION_BB = function() {
                        a.on_somebody_blind(t, 2)
                    }
                    ,
                    e.ACTION_ANTE = function() {
                        a.on_somebody_blind(t, 3)
                    }
                    ,
                    e.ACTION_CALL = function() {
                        a.on_somebody_call(t)
                    }
                    ,
                    e.ACTION_POST_BB = function() {
                        a.on_somebody_call(t, !0)
                    }
                    ,
                    e.ACTION_CHECK = function() {
                        a.on_somebody_check(t)
                    }
                    ,
                    e.ACTION_AUTO_CHECK = function() {
                        a.on_somebody_check(t)
                    }
                    ,
                    e.ACTION_FOLD = function() {
                        a.on_somebody_fold(t)
                    }
                    ,
                    e.ACTION_AUTO_FOLD = function() {
                        a.on_somebody_fold(t)
                    }
                    ,
                    e.ACTION_RAISE = function() {
                        a.on_somebody_raise(t)
                    }
                    ,
                    e.ACTION_POT = function() {
                        a.on_somebody_pot(t)
                    }
                    ,
                    e.ACTION_STRADDLE = function() {
                        a.on_somebody_straddle(t)
                    }
                    ,
                    e.ACTION_BOMB_POT = function() {
                        a.on_somebody_bomb_pot(t)
                    }
                    ,
                    e.ACTION_VOLUNTARY_STRADDLE = function() {
                        a.on_somebody_voluntary_straddle(t)
                    }
                    ,
                    e.ACTION_VOLUNTARY_RESTRADDLE = function() {
                        a.on_somebody_voluntary_restraddle(t)
                    }
                    ,
                    e.ACTION_FLASH_FOLD = function() {
                        a.on_somebody_fold(t)
                    }
                    ,
                    e.ACTION_NONE = function() {}
                    ,
                    e.ACTION_SITED = function() {}
                    ,
                    e)[p.NUM_TO_ACTION[n]];
                    o && o(),
                    this.player_layer_node.stop_player_action_countdown(t),
                    n == p.ACTION_TO_NUM.ACTION_NONE || n == p.ACTION_TO_NUM.ACTION_SITED ? y.game_task_queue.attemp_done(p.NUM_TO_ACTION[n]) : n != p.ACTION_TO_NUM.ACTION_FOLD && n != p.ACTION_TO_NUM.ACTION_CHECK && n != p.ACTION_TO_NUM.ACTION_AUTO_CHECK && n != p.ACTION_TO_NUM.ACTION_FLASH_FOLD && n != p.ACTION_TO_NUM.ACTION_AUTO_FOLD && n != p.ACTION_TO_NUM.ACTION_BOMB_POT && n != p.ACTION_TO_NUM.ACTION_POST_BB || i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done(p.NUM_TO_ACTION[n])
                    }
                    ), .3)
                }
                ,
                a.on_somebody_blind = function(_, e) {
                    var a = y.game_mgr.enter_room_data.texas_game_detail.seat_detail[_].playing_chips;
                    a && 0 == a && this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG),
                    e && 3 != e && this.audio_manager_node.play_bet_chips_sound(),
                    1 == e ? this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_SB) : 2 == e ? this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_BB) : 3 == e && this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_ANTE)
                }
                ,
                a.refresh_somebody_chips = function(_, e) {
                    this.player_layer_node.refresh_player_bet_chips(_, e),
                    this.table_info_layer_node.refresh_real_time_pot_info(!1)
                }
                ,
                a.on_round_start = function(_) {
                    var e = _.data.params
                      , a = _.data.is_from_wait_stage;
                    (y.game_mgr.game_stage == p.ENUM_ROOM_STAGE.WAIT || a) && this.refresh_game_start_ui(),
                    this.player_layer_node.clean_all_player_action_countdown(),
                    y.game_card_highlight.clean_cardtype_hint();
                    var t = this.update_ui_while_round_start(e);
                    this.table_info_layer_node.update_game_public_board(e.board_cards, t),
                    e.board_cards && e.board_cards.length > 0 && this.audio_manager_node.play_turn_card_sound()
                }
                ,
                a.refresh_game_start_ui = function() {}
                ,
                a.update_ui_while_round_start = function(_) {
                    var e = _.round;
                    if (e == p.ENUM_ROUND_STAGE.PRE_FLOP) {
                        c.is_calltime_room(y.game_mgr.game_sub_kind) && this.player_layer_node.refresh_calltime_visible(!1);
                        var a = y.game_mgr.my_seat_id;
                        if (a >= 0) {
                            var t = y.game_mgr.enter_room_data.texas_game_detail.seat_detail[a].action_kind;
                            t && t == p.ACTION_TO_NUM.ACTION_SITED && this.player_layer_node.play_deal_card_animation()
                        } else
                            this.player_layer_node.play_deal_card_animation()
                    }
                    return e
                }
                ,
                a.on_deal_hand_card = function(_) {
                    var e = _.data.params;
                    this.player_layer_node.refresh_all_player_hand_card_visible(!1),
                    this.player_layer_node.play_deal_card_animation(e.hands),
                    y.game_card_highlight.clean_cardtype_hint(),
                    e.hands && e.hands[0]
                }
                ,
                a.on_deal_nlh31_discard_card = function(_) {
                    var e = _.data.params;
                    this.player_layer_node.nlh31_fold_card(e.discard_card),
                    this.player_layer_node.start_nlh31_discard_card_action_countdown()
                }
                ,
                a.on_turn_somebody_action = function(_) {
                    var e = _.data.params.seat_id;
                    this.player_layer_node.somebody_turn_to_action(e),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_ACTION_HINT")
                    }
                    ), 1)
                }
                ,
                a.on_somebody_call = function(_, e) {
                    e ? (this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_POST_BB),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") && this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG)) : (0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.CALL_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_CALL))
                }
                ,
                a.on_somebody_bomb_pot = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.BOMB_POT_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.BOMB_POT_TAG)
                }
                ,
                a.on_somebody_voluntary_straddle = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.VOLUNTARY_STRADDLE_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE)
                }
                ,
                a.on_somebody_voluntary_restraddle = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.VOLUNTARY_RESTRADDLE_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE)
                }
                ,
                a.on_somebody_check = function(_) {
                    this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.CHECK_TAG),
                    this.audio_manager_node.play_check_sound()
                }
                ,
                a.on_somebody_fold = function(_) {
                    this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.FOLD_TAG),
                    this.audio_manager_node.play_fold_sound(),
                    this.player_layer_node.on_somebody_fold(_),
                    this.player_layer_node.update_card_back(_, !1),
                    this.player_layer_node.refresh_fold_gray_bg(_, !0)
                }
                ,
                a.on_somebody_bet = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.BET_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_BET)
                }
                ,
                a.update_other_player_wait_state = function(_) {
                    for (var e = y.game_mgr.get_all_player_data(), a = 0; a < e.length; a++) {
                        var t = e[a];
                        t && t.is_on_seat && _ != a && (t.action_type != p.ACTION_TO_NUM.ACTION_BET && t.action_type != p.ACTION_TO_NUM.ACTION_CHECK && t.action_type != p.ACTION_TO_NUM.ACTION_CALL && t.action_type != p.ACTION_TO_NUM.ACTION_POST_BB && t.action_type != p.ACTION_TO_NUM.ACTION_RAISE && t.action_type != p.ACTION_TO_NUM.ACTION_BOMB_POT && t.action_type != p.ACTION_TO_NUM.ACTION_POT || this.refresh_seat_action_tag(a, "", [p.ENUM_ACTION_TAG.ALLIN_TAG]))
                    }
                }
                ,
                a.on_somebody_raise = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.RAISE_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_RAISE)
                }
                ,
                a.on_show_hand_card_force = function(_) {
                    var e = this
                      , a = _.data.params;
                    i.do_action_delay(this, (function() {
                        e.player_layer_node.show_hand_force(a),
                        e.audio_manager_node.play_show_hand_effect()
                    }
                    ), .1),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_SHOW_CARD_SYSTEM")
                    }
                    ), .3)
                }
                ,
                a.on_game_result = function(_) {
                    var e = this
                      , a = _.data.params;
                    y.game_card_highlight.clean_cardtype_hint();
                    var n = this.player_layer_node.get_countdown_player_index();
                    n && this.player_layer_node.stop_player_action_countdown(n),
                    c.is_progressive_room(y.game_mgr.game_sub_kind) && a.have_ko_bounty && this.play_ko_animation();
                    var i = !1;
                    c.is_kobounty_mystery(y.game_mgr.game_sub_kind) && a.have_ko_bounty && (i = !0),
                    this.player_layer_node.refresh_evchop_win_rate_status(),
                    this.player_layer_node.refresh_evchop_selected_tag();
                    var o = c.is_double_board_room(y.game_mgr.game_sub_kind)
                      , r = y.game_mgr.room_info_data.enable_db_when_bomb_pot
                      , s = y.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand
                      , l = c.is_plo_hilo_room(y.game_mgr.game_sub_kind)
                      , d = y.game_mgr.get_is_have_jackpot()
                      , p = y.game_mgr.get_seven_deuce_total_profit() > 0;
                    a.show_hand && (a.have_lo_win ? t(this).delay(.5).call((function() {
                        e.play_highlight_animation_hi(a)
                    }
                    )).delay(1).call((function() {
                        y.game_card_highlight.hide_highlight_animation()
                    }
                    )).delay(.2).call((function() {}
                    )).delay(.5).call((function() {
                        e.play_highlight_animation_low(a)
                    }
                    )).start() : o || s && r ? t(this).delay(.5).call((function() {
                        e.play_highlight_animation(a)
                    }
                    )).delay(1).call((function() {
                        y.game_card_highlight.hide_highlight_animation()
                    }
                    )).delay(.2).call((function() {
                        e.table_info_layer_node.change_first_row_and_double_board_pos()
                    }
                    )).delay(.5).call((function() {
                        e.play_double_board_highlight_animation(a)
                    }
                    )).start() : y.game_mgr.is_in_multi_times || t(this).delay(.5).call((function() {
                        l ? e.play_highlight_animation_hi(a) : e.play_highlight_animation(a)
                    }
                    )).start());
                    var u = .4;
                    y.game_mgr.is_in_multi_times ? u = 0 : a.show_hand && (u = 1.7,
                    (o || s && r || a.have_lo_win) && (u = 3)),
                    t(this).delay(u).call((function() {
                        e.player_layer_node.clean_all_player_action_tag(),
                        e.table_info_layer_node.refresh_target_pot_info(-1, !1),
                        e.table_info_layer_node.refresh_real_time_pot_info(!0),
                        e.player_layer_node.refresh_bet_chips_visible(!1);
                        for (var _, t = y.game_mgr.get_all_player_data(), n = h(t); !(_ = n()).done; ) {
                            var o = _.value;
                            o.is_on_seat && e.player_layer_node.refresh_player_hand_chips(o.seat_id)
                        }
                        e.clean_dealer_and_turn(),
                        e.hide_insurance_chips(),
                        e.play_win_pot_animation(a),
                        i && e.play_win_pot_mystery(a)
                    }
                    )).delay(i ? 2 : 1).call((function() {
                        d && !p && e.jackpot_layer.jackpot_show(),
                        p && y.game_card_highlight.hide_highlight_animation(),
                        y.game_task_queue.attemp_done("TEXAS_GAME_RESULT")
                    }
                    )).start()
                }
                ,
                a.on_72_game_result = function(_) {
                    var e = this
                      , a = _.data.params
                      , n = y.game_mgr.get_is_have_jackpot();
                    t(this).call((function() {
                        e.table_info_layer_node.play_72_animation()
                    }
                    )).delay(2).call((function() {
                        if (e.audio_manager_node.play_bet_chips_sound(),
                        a.players_sevendeuce_reward && a.players_sevendeuce_reward.length > 0)
                            for (var _, t = h(a.players_sevendeuce_reward); !(_ = t()).done; ) {
                                var n = _.value;
                                y.game_mgr.get_player_key_data(n.seat_id, "is_on_seat") && y.game_mgr.update_player_key_data(n.seat_id, "inpot_chips", n.sevendeuce_reward)
                            }
                        for (var i, o = y.game_mgr.get_seven_deuce_lose_seat_id(), r = h(o); !(i = r()).done; ) {
                            var s = i.value;
                            e.refresh_somebody_chips(s, p.ACTION_TO_NUM.ACTION_NONE)
                        }
                        e.table_info_layer_node.refresh_real_time_pot_info()
                    }
                    )).delay(1).call((function() {
                        var _ = y.game_mgr.get_seven_deuce_lose_seat_id();
                        e.player_layer_node.bet_chips_fly_to_pot(_),
                        _.length > 0 && e.audio_manager_node.play_chip_to_pot_sound(),
                        e.player_layer_node.refresh_bet_chips_visible(!1)
                    }
                    )).delay(o.card_fly_time).call((function() {
                        e.table_info_layer_node.refresh_game_pot(),
                        e.table_info_layer_node.refresh_target_pot_info(-1, !1);
                        var _ = y.game_mgr.get_seven_deuce_total_profit();
                        y.game_mgr.update_pot_info([_, 0, 0, 0, 0, 0, 0, 0]),
                        e.table_info_layer_node.refresh_target_pot_info(0, !0)
                    }
                    )).delay(o.card_fly_time).call((function() {
                        e.table_info_layer_node.refresh_target_pot_info(-1, !1),
                        e.table_info_layer_node.refresh_real_time_pot_info(!0),
                        e.player_layer_node.refresh_bet_chips_visible(!1);
                        for (var _, t = y.game_mgr.get_all_player_data(), n = h(t); !(_ = n()).done; ) {
                            var i = _.value;
                            i.is_on_seat && e.player_layer_node.refresh_player_hand_chips(i.seat_id)
                        }
                        e.play_win_pot_animation(a)
                    }
                    )).delay(1).call((function() {
                        e.table_info_layer_node.set_72_ani_show(!1),
                        n && e.jackpot_layer.jackpot_show(),
                        y.game_task_queue.attemp_done("TEXAS_72_GAME_RESULT")
                    }
                    )).start()
                }
                ,
                a.play_highlight_animation = function(_) {
                    for (var e, a = [], t = [], n = [], i = [], o = h(_.winner); !(e = o()).done; ) {
                        var r = e.value;
                        r.is_double_board_pot || (0 == r.pot_id ? (a.push(r.seat_id),
                        n[r.seat_id] = r.best_hands) : (t.push(r.seat_id),
                        i[r.seat_id] = r.best_hands))
                    }
                    0 != a.length && y.game_card_highlight.show_highlight_animation_main_side_winner(a, t, n, i)
                }
                ,
                a.play_highlight_animation_hi = function(_) {
                    for (var e, a = [], t = [], n = [], i = [], o = h(_.winner); !(e = o()).done; ) {
                        var r = e.value;
                        r.is_hi_pot && (0 == r.pot_id ? (a.push(r.seat_id),
                        n[r.seat_id] = r.best_hands) : (t.push(r.seat_id),
                        i[r.seat_id] = r.best_hands))
                    }
                    0 != a.length && y.game_card_highlight.show_highlight_animation_main_side_winner_hi(a, t, n, i)
                }
                ,
                a.play_highlight_animation_low = function(_) {
                    for (var e, a = [], t = [], n = [], i = [], o = h(_.winner); !(e = o()).done; ) {
                        var r = e.value;
                        r.is_hi_pot || (0 == r.pot_id ? (a.push(r.seat_id),
                        n[r.seat_id] = r.best_hands) : (t.push(r.seat_id),
                        i[r.seat_id] = r.best_hands))
                    }
                    0 != a.length && y.game_card_highlight.show_highlight_animation_main_side_winner_low(a, t, n, i)
                }
                ,
                a.play_double_board_highlight_animation = function(_) {
                    for (var e, a = [], t = [], n = [], i = [], o = h(_.winner); !(e = o()).done; ) {
                        var r = e.value;
                        r.is_double_board_pot && (0 == r.pot_id ? (a.push(r.seat_id),
                        n[r.seat_id] = r.best_hands) : (t.push(r.seat_id),
                        i[r.seat_id] = r.best_hands))
                    }
                    0 != a.length && y.game_card_highlight.show_double_board_highlight_animation_main_side_winner(a, t, n, i)
                }
                ,
                a.on_chips_back = function(_) {
                    var e = _.data.params;
                    this.player_layer_node.update_allin_chips_back(e.seat_id, e.excess_chips),
                    this.player_layer_node.set_bet_chips_value(e.seat_id),
                    this.table_info_layer_node.refresh_real_time_pot_info(),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_RETURN_CHIPS")
                    }
                    ), .2)
                }
                ,
                a.clean_dealer_and_turn = function() {
                    y.game_mgr.enter_room_data.texas_game_detail.button_seat_id = -1;
                    for (var _, e = y.game_mgr.get_all_player_data(), a = h(e); !(_ = a()).done; ) {
                        var t = _.value;
                        y.game_mgr.update_turn_to_player_action(t.seat_id)
                    }
                }
                ,
                a.play_win_pot_animation = function(_) {
                    for (var e, a = _.result, t = h(a); !(e = t()).done; ) {
                        if (e.value.total_profit > 0) {
                            this.audio_manager_node.play_win_chips_sound();
                            break
                        }
                    }
                    this.player_layer_node.chips_fly_to_winner(_),
                    this.player_layer_node.play_profit_info_animation(_)
                }
                ,
                a.play_win_pot_mystery = function(_) {
                    this.player_layer_node.play_mystery_profit_info_animation(_)
                }
                ,
                a.hide_insurance_chips = function() {
                    this.player_layer_node.hide_insurance_chips()
                }
                ,
                a.on_somebody_straddle = function(_) {
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.STRADDLE_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_STRADDLE)
                }
                ,
                a.on_somebody_pot = function(_) {
                    this.update_other_player_wait_state(_),
                    0 == y.game_mgr.get_player_key_data(_, "playing_chips") ? this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.ALLIN_TAG) : this.refresh_seat_action_tag(_, p.ENUM_ACTION_TAG.POT_TAG),
                    this.audio_manager_node.play_bet_chips_sound(),
                    this.refresh_somebody_chips(_, p.ACTION_TO_NUM.ACTION_POT)
                }
                ,
                a.stop_all_action = function() {}
                ,
                a.on_reconnect_enter_room = function() {
                    this.stop_all_action(),
                    this.refresh_room_while_reconnect();
                    var _ = y.game_mgr.enter_room_data.texas_game_detail.button_seat_id
                      , e = y.game_mgr.enter_room_data.texas_game_detail.sb_seat_id;
                    null != _ && _ >= 0 && this.player_layer_node.refresh_dealer(_, e)
                }
                ,
                a.refresh_room_while_reconnect = function() {
                    y.game_card_highlight.clean_cardtype_hint(),
                    y.game_card_highlight.hide_highlight_animation();
                    var _ = this.player_layer_node.get_countdown_player_index();
                    _ && _ > 0 && this.player_layer_node.stop_player_action_countdown(_),
                    this.player_layer_node.refresh_seats();
                    var e = y.game_mgr.enter_room_data.texas_game_detail.hand_id;
                    this.table_info_layer_node.update_hand_id_label(e);
                    y.game_mgr.game_stage;
                    p.ENUM_ROOM_STAGE.START,
                    this.table_info_layer_node.refresh_blind_label_info(),
                    this.clean_public_card_and_function_node(),
                    this.table_info_layer_node.init_public_cards(),
                    this.table_info_layer_node.refresh_game_pot(),
                    this.table_info_layer_node.refresh_real_time_pot_info(),
                    this.refresh_game_start_ui(),
                    this.jackpot_layer.jackpot_hide()
                }
                ,
                a.on_insurance_info_brc = function(_) {
                    var e = this
                      , a = _.data.params;
                    this.player_layer_node.play_insurance_effect(a),
                    i.do_action_delay(this, (function() {
                        e.table_info_layer_node.refresh_game_pot()
                    }
                    ), 2),
                    i.do_action_delay(this, (function() {
                        e.table_info_layer_node.refresh_game_pot(),
                        y.game_task_queue.attemp_done("TEXAS_RISK_INFO_BRC")
                    }
                    ), 3)
                }
                ,
                a.on_risk_hit_brc = function(_) {
                    var e = _.data.params;
                    this.table_info_layer_node.refresh_game_pot(),
                    this.table_info_layer_node.update_game_public_hit_insurance(e.round),
                    this.player_layer_node.play_risk_hit_insurance(e),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_RISK_HIT_BRC")
                    }
                    ), 1)
                }
                ,
                a.on_multi_board_build = function(_) {
                    var e = _.data.params;
                    this.table_info_layer_node.on_multi_board_build(e)
                }
                ,
                a.on_evchop_myself_pot_rsp = function(_) {
                    this.player_layer_node.refresh_evchop_win_rate_status(),
                    this.player_layer_node.refresh_evchop_selected_tag(),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_EVCHOP_WAIT_PROCESS_RSP")
                    }
                    ), 1)
                }
                ,
                a.on_evchop_notification_brc = function(_) {
                    this.player_layer_node.refresh_evchop_win_rate_status(),
                    this.player_layer_node.refresh_evchop_selected_tag(),
                    y.game_task_queue.attemp_done("TEXAS_EVCHOP_DETAIL_BRC")
                }
                ,
                a.on_wait_voluntary_straddle_brc = function(_) {
                    this.player_layer_node.start_voluntary_straddle_action_countdown()
                }
                ,
                a.play_hilo_win_show = function(_) {
                    this.player_layer_node.play_hilo_win_show(_)
                }
                ,
                a.play_ko_animation = function() {
                    var _ = this;
                    i.do_action_delay(this, (function() {
                        _.table_info_layer_node.play_ko_animation()
                    }
                    ), .8)
                }
                ,
                a.on_show_hand_initiative = function(_) {
                    var e = _.data.params;
                    this.player_layer_node.refresh_player_card_back_visible(!1),
                    this.player_layer_node.show_hand_active(e),
                    i.do_action_delay(this, (function() {
                        y.game_task_queue.attemp_done("TEXAS_SHOW_CARD_ACTIVE")
                    }
                    ), .2)
                }
                ,
                e
            }(n)).prototype, "back_layer_node", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = r(S.prototype, "table_info_layer_node", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = r(S.prototype, "player_layer_node", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = r(S.prototype, "jackpot_layer", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = r(S.prototype, "player_control_node", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = r(S.prototype, "audio_manager_node", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = S)) || R));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main_side_pot.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(t) {
    "use strict";
    var e, n, i, a, r, o, u, c, _, s, l, p, f;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            n = t._decorator,
            i = t.Sprite,
            a = t.Label,
            r = t.Component
        }
        , function(t) {
            o = t.g_func
        }
        , function(t) {
            u = t.applyDecoratedDescriptor,
            c = t.inheritsLoose,
            _ = t.initializerDefineProperty,
            s = t.assertThisInitialized,
            l = t.defineProperty,
            p = t.createClass
        }
        , function(t) {
            f = t.g_instance
        }
        ],
        execute: function() {
            var b, v, d, h, g, m, y, z, w, x, S;
            e._RF.push({}, "41fafcFPE9GIKL5/hAkY++I", "main_side_pot", void 0);
            var k = n.ccclass
              , F = n.property;
            t("main_side_pot", (b = k("main_side_pot"),
            v = F(i),
            d = F(a),
            h = F(i),
            g = F(a),
            b((z = u((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                        i[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(i)) || this,
                    _(s(e), "icon", z, s(e)),
                    _(s(e), "lab_pot", w, s(e)),
                    _(s(e), "icon_insurance", x, s(e)),
                    _(s(e), "lab_insurance", S, s(e)),
                    l(s(e), "_pot_value", 0),
                    l(s(e), "_insurance_vable", 0),
                    l(s(e), "pot_index", -1),
                    e
                }
                c(e, t);
                var n = e.prototype;
                return n.set_pot_index = function(t) {
                    this.pot_index = t,
                    o.load_texture(this.icon, "main/pot_icon" + (t + 1).toString() + "/spriteFrame"),
                    this.pot_item_update_pot_info(this.pot_value)
                }
                ,
                n.pot_item_update_pot_info = function(t) {
                    this.pot_value = t,
                    0 != t ? (this.node.active = !0,
                    t = f.game_data_manager.convert_super_value_to_local(t),
                    this.lab_pot.string = o.display_number(t).toString()) : this.node.active = !1
                }
                ,
                n.update_insurance_pot = function(t) {
                    void 0 === t && (t = 0),
                    this.insurance_vable = 0,
                    0 != t ? (this.icon_insurance.node.active = !0,
                    t = f.game_data_manager.convert_super_value_to_local(t),
                    this.lab_insurance.string = o.display_number(t).toString()) : this.icon_insurance.node.active = !1
                }
                ,
                p(e, [{
                    key: "pot_value",
                    get: function() {
                        return this._pot_value
                    },
                    set: function(t) {
                        this._pot_value = t
                    }
                }, {
                    key: "insurance_vable",
                    get: function() {
                        return this._insurance_vable
                    },
                    set: function(t) {
                        this._insurance_vable = t
                    }
                }]),
                e
            }(r)).prototype, "icon", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = u(y.prototype, "lab_pot", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = u(y.prototype, "icon_insurance", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = u(y.prototype, "lab_insurance", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = y)) || m));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/game_manager.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts"], (function(_) {
    "use strict";
    var t, a, e, i, n, s, o, r;
    return {
        setters: [function(_) {
            t = _.cclegacy
        }
        , function(_) {
            a = _.g_const
        }
        , function(_) {
            e = _.createForOfIteratorHelperLoose,
            i = _.createClass,
            n = _.defineProperty
        }
        , function(_) {
            s = _.g_type
        }
        , function(_) {
            o = _.g_instance
        }
        , function(_) {
            r = _.GAME_CONFIG
        }
        ],
        execute: function() {
            t._RF.push({}, "46942D9MGxHiYtdYiPVXA6j", "game_manager", void 0);
            _("game_manager", function() {
                function _() {
                    n(this, "_enter_room_data", void 0),
                    n(this, "_room_info_data", void 0),
                    n(this, "_animation_speed", 1),
                    n(this, "_seat_count", void 0),
                    n(this, "_game_kind", void 0),
                    n(this, "_game_sub_kind", void 0),
                    n(this, "_game_currency_kind", void 0),
                    n(this, "_hand_count", void 0),
                    n(this, "_is_in_multi_times", void 0),
                    n(this, "_is_show_card_active", void 0),
                    n(this, "_is_waiting_voluntary_straddle", void 0),
                    n(this, "_is_nlh31_discard_card", void 0),
                    n(this, "_voluntary_straddle_chips", void 0),
                    n(this, "_my_seat_id", -1),
                    n(this, "_my_state", r.ENUM_ACTION_STATE.STAND_UP),
                    n(this, "_game_stage", r.ENUM_ROOM_STAGE.WAIT),
                    n(this, "_self_show_index", 0),
                    n(this, "_my_uid", -1),
                    n(this, "_is_addon_ing", !1),
                    n(this, "_is_blind_uping", !1),
                    n(this, "_total_ante_value", 0),
                    n(this, "_allin_player", []),
                    n(this, "_multi_players", []),
                    n(this, "_last_bet", 0),
                    n(this, "_is_sng_register", !1),
                    n(this, "_is_show_my_card", !1),
                    n(this, "_game_control_state", r.GAME_PLAY_STATE.GAME_PAUSE),
                    n(this, "_sound_swith", !1),
                    n(this, "_admin_mode", !1),
                    this._animation_speed = 1,
                    this._game_kind = s.CARD_GAME_KIND.NONE,
                    this._game_sub_kind = s.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NORMAL,
                    this._game_currency_kind = s.GAME_CURRENCY_KIND.GAME_CURRENCY_NONE,
                    this._seat_count = 0,
                    this._hand_count = a.HAND_COUNT.NONE,
                    this._enter_room_data = {},
                    this._room_info_data = {},
                    this._is_in_multi_times = !1,
                    this._is_waiting_voluntary_straddle = !1,
                    this._is_nlh31_discard_card = !1,
                    this._voluntary_straddle_chips = 0,
                    this._is_show_card_active = !1,
                    this._admin_mode = !1
                }
                var t = _.prototype;
                return t.set_choose_game_s2c_data = function() {
                    var _ = o.game_data_manager.json_data
                      , t = {};
                    t.room_id = _.gameSetInfo.room_id,
                    t.game_kind = _.handInfo.game_kind,
                    t.game_currency_kind = _.gameSetInfo.game_currency_kind,
                    t.is_anonymity_share = _.anonymousShare,
                    t.cash_game_desc = this.set_texas_cash_game_desc_data(_),
                    t.sng_game_desc = this.set_texas_cash_game_desc_data(_),
                    t.mtt_game_desc = this.set_texas_cash_game_desc_data(_),
                    t.texas_game_detail = this.set_texas_game_detail_data(_),
                    t.texas_player_detail = this.set_texas_player_detail_data(_),
                    this.enter_room_data = t,
                    this.on_enter_room()
                }
                ,
                t.set_texas_cash_game_desc_data = function(_) {
                    var t = {};
                    return t.game_name = _.gameSetInfo.game_name,
                    t.host_uid = _.gameSetInfo.host_uid,
                    t.room_id = _.gameSetInfo.room_id,
                    t.union_id = _.gameSetInfo.union_id,
                    t.club_name = _.gameSetInfo.club_name,
                    t.game_currency_kind = _.gameSetInfo.game_currency_kind,
                    t.small_blind = _.gameSetInfo.small_blind,
                    t.big_blind = _.gameSetInfo.big_blind,
                    t.ante = _.gameSetInfo.ante,
                    t.action_time = _.gameSetInfo.action_time,
                    t.game_length = _.gameSetInfo.game_length,
                    t.table_size = _.gameSetInfo.table_size,
                    t.game_kind = _.handInfo.game_kind,
                    t.game_sub_kind = _.handInfo.game_sub_kind,
                    t.tips_rate = _.gameSetInfo.tips_rate,
                    t.tips_limit = _.gameSetInfo.tips_limit,
                    t.require_auth = _.gameSetInfo.require_auth,
                    t.minimum_buyin = _.gameSetInfo.minimum_buyin,
                    t.maximum_buyin = _.gameSetInfo.maximum_buyin,
                    t.preset_buyin = _.gameSetInfo.preset_buyin,
                    t.enable_risk_control = _.gameSetInfo.enable_risk_control,
                    t.force_multi = _.gameSetInfo.force_multi,
                    t.gps_restric = _.gameSetInfo.gps_restric,
                    t.ip_restric = _.gameSetInfo.ip_restric,
                    t.gap_restric = _.gameSetInfo.gap_restric,
                    t.calltime = _.gameSetInfo.calltime,
                    t.calltime_hands = _.gameSetInfo.calltime_hands,
                    t.auto_start = _.gameSetInfo.auto_start,
                    t.enable_withdraw = _.gameSetInfo.enable_withdraw,
                    t.enable_auto_extension = _.gameSetInfo.enable_auto_extension,
                    t.auto_extension_amount = _.gameSetInfo.auto_extension_amount,
                    t.enable_auto_open = _.gameSetInfo.enable_auto_open,
                    t.enable_jackpot = _.gameSetInfo.enable_jackpot,
                    t.vpip_restric = _.gameSetInfo.vpip_restric,
                    t.vpip_hands_amount = _.gameSetInfo.vpip_hands_amount,
                    t.career_vpip = _.gameSetInfo.career_vpip,
                    t.enable_talk = _.gameSetInfo.enable_talk,
                    t.enable_hide_club_name = _.gameSetInfo.enable_hide_club_name,
                    t.simulator_restric = _.gameSetInfo.simulator_restric,
                    t.straddle = _.gameSetInfo.straddle,
                    t.hold_last_chips_second = _.gameSetInfo.hold_last_chips_second,
                    t.enable_take_break = _.gameSetInfo.enable_take_break,
                    t.enable_insurance = _.gameSetInfo.enable_insurance,
                    t.enable_evchop = _.gameSetInfo.enable_evchop,
                    t.enable_kyc_restrict = _.gameSetInfo.enable_kyc_restrict,
                    t.super_union_id = _.gameSetInfo.super_union_id,
                    t.enable_db_when_bomb_pot = _.gameSetInfo.enable_db_when_bomb_pot,
                    t.enable_anonymous = _.gameSetInfo.enable_anonymous,
                    t.enable_random_seat = _.gameSetInfo.enable_random_seat,
                    t.voluntary_straddle_type = _.gameSetInfo.voluntary_straddle_type,
                    t
                }
                ,
                t.set_texas_game_detail_data = function(_) {
                    var t = {
                        ongoing: !1,
                        require_authorize: !1
                    };
                    return t.seat_detail = this.set_texas_seat_detail_data(_),
                    t.hand_id = _.handInfo.hand_id,
                    t.hand_ongoing = !1,
                    t.is_final_table = _.handInfo.is_final_table,
                    t.table_pots = [0, 0, 0, 0, 0, 0, 0, 0],
                    t.board_cards = [],
                    t.double_board_cards = [],
                    t.allin = !1,
                    t.button_seat_id = -1,
                    t.curr_round = r.ENUM_ROUND_STAGE.NONE,
                    t.ante = _.handInfo.ante,
                    t.small_blind = _.handInfo.small_blind,
                    t.straddle = _.handInfo.straddle,
                    t.sushi_bonus = this.get_sushi_game_bonus(),
                    t.sushi_sb_times = this.get_sushi_game_sb_times(),
                    t.insurance_pot = [0, 0, 0, 0, 0, 0, 0, 0],
                    t.insurance_data = [],
                    t.evchop_data = [],
                    t.is_bomb_pot_hand = _.handInfo.is_bomb_pot_hand,
                    t.bomb_pot_cur_ante = _.handInfo.bomb_pot_cur_ante,
                    t
                }
                ,
                t.set_texas_seat_detail_data = function(_) {
                    for (var t = _.gameSetInfo.table_size, a = _.playerHands, i = [], n = 0; n < t; n++) {
                        var o = {};
                        o.seat_id = n,
                        o.is_on_seat = !1;
                        for (var r, d = e(a); !(r = d()).done; ) {
                            var h = r.value;
                            h.seat_id == n && (o.player_info = {},
                            o.player_info.name = h.user_name,
                            o.player_info.uid = h.uid,
                            o.player_info.avatar = h.avatar,
                            o.player_info.country = "en",
                            o.vip_lv = h.vip_level,
                            o.playing_chips = h.begin_chips,
                            o.inpot_chips = 0,
                            o.action_kind = s.TEXAS_ACTION_KIND.TEXAS_ACTION_SAT,
                            o.hold_hand = !1,
                            o.is_on_seat = !0,
                            o.sitting_out = !1,
                            o.squid_count = h.begin_squid_count || 0)
                        }
                        i[o.seat_id] = o
                    }
                    return i
                }
                ,
                t.set_texas_player_detail_data = function(_) {
                    return {}
                }
                ,
                t.on_enter_room = function() {
                    s.is_sng_room(this.enter_room_data.game_kind) ? this.update_sng_room_info_model(this.enter_room_data.sng_game_desc) : s.is_mtt_room(this.enter_room_data.game_kind) ? this.update_mtt_room_info_model(this.enter_room_data.mtt_game_desc) : this.update_cash_room_info_model(this.enter_room_data.cash_game_desc),
                    this.update_table_status(this.enter_room_data),
                    this.update_seat_info(),
                    this.self_show_index = Math.floor((this.seat_count + 1) / 2),
                    this.is_nlh31_discard_card = !1
                }
                ,
                t.update_table_status = function(_) {
                    if (_ && _.texas_game_detail) {
                        var t = _.texas_game_detail;
                        s.is_sng_room(this.game_kind) || s.is_mtt_room(this.game_kind) ? this.game_stage = t.ongoing && r.ENUM_ROOM_STAGE.START || r.ENUM_ROOM_STAGE.WAIT : this.game_stage = r.ENUM_ROOM_STAGE.START
                    }
                }
                ,
                t.update_cash_room_info_model = function(_) {
                    this.room_info_data = _,
                    this.game_kind = _.game_kind,
                    this.game_currency_kind = _.game_currency_kind,
                    this.game_sub_kind = _.game_sub_kind,
                    this.seat_count = _.table_size,
                    this.update_hand_card_count()
                }
                ,
                t.update_sng_room_info_model = function(_) {
                    this.room_info_data = _,
                    this.game_kind = _.game_kind,
                    this.game_currency_kind = _.game_currency_kind,
                    this.game_sub_kind = _.game_sub_kind,
                    this.seat_count = _.table_size,
                    this.update_hand_card_count()
                }
                ,
                t.update_mtt_room_info_model = function(_) {
                    this.room_info_data = _,
                    this.game_kind = _.game_kind,
                    this.game_currency_kind = _.game_currency_kind,
                    this.game_sub_kind = _.game_sub_kind,
                    this.seat_count = _.table_size,
                    this.update_hand_card_count()
                }
                ,
                t.update_hand_card_count = function() {
                    var _, t = null === (_ = this.room_info_data) || void 0 === _ ? void 0 : _.game_sub_kind;
                    this.game_kind && (s.is_plo_room(this.game_kind) ? (this.hand_count = a.HAND_COUNT.FOUR,
                    s.is_plo5_room(t) || s.is_plo5_hilo_room(t) ? this.hand_count = a.HAND_COUNT.FIVE : (s.is_plo6_room(t) || s.is_plo6_hilo_room(t)) && (this.hand_count = a.HAND_COUNT.SIX)) : s.is_flash_nlh_room(this.game_kind) ? this.hand_count = a.HAND_COUNT.TWO : s.is_flash_plo4_room(this.game_kind, t) ? this.hand_count = a.HAND_COUNT.FOUR : s.is_flash_plo5_room(this.game_kind, t) ? this.hand_count = a.HAND_COUNT.FIVE : s.is_nlh31_room(t) ? this.hand_count = a.HAND_COUNT.THREE : this.hand_count = a.HAND_COUNT.TWO)
                }
                ,
                t.get_animation_speed_specified = function(_) {
                    return _ / this.animation_speed
                }
                ,
                t.get_real_time_pot_info = function() {
                    for (var _, t, i, n = null === (_ = this.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.seat_detail, s = null === (t = this.enter_room_data.texas_game_detail) || void 0 === t ? void 0 : t.table_pots, o = 0, r = e(n); !(i = r()).done; ) {
                        o += i.value.inpot_chips || 0
                    }
                    for (var d = 0; d < a.MAX_POT_COUNT; d++)
                        o += s[d] || 0;
                    return o
                }
                ,
                t.get_game_pot_info = function() {
                    for (var _, t = [], e = null === (_ = this.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.table_pots, i = 0; i < a.SHOW_POT_COUNT; i++)
                        if (i == a.SHOW_POT_COUNT - 1) {
                            for (var n = 0, s = a.SHOW_POT_COUNT - 1; s < a.MAX_POT_COUNT; s++)
                                n += e[s];
                            t.push(n)
                        } else
                            t.push(e[i] || 0);
                    return t
                }
                ,
                t.get_game_insurance_pot_info = function() {
                    for (var _ = [], t = this.enter_room_data.texas_game_detail.insurance_pot, e = 0; e < a.SHOW_POT_COUNT; e++)
                        if (e == a.SHOW_POT_COUNT - 1) {
                            for (var i = 0, n = a.SHOW_POT_COUNT - 1; n < a.MAX_POT_COUNT; n++)
                                i += t[n];
                            _.push(i)
                        } else
                            _.push(t[e] || 0);
                    return _
                }
                ,
                t.update_seat_info = function() {
                    for (var _, t, a = null === (_ = this.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.seat_detail, i = e(a); !(t = i()).done; ) {
                        var n = t.value;
                        n && n.player_info && n.player_info.uid && n.player_info.uid > 0 && (n.player_info.uid == this.my_uid && (this.my_seat_id = n.seat_id),
                        this.update_my_play_status(n, n.seat_id))
                    }
                }
                ,
                t.update_my_play_status = function(_, t) {
                    var a = _.action_kind;
                    t == this.my_seat_id && ("ACTION_SITED" == r.NUM_TO_ACTION[a] ? this.my_state = r.ENUM_ACTION_STATE.CAN_ACTION : "ACTION_NONE" == r.NUM_TO_ACTION[a] || "ACTION_STRADDLE" == r.NUM_TO_ACTION[a] || "ACTION_RAISE" == r.NUM_TO_ACTION[a] || "ACTION_POT" == r.NUM_TO_ACTION[a] || ("ACTION_FOLD" == r.NUM_TO_ACTION[a] || "ACTION_AUTO_FOLD" == r.NUM_TO_ACTION[a] ? this.my_state = r.ENUM_ACTION_STATE.FOLD_CARD : "ACTION_VOLUNTARY_STRADDLE" == r.NUM_TO_ACTION[a] || "ACTION_VOLUNTARY_RESTRADDLE" == r.NUM_TO_ACTION[a] ? this.my_state = r.ENUM_ACTION_STATE.CAN_NOT_ACTION : this.enter_room_data.texas_game_detail.action_seat_id == this._my_seat_id ? this.my_state = r.ENUM_ACTION_STATE.CAN_ACTION : this.my_state = r.ENUM_ACTION_STATE.FINISH_ACTION))
                }
                ,
                t.on_update_info_while_game_start = function(_) {
                    this.enter_room_data.texas_game_detail.allin = !1,
                    this.is_in_multi_times = !1,
                    this.is_show_card_active = !1,
                    this.is_addon_ing = !1,
                    this.is_blind_uping = !0,
                    this.is_nlh31_discard_card = !1,
                    this.enter_room_data.texas_game_detail.hand_ongoing = !0,
                    this.enter_room_data.texas_game_detail.insurance_data = [],
                    this.enter_room_data.texas_game_detail.evchop_data = [],
                    this.total_ante_value = 0,
                    this.clean_player_hand_card_data(),
                    this.clean_public_card_info(),
                    this.clean_multi_public_card(),
                    this.clean_show_card_active_data(),
                    this.allin_player = [],
                    this.enter_room_data.texas_game_detail.button_seat_id = _.dealer_seat_id,
                    this.enter_room_data.texas_game_detail.sb_seat_id = _.sb_seat_id,
                    this.enter_room_data.texas_game_detail.bb_seat_id = _.bb_seat_id,
                    this.enter_room_data.texas_game_detail.hand_id = _.hand_id,
                    this.enter_room_data.texas_game_detail.curr_round = r.ENUM_ROUND_STAGE.NONE,
                    this.refresh_player_info_while_game_start(_.seat_info)
                }
                ,
                t.clean_show_card_active_data = function() {
                    this.enter_room_data.texas_game_detail.show_card_active_data = [],
                    this.is_show_card_active = !1
                }
                ,
                t.clean_player_hand_card_data = function() {
                    for (var _ = this.enter_room_data.texas_game_detail.seat_detail, t = 0; t < _.length; t++)
                        _[t].hand_cards = []
                }
                ,
                t.clean_public_card_info = function() {
                    this.enter_room_data.texas_game_detail.board_cards = [],
                    this.enter_room_data.texas_game_detail.double_board_cards = []
                }
                ,
                t.clean_multi_public_card = function() {
                    this.enter_room_data.texas_game_detail.multi_times_boards = [],
                    this.multi_players = [],
                    this.is_in_multi_times = !1
                }
                ,
                t.refresh_player_info_while_game_start = function(_) {
                    this.clean_all_player_old_card_and_chips();
                    for (var t = this.enter_room_data.texas_game_detail.seat_detail, a = 0; a < _.length; a++) {
                        var e = _[a].seat_id;
                        t[e].is_on_seat = !0,
                        t[e].action_kind = r.ACTION_TO_NUM.ACTION_NONE,
                        t[e].playing_chips = _[a].chips,
                        t[e].ko_bonus = _[a].ko_bonus,
                        t[e].hold_hand = !1
                    }
                }
                ,
                t.clean_all_player_old_card_and_chips = function() {
                    for (var _ = this.enter_room_data.texas_game_detail.seat_detail, t = 0; t < _.length; t++)
                        _[t].hand_cards = [],
                        _[t].inpot_chips = 0,
                        _[t].action_kind = r.ACTION_TO_NUM.ACTION_SITED
                }
                ,
                t.update_pot_info = function(_) {
                    _ && (this.enter_room_data.texas_game_detail.table_pots = _)
                }
                ,
                t.update_turn_to_player_action = function(_) {
                    this.enter_room_data.texas_game_detail.action_seat_id = _,
                    this.enter_room_data.texas_player_detail.delay_ongoing = !1,
                    this.enter_room_data.texas_player_detail.remaining_action_seconds = 0
                }
                ,
                t.refresh_data_while_new_round = function(_) {
                    this.my_seat_id >= 0 && (this.enter_room_data.texas_game_detail.seat_detail[this.my_seat_id].action_kind == r.ACTION_TO_NUM.ACTION_SITED ? this.my_state = r.ENUM_ACTION_STATE.JUST_ON_SEAT : this.my_state = r.ENUM_ACTION_STATE.CAN_NOT_ACTION);
                    if (_ && _ != r.ENUM_ROUND_STAGE.PRE_FLOP) {
                        for (var t = this.enter_room_data.texas_game_detail.seat_detail, a = 0; a < t.length; a++) {
                            var e = t[a];
                            e.inpot_chips = 0,
                            e.is_on_seat && e.hold_hand && e.action_kind != r.ACTION_TO_NUM.ACTION_SB && e.action_type != r.ACTION_TO_NUM.ACTION_BB && e.action_type != r.ACTION_TO_NUM.ACTION_STRADDLE && e.action_type != r.ACTION_TO_NUM.ACTION_POST_BB && e.action_type != r.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE && e.action_type != r.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE && (e.action_kind = r.ACTION_TO_NUM.ACTION_NONE)
                        }
                        this.last_bet = 0
                    }
                }
                ,
                t.clean_all_player_bet_value = function() {
                    for (var _ = this.enter_room_data.texas_game_detail.seat_detail, t = 0; t < _.length; t++)
                        _[t].inpot_chips = 0
                }
                ,
                t.update_total_ante_value = function(_) {
                    void 0 === _ && (_ = 0),
                    this.total_ante_value = this.total_ante_value + _
                }
                ,
                t.insert_allin_player = function(_) {
                    var t = this.enter_room_data.texas_game_detail.seat_detail;
                    if (t[_]) {
                        for (var a, i = t[_].seat_id, n = e(this.allin_player); !(a = n()).done; ) {
                            if (a.value == i)
                                return
                        }
                        this.allin_player.push(i)
                    }
                }
                ,
                t.update_pre_action_data_default = function(_, t) {}
                ,
                t.on_somebody_blind = function(_, t, a, e) {
                    void 0 === a && (a = 0),
                    3 == e && this.update_total_ante_value(t || 0);
                    var i = this.enter_room_data.texas_game_detail.seat_detail;
                    i[_].action_kind = r.ACTION_TO_NUM.ACTION_NONE;
                    var n = i[_].inpot_chips;
                    n || (n = 0),
                    n += t,
                    i[_].inpot_chips = n;
                    var s = a;
                    s < 0 && (s = 0),
                    s <= 0 && this.insert_allin_player(_),
                    i[_].playing_chips = s,
                    this.update_pre_action_data_default(_, e)
                }
                ,
                t.update_data_while_round_start = function(_) {
                    this.game_stage == r.ENUM_ROOM_STAGE.WAIT && (this.game_stage = r.ENUM_ROOM_STAGE.START);
                    var t = _.round;
                    t == r.ENUM_ROUND_STAGE.FLOP ? this.total_ante_value = 0 : t == r.ENUM_ROUND_STAGE.PRE_FLOP && (this.is_six_plus_by_game_mode() || s.is_mtt_room(this.game_sub_kind) || 0 != this.room_info_data.ante || this.clean_pool_info(),
                    this.clean_data_while_new_hand()),
                    this.enter_room_data.texas_game_detail.curr_round = t,
                    this.enter_room_data.texas_game_detail.is_hand_for_hand = !1,
                    this.enter_room_data.texas_game_detail.wait_satellite_ticket_reward = !1,
                    this.is_waiting_voluntary_straddle = !1,
                    this.refresh_data_while_new_round(t),
                    this.update_game_public_card(_)
                }
                ,
                t.is_six_plus_by_game_mode = function() {
                    return s.is_six_plus_room(this.game_sub_kind)
                }
                ,
                t.clean_pool_info = function() {
                    this.enter_room_data.texas_game_detail.table_pots = [0, 0, 0, 0, 0, 0, 0, 0]
                }
                ,
                t.clean_data_while_new_hand = function() {
                    this.is_sng_register = !0,
                    this.is_show_my_card = !1,
                    this.is_in_multi_times = !1,
                    this.is_show_card_active = !1
                }
                ,
                t.update_game_public_card = function(_) {
                    this.enter_room_data.texas_game_detail.board_cards = _.board_cards,
                    this.enter_room_data.texas_game_detail.double_board_cards = _.double_board_cards
                }
                ,
                t.turn_to_which_player_action = function(_) {
                    this.enter_room_data.texas_game_detail.hand_ongoing = !0;
                    var t = _.seat_id;
                    if (this.update_turn_to_player_action(t),
                    t == this.my_seat_id) {
                        var a = this.get_my_player_data();
                        this.get_pool_limit() && _.maximum_raise_amount || a.hand_chips;
                        this.enter_room_data.texas_player_detail.minimum_bet_amount = _.minimum_raise_amount,
                        this.enter_room_data.texas_player_detail.maximum_bet_amount = _.max_raise_value,
                        this.refresh_raise_level(),
                        this.my_state = r.ENUM_ACTION_STATE.CAN_ACTION,
                        this.enter_room_data.texas_game_detail.seat_detail[this.my_seat_id].action_kind = r.ACTION_TO_NUM.ACTION_NONE,
                        this.update_my_play_status(a, t)
                    }
                }
                ,
                t.get_pool_limit = function() {
                    return s.is_plo_room(this.game_kind) || s.is_flash_plo_room(this.game_kind)
                }
                ,
                t.get_my_player_data = function() {
                    return this.enter_room_data.texas_game_detail.seat_detail[this.my_seat_id]
                }
                ,
                t.refresh_raise_level = function() {}
                ,
                t.on_somebody_call = function(_, t, a, e) {
                    var i = this.enter_room_data.texas_game_detail.seat_detail[_];
                    i.action_kind = e,
                    e == r.ACTION_TO_NUM.ACTION_POST_BB && (i.action_kind = r.ACTION_TO_NUM.ACTION_NONE),
                    i.inpot_chips = i.inpot_chips + t;
                    var n = a || 0;
                    n < 0 && (n = 0),
                    n <= 0 && this.insert_allin_player(_),
                    i.playing_chips = a,
                    (_ = this._my_seat_id) && (this._my_state = r.ENUM_ACTION_STATE.FINISH_ACTION)
                }
                ,
                t.on_somebody_bomb_pot = function(_, t, a) {
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_BOMB_POT);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e);
                    var i = a || 0;
                    i < 0 && (i = 0),
                    i <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a),
                    (_ = this._my_seat_id) && (this._my_state = r.ENUM_ACTION_STATE.FINISH_ACTION),
                    this.refresh_other_player_wait_state(_)
                }
                ,
                t.on_somebody_voluntary_straddle = function(_, t, a) {
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e);
                    var i = a || 0;
                    i < 0 && (i = 0),
                    i <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a)
                }
                ,
                t.on_somebody_voluntary_restraddle = function(_, t, a) {
                    void 0 === a && (a = 0),
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e),
                    a < 0 && (a = 0),
                    a <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a)
                }
                ,
                t.get_all_player_data = function() {
                    var _ = this.enter_room_data.texas_game_detail.seat_detail;
                    if (_)
                        return _
                }
                ,
                t.get_player_data = function(_) {
                    var t = this.enter_room_data.texas_game_detail.seat_detail[_];
                    if (t)
                        return t
                }
                ,
                t.get_player_key_data = function(_, t) {
                    var a = this.enter_room_data.texas_game_detail.seat_detail[_];
                    if (a)
                        return a[t]
                }
                ,
                t.update_sushi_bonus = function(_) {
                    for (var t = 0; t < _.infos.length; t++) {
                        var a = _.infos[t]
                          , e = this.get_seat_id(a.uid);
                        if (this.get_player_key_data(e, "is_on_seat")) {
                            o.game_mgr.get_player_key_data(e, "playing_chips");
                            if (_.type == s.SUSHI_ACTION_TYPE.REWARD)
                                this.update_player_key_data(e, "playing_chips", a.remaining_chips),
                                o.game_mgr.enter_room_data.texas_game_detail.sushi_bonus = 0;
                            else {
                                this.update_player_key_data(e, "playing_chips", a.remaining_chips);
                                var i = o.game_mgr.enter_room_data.texas_game_detail.sushi_bonus;
                                o.game_mgr.enter_room_data.texas_game_detail.sushi_bonus = i + a.chips
                            }
                            _.type == s.SUSHI_ACTION_TYPE.SB_LOSE_PAY && (o.game_mgr.enter_room_data.texas_game_detail.sushi_sb_times += 1)
                        }
                    }
                }
                ,
                t.update_player_key_data = function(_, t, a) {
                    var e = this.enter_room_data.texas_game_detail.seat_detail[_];
                    e && (e[t] = a)
                }
                ,
                t.on_somebody_check = function(_) {
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_CHECK),
                    _ == this.my_seat_id && (this.my_state = r.ENUM_ACTION_STATE.FINISH_ACTION)
                }
                ,
                t.on_somebody_bet = function(_, t, a) {
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_BET);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e);
                    var i = a || 0;
                    i < 0 && (i = 0),
                    i <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", i),
                    this.my_seat_id >= 0 && (this.my_seat_id != _ ? this.my_seat_id == r.ENUM_ACTION_STATE.FINISH_ACTION && (this.my_state = r.ENUM_ACTION_STATE.CAN_NOT_ACTION) : this.my_state = r.ENUM_ACTION_STATE.FINISH_ACTION),
                    this.refresh_other_player_wait_state(_)
                }
                ,
                t.refresh_other_player_wait_state = function(_) {
                    for (var t = this.get_all_player_data(), a = 0; a < t.length; a++) {
                        var e = t[a];
                        e && e.is_on_seat && _ != a && (e.action_type != r.ACTION_TO_NUM.ACTION_BET && e.action_type != r.ACTION_TO_NUM.ACTION_CHECK && e.action_type != r.ACTION_TO_NUM.ACTION_CALL && e.action_type != r.ACTION_TO_NUM.ACTION_POST_BB && e.action_type != r.ACTION_TO_NUM.ACTION_RAISE && e.action_type != r.ACTION_TO_NUM.ACTION_BOMB_POT && e.action_type != r.ACTION_TO_NUM.ACTION_POT || this.update_player_key_data(a, "action_kind", r.ACTION_TO_NUM.ACTION_NONE))
                    }
                }
                ,
                t.on_somebody_fold = function(_) {
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_FOLD),
                    this.update_player_key_data(_, "hold_hand", !1),
                    _ == this.my_seat_id && (this.my_state = r.ENUM_ACTION_STATE.FOLD_CARD)
                }
                ,
                t.on_somebody_raise = function(_, t, a) {
                    void 0 === a && (a = 0),
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_RAISE);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e),
                    a < 0 && (a = 0),
                    a <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a),
                    this.my_seat_id >= 0 && (this.my_seat_id != _ ? this.my_seat_id == r.ENUM_ACTION_STATE.FINISH_ACTION && (this.my_state = r.ENUM_ACTION_STATE.CAN_NOT_ACTION) : this.my_state = r.ENUM_ACTION_STATE.FINISH_ACTION),
                    this.refresh_other_player_wait_state(_)
                }
                ,
                t.on_somebody_straddle = function(_, t, a) {
                    void 0 === a && (a = 0),
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_STRADDLE);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e),
                    a < 0 && (a = 0),
                    a <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a)
                }
                ,
                t.on_somebody_pot = function(_, t, a) {
                    void 0 === a && (a = 0),
                    this.update_player_key_data(_, "action_kind", r.ACTION_TO_NUM.ACTION_POT);
                    var e = this.get_player_key_data(_, "inpot_chips");
                    e += t,
                    this.update_player_key_data(_, "inpot_chips", e),
                    a < 0 && (a = 0),
                    a <= 0 && this.insert_allin_player(_),
                    this.update_player_key_data(_, "playing_chips", a),
                    this.my_seat_id >= 0 && (this.my_seat_id != _ ? this.my_seat_id == r.ENUM_ACTION_STATE.FINISH_ACTION && (this.my_state = r.ENUM_ACTION_STATE.CAN_NOT_ACTION) : this.my_state = r.ENUM_ACTION_STATE.FINISH_ACTION),
                    this.refresh_other_player_wait_state(_)
                }
                ,
                t.on_game_result_update = function(_) {
                    if (this.game_stage = r.ENUM_ROUND_STAGE.OVER,
                    _.players_hand_chips && _.players_hand_chips.length > 0)
                        for (var t, a = e(_.players_hand_chips); !(t = a()).done; ) {
                            var i = t.value;
                            this.get_player_key_data(i.seat_id, "is_on_seat") && this.update_player_key_data(i.seat_id, "playing_chips", i.hand_chips)
                        }
                    if (_.result && _.result.length > 0)
                        for (var n, s = e(_.result); !(n = s()).done; ) {
                            i = n.value;
                            this.get_player_key_data(i.seat_id, "is_on_seat") && this.update_player_key_data(i.seat_id, "total_profit", i.total_profit)
                        }
                    this.enter_room_data.texas_game_detail.evchop_data = []
                }
                ,
                t.on_72_game_result_update = function(_) {
                    if (this.enter_room_data.texas_game_detail.table_pots = [0, 0, 0, 0, 0, 0, 0, 0],
                    this.enter_room_data.texas_game_detail.insurance_pot = [0, 0, 0, 0],
                    this.enter_room_data.texas_game_detail.insurance_data = [],
                    _.players_hand_chips && _.players_hand_chips.length > 0)
                        for (var t, a = e(_.players_hand_chips); !(t = a()).done; ) {
                            var i = t.value;
                            this.get_player_key_data(i.seat_id, "is_on_seat") && this.update_player_key_data(i.seat_id, "playing_chips", i.hand_chips)
                        }
                    if (_.result && _.result.length > 0)
                        for (var n, s = e(_.result); !(n = s()).done; ) {
                            i = n.value;
                            this.get_player_key_data(i.seat_id, "is_on_seat") && this.update_player_key_data(i.seat_id, "total_profit", i.total_profit)
                        }
                }
                ,
                t.get_seven_deuce_total_profit = function() {
                    for (var _, t = 0, a = o.game_data_manager.json_data, i = e(a.playerHands); !(_ = i()).done; ) {
                        var n = _.value.sevendeuce_profit || 0;
                        n > 0 && (t += n)
                    }
                    return t
                }
                ,
                t.get_seven_deuce_lose_seat_id = function() {
                    for (var _, t = [], a = o.game_data_manager.json_data, i = e(a.playerHands); !(_ = i()).done; ) {
                        var n = _.value;
                        (n.sevendeuce_profit || 0) < 0 && t.push(n.seat_id)
                    }
                    return t
                }
                ,
                t.get_seven_decue_bb = function() {
                    var _ = o.game_data_manager.json_data
                      , t = 0
                      , a = _.gameSetInfo.sevendeuce_reward || 0
                      , e = _.handInfo.big_blind || 0;
                    return a > 0 && e > 0 && (t = a / e),
                    t
                }
                ,
                t.get_seat_id = function(_) {
                    for (var t = this.enter_room_data.texas_game_detail.seat_detail, a = -1, e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (i.is_on_seat && i.player_info.uid == _) {
                            a = e;
                            break
                        }
                    }
                    return a
                }
                ,
                t.is_super_union_room = function() {
                    return (this.room_info_data.super_union_id || 0) > 0
                }
                ,
                t.is_enable_anonymity = function() {
                    return this.room_info_data.enable_anonymous || this.enter_room_data.is_anonymity_share
                }
                ,
                t.get_is_have_jackpot = function() {
                    return o.game_data_manager.json_data.jackpot.club_id > 0
                }
                ,
                t.get_all_voluntary_straddle_players = function() {
                    for (var _ = [], t = this.get_all_player_data(), a = 0; a < t.length; a++) {
                        var e = t[a];
                        e && e.is_on_seat && e.playing_chips > 0 && _.push(a)
                    }
                    return _
                }
                ,
                t.get_all_nlh31_discard_card_players = function() {
                    for (var _ = [], t = this.get_all_player_data(), a = 0; a < t.length; a++) {
                        var e = t[a];
                        e && e.is_on_seat && "ACTION_FOLD" != r.NUM_TO_ACTION[e.action_kind] && _.push(a)
                    }
                    return _
                }
                ,
                t.is_squid_room = function() {
                    var _ = o.game_data_manager.json_data.gameSetInfo.squid_game_args;
                    return !(!_ || null == _.squid_game_type || _.squid_game_type == s.SQUID_TYPE.SQUID_GAME_TYPE_NONE)
                }
                ,
                t.get_squid_game_reward = function() {
                    var _ = o.game_data_manager.json_data;
                    return _.gameSetInfo.squid_game_args && _.gameSetInfo.squid_game_args.squid_game_reward ? _.gameSetInfo.squid_game_args.squid_game_reward : 0
                }
                ,
                t.is_squid_ing = function() {
                    var _ = o.game_data_manager.json_data;
                    return _.handInfo.squid_game_status,
                    !(!_.handInfo.squid_game_status || _.handInfo.squid_game_status == s.SQUID_GAME_STATUS.SQUID_GAME_STATUS_NONE)
                }
                ,
                t.is_sushi_game = function() {
                    var _ = o.game_data_manager.json_data.gameSetInfo.sushi_game_args;
                    return !(!_ || !_.is_sushi_game)
                }
                ,
                t.get_sushi_game_args = function() {
                    return o.game_data_manager.json_data.gameSetInfo.sushi_game_args
                }
                ,
                t.get_sushi_game_bonus = function() {
                    if (!this.is_sushi_game())
                        return 0;
                    for (var _ = o.game_data_manager.json_data, t = _.handInfo.sushi_bonus, a = _.handInfo.sushi_data, e = 0; e < a.length; e++) {
                        var i = a[e];
                        i.type != s.SUSHI_ACTION_TYPE.REWARD ? t -= i.chips : t += i.chips
                    }
                    return t
                }
                ,
                t.get_sushi_game_sb_times = function() {
                    return o.game_data_manager.json_data.handInfo.sushi_sb_times
                }
                ,
                i(_, [{
                    key: "enter_room_data",
                    get: function() {
                        return this._enter_room_data
                    },
                    set: function(_) {
                        this._enter_room_data = _
                    }
                }, {
                    key: "room_info_data",
                    get: function() {
                        return this._room_info_data
                    },
                    set: function(_) {
                        this._room_info_data = _
                    }
                }, {
                    key: "animation_speed",
                    get: function() {
                        return this._animation_speed
                    },
                    set: function(_) {
                        this._animation_speed = _
                    }
                }, {
                    key: "seat_count",
                    get: function() {
                        return this._seat_count
                    },
                    set: function(_) {
                        this._seat_count = _
                    }
                }, {
                    key: "game_kind",
                    get: function() {
                        return this._game_kind
                    },
                    set: function(_) {
                        this._game_kind = _
                    }
                }, {
                    key: "game_sub_kind",
                    get: function() {
                        return this._game_sub_kind
                    },
                    set: function(_) {
                        this._game_sub_kind = _
                    }
                }, {
                    key: "game_currency_kind",
                    get: function() {
                        return this._game_currency_kind
                    },
                    set: function(_) {
                        this._game_currency_kind = _
                    }
                }, {
                    key: "hand_count",
                    get: function() {
                        var _, t = null === (_ = this.room_info_data) || void 0 === _ ? void 0 : _.game_sub_kind;
                        return s.is_nlh31_room(t) ? this.is_nlh31_discard_card ? a.HAND_COUNT.TWO : a.HAND_COUNT.THREE : this._hand_count
                    },
                    set: function(_) {
                        this._hand_count = _
                    }
                }, {
                    key: "is_in_multi_times",
                    get: function() {
                        return this._is_in_multi_times
                    },
                    set: function(_) {
                        this._is_in_multi_times = _
                    }
                }, {
                    key: "is_show_card_active",
                    get: function() {
                        return this._is_show_card_active
                    },
                    set: function(_) {
                        this._is_show_card_active = _
                    }
                }, {
                    key: "is_waiting_voluntary_straddle",
                    get: function() {
                        return this._is_waiting_voluntary_straddle
                    },
                    set: function(_) {
                        this._is_waiting_voluntary_straddle = _
                    }
                }, {
                    key: "is_nlh31_discard_card",
                    get: function() {
                        return this._is_nlh31_discard_card
                    },
                    set: function(_) {
                        this._is_nlh31_discard_card = _
                    }
                }, {
                    key: "voluntary_straddle_chips",
                    get: function() {
                        return this._voluntary_straddle_chips
                    },
                    set: function(_) {
                        this._voluntary_straddle_chips = _
                    }
                }, {
                    key: "my_seat_id",
                    get: function() {
                        return this._my_seat_id
                    },
                    set: function(_) {
                        this._my_seat_id = _
                    }
                }, {
                    key: "my_state",
                    get: function() {
                        return this._my_state
                    },
                    set: function(_) {
                        this._my_state = _
                    }
                }, {
                    key: "game_stage",
                    get: function() {
                        return this._game_stage
                    },
                    set: function(_) {
                        this._game_stage = _
                    }
                }, {
                    key: "self_show_index",
                    get: function() {
                        return this._self_show_index
                    },
                    set: function(_) {
                        this._self_show_index = _
                    }
                }, {
                    key: "my_uid",
                    get: function() {
                        return this._my_uid
                    },
                    set: function(_) {
                        this._my_uid = _
                    }
                }, {
                    key: "is_addon_ing",
                    get: function() {
                        return this._is_addon_ing
                    },
                    set: function(_) {
                        this._is_addon_ing = _
                    }
                }, {
                    key: "is_blind_uping",
                    get: function() {
                        return this._is_blind_uping
                    },
                    set: function(_) {
                        this._is_blind_uping = _
                    }
                }, {
                    key: "total_ante_value",
                    get: function() {
                        return this._total_ante_value
                    },
                    set: function(_) {
                        this._total_ante_value = _
                    }
                }, {
                    key: "allin_player",
                    get: function() {
                        return this._allin_player
                    },
                    set: function(_) {
                        this._allin_player = _
                    }
                }, {
                    key: "multi_players",
                    get: function() {
                        return this._multi_players
                    },
                    set: function(_) {
                        this._multi_players = _
                    }
                }, {
                    key: "last_bet",
                    get: function() {
                        return this._last_bet
                    },
                    set: function(_) {
                        this._last_bet = _
                    }
                }, {
                    key: "is_sng_register",
                    get: function() {
                        return this._is_sng_register
                    },
                    set: function(_) {
                        this._is_sng_register = _
                    }
                }, {
                    key: "is_show_my_card",
                    get: function() {
                        return this._is_show_my_card
                    },
                    set: function(_) {
                        this._is_show_my_card = _
                    }
                }, {
                    key: "game_control_state",
                    get: function() {
                        return this._game_control_state
                    },
                    set: function(_) {
                        this._game_control_state = _
                    }
                }, {
                    key: "sound_swith",
                    get: function() {
                        return this._sound_swith
                    },
                    set: function(_) {
                        this._sound_swith = _
                    }
                }, {
                    key: "admin_mode",
                    get: function() {
                        return this._admin_mode
                    },
                    set: function(_) {
                        this._admin_mode = _
                    }
                }]),
                _
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/task_queue.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(t) {
    "use strict";
    var s, c, _, n, e;
    return {
        setters: [function(t) {
            s = t.cclegacy,
            c = t.assert
        }
        , function(t) {
            _ = t.g_func
        }
        , function(t) {
            n = t.defineProperty
        }
        , function(t) {
            e = t.g_instance
        }
        ],
        execute: function() {
            s._RF.push({}, "47ecdACv9FOapXo8mFQBZVV", "task_queue", void 0);
            t("task_queue", function() {
                function t() {
                    n(this, "tb_task", []),
                    n(this, "crt_task_cmd", null)
                }
                var s = t.prototype;
                return s.push_task = function(t, s) {
                    c(t, "cmd is null"),
                    c(s, "process is null"),
                    _.x_log("插入任务== ", t),
                    this.crt_task_cmd ? (_.x_log("执行队列任务中== ", this.crt_task_cmd),
                    this.tb_task.push({
                        cmd: t,
                        process: s
                    })) : (this.crt_task_cmd = t,
                    s())
                }
                ,
                s.attemp_done = function(t) {
                    if (_.x_log("完成任务== ", t, this.crt_task_cmd),
                    e.evt_center.dispatch_event("EVT_GAME_ATTEMP_DONE", {}),
                    this.crt_task_cmd == t)
                        if (this.tb_task.length > 0) {
                            var s = this.tb_task.shift();
                            this.crt_task_cmd = s.cmd,
                            _.x_log("执行任务== ", this.crt_task_cmd),
                            s.process()
                        } else
                            this.crt_task_cmd = null
                }
                ,
                s.clean_task = function() {
                    this.tb_task = []
                }
                ,
                s.is_task_runing = function() {
                    return !!this.crt_task_cmd
                }
                ,
                s.get_task_lenght = function() {
                    return this.tb_task.length
                }
                ,
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/event_dispatcher.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var i, e, s;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }
        , function(t) {
            e = t.defineProperty,
            s = t.createForOfIteratorHelperLoose
        }
        ],
        execute: function() {
            i._RF.push({}, "50477s9gOtOFLXdx0sY+09Q", "event_dispatcher", void 0);
            var n = t("ctm_event", (function(t, i) {
                e(this, "key", void 0),
                e(this, "data", void 0),
                this.key = t,
                this.data = i
            }
            ));
            t("event_dispatcher", function() {
                function t() {
                    e(this, "_listen_list", void 0),
                    this._listen_list = {}
                }
                var i = t.prototype;
                return i.add_listener = function(t, i, e) {
                    null == this._listen_list[t] && (this._listen_list[t] = []);
                    var s = [i, e];
                    this._listen_list[t].push(s)
                }
                ,
                i.remove_listener = function(t, i) {
                    if (null != this._listen_list[t])
                        for (var e = 0; e < this._listen_list[t].length; e++) {
                            if (this._listen_list[t][e][0] == i) {
                                this._listen_list[t].splice(e, 1);
                                break
                            }
                        }
                }
                ,
                i.dispatch_event = function(t, i) {
                    if (null != this._listen_list[t])
                        for (var e, l = new n(t,i), r = s(this._listen_list[t]); !(e = r()).done; ) {
                            var _ = e.value
                              , o = _[0]
                              , c = _[1];
                            c ? o.call(c, l) : o.call(l)
                        }
                }
                ,
                t
            }());
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/hilo_info_node.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(e) {
    "use strict";
    var i, t, l, n, r, a, o, _, g, s, c, u;
    return {
        setters: [function(e) {
            i = e.cclegacy,
            t = e._decorator,
            l = e.Sprite,
            n = e.Label,
            r = e.tween,
            a = e.Vec3,
            o = e.Component
        }
        , function(e) {
            _ = e.applyDecoratedDescriptor,
            g = e.inheritsLoose,
            s = e.initializerDefineProperty,
            c = e.assertThisInitialized
        }
        , function(e) {
            u = e.g_instance
        }
        ],
        execute: function() {
            var d, p, b, h, f, m, y, v, w, L, z;
            i._RF.push({}, "646d7/X6vlMy4n/WBsk+2bz", "hilo_info_node", void 0);
            var I = t.ccclass
              , M = t.property;
            e("hilo_info_node", (d = I("hilo_info_node"),
            p = M(l),
            b = M(n),
            h = M(n),
            f = M(n),
            d((v = _((y = function(e) {
                function i() {
                    for (var i, t = arguments.length, l = new Array(t), n = 0; n < t; n++)
                        l[n] = arguments[n];
                    return i = e.call.apply(e, [this].concat(l)) || this,
                    s(c(i), "bg", v, c(i)),
                    s(c(i), "hi_label", w, c(i)),
                    s(c(i), "lo_label", L, c(i)),
                    s(c(i), "middle_label", z, c(i)),
                    i
                }
                return g(i, e),
                i.prototype.refresh_hilo_card_type = function(e, i) {
                    if (void 0 === e && (e = !1),
                    e) {
                        if (this.bg.node.active = !0,
                        this.hi_label.string = "",
                        this.lo_label.string = "",
                        this.middle_label.string = "",
                        "" != i.card_type && "" != i.low_card_type) {
                            var t = u.game_lang_mgr.language_string(i.card_type);
                            this.hi_label.string = u.game_lang_mgr.language_string("MULTI_HI") + ": " + t,
                            this.lo_label.string = u.game_lang_mgr.language_string("MULTI_LOW") + ": " + i.low_card_type
                        } else {
                            if ("" != i.card_type) {
                                var l = u.game_lang_mgr.language_string(i.card_type);
                                this.middle_label.string = u.game_lang_mgr.language_string("MULTI_HI") + ": " + l
                            }
                            "" != i.low_card_type && (this.middle_label.string = u.game_lang_mgr.language_string("MULTI_LOW") + ": " + i.low_card_type)
                        }
                        this.bg.node.setScale(0, 1),
                        r(this.bg.node).stop().delay(.2).to(.1, {
                            scale: new a(1,1)
                        }, {
                            easing: "quadOut"
                        }).start()
                    } else
                        this.bg.node.active = !1
                }
                ,
                i
            }(o)).prototype, "bg", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = _(y.prototype, "hi_label", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = _(y.prototype, "lo_label", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = _(y.prototype, "middle_label", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = y)) || m));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/head_downloader.ts", ["cc", "./xconfig.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts"], (function(e) {
    "use strict";
    var a, n, t, _, i, s, r, o;
    return {
        setters: [function(e) {
            a = e.cclegacy,
            n = e.assetManager,
            t = e.SpriteFrame,
            _ = e.resources,
            i = e.sp
        }
        , function(e) {
            s = e.X_CONFIG
        }
        , function(e) {
            r = e.defineProperty
        }
        , function(e) {
            o = e.g_type
        }
        ],
        execute: function() {
            a._RF.push({}, "684bbHi/1RKsqKMkAgpToUF", "head_downloader", void 0);
            var m = e("SPECIAL_SPINE_HEAD", new Map);
            m.set(10070, {
                name: "h1",
                ani_name: "ani_h1_p2"
            }),
            m.set(10071, {
                name: "h2",
                ani_name: "ani_h2_p2"
            }),
            m.set(10087, {
                name: "h3",
                ani_name: "ani_h3_p2"
            }),
            m.set(10088, {
                name: "h4",
                ani_name: "ani_h4_p2"
            }),
            m.set(10105, {
                name: "s_1",
                ani_name: "ani_s_1"
            }),
            m.set(10106, {
                name: "s_2",
                ani_name: "ani_s_2"
            }),
            m.set(10107, {
                name: "s_3",
                ani_name: "ani_s_3"
            }),
            m.set(10108, {
                name: "s_4",
                ani_name: "ani_s_4"
            }),
            m.set(10113, {
                name: "s_7",
                ani_name: "ani_s_7"
            }),
            m.set(10114, {
                name: "s_8",
                ani_name: "ani_s_8"
            }),
            m.set(10115, {
                name: "s_6",
                ani_name: "ani_s_6"
            }),
            m.set(10116, {
                name: "s_5",
                ani_name: "ani_s_5"
            }),
            m.set(10117, {
                name: "daziji",
                ani_name: "daziji"
            }),
            m.set(10118, {
                name: "head_tv",
                ani_name: "ani_head_tv"
            }),
            m.set(10169, {
                name: "head_1",
                ani_name: "ani_head_1"
            }),
            m.set(10170, {
                name: "head_2",
                ani_name: "ani_head_2"
            }),
            m.set(10203, {
                name: "head_3",
                ani_name: "ani_head_3"
            }),
            m.set(10204, {
                name: "head_4",
                ani_name: "ani_head_4"
            }),
            m.set(10186, {
                name: "head_5",
                ani_name: "ani_head_5"
            }),
            m.set(10185, {
                name: "head_6",
                ani_name: "ani_head_6"
            }),
            m.set(10177, {
                name: "head_7",
                ani_name: "ani_head_7"
            }),
            m.set(10178, {
                name: "head_8",
                ani_name: "ani_head_8"
            });
            var d = e("head_downloader", function() {
                function e() {}
                e.get_instance = function() {
                    return null == e.instance && (e.instance = new e),
                    e.instance
                }
                ;
                var a = e.prototype;
                return a.download = function(e, a) {
                    null != a && "" != a && s.RUNTIME_MODE != o.RUNTIME_MODE.DEGUG && this.is_x_poker_icon(a) && (a = "/image/" + a,
                    n.loadRemote(a, (function(a, n) {
                        var _ = new t;
                        _.texture = n._texture,
                        e.spriteFrame = _
                    }
                    )))
                }
                ,
                a.is_x_poker_icon = function(e) {
                    var a = !0;
                    return -1 == e.search("x-game.net") && -1 == e.search("x-poker.net") && (a = !1),
                    a
                }
                ,
                a.set_head_icon = function(e, a) {
                    if (null != a && "" != a || (a = "default:0"),
                    a.startsWith("default:")) {
                        var n = a.split(":")
                          , i = 0;
                        if (2 == n.length) {
                            var s = parseInt(n[1]);
                            i = isNaN(s) || s < 1 || s > 58 ? 0 : s
                        }
                        var r = "head/player_head_" + i.toString() + "/spriteFrame";
                        _.load(r, t, (function(a, n) {
                            e.spriteFrame = n
                        }
                        ))
                    } else if (a.startsWith("special:")) {
                        var o = a.split(":")
                          , m = 0;
                        if (2 == o.length) {
                            var d = parseInt(o[1]);
                            m = isNaN(d) || d < 10001 || d > 10222 ? 10001 : d
                        }
                        var h = "head/player_head_" + m.toString() + "/spriteFrame";
                        _.load(h, t, (function(a, n) {
                            e.spriteFrame = n
                        }
                        ))
                    } else
                        this.download(e, a)
                }
                ,
                a.set_special_spine_head_icon = function(e, a) {
                    var n = e.getComponent(i.Skeleton)
                      , t = m.get(a)
                      , s = "head/head_spine/" + t.name;
                    _.load(s, i.SkeletonData, (function(a, _) {
                        e.active = !0,
                        n.skeletonData = _,
                        n.setSkin("default"),
                        n.clearTrack(0),
                        n.setAnimation(0, t.ani_name, !0)
                    }
                    ))
                }
                ,
                e
            }());
            r(d, "instance", void 0),
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/audio_manager.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, u, a, l, c, _;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            i = e._decorator,
            n = e.AudioClip,
            r = e.AudioSource,
            o = e.Component
        }
        , function(e) {
            u = e.applyDecoratedDescriptor,
            a = e.inheritsLoose,
            l = e.initializerDefineProperty,
            c = e.assertThisInitialized
        }
        , function(e) {
            _ = e.g_instance
        }
        ],
        execute: function() {
            var p, f, s, y, h, b, d, g, C, m, D, H, I, O, T, A, N, w, z, P, E;
            t._RF.push({}, "68676Btcp9KRbXDuZr4JXLs", "audio_manager", void 0);
            var L = i.ccclass
              , R = i.property;
            e("audio_manager", (p = L("audio_manager"),
            f = R(n),
            s = R(n),
            y = R(n),
            h = R(n),
            b = R(n),
            d = R(n),
            g = R(n),
            C = R(n),
            m = R(r),
            p((I = u((H = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                        n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    l(c(t), "BET", I, c(t)),
                    l(c(t), "CHECK", O, c(t)),
                    l(c(t), "FOLD", T, c(t)),
                    l(c(t), "TURN_ACTION", A, c(t)),
                    l(c(t), "CHIP_TO_POT", N, c(t)),
                    l(c(t), "WIN_CHIPS", w, c(t)),
                    l(c(t), "SHOW_HAND", z, c(t)),
                    l(c(t), "DEALING_CARD", P, c(t)),
                    l(c(t), "audio_source", E, c(t)),
                    t
                }
                a(t, e);
                var i = t.prototype;
                return i.play_effect = function(e, t) {
                    _.game_mgr.sound_swith && this.audio_source.playOneShot(e)
                }
                ,
                i.play_bet_chips_sound = function() {
                    this.play_effect(this.BET)
                }
                ,
                i.play_check_sound = function() {
                    this.play_effect(this.CHECK)
                }
                ,
                i.play_fold_sound = function() {
                    this.play_effect(this.FOLD)
                }
                ,
                i.play_turn_action_sound = function() {
                    this.play_effect(this.TURN_ACTION)
                }
                ,
                i.play_chip_to_pot_sound = function() {
                    this.play_effect(this.CHIP_TO_POT)
                }
                ,
                i.play_win_chips_sound = function() {
                    this.play_effect(this.WIN_CHIPS)
                }
                ,
                i.play_show_hand_effect = function() {
                    this.play_effect(this.SHOW_HAND)
                }
                ,
                i.play_turn_card_sound = function() {
                    this.play_effect(this.DEALING_CARD)
                }
                ,
                t
            }(o)).prototype, "BET", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = u(H.prototype, "CHECK", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = u(H.prototype, "FOLD", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = u(H.prototype, "TURN_ACTION", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = u(H.prototype, "CHIP_TO_POT", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = u(H.prototype, "WIN_CHIPS", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = u(H.prototype, "SHOW_HAND", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = u(H.prototype, "DEALING_CARD", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = u(H.prototype, "audio_source", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = H)) || D));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/hand_back.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var t, r, n, i, a, c, o, l, u, s;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            r = e._decorator,
            n = e.Sprite,
            i = e.CCInteger,
            a = e.Component
        }
        , function(e) {
            c = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            l = e.initializerDefineProperty,
            u = e.assertThisInitialized,
            s = e.createForOfIteratorHelperLoose
        }
        ],
        execute: function() {
            var p, _, d, b, f, h, v;
            t._RF.push({}, "71b51+CNaVKWbEUEEp5g3k5", "hand_back", void 0);
            var y = r.ccclass
              , g = r.property;
            e("hand_back", (p = y("hand_back"),
            _ = g({
                type: [n]
            }),
            d = g({
                type: i
            }),
            p((h = c((f = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                        n[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    l(u(t), "tb_card", h, u(t)),
                    l(u(t), "card_count", v, u(t)),
                    t
                }
                o(t, e);
                var r = t.prototype;
                return r.set_visible_with_index = function(e, t) {
                    if (!(e < 0 && e >= this.card_count)) {
                        var r = this.tb_card[e];
                        null != r && (r.node.active = t)
                    }
                }
                ,
                r.set_all_visible = function(e) {
                    for (var t, r = s(this.tb_card); !(t = r()).done; ) {
                        t.value.node.active = e
                    }
                }
                ,
                t
            }(a)).prototype, "tb_card", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = c(f.prototype, "card_count", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            b = f)) || b));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/jackpot_result_node.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./jackpot_player_item.ts"], (function(t) {
    "use strict";
    var e, a, n, i, r, u, o, l, s, _, p, c, m, h, f, d;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            a = t._decorator,
            n = t.Sprite,
            i = t.Prefab,
            r = t.Node,
            u = t.instantiate,
            o = t.UITransform,
            l = t.Component
        }
        , function(t) {
            s = t.g_func
        }
        , function(t) {
            _ = t.applyDecoratedDescriptor,
            p = t.inheritsLoose,
            c = t.initializerDefineProperty,
            m = t.assertThisInitialized,
            h = t.defineProperty
        }
        , function(t) {
            f = t.g_instance
        }
        , function(t) {
            d = t.jackpot_player_item
        }
        ],
        execute: function() {
            var b, y, g, v, j, k, w, z, P, C, S, I, L, D, F, J, N, O, R, T, x, A, M;
            e._RF.push({}, "76965tm9nRKILn4TJt2I4Of", "jackpot_result_node", void 0);
            var B = a.ccclass
              , H = a.property;
            t("jackpot_result_node", (b = B("jackpot_result_node"),
            y = H(n),
            g = H(n),
            v = H(n),
            j = H(n),
            k = H(n),
            w = H(n),
            z = H(n),
            P = H(n),
            C = H(i),
            S = H(r),
            b((D = _((L = function(t) {
                function e() {
                    for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                        n[i] = arguments[i];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    c(m(e), "num_0", D, m(e)),
                    c(m(e), "num_1", F, m(e)),
                    c(m(e), "num_2", J, m(e)),
                    c(m(e), "num_3", N, m(e)),
                    c(m(e), "num_4", O, m(e)),
                    c(m(e), "num_5", R, m(e)),
                    c(m(e), "num_6", T, m(e)),
                    c(m(e), "num_7", x, m(e)),
                    c(m(e), "jackpot_palyer_item_prefab", A, m(e)),
                    c(m(e), "item_bg", M, m(e)),
                    h(m(e), "num_array", []),
                    h(m(e), "result_data", null),
                    e
                }
                p(e, t);
                var a = e.prototype;
                return a.onLoad = function() {
                    this.init_data()
                }
                ,
                a.init_data = function() {
                    if (f.game_mgr.get_is_have_jackpot()) {
                        var t = f.game_data_manager.json_data;
                        this.result_data = JSON.parse(JSON.stringify(t.jackpot)),
                        this.num_array.push(this.num_0),
                        this.num_array.push(this.num_1),
                        this.num_array.push(this.num_2),
                        this.num_array.push(this.num_3),
                        this.num_array.push(this.num_4),
                        this.num_array.push(this.num_5),
                        this.num_array.push(this.num_6),
                        this.num_array.push(this.num_7);
                        for (var e = 0, a = 0, n = 0; n < this.result_data.detail_data.loser.length; n++) {
                            var i = this.result_data.detail_data.loser[n];
                            if (1 * i.chips >= 100) {
                                var r;
                                e += 1 * i.chips;
                                var l = u(this.jackpot_palyer_item_prefab);
                                l.parent = this.node,
                                null === (r = l.getComponent(d)) || void 0 === r || r.set_data(i),
                                l.setPosition(0, 150 - 80 * a),
                                a += 1
                            }
                        }
                        for (n = 0; n < this.result_data.detail_data.winner.length; n++) {
                            var _ = this.result_data.detail_data.winner[n];
                            if (1 * _.chips >= 100) {
                                var p;
                                e += 1 * _.chips;
                                var c = u(this.jackpot_palyer_item_prefab);
                                c.parent = this.node,
                                null === (p = c.getComponent(d)) || void 0 === p || p.set_data(_),
                                c.setPosition(0, 150 - 80 * a),
                                a += 1
                            }
                        }
                        for (n = 0; n < this.result_data.detail_data.table_share.length; n++) {
                            var m = this.result_data.detail_data.table_share[n];
                            if (1 * m.chips >= 100) {
                                var h;
                                e += 1 * m.chips;
                                var b = u(this.jackpot_palyer_item_prefab);
                                b.parent = this.node,
                                null === (h = b.getComponent(d)) || void 0 === h || h.set_data(m),
                                b.setPosition(0, 150 - 80 * a),
                                a += 1
                            }
                        }
                        e = f.game_data_manager.convert_super_value_to_local(e, !0),
                        e /= 100,
                        (e = Math.floor(e)) > 99999999 && (e = 99999999);
                        for (var y = (Array(8).join("0") + e).slice(-8), g = 0; g < this.num_array.length; g++) {
                            var v = this.num_array[g];
                            s.load_texture(v, "main/jackpot/activation_" + y[g] + "/spriteFrame")
                        }
                        var j = 80 * (a - 1) + 150;
                        if (j < 200 && (j = 200),
                        this.item_bg) {
                            var k = this.item_bg.getComponent(o);
                            k && k.setContentSize(515, j)
                        }
                    }
                }
                ,
                a.jackpot_show = function() {
                    this.node.active = !0
                }
                ,
                a.jackpot_hide = function() {
                    this.node.active = !1
                }
                ,
                e
            }(l)).prototype, "num_0", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = _(L.prototype, "num_1", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = _(L.prototype, "num_2", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = _(L.prototype, "num_3", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = _(L.prototype, "num_4", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = _(L.prototype, "num_5", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = _(L.prototype, "num_6", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = _(L.prototype, "num_7", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = _(L.prototype, "jackpot_palyer_item_prefab", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = _(L.prototype, "item_bg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = L)) || I));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/game_config.ts", ["cc"], (function(A) {
    "use strict";
    var _;
    return {
        setters: [function(A) {
            _ = A.cclegacy
        }
        ],
        execute: function() {
            var T;
            A("GAME_CONFIG", void 0),
            _._RF.push({}, "76b90SDmwZB7oTW9E+jG4PW", "game_config", void 0),
            function(A) {
                var _, T, E, O, N;
                A.HAND_CARD_SCALE = .78,
                A.PUBLIC_CARD_SCALE = .9,
                A.HAND_CARD_COUNT = {
                    TWO: 2,
                    FOUR: 4,
                    FIVE: 5,
                    SIX: 6
                },
                A.ENUM_ROOM_STAGE = {
                    WAIT: 1,
                    START: 2,
                    OVER: 3
                },
                A.ENUM_ROUND_STAGE = {
                    NONE: 0,
                    PRE_FLOP: 1,
                    FLOP: 2,
                    TURN: 3,
                    RIVER: 4,
                    OVER: 5
                };
                !function(A) {
                    A[A.GAME_SET_PLAY_STATUS_NONE = 0] = "GAME_SET_PLAY_STATUS_NONE",
                    A[A.GAME_SET_PLAY_STATUS_PLAYING = 1] = "GAME_SET_PLAY_STATUS_PLAYING",
                    A[A.GAME_SET_PLAY_STATUS_FINISH = 100] = "GAME_SET_PLAY_STATUS_FINISH"
                }(E || (E = {})),
                A.ENUM_GAME_SET_STATUS = E,
                function(A) {
                    A[A.EMPTY_STATE = 1] = "EMPTY_STATE",
                    A[A.SIT_DOWN_STATE = 2] = "SIT_DOWN_STATE",
                    A[A.ON_TABLE_STATE = 3] = "ON_TABLE_STATE"
                }(O || (O = {})),
                A.ENUM_SEAT_STATE = O,
                function(A) {
                    A[A.FINISH_ACTION = 1] = "FINISH_ACTION",
                    A[A.CAN_BET = 2] = "CAN_BET",
                    A[A.CAN_RAISE = 3] = "CAN_RAISE",
                    A[A.JUST_ON_SEAT = 4] = "JUST_ON_SEAT",
                    A[A.STAND_UP = 5] = "STAND_UP",
                    A[A.CAN_ACTION = 6] = "CAN_ACTION",
                    A[A.CAN_NOT_ACTION = 7] = "CAN_NOT_ACTION",
                    A[A.FOLD_CARD = 8] = "FOLD_CARD"
                }(N || (N = {})),
                A.ENUM_ACTION_STATE = N;
                var S, C;
                A.ACTION_TO_NUM = ((_ = {}).ACTION_NONE = 0,
                _.ACTION_ANTE = 1,
                _.ACTION_SB = 2,
                _.ACTION_BB = 3,
                _.ACTION_POST_BB = 4,
                _.ACTION_STRADDLE = 5,
                _.ACTION_CHECK = 7,
                _.ACTION_FOLD = 8,
                _.ACTION_BET = 9,
                _.ACTION_CALL = 10,
                _.ACTION_RAISE = 11,
                _.ACTION_POT = 12,
                _.ACTION_AUTO_CHECK = 13,
                _.ACTION_AUTO_FOLD = 14,
                _.ACTION_SITED = 15,
                _.ACTION_BOMB_POT = 16,
                _.ACTION_VOLUNTARY_STRADDLE = 17,
                _.ACTION_VOLUNTARY_RESTRADDLE = 18,
                _.ACTION_FLASH_FOLD = 19,
                _),
                A.NUM_TO_ACTION = ((T = {})[0] = "ACTION_NONE",
                T[1] = "ACTION_ANTE",
                T[2] = "ACTION_SB",
                T[3] = "ACTION_BB",
                T[4] = "ACTION_POST_BB",
                T[5] = "ACTION_STRADDLE",
                T[7] = "ACTION_CHECK",
                T[8] = "ACTION_FOLD",
                T[9] = "ACTION_BET",
                T[10] = "ACTION_CALL",
                T[11] = "ACTION_RAISE",
                T[12] = "ACTION_POT",
                T[13] = "ACTION_AUTO_CHECK",
                T[14] = "ACTION_AUTO_FOLD",
                T[15] = "ACTION_SITED",
                T[16] = "ACTION_BOMB_POT",
                T[17] = "ACTION_VOLUNTARY_STRADDLE",
                T[18] = "ACTION_VOLUNTARY_RESTRADDLE",
                T[19] = "ACTION_FLASH_FOLD",
                T),
                A.ENUM_ACTION_TAG = {
                    ALLIN_TAG: "ALLIN",
                    FOLD_TAG: "FOLD",
                    CALL_TAG: "CALL",
                    CHECK_TAG: "CHECK",
                    RAISE_TAG: "RAISE",
                    BET_TAG: "BET",
                    STRADDLE_TAG: "STRADDLE",
                    POT_TAG: "POT",
                    BOMB_POT_TAG: "BOMB_POT",
                    VOLUNTARY_STRADDLE_TAG: "VOLUNTARY_STRADDLE",
                    VOLUNTARY_RESTRADDLE_TAG: "VOLUNTARY_RESTRADDLE"
                },
                A.ENUM_POS_COUNT = {
                    POS_TWO: 2,
                    POS_THREE: 3,
                    POS_FOUR: 4,
                    POS_FIVE: 5,
                    POS_SIX: 6,
                    POS_SEVEN: 7,
                    POS_EIGHT: 8,
                    POS_NINE: 9
                };
                !function(A) {
                    A[A.EVCHOP_PLAYER_STATUS_WAIT = 0] = "EVCHOP_PLAYER_STATUS_WAIT",
                    A[A.EVCHOP_PLAYER_STATUS_DRAWDEAD = 1] = "EVCHOP_PLAYER_STATUS_DRAWDEAD",
                    A[A.EVCHOP_PLAYER_STATUS_CONFIRM = 2] = "EVCHOP_PLAYER_STATUS_CONFIRM",
                    A[A.EVCHOP_PLAYER_STATUS_REFUSE = 3] = "EVCHOP_PLAYER_STATUS_REFUSE"
                }(S || (S = {})),
                A.ENUM_EVCHOP_PLAYER_STATUS = S,
                function(A) {
                    A[A.GAME_PLAY = 0] = "GAME_PLAY",
                    A[A.GAME_PAUSE = 1] = "GAME_PAUSE",
                    A[A.GAME_FORWARD = 2] = "GAME_FORWARD",
                    A[A.GAME_BACKWARD = 3] = "GAME_BACKWARD"
                }(C || (C = {})),
                A.GAME_PLAY_STATE = C;
                A.TEXAS_RETRIEVE_ANI_DURATION = .34,
                A.TEXAS_RETRIEVE_ANI_GAP = .02,
                A.TEXAS_RETRIEVE_HEIGHT = 100
            }(T || (T = A("GAME_CONFIG", {}))),
            _._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/game_animation_utils.ts", ["cc", "./g_init.ts", "./mius.ts"], (function(e) {
    "use strict";
    var t, i, n, o, a, s, r, _;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            i = e.resources,
            n = e.SpriteFrame,
            o = e.Node,
            a = e.Sprite,
            s = e.tween
        }
        , function(e) {
            r = e.g_speed
        }
        , function(e) {
            _ = e.g_instance
        }
        ],
        execute: function() {
            t._RF.push({}, "7c481Sg94dOi4imJmv5G09h", "game_animation_utils", void 0);
            e("game_animation_utils", function() {
                function e() {}
                return e.prototype.bet_chips_fly_to_pot_animation = function(e, t, c) {
                    for (var m = [0, .1, .2], u = function(u) {
                        var p = m[u];
                        i.load("main/common_chips_orange/spriteFrame", n, (function(i, n) {
                            var m = new o;
                            m.layer = e.node.layer,
                            m.setPosition(t),
                            m.parent = e.node,
                            m.addComponent(a).spriteFrame = n;
                            var u = c;
                            s(m).hide().delay(_.game_mgr.get_animation_speed_specified(p)).show().to(_.game_mgr.get_animation_speed_specified(r.bet_chips_fly_to_pot), {
                                position: u
                            }, {
                                easing: "quadOut"
                            }).call((function() {}
                            )).removeSelf().start()
                        }
                        ))
                    }, p = 0; p < m.length; p++)
                        u(p)
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/card_logic.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(r) {
    "use strict";
    var e, n;
    return {
        setters: [function(r) {
            e = r.cclegacy
        }
        , function(r) {
            n = r.createForOfIteratorHelperLoose
        }
        ],
        execute: function() {
            var u;
            r("card_logic", void 0),
            e._RF.push({}, "7ffe62FONJMjZcHqOxx21Dd", "card_logic", void 0),
            function(r) {
                var e, _, a, t, l = r.CARD_STRING_2_NUM = ((e = {})[2] = 2,
                e[3] = 3,
                e[4] = 4,
                e[5] = 5,
                e[6] = 6,
                e[7] = 7,
                e[8] = 8,
                e[9] = 9,
                e[10] = 10,
                e.j = 11,
                e.q = 12,
                e.k = 13,
                e.a = 14,
                e), o = r.CARD_NUM_2_STRING = ((_ = {})[1] = "A",
                _[2] = "2",
                _[3] = "3",
                _[4] = "4",
                _[5] = "5",
                _[6] = "6",
                _[7] = "7",
                _[8] = "8",
                _[9] = "9",
                _[10] = "10",
                _[11] = "j",
                _[12] = "q",
                _[13] = "k",
                _[14] = "a",
                _);
                r.CARD_RANKING_TO_NAME = ((a = {})[10] = {
                    label: "MULTI_HIGHCARD"
                },
                a[20] = {
                    label: "MULTI_PAIR"
                },
                a[30] = {
                    label: "MULTI_TWOPAIR"
                },
                a[40] = {
                    label: "MULTI_TRIPS"
                },
                a[50] = {
                    label: "MULTI_STRAIGHT"
                },
                a[60] = {
                    label: "MULTI_FLUSH"
                },
                a[70] = {
                    label: "MULTI_FULLHOUSE"
                },
                a[75] = {
                    label: "MULTI_FLUSH"
                },
                a[80] = {
                    label: "MULTI_QUADS"
                },
                a[90] = {
                    label: "MULTI_STRAIGHTFLUSH"
                },
                a[100] = {
                    label: "MULTI_ROYALFLUSH"
                },
                a),
                r.CARD_RANKING = ((t = {})[0] = {
                    value: 10
                },
                t[1] = {
                    value: 20
                },
                t[2] = {
                    value: 30
                },
                t[3] = {
                    value: 40
                },
                t[7] = {
                    value: 50
                },
                t[8] = {
                    value: 60
                },
                t[4] = {
                    value: 70
                },
                t[11] = {
                    value: 75
                },
                t[6] = {
                    value: 80
                },
                t[9] = {
                    value: 90
                },
                t[10] = {
                    value: 100
                },
                t);
                r.convert_to_number_value = function(r) {
                    return l[r]
                }
                ,
                r.convert_to_string_value = function(r) {
                    return o[r]
                }
                ,
                r.get_five_card_type = function(r, e) {
                    void 0 === e && (e = !1);
                    var n = -1;
                    if (r && 5 == r.length) {
                        var u = function(r) {
                            for (var e = !0, n = null, u = 0; u < r.length; u++)
                                if (n) {
                                    var _ = r[u].x_color;
                                    if (n != _)
                                        return e = !1;
                                    n = _
                                } else
                                    n = r[u].x_color;
                            return e
                        };
                        if (r.sort((function(r, e) {
                            return r.x_number < e.x_number ? -1 : r.x_number > e.x_number ? 1 : 0
                        }
                        )),
                        function(r) {
                            for (var n = !0, u = null, _ = 0; _ < r.length; _++)
                                if (u) {
                                    var a = r[_].x_number;
                                    if (1 != a - u) {
                                        n = !1;
                                        break
                                    }
                                    u = a
                                } else
                                    u = r[_].x_number;
                            return n || (2 == r[0].x_number && 3 == r[1].x_number && 4 == r[2].x_number && 5 == r[3].x_number && 14 == r[4].x_number && (n = !0),
                            e && 6 == r[0].x_number && 7 == r[1].x_number && 8 == r[2].x_number && 9 == r[3].x_number && 14 == r[4].x_number && (n = !0)),
                            n
                        }(r))
                            return n = u(r) ? function(r) {
                                var e = !1;
                                return 10 == r[0].x_number && 11 == r[1].x_number && 12 == r[2].x_number && 13 == r[3].x_number && 14 == r[4].x_number && (e = !0),
                                e
                            }(r) ? 10 : 9 : 7;
                        if (u(r))
                            return n = 8,
                            e && (n = 11),
                            n;
                        n = function(r) {
                            for (var e = 0, n = 0; n < r.length - 1; n++)
                                for (var u = n + 1; u < r.length; u++)
                                    r[n].x_number == r[u].x_number && (e += 1);
                            return e
                        }(r)
                    }
                    return n
                }
                ,
                r.get_combination_list = function(r, e) {
                    var n = r.length
                      , u = []
                      , _ = [];
                    function a() {
                        var e = [];
                        for (var n in _)
                            e.push(r[_[n]]);
                        return e
                    }
                    return function r(t, l) {
                        for (var o = t; o <= n - e + l; o++)
                            if (_[l] = o,
                            l == e - 1) {
                                var i = a();
                                u.push(i)
                            } else
                                r(o + 1, l + 1)
                    }(0, 0),
                    u
                }
                ,
                r.get_omaha_low_combination_list = function(r, e) {
                    var n = r.length
                      , u = []
                      , _ = [];
                    function a() {
                        var e = [];
                        for (var n in _) {
                            var u = r[_[n]].x_number;
                            14 == u && (u = 1),
                            r[_[n]].x_low_number = u,
                            u <= 8 && e.push(r[_[n]])
                        }
                        return e
                    }
                    return function r(t, l) {
                        for (var o = t; o <= n - e + l; o++)
                            if (_[l] = o,
                            l == e - 1) {
                                var i = a();
                                u.push(i)
                            } else
                                r(o + 1, l + 1)
                    }(0, 0),
                    u
                }
                ,
                r.get_top_type_combination = function(r, e) {
                    void 0 === e && (e = !1);
                    for (var n = -1, _ = [], a = 0; a < r.length; a++) {
                        var t = r[a]
                          , l = u.get_five_card_type(t, e);
                        if (l >= 0) {
                            var o = u.CARD_RANKING[l].value;
                            o > n ? (n = o,
                            (_ = []).push(t)) : o == n && _.push(t)
                        }
                    }
                    return 1 == _.length ? {
                        max_comb: _[0],
                        max_val: n
                    } : {
                        max_comb: 30 == n ? u.select_top_two_pairs(_) : 50 == n || 90 == n || 100 == n ? u.select_top_straight(_) : u.select_top_combination(_),
                        max_val: n
                    }
                }
                ,
                r.get_low_card_type_combination = function(r) {
                    function e(r) {
                        for (var e = !1, n = 0; n < r.length - 1; n++) {
                            for (var u = n + 1; u < r.length; u++)
                                if (r[n].x_low_number == r[u].x_low_number) {
                                    e = !0;
                                    break
                                }
                            if (e)
                                break
                        }
                        return e
                    }
                    for (var n, _ = null, a = 0; a < r.length; a++) {
                        var t = r[a];
                        if (t && 5 == t.length && ((n = t).sort((function(r, e) {
                            return function(r, e) {
                                return r.x_low_number != e.x_low_number && r.x_low_number > e.x_low_number ? -1 : 1
                            }(r, e)
                        }
                        )),
                        !e(t = n)))
                            if (null == _)
                                _ = t;
                            else
                                for (var l = 0; l < 5; l++)
                                    if (_[l].x_low_number > t[l].x_low_number) {
                                        _ = t;
                                        break
                                    }
                    }
                    var o = "-";
                    if (null != _) {
                        o = "";
                        for (a = 0; a < _.length; a++)
                            o += u.convert_to_string_value(_[a].x_low_number)
                    }
                    return {
                        min_comb: _,
                        low_type_string: o
                    }
                }
                ,
                r.select_top_combination = function(r) {
                    return (r = u.sort_combs(r))[0]
                }
                ,
                r.select_top_two_pairs = function(r) {
                    for (var e, _ = -1, a = -1, t = n(r); !(e = t()).done; ) {
                        var l = e.value;
                        a = -1;
                        for (var o = 0; o < 5; o++)
                            l[o].x_number == a ? a > _ && (_ = a) : a = l[o].x_number
                    }
                    for (var i, c = [], s = n(r); !(i = s()).done; ) {
                        var v = i.value
                          , f = 0;
                        for (o = 0; o < 5; o++)
                            v[o].x_number == _ && (f += 1),
                            2 == f && c.push(v)
                    }
                    return u.sort_combs(c)[0]
                }
                ,
                r.select_top_straight = function(r, e) {
                    void 0 === e && (e = !1);
                    var _ = (r = u.sort_combs(r))[0];
                    if (_)
                        if (e) {
                            if (6 == _[0].x_number && 7 == _[1].x_number && 8 == _[2].x_number && 9 == _[3].x_number && 14 == _[4].x_number)
                                for (var a, t = n(r); !(a = t()).done; ) {
                                    var l = a.value;
                                    if (6 == l[0].x_number && 10 == l[4].x_number)
                                        return l
                                }
                        } else if (2 == _[0].x_number && 3 == _[1].x_number && 4 == _[2].x_number && 5 == _[3].x_number && 14 == _[4].x_number)
                            for (var o, i = n(r); !(o = i()).done; ) {
                                var c = o.value;
                                if (2 == c[0].x_number && 6 == c[4].x_number)
                                    return c
                            }
                    return r[0]
                }
                ,
                r.sort_combs = function(r) {
                    return r.sort((function(r, e) {
                        return function(r, e) {
                            for (var n = 0; n < 5; n++)
                                if (r[n].x_number != e[n].x_number)
                                    return r[n].x_number > e[n].x_number ? -1 : 1;
                            return 1
                        }(r, e)
                    }
                    )),
                    r
                }
                ,
                r.cal_hand_values = function(r, e) {
                    for (var _, a = [], t = n(e); !(_ = t()).done; ) {
                        var l = _.value;
                        a.push(l.x_number)
                    }
                    return a.reverse(),
                    10 == r || 60 == r || 75 == r ? u.cards_hand_value(a) : 20 == r || 30 == r ? u.cal_pair_value(a) : 40 == r ? u.cal_trips_value(a) : 50 == r || 90 == r ? u.cal_straight_value(a) : 70 == r ? u.cal_full_house_value(a) : 80 == r ? u.cal_quads(a) : 0
                }
                ,
                r.cal_pair_value = function(r) {
                    for (var e = u.single_cards(r), n = e.single_arr, _ = e.some_arr, a = [], t = 0; t < _.length; t++)
                        a.push(_[t]),
                        a.push(_[t]);
                    for (t = 0; t < n.length; t++)
                        a.push(n[t]);
                    return u.cards_hand_value(a)
                }
                ,
                r.cal_trips_value = function(r) {
                    for (var e = u.single_cards(r), n = e.single_arr, _ = e.some_arr, a = [], t = 0; t < _.length; t++)
                        a.push(_[t]),
                        a.push(_[t]),
                        a.push(_[t]);
                    for (t = 0; t < n.length; t++)
                        a.push(n[t]);
                    return u.cards_hand_value(a)
                }
                ,
                r.cal_straight_value = function(r) {
                    if (14 == r[0]) {
                        for (var e = [], n = 0; n < r.length; n++)
                            n == r.length - 1 ? e.push(r[0]) : e.push(r[n + 1]);
                        return u.cards_hand_value(e)
                    }
                    return u.cards_hand_value(r)
                }
                ,
                r.cal_full_house_value = function(r) {
                    if (r[1] != r[2]) {
                        var e = [];
                        return e.push(r[4]),
                        e.push(r[4]),
                        e.push(r[4]),
                        e.push(r[0]),
                        e.push(r[0]),
                        u.cards_hand_value(e)
                    }
                    return u.cards_hand_value(r)
                }
                ,
                r.cal_quads = function(r) {
                    if (r[0] != r[1]) {
                        var e = [];
                        return e.push(r[4]),
                        e.push(r[4]),
                        e.push(r[4]),
                        e.push(r[4]),
                        e.push(r[0]),
                        u.cards_hand_value(e)
                    }
                    return u.cards_hand_value(r)
                }
                ,
                r.single_cards = function(r) {
                    for (var e = [], n = [], u = 0; u < r.length; u++)
                        -1 == e.indexOf(r[u]) ? e.push(r[u]) : -1 == n.indexOf(r[u]) && n.push(r[u]);
                    for (u = 0; u < n.length; u++) {
                        var _ = e.indexOf(n[u]);
                        _ > -1 && e.splice(_, 1)
                    }
                    return {
                        single_arr: e,
                        some_arr: n
                    }
                }
                ,
                r.cards_hand_value = function(r) {
                    for (var e = "", n = 0; n < r.length; n++)
                        e += (Array(2).join("0") + r[n]).slice(-2);
                    return +e
                }
            }(u || (u = r("card_logic", {}))),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/mius.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var i, t, o, n, r;
    return {
        setters: [function(e) {
            i = e.cclegacy,
            t = e._decorator,
            o = e.Component
        }
        , function(e) {
            n = e.defineProperty,
            r = e.inheritsLoose
        }
        ],
        execute: function() {
            var a, c, s;
            i._RF.push({}, "87908mDoUNA9LlNigCjLYu4", "mius", void 0);
            var u = t.ccclass;
            t.property,
            e("g_instance", u("g_instance")((s = c = function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                return r(i, e),
                i
            }(o),
            n(c, "game_mgr", void 0),
            n(c, "head_dl", void 0),
            n(c, "evt_center", void 0),
            n(c, "game_lang_mgr", void 0),
            n(c, "game_protocol", void 0),
            n(c, "game_animation", void 0),
            n(c, "game_task_queue", void 0),
            n(c, "game_data_manager", void 0),
            n(c, "game_card_highlight", void 0),
            a = s)) || a);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ani_layer_node.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(n) {
    "use strict";
    var i, e, t, o, a, r, c, l, s;
    return {
        setters: [function(n) {
            i = n.cclegacy,
            e = n._decorator,
            t = n.Sprite,
            o = n.Animation,
            a = n.Component
        }
        , function(n) {
            r = n.applyDecoratedDescriptor,
            c = n.inheritsLoose,
            l = n.initializerDefineProperty,
            s = n.assertThisInitialized
        }
        ],
        execute: function() {
            var _, u, p, y, d, f, h;
            i._RF.push({}, "88e95F+mxlFs6l3FWIF2At3", "ani_layer_node", void 0);
            var v = e.ccclass
              , k = e.property;
            n("ani_layer_node", (_ = v("ani_layer_node"),
            u = k(t),
            p = k(t),
            _((f = r((d = function(n) {
                function i() {
                    for (var i, e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                        t[o] = arguments[o];
                    return i = n.call.apply(n, [this].concat(t)) || this,
                    l(s(i), "ko_ani", f, s(i)),
                    l(s(i), "ani_72", h, s(i)),
                    i
                }
                c(i, n);
                var e = i.prototype;
                return e.onLoad = function() {
                    this.ko_ani.node.active = !1,
                    this.ani_72.node.active = !1
                }
                ,
                e.play_ko_ani = function() {
                    var n = this;
                    this.ko_ani.node.active = !0;
                    var i = this.ko_ani.getComponent(o);
                    i.on(o.EventType.FINISHED, (function() {
                        n.ko_ani.node.active = !1
                    }
                    ), this),
                    i.play("ko")
                }
                ,
                e.play_72_ani = function() {
                    this.ani_72.node.active = !0,
                    this.ani_72.getComponent(o).play("ani_72")
                }
                ,
                e.set_72_ani_show = function(n) {
                    void 0 === n && (n = !1),
                    this.ani_72.node.active = n
                }
                ,
                i
            }(a)).prototype, "ko_ani", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = r(d.prototype, "ani_72", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = d)) || y));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/player_head.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./head_downloader.ts"], (function(e) {
    "use strict";
    var i, t, a, n, r, s, l, c, o, p, h, _, d;
    return {
        setters: [function(e) {
            i = e.cclegacy,
            t = e._decorator,
            a = e.Sprite,
            n = e.Node,
            r = e.Material,
            s = e.sp,
            l = e.Component
        }
        , function(e) {
            c = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            p = e.initializerDefineProperty,
            h = e.assertThisInitialized
        }
        , function(e) {
            _ = e.g_instance
        }
        , function(e) {
            d = e.SPECIAL_SPINE_HEAD
        }
        ],
        execute: function() {
            var u, f, v, y, m, b, g, w, z, I, P, S, A, D, E;
            i._RF.push({}, "8a890u+0IxAJan/mKbBQH7E", "player_head", void 0);
            var N = t.ccclass
              , C = t.property;
            e("player_head", (u = N("player_head"),
            f = C(a),
            v = C(a),
            y = C(a),
            m = C(a),
            b = C(n),
            g = C(r),
            u((I = c((z = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), n = 0; n < t; n++)
                        a[n] = arguments[n];
                    return i = e.call.apply(e, [this].concat(a)) || this,
                    p(h(i), "head", I, h(i)),
                    p(h(i), "frame", P, h(i)),
                    p(h(i), "fold", S, h(i)),
                    p(h(i), "special_head", A, h(i)),
                    p(h(i), "special_spine", D, h(i)),
                    p(h(i), "gray_material", E, h(i)),
                    i
                }
                o(i, e);
                var t = i.prototype;
                return t.start = function() {
                    this.fold.node.active = !1
                }
                ,
                t.set_player_fold = function(e) {
                    if (this.fold.node.active = e,
                    this.special_head.grayscale = e,
                    this.special_spine.active) {
                        var i = this.special_spine.getComponent(s.Skeleton);
                        this.gray_material.setProperty("is_gray", e ? 1 : 0),
                        i.customMaterial = this.gray_material
                    }
                }
                ,
                t.set_head_icon = function(e) {
                    this.head.node.active = !0,
                    this.frame.node.active = !0,
                    this.special_head.node.active = !1,
                    this.special_spine.active = !1,
                    _.head_dl.set_head_icon(this.head, e)
                }
                ,
                t.set_special_head_icon = function(e) {
                    this.head.node.active = !1,
                    this.frame.node.active = !1,
                    this.special_head.node.active = !0,
                    this.special_spine.active = !1,
                    _.head_dl.set_head_icon(this.special_head, e)
                }
                ,
                t.set_special_spine_head_icon = function(e) {
                    this.head.node.active = !1,
                    this.frame.node.active = !1,
                    this.special_head.node.active = !1,
                    this.special_spine.active = !0,
                    _.head_dl.set_special_spine_head_icon(this.special_spine, e)
                }
                ,
                t.refresh_head = function(e) {
                    if (e.startsWith("special:")) {
                        var i = e.split(":")
                          , t = 0;
                        if (2 == i.length) {
                            var a = parseInt(i[1]);
                            t = isNaN(a) || a < 10001 || a > 10222 ? 10001 : a
                        }
                        if (d.get(t))
                            return void this.set_special_spine_head_icon(t);
                        this.set_special_head_icon(e)
                    } else
                        this.set_head_icon(e)
                }
                ,
                i
            }(l)).prototype, "head", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = c(z.prototype, "frame", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = c(z.prototype, "fold", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = c(z.prototype, "special_head", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = c(z.prototype, "special_spine", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = c(z.prototype, "gray_material", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = z)) || w));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/player_layer.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts", "./deal_card_controller.ts", "./seat_node.ts"], (function(e) {
    "use strict";
    var a, _, t, r, n, s, i, o, l, c, d, u, h, f, p, g, m, v, y, b, w, A, x, D, C;
    return {
        setters: [function(e) {
            a = e.cclegacy,
            _ = e._decorator,
            t = e.Prefab,
            r = e.Vec2,
            n = e.instantiate,
            s = e.Vec3,
            i = e.v2,
            o = e.resources,
            l = e.UIOpacity,
            c = e.tween,
            d = e.Component
        }
        , function(e) {
            u = e.g_const,
            h = e.g_func
        }
        , function(e) {
            f = e.applyDecoratedDescriptor,
            p = e.inheritsLoose,
            g = e.initializerDefineProperty,
            m = e.assertThisInitialized,
            v = e.defineProperty,
            y = e.createForOfIteratorHelperLoose,
            b = e.createClass
        }
        , function(e) {
            w = e.g_type
        }
        , function(e) {
            A = e.g_instance
        }
        , function(e) {
            x = e.GAME_CONFIG
        }
        , function(e) {
            D = e.deal_card_controller
        }
        , function(e) {
            C = e.seat_node
        }
        ],
        execute: function() {
            var k, S, E, P, L, R, I;
            a._RF.push({}, "8e47a7ZReVIlZ+3nLvBwYBm", "player_layer", void 0);
            var O = _.ccclass
              , N = _.property;
            e("player_layer", (k = O("player_layer"),
            S = N(t),
            E = N(D),
            k((R = f((L = function(e) {
                function a() {
                    for (var a, _ = arguments.length, t = new Array(_), r = 0; r < _; r++)
                        t[r] = arguments[r];
                    return a = e.call.apply(e, [this].concat(t)) || this,
                    g(m(a), "seat_node_prefab", R, m(a)),
                    g(m(a), "deal_card_controller", I, m(a)),
                    v(m(a), "tb_seats", []),
                    v(m(a), "_deal_card_pos", null),
                    v(m(a), "countdown_player_index", null),
                    a
                }
                p(a, e);
                var _ = a.prototype;
                return _.onLoad = function() {
                    var e = this.deal_card_controller.node.position.x + u.DEAL_CARD_POS.x
                      , a = this.deal_card_controller.node.position.y + u.DEAL_CARD_POS.y;
                    this._deal_card_pos = new r(e,a),
                    this.init_seats()
                }
                ,
                _.init_seats = function() {
                    for (var e = A.game_mgr.seat_count, a = u.HEAD_NODE_POS[e], _ = 0; _ < e; _++) {
                        var t, r, s, i = n(this.seat_node_prefab);
                        i.parent = this.node,
                        null === (t = i.getComponent(C)) || void 0 === t || t.set_data(_);
                        var o = this.update_player_show_index(_);
                        null === (r = i.getComponent(C)) || void 0 === r || r.update_show_index(o),
                        null === (s = i.getComponent(C)) || void 0 === s || s.init_ui();
                        var l = a[o];
                        i.setPosition(l.x, l.y),
                        this.tb_seats.push(i.getComponent(C))
                    }
                }
                ,
                _.refresh_seats = function() {
                    for (var e, a = y(this.tb_seats); !(e = a()).done; ) {
                        e.value.refresh_ui()
                    }
                }
                ,
                _.update_player_show_index = function(e) {
                    var a = A.game_mgr.self_show_index
                      , _ = A.game_mgr.seat_count
                      , t = A.game_mgr.my_seat_id
                      , r = e + 1;
                    return t >= 0 && (r = e - t + a),
                    r > _ && (r -= _),
                    r <= 0 && (r += _),
                    r - 1
                }
                ,
                _.get_countdown_player_index = function() {
                    return this.countdown_player_index
                }
                ,
                _.stop_player_action_countdown = function(e) {
                    this.countdown_player_index = -1;
                    var a = this.tb_seats[e];
                    a && a.update_time_progress_state(!1)
                }
                ,
                _.refresh_dealer = function(e, a) {
                    for (var _ = A.game_mgr.seat_count, t = 0; t < _; t++) {
                        var r = this.tb_seats[t];
                        r && e == t ? r.refresh_dealer(!0) : r.refresh_dealer(!1),
                        r && a == t ? r.refresh_sushi(!0, a == e) : r.refresh_sushi(!1, !1)
                    }
                }
                ,
                _.chips_fly_to_sushi = function(e, a) {
                    var _ = this
                      , t = e.type
                      , r = 0
                      , n = this.tb_seats[a]
                      , i = n.node.getPosition()
                      , o = n.get_sushi_tag_pos();
                    o = new s(i.x + o.x,i.y + o.y);
                    for (var l = 0, d = function(a) {
                        var s = e.infos[a]
                          , i = s.uid
                          , d = s.chips
                          , u = A.game_mgr.get_seat_id(i)
                          , f = _.tb_seats[u]
                          , p = f.node.getPosition();
                        if (t == w.SUSHI_ACTION_TYPE.REWARD) {
                            n.eat_sushi_ani(),
                            l = 1,
                            A.game_animation.bet_chips_fly_to_pot_animation(_, o, p);
                            var g = A.game_data_manager.convert_super_value_to_local(d);
                            c(_.node).delay(.3).call((function() {
                                f.play_profit_animation(h.display_number(g, !0))
                            }
                            )).start()
                        } else
                            t == w.SUSHI_ACTION_TYPE.SB_LOSE_PAY ? (n.sushi_upgrade_ani(),
                            A.game_animation.bet_chips_fly_to_pot_animation(_, p, o),
                            r += d) : (A.game_animation.bet_chips_fly_to_pot_animation(_, p, o),
                            r += d);
                        n.show_sushi_reward(),
                        _.refresh_player_hand_chips(u)
                    }, u = 0; u < e.infos.length; u++)
                        d(u);
                    r > 0 && n.show_add_chips(r),
                    h.do_action_delay(this, (function() {
                        A.game_task_queue.attemp_done("SUSHI_REWARD_CHANGE")
                    }
                    ), l)
                }
                ,
                _.update_seat_status = function(e, a) {
                    if (void 0 === e && (e = -1),
                    !(e < 0)) {
                        var _ = this.tb_seats[e];
                        _ && _.update_sitting_out(a)
                    }
                }
                ,
                _.clean_all_player_action_tag = function() {
                    for (var e = A.game_mgr.enter_room_data.texas_game_detail.seat_detail, a = 0; a < e.length; a++)
                        e[a] && e[a].is_on_seat && this.refresh_seat_action_tag(a, "", [])
                }
                ,
                _.preflop_clean_player_action_tag = function() {
                    for (var e = A.game_mgr.enter_room_data.texas_game_detail.seat_detail, a = 0; a < e.length; a++)
                        e[a] && e[a].is_on_seat && this.refresh_seat_action_tag(a, "", [x.ENUM_ACTION_TAG.ALLIN_TAG])
                }
                ,
                _.refresh_seat_action_tag = function(e, a, _) {
                    var t = this.tb_seats[e];
                    t && t.refresh_seat_action_tag(a, _)
                }
                ,
                _.play_retrieve_card_animation = function() {
                    for (var e = A.game_mgr.seat_count, a = 0; a < e; a++) {
                        var _ = this.tb_seats[a];
                        _ && _.play_retrieve_card_animation()
                    }
                }
                ,
                _.refresh_player_card_back_visible = function(e) {
                    for (var a = A.game_mgr.seat_count, _ = 0; _ < a; _++) {
                        var t = this.tb_seats[_];
                        t && t.refresh_player_card_back_visible(e)
                    }
                }
                ,
                _.update_card_back = function(e, a) {
                    var _ = this.tb_seats[e];
                    _ && _.refresh_player_card_back_visible(a)
                }
                ,
                _.refresh_all_player_hand_card_visible = function(e) {
                    for (var a = A.game_mgr.seat_count, _ = 0; _ < a; _++) {
                        var t = this.tb_seats[_];
                        t && t.refresh_player_hand_card_visible(e)
                    }
                }
                ,
                _.refresh_show_fold_gray_bg = function(e) {
                    for (var a = A.game_mgr.seat_count, _ = 0; _ < a; _++)
                        this.refresh_fold_gray_bg(_, e)
                }
                ,
                _.refresh_fold_gray_bg = function(e, a) {
                    var _ = this.tb_seats[e];
                    _ && _.refresh_fold_gray_bg(a)
                }
                ,
                _.refresh_player_hand_chips = function(e) {
                    var a = this.tb_seats[e];
                    a && a.refresh_player_hand_chips()
                }
                ,
                _.bet_chips_fly_to_pot = function(e) {
                    for (var a, _ = new s(0,258,0), t = y(e); !(a = t()).done; ) {
                        var r = a.value
                          , n = this.tb_seats[r]
                          , i = n.bet_chips_node.getPosition()
                          , o = n.node.getPosition()
                          , l = new s(i.x + o.x,i.y + o.y,0);
                        A.game_animation.bet_chips_fly_to_pot_animation(this, l, _)
                    }
                }
                ,
                _.refresh_bet_chips_visible = function(e) {
                    for (var a = A.game_mgr.seat_count, _ = 0; _ < a; _++) {
                        var t = this.tb_seats[_];
                        t && t.refresh_bet_chips_visible(e)
                    }
                }
                ,
                _.refresh_player_bet_chips = function(e, a) {
                    var _ = this
                      , t = this.tb_seats[e];
                    if (t) {
                        var r = A.game_mgr.enter_room_data.texas_game_detail.seat_detail[e].inpot_chips
                          , n = function() {
                            h.do_action_delay(_, (function() {
                                A.game_task_queue.attemp_done(x.NUM_TO_ACTION[a])
                            }
                            ), .2),
                            t.set_bet_chips_value(r),
                            t.refresh_player_hand_chips()
                        };
                        r && r > 0 ? t.on_player_bet_chips(r, n) : n()
                    }
                }
                ,
                _.set_bet_chips_value = function(e) {
                    var a = this.tb_seats[e];
                    if (a) {
                        var _ = A.game_mgr.enter_room_data.texas_game_detail.seat_detail[e].inpot_chips;
                        a.set_bet_chips_value(_)
                    }
                }
                ,
                _.refresh_calltime_visible = function(e, a) {}
                ,
                _.play_deal_card_animation = function(e) {
                    for (var a = [], _ = A.game_mgr.enter_room_data.texas_game_detail.seat_detail, t = A.game_mgr.seat_count, r = A.game_mgr.enter_room_data.texas_game_detail.sb_seat_id, n = r + t, s = r; s < n; s++) {
                        var i = s;
                        _[i = s <= t - 1 ? s : s - t].action_kind;
                        _[i].hold_hand && a.push(i)
                    }
                    2 == a.length && (a = a.reverse()),
                    this.deal_card_controller.clean_deal_players();
                    for (var o, l = y(a); !(o = l()).done; ) {
                        var c = o.value
                          , d = this.tb_seats[c];
                        this.deal_card_controller.add_deal_player(d)
                    }
                    this.deal_card_controller.start_deal_card()
                }
                ,
                _.somebody_turn_to_action = function(e) {
                    this.countdown_player_index = e;
                    var a = this.tb_seats[e];
                    a && a.play_head_rotation_action(),
                    this.start_player_action_countdown(e)
                }
                ,
                _.start_player_action_countdown = function(e) {
                    var a = this.tb_seats[e];
                    a && a.update_time_progress_state(!0)
                }
                ,
                _.start_voluntary_straddle_action_countdown = function() {
                    var e = A.game_mgr.get_all_voluntary_straddle_players();
                    if (0 != e.length)
                        for (var a = 0; a < e.length; a++) {
                            var _ = this.tb_seats[e[a]];
                            _ && _.update_time_progress_state(!0)
                        }
                    else
                        this.clean_all_player_action_countdown()
                }
                ,
                _.start_nlh31_discard_card_action_countdown = function() {
                    var e = A.game_mgr.get_all_nlh31_discard_card_players();
                    if (0 != e.length)
                        for (var a = 0; a < e.length; a++) {
                            var _ = this.tb_seats[e[a]];
                            _ && _.update_time_progress_state(!0)
                        }
                    else
                        this.clean_all_player_action_countdown()
                }
                ,
                _.play_fold_nlh31_fold_card = function(e, a) {
                    var _ = this
                      , r = e.get_pos()
                      , d = i(u.DEAL_CARD_POS.x, u.DEAL_CARD_POS.y)
                      , h = A.game_mgr.get_all_nlh31_discard_card_players();
                    o.load("prefabs/poker_card", t, (function(t, i) {
                        var o = n(i);
                        o.parent = _.node,
                        o.addComponent(l),
                        A.game_mgr.my_seat_id == e.seat_id && (r.x = r.x + 100),
                        o.setPosition(r.x, r.y),
                        c(o).to(A.game_mgr.get_animation_speed_specified(.2), {
                            position: new s(d.x,d.y),
                            scale: new s(.3,.3)
                        }).call((function() {
                            a == h.length - 1 && A.game_task_queue.attemp_done("TEXAS_DEAL_NLH31_DISCARD_CARD")
                        }
                        )).removeSelf().start();
                        var u = o.getComponent(l);
                        c(u).to(A.game_mgr.get_animation_speed_specified(.2), {
                            opacity: 0
                        }).start()
                    }
                    ))
                }
                ,
                _.nlh31_fold_card = function(e) {
                    var a = this
                      , _ = A.game_mgr.get_all_nlh31_discard_card_players();
                    0 != _.length ? c(this.node).delay(1).call((function() {
                        for (var t = 0; t < _.length; t++) {
                            var r = a.tb_seats[_[t]];
                            if (!r) {
                                A.game_task_queue.attemp_done("TEXAS_DEAL_NLH31_DISCARD_CARD");
                                break
                            }
                            a.play_fold_nlh31_fold_card(r, t)
                        }
                        a.update_hand_cards_by_nlh31(e)
                    }
                    )).start() : A.game_task_queue.attemp_done("TEXAS_DEAL_NLH31_DISCARD_CARD")
                }
                ,
                _.update_hand_cards_by_nlh31 = function(e) {
                    if (w.is_nlh31_room(A.game_mgr.game_sub_kind))
                        for (var a = A.game_mgr.seat_count, _ = 0; _ < a; _++) {
                            var t = this.tb_seats[_];
                            t && t.update_hand_cards_by_nlh31(e)
                        }
                }
                ,
                _.clean_all_player_action_countdown = function() {
                    for (var e = A.game_mgr.seat_count, a = 0; a < e; a++) {
                        var _ = this.tb_seats[a];
                        _ && _.update_time_progress_state(!1)
                    }
                }
                ,
                _.on_somebody_fold = function(e) {
                    var a = A.game_mgr.my_seat_id;
                    if (!a || a != e) {
                        var _ = this.tb_seats[e];
                        _ && _.on_player_fold(!0)
                    }
                }
                ,
                _.show_hand_force = function(e) {
                    for (var a, _ = y(e.seat_hands); !(a = _()).done; ) {
                        var t = a.value
                          , r = this.tb_seats[t.seat_id];
                        r && r.show_hand_card_force()
                    }
                }
                ,
                _.show_hand_active = function(e) {
                    for (var a, _ = y(e.seat_hands); !(a = _()).done; ) {
                        var t = a.value
                          , r = this.tb_seats[t.seat_id];
                        r && r.show_hand_card_active(t)
                    }
                }
                ,
                _.update_allin_chips_back = function(e, a) {
                    var _ = this.tb_seats[e];
                    if (_) {
                        _.update_allin_chips_back(a, (function() {
                            _.refresh_player_hand_chips()
                        }
                        ))
                    }
                }
                ,
                _.chips_fly_to_winner = function(e) {
                    for (var a, _ = e.winner, t = new s(0,258,0), r = y(_); !(a = r()).done; ) {
                        var n = a.value
                          , i = this.tb_seats[n.seat_id];
                        if (i) {
                            var o = i.node.getPosition()
                              , l = new s(o.x,o.y,0);
                            A.game_animation.bet_chips_fly_to_pot_animation(this, t, l)
                        }
                    }
                }
                ,
                _.play_profit_info_animation = function(e) {
                    for (var a, _ = e.result, t = y(_); !(a = t()).done; ) {
                        var r = a.value
                          , n = this.tb_seats[r.seat_id];
                        if (r.total_profit > 0) {
                            var s = A.game_data_manager.convert_super_value_to_local(r.total_profit);
                            n.play_profit_animation(h.display_number(s, !0)),
                            n.play_win_effect()
                        }
                    }
                }
                ,
                _.play_mystery_profit_info_animation = function(e) {
                    for (var a, _ = e.result, t = y(_); !(a = t()).done; ) {
                        var r = a.value
                          , n = this.tb_seats[r.seat_id];
                        if (r.ko_bounty > 0) {
                            var s = A.game_data_manager.convert_super_value_to_local(r.ko_bounty, !0);
                            n.play_mystery_profit_animation(h.display_number(s, !1))
                        }
                    }
                }
                ,
                _.play_insurance_effect = function(e) {
                    for (var a, _ = e.buy_uid, t = y(_); !(a = t()).done; )
                        for (var r, n = a.value, s = y(this.tb_seats); !(r = s()).done; ) {
                            var i = r.value
                              , o = A.game_mgr.get_player_key_data(i.seat_id, "player_info");
                            if (o && o.uid == n) {
                                i.play_insurance_chips_ani();
                                break
                            }
                        }
                }
                ,
                _.play_risk_hit_insurance = function(e) {
                    for (var a, _ = e.hit_data, t = y(this.tb_seats); !(a = t()).done; ) {
                        for (var r, n = a.value, s = 0, i = A.game_mgr.get_player_key_data(n.seat_id, "player_info"), o = !1, l = y(_); !(r = l()).done; ) {
                            var c = r.value;
                            i && i.uid == c.uid && (o = !0,
                            s += c.insurance_payment)
                        }
                        o && (s = A.game_data_manager.convert_super_value_to_local(s),
                        n.play_insurance_profit_animation(h.display_number(s)))
                    }
                }
                ,
                _.hide_insurance_chips = function() {
                    for (var e = A.game_mgr.seat_count, a = 0; a < e; a++) {
                        var _ = this.tb_seats[a];
                        _ && _.refresh_insurance_chips_visible(-1)
                    }
                }
                ,
                _.play_hilo_win_show = function(e) {
                    for (var a, _ = y(e.result); !(a = _()).done; ) {
                        var t = a.value;
                        this.tb_seats[t.seat_id] && this.tb_seats[t.seat_id].play_hilo_win_show(t)
                    }
                }
                ,
                _.refresh_evchop_win_rate_status = function() {
                    for (var e = A.game_mgr.seat_count, a = 0; a < e; a++) {
                        var _ = this.tb_seats[a];
                        _ && _.refresh_evchop_win_rate_status()
                    }
                }
                ,
                _.refresh_evchop_selected_tag = function() {
                    for (var e = A.game_mgr.seat_count, a = 0; a < e; a++) {
                        var _ = this.tb_seats[a];
                        _ && _.refresh_evchop_selected_tag()
                    }
                }
                ,
                b(a, [{
                    key: "deal_card_pos",
                    get: function() {
                        return this._deal_card_pos
                    }
                }]),
                a
            }(d)).prototype, "seat_node_prefab", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = f(L.prototype, "deal_card_controller", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = L)) || P));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/multi_lang_data.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var t, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        , function(e) {
            i = e.defineProperty
        }
        ],
        execute: function() {
            t._RF.push({}, "92aa4cXs7dOyJSef7mkuRKw", "multi_lang_data", void 0);
            e("multi_lang_data", (function() {
                var e;
                i(this, "data", ((e = {}).MULTI_TABLE_BLIND_TITLE = {
                    tc: "盲注",
                    en: "Blinds",
                    pt: "Blinds",
                    es: "Blinds",
                    ru: "Блайнды",
                    jp: "ブラインド",
                    it: "Blinds",
                    de: "Blinds",
                    vi: "Blind",
                    th: "บลายด์",
                    tr: "Kör bahisler",
                    kr: "블라인드"
                },
                e.MULTI_ANTE = {
                    tc: "前注",
                    en: "Ante",
                    pt: "Ante",
                    es: "Ante",
                    ru: "Анте",
                    jp: "アンティ",
                    it: "Ante",
                    de: "Ante",
                    vi: "Ante",
                    th: "Ante",
                    tr: "Ante",
                    kr: "안티"
                },
                e.MULTI_TABLE_RUNMULTI = {
                    tc: "發多次牌",
                    en: "Run It Multi-Times",
                    pt: "Executar Várias Vezes",
                    es: "Ejecutar Varias Veces",
                    ru: "Сдать 2/3 раза",
                    jp: "複數回カードを配る",
                    it: "Run it Multi-Times",
                    de: "Mehrfach laufen lassen",
                    vi: "Chia nhiều lần",
                    th: "แจกไพ่หลายครั้ง",
                    tr: "Birden Çok Kez Aç",
                    kr: "복회 카드를 배포"
                },
                e.MULTI_TABLE_RUNIT3 = {
                    tc: "強制發3次",
                    en: "Mandatory Run it 3 Times",
                    pt: "3 vezes obrigatórias",
                    es: "3 veces obligado",
                    jp: "必須3回",
                    it: "3 volte forzato",
                    de: "Dreimal Pflicht",
                    vi: "Bắt buộc 3 lần",
                    th: "บังคับ 3 ครั้ง",
                    tr: "Zorunlu 3 kez",
                    kr: "필수 3회"
                },
                e.MULTI_TABLE_RUNIT2 = {
                    tc: "強制發2次",
                    en: "Mandatory Run it Twice",
                    pt: "2 vezes obrigatórias",
                    es: "2 veces obligado",
                    jp: "2回必須",
                    it: "2 volte forzato",
                    de: "Zweimal Pflicht",
                    vi: "Bắt buộc hai lần",
                    th: "บังคับสองครั้ง",
                    tr: "Zorunlu 2 kez",
                    kr: "필수 2회"
                },
                e.MULTI_TABLE_INSURANCE = {
                    tc: "保險",
                    en: "Insurance",
                    pt: "Seguro",
                    es: "Seguro",
                    ru: "Страховка",
                    jp: "インシュアランス",
                    it: "Assicurazione",
                    de: "Versicherung",
                    vi: "Bảo hiểm",
                    th: "ประกันภัย",
                    tr: "Sigorta",
                    kr: "인슈어런스"
                },
                e.MULTI_TABLE_CALLTIME = {
                    tc: "Calltime %s 分鐘",
                    en: "Calltime %s mins",
                    pt: "Calltime %s min.",
                    es: "Calltime %s mins",
                    ru: "Calltime %s мин.",
                    jp: "コールタイム %s 分",
                    it: "Tempo di chiamata %s min",
                    de: "Calltime %s Min",
                    vi: "Thời gian theo %s phút",
                    th: "Calltime %s นาที",
                    tr: "Calltime %s dakika",
                    kr: "콜 타임 %s 분"
                },
                e.MULTI_TABLE_CALLHAND = {
                    tc: "Calltime %s 手",
                    en: "Calltime %s hands",
                    pt: "Calltime %s mãos.",
                    es: "Calltime %s manos",
                    ru: "Calltime %s pаздачи.",
                    jp: "コールタイム %s ハンド数",
                    it: "Tempo di chiamata %s mani",
                    de: "Calltime %s hände",
                    vi: "Thời gian theo %s tay bài",
                    th: "Calltime %s ไพ่มือ",
                    tr: "Calltime %s eller",
                    kr: "콜타임 %s 핸드 수"
                },
                e.MULTI_TABLE_MVPIP_TITLE = {
                    tc: "本局VPIP",
                    en: "Maintain VPIP",
                    pt: "VPIP de Maintain",
                    es: "Mantener VPIP",
                    ru: "Поддерж. VPIP",
                    jp: "保有 VPIP",
                    it: "Mantieni VPIP",
                    de: "VPIP halten",
                    vi: "Duy trì VPIP",
                    th: "รักษา VPIP",
                    tr: "Bakım VPIP",
                    kr: "유지 VPIP"
                },
                e.MULTI_TABLE_CVPIP_TITLE = {
                    tc: "入局VPIP",
                    en: "Career VPIP",
                    pt: "VPIP de Carreira",
                    es: "Carrera VPIP",
                    ru: "VPIP карьеры",
                    jp: "キャリア VPIP",
                    it: "Carriera VPIP",
                    de: "Karriere VPIP",
                    vi: "Chỉ số VPIP",
                    th: "อาชีพ VPIP",
                    tr: "Kariyer VPIP",
                    kr: "캐리어 VPIP"
                },
                e.MULTI_TABLE_RESTRICTION = {
                    tc: "限制",
                    en: "Restriction",
                    pt: "Restrição",
                    es: "Restricción",
                    ru: "Ограничение",
                    jp: "制限",
                    it: "Restrizione",
                    de: "Beschränkung",
                    vi: "Sự hạn chế",
                    th: "ข้อจำกัด",
                    tr: "Kısıtlama",
                    kr: "제한"
                },
                e.MULTI_HIGHCARD = {
                    tc: "高牌",
                    en: "High card",
                    pt: "Carta alta",
                    es: "Carta alta",
                    ru: "Старшая карта",
                    jp: "ハイカード",
                    it: "Carta alta",
                    de: "High Card",
                    vi: "Bài cao",
                    th: "ไพ่สูง",
                    tr: "Yüksek Kart",
                    kr: "하이카드"
                },
                e.MULTI_PAIR = {
                    tc: "一對",
                    en: "Pair",
                    pt: "Par",
                    es: "Pareja",
                    ru: "Пара",
                    jp: "ペア",
                    it: "Coppia",
                    de: "Paar",
                    vi: "Một đôi",
                    th: "1 คู่",
                    tr: "Per",
                    kr: "페어"
                },
                e.MULTI_TWOPAIR = {
                    tc: "兩對",
                    en: "Two pairs",
                    pt: "Dois Pares",
                    es: "Doble Pareja",
                    ru: "Две Пары",
                    jp: "ツーペア",
                    it: "Doppia Coppia",
                    de: "Zwei Paar",
                    vi: "Hai đôi",
                    th: "2 คู่",
                    tr: "Döper",
                    kr: "두 페어"
                },
                e.MULTI_TRIPS = {
                    tc: "三條",
                    en: "Three of a kind",
                    pt: "Trinca",
                    es: "Trío",
                    ru: "Тройка",
                    jp: "スリーカード",
                    it: "Trips",
                    de: "Set",
                    vi: "Xám",
                    th: "ตอง",
                    tr: "Set",
                    kr: "쓰리 카드"
                },
                e.MULTI_TRIPSMINI = {
                    tc: "三條",
                    en: "Trips",
                    pt: "Trio",
                    es: "Tercio",
                    ru: "Трипс",
                    jp: "トリップ",
                    it: "Trips",
                    de: "Drilling",
                    vi: "Xám",
                    th: "ทริป",
                    tr: "Üçlü",
                    kr: "트립"
                },
                e.MULTI_STRAIGHT = {
                    tc: "順子",
                    en: "Straight",
                    pt: "Straight",
                    es: "Straight",
                    ru: "Стрит",
                    jp: "ストレート",
                    it: "Scala",
                    de: "Straße",
                    vi: "Sảnh",
                    th: "สเตรท",
                    tr: "Kent",
                    kr: "스트레이트"
                },
                e.MULTI_FLUSH = {
                    tc: "同花",
                    en: "Flush",
                    pt: "Flush",
                    es: "Flush",
                    ru: "Флеш",
                    jp: "フラッシュ",
                    it: "Colore",
                    de: "Flush",
                    vi: "Thùng",
                    th: "ฟลัช",
                    tr: "Renk",
                    kr: "플래시"
                },
                e.MULTI_FULLHOUSE = {
                    tc: "葫蘆",
                    en: "Full house",
                    pt: "Full house",
                    es: "Full house",
                    ru: "Фулл-хаус",
                    jp: "フルハウス",
                    it: "Full",
                    de: "Full House",
                    vi: "Cù lũ",
                    th: "ฟูลเฮาส์",
                    tr: "Ful",
                    kr: "풀 하우스"
                },
                e.MULTI_QUADS = {
                    tc: "四條",
                    en: "Quads",
                    pt: "Quadra",
                    es: "Quadra",
                    ru: "Каре",
                    jp: "クワッド",
                    it: "Poker",
                    de: "Vierling",
                    vi: "Tứ quý",
                    th: "ควอด",
                    tr: "Kare",
                    kr: "쿼드"
                },
                e.MULTI_STRAIGHTFLUSH = {
                    tc: "同花順",
                    en: "Straight flush",
                    pt: "Straight flush",
                    es: "Straight flush",
                    ru: "Стрит-флеш",
                    jp: "ｽﾄﾚｰﾄﾌﾗｯｼｭ",
                    it: "Scala colore",
                    de: "Straigh Flush",
                    vi: "Thùng phá sảnh",
                    th: "สเตรท ฟลัช",
                    tr: "Sıralı Renk",
                    kr: "스트레트 플래시"
                },
                e.MULTI_ROYALFLUSH = {
                    tc: "皇家同花順",
                    en: "Royal flush",
                    pt: "Royal flush",
                    es: "Royal flush",
                    ru: "Роял-флеш",
                    jp: "ﾛｲﾔﾙﾌﾗｯｼｭ",
                    it: "Scala reale",
                    de: "Royal Flush",
                    vi: "Thùng phá sảnh thượng",
                    th: "รอยัล ฟลัช",
                    tr: "Royal Renk",
                    kr: "로얄 플러쉬"
                },
                e.MULTI_TABLE_MTTFINAL = {
                    tc: "決賽桌",
                    en: "Final Table",
                    pt: "Mesa Final",
                    es: "Mesa Final",
                    ru: "Финальный стол",
                    jp: "ファイナルテーブル",
                    it: "Tavolo finale",
                    de: "Finaltisch",
                    vi: "Bàn final",
                    th: "โต๊ะสุดท้าย",
                    tr: "Final Tablosu",
                    kr: "파이널 테이블"
                },
                e.MULTI_TABLE_LV_CURRENT = {
                    tc: "當前級別",
                    en: "Current Level",
                    pt: "Nível Atual",
                    es: "Nivel Actual",
                    ru: "Текущий уровень",
                    jp: "現在のレベル",
                    it: "Livello Corrente",
                    de: "Aktuelles Level",
                    vi: "Cấp độ hiện tại",
                    th: "เลเวลปัจจุบัน",
                    tr: "Mevcut Seviye",
                    kr: "현재 레벨"
                },
                e.MULTI_TABLE_LV_NEXT = {
                    tc: "下一級別",
                    en: "Next Level",
                    pt: "Próximo Nível",
                    es: "Próximo Nivel",
                    ru: "След. уровень",
                    jp: "次のレベル",
                    it: "Prossimo Livello",
                    de: "Nächstes Level",
                    vi: "Cấp độ tiếp theo",
                    th: "เลเวลหน้า",
                    tr: "Sonraki Seviye",
                    kr: "다음 레벨"
                },
                e.MULTI_HI = {
                    tc: "Hi",
                    en: "Hi",
                    pt: "Hi",
                    es: "Hi",
                    ru: "Hi",
                    jp: "Hi",
                    it: "Hi",
                    de: "Hi",
                    vi: "Cao",
                    th: "Hi",
                    tr: "Hi",
                    kr: "Hi"
                },
                e.MULTI_LOW = {
                    tc: "Lo",
                    en: "Lo",
                    pt: "Lo",
                    es: "Lo",
                    ru: "Lo",
                    jp: "Lo",
                    it: "Lo",
                    de: "Lo",
                    vi: "Thấp",
                    th: "Lo",
                    tr: "Lo",
                    kr: "Lo"
                },
                e.MULTI_H5_HANDREVIEW_TIPS1 = {
                    tc: "德州、奧馬哈、6+、大菠蘿、十三張都在X-Poker！",
                    en: "NLH, PLO, 6+, OFC, MauBinh, Pusoy all in X-Poker!",
                    pt: "NLH, PLO, 6+, OFC, MauBinh, Pusoy todos estão no X-Poker!",
                    es: "¡NLH, PLO, 6+, OFC, MauBinh, Pusoy están todos en X-Poker!",
                    ru: "NLH, PLO, 6+, OFC, MauBinh, Pusoy all in X-Poker!",
                    jp: "NLH、PLO、6 +、OFC、マウビン、プソイがすべてX-Pokerにあります！",
                    it: "NLH, PLO, 6+, OFC, MauBinh, Pusoy sono tutti su X-Poker!",
                    de: "NLH, PLO, 6+, OFC, MauBinh, Pusoy alle in X-Poker!",
                    vi: "NLH, PLO, 6+, OFC, MauBinh, Pusoy, all in X-Poker!",
                    th: "NLH, PLO, 6+, OFC, MauBinh, Pusoy ทั้งหมดใน X-Poker!",
                    tr: "NLH, PLO, 6+, OFC, MauBinh, Pusoy şimdi hepsi X-Poker'de!",
                    kr: "NLH, PLO, 6+, OFC, 마우빈,푸소이가 모두X-Poker에 있습니다!"
                },
                e.MULTI_H5_HANDREVIEW_TIPS2 = {
                    tc: "同好友一齊玩",
                    en: "Play with friends",
                    pt: "Jogue com amigos",
                    es: "Jugar con amigos",
                    ru: "Play with friends",
                    jp: "友達と一緒にプレイしましょう！",
                    it: "Giocare con gli amici",
                    de: "Mit Freunden spielen",
                    vi: "Chơi với bạn bè",
                    th: "เล่นกับเพื่อน",
                    tr: "Arkadaşlarınla oyna",
                    kr: "친구와 함께 놀자!"
                },
                e.MULTI_H5_HANDREVIEW_TIPS3 = {
                    tc: "俱樂部免費賽！",
                    en: "Play Freerolls in Clubs！",
                    pt: "Jogue Freerolls em clubes!",
                    es: "¡Juega a los freerolls del club!",
                    ru: "Play Freerolls in Clubs！",
                    jp: "クラブでフリーロールをプレイしましょう！",
                    it: "Gioca ai freeroll del club!",
                    de: "Spielen Sie Freerolls in Clubs！",
                    vi: "Chơi Freerolls trong Câu lạc bộ！",
                    th: "เล่นฟรีโรลในคลับ！",
                    tr: "Kulüplerde Freeroll Oyna！",
                    kr: "클럽에서 프리롤을 플레이하세요!"
                },
                e.MULTI_H5_HANDREVIEW_TIPS4 = {
                    tc: "免費",
                    en: "Free",
                    pt: "Grátis",
                    es: "Gratis",
                    ru: "Free",
                    jp: "フリー",
                    it: "Gratuito",
                    de: "Frei",
                    vi: "Miễn phí",
                    th: "ฟรี",
                    tr: "Ücretsiz",
                    kr: "무료"
                },
                e.MULTI_FAMILY_TABLECODE = {
                    tc: "房號",
                    en: "Table Code",
                    pt: "Código de Mesa",
                    es: "Código de tabla",
                    jp: "テーブルコード",
                    de: "Tischcode",
                    vi: "Mã bàn",
                    th: "รหัสโต๊ะ",
                    tr: "Masa Kodu",
                    kr: "테이블 코드"
                },
                e.MULTI_TABLE_BOMBPOT = {
                    tc: "炸彈彩池",
                    en: "Bomb Pot",
                    pt: "Bomb Pot",
                    es: "Bomb Pot",
                    jp: "爆弾ポット",
                    de: "Bomb Pot",
                    vi: "Bomb Pot",
                    th: "Bomb Pot",
                    tr: "Bomb Pot",
                    kr: "폭탄 팟"
                },
                e.MULTI_TABLE_DB = {
                    tc: "雙層公共牌",
                    en: "Bouble board",
                    pt: "Bouble board",
                    es: "Bouble board",
                    jp: "ダブルボード",
                    de: "Bouble board",
                    vi: "Bàn đôi",
                    th: "Bouble board",
                    tr: "Bouble board",
                    kr: "더블 보드"
                },
                e.MULTI_TABLE_BOMBPOT_DB = {
                    tc: "炸彈彩池觸發雙層公共牌",
                    en: "Bomb Pot trigger Double Board",
                    pt: "Bomb Pot com Double Board",
                    es: "Bomb Pot con Double Board",
                    jp: "爆弾ポットがダブルボードが起動した",
                    de: "Bomb Pot Auslöser Double Board",
                    vi: "Bomb Pot kích hoạt Bàn đôi",
                    th: "ระเบิดหม้อทริกเกอร์กระดานคู่",
                    tr: "Bomb Pot tetikleyen Çift Masa",
                    kr: "폭탄팟가 더블 보드가 시작되었습니다."
                },
                e.MULTI_PLAYER = {
                    tc: "玩家",
                    en: "Player",
                    pt: "Jogador",
                    es: "Jugador",
                    ru: "Игрок",
                    jp: "プレーヤー",
                    it: "Player",
                    de: "Spieler",
                    vi: "Người chơi",
                    th: "ผู้เล่น",
                    tr: "Oyuncu",
                    kr: "플레이어"
                },
                e.MULTI_TABLE_RANDOMSEAT = {
                    tc: "隨機入座",
                    en: "Random Seat",
                    pt: "Lugar Aleatório",
                    es: "Asiento aleatorio",
                    ru: "Случайное место",
                    jp: "ランダム位置",
                    it: "Sede casuale",
                    de: "Zufälliger Sitzplatz",
                    vi: "Chỗ ngồi ngẫu nhiên",
                    th: "ที่นั่งสุ่ม",
                    tr: "Rastgele Otur",
                    kr: "임의의 자리"
                },
                e.MULTI_XMTT = {
                    tc: "X-Tournament",
                    en: "X-Tournament",
                    pt: "X-Torneio",
                    es: "X-Torneo",
                    jp: "X-Tournament",
                    it: "X-Torneo",
                    de: "X-Turnier",
                    vi: "X-Giải đấu",
                    th: "X-ทัวร์นาเมนต์",
                    tr: "X-Turnuva",
                    kr: "X-Tournament"
                },
                e.MULTI_EVCHOP = {
                    tc: "EV Chop",
                    en: "EV Chop",
                    pt: "EV Chop",
                    es: "EV Chop",
                    jp: "EV Chop",
                    it: "EV Chop",
                    de: "EV Chop",
                    vi: "EV Chop",
                    th: "EV Chop",
                    tr: "EV Chop",
                    kr: "EV Chop"
                },
                e.MULTI_STRADDLE_VOLUNTARY = {
                    tc: "自願Straddle",
                    en: "自願Straddle",
                    pt: "自願Straddle",
                    es: "自願Straddle",
                    jp: "自願Straddle",
                    it: "自願Straddle",
                    de: "自願Straddle",
                    vi: "自願Straddle",
                    th: "自願Straddle",
                    tr: "自願Straddle",
                    kr: "自願Straddle"
                },
                e.MULTI_STRADDLE_ALL = {
                    tc: "所有玩家",
                    en: "所有玩家",
                    pt: "所有玩家",
                    es: "所有玩家",
                    jp: "所有玩家",
                    it: "所有玩家",
                    de: "所有玩家",
                    vi: "所有玩家",
                    th: "所有玩家",
                    tr: "所有玩家",
                    kr: "所有玩家"
                },
                e.MULTI_STRADDLE_PFTA = {
                    tc: "先行動玩家",
                    en: "先行動玩家",
                    pt: "先行動玩家",
                    es: "先行動玩家",
                    jp: "先行動玩家",
                    it: "先行動玩家",
                    de: "先行動玩家",
                    vi: "先行動玩家",
                    th: "先行動玩家",
                    tr: "先行動玩家",
                    kr: "先行動玩家"
                },
                e.MULTI_STRADDLE_BTN = {
                    tc: "莊位",
                    en: "莊位",
                    pt: "莊位",
                    es: "莊位",
                    jp: "莊位",
                    it: "莊位",
                    de: "莊位",
                    vi: "莊位",
                    th: "莊位",
                    tr: "莊位",
                    kr: "莊位"
                },
                e.MULTI_TABLE_BB_EN = {
                    tc: "BB",
                    en: "BB",
                    pt: "BB",
                    es: "BB",
                    ru: "ББ",
                    jp: "BB",
                    it: "BB",
                    de: "BB",
                    vi: "BB",
                    th: "BB",
                    tr: "BB",
                    kr: "BB"
                },
                e.MULTI_TABLE_BBS = {
                    tc: "BBs",
                    en: "BBs",
                    pt: "BBs",
                    es: "BBs",
                    ru: "ББ",
                    jp: "BBs",
                    it: "BBs",
                    de: "BBs",
                    vi: "BBs",
                    th: "BBs",
                    tr: "BBs",
                    kr: "BBs"
                },
                e.MULTI_TABLE_SQUIDGAME = {
                    tc: "魷魚遊戲",
                    en: "Squid Game",
                    pt: "Squid Game",
                    es: "Squid Game",
                    ru: "Squid Game",
                    jp: "Squid Game",
                    it: "Squid Game",
                    de: "Squid Game",
                    vi: "Squid Game",
                    th: "Squid Game",
                    tr: "Squid Game",
                    kr: "Squid Game"
                },
                e.MULTI_TABLE_SQUIDGAME_VALUE = {
                    tc: "魷魚價值",
                    en: "Squid Value",
                    pt: "Squid Value",
                    es: "Squid Value",
                    ru: "Squid Value",
                    jp: "Squid Value",
                    it: "Squid Value",
                    de: "Squid Value",
                    vi: "Squid Value",
                    th: "Squid Value",
                    tr: "Squid Value",
                    kr: "Squid Value"
                },
                e.MULTI_SUSHI_TITLE = {
                    tc: "壽司游戲",
                    en: "Sushi Game",
                    pt: "Sushi Game",
                    es: "Sushi Game",
                    ru: "Sushi Game",
                    jp: "Sushi Game",
                    it: "Sushi Game",
                    de: "Sushi Game",
                    vi: "Sushi Game",
                    th: "Sushi Game",
                    tr: "Sushi Game",
                    kr: "Sushi Game"
                },
                e.MULTI_SUSHI_INITIAL_ANTE2 = {
                    tc: "初始前注%s",
                    en: "Initial ante %s",
                    pt: "Initial ante %s",
                    es: "Initial ante %s",
                    ru: "Initial ante %s",
                    jp: "Initial ante %s",
                    it: "Initial ante %s",
                    de: "Initial ante %s",
                    vi: "Initial ante %s",
                    th: "Initial ante %s",
                    tr: "Initial ante %s",
                    kr: "Initial ante %s"
                },
                e.MULTI_SUSHI_SMALLBLIND_ANTE2 = {
                    tc: "小盲前注%s",
                    en: "Small Blind Ante %s",
                    pt: "Small Blind Ante %s",
                    es: "Small Blind Ante %s",
                    ru: "Small Blind Ante %s",
                    jp: "Small Blind Ante %s",
                    it: "Small Blind Ante %s",
                    de: "Small Blind Ante %s",
                    vi: "Small Blind Ante %s",
                    th: "Small Blind Ante %s",
                    tr: "Small Blind Ante %s",
                    kr: "Small Blind Ante %s"
                },
                e))
            }
            ));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/seat_node.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./game_config.ts", "./hilo_info_node.ts", "./player_node.ts", "./sushi_node.ts"], (function(t) {
    "use strict";
    var e, i, _, a, n, s, r, o, h, l, c, d, p, u, g, f, m, y, b, v, T, E, w, S, A, N, O;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            i = t._decorator,
            _ = t.Sprite,
            a = t.Node,
            n = t.Label,
            s = t.Vec2,
            r = t.Vec3,
            o = t.resources,
            h = t.Prefab,
            l = t.instantiate,
            c = t.UIOpacity,
            d = t.tween,
            p = t.Component,
            u = t.SpriteFrame
        }
        , function(t) {
            g = t.g_const,
            f = t.g_func,
            m = t.g_speed
        }
        , function(t) {
            y = t.applyDecoratedDescriptor,
            b = t.inheritsLoose,
            v = t.initializerDefineProperty,
            T = t.assertThisInitialized,
            E = t.defineProperty
        }
        , function(t) {
            w = t.g_instance
        }
        , function(t) {
            S = t.GAME_CONFIG
        }
        , function(t) {
            A = t.hilo_info_node
        }
        , function(t) {
            N = t.player_node
        }
        , function(t) {
            O = t.sushi_node
        }
        ],
        execute: function() {
            var k, P, x, U, C, D, M, I, R, L, z, B, F, G, Y, H, V, q, J;
            e._RF.push({}, "9bd0fRXSSdBUY2iv+KkzciM", "seat_node", void 0);
            var W = i.ccclass
              , j = i.property;
            t("seat_node", (k = W("seat_node"),
            P = j(_),
            x = j(N),
            U = j(_),
            C = j(a),
            D = j(A),
            M = j(a),
            I = j(n),
            R = j(n),
            k((B = y((z = function(t) {
                function e() {
                    for (var e, i = arguments.length, _ = new Array(i), a = 0; a < i; a++)
                        _[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(_)) || this,
                    v(T(e), "empty_pos", B, T(e)),
                    v(T(e), "player", F, T(e)),
                    v(T(e), "dealer_tag", G, T(e)),
                    v(T(e), "sushi_tag", Y, T(e)),
                    v(T(e), "hilo_info_node", H, T(e)),
                    v(T(e), "bet_chips_node", V, T(e)),
                    v(T(e), "lab_bet_left", q, T(e)),
                    v(T(e), "lab_bet_right", J, T(e)),
                    E(T(e), "_crt_lab_bet_chips", null),
                    E(T(e), "show_index", -1),
                    E(T(e), "seat_id", -1),
                    E(T(e), "seat_state", S.ENUM_SEAT_STATE.EMPTY_STATE),
                    e
                }
                b(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this.dealer_tag.node.active = !1,
                    this.sushi_tag.active = !1,
                    this.bet_chips_node.active = !1,
                    this.lab_bet_left.node.active = !1,
                    this.lab_bet_right.node.active = !1,
                    this._crt_lab_bet_chips = this.lab_bet_right
                }
                ,
                i.set_data = function(t) {
                    this.seat_id = t,
                    this.update_seat_state(),
                    this.update_seat_node(),
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.set_data(t)
                }
                ,
                i.update_show_index = function(t) {
                    this.show_index = t,
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.update_show_index(t)
                }
                ,
                i.init_ui = function() {
                    this.init_bet_chips_attr(),
                    this.init_dealer_tag_attr(),
                    this.init_sushi_tag_attr(),
                    this.init_hilo_node(),
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.init_ui()
                }
                ,
                i.refresh_ui = function() {
                    this.update_seat_state(),
                    this.update_seat_node(),
                    this.init_bet_chips_attr(),
                    this.init_dealer_tag_attr(),
                    this.init_sushi_tag_attr(),
                    this.init_hilo_node();
                    var t = w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat")
                      , e = w.game_mgr.get_player_key_data(this.seat_id, "inpot_chips");
                    t && (this.player.init_ui(),
                    this.set_bet_chips_value(e)),
                    this.updata_insurance_chips_visible()
                }
                ,
                i.init_dealer_tag_attr = function() {
                    var t = w.game_mgr.seat_count
                      , e = g.DEALER_BUTTON_POS[t][this.show_index];
                    this.dealer_tag.node.setPosition(e.x, e.y)
                }
                ,
                i.init_sushi_tag_attr = function() {
                    var t = w.game_mgr.seat_count
                      , e = g.DEALER_BUTTON_POS[t][this.show_index];
                    this.sushi_tag.setPosition(e.x, e.y),
                    this.sushi_tag.active = w.game_mgr.is_sushi_game(),
                    this.sushi_tag.getComponent(O).show_sushi_reward()
                }
                ,
                i.init_bet_chips_attr = function() {
                    var t = w.game_mgr.seat_count
                      , e = g.BET_CHIPS_POS[t][this.show_index];
                    this.bet_chips_node.setPosition(e.x, e.y),
                    1 == g.BET_CHIPS_DIRECTION[t][this.show_index] ? (this._crt_lab_bet_chips = this.lab_bet_left,
                    this.lab_bet_right.node.active = !1) : (this._crt_lab_bet_chips = this.lab_bet_right,
                    this.lab_bet_left.node.active = !1),
                    this._crt_lab_bet_chips.node.active = !0
                }
                ,
                i.init_hilo_node = function() {
                    var t = w.game_mgr.seat_count
                      , e = g.HILO_CARD_TYPE_NODE_POS[t][this.show_index];
                    this.hilo_info_node.node.setPosition(e.x, e.y),
                    this.hilo_info_node.refresh_hilo_card_type(!1)
                }
                ,
                i.get_pos = function() {
                    return new s(this.node.position.x,this.node.position.y)
                }
                ,
                i.get_sushi_tag_pos = function() {
                    return this.sushi_tag.getPosition()
                }
                ,
                i.eat_sushi_ani = function() {
                    this.sushi_tag.getComponent(O).eat_sushi_ani()
                }
                ,
                i.show_add_chips = function(t) {
                    this.sushi_tag.getComponent(O).show_add_chips(t)
                }
                ,
                i.show_sushi_reward = function() {
                    this.sushi_tag.getComponent(O).show_sushi_reward()
                }
                ,
                i.sushi_upgrade_ani = function() {
                    this.sushi_tag.getComponent(O).sushi_upgrade_ani()
                }
                ,
                i.set_hand_card_back_visible = function(t, e) {
                    this.player.node.active && this.player.set_hand_card_back_visible(t, e)
                }
                ,
                i.on_player_bet_chips = function(t, e) {
                    for (var i = this, n = [0, .05], s = function(s) {
                        var r = n[s]
                          , h = s;
                        o.load("main/common_chips_orange/spriteFrame", u, (function(s, o) {
                            var l = new a;
                            l.layer = i.node.layer,
                            l.setPosition(0, 0),
                            l.parent = i.node,
                            l.addComponent(_).spriteFrame = o;
                            var c = i.bet_chips_node.position;
                            d(l).hide().delay(w.game_mgr.get_animation_speed_specified(r)).show().to(w.game_mgr.get_animation_speed_specified(m.bet_chips_fly), {
                                position: c
                            }, {
                                easing: "quadOut"
                            }).call((function() {
                                h == n.length - 1 && (i.set_bet_chips_value(t),
                                e && e())
                            }
                            )).removeSelf().start()
                        }
                        ))
                    }, r = 0; r < n.length; r++)
                        s(r)
                }
                ,
                i.set_bet_chips_value = function(t) {
                    0 == t ? (this.bet_chips_node.active = !1,
                    this._crt_lab_bet_chips.node.active = !1) : (this.bet_chips_node.active = !0,
                    this._crt_lab_bet_chips.node.active = !0,
                    t = w.game_data_manager.convert_super_value_to_local(t),
                    this._crt_lab_bet_chips.string = f.display_number(t))
                }
                ,
                i.on_player_fold = function(t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var i = new s(g.DEAL_CARD_POS.x,g.DEAL_CARD_POS.y)
                      , _ = new r(i.x - this.node.position.x,i.y - this.node.position.y,0);
                    o.load("prefabs/poker_card", h, (function(i, a) {
                        var n = l(a);
                        n.parent = e.node,
                        n.setPosition(0, 0),
                        n.setScale(.4, .4);
                        var s = n.addComponent(c);
                        e.player.on_player_fold(t),
                        d(n).to(w.game_mgr.get_animation_speed_specified(m.fold_card), {
                            position: _
                        }).start(),
                        d(n).delay(w.game_mgr.get_animation_speed_specified(m.fold_card)).removeSelf().start(),
                        d(s).to(w.game_mgr.get_animation_speed_specified(m.fold_card / 2), {
                            opacity: 0
                        }).start()
                    }
                    ))
                }
                ,
                i.updata_insurance_chips_visible = function() {
                    var t = w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat")
                      , e = JSON.parse(JSON.stringify(w.game_mgr.enter_room_data.texas_game_detail.insurance_data))
                      , i = w.game_mgr.get_player_key_data(this.seat_id, "player_info");
                    if (t) {
                        for (var _ = !1, a = 0, n = !1, s = !1, r = 0; r < e.length; r++) {
                            if (e[r].flop.length > 0) {
                                var o, h, l = null === (o = e[r].flop[0]) || void 0 === o ? void 0 : o.insurance_payment, c = null === (h = e[r].flop[0]) || void 0 === h ? void 0 : h.uid;
                                i && i.uid == c && l > 0 && (n = !0)
                            }
                            if (e[r].turn.length > 0) {
                                var d, p, u = null === (d = e[r].turn[0]) || void 0 === d ? void 0 : d.insurance_payment, g = null === (p = e[r].turn[0]) || void 0 === p ? void 0 : p.uid;
                                i && i.uid == g && u > 0 && (s = !0)
                            }
                        }
                        if (s) {
                            for (r = 0; r < e.length; r++)
                                if (e[r].turn.length > 0) {
                                    var f, m, y, b, v = null === (f = e[r].turn[0]) || void 0 === f ? void 0 : f.insurance_payment, T = null === (m = e[r].flop[0]) || void 0 === m ? void 0 : m.buy_insurance_chips, E = null === (y = e[r].turn[0]) || void 0 === y ? void 0 : y.uid, S = null === (b = e[r].flop[0]) || void 0 === b ? void 0 : b.uid;
                                    i && i.uid == E && v > 0 && (_ = !0,
                                    S && i.uid == S ? a = a + v - T : a += v)
                                }
                        } else if (n)
                            for (r = 0; r < e.length; r++)
                                if (e[r].flop.length > 0) {
                                    var A, N, O = null === (A = e[r].flop[0]) || void 0 === A ? void 0 : A.insurance_payment, k = null === (N = e[r].flop[0]) || void 0 === N ? void 0 : N.uid;
                                    i && i.uid == k && O > 0 && (_ = !0,
                                    a += O)
                                }
                        _ && this.refresh_insurance_chips_visible(a)
                    }
                }
                ,
                i.update_seat_state = function() {
                    this.is_seat_empty() ? this.seat_state = S.ENUM_SEAT_STATE.EMPTY_STATE : this.is_seat_can_sit_down() ? this.seat_state = S.ENUM_SEAT_STATE.SIT_DOWN_STATE : this.seat_state = S.ENUM_SEAT_STATE.ON_TABLE_STATE
                }
                ,
                i.is_seat_empty = function() {
                    var t = w.game_mgr.my_state;
                    return !w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && t != S.ENUM_ACTION_STATE.STAND_UP
                }
                ,
                i.is_seat_can_sit_down = function() {
                    var t = w.game_mgr.my_state;
                    return !w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && t == S.ENUM_ACTION_STATE.STAND_UP
                }
                ,
                i.update_seat_node = function() {
                    this.seat_state == S.ENUM_SEAT_STATE.EMPTY_STATE || this.seat_state == S.ENUM_SEAT_STATE.SIT_DOWN_STATE ? (this.empty_pos.node.active = !0,
                    this.player.node.active = !1,
                    this.dealer_tag.node.active = !1,
                    this.bet_chips_node.active = !1,
                    this.lab_bet_left.node.active = !1,
                    this.lab_bet_right.node.active = !1) : this.seat_state == S.ENUM_SEAT_STATE.ON_TABLE_STATE && (this.empty_pos.node.active = !1,
                    this.player.node.active = !0,
                    this.dealer_tag.node.active = !1,
                    this.bet_chips_node.active = !1,
                    this.lab_bet_left.node.active = !1,
                    this.lab_bet_right.node.active = !1,
                    this._crt_lab_bet_chips = this.lab_bet_right),
                    this.init_desktop_chips_node()
                }
                ,
                i.update_time_progress_state = function(t) {
                    this.player.updata_action_countdown_progress(t)
                }
                ,
                i.refresh_dealer = function(t) {
                    this.dealer_tag.node.active = t || !1
                }
                ,
                i.refresh_sushi = function(t, e) {
                    if (w.game_mgr.is_sushi_game()) {
                        if (this.sushi_tag.active = t || !1,
                        e) {
                            var i = w.game_mgr.seat_count
                              , _ = g.DEALER_BUTTON_POS[i][this.show_index]
                              , a = _.x > 0 ? 50 : -50;
                            this.sushi_tag.setPosition(_.x + a, _.y)
                        }
                    } else
                        this.sushi_tag.active = !1
                }
                ,
                i.init_desktop_chips_node = function() {
                    var t = this.is_desktop_chips_visible();
                    this.bet_chips_node.active = t;
                    var e = w.game_mgr.get_player_key_data(this.seat_id, "inpot_chips");
                    if (e = w.game_data_manager.convert_super_value_to_local(e),
                    this._crt_lab_bet_chips.string = f.display_number(e),
                    t && e && e > 0) {
                        var i, _ = null === (i = w.game_mgr.enter_room_data.texas_game_detail) || void 0 === i ? void 0 : i.curr_round;
                        _ != S.ENUM_ROUND_STAGE.OVER && _ != S.ENUM_ROUND_STAGE.NONE || (this.bet_chips_node.active = !1)
                    }
                }
                ,
                i.is_desktop_chips_visible = function(t) {
                    var e, i = t || w.game_mgr.get_player_data(this.seat_id);
                    if (!i)
                        return !1;
                    var _ = w.game_mgr.game_stage;
                    return !(!(null === (e = w.game_mgr.enter_room_data.texas_game_detail) || void 0 === e ? void 0 : e.hand_ongoing) || _ != S.ENUM_ROOM_STAGE.START || i.action_kind == S.ACTION_TO_NUM.ACTION_SITED || !i.inpot_chips || 0 == i.inpot_chips)
                }
                ,
                i.update_sitting_out = function(t) {
                    this.player.tag_action_sittingout.node.active = t || !1
                }
                ,
                i.refresh_seat_action_tag = function(t, e) {
                    this.player.refresh_seat_action_tag(t, e)
                }
                ,
                i.play_retrieve_card_animation = function() {
                    var t = w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat")
                      , e = w.game_mgr.get_player_key_data(this.seat_id, "action_kind");
                    t && e == S.ACTION_TO_NUM.ACTION_FOLD && this.on_player_fold(!1)
                }
                ,
                i.refresh_player_card_back_visible = function(t) {
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.refresh_player_card_back_visible(t)
                }
                ,
                i.refresh_player_hand_card_visible = function(t) {
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.refresh_player_hand_card_visible(t)
                }
                ,
                i.refresh_fold_gray_bg = function(t) {
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.refresh_fold_gray_bg(t)
                }
                ,
                i.refresh_player_hand_chips = function() {
                    var t = w.game_mgr.get_player_data(this.seat_id);
                    if (t.is_taking_break || !1)
                        ;
                    else {
                        var e = t.playing_chips;
                        if (e && 0 == e)
                            return;
                        this.update_player_hand_chips_label(e)
                    }
                }
                ,
                i.update_player_hand_chips_label = function(t, e) {
                    this.player.set_chip(t, e)
                }
                ,
                i.refresh_bet_chips_visible = function(t) {
                    this.bet_chips_node.active = !1
                }
                ,
                i.update_hand_cards_by_nlh31 = function(t) {
                    w.game_mgr.get_player_key_data(this.seat_id, "is_on_seat") && this.player.update_hand_cards_by_nlh31()
                }
                ,
                i.get_card_back_pos = function() {
                    return this.player.get_card_back_pos()
                }
                ,
                i.show_my_hand_card = function(t, e) {
                    void 0 === e && (e = !0),
                    this.player.show_my_hand_card(t, e)
                }
                ,
                i.play_head_rotation_action = function() {
                    this.player.play_head_spining_animation()
                }
                ,
                i.show_hand_card_force = function() {
                    for (var t = w.game_mgr.hand_count, e = 0; e < t; e++)
                        this.player.show_my_hand_card(e, !0),
                        this.player.set_hand_card_back_visible(!1)
                }
                ,
                i.show_hand_card_active = function(t) {
                    for (var e = w.game_mgr.hand_count, i = 0; i < e; i++)
                        this.player.show_my_hand_card_active(i, t)
                }
                ,
                i.update_allin_chips_back = function(t, e) {
                    for (var i = this, n = [0, .05], s = function(t) {
                        var s = n[t]
                          , h = t;
                        o.load("main/common_chips_orange/spriteFrame", u, (function(t, o) {
                            var l = new a;
                            l.layer = i.node.layer,
                            l.setPosition(i.bet_chips_node.position),
                            l.parent = i.node,
                            l.addComponent(_).spriteFrame = o;
                            var c = new r(0,0,0);
                            d(l).hide().delay(w.game_mgr.get_animation_speed_specified(s)).show().to(w.game_mgr.get_animation_speed_specified(m.bet_chips_fly), {
                                position: c
                            }, {
                                easing: "quadOut"
                            }).call((function() {
                                h == n.length - 1 && e && e()
                            }
                            )).removeSelf().start()
                        }
                        ))
                    }, h = 0; h < n.length; h++)
                        s(h)
                }
                ,
                i.play_profit_animation = function(t) {
                    this.player.play_profit_animation(t)
                }
                ,
                i.play_mystery_profit_animation = function(t) {
                    this.player.play_mystert_animation(t)
                }
                ,
                i.play_insurance_profit_animation = function(t) {
                    this.player.play_insurance_profit_animation(t)
                }
                ,
                i.play_win_effect = function() {
                    this.player.play_win_chips_ani()
                }
                ,
                i.play_insurance_chips_ani = function() {
                    var t = this;
                    this.player.play_insurance_chips_ani((function() {
                        t.updata_insurance_chips_visible()
                    }
                    )),
                    this.refresh_insurance_chips_visible(-1)
                }
                ,
                i.refresh_insurance_chips_visible = function(t) {
                    this.player.refresh_insurance_chips_visible(t)
                }
                ,
                i.play_hilo_win_show = function(t) {
                    if (t.hi_pot_profit > 0 || t.low_pot_profit > 0) {
                        var e = w.game_card_highlight.show_hilo_win(t);
                        this.hilo_info_node.refresh_hilo_card_type(e.is_show, e)
                    } else
                        this.hilo_info_node.refresh_hilo_card_type(!1)
                }
                ,
                i.refresh_evchop_win_rate_status = function() {
                    this.player.refresh_evchop_win_rate_status()
                }
                ,
                i.refresh_evchop_selected_tag = function() {
                    this.player.refresh_evchop_selected_tag()
                }
                ,
                e
            }(p)).prototype, "empty_pos", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = y(z.prototype, "player", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = y(z.prototype, "dealer_tag", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = y(z.prototype, "sushi_tag", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = y(z.prototype, "hilo_info_node", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = y(z.prototype, "bet_chips_node", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = y(z.prototype, "lab_bet_left", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = y(z.prototype, "lab_bet_right", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = z)) || L));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/back_layer.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts"], (function(e) {
    "use strict";
    var t, i, a, r, n, o, _, s, l, c, u;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            i = e._decorator,
            a = e.Sprite,
            r = e.Component
        }
        , function(e) {
            n = e.g_func
        }
        , function(e) {
            o = e.applyDecoratedDescriptor,
            _ = e.inheritsLoose,
            s = e.initializerDefineProperty,
            l = e.assertThisInitialized
        }
        , function(e) {
            c = e.g_type
        }
        , function(e) {
            u = e.g_instance
        }
        ],
        execute: function() {
            var g, m, b, f, p, d, h;
            t._RF.push({}, "a6837teIalJGJFPBir2NOdr", "back_layer", void 0);
            var y = i.ccclass
              , v = i.property;
            e("back_layer", (g = y("back_layer"),
            m = v(a),
            b = v(a),
            g((d = o((p = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                        a[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    s(l(t), "background_bg", d, l(t)),
                    s(l(t), "image_table", h, l(t)),
                    t
                }
                _(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    this.refresh_mtt_final_show()
                }
                ,
                i.set_bg_visible = function(e) {
                    this.background_bg.node.active = e,
                    this.image_table.node.active = e
                }
                ,
                i.refresh_mtt_final_show = function() {
                    var e = u.game_mgr.game_kind
                      , t = u.game_mgr.enter_room_data.texas_game_detail.is_final_table;
                    c.is_mtt_room(e) && t && n.load_texture(this.image_table, "main/table_mtt_deep/spriteFrame", (function() {}
                    )),
                    u.game_mgr.is_squid_ing() && n.load_texture(this.image_table, "main/squid_bg/spriteFrame", (function() {}
                    )),
                    u.game_mgr.is_sushi_game() && n.load_texture(this.image_table, "main/table_sushi/spriteFrame", (function() {}
                    ))
                }
                ,
                t
            }(r)).prototype, "background_bg", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = o(p.prototype, "image_table", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f = p)) || f));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/data_manager.ts", ["cc", "./xconfig.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts"], (function(a) {
    "use strict";
    var _, n, e, i, t, s, r, d, o;
    return {
        setters: [function(a) {
            _ = a.cclegacy,
            n = a.director
        }
        , function(a) {
            e = a.X_CONFIG
        }
        , function(a) {
            i = a.createForOfIteratorHelperLoose,
            t = a.createClass,
            s = a.defineProperty
        }
        , function(a) {
            r = a.g_type
        }
        , function(a) {
            d = a.g_instance
        }
        , function(a) {
            o = a.GAME_CONFIG
        }
        ],
        execute: function() {
            _._RF.push({}, "a8577JI5nBPpZY5rY+sxwN2", "data_manager", void 0);
            a("data_manager", function() {
                function a() {
                    s(this, "_json_data", void 0),
                    s(this, "all_player_data", []),
                    s(this, "run_data_array", []),
                    s(this, "cur_pot_array", []),
                    s(this, "cur_inpot_index", 0),
                    s(this, "is_show_card", !1),
                    s(this, "is_show_card_active", !1),
                    s(this, "is_show_multi_public_card", !1),
                    s(this, "is_show_evchop", !1),
                    s(this, "super_union_rate", 100)
                }
                var _ = a.prototype;
                return _.init_run_data = function() {
                    this.deal_TexasGameStartS2A(),
                    this.deal_SushiGameEventS2A(!0),
                    this.deal_round(),
                    this.deal_ShowHandCardS2A(),
                    this.deal_RMRunMultiTimesResultS2A(),
                    this.deal_EvchopDetailS2A(),
                    this.deal_SushiGameEventS2A(!1),
                    this.deal_GameResultS2A(),
                    this.deal_72_GameResultS2A(),
                    this.deal_ShowHandS2A()
                }
                ,
                _.deal_TexasGameStartS2A = function() {
                    this.cur_pot_array = [0, 0, 0, 0, 0, 0, 0, 0],
                    this.cur_inpot_index = 0;
                    for (var a, _ = {
                        hand_id: this.json_data.handInfo.hand_id,
                        dealer_seat_id: this.json_data.handInfo.dealer,
                        sb_seat_id: this.json_data.handInfo.round[0].action[0].seat_id,
                        bb_seat_id: -1
                    }, n = [], e = i(this.json_data.playerHands); !(a = e()).done; ) {
                        var t = a.value
                          , s = {
                            seat_id: t.seat_id,
                            chips: t.begin_chips,
                            ko_bonus: 0
                        };
                        n.push(s)
                    }
                    _.seat_info = n;
                    var r = {
                        func: d.game_protocol.recv_msg_TexasGameStartS2A,
                        msg: _
                    };
                    this.run_data_array.push(r)
                }
                ,
                _.deal_round = function() {
                    for (var a, _ = this.json_data.handInfo.round, n = i(_); !(a = n()).done; ) {
                        var e = a.value;
                        e.round == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_PREFLOP ? this.deal_round_preflop(e) : e.round == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_FLOP ? this.deal_round_flop(e) : e.round == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_TURN ? this.deal_round_turn(e) : e.round == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_RIVER && this.deal_round_river(e)
                    }
                }
                ,
                _.deal_round_preflop = function(a) {
                    this.deal_TexasRoundEndS2A();
                    for (var _ = -1, n = -1, e = -1, i = -1, t = -1, s = 0; s < a.action.length; s++)
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_ANTE && (_ = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_BB && (n = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_POST_BB && (e = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_BOMB && (i = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_STRADDLE && (t = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_VOLUNTARY_STRADDLE && (t = s),
                        a.action[s].action_kind == r.TEXAS_ACTION_KIND.TEXAS_ACTION_VOLUNTARY_RESTRADDLE && (t = s);
                    var d = n;
                    e > 0 && (d = e),
                    i > 0 && (d = i),
                    t > 0 && (d = t);
                    for (var o = 0; o < a.action.length; o++)
                        o <= d ? (this.deal_TexasGameActionS2A(a.action[o]),
                        o == _ && this.deal_TexasRoundEndS2A(a),
                        o == d && (this.deal_TexasRoundBeginS2A(a.round),
                        this.deal_TexasSelfHandS2A(),
                        r.is_nlh31_preflop_room(this.json_data.gameSetInfo.game_sub_kind) && this.deal_WaitNLH31DiscardCardNoticeS2A(),
                        this.deal_ShowAllHand())) : this.deal_TexasGameActionS2A(a.action[o], !0);
                    this.deal_TexasRoundEndS2A(a)
                }
                ,
                _.deal_round_flop = function(a) {
                    r.is_nlh31_flop_room(this.json_data.gameSetInfo.game_sub_kind) || this.deal_ShowHandCardS2A(a.action.length),
                    this.deal_RMRunMultiTimesResultS2A(a.card),
                    this.deal_EvchopDetailS2A(),
                    this.deal_TexasRoundBeginS2A(a.round),
                    r.is_nlh31_flop_room(this.json_data.gameSetInfo.game_sub_kind) && (this.deal_WaitNLH31DiscardCardNoticeS2A(),
                    this.deal_ShowHandCardS2A(a.action.length));
                    for (var _ = 0; _ < a.action.length; _++)
                        this.deal_TexasGameActionS2A(a.action[_], !0);
                    this.deal_TexasRoundEndS2A(a)
                }
                ,
                _.deal_round_turn = function(a) {
                    this.deal_ShowHandCardS2A(a.action.length),
                    this.deal_RMRunMultiTimesResultS2A(a.card),
                    this.deal_EvchopDetailS2A(),
                    this.deal_InsuranceDetailS2A(a.round),
                    this.deal_TexasRoundBeginS2A(a.round),
                    this.deal_HitInsuranceS2A(a.round);
                    for (var _ = 0; _ < a.action.length; _++)
                        this.deal_TexasGameActionS2A(a.action[_], !0);
                    this.deal_TexasRoundEndS2A(a)
                }
                ,
                _.deal_round_river = function(a) {
                    this.deal_ShowHandCardS2A(a.action.length),
                    this.deal_RMRunMultiTimesResultS2A(a.card),
                    this.deal_EvchopDetailS2A(),
                    this.deal_InsuranceDetailS2A(a.round),
                    this.deal_TexasRoundBeginS2A(a.round),
                    this.deal_HitInsuranceS2A(a.round);
                    for (var _ = 0; _ < a.action.length; _++)
                        this.deal_TexasGameActionS2A(a.action[_], !0);
                    this.deal_TexasRoundEndS2A(a)
                }
                ,
                _.deal_TexasRoundBeginS2A = function(a) {
                    void 0 === a && (a = 0);
                    for (var _ = {
                        round: a,
                        board_cards: [],
                        double_board_cards: []
                    }, n = this.json_data.handInfo.round, e = 0; e < a; e++) {
                        var i = n[e].card;
                        _.board_cards = _.board_cards.concat(i);
                        var t = n[e].double_board_card;
                        _.double_board_cards = _.double_board_cards.concat(t)
                    }
                    var s = {
                        func: d.game_protocol.recv_msg_TexasRoundBeginS2A,
                        msg: _
                    };
                    this.run_data_array.push(s)
                }
                ,
                _.deal_TexasRoundEndS2A = function(a) {
                    var _ = {
                        pot: JSON.parse(JSON.stringify(this.cur_pot_array))
                    };
                    if (a) {
                        var n = this.deal_new_pot();
                        if (n.need_return) {
                            var e = this.all_player_data[n.seat_id];
                            e.playing_chips = e.playing_chips + n.chips,
                            this.deal_ReturnExcessChipsS2A(n)
                        }
                        _.pot = JSON.parse(JSON.stringify(this.cur_pot_array)),
                        this.clean_play_cur_round_chips()
                    }
                    var i = {
                        func: d.game_protocol.recv_msg_TexasRoundEndS2A,
                        msg: _
                    };
                    this.run_data_array.push(i)
                }
                ,
                _.deal_ActionInfoBroadcastS2A = function(a) {
                    var _ = {
                        seat_id: a.seat_id,
                        minimum_raise_amount: 0,
                        maximum_raise_amount: 0,
                        require_call_amount: 0
                    }
                      , n = {
                        func: d.game_protocol.recv_msg_ActionInfoBroadcastS2A,
                        msg: _
                    };
                    this.run_data_array.push(n)
                }
                ,
                _.deal_SushiGameEventS2A = function(a) {
                    if (d.game_mgr.is_sushi_game()) {
                        for (var _ = this.json_data.handInfo.sushi_data, n = {
                            infos: [],
                            type: 0
                        }, e = 0; e < _.length; e++) {
                            var t = _[e];
                            if (a) {
                                if (t.type == r.SUSHI_ACTION_TYPE.INIT_BUYIN || t.type == r.SUSHI_ACTION_TYPE.HALFWAY_BUYIN) {
                                    for (var s, o = 0, u = i(this.json_data.playerHands); !(s = u()).done; ) {
                                        (v = s.value).uid == t.uid && (o = v.seat_id)
                                    }
                                    var c = this.all_player_data[o];
                                    c.playing_chips = c.playing_chips - t.chips,
                                    n.type = t.type;
                                    var h = {
                                        uid: t.uid,
                                        chips: t.chips,
                                        remaining_chips: c.playing_chips
                                    };
                                    n.infos.push(h)
                                }
                            } else if (t.type == r.SUSHI_ACTION_TYPE.SB_LOSE_PAY || t.type == r.SUSHI_ACTION_TYPE.REWARD) {
                                n.type = t.type;
                                for (var l, p = 0, f = i(this.json_data.playerHands); !(l = f()).done; ) {
                                    var v;
                                    (v = l.value).uid == t.uid && (p = v.seat_id)
                                }
                                var g = this.all_player_data[p];
                                t.type == r.SUSHI_ACTION_TYPE.REWARD ? g.playing_chips = g.playing_chips + t.chips : g.playing_chips = g.playing_chips - t.chips;
                                var m = {
                                    uid: t.uid,
                                    chips: t.chips,
                                    remaining_chips: g.playing_chips
                                };
                                n.infos.push(m)
                            }
                        }
                        var S = {
                            func: d.game_protocol.recv_msg_SushiGameEventS2A,
                            msg: n
                        };
                        this.run_data_array.push(S)
                    }
                }
                ,
                _.deal_TexasGameActionS2A = function(a, _) {
                    void 0 === _ && (_ = !1);
                    var n = this.all_player_data[a.seat_id];
                    n.playing_chips = n.playing_chips - a.action_chips,
                    n.cur_round_inpot_chips = n.cur_round_inpot_chips + a.action_chips,
                    n.cur_action_kind = a.action_kind;
                    var e = {
                        action: a.action_kind,
                        action_chips: a.action_chips,
                        remaining_chips: n.playing_chips,
                        seat_id: a.seat_id,
                        minimum_raise_amount: 0,
                        maximum_raise_amount: 0,
                        require_call_amount: 0,
                        remind: _
                    }
                      , i = {
                        func: d.game_protocol.recv_msg_TexasGameActionS2A,
                        msg: e
                    };
                    this.run_data_array.push(i)
                }
                ,
                _.deal_TexasSelfHandS2A = function() {
                    for (var a, _ = {
                        hands: [0, 0, 0, 0, 0, 0]
                    }, n = this.json_data.playerHands, e = d.game_mgr.my_uid, t = i(n); !(a = t()).done; ) {
                        var s = a.value;
                        if (s.uid == e) {
                            _.hands[0] = s.card1,
                            _.hands[1] = s.card2,
                            _.hands[2] = s.card3,
                            _.hands[3] = s.card4,
                            _.hands[4] = s.card5,
                            _.hands[5] = s.card6;
                            break
                        }
                    }
                    var r = {
                        func: d.game_protocol.recv_msg_TexasSelfHandS2A,
                        msg: _
                    };
                    this.run_data_array.push(r)
                }
                ,
                _.deal_WaitNLH31DiscardCardNoticeS2A = function() {
                    for (var a, _ = {}, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                        var e = a.value;
                        if (e.discard_card > 0) {
                            _.discard_card = e.discard_card;
                            break
                        }
                    }
                    var t = {
                        func: d.game_protocol.recv_msg_WaitNLH31DiscardCardNoticeS2A,
                        msg: _
                    };
                    this.run_data_array.push(t)
                }
                ,
                _.deal_ReturnExcessChipsS2A = function(a) {
                    var _ = {
                        excess_chips: a.chips,
                        seat_id: a.seat_id,
                        action_kind: this.all_player_data[a.seat_id].cur_action_kind
                    }
                      , n = {
                        func: d.game_protocol.recv_msg_ReturnExcessChipsS2A,
                        msg: _
                    };
                    this.run_data_array.push(n)
                }
                ,
                _.deal_ShowHandCardS2A = function(a) {
                    if (void 0 === a && (a = -1),
                    !(this.is_show_card || a > 0)) {
                        for (var _, n = {
                            seat_hands: []
                        }, e = i(this.json_data.playerHands); !(_ = e()).done; ) {
                            var t = _.value;
                            if (t.is_show_hands) {
                                var s = {
                                    seat_id: t.seat_id,
                                    card_hands: [t.card1, t.card2, t.card3, t.card4, t.card5, t.card6]
                                };
                                if (r.is_nlh31_room(this.json_data.gameSetInfo.game_sub_kind) && 0 != t.discard_card)
                                    for (var o = 0; o < s.card_hands.length; o++) {
                                        s.card_hands[o] == t.discard_card && s.card_hands.splice(o, 1, 0)
                                    }
                                n.seat_hands.push(s)
                            }
                        }
                        if (0 != n.seat_hands.length) {
                            this.is_show_card = !0;
                            var u = {
                                func: d.game_protocol.recv_msg_ShowHandCardS2A,
                                msg: n
                            };
                            this.run_data_array.push(u)
                        }
                    }
                }
                ,
                _.deal_GameResultS2A = function() {
                    for (var a, _ = {
                        result: [],
                        ko_amount: 0,
                        players_hand_chips: [],
                        show_hand: !1,
                        have_lo_win: !1,
                        winner: this.json_data.handInfo.winning_info,
                        someboby_allin: !1,
                        have_ko_bounty: !1
                    }, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                        var e = a.value
                          , t = e.sevendeuce_profit || 0
                          , s = {
                            total_profit: e.table_chips_profit - t,
                            seat_id: e.seat_id,
                            hi_pot_profit: e.hi_pot_profit,
                            low_pot_profit: e.low_pot_profit,
                            ko_bounty: e.hunter_reward
                        }
                          , r = {
                            hand_chips: e.end_chips - t,
                            seat_id: e.seat_id
                        };
                        _.result.push(s),
                        _.players_hand_chips.push(r),
                        e.is_show_hands && (_.show_hand = !0),
                        e.low_pot_profit > 0 && (_.have_lo_win = !0),
                        e.hunter_reward > 0 && (_.have_ko_bounty = !0)
                    }
                    _.someboby_allin = this.is_someboby_allin();
                    var o = {
                        func: d.game_protocol.recv_msg_GameResultS2A,
                        msg: _
                    };
                    this.run_data_array.push(o)
                }
                ,
                _.deal_72_GameResultS2A = function() {
                    if (d.game_mgr.get_seven_deuce_total_profit() > 0) {
                        for (var a, _ = {
                            result: [],
                            players_hand_chips: [],
                            players_sevendeuce_reward: [],
                            winner: []
                        }, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                            var e = a.value
                              , t = {
                                total_profit: e.sevendeuce_profit || 0,
                                seat_id: e.seat_id
                            }
                              , s = {
                                hand_chips: e.end_chips,
                                seat_id: e.seat_id
                            };
                            if (_.result.push(t),
                            _.players_hand_chips.push(s),
                            e.sevendeuce_profit < 0) {
                                var r = {
                                    sevendeuce_reward: Math.abs(e.sevendeuce_profit),
                                    seat_id: e.seat_id
                                };
                                _.players_sevendeuce_reward.push(r)
                            }
                            if (e.sevendeuce_profit > 0) {
                                var o = {
                                    sevendeuce_reward: e.sevendeuce_profit,
                                    seat_id: e.seat_id
                                };
                                _.winner.push(o)
                            }
                        }
                        var u = {
                            func: d.game_protocol.recv_msg_72_GameResultS2A,
                            msg: _
                        };
                        this.run_data_array.push(u)
                    }
                }
                ,
                _.request_game_data = function() {
                    e.RUNTIME_MODE == r.RUNTIME_MODE.DEGUG ? this.get_game_data_debug() : this.get_game_data()
                }
                ,
                _.get_game_data = function() {
                    var a = this.getQueryString("uid")
                      , _ = this.getQueryString("replay_key")
                      , e = this.getQueryString("open_type")
                      , i = this.getQueryString("handId");
                    if (_) {
                        var t = "/resource/replay/hand/" + _ + ".json";
                        "1" == e && (t = "/api/v1/log/hand/replay?uid=" + a + "&handId=" + i,
                        d.game_mgr.admin_mode = !0);
                        var s = new XMLHttpRequest;
                        if (s.onreadystatechange = function() {
                            if (s.readyState == XMLHttpRequest.DONE && s.status >= 200 && s.status < 400) {
                                var _ = s.responseText
                                  , e = JSON.parse(_).uid;
                                if (a)
                                    d.game_mgr.my_uid = +a;
                                else {
                                    if (!e)
                                        return void console.log("no uid");
                                    d.game_mgr.my_uid = +e
                                }
                                d.game_data_manager.set_game_data(_),
                                n.loadScene("play_scene")
                            }
                        }
                        ,
                        "1" == e ? s.open("PUT", t, !0) : s.open("GET", t, !0),
                        "1" == e) {
                            var r = this.getCookie("xpoker-admin-token");
                            s.setRequestHeader("Content-Type", "application/json"),
                            s.setRequestHeader("Authorization", "Bearer " + r)
                        }
                        s.send()
                    }
                }
                ,
                _.get_game_data_debug = function() {
                    var a = '{"uid":105048,"gameSetInfo":{"game_name":"Adrammelech銆傜殑鐗屽眬","host_uid":105048,"room_id":231727,"union_id":0,"club_name":"","game_currency_kind":3,"big_blind":200,"small_blind":100,"blinds":0,"ante":0,"action_time":35,"game_length":60,"table_size":9,"game_kind":1,"game_sub_kind":51,"tips_rate":0,"tips_limit":0,"require_auth":false,"minimum_buyin":5000,"maximum_buyin":100000,"preset_buyin":5000,"enable_risk_control":true,"gps_restric":false,"ip_restric":false,"gap_restric":150,"auto_start":2,"calltime":10,"calltime_hands":0,"enable_withdraw":false,"enable_auto_extension":false,"auto_extension_amount":0,"enable_auto_open":false,"enable_jackpot":false,"vpip_restric":0,"vpip_hands_amount":10,"career_vpip":0,"enable_talk":true,"enable_hide_club_name":false,"simulator_restric":false,"straddle":0,"hold_last_chips_second":0,"enable_take_break":false,"enable_insurance":false,"enable_kyc_restrict":false,"super_union_id":0,"enable_db_when_bomb_pot":false,"tongits_args":[],"enable_anonymous":false,"enable_random_seat":false,"enable_evchop":false,"force_multi":0,"voluntary_straddle_type":0,"sevendeuce_reward":0,"squid_game_args":[],"super_union_member":[],"sushi_game_args":[]},"handInfo":{"hand_id":"1732067597231727-0000005","setid":"1732067597231727","hand_end_time":1732067818,"game_kind":1,"game_currency_kind":3,"game_sub_kind":51,"union_id":0,"super_union_id":0,"dealer":3,"fee":0,"jackpot_fee":0,"insurance_fee":0,"evchop_fee":0,"ante":0,"small_blind":100,"big_blind":200,"straddle":0,"voluntary_straddle_type":0,"is_final_table":false,"has_low_pot":false,"is_bomb_pot_hand":false,"bomb_pot_cur_ante":0,"enable_anonymous":false,"pusoy_args":[],"tw_ofc_args":[],"tongits_hit_pot":[],"tongits_win_uid":0,"squid_game_status":0,"durak_args":[],"durak_card":0,"is_sushi_game":false,"sushi_sb_times":0,"round":[{"round":1,"card":[],"double_board_card":[],"action":[{"uid":105050,"seat_id":3,"action_kind":2,"action_chips":100},{"uid":105048,"seat_id":7,"action_kind":3,"action_chips":200},{"uid":105050,"seat_id":3,"action_kind":11,"action_chips":2366},{"uid":105048,"seat_id":7,"action_kind":10,"action_chips":2266}]},{"round":2,"card":[1027,1032,269],"double_board_card":[],"action":[]}],"winning_info":[{"uid":105048,"win_hand":3,"seat_id":7,"pot_id":0,"pot_chips":3288,"best_hands":[266,522,1032,776,269],"is_hi_pot":true},{"uid":105050,"win_hand":2,"seat_id":3,"pot_id":0,"pot_chips":1644,"best_hands":[1032,776,269,1036,1033],"is_hi_pot":true}],"fee_point":0,"table_hand_sn":5,"rabbit_double_board_cards":[],"risk_data":[{"boards":[[1027,1032,269,776,261],[1027,1032,269,258,1038],[1027,1032,269,515,521]],"leader_uid":105048,"multi_count":3,"player":[{"chop_outs":[],"uid":105048,"win_outs":[774,773,772,771,267,520,782,265,518,781,264,517,770,263,516,779,262,515,778,261,514,777,260,270,523,776,259,775,258,519,521,525,526],"wpct":5434},{"chop_outs":[],"uid":105050,"win_outs":[1038,1037,268,524,1030,780,1026,1028,1029,1031,1034,1035],"wpct":4566}]}],"insurance_data":[],"evchop_round":0,"evchop_data":[],"sushi_bonus":0,"sushi_data":[],"flop_uids":[105050,105048],"showdown_uids":[105050,105048],"tw_ofc_special_card":0},"playerHands":[{"club_id":0,"uid":105048,"union_id":0,"hand_end_time":1732067818,"is_running":false,"super_union_id":0,"avatar":"special:10142","avatar_frame":-1,"begin_chips":7534,"begin_squid_count":0,"card1":266,"card2":522,"card3":0,"card4":0,"card5":0,"card6":0,"club_name":"","discard_card":523,"double_board_pot_profit":0,"end_chips":8356,"evchop_profit":0,"fee":0,"hand_type":0,"hi_pot_profit":822,"hunter_bonus":0,"hunter_reward":0,"insurance_profit":0,"is_show_hands":true,"jackpot_fee":0,"level":9,"low_pot_profit":0,"player_stage":4,"position":2,"seat_id":7,"sevendeuce_profit":0,"show_card1":false,"show_card2":false,"show_card3":false,"show_card4":false,"show_card5":false,"show_card6":false,"super_agent_uid":0,"sushi_profit":0,"table_chips_profit":822,"user_name":"Adrammelech銆�","vip_level":3},{"club_id":0,"uid":105050,"union_id":0,"hand_end_time":1732067818,"is_running":false,"super_union_id":0,"avatar":"default:34","avatar_frame":-1,"begin_chips":2466,"begin_squid_count":0,"card1":1033,"card2":1036,"card3":0,"card4":0,"card5":0,"card6":0,"club_name":"","discard_card":0,"double_board_pot_profit":0,"end_chips":1644,"evchop_profit":0,"fee":0,"hand_type":0,"hi_pot_profit":-822,"hunter_bonus":0,"hunter_reward":0,"insurance_profit":0,"is_show_hands":true,"jackpot_fee":0,"level":9,"low_pot_profit":0,"player_stage":4,"position":0,"seat_id":3,"sevendeuce_profit":0,"show_card1":false,"show_card2":false,"show_card3":false,"show_card4":false,"show_card5":false,"show_card6":false,"super_agent_uid":0,"sushi_profit":0,"table_chips_profit":-822,"user_name":"luan1000000鉁樷湗鉁�","vip_level":0}],"jackpot":[],"spinHitpot":[],"anonymousShare":false}';
                    if (JSON.parse(a).uid)
                        d.game_mgr.my_uid = JSON.parse(a).uid;
                    else
                        for (var _, e = i(JSON.parse(a).playerHands); !(_ = e()).done; ) {
                            var t = _.value;
                            if (t.card1 > 0) {
                                d.game_mgr.my_uid = t.uid;
                                break
                            }
                        }
                    d.game_data_manager.set_game_data(a),
                    n.loadScene("play_scene")
                }
                ,
                _.getCookie = function(a) {
                    for (var _ = a + "=", n = decodeURIComponent(document.cookie).split(";"), e = 0; e < n.length; e++) {
                        for (var i = n[e]; " " == i.charAt(0); )
                            i = i.substring(1);
                        if (0 == i.indexOf(_))
                            return i.substring(_.length, i.length)
                    }
                    return ""
                }
                ,
                _.getQueryString = function(a) {
                    var _ = new RegExp("(^|&)" + a + "=([^&]*)(&|$)","i")
                      , n = window.location.search.substr(1).match(_);
                    return null != n ? unescape(n[2]) : null
                }
                ,
                _.set_game_data = function(a) {
                    this.deal_json_data(a),
                    this.init_run_data(),
                    d.game_mgr.set_choose_game_s2c_data()
                }
                ,
                _.deal_json_data = function(a) {
                    e.RUNTIME_MODE != r.RUNTIME_MODE.DEGUG && e.RUNTIME_MODE != r.RUNTIME_MODE.PRE_RELEASE || (console.log(a),
                    console.log("this.json_data", JSON.parse(a))),
                    this.json_data = JSON.parse(a),
                    this.deal_nlh31_data(),
                    this.deal_sushi_data(),
                    this.deal_all_palyer_data(),
                    this.deal_super_union_rate()
                }
                ,
                _.deal_nlh31_data = function() {
                    for (var a, _ = i(this.json_data.playerHands); !(a = _()).done; ) {
                        var n = a.value;
                        if (n.discard_card > 0 && (n.card3 = n.discard_card,
                        !d.game_mgr.admin_mode))
                            break
                    }
                }
                ,
                _.deal_sushi_data = function() {
                    var a = this.json_data.gameSetInfo.sushi_game_args;
                    if (a && a.is_sushi_game) {
                        for (var _, n = new Map, e = this.json_data.handInfo.sushi_data, t = i(e); !(_ = t()).done; ) {
                            var s = _.value
                              , d = {
                                add_begin_chips: 0,
                                add_end_chips: 0
                            };
                            n.get(s.uid) && (d = n.get(s.uid)),
                            s.type == r.SUSHI_ACTION_TYPE.INIT_BUYIN || s.type == r.SUSHI_ACTION_TYPE.HALFWAY_BUYIN ? d.add_begin_chips += s.chips : s.type == r.SUSHI_ACTION_TYPE.SB_LOSE_PAY ? d.add_end_chips -= s.chips : s.type == r.SUSHI_ACTION_TYPE.REWARD && (d.add_end_chips += s.chips),
                            n.set(s.uid, d)
                        }
                        for (var o, u = i(this.json_data.playerHands); !(o = u()).done; ) {
                            var c = o.value;
                            if (n.get(c.uid)) {
                                var h = n.get(c.uid);
                                c.begin_chips += null == h ? void 0 : h.add_begin_chips,
                                c.end_chips += null == h ? void 0 : h.add_end_chips
                            }
                        }
                    }
                }
                ,
                _.deal_all_palyer_data = function() {
                    for (var a, _ = i(this.json_data.playerHands); !(a = _()).done; ) {
                        var n = a.value
                          , e = {
                            playing_chips: n.begin_chips,
                            cur_round_inpot_chips: 0,
                            cur_action_kind: -1,
                            uid: n.uid,
                            union_id: n.union_id
                        };
                        this.all_player_data[n.seat_id] = JSON.parse(JSON.stringify(e))
                    }
                }
                ,
                _.deal_super_union_rate = function() {
                    if (0 != this.json_data.gameSetInfo.super_union_id) {
                        for (var a, _ = this.json_data.gameSetInfo.super_union_member, n = d.game_mgr.my_uid, e = 0, t = i(this.json_data.playerHands); !(a = t()).done; ) {
                            var s = a.value;
                            if (s.uid == n) {
                                e = s.union_id;
                                break
                            }
                        }
                        if (0 != e && _ && _.length > 0)
                            for (var r, o = i(_); !(r = o()).done; ) {
                                var u = r.value;
                                if (u.union_id == e) {
                                    this.super_union_rate = u.exchange_rate;
                                    break
                                }
                            }
                    }
                }
                ,
                _.convert_super_value_to_local = function(a, _) {
                    if (void 0 === _ && (_ = !1),
                    r.is_sng_or_mtt(this.json_data.gameSetInfo.game_kind))
                        return a;
                    if (100 == this.super_union_rate)
                        return a;
                    var n = this.super_union_rate * a / 100;
                    return n = _ ? Math.floor(n) : Math.ceil(n)
                }
                ,
                _.clean_play_cur_round_chips = function() {
                    for (var a, _ = i(this.json_data.playerHands); !(a = _()).done; ) {
                        var n = a.value;
                        this.all_player_data[n.seat_id].cur_round_inpot_chips = 0
                    }
                }
                ,
                _.deal_new_pot = function() {
                    for (var a, _ = [], n = [], e = i(this.json_data.playerHands); !(a = e()).done; ) {
                        var t = a.value
                          , s = this.all_player_data[t.seat_id].cur_round_inpot_chips;
                        if (s > 0) {
                            _.push(s);
                            var r = {
                                is_allin: this.is_someboby_allin_by_seat_id(t.seat_id),
                                inpot_chips: s,
                                seat_id: t.seat_id
                            };
                            n.push(r)
                        }
                    }
                    _.sort((function(a, _) {
                        return a - _
                    }
                    ));
                    var d = _.length
                      , o = !1
                      , u = 0
                      , c = -1
                      , h = this.json_data.handInfo.big_blind;
                    _[d - 1] > _[d - 2] && _[d - 1] > h && (o = !0,
                    u = _[d - 1] - _[d - 2]);
                    for (var l, p = i(this.json_data.playerHands); !(l = p()).done; ) {
                        t = l.value;
                        if (this.all_player_data[t.seat_id].cur_round_inpot_chips == _[d - 1]) {
                            c = t.seat_id;
                            break
                        }
                    }
                    if (_[d - 1] = _[d - 1] - u,
                    o)
                        for (var f = 0; f < n.length; f++)
                            n[f].seat_id == c && (n[f].inpot_chips = n[f].inpot_chips - u);
                    for (; n.length > 0; ) {
                        _.sort((function(a, _) {
                            return a - _
                        }
                        ));
                        for (var v = 0, g = 0; g < _.length; g++)
                            if (_[g] > 0) {
                                v = _[g];
                                break
                            }
                        if (0 == v)
                            break;
                        var m = 0;
                        for (g = 0; g < _.length; g++)
                            _[g] > 0 && (m += v,
                            _[g] = _[g] - v);
                        var S = !1
                          , y = [];
                        for (g = 0; g < n.length; g++)
                            n[g].inpot_chips = n[g].inpot_chips - v,
                            0 == n[g].inpot_chips && n[g].is_allin && (S = !0),
                            n[g].inpot_chips > 0 && y.push(n[g]);
                        this.cur_pot_array[this.cur_inpot_index] = this.cur_pot_array[this.cur_inpot_index] + m,
                        S && (this.cur_inpot_index = this.cur_inpot_index + 1),
                        n = y
                    }
                    return {
                        need_return: o,
                        chips: u,
                        seat_id: c
                    }
                }
                ,
                _.deal_pot = function() {
                    for (var a, _ = [], n = [], e = i(this.json_data.playerHands); !(a = e()).done; ) {
                        var t = a.value
                          , s = this.all_player_data[t.seat_id].cur_round_inpot_chips;
                        n.push(s)
                    }
                    n.sort((function(a, _) {
                        return a - _
                    }
                    ));
                    var r = n.length
                      , d = !1
                      , o = 0
                      , u = -1;
                    n[r - 1] > n[r - 2] && (d = !0,
                    o = n[r - 1] - n[r - 2]);
                    for (var c, h = i(this.json_data.playerHands); !(c = h()).done; ) {
                        t = c.value;
                        if (this.all_player_data[t.seat_id].cur_round_inpot_chips == n[r - 1]) {
                            u = t.seat_id;
                            break
                        }
                    }
                    for (n[r - 1] = n[r - 1] - o; ; ) {
                        n.sort((function(a, _) {
                            return a - _
                        }
                        ));
                        for (var l = 0, p = 0, f = 0; f < n.length; f++)
                            if (n[f] > 0) {
                                p = n[f];
                                break
                            }
                        for (f = 0; f < n.length; f++)
                            n[f] > 0 && (l += p,
                            n[f] = n[f] - p);
                        if (this.array_some_value(n)) {
                            for (f = 0; f < n.length; f++)
                                n[f] > 0 && (l += p,
                                n[f] = n[f] - p);
                            _.push(l);
                            break
                        }
                        _.push(l)
                    }
                    return {
                        pot: _,
                        need_return: d,
                        chips: o,
                        seat_id: u
                    }
                }
                ,
                _.array_some_value = function(a) {
                    for (var _ = 0, n = 0; n < a.length; n++)
                        a[0] != a[n] && _++;
                    return !(_ > 0)
                }
                ,
                _.is_someboby_allin = function() {
                    for (var a, _ = !1, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                        var e = a.value;
                        if (0 == this.all_player_data[e.seat_id].playing_chips) {
                            _ = !0;
                            break
                        }
                    }
                    return _
                }
                ,
                _.is_someboby_allin_by_seat_id = function(a) {
                    var _ = !1;
                    return 0 == this.all_player_data[a].playing_chips && (_ = !0),
                    _
                }
                ,
                _.deal_InsuranceDetailS2A = function(a) {
                    void 0 === a && (a = -1),
                    this.json_data.gameSetInfo.enable_insurance && (a == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_TURN ? this.insurance_flop() : a == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_RIVER && this.insurance_turn())
                }
                ,
                _.insurance_flop = function() {
                    for (var a = {
                        insurance_pot: [0, 0, 0, 0, 0, 0, 0, 0],
                        buy_uid: []
                    }, _ = !1, n = 0; n < this.json_data.handInfo.insurance_data.length; n++)
                        if (this.json_data.handInfo.insurance_data[n].flop.length > 0) {
                            var e, i, t = null === (e = this.json_data.handInfo.insurance_data[n].flop[0]) || void 0 === e ? void 0 : e.buy_insurance_chips, s = this.json_data.handInfo.insurance_data[n].pot_id;
                            a.insurance_pot[s] = t;
                            var r = null === (i = this.json_data.handInfo.insurance_data[n].flop[0]) || void 0 === i ? void 0 : i.uid;
                            a.buy_uid.push(r),
                            t > 0 && (_ = !0)
                        }
                    if (_) {
                        var o = {
                            func: d.game_protocol.recv_msg_InsuranceDetailS2A,
                            msg: a
                        };
                        this.run_data_array.push(o)
                    }
                }
                ,
                _.insurance_turn = function() {
                    for (var a = {
                        insurance_pot: [0, 0, 0, 0, 0, 0, 0, 0],
                        buy_uid: []
                    }, _ = !1, n = 0; n < this.json_data.handInfo.insurance_data.length; n++) {
                        var e = this.json_data.handInfo.insurance_data[n].pot_id;
                        if (this.json_data.handInfo.insurance_data[n].flop.length > 0) {
                            var i, t, s = null === (i = this.json_data.handInfo.insurance_data[n].flop[0]) || void 0 === i ? void 0 : i.buy_insurance_chips;
                            0 == (null === (t = this.json_data.handInfo.insurance_data[n].flop[0]) || void 0 === t ? void 0 : t.insurance_payment) && (a.insurance_pot[e] = a.insurance_pot[e] + s)
                        }
                        if (this.json_data.handInfo.insurance_data[n].turn.length > 0) {
                            var r, o, u, c = null === (r = this.json_data.handInfo.insurance_data[n].turn[0]) || void 0 === r ? void 0 : r.buy_insurance_chips;
                            null === (o = this.json_data.handInfo.insurance_data[n].turn[0]) || void 0 === o || o.insurance_payment;
                            a.insurance_pot[e] = a.insurance_pot[e] + c;
                            var h = null === (u = this.json_data.handInfo.insurance_data[n].turn[0]) || void 0 === u ? void 0 : u.uid;
                            a.buy_uid.push(h),
                            c > 0 && (_ = !0)
                        }
                    }
                    if (_) {
                        var l = {
                            func: d.game_protocol.recv_msg_InsuranceDetailS2A,
                            msg: a
                        };
                        this.run_data_array.push(l)
                    }
                }
                ,
                _.deal_HitInsuranceS2A = function(a) {
                    void 0 === a && (a = -1),
                    a == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_TURN ? this.hit_insurance_turn(a) : a == r.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_RIVER && this.hit_insurance_river(a)
                }
                ,
                _.hit_insurance_turn = function(a) {
                    void 0 === a && (a = -1);
                    var _ = {
                        insurance_pot: [0, 0, 0, 0, 0, 0, 0, 0],
                        round: a,
                        hit_data: [],
                        insurance_data: []
                    }
                      , n = !1;
                    _.insurance_data = JSON.parse(JSON.stringify(this.json_data.handInfo.insurance_data));
                    for (var e = 0; e < _.insurance_data.length; e++) {
                        if (_.insurance_data[e].flop.length > 0) {
                            var i, t, s, r = null === (i = _.insurance_data[e].flop[0]) || void 0 === i ? void 0 : i.buy_insurance_chips, o = null === (t = _.insurance_data[e].flop[0]) || void 0 === t ? void 0 : t.insurance_payment, u = null === (s = _.insurance_data[e].flop[0]) || void 0 === s ? void 0 : s.uid;
                            if (0 == o)
                                _.insurance_pot[e] = _.insurance_pot[e] + r;
                            else {
                                _.insurance_pot[e] = 0,
                                n = !0;
                                var c = {
                                    uid: u,
                                    insurance_payment: o
                                };
                                _.hit_data.push(c)
                            }
                        }
                        _.insurance_data[e].turn.length > 0 && (_.insurance_data[e].turn = [])
                    }
                    if (n) {
                        var h = {
                            func: d.game_protocol.recv_msg_HitInsuranceS2A,
                            msg: _
                        };
                        this.run_data_array.push(h)
                    }
                }
                ,
                _.hit_insurance_river = function(a) {
                    void 0 === a && (a = -1);
                    var _ = {
                        insurance_pot: [0, 0, 0, 0, 0, 0, 0, 0],
                        round: a,
                        hit_data: [],
                        insurance_data: []
                    }
                      , n = !1;
                    _.insurance_data = JSON.parse(JSON.stringify(this.json_data.handInfo.insurance_data));
                    for (var e = 0; e < _.insurance_data.length; e++) {
                        if (_.insurance_data[e].flop.length > 0) {
                            var i, t, s = null === (i = _.insurance_data[e].flop[0]) || void 0 === i ? void 0 : i.buy_insurance_chips, r = null === (t = _.insurance_data[e].flop[0]) || void 0 === t ? void 0 : t.insurance_payment;
                            _.insurance_pot[e] = 0 == r ? _.insurance_pot[e] + s : 0
                        }
                        if (_.insurance_data[e].turn.length > 0) {
                            var o, u, c, h = null === (o = _.insurance_data[e].turn[0]) || void 0 === o ? void 0 : o.buy_insurance_chips, l = null === (u = _.insurance_data[e].turn[0]) || void 0 === u ? void 0 : u.insurance_payment, p = null === (c = _.insurance_data[e].turn[0]) || void 0 === c ? void 0 : c.uid;
                            if (0 == l)
                                _.insurance_pot[e] = _.insurance_pot[e] + h;
                            else {
                                var f, v;
                                _.insurance_pot[e] = 0,
                                n = !0;
                                var g = null === (f = _.insurance_data[e].flop[0]) || void 0 === f ? void 0 : f.uid
                                  , m = null === (v = _.insurance_data[e].flop[0]) || void 0 === v ? void 0 : v.buy_insurance_chips;
                                g == p && (l -= m);
                                var S = {
                                    uid: p,
                                    insurance_payment: l
                                };
                                _.hit_data.push(S)
                            }
                        }
                    }
                    if (n) {
                        var y = {
                            func: d.game_protocol.recv_msg_HitInsuranceS2A,
                            msg: _
                        };
                        this.run_data_array.push(y)
                    }
                }
                ,
                _.deal_RMRunMultiTimesResultS2A = function(a) {
                    if (this.json_data.gameSetInfo.enable_risk_control && this.is_show_card && !(this.is_show_multi_public_card || a && a.length > 0)) {
                        var _ = {
                            boards: [],
                            multi_count: 0,
                            players: []
                        }
                          , n = this.json_data.handInfo.risk_data[0];
                        if (n || (null == n ? void 0 : n.boards)) {
                            _.boards = n.boards,
                            _.multi_count = n.multi_count;
                            for (var e, t = i(n.player); !(e = t()).done; ) {
                                var s = e.value;
                                (null == s ? void 0 : s.uid) && _.players.push(null == s ? void 0 : s.uid)
                            }
                            if (!(_.players.length < 2) && _.boards && _.boards.length > 0) {
                                this.is_show_multi_public_card = !0;
                                var r = {
                                    func: d.game_protocol.recv_msg_RMRunMultiTimesResultS2A,
                                    msg: _
                                };
                                this.run_data_array.push(r)
                            }
                        }
                    }
                }
                ,
                _.deal_EvchopDetailS2A = function() {
                    if (this.json_data.gameSetInfo.enable_evchop && this.is_show_card && !this.is_show_evchop) {
                        var a = {
                            deal_evchop_data: []
                        }
                          , _ = JSON.parse(JSON.stringify(this.json_data.handInfo.evchop_data));
                        if (_.length > 0) {
                            this.is_show_evchop = !0;
                            for (var n = [], e = 0, i = 0; i < _.length; i++)
                                for (var t = _[i].players, s = 0; s < t.length; s++)
                                    t[s].wpct > e && (e = t[s].wpct),
                                    n[t[s].uid] || t[s].status != o.ENUM_EVCHOP_PLAYER_STATUS.EVCHOP_PLAYER_STATUS_CONFIRM || (n[t[s].uid] = t[s]);
                            for (var r in n) {
                                var u = {
                                    chips: n[r].chips,
                                    status: o.ENUM_EVCHOP_PLAYER_STATUS.EVCHOP_PLAYER_STATUS_WAIT,
                                    uid: n[r].uid,
                                    wpct: n[r].wpct,
                                    is_highest: !1
                                }
                                  , c = {
                                    chips: n[r].chips,
                                    status: n[r].status,
                                    uid: n[r].uid,
                                    wpct: n[r].wpct,
                                    is_highest: !1
                                };
                                n[r].wpct == e && (u.is_highest = !0,
                                c.is_highest = !0),
                                a.deal_evchop_data.push(c)
                            }
                            var h = {
                                func: d.game_protocol.recv_msg_EvchopDetailS2A,
                                msg: a
                            };
                            this.run_data_array.push(h)
                        }
                    }
                }
                ,
                _.deal_ShowHandS2A = function() {
                    if (!(d.game_mgr.get_seven_deuce_total_profit() > 0 || this.is_show_card_active)) {
                        for (var a, _ = {
                            seat_hands: []
                        }, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                            var e = a.value;
                            if (1 == e.show_card1 || 1 == e.show_card2 || 1 == e.show_card3 || 1 == e.show_card4 || 1 == e.show_card5 || 1 == e.show_card6) {
                                var t = {
                                    seat_id: e.seat_id,
                                    card_hands: [e.card1, e.card2, e.card3, e.card4, e.card5, e.card6],
                                    show_card: [e.show_card1, e.show_card2, e.show_card3, e.show_card4, e.show_card5, e.show_card6]
                                };
                                _.seat_hands.push(t)
                            }
                        }
                        if (0 != _.seat_hands.length) {
                            this.is_show_card_active = !0;
                            var s = {
                                func: d.game_protocol.recv_msg_ShowHandS2A,
                                msg: _
                            };
                            this.run_data_array.push(s)
                        }
                    }
                }
                ,
                _.deal_ShowAllHand = function() {
                    if (d.game_mgr.admin_mode) {
                        for (var a, _ = {
                            seat_hands: []
                        }, n = i(this.json_data.playerHands); !(a = n()).done; ) {
                            var e = a.value
                              , t = {
                                seat_id: e.seat_id,
                                card_hands: [e.card1, e.card2, e.card3, e.card4, e.card5, e.card6],
                                show_card: [e.show_card1, e.show_card2, e.show_card3, e.show_card4, e.show_card5, e.show_card6]
                            };
                            _.seat_hands.push(t)
                        }
                        if (0 != _.seat_hands.length) {
                            this.is_show_card_active = !0;
                            var s = {
                                func: d.game_protocol.recv_msg_ShowHandS2A,
                                msg: _
                            };
                            this.run_data_array.push(s)
                        }
                    }
                }
                ,
                t(a, [{
                    key: "json_data",
                    get: function() {
                        return this._json_data
                    },
                    set: function(a) {
                        this._json_data = a
                    }
                }]),
                a
            }());
            _._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/game_pot.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./main_side_pot.ts"], (function(t) {
    "use strict";
    var o, e, i, _, n, p, s, r, a, c, u;
    return {
        setters: [function(t) {
            o = t.cclegacy,
            e = t._decorator,
            i = t.Component
        }
        , function(t) {
            _ = t.g_const
        }
        , function(t) {
            n = t.applyDecoratedDescriptor,
            p = t.inheritsLoose,
            s = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            a = t.defineProperty
        }
        , function(t) {
            c = t.g_instance
        }
        , function(t) {
            u = t.main_side_pot
        }
        ],
        execute: function() {
            var f, g, h, m, l;
            o._RF.push({}, "b015fFUIi1K8a+wjgO1w7XZ", "game_pot", void 0);
            var d = e.ccclass
              , b = e.property;
            t("game_pot", (f = d("game_pot"),
            g = b({
                type: u
            }),
            f((l = n((m = function(t) {
                function o() {
                    for (var o, e = arguments.length, i = new Array(e), _ = 0; _ < e; _++)
                        i[_] = arguments[_];
                    return o = t.call.apply(t, [this].concat(i)) || this,
                    s(r(o), "tb_pot", l, r(o)),
                    a(r(o), "pot4_pos", null),
                    o
                }
                p(o, t);
                var e = o.prototype;
                return e.onLoad = function() {
                    for (var t = 0; t < _.SHOW_POT_COUNT; t++)
                        this.tb_pot[t].set_pot_index(t),
                        this.tb_pot[t].node.active = !1,
                        t == _.SHOW_POT_COUNT - 1 && (this.pot4_pos = this.get_pot_pos(t))
                }
                ,
                e.refresh_pots_data = function() {
                    for (var t = c.game_mgr.get_game_pot_info(), o = c.game_mgr.get_game_insurance_pot_info(), e = 0; e < _.SHOW_POT_COUNT; e++)
                        this.tb_pot[e].pot_item_update_pot_info(t[e]),
                        this.tb_pot[e].update_insurance_pot(o[e]);
                    this.refresh_pots_pos()
                }
                ,
                e.refresh_pots_pos = function() {
                    c.game_mgr.get_game_insurance_pot_info()[0] > 0 ? this.tb_pot[3].node.setPosition(this.pot4_pos.x, this.pot4_pos.y + 30) : this.tb_pot[3].node.setPosition(this.pot4_pos.x, this.pot4_pos.y)
                }
                ,
                e.get_pot_pos = function(t) {
                    return this.tb_pot[t].node.getPosition()
                }
                ,
                e.set_tb_pot_visible = function(t) {
                    void 0 === t && (t = !1);
                    for (var o = 0; o < _.SHOW_POT_COUNT; o++)
                        this.tb_pot[o].node.active = t
                }
                ,
                e.refresh_target_pot_info = function(t) {
                    if (void 0 === t && (t = -1),
                    !(t < 0) && this.tb_pot[t]) {
                        var o = c.game_mgr.get_game_pot_info();
                        this.tb_pot[t].pot_item_update_pot_info(o[t])
                    }
                }
                ,
                o
            }(i)).prototype, "tb_pot", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            h = m)) || h));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/sushi_node.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(e) {
    "use strict";
    var i, t, a, s, n, r, o, l, _, u, c, h, d, m, g, p;
    return {
        setters: [function(e) {
            i = e.cclegacy,
            t = e._decorator,
            a = e.Label,
            s = e.Sprite,
            n = e.resources,
            r = e.SpriteFrame,
            o = e.tween,
            l = e.UIOpacity,
            _ = e.Vec3,
            u = e.Component
        }
        , function(e) {
            c = e.g_func
        }
        , function(e) {
            h = e.applyDecoratedDescriptor,
            d = e.inheritsLoose,
            m = e.initializerDefineProperty,
            g = e.assertThisInitialized
        }
        , function(e) {
            p = e.g_instance
        }
        ],
        execute: function() {
            var b, f, y, v, w, F, x, M, S;
            i._RF.push({}, "b14e0KiSYxILIRthbQlIuu1", "sushi_node", void 0);
            var z = t.ccclass
              , I = t.property;
            e("sushi_node", (b = z("sushi_node"),
            f = I(a),
            y = I(a),
            v = I(s),
            b((x = h((F = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), s = 0; s < t; s++)
                        a[s] = arguments[s];
                    return i = e.call.apply(e, [this].concat(a)) || this,
                    m(g(i), "lab_chips", x, g(i)),
                    m(g(i), "lab_add", M, g(i)),
                    m(g(i), "img_sushi", S, g(i)),
                    i
                }
                d(i, e);
                var t = i.prototype;
                return t.start = function() {
                    this.show_sushi_reward()
                }
                ,
                t.show_sushi_reward = function() {
                    var e = this
                      , i = p.game_mgr.enter_room_data.texas_game_detail.sushi_sb_times;
                    i = Math.floor(i / 2) + 1;
                    var t = "table/sushi/sushi_level_" + (i = Math.min(i, 6)) + "_1/spriteFrame";
                    n.load(t, r, (function(i, t) {
                        e.img_sushi.spriteFrame = t
                    }
                    )),
                    this.img_sushi.node.setScale(.75, .75),
                    this.node.active = !0;
                    var a = p.game_mgr.enter_room_data.texas_game_detail.sushi_bonus;
                    a = p.game_data_manager.convert_super_value_to_local(a),
                    this.lab_chips.string = c.display_number(a).toString()
                }
                ,
                t.show_add_chips = function(e) {
                    var i = p.game_data_manager.convert_super_value_to_local(e);
                    this.lab_add.string = c.display_number(i, !0),
                    this.lab_add.node.setPosition(this.lab_add.node.position.x, -100),
                    o(this.lab_add.getComponent(l)).to(.3, {
                        opacity: 255
                    }).delay(.5).to(0, {
                        opacity: 0
                    }).start(),
                    o(this.lab_add.node).by(.5, {
                        position: new _(0,30)
                    }, {
                        easing: "expoOut"
                    }).delay(.3).start()
                }
                ,
                t.sushi_upgrade_ani = function() {
                    var e = this
                      , i = p.game_mgr.enter_room_data.texas_game_detail.sushi_sb_times - 1;
                    i > 9 || i % 2 != 1 || (i = (i + 1) / 2 + 1,
                    i = Math.min(i, 6),
                    o(this.img_sushi.node).to(.3, {
                        scale: new _(0,0,1)
                    }).call((function() {
                        var t = "table/sushi/sushi_level_" + i + "_4/spriteFrame";
                        n.load(t, r, (function(i, t) {
                            e.img_sushi.spriteFrame = t
                        }
                        ))
                    }
                    )).to(.3, {
                        scale: new _(.75,.75,1)
                    }).call((function() {
                        var t = "table/sushi/sushi_level_" + i + "_1/spriteFrame";
                        n.load(t, r, (function(i, t) {
                            e.img_sushi.spriteFrame = t
                        }
                        ))
                    }
                    )).start())
                }
                ,
                t.eat_sushi_ani = function() {
                    var e = this
                      , i = p.game_mgr.enter_room_data.texas_game_detail.sushi_sb_times;
                    i = Math.floor(i / 2) + 1,
                    i = Math.min(i, 6),
                    o(this.img_sushi.node).call((function() {
                        var t = "table/sushi/sushi_level_" + i + "_2/spriteFrame";
                        n.load(t, r, (function(i, t) {
                            e.img_sushi.spriteFrame = t
                        }
                        ))
                    }
                    )).by(.05, {
                        angle: 15
                    }).by(.05, {
                        angle: -15
                    }).by(.05, {
                        angle: 15
                    }).by(.05, {
                        angle: -15
                    }).delay(.2).call((function() {
                        var t = "table/sushi/sushi_level_" + i + "_3/spriteFrame";
                        n.load(t, r, (function(i, t) {
                            e.img_sushi.spriteFrame = t
                        }
                        ))
                    }
                    )).by(.05, {
                        angle: 15
                    }).by(.05, {
                        angle: -15
                    }).by(.05, {
                        angle: 15
                    }).by(.05, {
                        angle: -15
                    }).delay(.2).call((function() {
                        e.node.active = !1
                    }
                    )).start()
                }
                ,
                i
            }(u)).prototype, "lab_chips", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = h(F.prototype, "lab_add", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = h(F.prototype, "img_sushi", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = F)) || w));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./protocol_table.ts", "./head_downloader.ts", "./load_ani_node.ts", "./card_highlight.ts", "./game_manager.ts", "./task_queue.ts", "./event_dispatcher.ts", "./game_animation_utils.ts", "./data_manager.ts", "./multi_lang_manager.ts"], (function(a) {
    "use strict";
    var e, n, t, i, r, o, _, c, s, l, u, g, m, d, p, f, h, w, y, b;
    return {
        setters: [function(a) {
            e = a.cclegacy,
            n = a._decorator,
            t = a.setDisplayStats,
            i = a.resources,
            r = a.Component
        }
        , function(a) {
            o = a.applyDecoratedDescriptor,
            _ = a.inheritsLoose,
            c = a.initializerDefineProperty,
            s = a.assertThisInitialized
        }
        , function(a) {
            l = a.g_instance
        }
        , function(a) {
            u = a.protocol_table
        }
        , function(a) {
            g = a.head_downloader
        }
        , function(a) {
            m = a.load_ani_node
        }
        , function(a) {
            d = a.card_highlight
        }
        , function(a) {
            p = a.game_manager
        }
        , function(a) {
            f = a.task_queue
        }
        , function(a) {
            h = a.event_dispatcher
        }
        , function(a) {
            w = a.game_animation_utils
        }
        , function(a) {
            y = a.data_manager
        }
        , function(a) {
            b = a.multi_lang_manager
        }
        ],
        execute: function() {
            var v, D, k, q, L;
            e._RF.push({}, "b72c8yRQppGqLjiE4bxG/eX", "main", void 0);
            var z = n.ccclass
              , R = n.property;
            a("main", (v = z("main"),
            D = R(m),
            v((L = o((q = function(a) {
                function e() {
                    for (var e, n = arguments.length, t = new Array(n), i = 0; i < n; i++)
                        t[i] = arguments[i];
                    return e = a.call.apply(a, [this].concat(t)) || this,
                    c(s(e), "ani_node", L, s(e)),
                    e
                }
                return _(e, a),
                e.prototype.onLoad = function() {
                    t(!1),
                    l.game_mgr = new p,
                    l.head_dl = g.get_instance(),
                    l.evt_center = new h,
                    l.game_protocol = new u,
                    l.game_animation = new w,
                    l.game_task_queue = new f,
                    l.game_data_manager = new y,
                    l.game_lang_mgr = new b,
                    l.game_card_highlight = new d,
                    i.load("prefabs/poker_card"),
                    i.loadDir("table/highlight"),
                    i.loadDir("card", (function() {
                        l.game_lang_mgr.set_crt_language(),
                        l.game_data_manager.request_game_data()
                    }
                    ))
                }
                ,
                e
            }(r)).prototype, "ani_node", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = q)) || k));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/multi_lang_manager.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./multi_lang_data.ts"], (function(t) {
    "use strict";
    var a, n, g, e;
    return {
        setters: [function(t) {
            a = t.cclegacy,
            n = t._decorator
        }
        , function(t) {
            g = t.defineProperty
        }
        , function(t) {
            e = t.multi_lang_data
        }
        ],
        execute: function() {
            a._RF.push({}, "b8cedMU6N1LU6D2xO0rcmlz", "multi_lang_manager", void 0);
            n.ccclass,
            n.property,
            t("multi_lang_manager", function() {
                function t() {
                    g(this, "crt_language", "en"),
                    g(this, "lang_data", null),
                    this.init()
                }
                var a = t.prototype;
                return a.init = function() {
                    this.lang_data = new e
                }
                ,
                a.get_crt_language = function(t) {
                    this.crt_language = t
                }
                ,
                a.set_crt_language = function() {
                    var t, a = navigator.language;
                    "en" == (t = a ? a.substring(0, 2).toLowerCase() : "en") ? this.crt_language = "en" : "zh" == t ? this.crt_language = "tc" : "pt" == t ? this.crt_language = "pt" : "es" == t ? this.crt_language = "es" : "ru" == t ? this.crt_language = "ru" : "ja" == t ? this.crt_language = "jp" : "it" == t ? this.crt_language = "it" : "de" == t ? this.crt_language = "de" : "vi" == t ? this.crt_language = "vi" : "th" == t ? this.crt_language = "th" : "tr" == t ? this.crt_language = "tr" : "ko" == t && (this.crt_language = "kr")
                }
                ,
                a.language_string = function(t) {
                    return null == this.lang_data.data[t] ? t : null == this.lang_data.data[t][this.crt_language] ? this.lang_data.data[t].en : this.lang_data.data[t][this.crt_language]
                }
                ,
                a.format_string = function(t, a) {
                    var n = this.language_string(t);
                    return n = n.replace(/%s/gi, a)
                }
                ,
                t
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/player_node.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./game_config.ts", "./poker_card.ts", "./player_head.ts", "./hand_back.ts"], (function(_) {
    "use strict";
    var a, t, e, i, n, r, o, s, c, l, d, h, g, p, u, m, f, v, T, A, b, N, y, O, C, I, w;
    return {
        setters: [function(_) {
            a = _.cclegacy,
            t = _._decorator,
            e = _.Label,
            i = _.Sprite,
            n = _.Vec2,
            r = _.resources,
            o = _.Prefab,
            s = _.instantiate,
            c = _.tween,
            l = _.Vec3,
            d = _.Animation,
            h = _.color,
            g = _.Component
        }
        , function(_) {
            p = _.g_func,
            u = _.g_const
        }
        , function(_) {
            m = _.applyDecoratedDescriptor,
            f = _.inheritsLoose,
            v = _.initializerDefineProperty,
            T = _.assertThisInitialized,
            A = _.defineProperty,
            b = _.createForOfIteratorHelperLoose
        }
        , function(_) {
            N = _.g_type
        }
        , function(_) {
            y = _.g_instance
        }
        , function(_) {
            O = _.GAME_CONFIG
        }
        , function(_) {
            C = _.poker_card
        }
        , function(_) {
            I = _.player_head
        }
        , function(_) {
            w = _.hand_back
        }
        ],
        execute: function() {
            var E, U, D, M, L, R, k, x, S, H, G, P, F, z, B, V, Y, q, W, K, X, j, J, Q, Z, $, __, a_, t_, e_, i_, n_, r_, o_, s_, c_, l_, d_, h_, g_, p_, u_, m_, f_, v_, T_, A_, b_, N_, y_, O_;
            a._RF.push({}, "c3f95yHqIhCCIMvwmZiJQOb", "player_node", void 0);
            var C_ = t.ccclass
              , I_ = t.property;
            _("player_node", (E = C_("player_node"),
            U = I_(e),
            D = I_(e),
            M = I_(I),
            L = I_(i),
            R = I_(i),
            k = I_(i),
            x = I_(w),
            S = I_(w),
            H = I_(w),
            G = I_(w),
            P = I_(w),
            F = I_(i),
            z = I_(i),
            B = I_(e),
            V = I_(e),
            Y = I_(i),
            q = I_(i),
            W = I_(e),
            K = I_(e),
            X = I_(e),
            j = I_(i),
            J = I_(e),
            Q = I_(i),
            Z = I_(e),
            E((a_ = m((__ = function(_) {
                function a() {
                    for (var a, t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    return a = _.call.apply(_, [this].concat(e)) || this,
                    v(T(a), "lab_name", a_, T(a)),
                    v(T(a), "lab_chips", t_, T(a)),
                    v(T(a), "head_node", e_, T(a)),
                    v(T(a), "action_tag", i_, T(a)),
                    v(T(a), "squid_icon", n_, T(a)),
                    v(T(a), "tag_action_sittingout", r_, T(a)),
                    v(T(a), "hand_two", o_, T(a)),
                    v(T(a), "hand_three", s_, T(a)),
                    v(T(a), "hand_four", c_, T(a)),
                    v(T(a), "hand_five", l_, T(a)),
                    v(T(a), "hand_six", d_, T(a)),
                    v(T(a), "action_countdown_bg", h_, T(a)),
                    v(T(a), "action_progress", g_, T(a)),
                    v(T(a), "card_type_hint", p_, T(a)),
                    v(T(a), "card_low_type_hint", u_, T(a)),
                    v(T(a), "win_ani", m_, T(a)),
                    v(T(a), "insurance_ani", f_, T(a)),
                    v(T(a), "profit_lab", v_, T(a)),
                    v(T(a), "insurance_profit_lab", T_, T(a)),
                    v(T(a), "mystert_profit_lab", A_, T(a)),
                    v(T(a), "evchop_tag_bg", b_, T(a)),
                    v(T(a), "evchop_tag_lab", N_, T(a)),
                    v(T(a), "evchop_rate_bg", y_, T(a)),
                    v(T(a), "evchop_rate_lab", O_, T(a)),
                    A(T(a), "_crt_hand_back", null),
                    A(T(a), "show_index", null),
                    A(T(a), "player_index", null),
                    A(T(a), "is_me", !1),
                    A(T(a), "action_tag_pos", new n),
                    A(T(a), "player_card_list", []),
                    a
                }
                f(a, _);
                var t = a.prototype;
                return t.onLoad = function() {
                    y.evt_center.add_listener("EVT_HIGHLIGHT_PLAYER_HAND_CARD", this.on_player_card_highlight, this),
                    y.evt_center.add_listener("EVT_CARD_TYPE_HINT", this.update_card_type_hint, this)
                }
                ,
                t.onDestroy = function() {
                    y.evt_center.remove_listener("EVT_HIGHLIGHT_PLAYER_HAND_CARD", this.on_player_card_highlight),
                    y.evt_center.remove_listener("EVT_CARD_TYPE_HINT", this.update_card_type_hint)
                }
                ,
                t.set_data = function(_) {
                    this.player_index = _,
                    this.update_is_me()
                }
                ,
                t.update_show_index = function(_) {
                    this.show_index = _
                }
                ,
                t.init_ui = function() {
                    this.init_seat_base(),
                    this.pre_create_hand_card(),
                    this.create_player_hand_card(),
                    this.update_hand_cards_by_nlh31(),
                    this.create_other_player_card_back(),
                    this.create_show_card_active(),
                    this.refresh_evchop_win_rate_status(),
                    this.refresh_evchop_selected_tag()
                }
                ,
                t.init_seat_base = function() {
                    this.init_head_icon(),
                    this.init_seat_action_tag(),
                    this.init_fold_gray_mask(),
                    this.init_name_and_chips(),
                    this.init_action_countdown_progress(),
                    this.init_card_type_hint(),
                    this.init_squid_icon(),
                    this.win_ani.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.profit_lab.node.active = !1,
                    this.insurance_profit_lab.node.active = !1,
                    this.mystert_profit_lab.node.active = !1,
                    this.evchop_tag_bg.node.active = !1,
                    this.evchop_rate_bg.node.active = !1
                }
                ,
                t.update_is_me = function() {
                    var _ = y.game_mgr.my_uid
                      , a = y.game_mgr.get_player_key_data(this.player_index, "player_info");
                    this.is_me = a.uid == _
                }
                ,
                t.init_head_icon = function() {
                    var _ = "default:3"
                      , a = y.game_mgr.get_player_key_data(this.player_index, "player_info");
                    a.avatar && (_ = a.avatar),
                    y.game_mgr.is_enable_anonymity() && (_ = "default:52"),
                    this.head_node.refresh_head(_)
                }
                ,
                t.init_seat_action_tag = function() {
                    var _ = this;
                    this.action_tag.node.active = !1;
                    for (var a = 0, t = [O.ENUM_ACTION_TAG.ALLIN_TAG, O.ENUM_ACTION_TAG.FOLD_TAG, O.ENUM_ACTION_TAG.CALL_TAG, O.ENUM_ACTION_TAG.CHECK_TAG, O.ENUM_ACTION_TAG.RAISE_TAG, O.ENUM_ACTION_TAG.STRADDLE_TAG, O.ENUM_ACTION_TAG.BET_TAG, O.ENUM_ACTION_TAG.POT_TAG, O.ENUM_ACTION_TAG.BOMB_POT_TAG, O.ENUM_ACTION_TAG.VOLUNTARY_STRADDLE_TAG, O.ENUM_ACTION_TAG.VOLUNTARY_RESTRADDLE_TAG]; a < t.length; a++) {
                        var e = t[a]
                          , i = this.is_action_tag_visible(e);
                        (null == i ? void 0 : i.visible) ? p.load_texture(this.action_tag, i.img, (function() {
                            _.action_tag.node.active = !0
                        }
                        )) : this.action_tag.node.active = !1
                    }
                    this.refresh_action_tag_position()
                }
                ,
                t.is_action_tag_visible = function(_) {
                    var a = y.game_mgr.get_player_data(this.player_index)
                      , t = a.hold_hand || !1
                      , e = a.action_kind || ""
                      , i = a.playing_chips || 0;
                    function n() {
                        return e != O.ACTION_TO_NUM.ACTION_NONE && e != O.ACTION_TO_NUM.ACTION_CALL && e != O.ACTION_TO_NUM.ACTION_RAISE && e != O.ACTION_TO_NUM.ACTION_BET && e != O.ACTION_TO_NUM.ACTION_SB && e != O.ACTION_TO_NUM.ACTION_BB && e != O.ACTION_TO_NUM.ACTION_POST_BB && e != O.ACTION_TO_NUM.ACTION_POT && e != O.ACTION_TO_NUM.ACTION_ANTE || 0 != i ? e == O.ACTION_TO_NUM.ACTION_BOMB_POT && 0 == i || (e == O.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE && 0 == i || (e == O.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE && 0 == i || void 0)) : t
                    }
                    return _ == O.ENUM_ACTION_TAG.ALLIN_TAG ? {
                        visible: n(),
                        img: "main/action/tag_action_allin/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.FOLD_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_FOLD,
                        img: "main/action/tag_action_fold/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.CALL_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_CALL && t,
                        img: "main/action/tag_action_call/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.CHECK_TAG ? {
                        visible: e == O.ACTION_TO_NUM.ACTION_CHECK && t,
                        img: "main/action/tag_action_check/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.RAISE_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_RAISE && t,
                        img: "main/action/tag_action_raise/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.STRADDLE_TAG ? {
                        visible: !function() {
                            if ((e == O.ACTION_TO_NUM.ACTION_CALL || e == O.ACTION_TO_NUM.ACTION_RAISE || e == O.ACTION_TO_NUM.ACTION_BET || e == O.ACTION_TO_NUM.ACTION_SB || e == O.ACTION_TO_NUM.ACTION_BB || e == O.ACTION_TO_NUM.ACTION_POST_BB || e == O.ACTION_TO_NUM.ACTION_POT || e == O.ACTION_TO_NUM.ACTION_ANTE || e == O.ACTION_TO_NUM.ACTION_BOMB_POT) && 0 == i)
                                return !0
                        }() && e == O.ACTION_TO_NUM.ACTION_STRADDLE,
                        img: "main/action/tag_action_straddle/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.BET_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_BET && t,
                        img: "main/action/tag_action_bet/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.POT_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_POT && t,
                        img: "main/action/tag_action_pot/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.BOMB_POT_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_BOMB_POT,
                        img: "main/action/tag_action_call/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.VOLUNTARY_STRADDLE_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_VOLUNTARY_STRADDLE,
                        img: "main/action/tag_action_straddle/spriteFrame"
                    } : _ == O.ENUM_ACTION_TAG.VOLUNTARY_RESTRADDLE_TAG ? {
                        visible: !n() && e == O.ACTION_TO_NUM.ACTION_VOLUNTARY_RESTRADDLE,
                        img: "main/action/tag_action_restraddle/spriteFrame"
                    } : void 0
                }
                ,
                t.refresh_action_tag_position = function() {
                    var _ = y.game_mgr.seat_count || O.ENUM_POS_COUNT.POS_NINE
                      , a = u.NLH_PLO_ACTION_TAG_POS_RELACTIVE[_];
                    this.action_tag_pos = a[this.show_index],
                    this.action_tag.node.setPosition(this.action_tag_pos.x, this.action_tag_pos.y),
                    this.tag_action_sittingout.node.setPosition(this.action_tag_pos.x, this.action_tag_pos.y)
                }
                ,
                t.init_fold_gray_mask = function() {
                    var _, a = null === (_ = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.hand_ongoing, t = y.game_mgr.get_player_key_data(this.player_index, "action_kind"), e = a && t == O.ACTION_TO_NUM.ACTION_FOLD;
                    this.on_player_fold(e)
                }
                ,
                t.init_name_and_chips = function() {
                    var _ = y.game_mgr.get_player_data(this.player_index);
                    this.set_name(_.player_info.name),
                    this.set_chip(_.playing_chips)
                }
                ,
                t.set_name = function(_) {
                    y.game_mgr.is_enable_anonymity() && (_ = y.game_lang_mgr.language_string("MULTI_PLAYER") + (this.player_index + 1)),
                    this.lab_name.string = p.get_omit_string_with_width(this.lab_name, _, 110)
                }
                ,
                t.set_chip = function(_, a) {
                    a ? this.lab_chips.string = a : (_ = y.game_data_manager.convert_super_value_to_local(_),
                    this.lab_chips.string = p.display_number(_))
                }
                ,
                t.update_hand_cards_by_nlh31 = function() {
                    if (this.create_other_player_card_back(),
                    this.is_me && y.game_mgr.is_nlh31_discard_card)
                        for (var _, a = (null === (_ = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.seat_detail)[this.player_index].hand_cards, t = 0; t < this.player_card_list.length; t++) {
                            var e = this.player_card_list[t]
                              , i = a[t]
                              , n = e.getComponent(C);
                            i > 0 ? n.update_card(i) : e.active = !1
                        }
                }
                ,
                t.create_other_player_card_back = function() {
                    var _ = y.game_mgr.hand_count;
                    this.hand_two.node.active = !1,
                    this.hand_three.node.active = !1,
                    this.hand_four.node.active = !1,
                    this.hand_five.node.active = !1,
                    this.hand_six.node.active = !1,
                    _ == u.HAND_COUNT.TWO ? this._crt_hand_back = this.hand_two : _ == u.HAND_COUNT.THREE ? this._crt_hand_back = this.hand_three : _ == u.HAND_COUNT.FOUR ? this._crt_hand_back = this.hand_four : _ == u.HAND_COUNT.FIVE ? this._crt_hand_back = this.hand_five : _ == u.HAND_COUNT.SIX && (this._crt_hand_back = this.hand_six),
                    this._crt_hand_back.node.active = !0,
                    this._crt_hand_back.set_all_visible(this.is_card_back_visible())
                }
                ,
                t.create_show_card_active = function() {
                    var _ = y.game_mgr.is_show_card_active
                      , a = y.game_mgr.enter_room_data.texas_game_detail.show_card_active_data;
                    if (_ && a) {
                        var t = y.game_mgr.enter_room_data.texas_game_detail.seat_detail[this.player_index];
                        if (t && t.is_on_seat) {
                            for (var e, i, n, r = b(a); !(n = r()).done; ) {
                                var o = n.value;
                                o.seat_id == this.player_index && (e = o.show_card,
                                i = o.card_hands)
                            }
                            if (!e)
                                return;
                            for (var s = y.game_mgr.hand_count, c = 0; c < s; c++) {
                                for (var l = this.player_card_list[c], d = l.getComponent(C), h = d.get_card_code(), g = !1, p = 0; p < i.length; p++)
                                    if (i[p] == h) {
                                        g = e[p];
                                        break
                                    }
                                if (1 == g ? l && (l.active = !0,
                                d.show_gray_mask(!1),
                                d.show_card_hide_ani_active()) : l && (l.active = !0,
                                d.show_gray_mask(!1),
                                d.show_card_hide_ani()),
                                c == s - 1)
                                    if (this.is_me)
                                        t.action_kind == O.ACTION_TO_NUM.ACTION_FOLD && this.refresh_fold_gray_bg(!0)
                            }
                        }
                    }
                }
                ,
                t.set_hand_card_back_visible = function(_, a) {
                    this._crt_hand_back && (null == a ? this._crt_hand_back.set_all_visible(_) : this._crt_hand_back.set_visible_with_index(a, _))
                }
                ,
                t.on_player_fold = function(_) {
                    this.head_node.set_player_fold(_)
                }
                ,
                t.pre_create_hand_card = function() {
                    for (var _, a = this, t = y.game_data_manager.json_data, e = y.game_mgr.hand_count, i = [], n = b(t.playerHands); !(_ = n()).done; ) {
                        var c = _.value;
                        c.seat_id == this.player_index && (i.push(c.card1),
                        i.push(c.card2),
                        i.push(c.card3),
                        i.push(c.card4),
                        i.push(c.card5),
                        i.push(c.card6))
                    }
                    i.sort((function(_, a) {
                        return Math.floor(_ % 256) < Math.floor(a % 256) ? 1 : Math.floor(_ % 256) > Math.floor(a % 256) ? -1 : 0
                    }
                    ));
                    for (var l = 0; l < e; l++)
                        i[l] > 0 ? function() {
                            var _ = i[l];
                            if (a.player_card_list[l])
                                ;
                            else {
                                var t = l;
                                r.load("prefabs/poker_card", o, (function(e, i) {
                                    var n = s(i);
                                    n.parent = a.node;
                                    var r = a.get_player_hand_card_pos(t);
                                    n.setPosition(r.x, r.y),
                                    n.active = !1,
                                    n.getComponent(C).update_card(_),
                                    n.setScale(O.HAND_CARD_SCALE, O.HAND_CARD_SCALE, O.HAND_CARD_SCALE),
                                    a.player_card_list.push(n)
                                }
                                ))
                            }
                        }() : this.player_card_list[l] || function() {
                            var _ = l;
                            r.load("prefabs/poker_card", o, (function(t, e) {
                                var i = s(e);
                                i.parent = a.node;
                                var n = a.get_player_hand_card_pos(_);
                                i.setPosition(n.x, n.y),
                                i.active = !1;
                                i.getComponent(C);
                                i.setScale(O.HAND_CARD_SCALE, O.HAND_CARD_SCALE, O.HAND_CARD_SCALE),
                                a.player_card_list.push(i)
                            }
                            ))
                        }()
                }
                ,
                t.create_player_hand_card = function() {
                    var _ = this
                      , a = y.game_mgr.get_player_data(this.player_index)
                      , t = a.hand_cards
                      , e = y.game_mgr.hand_count;
                    if (!t || t && 0 == t.length) {
                        if (this.player_card_list && this.player_card_list.length > 0)
                            for (var i, n = b(this.player_card_list); !(i = n()).done; ) {
                                i.value.active = this.is_player_hand_card_visible()
                            }
                    } else
                        for (var c = function() {
                            var i = l
                              , n = t[l] || 0;
                            if (n > 0)
                                if (_.player_card_list[l]) {
                                    var c = _.player_card_list[l];
                                    c.active = _.is_player_hand_card_visible();
                                    var d = c.getComponent(C);
                                    if (d.update_card(n),
                                    d.show_gray_mask(!1),
                                    d.show_eye(!1),
                                    i == e - 1)
                                        if (_.is_me)
                                            a.action_kind == O.ACTION_TO_NUM.ACTION_FOLD && _.refresh_fold_gray_bg(!0)
                                } else
                                    r.load("prefabs/poker_card", o, (function(t, r) {
                                        var o = s(r);
                                        o.parent = _.node;
                                        var c = _.get_player_hand_card_pos(i);
                                        (o.setPosition(c.x, c.y),
                                        o.active = _.is_player_hand_card_visible(),
                                        o.getComponent(C).update_card(n),
                                        o.setScale(O.HAND_CARD_SCALE, O.HAND_CARD_SCALE, O.HAND_CARD_SCALE),
                                        _.player_card_list.push(o),
                                        i == e - 1) && (_.is_me && a.action_kind == O.ACTION_TO_NUM.ACTION_FOLD && _.refresh_fold_gray_bg(!0))
                                    }
                                    ))
                        }, l = 0; l < e; l++)
                            c()
                }
                ,
                t.get_player_hand_card_pos = function(_) {
                    var a = 26
                      , t = y.game_mgr.hand_count
                      , e = 0;
                    y.game_mgr.seat_count || O.ENUM_POS_COUNT.POS_NINE;
                    return this.is_me ? t == O.HAND_CARD_COUNT.TWO || t == O.HAND_CARD_COUNT.FOUR || t == O.HAND_CARD_COUNT.FIVE ? e = 110 : t == O.HAND_CARD_COUNT.SIX && (e = 110,
                    a = 30) : t == O.HAND_CARD_COUNT.TWO ? (e = -36,
                    a = 72) : t == O.HAND_CARD_COUNT.FOUR ? e = -26 : (t == O.HAND_CARD_COUNT.FIVE || t == O.HAND_CARD_COUNT.SIX) && (e = -52),
                    {
                        x: e + a * _,
                        y: 4
                    }
                }
                ,
                t.is_player_hand_card_visible = function() {
                    var _, a, t, e = y.game_mgr.get_player_data(this.player_index), i = e.action_kind, n = !0;
                    (!(null === (_ = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.hand_ongoing) || !e.is_on_seat || i == O.ACTION_TO_NUM.ACTION_SITED || e.hand_cards && 0 == e.hand_cards.length) && (n = !1);
                    var r = null === (a = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === a ? void 0 : a.allin
                      , o = (null === (t = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === t ? void 0 : t.seat_detail)[this.player_index]
                      , s = (null == o ? void 0 : o.hand_cards) || [];
                    return r && s.length > 0 && (n = !0),
                    n
                }
                ,
                t.refresh_fold_gray_bg = function(_) {
                    if (void 0 === _ && (_ = !1),
                    this.on_player_fold(_),
                    this.is_me)
                        for (var a, t = b(this.player_card_list); !(a = t()).done; ) {
                            a.value.getComponent(C).show_gray_mask(!0)
                        }
                }
                ,
                t.is_card_back_visible = function() {
                    var _, a, t = y.game_mgr.get_player_data(this.player_index), e = t.action_kind, i = !0;
                    y.game_mgr.enter_room_data.texas_game_detail.hand_ongoing && t.hold_hand && !this.is_me && e != O.ACTION_TO_NUM.ACTION_SITED && e != O.ACTION_TO_NUM.ACTION_FOLD || (i = !1);
                    var n = null === (_ = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.allin
                      , r = (null === (a = y.game_mgr.enter_room_data.texas_game_detail) || void 0 === a ? void 0 : a.seat_detail)[this.player_index]
                      , o = (null == r ? void 0 : r.hand_cards) || [];
                    n && o.length > 0 && (i = !1);
                    var s = y.game_mgr.is_show_card_active
                      , c = y.game_mgr.enter_room_data.texas_game_detail.show_card_active_data;
                    if (s && c)
                        for (var l, d = b(c); !(l = d()).done; ) {
                            l.value.seat_id == this.player_index && (i = !1)
                        }
                    return i
                }
                ,
                t.on_player_card_highlight = function(_) {
                    var a = _.data.max_comb
                      , t = _.data.is_show_down;
                    if (a)
                        for (var e, i = b(this.player_card_list); !(e = i()).done; ) {
                            var n = e.value.getComponent(C);
                            n.show_gray_mask(!1),
                            n.show_high_light(!1);
                            for (var r, o = n.code, s = !1, c = b(a); !(r = c()).done; ) {
                                if (r.value.x_code == o) {
                                    n.show_high_light(!0),
                                    s = !0;
                                    break
                                }
                            }
                            0 != o && n.show_gray_mask(!s && t)
                        }
                }
                ,
                t.init_action_countdown_progress = function() {
                    this.action_countdown_bg.node.active = !0,
                    this.action_progress.fillRange = 0
                }
                ,
                t.updata_action_countdown_progress = function(_) {
                    var a = this;
                    this.action_progress.unscheduleAllCallbacks(),
                    this.action_progress.fillRange = 0,
                    this.action_countdown_bg.node.active = _,
                    _ && this.action_progress.schedule((function() {
                        a.action_progress.fillRange = a.action_progress.fillRange - .01,
                        a.action_progress.fillRange <= -.09 && (a.action_progress.unscheduleAllCallbacks(),
                        a.action_countdown_bg.node.active = !1)
                    }
                    ), .1)
                }
                ,
                t.refresh_seat_action_tag = function(_, a) {
                    var t = this;
                    void 0 === a && (a = []);
                    var e = this.is_action_tag_visible(_);
                    if (null == e ? void 0 : e.visible)
                        p.load_texture(this.action_tag, e.img, (function() {
                            t.action_tag.node.active = !0
                        }
                        ));
                    else if (a && a.length > 0)
                        for (var i, n = b(a); !(i = n()).done; ) {
                            var r = i.value
                              , o = this.is_action_tag_visible(r);
                            if (null == o ? void 0 : o.visible) {
                                p.load_texture(this.action_tag, o.img, (function() {
                                    t.action_tag.node.active = !0
                                }
                                ));
                                break
                            }
                            this.action_tag.node.active = !1
                        }
                    else
                        this.action_tag.node.active = !1
                }
                ,
                t.refresh_player_hand_card_visible = function(_) {
                    for (var a, t = b(this.player_card_list); !(a = t()).done; ) {
                        a.value.active = _
                    }
                }
                ,
                t.refresh_player_card_back_visible = function(_) {
                    this.set_hand_card_back_visible(_)
                }
                ,
                t.get_card_back_pos = function() {
                    return this._crt_hand_back.node.position
                }
                ,
                t.show_my_hand_card = function(_, a) {
                    var t = this
                      , e = y.game_mgr.enter_room_data.texas_game_detail.seat_detail[this.player_index]
                      , i = e.hand_cards;
                    if (e && e.is_on_seat) {
                        var n = i[_];
                        if (n && n > 0)
                            if (this.player_card_list[_]) {
                                var c = this.player_card_list[_];
                                c.active = !0;
                                var l = c.getComponent(C);
                                l.update_card(n),
                                l.show_gray_mask(!1),
                                a && l.play_turn_card_ani()
                            } else
                                r.load("prefabs/poker_card", o, (function(e, i) {
                                    var r = s(i);
                                    r.parent = t.node;
                                    var o = t.get_player_hand_card_pos(_);
                                    r.setPosition(o.x, o.y),
                                    r.active = !0;
                                    var c = r.getComponent(C);
                                    c.update_card(n),
                                    r.setScale(O.HAND_CARD_SCALE, O.HAND_CARD_SCALE, O.HAND_CARD_SCALE),
                                    t.player_card_list.push(r),
                                    a && c.play_turn_card_ani()
                                }
                                ))
                    }
                }
                ,
                t.show_my_hand_card_active = function(_, a) {
                    var t = y.game_mgr.enter_room_data.texas_game_detail.seat_detail[this.player_index];
                    if (t && t.is_on_seat && this.player_card_list[_]) {
                        var e = this.player_card_list[_];
                        e.active = !0;
                        for (var i = e.getComponent(C), n = i.get_card_code(), r = !1, o = 0; o < a.card_hands.length; o++)
                            if (a.card_hands[o] == n) {
                                r = a.show_card[o];
                                break
                            }
                        r ? i.play_turn_card_ani_active() : i.show_card_hide_ani_active(!1)
                    }
                }
                ,
                t.play_head_spining_animation = function() {
                    c(this.head_node.node).to(0, {
                        scale: new l(.43,.43,0)
                    }).to(.03, {
                        scale: new l(.425,.425,0)
                    }).to(.03, {
                        scale: new l(.48,.48,0)
                    }).to(.03, {
                        scale: new l(.43,.43,0)
                    }).to(.03, {
                        scale: new l(.505,.505,0)
                    }).to(.03, {
                        scale: new l(.5,.5,0)
                    }).start()
                }
                ,
                t.init_card_type_hint = function() {
                    this.card_type_hint.node.active = !1,
                    this.card_low_type_hint.node.active = !1
                }
                ,
                t.update_card_type_hint = function(_) {
                    if (this.is_me) {
                        var a = y.game_mgr.game_sub_kind
                          , t = _.data.is_show
                          , e = _.data.card_type
                          , i = y.game_lang_mgr.language_string(e);
                        this.card_type_hint.node.active = t || !1,
                        this.card_type_hint.string = i || "";
                        var n = y.game_lang_mgr.language_string(_.data.low_card_type);
                        N.is_plo_hilo_room(a) ? (this.card_low_type_hint.node.active = t || !1,
                        this.card_type_hint.string = y.game_lang_mgr.language_string("MULTI_HI") + ": " + i,
                        this.card_low_type_hint.string = y.game_lang_mgr.language_string("MULTI_LOW") + ": " + n) : this.card_low_type_hint.node.active = !1;
                        var r = N.is_double_board_room(y.game_mgr.game_sub_kind)
                          , o = y.game_mgr.room_info_data.enable_db_when_bomb_pot
                          , s = y.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand;
                        (r || s && o) && (this.card_low_type_hint.node.active = !0,
                        this.card_low_type_hint.string = n)
                    }
                }
                ,
                t.play_win_chips_ani = function() {
                    var _ = this;
                    this.win_ani.node.active = !0;
                    var a = this.win_ani.getComponent(d);
                    a.on(d.EventType.FINISHED, (function() {
                        _.win_ani.node.active = !1
                    }
                    ), this),
                    a.play("win_chips")
                }
                ,
                t.play_insurance_chips_ani = function(_) {
                    var a = this;
                    this.insurance_ani.node.active = !0;
                    var t = this.insurance_ani.getComponent(d);
                    t.on(d.EventType.FINISHED, (function() {
                        a.insurance_ani.node.active = !1,
                        _ && _()
                    }
                    ), this),
                    t.play("buy_insurance")
                }
                ,
                t.play_profit_animation = function(_) {
                    var a = this;
                    this.insurance_profit_lab.node.active = !1,
                    this.mystert_profit_lab.node.active = !1,
                    this.profit_lab.node.active = !0,
                    this.profit_lab.string = _,
                    this.profit_lab.node.setPosition(0, 60),
                    c(this.profit_lab.node).to(.2, {
                        position: new l(0,90)
                    }, {
                        easing: "quadOut"
                    }).delay(.8).call((function() {
                        a.profit_lab.node.active = !1
                    }
                    )).start()
                }
                ,
                t.play_mystert_animation = function(_) {
                    var a = this;
                    this.insurance_profit_lab.node.active = !1,
                    this.mystert_profit_lab.node.active = !1,
                    this.mystert_profit_lab.string = _,
                    this.mystert_profit_lab.node.setPosition(0, 60),
                    c(this.mystert_profit_lab.node).delay(1).call((function() {
                        a.mystert_profit_lab.node.active = !0
                    }
                    )).to(.2, {
                        position: new l(0,90)
                    }, {
                        easing: "quadOut"
                    }).delay(.8).call((function() {
                        a.mystert_profit_lab.node.active = !1
                    }
                    )).start()
                }
                ,
                t.play_insurance_profit_animation = function(_) {
                    this.profit_lab.node.active = !1,
                    this.mystert_profit_lab.node.active = !1,
                    this.insurance_profit_lab.node.active = !0,
                    this.insurance_profit_lab.string = _,
                    this.insurance_profit_lab.node.setPosition(0, 60),
                    c(this.insurance_profit_lab.node).to(.2, {
                        position: new l(0,90)
                    }, {
                        easing: "quadOut"
                    }).start()
                }
                ,
                t.refresh_insurance_chips_visible = function(_) {
                    void 0 === _ && (_ = -1),
                    _ >= 0 ? (this.profit_lab.node.active = !1,
                    this.mystert_profit_lab.node.active = !1,
                    this.insurance_profit_lab.node.active = !0,
                    _ = y.game_data_manager.convert_super_value_to_local(_),
                    this.insurance_profit_lab.string = p.display_number(_),
                    this.insurance_profit_lab.node.setPosition(0, 90)) : this.insurance_profit_lab.node.active = !1
                }
                ,
                t.refresh_evchop_win_rate_status = function() {
                    var _ = this;
                    this.evchop_rate_bg.node.active = !1;
                    var a = y.game_mgr.get_player_key_data(this.player_index, "player_info");
                    if (a) {
                        var t = y.game_mgr.enter_room_data.texas_game_detail.evchop_data
                          , e = !1
                          , i = "main/river_outs_under/spriteFrame";
                        this.evchop_rate_bg.node.active = !1,
                        this.evchop_rate_lab.color = h(255, 98, 95, 255);
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (a.uid == r.uid) {
                                this.evchop_rate_lab.string = r.wpct / 100 + "%",
                                r.status == O.ENUM_EVCHOP_PLAYER_STATUS.EVCHOP_PLAYER_STATUS_WAIT && (e = !0),
                                r.is_highest && (i = "main/river_outs_leader/spriteFrame",
                                this.evchop_rate_lab.color = h(104, 232, 173, 255));
                                break
                            }
                        }
                        p.load_texture(this.evchop_rate_bg, i, (function() {
                            _.evchop_rate_bg.node.active = e
                        }
                        ))
                    }
                }
                ,
                t.refresh_evchop_selected_tag = function() {
                    this.evchop_tag_bg.node.active = !1;
                    var _ = y.game_mgr.get_player_key_data(this.player_index, "player_info");
                    if (_) {
                        for (var a = y.game_mgr.enter_room_data.texas_game_detail.evchop_data, t = !1, e = 0; e < a.length; e++) {
                            var i = a[e];
                            if (_.uid == i.uid) {
                                i.status == O.ENUM_EVCHOP_PLAYER_STATUS.EVCHOP_PLAYER_STATUS_CONFIRM && (this.evchop_tag_lab.string = y.game_lang_mgr.language_string("MULTI_EVCHOP"),
                                t = !0);
                                break
                            }
                        }
                        this.evchop_tag_bg.node.active = t
                    }
                }
                ,
                t.init_squid_icon = function() {
                    if (this.squid_icon.node.active = !1,
                    y.game_mgr.is_squid_room()) {
                        var _ = y.game_mgr.get_player_data(this.player_index).squid_count || 0;
                        y.game_mgr.is_squid_ing() && _ > 0 && (this.squid_icon.node.active = !0)
                    }
                }
                ,
                a
            }(g)).prototype, "lab_name", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            t_ = m(__.prototype, "lab_chips", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            e_ = m(__.prototype, "head_node", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            i_ = m(__.prototype, "action_tag", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            n_ = m(__.prototype, "squid_icon", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            r_ = m(__.prototype, "tag_action_sittingout", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            o_ = m(__.prototype, "hand_two", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            s_ = m(__.prototype, "hand_three", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            c_ = m(__.prototype, "hand_four", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            l_ = m(__.prototype, "hand_five", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d_ = m(__.prototype, "hand_six", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h_ = m(__.prototype, "action_countdown_bg", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g_ = m(__.prototype, "action_progress", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p_ = m(__.prototype, "card_type_hint", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            u_ = m(__.prototype, "card_low_type_hint", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m_ = m(__.prototype, "win_ani", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f_ = m(__.prototype, "insurance_ani", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v_ = m(__.prototype, "profit_lab", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T_ = m(__.prototype, "insurance_profit_lab", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A_ = m(__.prototype, "mystert_profit_lab", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b_ = m(__.prototype, "evchop_tag_bg", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N_ = m(__.prototype, "evchop_tag_lab", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y_ = m(__.prototype, "evchop_rate_bg", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O_ = m(__.prototype, "evchop_rate_lab", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $ = __)) || $));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/xconfig.ts", ["cc"], (function(c) {
    "use strict";
    var t;
    return {
        setters: [function(c) {
            t = c.cclegacy
        }
        ],
        execute: function() {
            var e, i;
            c("X_CONFIG", void 0),
            t._RF.push({}, "c7fbf0+UTlD6atPmIA7q/Q4", "xconfig", void 0),
            (i = e || (e = c("X_CONFIG", {}))).SHOW_LOG = !0,
            i.RUNTIME_MODE = 2,
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/global_descriptor.ts", ["cc"], (function(n) {
    "use strict";
    var t;
    return {
        setters: [function(n) {
            t = n.cclegacy
        }
        ],
        execute: function() {
            n({
                x_instance_descriptor: function() {
                    return function(n) {
                        n._instance = null,
                        n.get_instance = function() {
                            return null == n._instance && (n._instance = new n),
                            n._instance
                        }
                    }
                },
                x_set_get_property: function(n) {
                    return function(t, e) {
                        t[e] = n,
                        t["set" + e] = function(n) {
                            t[e] = n
                        }
                        ,
                        t["get" + e] = function() {
                            return null == t[e] ? n : t[e]
                        }
                    }
                }
            }),
            t._RF.push({}, "cb66eignIJO1IanOgUU2Wym", "global_descriptor", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/poker_card.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts"], (function(i) {
    "use strict";
    var n, e, t, a, r, o, c, s, _, h, u, d, l, p;
    return {
        setters: [function(i) {
            n = i.cclegacy,
            e = i._decorator,
            t = i.Sprite,
            a = i.Animation,
            r = i.Component
        }
        , function(i) {
            o = i.g_card,
            c = i.g_func
        }
        , function(i) {
            s = i.applyDecoratedDescriptor,
            _ = i.inheritsLoose,
            h = i.initializerDefineProperty,
            u = i.assertThisInitialized,
            d = i.defineProperty,
            l = i.createClass
        }
        , function(i) {
            p = i.g_instance
        }
        ],
        execute: function() {
            var g, v, f, y, w, m, b, k, z, E, I, S, C, D, F;
            n._RF.push({}, "dcc60B5bKpPsZEWfKXCjPbp", "poker_card", void 0);
            var P = e.ccclass
              , H = e.property;
            i("poker_card", (g = P("poker_card"),
            v = H(t),
            f = H(t),
            y = H(t),
            w = H(t),
            m = H(t),
            b = H(t),
            g((E = s((z = function(i) {
                function n() {
                    for (var n, e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    return n = i.call.apply(i, [this].concat(t)) || this,
                    h(u(n), "card", E, u(n)),
                    h(u(n), "eye", I, u(n)),
                    h(u(n), "turn_ani", S, u(n)),
                    h(u(n), "high_light", C, u(n)),
                    h(u(n), "card_mask", D, u(n)),
                    h(u(n), "insurance_ani", F, u(n)),
                    d(u(n), "_code", 0),
                    n
                }
                _(n, i);
                var e = n.prototype;
                return e.onLoad = function() {
                    this.show_card_hide_ani()
                }
                ,
                e.update_card = function(i) {
                    this.code = i;
                    var n = o.get_card_image_by_code(i);
                    c.load_texture(this.card, n)
                }
                ,
                e.get_card_code = function() {
                    return this.code
                }
                ,
                e.play_turn_card_ani = function() {
                    this.card.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.turn_ani.node.active = !0,
                    this.show_eye(!1),
                    this.show_gray_mask(!1),
                    this.show_high_light(!1);
                    var i = this.turn_ani.getComponent(a);
                    i.on(a.EventType.FINISHED, this.on_turn_ani_end, this),
                    i.play("turn_card");
                    var n = i.getState("turn_card");
                    n.speed = p.game_mgr.animation_speed * n.speed
                }
                ,
                e.play_turn_card_ani_active = function() {
                    this.card.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.turn_ani.node.active = !0,
                    this.show_eye(!1);
                    var i = this.turn_ani.getComponent(a);
                    i.on(a.EventType.FINISHED, this.show_card_hide_ani_active, this),
                    i.play("turn_card");
                    var n = i.getState("turn_card");
                    n.speed = p.game_mgr.animation_speed * n.speed
                }
                ,
                e.on_turn_ani_end = function() {
                    this.show_card_hide_ani()
                }
                ,
                e.play_insurance_ani = function() {
                    this.card.node.active = !0,
                    this.turn_ani.node.active = !1,
                    this.insurance_ani.node.active = !0,
                    this.show_eye(!1),
                    this.show_gray_mask(!1),
                    this.show_high_light(!1);
                    var i = this.insurance_ani.getComponent(a);
                    i.on(a.EventType.FINISHED, this.on_turn_ani_end, this),
                    i.play("insurance")
                }
                ,
                e.on_insurance_ani_end = function() {
                    this.show_card_hide_ani()
                }
                ,
                e.show_multi_card = function() {
                    this.card.node.active = !0,
                    this.turn_ani.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.show_eye(!1),
                    this.show_gray_mask(!0),
                    this.show_high_light(!1)
                }
                ,
                e.show_card_hide_ani = function() {
                    this.card.node.active = !0,
                    this.turn_ani.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.show_eye(!1),
                    this.show_gray_mask(!1),
                    this.show_high_light(!1)
                }
                ,
                e.show_card_hide_ani_active = function(i) {
                    void 0 === i && (i = !0),
                    this.card.node.active = !0,
                    this.turn_ani.node.active = !1,
                    this.insurance_ani.node.active = !1,
                    this.show_eye(i)
                }
                ,
                e.show_eye = function(i) {
                    void 0 === i && (i = !1),
                    this.eye.node.active = i
                }
                ,
                e.show_gray_mask = function(i) {
                    void 0 === i && (i = !1),
                    this.card_mask.node.active = i
                }
                ,
                e.show_high_light = function(i) {
                    void 0 === i && (i = !1),
                    this.high_light.node.active = i
                }
                ,
                l(n, [{
                    key: "code",
                    get: function() {
                        return this._code
                    },
                    set: function(i) {
                        this._code = i
                    }
                }]),
                n
            }(r)).prototype, "card", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = s(z.prototype, "eye", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = s(z.prototype, "turn_ani", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            C = s(z.prototype, "high_light", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = s(z.prototype, "card_mask", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = s(z.prototype, "insurance_ani", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = z)) || k));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/player_control.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./mius.ts", "./game_config.ts"], (function(t) {
    "use strict";
    var e, _, i, n, a, o, r, s, c, l, u, h, d, g, b, p, m, f;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            _ = t._decorator,
            i = t.Sprite,
            n = t.Label,
            a = t.Button,
            o = t.UIOpacity,
            r = t.sys,
            s = t.tween,
            c = t.Vec3,
            l = t.Component
        }
        , function(t) {
            u = t.g_func
        }
        , function(t) {
            h = t.applyDecoratedDescriptor,
            d = t.inheritsLoose,
            g = t.initializerDefineProperty,
            b = t.assertThisInitialized,
            p = t.defineProperty
        }
        , function(t) {
            m = t.g_instance
        }
        , function(t) {
            f = t.GAME_CONFIG
        }
        ],
        execute: function() {
            var v, x, y, w, k, A, E, T, C, M, R, S, L, P, G, D, I, N, O, z, H, U, V, Y, B, q, W;
            e._RF.push({}, "de33eX1nLZCjbsR69clqF8G", "player_control", void 0);
            var F = _.ccclass
              , j = _.property;
            t("player_control", (v = F("player_control"),
            x = j(i),
            y = j(n),
            w = j(n),
            k = j(i),
            A = j(a),
            E = j(a),
            T = j(a),
            C = j(a),
            M = j(a),
            R = j(i),
            S = j(a),
            L = j(a),
            v((D = h((G = function(t) {
                function e() {
                    for (var e, _ = arguments.length, i = new Array(_), n = 0; n < _; n++)
                        i[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(i)) || this,
                    g(b(e), "top_bg", D, b(e)),
                    g(b(e), "free_lab", I, b(e)),
                    g(b(e), "title_lab", N, b(e)),
                    g(b(e), "bottom_bg", O, b(e)),
                    g(b(e), "play_btn", z, b(e)),
                    g(b(e), "pause_btn", H, b(e)),
                    g(b(e), "replay_btn", U, b(e)),
                    g(b(e), "backward_btn", V, b(e)),
                    g(b(e), "forward_btn", Y, b(e)),
                    g(b(e), "progress_bar", B, b(e)),
                    g(b(e), "sound_on_btn", q, b(e)),
                    g(b(e), "sound_off_btn", W, b(e)),
                    p(b(e), "CD_time", .1),
                    p(b(e), "is_touch", !1),
                    p(b(e), "cur_index", -1),
                    p(b(e), "cur_state", f.GAME_PLAY_STATE.GAME_PAUSE),
                    p(b(e), "title_lab_data", []),
                    p(b(e), "cur_title_lab_index", 0),
                    p(b(e), "is_move_top_bottom_bg", !1),
                    p(b(e), "is_top_bottom_bg_show", !0),
                    e
                }
                d(e, t);
                var _ = e.prototype;
                return _.onLoad = function() {
                    m.evt_center.add_listener("game_open", this.on_click_open, this),
                    m.evt_center.add_listener("game_play", this.on_click_game_play, this),
                    m.evt_center.add_listener("game_pause", this.on_click_game_pause, this),
                    m.evt_center.add_listener("fast_backward", this.on_click_fast_backward, this),
                    m.evt_center.add_listener("fast_forward", this.on_click_fast_forward, this),
                    m.evt_center.add_listener("game_replay", this.on_click_game_replay, this),
                    m.evt_center.add_listener("sound_on", this.on_click_sound_on, this),
                    m.evt_center.add_listener("sound_off", this.on_click_sound_off, this),
                    m.evt_center.add_listener("EVT_GAME_ATTEMP_DONE", this.on_game_attemp_done, this)
                }
                ,
                _.onDestroy = function() {
                    m.evt_center.remove_listener("game_open", this.on_click_open),
                    m.evt_center.remove_listener("game_play", this.on_click_game_play),
                    m.evt_center.remove_listener("game_pause", this.on_click_game_pause),
                    m.evt_center.remove_listener("fast_backward", this.on_click_fast_backward),
                    m.evt_center.remove_listener("fast_forward", this.on_click_fast_forward),
                    m.evt_center.remove_listener("game_replay", this.on_click_game_replay),
                    m.evt_center.remove_listener("sound_on", this.on_click_sound_on),
                    m.evt_center.remove_listener("sound_off", this.on_click_sound_off),
                    m.evt_center.remove_listener("EVT_GAME_ATTEMP_DONE", this.on_game_attemp_done)
                }
                ,
                _.onEnable = function() {
                    this.top_bg.addComponent(o),
                    this.free_lab.string = m.game_lang_mgr.language_string("MULTI_H5_HANDREVIEW_TIPS4"),
                    this.title_lab.addComponent(o),
                    this.title_show(),
                    this.bottom_bg.addComponent(o),
                    this.play_btn.node.active = !1,
                    this.replay_btn.node.active = !1,
                    this.pause_btn.node.active = !1,
                    this.bottom_bg.node.active = !1,
                    this.progress_bar.fillRange = 0,
                    this.sound_state()
                }
                ,
                _.start = function() {
                    this.bottom_bg.node.active = !0,
                    this.game_play()
                }
                ,
                _.on_click_open = function() {
                    navigator.userAgent.toLowerCase(),
                    Boolean(navigator.userAgent.match(/android/gi));
                    var t = Boolean(navigator.userAgent.match(/iphone|ipod/gi))
                      , e = Boolean(navigator.userAgent.match(/ipad/gi));
                    Boolean(navigator.userAgent.match(/MicroMessenger/gi));
                    e || t ? r.openURL("https://apps.apple.com/us/app/x-poker-poker-with-friends/id1534470447") : r.openURL("https://play.google.com/store/apps/details?id=com.game.android.xpoker")
                }
                ,
                _.on_click_game_play = function() {
                    var t = this;
                    this.is_touch || (this.is_touch = !0,
                    u.do_action_delay(this, (function() {
                        t.game_play()
                    }
                    ), this.CD_time))
                }
                ,
                _.game_play = function() {
                    this.is_touch = !1,
                    this.pause_btn.node.active = !0,
                    this.play_btn.node.active = !1,
                    this.replay_btn.node.active = !1,
                    this.cur_state = f.GAME_PLAY_STATE.GAME_PLAY,
                    m.game_mgr.game_control_state = this.cur_state,
                    0 == m.game_task_queue.get_task_lenght() && this.on_game_attemp_done(),
                    this.btn_state()
                }
                ,
                _.on_click_game_pause = function() {
                    var t = this;
                    this.is_touch || (this.is_touch = !0,
                    u.do_action_delay(this, (function() {
                        t.game_pause()
                    }
                    ), this.CD_time))
                }
                ,
                _.game_pause = function() {
                    this.is_touch = !1,
                    this.pause_btn.node.active = !1,
                    this.replay_btn.node.active = !1,
                    this.play_btn.node.active = !0,
                    this.cur_state = f.GAME_PLAY_STATE.GAME_PAUSE,
                    m.game_mgr.game_control_state = this.cur_state,
                    this.btn_state(!1)
                }
                ,
                _.on_click_fast_backward = function() {
                    var t = this;
                    u.x_log("game_backward", m.game_task_queue.is_task_runing()),
                    this.is_touch || (this.is_touch = !0,
                    u.do_action_delay(this, (function() {
                        t.game_backward()
                    }
                    ), this.CD_time))
                }
                ,
                _.game_backward = function() {
                    if (m.game_task_queue.is_task_runing())
                        return this.updata_progress(!1),
                        void this.game_pause();
                    this.is_touch = !1,
                    this.pause_btn.node.active = !1,
                    this.play_btn.node.active = !0,
                    this.replay_btn.node.active = !1,
                    this.cur_state = f.GAME_PLAY_STATE.GAME_BACKWARD,
                    m.game_mgr.game_control_state = this.cur_state,
                    m.game_mgr.set_choose_game_s2c_data(),
                    this.run_last_index_data(),
                    m.evt_center.dispatch_event("EVT_RECONNECT_ENTER_ROOM", {}),
                    this.btn_state(!1)
                }
                ,
                _.on_click_fast_forward = function() {
                    var t = this;
                    this.is_touch || (this.is_touch = !0,
                    u.do_action_delay(this, (function() {
                        t.game_forward()
                    }
                    ), this.CD_time))
                }
                ,
                _.game_forward = function() {
                    if (u.x_log("on_click_fast_forward", m.game_task_queue.is_task_runing()),
                    m.game_task_queue.is_task_runing())
                        return this.updata_progress(!1),
                        void this.game_pause();
                    this.is_touch = !1,
                    this.pause_btn.node.active = !1,
                    this.replay_btn.node.active = !1,
                    this.play_btn.node.active = !0,
                    this.cur_state = f.GAME_PLAY_STATE.GAME_BACKWARD,
                    m.game_mgr.game_control_state = this.cur_state,
                    m.game_mgr.set_choose_game_s2c_data(),
                    this.run_next_index_data(),
                    m.evt_center.dispatch_event("EVT_RECONNECT_ENTER_ROOM", {}),
                    this.btn_state(!1)
                }
                ,
                _.on_click_game_replay = function() {
                    var t = this;
                    this.is_touch || (this.is_touch = !0,
                    u.do_action_delay(this, (function() {
                        t.game_replay()
                    }
                    ), this.CD_time))
                }
                ,
                _.game_replay = function() {
                    m.game_task_queue.is_task_runing() ? this.is_touch = !1 : (this.cur_index = -1,
                    m.game_mgr.set_choose_game_s2c_data(),
                    m.evt_center.dispatch_event("EVT_RECONNECT_ENTER_ROOM", {}),
                    this.game_play(),
                    this.btn_state())
                }
                ,
                _.show_game_replay = function() {
                    this.pause_btn.node.active = !1,
                    this.replay_btn.node.active = !0,
                    this.play_btn.node.active = !1,
                    this.cur_state = f.GAME_PLAY_STATE.GAME_PAUSE,
                    m.game_mgr.game_control_state = this.cur_state
                }
                ,
                _.on_game_attemp_done = function() {
                    this.cur_state == f.GAME_PLAY_STATE.GAME_PLAY && this.run_game_play()
                }
                ,
                _.run_game_play = function() {
                    var t = m.game_data_manager.run_data_array;
                    if (this.cur_index = this.cur_index + 1,
                    this.cur_index < 0)
                        this.cur_index = 0;
                    else if (this.cur_index >= t.length)
                        return this.cur_index = t.length - 1,
                        void this.show_game_replay();
                    t[this.cur_index] && t[this.cur_index].func(t[this.cur_index].msg),
                    this.btn_state()
                }
                ,
                _.run_next_index_data = function() {
                    var t = m.game_data_manager.run_data_array;
                    this.cur_index = this.cur_index + 1,
                    this.cur_index < 0 ? this.cur_index = 0 : this.cur_index >= t.length - 1 && (this.cur_index = t.length - 1),
                    t[this.cur_index].func == m.game_protocol.recv_msg_TexasRoundEndS2A && (this.cur_index = this.cur_index + 1,
                    this.cur_index >= t.length - 1 && (this.cur_index = t.length - 1)),
                    this.cur_index < t.length - 1 && t[this.cur_index + 1].func == m.game_protocol.recv_msg_TexasSelfHandS2A && (this.cur_index = this.cur_index + 1);
                    for (var e = 0; e <= this.cur_index; e++)
                        t[e] && t[e].func(t[e].msg);
                    u.x_log("this.cur_index", this.cur_index),
                    u.x_log("next enter_room_data", m.game_mgr.enter_room_data),
                    u.x_log("run_data_array", t.length)
                }
                ,
                _.run_last_index_data = function() {
                    var t = m.game_data_manager.run_data_array;
                    this.cur_index > 0 && t[this.cur_index].func == m.game_protocol.recv_msg_TexasSelfHandS2A && (this.cur_index = this.cur_index - 1),
                    this.cur_index = this.cur_index - 1,
                    this.cur_index < 0 ? this.cur_index = 0 : this.cur_index >= t.length && (this.cur_index = t.length - 1),
                    t[this.cur_index].func == m.game_protocol.recv_msg_TexasRoundEndS2A && (this.cur_index = this.cur_index - 1,
                    this.cur_index < 0 && (this.cur_index = 0));
                    for (var e = 0; e <= this.cur_index; e++)
                        t[e] && t[e].func(t[e].msg);
                    u.x_log("this.cur_index", this.cur_index),
                    u.x_log("last enter_room_data", m.game_mgr.enter_room_data)
                }
                ,
                _.btn_state = function(t) {
                    void 0 === t && (t = !0);
                    var e = m.game_data_manager.run_data_array;
                    this.cur_index <= 0 ? (this.backward_btn.enabled = !1,
                    this.backward_btn.interactable = !1,
                    this.forward_btn.enabled = !0,
                    this.forward_btn.interactable = !0) : this.cur_index > 0 && this.cur_index < e.length - 1 ? (this.backward_btn.enabled = !0,
                    this.backward_btn.interactable = !0,
                    this.forward_btn.enabled = !0,
                    this.forward_btn.interactable = !0) : (this.backward_btn.enabled = !0,
                    this.backward_btn.interactable = !0,
                    this.forward_btn.enabled = !1,
                    this.forward_btn.interactable = !1,
                    this.show_game_replay()),
                    this.updata_progress(t)
                }
                ,
                _.updata_progress = function(t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var _ = m.game_data_manager.run_data_array;
                    this.progress_bar.unscheduleAllCallbacks(),
                    this.progress_bar.fillRange = this.cur_index / (_.length - 1),
                    t && this.progress_bar.schedule((function() {
                        e.progress_bar.fillRange = e.progress_bar.fillRange + .005,
                        e.progress_bar.fillRange >= 1 && e.progress_bar.unscheduleAllCallbacks(),
                        e.cur_index < _.length - 1 && e.progress_bar.fillRange >= (e.cur_index + 1) / (_.length - 1) && e.progress_bar.unscheduleAllCallbacks()
                    }
                    ), .2)
                }
                ,
                _.on_click_sound_on = function() {
                    m.game_mgr.sound_swith = !1,
                    this.sound_state()
                }
                ,
                _.on_click_sound_off = function() {
                    m.game_mgr.sound_swith = !0,
                    this.sound_state()
                }
                ,
                _.sound_state = function() {
                    m.game_mgr.sound_swith ? (this.sound_on_btn.node.active = !0,
                    this.sound_off_btn.node.active = !1) : (this.sound_on_btn.node.active = !1,
                    this.sound_off_btn.node.active = !0)
                }
                ,
                _.title_show = function() {
                    var t = this;
                    this.title_lab_data = ["MULTI_H5_HANDREVIEW_TIPS1", "MULTI_H5_HANDREVIEW_TIPS2", "MULTI_H5_HANDREVIEW_TIPS3"],
                    this.cur_title_lab_index = 0;
                    var e = this.title_lab_data[this.cur_title_lab_index]
                      , _ = m.game_lang_mgr.language_string(e);
                    this.title_lab.string = _;
                    var i = this.title_lab.getComponent(o);
                    s(i).to(.3, {
                        opacity: 255
                    }).delay(5).to(.3, {
                        opacity: 0
                    }).call((function() {
                        t.cur_title_lab_index = t.cur_title_lab_index + 1,
                        t.cur_title_lab_index > t.title_lab_data.length - 1 && (t.cur_title_lab_index = 0);
                        var e = t.title_lab_data[t.cur_title_lab_index]
                          , _ = m.game_lang_mgr.language_string(e);
                        t.title_lab.string = _
                    }
                    )).union().repeatForever().start()
                }
                ,
                _.on_touch_bg = function() {
                    var t = this;
                    if (!this.is_move_top_bottom_bg)
                        if (this.is_move_top_bottom_bg = !0,
                        this.is_top_bottom_bg_show = !this.is_top_bottom_bg_show,
                        this.is_top_bottom_bg_show) {
                            var e = this.top_bg.getComponent(o)
                              , _ = this.top_bg.node;
                            s(e).to(.5, {
                                opacity: 255
                            }).start(),
                            s(_).to(.5, {
                                position: new c(0,666)
                            }, {
                                easing: "expoOut"
                            }).call((function() {
                                t.is_move_top_bottom_bg = !1
                            }
                            )).start();
                            var i = this.bottom_bg.getComponent(o)
                              , n = this.bottom_bg.node;
                            s(i).to(.5, {
                                opacity: 255
                            }).start(),
                            s(n).to(.5, {
                                position: new c(0,-670)
                            }, {
                                easing: "expoOut"
                            }).call((function() {
                                t.is_move_top_bottom_bg = !1
                            }
                            )).start()
                        } else {
                            var a = this.top_bg.getComponent(o)
                              , r = this.top_bg.node;
                            s(a).to(.5, {
                                opacity: 0
                            }).start(),
                            s(r).to(.5, {
                                position: new c(0,786)
                            }, {
                                easing: "expoIn"
                            }).call((function() {
                                t.is_move_top_bottom_bg = !1
                            }
                            )).start();
                            var l = this.bottom_bg.getComponent(o)
                              , u = this.bottom_bg.node;
                            s(l).to(.5, {
                                opacity: 0
                            }).start(),
                            s(u).to(.5, {
                                position: new c(0,-790)
                            }, {
                                easing: "expoIn"
                            }).call((function() {
                                t.is_move_top_bottom_bg = !1
                            }
                            )).start()
                        }
                }
                ,
                e
            }(l)).prototype, "top_bg", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = h(G.prototype, "free_lab", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = h(G.prototype, "title_lab", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = h(G.prototype, "bottom_bg", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = h(G.prototype, "play_btn", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = h(G.prototype, "pause_btn", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = h(G.prototype, "replay_btn", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = h(G.prototype, "backward_btn", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = h(G.prototype, "forward_btn", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = h(G.prototype, "progress_bar", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = h(G.prototype, "sound_on_btn", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            W = h(G.prototype, "sound_off_btn", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = G)) || P));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/global_type.ts", ["cc"], (function(_) {
    "use strict";
    var A;
    return {
        setters: [function(_) {
            A = _.cclegacy
        }
        ],
        execute: function() {
            var D, E, N, O, R, S, M, I, U, C, L, B, G, K, T;
            _("g_type", void 0),
            A._RF.push({}, "ebb04VeQtpBWrbIqbzcp0Gz", "global_type", void 0),
            E = D || (D = _("g_type", {})),
            function(_) {
                _[_.DEGUG = 0] = "DEGUG",
                _[_.PRE_RELEASE = 1] = "PRE_RELEASE",
                _[_.RELEASE = 2] = "RELEASE"
            }(N || (N = {})),
            E.RUNTIME_MODE = N,
            function(_) {
                _[_.NONE = 0] = "NONE",
                _[_.NLH_GAME = 1] = "NLH_GAME",
                _[_.OFC_GAME = 2] = "OFC_GAME",
                _[_.PLO_GAME = 3] = "PLO_GAME",
                _[_.NLH_MTT_GAME = 4] = "NLH_MTT_GAME",
                _[_.NLH_SNG_GAME = 5] = "NLH_SNG_GAME",
                _[_.PLO_SNG_GAME = 6] = "PLO_SNG_GAME",
                _[_.PLO_MTT_GAME = 7] = "PLO_MTT_GAME",
                _[_.MAUBINH_GAME = 8] = "MAUBINH_GAME",
                _[_.PUSOY_GAME = 9] = "PUSOY_GAME",
                _[_.MAUBINH_MTT_GAME = 10] = "MAUBINH_MTT_GAME",
                _[_.PUSOY_MTT_GAME = 11] = "PUSOY_MTT_GAME",
                _[_.TONGITS_GAME = 12] = "TONGITS_GAME",
                _[_.MIX_GAME = 13] = "MIX_GAME",
                _[_.TW_OFC_GAME = 14] = "TW_OFC_GAME",
                _[_.COLOR_GAME = 15] = "COLOR_GAME",
                _[_.OFC_MTT_GAME = 16] = "OFC_MTT_GAME",
                _[_.FLASH_NLH_GAME = 17] = "FLASH_NLH_GAME",
                _[_.FLASH_PLO_GAME = 18] = "FLASH_PLO_GAME"
            }(O || (O = {})),
            E.CARD_GAME_KIND = O,
            function(_) {
                _[_.GAME_CURRENCY_NONE = 0] = "GAME_CURRENCY_NONE",
                _[_.GAME_CURRENCY_GOLD = 1] = "GAME_CURRENCY_GOLD",
                _[_.GAME_CURRENCY_CHIPS = 2] = "GAME_CURRENCY_CHIPS",
                _[_.GAME_CURRENCY_QUICK = 3] = "GAME_CURRENCY_QUICK"
            }(R || (R = {})),
            E.GAME_CURRENCY_KIND = R,
            function(_) {
                _[_.CARD_GAME_SUB_KIND_NORMAL = 0] = "CARD_GAME_SUB_KIND_NORMAL",
                _[_.CARD_GAME_SUB_KIND_SHORT_DECK = 1] = "CARD_GAME_SUB_KIND_SHORT_DECK",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_NORMAL = 2] = "CARD_GAME_SUB_KIND_KOBOUNTY_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PROGRESSIVE = 3] = "CARD_GAME_SUB_KIND_KOBOUNTY_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_PLO5 = 4] = "CARD_GAME_SUB_KIND_PLO5",
                _[_.CARD_GAME_SUB_KIND_NLH_CALLTIME = 5] = "CARD_GAME_SUB_KIND_NLH_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_PLO_CALLTIME = 6] = "CARD_GAME_SUB_KIND_PLO_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_PLO5_CALLTIME = 7] = "CARD_GAME_SUB_KIND_PLO5_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_BLOOD_WAR = 8] = "CARD_GAME_SUB_KIND_BLOOD_WAR",
                _[_.CARD_GAME_SUB_KIND_BLOOD_IN_OUT = 9] = "CARD_GAME_SUB_KIND_BLOOD_IN_OUT",
                _[_.CARD_GAME_SUB_KIND_JOKER_BLOOD_IN_OUT = 10] = "CARD_GAME_SUB_KIND_JOKER_BLOOD_IN_OUT",
                _[_.CARD_GAME_SUB_KIND_PLO6 = 11] = "CARD_GAME_SUB_KIND_PLO6",
                _[_.CARD_GAME_SUB_KIND_PLO6_CALLTIME = 12] = "CARD_GAME_SUB_KIND_PLO6_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_PLO_HL = 13] = "CARD_GAME_SUB_KIND_PLO_HL",
                _[_.CARD_GAME_SUB_KIND_PLO_HL_CALLTIME = 14] = "CARD_GAME_SUB_KIND_PLO_HL_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_PLO5_HL = 15] = "CARD_GAME_SUB_KIND_PLO5_HL",
                _[_.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME = 16] = "CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_PLO6_HL = 17] = "CARD_GAME_SUB_KIND_PLO6_HL",
                _[_.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME = 18] = "CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME",
                _[_.CARD_GAME_SUB_KIND_MAUBINH_SPECIAL_ACES = 19] = "CARD_GAME_SUB_KIND_MAUBINH_SPECIAL_ACES",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_NORMAL = 20] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_PROGRESSIVE = 21] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_NORMAL = 22] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_PROGRESSIVE = 23] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_NORMAL = 24] = "CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_PROGRESSIVE = 25] = "CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_AOF = 26] = "CARD_GAME_SUB_KIND_AOF",
                _[_.CARD_GAME_SUB_KIND_DOUBLE_BOARD_NLH = 27] = "CARD_GAME_SUB_KIND_DOUBLE_BOARD_NLH",
                _[_.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO = 28] = "CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO",
                _[_.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO5 = 29] = "CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO5",
                _[_.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO6 = 30] = "CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO6",
                _[_.CARD_GAME_SUB_KIND_DOUBLE_BOARD_SHORT_DECK = 31] = "CARD_GAME_SUB_KIND_DOUBLE_BOARD_SHORT_DECK",
                _[_.CARD_GAME_SUB_KIND_JOKER_TONGITS = 32] = "CARD_GAME_SUB_KIND_JOKER_TONGITS",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_NORMAL = 33] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_PROGRESSIVE = 34] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL = 35] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE = 36] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL = 37] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE = 38] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE",
                _[_.CARD_GAME_SUB_KIND_TW_OFC_SPECIAL_COLOR = 39] = "CARD_GAME_SUB_KIND_TW_OFC_SPECIAL_COLOR",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_MYSTERY = 40] = "CARD_GAME_SUB_KIND_KOBOUNTY_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_MYSTERY = 41] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_MYSTERY = 42] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_MYSTERY = 43] = "CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_MYSTERY = 44] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_MYSTERY = 45] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_MYSTERY = 46] = "CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_MYSTERY",
                _[_.CARD_GAME_SUB_KIND_AOF_PLO5 = 47] = "CARD_GAME_SUB_KIND_AOF_PLO5",
                _[_.CARD_GAME_SUB_KIND_AOF_PLO6 = 48] = "CARD_GAME_SUB_KIND_AOF_PLO6",
                _[_.CARD_GAME_SUB_KIND_DURAK_TRANSFER = 49] = "CARD_GAME_SUB_KIND_DURAK_TRANSFER",
                _[_.CARD_GAME_SUB_KIND_NLH31_PREFLOP = 50] = "CARD_GAME_SUB_KIND_NLH31_PREFLOP",
                _[_.CARD_GAME_SUB_KIND_NLH31_FLOP = 51] = "CARD_GAME_SUB_KIND_NLH31_FLOP"
            }(S || (S = {})),
            E.CARD_GAME_SUB_KIND = S,
            function(_) {
                _[_.TEXAS_ACTION_NONE = 0] = "TEXAS_ACTION_NONE",
                _[_.TEXAS_ACTION_ANTE = 1] = "TEXAS_ACTION_ANTE",
                _[_.TEXAS_ACTION_SB = 2] = "TEXAS_ACTION_SB",
                _[_.TEXAS_ACTION_BB = 3] = "TEXAS_ACTION_BB",
                _[_.TEXAS_ACTION_POST_BB = 4] = "TEXAS_ACTION_POST_BB",
                _[_.TEXAS_ACTION_STRADDLE = 5] = "TEXAS_ACTION_STRADDLE",
                _[_.TEXAS_ACTION_CHECK = 7] = "TEXAS_ACTION_CHECK",
                _[_.TEXAS_ACTION_FOLD = 8] = "TEXAS_ACTION_FOLD",
                _[_.TEXAS_ACTION_BET = 9] = "TEXAS_ACTION_BET",
                _[_.TEXAS_ACTION_CALL = 10] = "TEXAS_ACTION_CALL",
                _[_.TEXAS_ACTION_RAISE = 11] = "TEXAS_ACTION_RAISE",
                _[_.TEXAS_ACTION_POT = 12] = "TEXAS_ACTION_POT",
                _[_.TEXAS_ACTION_AUTO_CHECK = 13] = "TEXAS_ACTION_AUTO_CHECK",
                _[_.TEXAS_ACTION_AUTO_FOLD = 14] = "TEXAS_ACTION_AUTO_FOLD",
                _[_.TEXAS_ACTION_SAT = 15] = "TEXAS_ACTION_SAT",
                _[_.TEXAS_ACTION_BOMB = 16] = "TEXAS_ACTION_BOMB",
                _[_.TEXAS_ACTION_VOLUNTARY_STRADDLE = 17] = "TEXAS_ACTION_VOLUNTARY_STRADDLE",
                _[_.TEXAS_ACTION_VOLUNTARY_RESTRADDLE = 18] = "TEXAS_ACTION_VOLUNTARY_RESTRADDLE"
            }(M || (M = {})),
            E.TEXAS_ACTION_KIND = M,
            function(_) {
                _[_.TEXAS_BETTING_ROUND_NONE = 0] = "TEXAS_BETTING_ROUND_NONE",
                _[_.TEXAS_BETTING_ROUND_PREFLOP = 1] = "TEXAS_BETTING_ROUND_PREFLOP",
                _[_.TEXAS_BETTING_ROUND_FLOP = 2] = "TEXAS_BETTING_ROUND_FLOP",
                _[_.TEXAS_BETTING_ROUND_TURN = 3] = "TEXAS_BETTING_ROUND_TURN",
                _[_.TEXAS_BETTING_ROUND_RIVER = 4] = "TEXAS_BETTING_ROUND_RIVER",
                _[_.TEXAS_BETTING_ROUND_OVER = 5] = "TEXAS_BETTING_ROUND_OVER"
            }(I || (I = {})),
            E.TEXAS_BETTING_ROUND = I,
            function(_) {
                _[_.VIP_LEVEL_0 = 0] = "VIP_LEVEL_0",
                _[_.VIP_LEVEL_1 = 1] = "VIP_LEVEL_1",
                _[_.VIP_LEVEL_2 = 2] = "VIP_LEVEL_2",
                _[_.VIP_LEVEL_3 = 3] = "VIP_LEVEL_3"
            }(U || (U = {})),
            E.VIP_LEVEL = U,
            function(_) {
                _[_.CALLTIME_NONE = 0] = "CALLTIME_NONE",
                _[_.CALLTIME_ONGOING = 1] = "CALLTIME_ONGOING",
                _[_.CALLTIME_END = 2] = "CALLTIME_END"
            }(C || (C = {})),
            E.CALL_TIME_STATUS = C,
            function(_) {
                _[_.INIT_BUYIN = 0] = "INIT_BUYIN",
                _[_.HALFWAY_BUYIN = 1] = "HALFWAY_BUYIN",
                _[_.SB_LOSE_PAY = 2] = "SB_LOSE_PAY",
                _[_.REWARD = 3] = "REWARD"
            }(L || (L = {})),
            E.SUSHI_ACTION_TYPE = L,
            function(_) {
                _[_.CHOOSE = 0] = "CHOOSE",
                _[_.TWO = 2] = "TWO",
                _[_.THREE = 3] = "THREE"
            }(B || (B = {})),
            E.FORCE_MULTI_MODE = B,
            function(_) {
                _[_.NONE = 0] = "NONE",
                _[_.FIRST_ACTION = 1] = "FIRST_ACTION",
                _[_.DEALER = 2] = "DEALER",
                _[_.ANY_POS = 3] = "ANY_POS"
            }(G || (G = {})),
            E.ENUM_VOLUNTARY_STRADDLE = G,
            function(_) {
                _[_.SQUID_GAME_TYPE_NONE = 0] = "SQUID_GAME_TYPE_NONE",
                _[_.SQUID_GAME_TYPE_CLASSIC = 1] = "SQUID_GAME_TYPE_CLASSIC"
            }(K || (K = {})),
            E.SQUID_TYPE = K,
            function(_) {
                _[_.SQUID_GAME_STATUS_NONE = 0] = "SQUID_GAME_STATUS_NONE",
                _[_.SQUID_GAME_STATUS_START = 1] = "SQUID_GAME_STATUS_START",
                _[_.SQUID_GAME_STATUS_RUNNING = 2] = "SQUID_GAME_STATUS_RUNNING"
            }(T || (T = {})),
            E.SQUID_GAME_STATUS = T,
            E.is_quick_room = function(_) {
                return _ == D.GAME_CURRENCY_KIND.GAME_CURRENCY_QUICK
            }
            ,
            E.is_club_room = function(_) {
                return _ == D.GAME_CURRENCY_KIND.GAME_CURRENCY_CHIPS
            }
            ,
            E.is_lobby_room = function(_) {
                return _ == D.GAME_CURRENCY_KIND.GAME_CURRENCY_GOLD
            }
            ,
            E.is_nlh_cash_room = function(_) {
                return _ == D.CARD_GAME_KIND.NLH_GAME
            }
            ,
            E.is_flash_room = function(_) {
                return _ == D.CARD_GAME_KIND.FLASH_NLH_GAME || _ == D.CARD_GAME_KIND.FLASH_PLO_GAME
            }
            ,
            E.is_flash_nlh_room = function(_) {
                return _ == D.CARD_GAME_KIND.FLASH_NLH_GAME
            }
            ,
            E.is_flash_plo_room = function(_) {
                return _ == D.CARD_GAME_KIND.FLASH_PLO_GAME
            }
            ,
            E.is_flash_plo4_room = function(_, A) {
                return _ == D.CARD_GAME_KIND.FLASH_PLO_GAME && A == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NORMAL
            }
            ,
            E.is_flash_plo5_room = function(_, A) {
                return _ == D.CARD_GAME_KIND.FLASH_PLO_GAME && A == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5
            }
            ,
            E.is_plo_room = function(_) {
                return _ && (_ == D.CARD_GAME_KIND.PLO_GAME || _ == D.CARD_GAME_KIND.PLO_SNG_GAME || _ == D.CARD_GAME_KIND.PLO_MTT_GAME)
            }
            ,
            E.is_plo5_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO5 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_AOF_PLO5
            }
            ,
            E.is_plo6_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO6 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_AOF_PLO6
            }
            ,
            E.is_plo5_hilo_room = function(_) {
                return _ == S.CARD_GAME_SUB_KIND_PLO5_HL || _ == S.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE
            }
            ,
            E.is_plo6_hilo_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE
            }
            ,
            E.is_plo_cash_room = function(_) {
                return _ == D.CARD_GAME_KIND.PLO_GAME
            }
            ,
            E.is_six_plus_cash_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_SHORT_DECK || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_SHORT_DECK
            }
            ,
            E.is_nlh_sng_room = function(_) {
                return _ == D.CARD_GAME_KIND.NLH_SNG_GAME
            }
            ,
            E.is_nlh_mtt_room = function(_) {
                return _ == D.CARD_GAME_KIND.NLH_MTT_GAME
            }
            ,
            E.is_plo_sng_room = function(_) {
                return _ == D.CARD_GAME_KIND.PLO_SNG_GAME
            }
            ,
            E.is_plo_mtt_room = function(_) {
                return _ == D.CARD_GAME_KIND.PLO_MTT_GAME
            }
            ,
            E.is_plo5_cash_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO5
            }
            ,
            E.is_plo6_cash_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO6
            }
            ,
            E.is_plo_hilo_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE
            }
            ,
            E.is_sng_room = function(_) {
                return _ && (_ == D.CARD_GAME_KIND.NLH_SNG_GAME || _ == D.CARD_GAME_KIND.PLO_SNG_GAME)
            }
            ,
            E.is_mtt_room = function(_) {
                return _ && (_ == D.CARD_GAME_KIND.NLH_MTT_GAME || _ == D.CARD_GAME_KIND.PLO_MTT_GAME)
            }
            ,
            E.is_plo4_hilo_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_HL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_PROGRESSIVE
            }
            ,
            E.is_six_plus_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_SHORT_DECK || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_SHORT_DECK
            }
            ,
            E.is_sng_or_mtt = function(_) {
                return D.is_sng_room(_) || D.is_mtt_room(_)
            }
            ,
            E.is_calltime_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NLH_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO5_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO6_HL_CALLTIME || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_PLO_HL_CALLTIME
            }
            ,
            E.is_aof_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_AOF || _ == S.CARD_GAME_SUB_KIND_AOF_PLO5 || _ == S.CARD_GAME_SUB_KIND_AOF_PLO6
            }
            ,
            E.is_nlh31_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NLH31_PREFLOP || _ == S.CARD_GAME_SUB_KIND_NLH31_FLOP
            }
            ,
            E.is_nlh31_preflop_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NLH31_PREFLOP
            }
            ,
            E.is_nlh31_flop_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_NLH31_FLOP
            }
            ,
            E.is_double_board_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_NLH || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO5 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_PLO6 || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_DOUBLE_BOARD_SHORT_DECK
            }
            ,
            E.is_mixgame_room = function(_) {
                return _ == O.MIX_GAME
            }
            ,
            E.is_progressive_room = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_NORMAL || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_PROGRESSIVE || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_MYSTERY
            }
            ,
            E.is_kobounty_mystery = function(_) {
                return _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_SHORT_DECK_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO_HL_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO5_HL_MYSTERY || _ == D.CARD_GAME_SUB_KIND.CARD_GAME_SUB_KIND_KOBOUNTY_PLO6_HL_MYSTERY
            }
            ,
            A._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/table_info_layer.ts", ["cc", "./g_init.ts", "./_rollupPluginModLoBabelHelpers.js", "./global_type.ts", "./mius.ts", "./public_board.ts", "./ani_layer_node.ts", "./game_pot.ts"], (function(_) {
    "use strict";
    var a, i, e, o, t, n, r, l, g, m, s, b, d, u, p, h, c, f, T, v, L, y, I;
    return {
        setters: [function(_) {
            a = _.cclegacy,
            i = _._decorator,
            e = _.Node,
            o = _.Sprite,
            t = _.Label,
            n = _.color,
            r = _.LabelOutline,
            l = _.resources,
            g = _.SpriteFrame,
            m = _.UITransform,
            s = _.Component
        }
        , function(_) {
            b = _.g_func,
            d = _.g_const
        }
        , function(_) {
            u = _.applyDecoratedDescriptor,
            p = _.inheritsLoose,
            h = _.initializerDefineProperty,
            c = _.assertThisInitialized,
            f = _.defineProperty
        }
        , function(_) {
            T = _.g_type
        }
        , function(_) {
            v = _.g_instance
        }
        , function(_) {
            L = _.public_board
        }
        , function(_) {
            y = _.ani_layer_node
        }
        , function(_) {
            I = _.game_pot
        }
        ],
        execute: function() {
            var A, E, U, k, M, D, N, B, R, w, C, S, x, O, P, F, H;
            a._RF.push({}, "ed4176QsTlImLgl129KQo4+", "table_info_layer", void 0);
            var V = i.ccclass
              , z = i.property;
            _("table_info_layer", (A = V("table_info_layer"),
            E = z(e),
            U = z(y),
            k = z(I),
            M = z(L),
            D = z(o),
            N = z(t),
            B = z(o),
            A((C = u((w = function(_) {
                function a() {
                    for (var a, i = arguments.length, e = new Array(i), o = 0; o < i; o++)
                        e[o] = arguments[o];
                    return a = _.call.apply(_, [this].concat(e)) || this,
                    h(c(a), "table_info", C, c(a)),
                    h(c(a), "ani_layer_node", S, c(a)),
                    h(c(a), "game_pot_node", x, c(a)),
                    h(c(a), "public_board_node", O, c(a)),
                    h(c(a), "real_time_pot_bg", P, c(a)),
                    h(c(a), "real_time_pot_label", F, c(a)),
                    h(c(a), "bomb_pot_icon", H, c(a)),
                    f(c(a), "tb_lab_info", []),
                    f(c(a), "table_name_lab", null),
                    f(c(a), "table_double_board_lab", null),
                    f(c(a), "table_bomb_pot_lab", null),
                    f(c(a), "table_bomb_pot_double_board_lab", null),
                    f(c(a), "lab_blind_info", null),
                    f(c(a), "lab_vpip_info", null),
                    f(c(a), "lab_gps_ip", null),
                    f(c(a), "hand_id_label", null),
                    f(c(a), "lab_y", 0),
                    a
                }
                p(a, _);
                var i = a.prototype;
                return i.onLoad = function() {
                    v.evt_center.add_listener("EVT_HIGHLIGHT_PLAYER_HAND_CARD", this.on_highlight_card, this)
                }
                ,
                i.onDestroy = function() {
                    v.evt_center.remove_listener("EVT_HIGHLIGHT_PLAYER_HAND_CARD", this.on_highlight_card)
                }
                ,
                i.onEnable = function() {
                    this.init_ui(),
                    this.init_public_cards()
                }
                ,
                i.init_ui = function() {
                    this.init_table_logo(),
                    this.game_pot_node.refresh_pots_data(),
                    this.refresh_real_time_pot_info(!1),
                    this.create_table_info()
                }
                ,
                i.create_table_info = function() {
                    this.init_table_name(),
                    this.init_double_board_info(),
                    this.init_bomb_pot_double_board_info(),
                    this.init_bomb_pot_info(),
                    this.init_blind_label_info(),
                    this.init_voluntary_straddle_info(),
                    this.init_risk_info(),
                    this.init_calltime(),
                    this.init_random_seat(),
                    this.init_vpip_lab_info(),
                    this.init_gps_ip_lab_info(),
                    this.init_squid_info(),
                    this.init_sushi_info(),
                    this.init_hand_id_label(),
                    this.init_itm_icon(),
                    this.init_72_icon(),
                    this.reset_lab_pos()
                }
                ,
                i.create_lable = function(_) {
                    var a = new e;
                    a.layer = this.node.layer,
                    a.parent = this.table_info;
                    var i = a.addComponent(t);
                    i.string = _,
                    i.fontSize = 18,
                    i.color = n(97, 166, 231, .48 * 255);
                    var o = a.addComponent(r);
                    return o.width = 1,
                    o.color = n(97, 166, 231, .48 * 255),
                    v.game_mgr.is_squid_ing() && (i.color = n(110, 110, 110, 204),
                    o.color = n(110, 110, 110, .48 * 255)),
                    v.game_mgr.is_sushi_game() && (i.color = n(167, 89, 38, 255),
                    o.color = n(167, 89, 38, .48 * 255)),
                    a
                }
                ,
                i.init_table_logo = function() {
                    var _ = this
                      , a = "_logo_nlh";
                    T.is_plo_sng_room(v.game_mgr.game_kind) ? (a = "_logo_sngplo",
                    a = T.is_plo4_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_sngplo4_hilo" : T.is_plo5_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_sngplo5_hilo" : T.is_plo6_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_sngplo6_hilo" : T.is_plo5_room(v.game_mgr.game_sub_kind) ? "_logo_sngplo5" : T.is_plo6_room(v.game_mgr.game_sub_kind) ? "_logo_sngplo6" : "_logo_sngplo4") : T.is_plo_mtt_room(v.game_mgr.game_kind) ? (a = "_logo_mttplo",
                    a = T.is_plo4_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_mttplo4_hilo" : T.is_plo5_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_mttplo5_hilo" : T.is_plo6_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_mttplo6_hilo" : T.is_plo5_room(v.game_mgr.game_sub_kind) ? "_logo_mttplo5" : T.is_plo6_room(v.game_mgr.game_sub_kind) ? "_logo_mttplo6" : "_logo_mttplo4") : T.is_nlh_sng_room(v.game_mgr.game_kind) ? a = "_logo_sngnlh" : T.is_nlh_mtt_room(v.game_mgr.game_kind) ? a = T.is_six_plus_room(v.game_mgr.game_sub_kind) ? "_logo_mttsixplus" : "_logo_mttnlh" : T.is_plo_cash_room(v.game_mgr.game_kind) ? a = T.is_aof_room(v.game_mgr.game_sub_kind) ? T.is_plo5_room(v.game_mgr.game_sub_kind) ? "_logo_aof_plo5" : T.is_plo6_room(v.game_mgr.game_sub_kind) ? "_logo_aof_plo6" : "_logo_aof_plo4" : T.is_plo4_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_plo4hilo" : T.is_plo5_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_plo5hilo" : T.is_plo6_hilo_room(v.game_mgr.game_sub_kind) ? "_logo_plo6hilo" : T.is_plo5_room(v.game_mgr.game_sub_kind) ? "_logo_plo5" : T.is_plo6_room(v.game_mgr.game_sub_kind) ? "_logo_plo6" : "_logo_plo4" : T.is_nlh_cash_room(v.game_mgr.game_kind) ? a = T.is_six_plus_room(v.game_mgr.game_sub_kind) ? "_logo_sixplus" : T.is_aof_room(v.game_mgr.game_sub_kind) ? "_logo_aof" : T.is_nlh31_preflop_room(v.game_mgr.game_sub_kind) ? "_logo_nlh31" : T.is_nlh31_flop_room(v.game_mgr.game_sub_kind) ? "_logo_nlh31_flop" : "_logo_nlh" : T.is_mixgame_room(v.game_mgr.game_kind) ? a = "_logo_mixgame" : T.is_flash_room(v.game_mgr.game_kind) && (T.is_flash_nlh_room(v.game_mgr.game_kind) ? a = "_logo_flashnlh" : T.is_flash_plo4_room(v.game_mgr.game_kind, v.game_mgr.game_sub_kind) ? a = "_logo_flashplo4" : T.is_flash_plo5_room(v.game_mgr.game_kind, v.game_mgr.game_sub_kind) && (a = "_logo_flashplo5"));
                    var i = "deep";
                    v.game_mgr.is_squid_ing() ? i = "table" : v.game_mgr.is_sushi_game() && (i = "sushi"),
                    l.load("table/style/deep/logo/" + i + a + "/spriteFrame", g, (function(a, t) {
                        var n = new e;
                        n.layer = _.node.layer,
                        n.setPosition(0, -20),
                        n.parent = _.table_info,
                        n.addComponent(o).spriteFrame = t,
                        v.game_mgr.is_super_union_room() && (n.setPosition(20, -20),
                        l.load("table/style/deep/logo/" + i + "_super_table_logo/spriteFrame", g, (function(_, a) {
                            var i, t, r = new e;
                            r.layer = n.layer;
                            var l = null === (i = n.getComponent(m)) || void 0 === i ? void 0 : i.contentSize.width;
                            r.parent = n;
                            var g = r.addComponent(o);
                            null === (t = g.getComponent(m)) || void 0 === t || t.setAnchorPoint(1, .5),
                            g.node.setPosition(-l / 2 - 4, -3),
                            g.spriteFrame = a
                        }
                        )))
                    }
                    ))
                }
                ,
                i.refresh_real_time_pot_info = function(_) {
                    if (_)
                        return this.real_time_pot_bg.node.active = !1,
                        void (this.real_time_pot_label.string = "");
                    var a = v.game_mgr.get_real_time_pot_info();
                    0 == a ? this.real_time_pot_bg.node.active = !1 : (this.real_time_pot_bg.node.active = !0,
                    a = v.game_data_manager.convert_super_value_to_local(a),
                    this.real_time_pot_label.string = b.display_number(a),
                    this.bomb_pot_icon.node.active = v.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand)
                }
                ,
                i.init_table_name = function() {
                    var _ = this.create_lable("")
                      , a = _.getComponent(t);
                    this.table_name_lab = a,
                    this.tb_lab_info.push(_),
                    this.table_name_lab.string = this.get_table_name_string()
                }
                ,
                i.init_double_board_info = function() {
                    if (T.is_double_board_room(v.game_mgr.game_sub_kind)) {
                        var _ = this.create_lable("")
                          , a = _.getComponent(t);
                        this.table_double_board_lab = a,
                        this.tb_lab_info.push(_),
                        this.table_double_board_lab.string = v.game_lang_mgr.language_string("MULTI_TABLE_DB")
                    }
                }
                ,
                i.init_bomb_pot_double_board_info = function() {
                    var _ = T.is_double_board_room(v.game_mgr.game_sub_kind)
                      , a = v.game_mgr.room_info_data.enable_db_when_bomb_pot;
                    if (!_ && a) {
                        var i = this.create_lable("")
                          , e = i.getComponent(t);
                        this.table_bomb_pot_double_board_lab = e,
                        this.tb_lab_info.push(i),
                        this.table_bomb_pot_double_board_lab.string = v.game_lang_mgr.language_string("MULTI_TABLE_BOMBPOT_DB")
                    }
                }
                ,
                i.init_bomb_pot_info = function() {
                    if (v.game_mgr.enter_room_data.texas_game_detail.is_bomb_pot_hand) {
                        var _ = this.create_lable("")
                          , a = _.getComponent(t);
                        this.table_bomb_pot_lab = a,
                        this.tb_lab_info.push(_),
                        this.table_bomb_pot_lab.string = this.get_table_bomb_pot_string()
                    }
                }
                ,
                i.init_blind_label_info = function() {
                    var _ = this.create_lable("")
                      , a = _.getComponent(t);
                    this.lab_blind_info = a,
                    this.tb_lab_info.push(_),
                    this.refresh_blind_label_info()
                }
                ,
                i.refresh_blind_label_info = function() {
                    var _ = v.game_mgr.enter_room_data.texas_game_detail.small_blind
                      , a = v.game_mgr.enter_room_data.texas_game_detail.ante
                      , i = v.game_mgr.enter_room_data.texas_game_detail.straddle;
                    _ = v.game_data_manager.convert_super_value_to_local(_),
                    a = v.game_data_manager.convert_super_value_to_local(a),
                    i = v.game_data_manager.convert_super_value_to_local(i);
                    var e = b.display_number(_)
                      , o = b.display_number(2 * _)
                      , t = b.display_number(a)
                      , n = b.display_number(i)
                      , r = v.game_lang_mgr.language_string("MULTI_TABLE_BLIND_TITLE") + ": " + e + "/" + o;
                    T.is_six_plus_room(v.game_mgr.game_sub_kind) ? r = v.game_lang_mgr.language_string("MULTI_ANTE") + ": " + t : T.is_mtt_room(v.game_mgr.game_kind) ? a && a > 0 && (r = v.game_lang_mgr.language_string("MULTI_TABLE_BLIND_TITLE") + ": " + e + "/" + o + "(" + t + ")") : (i && i > 0 && (r = r + "/" + n),
                    a && a > 0 && (r = r + "(" + t + ")")),
                    this.lab_blind_info && (this.lab_blind_info.string = r)
                }
                ,
                i.get_table_name_string = function() {
                    var _ = v.game_mgr.room_info_data.game_name
                      , a = b.get_omit_string_with_width(this.table_name_lab, _, 350);
                    return T.is_mtt_room(v.game_mgr.game_kind) && (a = b.get_omit_string_with_width(this.table_name_lab, _, 300),
                    a += this.get_mtt_table_string()),
                    a
                }
                ,
                i.get_table_bomb_pot_string = function() {
                    var _ = v.game_mgr.enter_room_data.texas_game_detail.bomb_pot_cur_ante
                      , a = v.game_lang_mgr.language_string("MULTI_TABLE_BOMBPOT");
                    return _ = v.game_data_manager.convert_super_value_to_local(_),
                    a + "(" + b.display_number(_) + ")"
                }
                ,
                i.get_mtt_table_string = function() {
                    var _ = "";
                    T.is_lobby_room(v.game_mgr.game_currency_kind) ? _ = v.game_lang_mgr.language_string("MULTI_XMTT") : v.game_mgr.enter_room_data.texas_game_detail.is_final_table && (_ = v.game_lang_mgr.language_string("MULTI_TABLE_MTTFINAL"));
                    return _
                }
                ,
                i.init_next_blind_label_info = function() {
                    if (T.is_sng_or_mtt(v.game_mgr.game_kind)) {
                        var _ = v.game_mgr.enter_room_data.texas_game_detail.ante
                          , a = v.game_mgr.enter_room_data.texas_game_detail.small_blind
                          , i = this.get_next_blinds_up_info_string(a, _)
                          , e = this.create_lable(i);
                        this.tb_lab_info.push(e)
                    }
                }
                ,
                i.get_next_blinds_up_info_string = function(_, a) {
                    var i = b.display_number(_, !1, !0) + "/" + b.display_number(2 * _, !1, !0);
                    return T.is_mtt_room(v.game_mgr.game_kind) && a > 0 && (i = b.display_number(_, !1, !0) + "/" + b.display_number(2 * _, !1, !0) + "(" + b.display_number(a, !1, !0) + ")"),
                    v.game_lang_mgr.language_string("MULTI_TABLE_LV_NEXT") + ": " + i
                }
                ,
                i.init_risk_info = function() {
                    var _ = "";
                    if (v.game_mgr.room_info_data.enable_risk_control && (v.game_mgr.room_info_data.force_multi && v.game_mgr.room_info_data.force_multi == T.FORCE_MULTI_MODE.TWO ? _ += v.game_lang_mgr.language_string("MULTI_TABLE_RUNIT2") : v.game_mgr.room_info_data.force_multi && v.game_mgr.room_info_data.force_multi == T.FORCE_MULTI_MODE.THREE ? _ += v.game_lang_mgr.language_string("MULTI_TABLE_RUNIT3") : _ += v.game_lang_mgr.language_string("MULTI_TABLE_RUNMULTI")),
                    v.game_mgr.room_info_data.enable_insurance && ("" != _ && (_ += "  "),
                    _ += v.game_lang_mgr.language_string("MULTI_TABLE_INSURANCE")),
                    v.game_mgr.room_info_data.enable_evchop && ("" != _ && (_ += "  "),
                    _ += v.game_lang_mgr.language_string("MULTI_EVCHOP")),
                    "" != _) {
                        var a = this.create_lable(_);
                        this.tb_lab_info.push(a)
                    }
                }
                ,
                i.init_voluntary_straddle_info = function() {
                    var _ = v.game_mgr.room_info_data.voluntary_straddle_type
                      , a = "";
                    if (_ == T.ENUM_VOLUNTARY_STRADDLE.ANY_POS ? a = v.game_lang_mgr.language_string("MULTI_STRADDLE_VOLUNTARY") + "(" + v.game_lang_mgr.language_string("MULTI_STRADDLE_ALL") + ")" : _ == T.ENUM_VOLUNTARY_STRADDLE.FIRST_ACTION ? a = v.game_lang_mgr.language_string("MULTI_STRADDLE_VOLUNTARY") + "(" + v.game_lang_mgr.language_string("MULTI_STRADDLE_PFTA") + ")" : _ == T.ENUM_VOLUNTARY_STRADDLE.DEALER && (a = v.game_lang_mgr.language_string("MULTI_STRADDLE_VOLUNTARY") + "(" + v.game_lang_mgr.language_string("MULTI_STRADDLE_BTN") + ")"),
                    "" != a) {
                        var i = this.create_lable(a);
                        this.tb_lab_info.push(i)
                    }
                }
                ,
                i.init_calltime = function() {
                    if (T.is_calltime_room(v.game_mgr.game_sub_kind)) {
                        var _ = v.game_mgr.room_info_data.calltime.toString()
                          , a = v.game_mgr.room_info_data.calltime_hands.toString()
                          , i = v.game_lang_mgr.format_string("MULTI_TABLE_CALLTIME", _);
                        a > 0 && (i = v.game_lang_mgr.format_string("MULTI_TABLE_CALLHAND", a));
                        var e = this.create_lable(i);
                        this.tb_lab_info.push(e)
                    }
                }
                ,
                i.init_random_seat = function() {
                    if (v.game_mgr.room_info_data.enable_random_seat) {
                        var _ = v.game_lang_mgr.language_string("MULTI_TABLE_RANDOMSEAT")
                          , a = this.create_lable(_);
                        this.tb_lab_info.push(a)
                    }
                }
                ,
                i.init_vpip_lab_info = function() {
                    var _ = ""
                      , a = v.game_mgr.room_info_data.vpip_restric;
                    if (a > 0 && (_ = _ + v.game_lang_mgr.language_string("MULTI_TABLE_MVPIP_TITLE") + "≥" + a.toString() + "%"),
                    "" != _) {
                        var i = this.create_lable(_)
                          , e = i.getComponent(t);
                        this.lab_vpip_info = e,
                        this.tb_lab_info.push(i)
                    }
                }
                ,
                i.init_gps_ip_lab_info = function() {
                    var _ = "";
                    if (v.game_mgr.room_info_data.gps_restric && (_ += "" == _ ? "GPS" : "&GPS"),
                    v.game_mgr.room_info_data.ip_restric && (_ += "" == _ ? "IP" : "&IP"),
                    v.game_mgr.room_info_data.simulator_restric && (_ += "" == _ ? "PC" : "&PC"),
                    v.game_mgr.room_info_data.enable_kyc_restrict && (_ += "" == _ ? "ACCT" : "&ACCT"),
                    "" != _) {
                        _ = _ + " " + v.game_lang_mgr.language_string("MULTI_TABLE_RESTRICTION");
                        var a = this.create_lable(_)
                          , i = a.getComponent(t);
                        this.lab_gps_ip = i,
                        this.tb_lab_info.push(a)
                    }
                }
                ,
                i.init_hand_id_label = function() {
                    var _, a = this.create_lable(""), i = a.getComponent(t);
                    this.hand_id_label = i,
                    this.tb_lab_info.push(a);
                    var e = null === (_ = v.game_mgr.enter_room_data.texas_game_detail) || void 0 === _ ? void 0 : _.hand_id;
                    this.update_hand_id_label(e)
                }
                ,
                i.update_hand_id_label = function(_) {
                    null != _ && "0" != _ || (_ = "");
                    var a = _;
                    if ("" != _ && (a = "ID: " + _),
                    T.is_quick_room(v.game_mgr.game_currency_kind)) {
                        var i = v.game_mgr.room_info_data.room_id;
                        a = v.game_lang_mgr.language_string("MULTI_FAMILY_TABLECODE") + ": " + i
                    }
                    this.hand_id_label.string = a
                }
                ,
                i.reset_lab_pos = function() {
                    for (var _ in this.lab_y = -70,
                    this.tb_lab_info) {
                        var a = this.tb_lab_info[_].getPosition().x;
                        this.tb_lab_info[_].setPosition(a, this.lab_y),
                        this.lab_y = this.lab_y - 24
                    }
                }
                ,
                i.init_itm_icon = function() {
                    T.is_mtt_room(v.game_mgr.game_kind)
                }
                ,
                i.init_72_icon = function() {
                    var _ = this;
                    if (v.game_mgr.get_seven_deuce_total_profit() > 0) {
                        var a = "deep";
                        v.game_mgr.is_squid_ing() ? a = "table" : v.game_mgr.is_sushi_game() && (a = "sushi"),
                        l.load("table/style/deep/logo/" + a + "_72/spriteFrame", g, (function(a, i) {
                            var l, g = new e;
                            g.layer = _.node.layer,
                            g.setPosition(-20, 0),
                            g.parent = _.table_info,
                            g.addComponent(o).spriteFrame = i,
                            _.tb_lab_info.push(g);
                            var s = new e;
                            s.layer = g.layer,
                            s.parent = g;
                            var b = s.addComponent(t);
                            b.fontSize = 18,
                            b.color = n(97, 166, 231, .48 * 255);
                            var d = s.addComponent(r);
                            d.width = 1,
                            d.color = n(97, 166, 231, .48 * 255),
                            s.setPosition(20, 0),
                            null === (l = s.getComponent(m)) || void 0 === l || l.setAnchorPoint(0, .5),
                            v.game_mgr.is_squid_ing() && (b.color = n(110, 110, 110, 204),
                            d.color = n(110, 110, 110, .48 * 255)),
                            v.game_mgr.is_sushi_game() && (b.color = n(167, 89, 38, 255),
                            d.color = n(167, 89, 38, .48 * 255));
                            var u = v.game_mgr.get_seven_decue_bb();
                            b.string = u > 1 ? u + v.game_lang_mgr.language_string("MULTI_TABLE_BBS") : u + v.game_lang_mgr.language_string("MULTI_TABLE_BB_EN"),
                            _.reset_lab_pos()
                        }
                        ))
                    }
                }
                ,
                i.init_squid_info = function() {
                    if (v.game_mgr.is_squid_room()) {
                        var _ = v.game_lang_mgr.language_string("MULTI_TABLE_SQUIDGAME") + " " + v.game_lang_mgr.language_string("MULTI_TABLE_SQUIDGAME_VALUE")
                          , a = v.game_mgr.get_squid_game_reward();
                        a = v.game_data_manager.convert_super_value_to_local(a),
                        _ += b.display_number(a);
                        var i = this.create_lable(_)
                          , e = i.getComponent(t);
                        this.lab_vpip_info = e,
                        this.tb_lab_info.push(i)
                    }
                }
                ,
                i.init_sushi_info = function() {
                    if (v.game_mgr.is_sushi_game()) {
                        var _ = v.game_mgr.get_sushi_game_args()
                          , a = v.game_data_manager.convert_super_value_to_local(_.join_chips)
                          , i = v.game_data_manager.convert_super_value_to_local(_.sb_chips)
                          , e = v.game_lang_mgr.format_string("MULTI_SUSHI_INITIAL_ANTE2", b.display_number(a)) + " " + v.game_lang_mgr.format_string("MULTI_SUSHI_SMALLBLIND_ANTE2", b.display_number(i))
                          , o = this.create_lable(e);
                        o.getComponent(t);
                        this.tb_lab_info.push(o)
                    }
                }
                ,
                i.on_highlight_card = function(_) {
                    b.x_log("on_highlight_card", _.data.is_show_down);
                    var a = _.data.is_hi
                      , i = _.data.is_low;
                    a ? this.public_board_node.on_realtime_highlight_card_hi(_.data.is_show_down, _.data.max_comb, _.data.top_type, _.data.multi_index) : i ? this.public_board_node.on_realtime_highlight_card_low(_.data.is_show_down, _.data.max_comb, _.data.low_type, _.data.multi_index) : this.public_board_node.on_realtime_highlight_card(_.data.is_show_down, _.data.max_comb, _.data.top_type, _.data.multi_index, _.data.double_board),
                    _.data.is_show_down || this.public_board_node.clean_other_ui()
                }
                ,
                i.refresh_game_pot = function() {
                    this.game_pot_node.refresh_pots_data()
                }
                ,
                i.clean_public_cards = function(_) {
                    void 0 === _ && (_ = !1),
                    this.public_board_node.clean_public_cards(_)
                }
                ,
                i.clean_multi_public_cards = function(_) {
                    void 0 === _ && (_ = !1),
                    this.public_board_node.clean_multi_public_cards(_)
                }
                ,
                i.get_pot_pos = function(_) {
                    return this.game_pot_node.get_pot_pos(_)
                }
                ,
                i.refresh_target_pot_info = function(_, a) {
                    void 0 === a && (a = !1),
                    _ < 0 ? this.game_pot_node.set_tb_pot_visible(a) : a && _ < d.SHOW_POT_COUNT && this.game_pot_node.refresh_target_pot_info(_)
                }
                ,
                i.update_game_public_board = function(_, a) {
                    this.public_board_node.update_game_public_board(_, a)
                }
                ,
                i.init_public_cards = function() {
                    this.public_board_node.init_public_cards()
                }
                ,
                i.update_game_public_hit_insurance = function(_) {
                    _ == T.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_TURN ? this.public_board_node.turn_card_insurance() : _ == T.TEXAS_BETTING_ROUND.TEXAS_BETTING_ROUND_RIVER && this.public_board_node.river_card_insurance()
                }
                ,
                i.on_multi_board_build = function(_) {
                    this.public_board_node.on_multi_board_build(_)
                }
                ,
                i.play_ko_animation = function() {
                    this.ani_layer_node.play_ko_ani()
                }
                ,
                i.play_72_animation = function() {
                    this.ani_layer_node.play_72_ani()
                }
                ,
                i.set_72_ani_show = function(_) {
                    void 0 === _ && (_ = !1),
                    this.ani_layer_node.set_72_ani_show(_)
                }
                ,
                i.change_first_row_and_double_board_pos = function() {
                    this.public_board_node.change_first_row_and_double_board_pos()
                }
                ,
                a
            }(s)).prototype, "table_info", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = u(w.prototype, "ani_layer_node", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = u(w.prototype, "game_pot_node", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = u(w.prototype, "public_board_node", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = u(w.prototype, "real_time_pot_bg", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = u(w.prototype, "real_time_pot_label", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = u(w.prototype, "bomb_pot_icon", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = w)) || R));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./xconfig.ts", "./g_init.ts", "./global_type.ts", "./mius.ts", "./game_config.ts", "./poker_card.ts", "./public_board.ts", "./deal_card_controller.ts", "./protocol_table.ts", "./head_downloader.ts", "./player_head.ts", "./jackpot_player_item.ts", "./load_ani_node.ts", "./card_logic.ts", "./card_highlight.ts", "./audio_manager.ts", "./back_layer.ts", "./player_control.ts", "./hilo_info_node.ts", "./hand_back.ts", "./player_node.ts", "./sushi_node.ts", "./seat_node.ts", "./player_layer.ts", "./ani_layer_node.ts", "./main_side_pot.ts", "./game_pot.ts", "./table_info_layer.ts", "./jackpot_result_node.ts", "./play_scene.ts", "./game_manager.ts", "./task_queue.ts", "./event_dispatcher.ts", "./game_animation_utils.ts", "./multi_lang_data.ts", "./data_manager.ts", "./multi_lang_manager.ts", "./main.ts", "./global_descriptor.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
