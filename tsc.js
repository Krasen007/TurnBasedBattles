var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path = "lib/phaser.d.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var GAME_WIDHT = 1280;
    var GAME_HEIGHT = 720;
    var Battles = /** @class */ (function (_super) {
        __extends(Battles, _super);
        function Battles(width, height) {
            var _this = 
            //super(1280 * window.devicePixelRatio, 720 * window.devicePixelRatio, Phaser.CANVAS, "phaser-div");
            //super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, "phaser-div");
            //super(window.innerWidth * 1280, window.innerHeight * 720, Phaser.CANVAS, "phaser-div");
            _super.call(this, GAME_WIDHT, GAME_HEIGHT, Phaser.CANVAS, "phaser-div") || this;
            _this.width = GAME_WIDHT;
            _this.height = GAME_HEIGHT;
            _this.state.add(TurnBasedBattles.BOOT_STATE, TurnBasedBattles.Boot, false);
            _this.state.add(TurnBasedBattles.PRELOAD_STATE, TurnBasedBattles.Preload, false);
            _this.state.add(TurnBasedBattles.MENU_STATE, TurnBasedBattles.Menu, false);
            _this.state.add(TurnBasedBattles.TOWN_STATE, TurnBasedBattles.Town, false);
            _this.state.add(TurnBasedBattles.MAP_STATE, TurnBasedBattles.Map, false);
            _this.state.add(TurnBasedBattles.FIELD_BATTLE_STATE, TurnBasedBattles.FieldBattle, false);
            _this.state.start(TurnBasedBattles.BOOT_STATE);
            return _this;
        }
        return Battles;
    }(Phaser.Game));
    window.onload = function () {
        var context = new AudioContext();
        var theGame = new Battles();
    };
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    TurnBasedBattles.COLOR_CLEAR_NUM = 0xFFFFFF;
    TurnBasedBattles.COLOR_HOVER_YELLOW_NUM = 0xffe484;
    TurnBasedBattles.COLOR_HOVER_RED_NUM2 = 0xff2222;
    TurnBasedBattles.COLOR_HOVER_GREEN_NUM3 = 0x22ff22;
    TurnBasedBattles.COLOR_HOVER_ORANGE = 0xffb12b;
    TurnBasedBattles.BOOT_STATE = "Boot";
    TurnBasedBattles.TOWN_STATE = "Town";
    TurnBasedBattles.PRELOAD_STATE = "Preload";
    TurnBasedBattles.MAP_STATE = "Map";
    TurnBasedBattles.MENU_STATE = "Menu";
    TurnBasedBattles.FIELD_BATTLE_STATE = "FieldBattle";
    TurnBasedBattles.HIDE_FROM_SCREEN = -1000;
    TurnBasedBattles.START_MONEY = 990;
    TurnBasedBattles.UNIT_SELECTION_POS_X = 50;
    TurnBasedBattles.UNIT_SELECTION_POS_Y = 50;
    TurnBasedBattles.COLOR_ORANGE = "#f4b042";
    TurnBasedBattles.COLOR_YELLOW = "#ffFF0F";
    TurnBasedBattles.COLOR_GOLD = "#f2d254";
    TurnBasedBattles.GOLD_STR = "GOLD: ";
    TurnBasedBattles.FONT_ACME = "30px Acme";
    TurnBasedBattles.FONT_BERKSHIRE = "50px Berkshire Swash";
    TurnBasedBattles.GOLD_KNIGHT_STR = "Gold Knight";
    TurnBasedBattles.ELF_MAGE_STR = "Elf Mage";
    TurnBasedBattles.WOMAN_ARCHER_STR = "Woman Archer";
    TurnBasedBattles.PUNIT_ARRAY_X = [
        250,
        250,
        250,
        100,
        100,
        100,
    ];
    TurnBasedBattles.PUNIT_ARRAY_Y = [
        450,
        550,
        650,
        450,
        550,
        650 //11
    ];
    TurnBasedBattles.EUNIT1_POS_X = 850;
    TurnBasedBattles.EUNIT1_POS_Y = 450;
    TurnBasedBattles.EUNIT2_POS_X = 850;
    TurnBasedBattles.EUNIT2_POS_Y = 550;
    TurnBasedBattles.EUNIT3_POS_X = 850;
    TurnBasedBattles.EUNIT3_POS_Y = 650;
    TurnBasedBattles.EUNIT4_POS_X = 1000;
    TurnBasedBattles.EUNIT4_POS_Y = 450;
    TurnBasedBattles.EUNIT5_POS_X = 1000;
    TurnBasedBattles.EUNIT5_POS_Y = 550;
    TurnBasedBattles.EUNIT6_POS_X = 1000;
    TurnBasedBattles.EUNIT6_POS_Y = 650;
    TurnBasedBattles.PSLOT_ARRAY_X = [
        160,
        160,
        160,
        60,
        60,
        60 //11
    ];
    TurnBasedBattles.PSLOT_ARRAY_Y = [
        45,
        145,
        245,
        45,
        145,
        245 //11
    ];
    TurnBasedBattles.E1SLOT_POS_X = 1110;
    TurnBasedBattles.E1SLOT_POS_Y = 45;
    TurnBasedBattles.E2SLOT_POS_X = 1110;
    TurnBasedBattles.E2SLOT_POS_Y = 145;
    TurnBasedBattles.E3SLOT_POS_X = 1110;
    TurnBasedBattles.E3SLOT_POS_Y = 245;
    TurnBasedBattles.E4SLOT_POS_X = 1210;
    TurnBasedBattles.E4SLOT_POS_Y = 45;
    TurnBasedBattles.E5SLOT_POS_X = 1210;
    TurnBasedBattles.E5SLOT_POS_Y = 145;
    TurnBasedBattles.E6SLOT_POS_X = 1210;
    TurnBasedBattles.E6SLOT_POS_Y = 245;
    TurnBasedBattles.MOVEMENT = 1250;
    TurnBasedBattles.BUFFER = 50;
    TurnBasedBattles.MAP_WIDTH = 4641;
    TurnBasedBattles.MAP_HEIGHT = 720;
    TurnBasedBattles.SIZE_ARCHER = 0.75;
    TurnBasedBattles.SIZE_KNIGHT = 1;
    TurnBasedBattles.SIZE_MAGE = 0.55;
    TurnBasedBattles.SIZE_TROLL = 1.3;
    TurnBasedBattles.SIZE_ELF_ARCHER = 1.3;
    TurnBasedBattles.SIZE_KNIGHT_AXE = 0.68;
    TurnBasedBattles.SIZE_KNIGHT_SPEAR = 0.60;
    TurnBasedBattles.SIZE_ORC = 1.3;
    TurnBasedBattles.SIZE_BOSS = 2.5;
    TurnBasedBattles.SIZE_HP = 0.27;
    TurnBasedBattles.SIZE_DMG = 40;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var BattleUI = /** @class */ (function () {
        function BattleUI(game, x, y) {
            this.game = game;
            this.drawMainUI();
        }
        BattleUI.prototype.drawMainUI = function () {
            this.MainPUI = this.game.add.sprite(20, 20, "battleUI");
            this.MainPUI.scale.setTo(1.5, 0.8);
            this.MainPUI.fixedToCamera = true;
            this.drawSlot(this.P1slot, TurnBasedBattles.PSLOT_ARRAY_X[0], TurnBasedBattles.PSLOT_ARRAY_Y[0], true);
            this.drawSlot(this.P2slot, TurnBasedBattles.PSLOT_ARRAY_X[1], TurnBasedBattles.PSLOT_ARRAY_Y[1], true);
            this.drawSlot(this.P3slot, TurnBasedBattles.PSLOT_ARRAY_X[2], TurnBasedBattles.PSLOT_ARRAY_Y[2], true);
            this.drawSlot(this.P4slot, TurnBasedBattles.PSLOT_ARRAY_X[3], TurnBasedBattles.PSLOT_ARRAY_Y[3], true);
            this.drawSlot(this.P5slot, TurnBasedBattles.PSLOT_ARRAY_X[4], TurnBasedBattles.PSLOT_ARRAY_Y[4], true);
            this.drawSlot(this.P6slot, TurnBasedBattles.PSLOT_ARRAY_X[5], TurnBasedBattles.PSLOT_ARRAY_Y[5], true);
            this.MainEUI = this.game.add.sprite(1250, 20, "battleUI");
            this.MainEUI.scale.setTo(-1.5, 0.8);
            this.MainEUI.fixedToCamera = true;
            this.drawSlot(this.E1slot, TurnBasedBattles.E1SLOT_POS_X, TurnBasedBattles.E1SLOT_POS_Y, false);
            this.drawSlot(this.E2slot, TurnBasedBattles.E2SLOT_POS_X, TurnBasedBattles.E2SLOT_POS_Y, false);
            this.drawSlot(this.E3slot, TurnBasedBattles.E3SLOT_POS_X, TurnBasedBattles.E3SLOT_POS_Y, false);
            this.drawSlot(this.E4slot, TurnBasedBattles.E4SLOT_POS_X, TurnBasedBattles.E4SLOT_POS_Y, false);
            this.drawSlot(this.E5slot, TurnBasedBattles.E5SLOT_POS_X, TurnBasedBattles.E5SLOT_POS_Y, false);
            this.drawSlot(this.E6slot, TurnBasedBattles.E6SLOT_POS_X, TurnBasedBattles.E6SLOT_POS_Y, false);
        };
        BattleUI.prototype.drawSlot = function (unit, x, y, temp) {
            unit = this.game.add.sprite(x, y, "battleUI");
            if (temp) {
                unit.scale.setTo(0.6, 0.2);
            }
            else {
                unit.scale.setTo(-0.6, 0.2);
            }
            unit.fixedToCamera = true;
        };
        return BattleUI;
    }());
    TurnBasedBattles.BattleUI = BattleUI;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var UNIT_SELECTION_POS_X = 50;
    var UNIT_SELECTION_POS_Y = 50;
    var ARMORY_POS_X = 370;
    var ARMORY_POS_Y = 50;
    var TOP_BUTTON_COLOR = "#2d2e30";
    var TOP_BUTTON_COLOR_HOVER = "#181b21";
    var BOTTOM_BUTTON_COLOR = "#d1861d";
    var BOTTOM_BUTTON_COLOR_HOVER = "#f26321";
    var TUTORIALS_TEXT_COLOR = "#d11119";
    var DrawUi = /** @class */ (function (_super) {
        __extends(DrawUi, _super);
        function DrawUi(game, x, y, playMusic) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.playMusic = playMusic;
            _this.isOpen = false;
            _this.tutorialsEnabled = true;
            DrawUi.avaliableUserMoney = TurnBasedBattles.START_MONEY;
            return _this;
        }
        DrawUi.prototype.drawMenuStateUI = function () {
            var _this = this;
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
            this.createMenuStartButton();
            this.startButton.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.menuTheme.stop();
                    //this.townMusic();
                }
            });
            this.createMenuOptionsButton();
            this.createMenuSpeakerButton();
            this.createMenuMuteButton();
            this.createMenuExitButton();
            this.createMenuTutorialsButton();
        };
        DrawUi.prototype.drawTownStateUI = function (unitFormation) {
            //console.log(DrawUi.avaliableUserMoney);
            var _this = this;
            // TODO: this must not be here, because they are created every time
            this.unitSelectionMenu = new TurnBasedBattles.SelectUnits(this.game, 0, 0, unitFormation);
            this.upgradeUnitsMenu = new TurnBasedBattles.UpgradeUnits(this.game, 0, 0);
            this.goldIcon = this.game.add.sprite(85, 695, "gold");
            this.drawNextIcon();
            this.nextIcon.events.onInputDown.add(function () {
                _this.checkForUnits();
            });
            this.drawReturnIcon();
            this.returnIcon.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.MENU_STATE, true, false, _this);
                if (_this.playMusic) {
                    _this.townTheme.stop();
                    _this.menuMusic();
                }
            });
        };
        DrawUi.prototype.drawMapStateUI = function () {
            var _this = this;
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
            this.drawReturnIcon();
            this.returnIcon.events.onInputDown.add(function () {
                _this.clickIconSound();
                _this.game.state.start(TurnBasedBattles.TOWN_STATE, true, false, _this, _this.unitSelectionMenu.unitFormation);
                if (_this.playMusic) {
                    _this.mapTheme.stop();
                    //this.townMusic();
                }
            });
        };
        DrawUi.prototype.drawFieldBattleStateUI = function () {
            var _this = this;
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor.png'), pointer";
            // TODO: fix position of ui when the camera is moving
            this.stopCurrentMusic();
            this.clickIconSound();
            this.battleMusic();
            this.drawReturnIcon();
            this.returnIcon.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.MAP_STATE, true, false, _this, _this.unitSelectionMenu.unitFormation);
                if (_this.playMusic) {
                    _this.battleTheme.stop();
                    _this.mapMusic();
                }
            });
            // TODO: maybe fix this
            this.battleUi = new TurnBasedBattles.BattleUI(this.game, 0, 0);
        };
        DrawUi.prototype.isUpgradeUnitsMenuOpen = function (isOpen, unitFormation) {
            if (this.playMusic) {
                this.clickIconSound();
            }
            this.upgradeUnitsMenu.displayUpgradeUnitsMenu(isOpen, this.unitSelectionMenu.unitFormation);
        };
        DrawUi.prototype.isUnitSelectionOpen = function (isOpen, unitFormation) {
            if (this.playMusic) {
                this.clickIconSound();
            }
            this.unitSelectionMenu.displayUnitSelectionMenu(isOpen, unitFormation);
        };
        DrawUi.prototype.drawReturnIcon = function () {
            var _this = this;
            this.returnIcon = this.game.add.sprite(0, 0, "returnIconO");
            this.returnIcon.x = this.game.width / 2 - this.returnIcon.width * 0.5;
            this.returnIcon.y = this.game.height - this.returnIcon.height;
            this.returnIcon.fixedToCamera = true;
            this.returnIcon.inputEnabled = true;
            this.returnIcon.events.onInputOver.add(function () {
                _this.returnIcon.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
            });
            this.returnIcon.events.onInputOut.add(function () {
                _this.returnIcon.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.returnIcon.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.clickIconSound();
                }
            });
        };
        DrawUi.prototype.drawNextIcon = function () {
            var _this = this;
            this.nextIcon = this.game.add.sprite(0, 0, "nextIconOr");
            this.nextIcon.x = this.game.width - this.nextIcon.width;
            this.nextIcon.y = this.game.height - this.nextIcon.height;
            this.nextIcon.inputEnabled = true;
            this.nextIcon.events.onInputOver.add(function () {
                _this.nextIcon.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
            });
            this.nextIcon.events.onInputOut.add(function () {
                _this.nextIcon.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.nextIcon.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.clickIconSound();
                }
            });
        };
        DrawUi.prototype.drawEndTurnIcon = function () {
            var _this = this;
            this.endTurnIcon = this.game.add.sprite(0, 0, "endTurnIcon");
            this.endTurnIcon.x = this.game.width - this.endTurnIcon.width;
            this.endTurnIcon.y = this.game.height - this.endTurnIcon.height;
            this.endTurnIcon.fixedToCamera = true;
            this.endTurnIcon.inputEnabled = true;
            this.endTurnIcon.events.onInputOver.add(function () {
                _this.endTurnIcon.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
            });
            this.endTurnIcon.events.onInputOut.add(function () {
                _this.endTurnIcon.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.endTurnIcon.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.clickIconSound();
                }
            });
        };
        DrawUi.prototype.checkForUnits = function () {
            //console.log("test1");
            var tempStop;
            for (var i = 0; i < this.unitSelectionMenu.unitFormation.length; i++) {
                if (this.unitSelectionMenu.unitFormation[i] === null) {
                    tempStop = false;
                }
                else {
                    tempStop = true;
                    // this means the UI so no more ui instances will be created in the next states
                    this.game.state.start(TurnBasedBattles.MAP_STATE, true, false, this, this.unitSelectionMenu.unitFormation);
                    //console.log("How many times");
                    if (this.playMusic) {
                        this.townTheme.stop();
                        this.mapMusic();
                    }
                }
            }
            if (!tempStop) {
                //console.log("test2");
                this.infoText = this.game.add.text(100, 15, "You need to buy units before you go to fight", { font: TurnBasedBattles.FONT_ACME, fill: BOTTOM_BUTTON_COLOR });
                this.game.add.tween(this.infoText).to({ alpha: 0 }, 2500, Phaser.Easing.Default, true);
            }
        };
        /**
         * ******************** sounds
         */
        DrawUi.prototype.attackSound = function () {
            if (this.playMusic) {
                var swordAttack = this.game.add.audio("sword_attack");
                swordAttack.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("game_over sound is stopping all");
            }
        };
        DrawUi.prototype.gameLostMusic = function () {
            if (this.playMusic) {
                var gameLose = this.game.add.audio("game_over");
                gameLose.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("game_over sound is stopping all");
            }
        };
        DrawUi.prototype.gameWinMusic = function () {
            if (this.playMusic) {
                var gameWin = this.game.add.audio("gamewin");
                gameWin.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("gameWinMusic sound is stopping all");
            }
        };
        DrawUi.prototype.bellSound = function () {
            if (this.playMusic) {
                var bell = this.game.add.audio("bell");
                bell.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("clicking sound is stopping all");
            }
        };
        DrawUi.prototype.stopMusic = function () {
            if (this.playMusic) {
                this.game.sound.stopAll();
                //console.log("stopMusic sound is stopping all");
            }
        };
        DrawUi.prototype.clickIconSound = function () {
            if (this.playMusic) {
                this.iconClick = this.game.add.audio("buttonClick");
                this.iconClick.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("clicking sound is stopping all");
            }
        };
        DrawUi.prototype.menuMusic = function () {
            if (this.playMusic) {
                this.menuTheme = this.game.add.audio("menuTheme");
                this.menuTheme.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("menu music is stopping all");
            }
        };
        DrawUi.prototype.townMusic = function () {
            if (this.playMusic) {
                this.townTheme = this.game.add.audio("townTheme");
                //this.townTheme.volume = 0.5;
                this.townTheme.play(null, null, 0.5, true);
            }
            else {
                this.game.sound.stopAll();
                //console.log("town music is stopping all");
            }
        };
        DrawUi.prototype.mapMusic = function () {
            if (this.playMusic) {
                this.mapTheme = this.game.add.audio("mapTheme");
                this.mapTheme.play();
            }
            else {
                this.game.sound.stopAll();
                //console.log("map music is stopping all");
            }
        };
        DrawUi.prototype.battleMusic = function () {
            if (this.playMusic) {
                this.battleTheme = this.game.add.audio("battleTheme");
                this.battleTheme.play(null, null, 0.5, true);
            }
            else {
                this.game.sound.stopAll();
                //console.log("map music is stopping all");
            }
        };
        DrawUi.prototype.stopCurrentMusic = function () {
            this.game.sound.stopAll();
        };
        /**
         * ***************** buttons
         */
        DrawUi.prototype.createMenuStartButton = function () {
            var _this = this;
            this.startButton = this.game.add.sprite(100, 100, "menuButton1");
            this.startButton.scale.setTo(0.3, 0.2);
            this.startButton.inputEnabled = true;
            this.startButtonText = this.game.add.text(0, 0, "START", { font: TurnBasedBattles.FONT_ACME, fill: TOP_BUTTON_COLOR });
            this.startButtonText.anchor.set(-1.6, -0.3);
            this.startButtonText.position = this.startButton.position;
            this.startButton.events.onInputOver.add(function () {
                _this.startButtonText.fill = BOTTOM_BUTTON_COLOR_HOVER;
            });
            this.startButton.events.onInputOut.add(function () {
                _this.startButtonText.fill = TOP_BUTTON_COLOR;
            });
            this.startButton.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.TOWN_STATE, true, false, _this, undefined, _this.tutorialsEnabled);
                if (_this.playMusic) {
                    _this.clickIconSound();
                    _this.stopCurrentMusic();
                }
            });
        };
        DrawUi.prototype.createMenuOptionsButton = function () {
            var _this = this;
            this.optionsButton = this.game.add.sprite(100, 200, "menuButton1");
            this.optionsButton.scale.setTo(0.3, 0.2);
            this.optionsButton.inputEnabled = true;
            this.optionsButtonText = this.game.add.text(0, 0, "    OPTIONS", { font: TurnBasedBattles.FONT_ACME, fill: TOP_BUTTON_COLOR });
            this.optionsButtonText.anchor.set(-0.7, -0.3);
            this.optionsButtonText.position = this.optionsButton.position;
            this.optionsButton.events.onInputOver.add(function () {
                _this.optionsButtonText.fill = BOTTOM_BUTTON_COLOR_HOVER;
            });
            this.optionsButton.events.onInputOut.add(function () {
                _this.optionsButtonText.fill = TOP_BUTTON_COLOR;
            });
            this.optionsButton.events.onInputDown.add(function () {
                if (_this.isOpen) {
                    _this.speakerButton.alpha = 1;
                    _this.muteButton.alpha = 1;
                    _this.enableTutorialsText.alpha = 1;
                    _this.isOpen = false;
                }
                else {
                    _this.speakerButton.alpha = 0;
                    _this.muteButton.alpha = 0;
                    _this.enableTutorialsText.alpha = 0;
                    _this.isOpen = true;
                }
            });
        };
        DrawUi.prototype.createMenuTutorialsButton = function () {
            var _this = this;
            this.enableTutorialsText = this.game.add.text(this.game.width * 0.22, this.game.height * 0.54, "Disable tutorials ? <OK>", {
                font: "27px Acme",
                fill: TUTORIALS_TEXT_COLOR,
                align: "center"
            });
            this.enableTutorialsText.anchor.setTo(0.5);
            this.enableTutorialsText.alpha = 0;
            this.enableTutorialsText.inputEnabled = true;
            this.enableTutorialsText.events.onInputDown.addOnce(function () {
                _this.enableTutorialsText.inputEnabled = false;
                _this.enableTutorialsText.destroy();
                _this.tutorialsEnabled = false;
            });
        };
        DrawUi.prototype.createMenuSpeakerButton = function () {
            var _this = this;
            this.speakerButton = this.game.add.image(200, 280, "speaker");
            this.speakerButton.alpha = 0;
            this.speakerButton.inputEnabled = true;
            this.speakerButton.events.onInputDown.add(function () {
                if (!_this.playMusic) {
                    _this.playMusic = true;
                    _this.menuMusic();
                }
                _this.speakerButton.tint = TurnBasedBattles.COLOR_HOVER_GREEN_NUM3;
                _this.muteButton.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.speakerButton.events.onInputOut.add(function () {
                _this.speakerButton.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
        };
        DrawUi.prototype.createMenuMuteButton = function () {
            var _this = this;
            this.muteButton = this.game.add.image(280, 280, "mute");
            this.muteButton.alpha = 0;
            this.muteButton.inputEnabled = true;
            this.muteButton.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.clickIconSound();
                    _this.playMusic = false;
                    _this.game.sound.stopAll();
                }
                _this.muteButton.tint = TurnBasedBattles.COLOR_HOVER_RED_NUM2;
                _this.speakerButton.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.muteButton.events.onInputOut.add(function () {
                _this.muteButton.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
        };
        DrawUi.prototype.createMenuExitButton = function () {
            var _this = this;
            this.exitButton = this.game.add.sprite(100, 450, "menuButton2");
            this.exitButton.scale.setTo(0.27, 0.2);
            this.exitButton.inputEnabled = true;
            this.exitButtonText = this.game.add.text(0, 0, "EXIT", { font: TurnBasedBattles.FONT_ACME, fill: BOTTOM_BUTTON_COLOR });
            this.exitButtonText.anchor.set(-2.4, -0.3);
            this.exitButtonText.position = this.exitButton.position;
            this.exitButton.events.onInputOver.add(function () {
                _this.exitButtonText.fill = BOTTOM_BUTTON_COLOR_HOVER;
            });
            this.exitButton.events.onInputOut.add(function () {
                _this.exitButtonText.fill = BOTTOM_BUTTON_COLOR;
            });
            this.exitButton.events.onInputDown.add(function () {
                if (_this.playMusic) {
                    _this.clickIconSound();
                }
                _this.game.destroy();
                // @ts-ignore: for cordova stuff
                if (navigator.app) {
                    // @ts-ignore: for cordova stuff
                    navigator.app.exitApp();
                    // @ts-ignore: for cordova stuff
                }
                else if (navigator.device) {
                    // @ts-ignore: for cordova stuff
                    navigator.device.exitApp();
                }
                else {
                    window.close();
                }
            });
        };
        return DrawUi;
    }(Phaser.Sprite));
    TurnBasedBattles.DrawUi = DrawUi;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var TOTAL_UNIT_SLOTS = 6;
    var SelectUnits = /** @class */ (function (_super) {
        __extends(SelectUnits, _super);
        function SelectUnits(game, x, y, newUnitFormation) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.unitSelectionSprite = _this.game.add.sprite(TurnBasedBattles.UNIT_SELECTION_POS_X, TurnBasedBattles.UNIT_SELECTION_POS_Y, "unitSelection");
            _this.unitSelectionSprite.alpha = 0;
            _this.unitSelectionSprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            _this.clickerSprites = [];
            _this.unitIcons = [];
            _this.unitFormation = [];
            if (newUnitFormation === undefined) {
                _this.drawAllIconsAndText(_this.unitIcons);
                _this.loadClickers();
                _this.loadDefaultIcons();
                //console.log("draw icons and text unit icons UNDEFINED");
            }
            else {
                _this.drawAllIconsAndText(_this.unitIcons);
                _this.loadClickers();
                _this.loadDefaultIcons();
                //console.log("1. These are the generated units: ");
                //console.log(newUnitFormation);
                _this.generateUnits(newUnitFormation);
                //console.log("draw icons and text not Undefined");
                //console.log("2. These are the generated units: ");
                //console.log(newUnitFormation);
            }
            return _this;
        }
        SelectUnits.prototype.displayUnitSelectionMenu = function (open, unitFormation) {
            if (open) {
                if (unitFormation === undefined) {
                    this.showIcons(this.unitIcons, false);
                    //console.log("Frst time from select units and its UNDEFINED");
                }
                else {
                    unitFormation = unitFormation.concat(this.unitIcons);
                    this.showIcons(unitFormation, true);
                    //console.log("Frst time from select units and its not Undef");
                }
            }
            else {
                if (unitFormation === undefined) {
                    //console.log("Second time from select units and its UNDEFINED");
                    this.hideIcons(this.unitIcons, false);
                }
                else {
                    unitFormation = unitFormation.concat(this.unitIcons);
                    //console.log("Second time from select units and its not Undef");
                    this.hideIcons(unitFormation, false);
                }
            }
        };
        SelectUnits.prototype.generateUnits = function (unitFormation) {
            this.unitFormation = unitFormation;
            for (var i = 0; i < this.unitFormation.length; i++) {
                //console.log("MSG1");
                //console.log(unitFormation);
                //console.log("MSG2");
                //console.log(this.unitFormation);
                if (this.unitFormation[i] === null) {
                    this.unitFormation.splice(i, 1, null);
                    //console.log("Null" + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.GOLD_KNIGHT_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    //console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.ELF_MAGE_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    //console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.WOMAN_ARCHER_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    //console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === "Knight Spear") {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    //console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === "Knight Axe") {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    //console.log(this.unitFormation[i].name + " at " + i.toString());
                }
            }
            for (var index = 0; index < this.unitFormation.length; index++) {
                //console.log("MSG3");
                //console.log(unitFormation);
                //console.log("MSG4");
                //console.log(this.unitFormation);
                if (this.unitFormation[index] === null) {
                    //console.log("Null at set rect and generate units");
                }
                else {
                    var unit = this.unitFormation[index];
                    this.game.add.existing(unit.circleImage);
                    this.game.add.existing(unit.rectImage);
                    unit.circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                    unit.rectImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                }
            }
            this.alignRectImages(this.unitFormation);
            this.enableAndCheckUnits(this.unitFormation);
            // displays and updates unit info
            this.enableIconsTintAndInfo(this.unitFormation);
            return this.unitFormation;
        };
        SelectUnits.prototype.enableAndCheckUnits = function (unitFormation) {
            var _this = this;
            unitFormation.forEach(function (unit) {
                var tempPosX;
                var tempPosY;
                if (unit === null) {
                    //console.log(" Null at enable behavoiur");
                }
                else {
                    unit.circleImage.events.onDragStart.add(function () {
                        tempPosX = unit.circleImage.x;
                        tempPosY = unit.circleImage.y;
                        //console.log(tempPosX);
                    });
                    unit.circleImage.events.onDragStop.add(function () {
                        _this.clickerSprites.forEach(function (clicker) {
                            if ((unit.name === TurnBasedBattles.GOLD_KNIGHT_STR)) {
                                _this.enableBehaviour(clicker, unit, tempPosX, tempPosY);
                            }
                            else if ((unit.name === TurnBasedBattles.WOMAN_ARCHER_STR)) {
                                _this.enableBehaviour(clicker, unit, tempPosX, tempPosY);
                            }
                            else if ((unit.name === TurnBasedBattles.ELF_MAGE_STR)) {
                                _this.enableBehaviour(clicker, unit, tempPosX, tempPosY);
                            }
                            else if ((unit.name === "Knight Spear")) {
                                _this.enableBehaviour(clicker, unit, tempPosX, tempPosY);
                            }
                            else if ((unit.name === "Knight Axe")) {
                                _this.enableBehaviour(clicker, unit, tempPosX, tempPosY);
                            }
                        });
                    });
                }
            });
        };
        SelectUnits.prototype.enableBehaviour = function (clicker, unit, tempX, tempY) {
            if (this.checkOverlap(clicker, unit.circleImage)) {
                unit.rectImage.x = clicker.x;
                unit.rectImage.y = clicker.y;
                unit.circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                //console.log("the circleimage x position is: " + unit.circleImage.x);
            }
            if (unit.circleImage.x === TurnBasedBattles.HIDE_FROM_SCREEN) {
                //console.log("position out of screen");
            }
            else if (unit.circleImage.x !== tempX || unit.circleImage.y !== tempX) {
                unit.circleImage.x = tempX;
                unit.circleImage.y = tempY;
                //console.log("the temp x position is: " + tempX);
                //console.log("the circleimage x position is: " + unit.circleImage.x);
            }
            // set unit icons for spending money
            if ((TurnBasedBattles.DrawUi.avaliableUserMoney >= 0) && (TurnBasedBattles.DrawUi.avaliableUserMoney >= unit.priceCost)) {
                if (this.checkOverlap(clicker, unit.circleImage)) {
                    //console.log("has money ");
                    TurnBasedBattles.DrawUi.avaliableUserMoney -= unit.priceCost;
                    TurnBasedBattles.DrawUi.userMoneyText.setText(TurnBasedBattles.GOLD_STR + TurnBasedBattles.DrawUi.avaliableUserMoney.toString());
                }
            }
            for (var index = 0; index < this.unitIcons.length; index++) {
                var unit_1 = this.unitIcons[index];
                if (unit_1.priceCost > TurnBasedBattles.DrawUi.avaliableUserMoney) {
                    unit_1.circleImage.tint = TurnBasedBattles.COLOR_HOVER_RED_NUM2;
                    unit_1.circleImage.inputEnabled = false;
                    //console.log(unit.name + "cant buy nothing");
                }
            }
        };
        SelectUnits.prototype.checkOverlap = function (clicker, unit) {
            var boundsClicker = clicker.getBounds();
            var boundsUnit = unit.getBounds();
            return Phaser.Rectangle.intersects(boundsClicker, boundsUnit);
        };
        SelectUnits.prototype.alignRectImages = function (unitFormation) {
            var _this = this;
            var _loop_1 = function (currentUnit) {
                var unit = unitFormation[currentUnit];
                var tempPosX;
                var tempPosY;
                if (unit === null) {
                    //console.log(" Null at enable clicker of current unit" + currentUnit.toString());
                }
                else {
                    unit.rectImage.events.onDragStart.add(function () {
                        tempPosX = unit.rectImage.x;
                        tempPosY = unit.rectImage.y;
                        //console.log(tempPosX);
                    });
                    unit.rectImage.events.onDragStop.add(function () {
                        //console.log("before unit rect image x" + unit.rectImage.x);
                        _this.clickerSprites.forEach(function (clicker) {
                            for (var checkedUnit = 0; checkedUnit < unitFormation.length; checkedUnit++) {
                                var unitCheck = unitFormation[checkedUnit];
                                if (unitCheck === null) {
                                    //console.log(" Null at enable checked unit");
                                }
                                else {
                                    //console.log("unit x" + unit.rectImage.x + " unitCheck x" + unitCheck.rectImage.x);
                                    if (unit.rectImage.overlap(clicker)) {
                                        unit.rectImage.x = clicker.x;
                                        unit.rectImage.y = clicker.y;
                                        //console.log(" old behaviour");
                                    }
                                    else if (unit.name === unitCheck.name) {
                                        //console.log(" unit has the same name as unitcheck, so skip");
                                    }
                                    else if (unit.rectImage.overlap(unitCheck.rectImage)
                                    /*|| unit.rectImage.x !== tempPosX || unit.rectImage.y !== tempPosY*/ ) {
                                        //console.log(unit.name + " is overlaps over " + unitCheck.name);
                                        unit.rectImage.x = tempPosX;
                                        unit.rectImage.y = tempPosY;
                                    }
                                }
                            }
                        });
                    });
                }
            };
            for (var currentUnit = 0; currentUnit < unitFormation.length; currentUnit++) {
                _loop_1(currentUnit);
            }
        };
        SelectUnits.prototype.enableIconsTintAndInfo = function (unitFormation) {
            var _this = this;
            unitFormation.forEach(function (unit) {
                if (unit === null) {
                    //console.log(" Null at unitinfo");
                }
                else {
                    unit.circleImage.events.onInputOver.add(function () {
                        unit.circleImage.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                        if (unit.name === TurnBasedBattles.GOLD_KNIGHT_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === TurnBasedBattles.ELF_MAGE_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === TurnBasedBattles.WOMAN_ARCHER_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === "Knight Spear") {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === "Knight Axe") {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                    });
                    //console.log(unit.name);
                    unit.circleImage.events.onInputOut.add(function () {
                        unit.circleImage.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
                        _this.unitInfoText.setText("");
                    });
                    /**** for rect images too ***/
                    unit.rectImage.events.onInputOver.add(function () {
                        unit.rectImage.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                        if (unit.name === TurnBasedBattles.GOLD_KNIGHT_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === TurnBasedBattles.ELF_MAGE_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === TurnBasedBattles.WOMAN_ARCHER_STR) {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === "Knight Spear") {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                        else if (unit.name === "Knight Axe") {
                            _this.unitInfoText.setText(unit.showUnitInfo());
                        }
                    });
                    //console.log(unit.name);
                    unit.rectImage.events.onInputOut.add(function () {
                        unit.rectImage.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
                        _this.unitInfoText.setText("");
                    });
                }
            });
        };
        SelectUnits.prototype.drawAllIconsAndText = function (unitFormation) {
            var UNIT_TEXT_POS_X = 540;
            var UNIT_TEXT_POS_Y = 100;
            var MONEY_TEXT_POS_X = 10;
            var MONEY_TEXT_POS_Y = 700;
            //this.resetUnitsIcon = this.game.add.sprite(0, 0, "endTurnIcon");
            //this.resetUnitsIcon.alpha = 0;
            //this.resetUnitsIcon.inputEnabled = true;
            //this.resetUnitsIcon.events.onInputOver.add(() => {
            //    this.resetUnitsIcon.tint = COLOR_HOVER_YELLOW_NUM;
            //});
            //this.resetUnitsIcon.events.onInputOut.add(() => {
            //    this.resetUnitsIcon.tint = COLOR_CLEAR_NUM;
            //});
            //this.resetUnitsIcon.events.onInputDown.add(() => {
            //    this.resetUnitIconPositions(unitFormation);
            //});
            //this.slotsAvaliableText = this.game.add.text(TEXT_POS_X, TEXT_POS_Y,
            //    EMPTY_SLOTS.toString(), { font: FONT_ACME, fill: COLOR_YELLOW });
            //this.slotsAvaliableText.alpha = 0;
            this.unitInfoText = this.game.add.text(UNIT_TEXT_POS_X, UNIT_TEXT_POS_Y, "", { font: "22px Acme", fill: TurnBasedBattles.COLOR_ORANGE });
            this.unitInfoText.alpha = 0;
            TurnBasedBattles.DrawUi.userMoneyText = this.game.add.text(MONEY_TEXT_POS_X, MONEY_TEXT_POS_Y, TurnBasedBattles.GOLD_STR + TurnBasedBattles.DrawUi.avaliableUserMoney.toString(), { font: "15px Acme", fill: TurnBasedBattles.COLOR_GOLD });
            //DrawUi.userMoneyText.alpha = 1;
        };
        SelectUnits.prototype.loadClickers = function () {
            for (var i = 0; i < TOTAL_UNIT_SLOTS; i++) {
                this.clickerSprites.push(new Phaser.Sprite(this.game, 0, 0, "clicker"));
                this.clickerSprites[i].name = i.toString();
            }
            for (var index = 0; index < this.clickerSprites.length; index++) {
                var clicker = this.clickerSprites[index];
                this.game.add.existing(clicker);
                clicker.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                clicker.alpha = 0;
            }
            //this.emptySlots = EMPTY_SLOTS;
            //this.slotsAvaliableText.setText((this.emptySlots).toString());
        };
        SelectUnits.prototype.loadDefaultIcons = function () {
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            this.unitIcons.push(new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN));
            for (var index = 0; index < this.unitIcons.length; index++) {
                var unit = this.unitIcons[index];
                this.game.add.existing(unit.circleImage);
                this.game.add.existing(unit.rectImage);
                unit.circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                unit.rectImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            }
            this.alignRectImages(this.unitIcons);
            this.enableAndCheckUnits(this.unitIcons);
            // displays and updates unit info
            this.enableIconsTintAndInfo(this.unitIcons);
        };
        SelectUnits.prototype.allignAllCircleIcons = function (units) {
            var CENTER_COL = 45;
            var POSITION_1 = -33;
            var POSITION_2 = -123;
            var POSITION_3 = -213;
            var POSITION_4 = -298;
            var POSITION_5 = -386;
            for (var i = 0; i < units.length; i++) {
                if (units[i] === null) {
                    //console.log("Null" + " at allign all icons" + i.toString());
                    continue;
                }
                else {
                    //console.log(i + "   " + units[i].name);
                    if (units[i].name === TurnBasedBattles.GOLD_KNIGHT_STR) {
                        units[i].circleImage.alignIn(this.unitSelectionSprite, Phaser.TOP_CENTER, CENTER_COL, POSITION_1);
                    }
                    else if (units[i].name === TurnBasedBattles.ELF_MAGE_STR) {
                        units[i].circleImage.alignIn(this.unitSelectionSprite, Phaser.TOP_CENTER, CENTER_COL, POSITION_2);
                    }
                    else if (units[i].name === TurnBasedBattles.WOMAN_ARCHER_STR) {
                        units[i].circleImage.alignIn(this.unitSelectionSprite, Phaser.TOP_CENTER, CENTER_COL, POSITION_3);
                    }
                    else if (units[i].name === "Knight Spear") {
                        units[i].circleImage.alignIn(this.unitSelectionSprite, Phaser.TOP_CENTER, CENTER_COL, POSITION_4);
                    }
                    else if (units[i].name === "Knight Axe") {
                        units[i].circleImage.alignIn(this.unitSelectionSprite, Phaser.TOP_CENTER, CENTER_COL, POSITION_5);
                    }
                }
            }
        };
        SelectUnits.prototype.allignAllClickers = function (clicker) {
            var POSITION_OFFS_X_1 = -86;
            var POSITION_OFFS_X_2 = -246;
            var POSITION_OFFS_Y = 183;
            clicker[0].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_1, -POSITION_OFFS_Y);
            clicker[1].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_1);
            clicker[2].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_1, POSITION_OFFS_Y);
            clicker[3].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_2, -POSITION_OFFS_Y);
            clicker[4].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_2);
            clicker[5].alignIn(this.unitSelectionSprite, Phaser.CENTER, POSITION_OFFS_X_2, POSITION_OFFS_Y);
        };
        SelectUnits.prototype.hideAllClickers = function (clicker) {
            clicker.forEach(function (clicker) {
                clicker.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            });
        };
        SelectUnits.prototype.showIcons = function (unitFormation, concat) {
            //const RESET_UNITS_ICON_X: number = this.unitSelectionSprite.width - 200;
            //const RESET_UNITS_ICON_Y: number = this.unitSelectionSprite.height - 130;
            if (concat === void 0) { concat = null; }
            this.unitSelectionSprite.x = TurnBasedBattles.UNIT_SELECTION_POS_X;
            //this.resetUnitsIcon.x = RESET_UNITS_ICON_X;
            //this.resetUnitsIcon.y = RESET_UNITS_ICON_Y;
            //if (this.emptySlots === EMPTY_SLOTS) {
            this.allignAllCircleIcons(unitFormation);
            //}
            this.allignAllClickers(this.clickerSprites);
            this.alignRectImages(unitFormation);
            // tween objects to visible
            this.game.add.tween(TurnBasedBattles.DrawUi.userMoneyText).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.unitInfoText).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.unitSelectionSprite).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            //this.game.add.tween(this.slotsAvaliableText).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            //this.game.add.tween(this.resetUnitsIcon).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            for (var i = 0; i < unitFormation.length; i++) {
                if (unitFormation[i] === null) {
                    //console.log("Null" + "at show icons at " + i.toString());
                }
                else {
                    if (i < TOTAL_UNIT_SLOTS && concat) { // 6 units
                        //this.emptySlots--;
                        //this.slotsAvaliableText.setText((this.emptySlots).toString());
                        unitFormation[i].circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                        unitFormation[i].rectImage.x = this.clickerSprites[i].x;
                        unitFormation[i].rectImage.y = this.clickerSprites[i].y;
                        //console.log("unit number " + i + " " + unitFormation[i].name);
                        //console.log(unitFormation);
                    }
                    //console.log(i + "   " + unitIcons[i].name);
                    this.game.add.tween(unitFormation[i].circleImage).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
                    this.game.add.tween(unitFormation[i].rectImage).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
                    unitFormation[i].circleImage.inputEnabled = true;
                    unitFormation[i].circleImage.input.enableDrag(false, true, false, null, null, this.unitSelectionSprite);
                    unitFormation[i].rectImage.inputEnabled = true;
                    unitFormation[i].rectImage.input.enableDrag(false, true, false, null, null, this.unitSelectionSprite);
                }
            }
        };
        SelectUnits.prototype.hideIcons = function (unitFormation, concat) {
            var _this = this;
            if (concat === void 0) { concat = null; }
            this.game.add.tween(this.unitInfoText).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
                .onComplete.addOnce(function () {
                _this.unitSelectionSprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            });
            this.game.add.tween(this.unitSelectionSprite).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
                .onComplete.addOnce(function () {
                _this.unitSelectionSprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            });
            for (var i = 0; i < unitFormation.length; i++) {
                if (unitFormation[i] === null) {
                    //console.log("Null" + "at show icons at " + i.toString());
                    continue;
                }
                else {
                    //console.log("begin tween" + "at show icons at " + i.toString());
                    unitFormation[i].circleImage.inputEnabled = false;
                    unitFormation[i].rectImage.inputEnabled = false;
                    this.game.add.tween(unitFormation[i].circleImage).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
                    this.game.add.tween(unitFormation[i].rectImage).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
                }
            }
            this.exportArray(unitFormation, concat);
            this.hideAllClickers(this.clickerSprites);
        };
        // Push units names into array for send to next state
        // I just hardcoded this sh*t
        SelectUnits.prototype.exportArray = function (unitFormation, concat) {
            //debugger;
            if (concat === void 0) { concat = null; }
            for (var currentClickerIndex = 0; currentClickerIndex < this.clickerSprites.length; currentClickerIndex++) {
                var clicker = this.clickerSprites[currentClickerIndex];
                //console.log("I'm at export array at current clicker index of: " + currentClickerIndex.toString());
                if (!concat) {
                    //console.log("SPLICED! at currentClickerIndex with null, is finished:" + concat);
                    this.unitFormation.splice(currentClickerIndex, 1, null);
                }
                //console.log("DBG IVR1, Given unitFormation:");
                //console.log(unitFormation);
                //console.log("DBG IVR2, Current this.unitFormation:");
                //console.log(this.unitFormation);
                for (var currentUnitIndex = 0; currentUnitIndex < unitFormation.length; currentUnitIndex++) {
                    if (unitFormation[currentUnitIndex] === null && currentUnitIndex < TOTAL_UNIT_SLOTS) {
                        //console.log("Null so no export");
                    }
                    else {
                        if (unitFormation[currentUnitIndex].rectImage.x === clicker.x &&
                            unitFormation[currentUnitIndex].rectImage.y === clicker.y) {
                            this.unitFormation.splice(currentClickerIndex, 1, unitFormation[currentUnitIndex]);
                            //console.log("unitFormation[currentUnitIndex].rectImage matches the clicker!");
                            //console.log(clicker.name + " " + unitFormation[currentUnitIndex].name);
                        }
                        else {
                            //console.log("unitFormation[currentUnitIndex] !== null: clicker name:"
                            //    + clicker.name + " clicker.x:" + clicker.x + " y:" + clicker.y);
                        }
                    }
                }
            }
            //console.log("The final exported array is this.unitFormation: ");
            //console.log(this.unitFormation);
        };
        return SelectUnits;
    }(Phaser.Sprite));
    TurnBasedBattles.SelectUnits = SelectUnits;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var ARMORY_POS_X = 370;
    var ARMORY_POS_Y = 50;
    var UpgradeUnits = /** @class */ (function (_super) {
        __extends(UpgradeUnits, _super);
        //private unitFormation: Array<Unit>;
        function UpgradeUnits(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            //console.log("Opened the upgrades menu");
            _this.armorySprite = _this.game.add.sprite(ARMORY_POS_X, ARMORY_POS_Y, "armory");
            _this.armorySprite.alpha = 0;
            _this.armorySprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            _this.infoText = _this.game.add.text(0, 0, "", {
                font: "22px Acme",
                fill: TurnBasedBattles.COLOR_ORANGE,
                align: "center"
            });
            //this.unitFormation = unitFormation;
            _this.sword1 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "sword1");
            _this.sword2 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "sword2");
            _this.sword3 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "sword3");
            _this.equipmentArms = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "equipment-arms");
            _this.armor1 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "armor1");
            _this.armor2 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "armor2");
            _this.armor3 = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "armor3");
            _this.equipmentLegs = _this.game.add.sprite(TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, "equipment-legs");
            return _this;
        }
        UpgradeUnits.prototype.displayUpgradeUnitsMenu = function (isOpen, unitFormation) {
            var _this = this;
            if (isOpen) {
                this.armorySprite.x = ARMORY_POS_X;
                this.game.add.tween(this.armorySprite).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
                this.showUpgrades(unitFormation);
            }
            else {
                this.game.add.tween(this.armorySprite).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
                    .onComplete.addOnce(function () {
                    _this.armorySprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                });
                this.hideUpgrades();
            }
        };
        UpgradeUnits.prototype.showUpgrades = function (unitFormation) {
            //console.log("Show upgrade icons");
            this.loadSwords(unitFormation);
            this.loadArmor(unitFormation);
            this.loadEquipment(unitFormation);
        };
        UpgradeUnits.prototype.hideUpgrades = function () {
            this.game.add.tween(this.infoText).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.sword1).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.sword2).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.sword3).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.equipmentArms).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.armor1).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.armor2).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.armor3).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
            this.game.add.tween(this.equipmentLegs).to({ alpha: 0 }, 250, Phaser.Easing.Default, true);
        };
        UpgradeUnits.prototype.loadSwords = function (unitFormation) {
            this.loadUpgrade(this.sword1, Phaser.LEFT_TOP, -96, -58, 100, "Increases the strength\n of your units with +10 STR\n Costs 100 Gold", unitFormation);
            this.loadUpgrade(this.sword2, Phaser.LEFT_TOP, -96 - this.sword1.width, -58, 250, "Increases the strength\n of your units with aditional +35 STR\n Costs 250 Gold", unitFormation);
            this.loadUpgrade(this.sword3, Phaser.LEFT_TOP, -96 - this.sword1.width - this.sword2.width, -58, 420, "Increase the strength\n of your units with +50 STR\n Costs 420 Gold", unitFormation);
        };
        UpgradeUnits.prototype.loadArmor = function (unitFormation) {
            this.loadUpgrade(this.armor1, Phaser.LEFT_CENTER, -96, -16, 100, "Increase the health\n of your units with +100 Health\n Costs 100 Gold", unitFormation);
            this.loadUpgrade(this.armor2, Phaser.LEFT_CENTER, -96 - this.armor1.width, -16, 200, "Increase the health\n of your units with +125 additional Health\n Costs 200 Gold", unitFormation);
            this.loadUpgrade(this.armor3, Phaser.LEFT_CENTER, -96 - this.armor1.width - this.armor2.width, -16, 300, "Increase the health\n of your units with +150 additional Health\n Costs 300 Gold", unitFormation);
        };
        UpgradeUnits.prototype.loadEquipment = function (unitFormation) {
            this.loadUpgrade(this.equipmentArms, Phaser.LEFT_TOP, -96 - this.sword1.width
                - this.sword2.width - this.sword3.width, -58, 200, "Increase the agility\n of your units with +15 AGI\n Costs 200 Gold", unitFormation);
            this.loadUpgrade(this.equipmentLegs, Phaser.LEFT_CENTER, -96 - this.armor1.width
                - this.armor2.width - this.armor3.width, -16, 300, "Increase the agility\n of your units with +30 AGI\n Costs 300 Gold", unitFormation);
        };
        UpgradeUnits.prototype.loadUpgrade = function (upgrade, pos, offX, offY, cost, upgrText, unitFormation) {
            var _this = this;
            upgrade.alignIn(this.armorySprite, pos, offX, offY);
            this.game.add.tween(upgrade).to({ alpha: 1 }, 250, Phaser.Easing.Default, true);
            upgrade.inputEnabled = true;
            upgrade.events.onInputDown.addOnce(function () {
                if (upgrade.alive) {
                    if ((TurnBasedBattles.DrawUi.avaliableUserMoney >= 0) && (TurnBasedBattles.DrawUi.avaliableUserMoney >= cost)) {
                        {
                            TurnBasedBattles.DrawUi.avaliableUserMoney -= cost;
                            TurnBasedBattles.DrawUi.userMoneyText.setText(TurnBasedBattles.GOLD_STR + TurnBasedBattles.DrawUi.avaliableUserMoney.toString());
                            upgrade.alive = false;
                            //console.log("Upgraded!" + Knight.strength);
                            upgrade.tint = 0xbaadb9;
                            //Knight.strength += 200;
                            // //console.log("Upgraded!" + Knight.strength);
                            if (unitFormation === undefined) {
                                //console.log("Undefined unit formation!");
                            }
                            else {
                                unitFormation.forEach(function (unit) {
                                    if (unit === null) {
                                        //console.log("Null!");
                                    }
                                    else {
                                        unit.strength += 200;
                                        //console.log("Upgraded!" + unit.strength);
                                    }
                                });
                            }
                        }
                    }
                }
            });
            upgrade.events.onInputOver.add(function () {
                if (upgrade.alive) {
                    if ((TurnBasedBattles.DrawUi.avaliableUserMoney >= 0) && (TurnBasedBattles.DrawUi.avaliableUserMoney >= cost)) {
                        {
                            upgrade.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                        }
                    }
                    else {
                        upgrade.tint = TurnBasedBattles.COLOR_HOVER_RED_NUM2;
                    }
                }
                _this.infoText.setText(upgrText);
                _this.infoText.alignIn(_this.armorySprite, Phaser.BOTTOM_CENTER, -10, -80);
                _this.infoText.alpha = 1;
            });
            upgrade.events.onInputOut.add(function () {
                if (upgrade.alive) {
                    upgrade.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
                }
                _this.infoText.setText("");
                _this.infoText.alpha = 0;
            });
        };
        return UpgradeUnits;
    }(Phaser.Sprite));
    TurnBasedBattles.UpgradeUnits = UpgradeUnits;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var UnitStates;
    (function (UnitStates) {
        UnitStates[UnitStates["IDLE"] = 0] = "IDLE";
        UnitStates[UnitStates["WALKLEFT"] = 1] = "WALKLEFT";
        UnitStates[UnitStates["WALKRIGHT"] = 2] = "WALKRIGHT";
        UnitStates[UnitStates["ATTACK"] = 3] = "ATTACK";
        UnitStates[UnitStates["HURT"] = 4] = "HURT";
        UnitStates[UnitStates["DEAD"] = 5] = "DEAD";
    })(UnitStates = TurnBasedBattles.UnitStates || (TurnBasedBattles.UnitStates = {}));
    var Unit = /** @class */ (function (_super) {
        __extends(Unit, _super);
        function Unit(game, x, y) {
            var _this = _super.call(this, game, 0, 0) || this;
            _this.game = game;
            _this.isEnemy = false;
            _this.isHighlighted = false;
            _this.isAttackable = false;
            _this.isAttacked = false;
            _this.isAlive = true;
            _this.isWizard = false;
            _this.isMelee = false;
            _this.isOrc = false;
            _this.isDone = false;
            _this.canAttack = false;
            _this.attackFinished = true;
            _this.attackStarted = false;
            _this.continue = false;
            _this.damageDone = false;
            _this.initialPositionX = x;
            _this.initialPositionY = y;
            _this.lvl = 0;
            _this.HPbarTop = _this.game.make.sprite(x, y, "hpTop");
            _this.HPbarBottom = _this.game.make.sprite(x, y, "hpBottom");
            _this.attackSignal = new Phaser.Signal();
            return _this;
        }
        Unit.prototype.estimateHealthScale = function () {
            return (((this.health / this.defaultHealth) * TurnBasedBattles.SIZE_HP) > 0) ? ((this.health / this.defaultHealth) * TurnBasedBattles.SIZE_HP) : 0;
        };
        Unit.prototype.ShowDamage = function (showDMG, Unit, damage) {
            showDMG = this.game.add.text(Unit.x + TurnBasedBattles.BUFFER, Unit.y, damage, {
                font: "Arial Black",
                fontWeight: "bold",
                fontSize: TurnBasedBattles.SIZE_DMG,
                fill: "#ff2222",
                align: "center",
                stroke: "#000000",
                strokeThickness: 3
            });
            showDMG.anchor.setTo(0, 0.5);
            this.game.add.tween(showDMG).to({ y: Unit.y - 120 }, 1100, Phaser.Easing.Elastic.Out, true)
                .onComplete.add(function () {
                showDMG.destroy();
            });
        };
        Unit.prototype.TakeDamage = function (damage) {
            this.isAttacked = true;
            this.health -= damage;
            //console.log(this.health, this.defaultHealth);
            this.HPbarTop.scale.setTo(this.estimateHealthScale(), TurnBasedBattles.SIZE_HP - 0.02);
            //console.log(this.name, this.health);
        };
        Unit.prototype.DoUnitDamage = function (Unit, damage) {
            if (Unit != null && Unit.isAlive && (Unit.isAttackable || this.isWizard)) {
                Unit.TakeDamage(damage);
                Unit.isAttackable = false;
                this.ShowDamage(this.showDMG, Unit, "-" + damage.toString());
                //console.log("Do damage: " + this.name + " Take damage:" + Unit.name);
                this.damageDone = true;
            }
        };
        Unit.prototype.DoDamage = function (unit1, unit2, unit3, unit4, unit5, unit6, damage) {
            this.DoUnitDamage(unit1, damage);
            this.DoUnitDamage(unit2, damage);
            this.DoUnitDamage(unit3, damage);
            this.DoUnitDamage(unit4, damage);
            this.DoUnitDamage(unit5, damage);
            this.DoUnitDamage(unit6, damage);
            if (!this.damageDone) {
                this.ShowDamage(this.showDMG, this, "Miss");
            }
            this.isDone = true;
            this.damageDone = false;
        };
        Unit.prototype.highlightUnit = function () {
            var _this = this;
            this.animation.inputEnabled = true;
            this.animation.input.pixelPerfectOver = true;
            this.animation.input.pixelPerfectClick = true;
            this.animation.events.onInputOver.add(function () {
                _this.animation.tint = TurnBasedBattles.COLOR_HOVER_RED_NUM2;
                //this.animation.input.useHandCursor = true;
                _this.isHighlighted = true;
                //console.log("Highlighted");
            });
            this.animation.events.onInputOut.add(function () {
                _this.animation.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
                _this.isHighlighted = false;
            });
        };
        Unit.prototype.highlightUnit2 = function () {
            if (this.canAttack && !this.attackStarted) {
                this.animation.tint = TurnBasedBattles.COLOR_HOVER_GREEN_NUM3;
            }
            else {
                this.animation.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            }
        };
        Unit.prototype.showUnitInfo = function () {
            return " " + this.name + "\n Level " + this.level + "\n STR " + this.strength +
                "\n AGI " + this.agility + "\n Health " + this.health + "\n Cost " + this.priceCost;
        };
        return Unit;
    }(Phaser.Sprite));
    TurnBasedBattles.Unit = Unit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/Unit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var PlayerRangeUnit = /** @class */ (function (_super) {
        __extends(PlayerRangeUnit, _super);
        function PlayerRangeUnit(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.pointerA_x = _this.x;
            _this.pointerA_y = _this.y;
            _this.step_x = 4; // FIXME
            _this.cursor = _this.game.input.keyboard.createCursorKeys();
            if (_this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                _this.game.input.onDown.add(function () {
                    if ((_this.game.input.y > (TurnBasedBattles.MAP_HEIGHT - _this.battleFieldHeight)) &&
                        (_this.canAttack)) {
                        _this.pointerA_x = _this.x;
                        _this.pointerA_y = _this.y;
                        _this.pointerB_x = _this.game.input.x + _this.lvl * TurnBasedBattles.MOVEMENT;
                        _this.pointerB_y = _this.game.input.y;
                        _this.step_y = Math.abs((_this.pointerB_y - _this.pointerA_y) / ((_this.pointerB_x - _this.pointerA_x) / _this.step_x));
                        _this.currentState = TurnBasedBattles.UnitStates.ATTACK;
                        _this.game.input.enabled = false;
                        _this.attackFinished = false;
                        _this.attackStarted = true;
                    }
                }, _this);
            }
            return _this;
        }
        PlayerRangeUnit.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        PlayerRangeUnit.prototype.AttackSequence = function () {
            var _this = this;
            if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                this.animation.animations.play("idle", null, true);
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKRIGHT) {
                this.animation.animations.play("walk", null, true);
                if (this.continue) {
                    if (this.x <= this.initialPositionX + this.lvl * TurnBasedBattles.MOVEMENT - TurnBasedBattles.BUFFER) {
                        this.x += this.step_x;
                    }
                    else {
                        this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    }
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                this.animation.animations.play("attack", null, false)
                    .onComplete.add(function () {
                    _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    _this.game.input.enabled = true;
                    _this.attackFinished = true;
                });
            }
            this.animation.position.x = this.x;
            this.animation.position.y = this.y;
        };
        PlayerRangeUnit.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                    this.animation.animations.play("idle");
                    if (this.isAttacked) {
                        this.currentState = TurnBasedBattles.UnitStates.HURT;
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.HURT) {
                    if (this.health > 0) {
                        this.animation.animations.play("hurt", null, false)
                            .onComplete.add(function () {
                            _this.isAttacked = false;
                            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        });
                    }
                    else {
                        this.animation.animations.play("die", null, false)
                            .onComplete.add(function () {
                            _this.currentState = TurnBasedBattles.UnitStates.DEAD;
                        });
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.DEAD) {
                    this.isHighlighted = false;
                    this.isAttackable = false;
                    this.isAttacked = false;
                    this.isAlive = false;
                }
                else {
                    this.AttackSequence();
                }
            }
        };
        return PlayerRangeUnit;
    }(TurnBasedBattles.Unit));
    TurnBasedBattles.PlayerRangeUnit = PlayerRangeUnit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/PlayerRangeUnit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Archer = /** @class */ (function (_super) {
        __extends(Archer, _super);
        function Archer(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Woman Archer";
            _this.level = 3;
            _this.strength = 200;
            _this.agility = 9;
            _this.health = 60;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0;
            _this.priceCost = 90;
            _this.index = index;
            _this.unitScale = TurnBasedBattles.SIZE_ARCHER;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.rectImage = _this.game.make.sprite(x, y, "womanArcher-rect");
            _this.circleImage = _this.game.make.sprite(x, y, "womanArcher-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "womanArcher");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 20);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        Archer.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        Archer.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Archer;
    }(TurnBasedBattles.PlayerRangeUnit));
    TurnBasedBattles.Archer = Archer;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var EnemyMeleeUnit = /** @class */ (function (_super) {
        __extends(EnemyMeleeUnit, _super);
        function EnemyMeleeUnit(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.isAlive = false;
            _this.isEnemy = true;
            _this.cursor = _this.game.input.keyboard.createCursorKeys();
            if (_this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                _this.pointerA_x = _this.x;
                _this.pointerA_y = _this.y;
                _this.step_x = 4; // FIXME
                _this.attackStarted = true;
                _this.game.input.onDown.add(function () {
                    if (_this.isHighlighted) {
                        _this.isAttackable = true;
                    }
                }, _this);
            }
            return _this;
        }
        EnemyMeleeUnit.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        EnemyMeleeUnit.prototype.AttackSequence = function () {
            var _this = this;
            if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                this.animation.animations.play("idle", null, true);
                if (this.canAttack) {
                    this.currentState = TurnBasedBattles.UnitStates.WALKLEFT;
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKLEFT) {
                this.animation.animations.play("walk", null, true);
                if (this.y < this.pointerB_y) {
                    this.y += this.calculateStepY();
                }
                else if (this.y > this.pointerB_y) {
                    this.y -= this.calculateStepY();
                }
                if (this.x > this.pointerB_x + (this.isOrc ? 3 * TurnBasedBattles.BUFFER : TurnBasedBattles.BUFFER + 20)) { // FIXME
                    this.x -= this.step_x;
                }
                else {
                    this.currentState = TurnBasedBattles.UnitStates.ATTACK;
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                this.animation.animations.play("attack", null, false)
                    .onComplete.add(function () {
                    _this.currentState = TurnBasedBattles.UnitStates.WALKRIGHT;
                });
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKRIGHT) {
                this.animation.animations.play("walk", null, true);
                this.animation.anchor.setTo(this.isOrc ? 0.5 : 0, 0.5);
                this.animation.scale.set(this.unitScale, this.unitScale);
                if (this.y > this.pointerA_y) {
                    this.y -= this.calculateStepY();
                }
                else if (this.y < this.pointerA_y) {
                    this.y += this.calculateStepY();
                }
                if (this.x < this.pointerA_x) {
                    this.x += this.step_x;
                }
                else {
                    this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    this.game.input.enabled = true;
                    this.attackFinished = true;
                    this.animation.anchor.setTo(this.isOrc ? 0.5 : 1, 0.5);
                    this.animation.scale.set(-this.unitScale, this.unitScale);
                }
            }
            this.animation.position.x = this.x;
            this.animation.position.y = this.y;
        };
        EnemyMeleeUnit.prototype.calculateStepY = function () {
            return Math.abs((this.pointerB_y - this.pointerA_y) / ((this.pointerB_x - this.pointerA_x) / this.step_x));
        };
        EnemyMeleeUnit.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                    this.animation.animations.play("idle");
                    if (this.isAttacked) {
                        this.currentState = TurnBasedBattles.UnitStates.HURT;
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.HURT) {
                    if (this.health > 0) {
                        this.animation.animations.play("hurt", null, false)
                            .onComplete.add(function () {
                            _this.isAttacked = false;
                            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        });
                    }
                    else {
                        this.animation.animations.play("die", null, false)
                            .onComplete.add(function () {
                            _this.currentState = TurnBasedBattles.UnitStates.DEAD;
                        });
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.DEAD) {
                    this.isHighlighted = false;
                    this.isAttackable = false;
                    this.isAttacked = false;
                    this.isAlive = false;
                    this.animation.alpha = 0.5;
                }
                else {
                    this.AttackSequence();
                }
            }
        };
        return EnemyMeleeUnit;
    }(TurnBasedBattles.Unit));
    TurnBasedBattles.EnemyMeleeUnit = EnemyMeleeUnit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/EnemyMeleeUnit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        function Boss(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Boss";
            _this.level = 1;
            _this.strength = 400;
            _this.agility = 100;
            _this.health = 1000;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_BOSS;
            _this.priceCost = 5000;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            _this.circleImage = _this.game.make.sprite(x, y, "boss-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "boss");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [42, 43, 44, 45, 46, 47, 48], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        Boss.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        Boss.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Boss;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.Boss = Boss;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Cam = /** @class */ (function (_super) {
        __extends(Cam, _super);
        function Cam(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.x = x;
            _this.y = y;
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "");
            return _this;
        }
        Cam.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Cam;
    }(Phaser.Sprite));
    TurnBasedBattles.Cam = Cam;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var EnemyRangeUnit = /** @class */ (function (_super) {
        __extends(EnemyRangeUnit, _super);
        function EnemyRangeUnit(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.isAlive = false;
            _this.isEnemy = true;
            _this.cursor = _this.game.input.keyboard.createCursorKeys();
            if (_this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                _this.pointerA_x = _this.x;
                _this.pointerA_y = _this.y;
                _this.step_x = 4; // FIXME
                _this.attackStarted = true;
                _this.game.input.onDown.add(function () {
                    if (_this.isHighlighted) {
                        _this.isAttackable = true;
                    }
                }, _this);
            }
            return _this;
        }
        EnemyRangeUnit.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        EnemyRangeUnit.prototype.AttackSequence = function () {
            var _this = this;
            if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                this.animation.animations.play("idle", null, true);
                if (this.canAttack) {
                    this.currentState = TurnBasedBattles.UnitStates.ATTACK;
                }
            }
            // if (this.currentState === UnitStates.WALKLEFT) {
            //     this.animation.animations.play("walk", null, true);
            //     if (this.y < this.pointerB_y) {
            //         this.y += this.calculateStepY();
            //     } else if (this.y > this.pointerB_y) {
            //         this.y -= this.calculateStepY();
            //     }
            //     if (this.x > this.pointerB_x + BUFFER + 20) { // FIXME
            //         this.x -= this.step_x;
            //     } else {
            //         this.currentState = UnitStates.ATTACK;
            //     }
            // }
            if (this.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                this.animation.animations.play("attack", null, false)
                    .onComplete.add(function () {
                    _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    _this.game.input.enabled = true;
                    _this.attackFinished = true;
                });
            }
            // if (this.currentState === UnitStates.WALKRIGHT) {
            //     this.animation.animations.play("walk", null, true);
            //     this.animation.anchor.setTo(0, 0.5);
            //     this.animation.scale.set(1.3, 1.3); // FIXME
            //     if (this.y > this.pointerA_y) {
            //         this.y -= this.calculateStepY();
            //     } else if (this.y < this.pointerA_y) {
            //         this.y += this.calculateStepY();
            //     }
            //     if (this.x < this.pointerA_x) {
            //         this.x += this.step_x;
            //     } else {
            //         this.currentState = UnitStates.IDLE;
            //         this.game.input.enabled = true;
            //         this.attackFinished = true;
            //         this.animation.anchor.setTo(1, 0.5);
            //         this.animation.scale.set(-1.3, 1.3); // FIXME
            //     }
            // }
            this.animation.position.x = this.x;
            this.animation.position.y = this.y;
        };
        EnemyRangeUnit.prototype.calculateStepY = function () {
            return Math.abs((this.pointerB_y - this.pointerA_y) / ((this.pointerB_x - this.pointerA_x) / this.step_x));
        };
        EnemyRangeUnit.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                    this.animation.animations.play("idle");
                    if (this.isAttacked) {
                        this.currentState = TurnBasedBattles.UnitStates.HURT;
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.HURT) {
                    if (this.health > 0) {
                        this.animation.animations.play("hurt", null, false)
                            .onComplete.add(function () {
                            _this.isAttacked = false;
                            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        });
                    }
                    else {
                        this.animation.animations.play("die", null, false)
                            .onComplete.add(function () {
                            _this.currentState = TurnBasedBattles.UnitStates.DEAD;
                        });
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.DEAD) {
                    this.isHighlighted = false;
                    this.isAttackable = false;
                    this.isAttacked = false;
                    this.isAlive = false;
                    this.animation.alpha = 0.5;
                }
                else {
                    this.AttackSequence();
                }
            }
        };
        return EnemyRangeUnit;
    }(TurnBasedBattles.Unit));
    TurnBasedBattles.EnemyRangeUnit = EnemyRangeUnit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/EnemyRangeUnit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var ElfArcher = /** @class */ (function (_super) {
        __extends(ElfArcher, _super);
        function ElfArcher(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Elf Archer";
            _this.level = 3;
            _this.strength = 40;
            _this.agility = 9;
            _this.health = 60;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 90;
            _this.index = index;
            _this.unitScale = TurnBasedBattles.SIZE_ELF_ARCHER;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "elfArcher-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "elfArcher");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 10);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("attack", [10, 11, 12, 13, 14], 20);
            _this.animation.animations.add("hurt", [15, 16, 17, 18, 19], 20);
            _this.animation.animations.add("die", [20, 21, 22, 23, 24], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        ElfArcher.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        ElfArcher.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return ElfArcher;
    }(TurnBasedBattles.EnemyRangeUnit));
    TurnBasedBattles.ElfArcher = ElfArcher;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var ElfMageEnemy = /** @class */ (function (_super) {
        __extends(ElfMageEnemy, _super);
        function ElfMageEnemy(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Elf Mage Enemy";
            _this.level = 2;
            _this.strength = 35;
            _this.agility = 4;
            _this.health = 55;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 75;
            _this.index = index;
            _this.isWizard = true;
            _this.unitScale = TurnBasedBattles.SIZE_MAGE;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            //this.rectImage = this.game.make.sprite(x, y, "elfMageEnemy-rect");
            _this.circleImage = _this.game.make.sprite(x, y, "elfMageEnemy-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "elfMageEnemy");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 10);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        ElfMageEnemy.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        ElfMageEnemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return ElfMageEnemy;
    }(TurnBasedBattles.EnemyRangeUnit));
    TurnBasedBattles.ElfMageEnemy = ElfMageEnemy;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/EnemyMeleeUnit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var ElfSword = /** @class */ (function (_super) {
        __extends(ElfSword, _super);
        function ElfSword(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Elf Sword";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 90;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 65;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_MAGE;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "elfSword-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "elfSword");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 15);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 30);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale); //FIXME
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        ElfSword.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        ElfSword.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        ElfSword.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return ElfSword;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.ElfSword = ElfSword;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var PlayerMeleeUnit = /** @class */ (function (_super) {
        __extends(PlayerMeleeUnit, _super);
        function PlayerMeleeUnit(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.pointerA_x = _this.x;
            _this.pointerA_y = _this.y;
            _this.step_x = 4; //FIXME
            _this.cursor = _this.game.input.keyboard.createCursorKeys();
            if (_this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                _this.game.input.onDown.add(function () {
                    if ((_this.game.input.y > (TurnBasedBattles.MAP_HEIGHT - _this.battleFieldHeight)) &&
                        (_this.canAttack)) {
                        _this.pointerA_x = _this.x;
                        _this.pointerA_y = _this.y;
                        _this.pointerB_x = _this.game.input.x + _this.lvl * TurnBasedBattles.MOVEMENT;
                        _this.pointerB_y = _this.game.input.y;
                        _this.step_y = Math.abs((_this.pointerB_y - _this.pointerA_y) / ((_this.pointerB_x - _this.pointerA_x) / _this.step_x));
                        _this.currentState = TurnBasedBattles.UnitStates.WALKRIGHT;
                        _this.game.input.enabled = false;
                        _this.attackFinished = false;
                        _this.attackStarted = true;
                    }
                }, _this);
            }
            return _this;
        }
        PlayerMeleeUnit.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        PlayerMeleeUnit.prototype.AttackSequence = function () {
            var _this = this;
            if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                this.animation.animations.play("idle", null, true);
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKRIGHT) {
                this.animation.animations.play("walk", null, true);
                if (this.continue) {
                    if (this.x <= this.initialPositionX + this.lvl * TurnBasedBattles.MOVEMENT - TurnBasedBattles.BUFFER) {
                        this.x += this.step_x;
                    }
                    else {
                        this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        this.continue = false;
                    }
                }
                else {
                    if (this.y < this.pointerB_y) {
                        this.y += this.step_y;
                    }
                    else if (this.y > this.pointerB_y) {
                        this.y -= this.step_y;
                    }
                    if (this.x < this.pointerB_x - (4 * TurnBasedBattles.BUFFER + 30)) { // FIXME add const
                        this.x += this.step_x;
                    }
                    else {
                        this.currentState = TurnBasedBattles.UnitStates.ATTACK;
                    }
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                this.animation.animations.play("attack", null, false)
                    .onComplete.add(function () {
                    _this.currentState = TurnBasedBattles.UnitStates.WALKLEFT;
                });
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKLEFT) {
                this.animation.animations.play("walk", null, true);
                this.animation.anchor.setTo(1, 0.5);
                this.animation.scale.set(-this.unitScale, this.unitScale);
                if (this.y > this.pointerA_y) {
                    this.y -= this.step_y;
                }
                else if (this.y < this.pointerA_y) {
                    this.y += this.step_y;
                }
                if (this.x > this.pointerA_x) {
                    this.x -= this.step_x;
                }
                else {
                    this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    this.game.input.enabled = true;
                    this.attackFinished = true;
                    this.animation.anchor.setTo(this.defaultXanchor, 0.5);
                    this.animation.scale.set(this.unitScale, this.unitScale);
                }
            }
            this.animation.position.x = this.x;
            this.animation.position.y = this.y;
        };
        PlayerMeleeUnit.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                    this.animation.animations.play("idle");
                    if (this.isAttacked) {
                        this.currentState = TurnBasedBattles.UnitStates.HURT;
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.HURT) {
                    if (this.health > 0) {
                        this.animation.animations.play("hurt", null, false)
                            .onComplete.add(function () {
                            _this.isAttacked = false;
                            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        });
                    }
                    else {
                        this.animation.animations.play("die", null, false)
                            .onComplete.add(function () {
                            _this.currentState = TurnBasedBattles.UnitStates.DEAD;
                        });
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.DEAD) {
                    this.isHighlighted = false;
                    this.isAttackable = false;
                    this.isAttacked = false;
                    this.isAlive = false;
                }
                else {
                    this.AttackSequence();
                }
            }
        };
        return PlayerMeleeUnit;
    }(TurnBasedBattles.Unit));
    TurnBasedBattles.PlayerMeleeUnit = PlayerMeleeUnit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../src/gameObjects/PlayerMeleeUnit.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Knight = /** @class */ (function (_super) {
        __extends(Knight, _super);
        function Knight(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Gold Knight";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0;
            _this.priceCost = 65;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.rectImage = _this.game.make.sprite(x, y, "knight-rect");
            _this.circleImage = _this.game.make.sprite(x, y, "knight-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightGold");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 40);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 30);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(_this.unitScale, _this.unitScale); //FIXME
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        Knight.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        Knight.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        Knight.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Knight;
    }(TurnBasedBattles.PlayerMeleeUnit));
    TurnBasedBattles.Knight = Knight;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var KnightAxe = /** @class */ (function (_super) {
        __extends(KnightAxe, _super);
        function KnightAxe(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Knight Axe";
            _this.level = 1;
            _this.strength = 120;
            _this.agility = 5;
            _this.health = 180;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT_AXE;
            _this.priceCost = 200;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "knightAxe-circle");
            _this.rectImage = _this.game.make.sprite(x, y, "knightAxe-rect");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightAxe");
            _this.animation.animations.add("idle", [14, 15, 16, 17, 18, 19, 20], 30);
            _this.animation.animations.add("walk", [21, 22, 23, 24, 25, 26, 27], 40);
            _this.animation.animations.add("hurt", [35, 36, 37, 38, 39, 40, 41], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 30);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        KnightAxe.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        KnightAxe.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return KnightAxe;
    }(TurnBasedBattles.PlayerMeleeUnit));
    TurnBasedBattles.KnightAxe = KnightAxe;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var KnightAxeEnemy = /** @class */ (function (_super) {
        __extends(KnightAxeEnemy, _super);
        function KnightAxeEnemy(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Knight Axe Enemy";
            _this.level = 1;
            _this.strength = 120;
            _this.agility = 5;
            _this.health = 180;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT_AXE;
            _this.priceCost = 200;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "knightAxeEnemy-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightAxeEnemy");
            _this.animation.animations.add("idle", [14, 15, 16, 17, 18, 19, 20], 30);
            _this.animation.animations.add("walk", [21, 22, 23, 24, 25, 26, 27], 40);
            _this.animation.animations.add("hurt", [35, 36, 37, 38, 39, 40, 41], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 30);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        KnightAxeEnemy.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        KnightAxeEnemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return KnightAxeEnemy;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.KnightAxeEnemy = KnightAxeEnemy;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var KnightGoldEnemy = /** @class */ (function (_super) {
        __extends(KnightGoldEnemy, _super);
        function KnightGoldEnemy(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Knight Gold Enemy";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "knightGoldEnemy-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightGoldEnemy");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 40);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 30);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        KnightGoldEnemy.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        KnightGoldEnemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return KnightGoldEnemy;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.KnightGoldEnemy = KnightGoldEnemy;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var KnightSpear = /** @class */ (function (_super) {
        __extends(KnightSpear, _super);
        function KnightSpear(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Knight Spear";
            _this.level = 1;
            _this.strength = 90;
            _this.agility = 5;
            _this.health = 150;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT_SPEAR;
            _this.priceCost = 100;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "knightSpear-circle");
            _this.rectImage = _this.game.make.sprite(x, y, "knightSpear-rect");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightSpear");
            _this.animation.animations.add("idle", [14, 15, 16, 17, 18, 19, 20], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 40);
            _this.animation.animations.add("hurt", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.animations.add("attack", [35, 36, 37, 38, 39, 40, 41], 30);
            _this.animation.animations.add("die", [0, 1, 2, 3, 4, 5, 6], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        KnightSpear.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        KnightSpear.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return KnightSpear;
    }(TurnBasedBattles.PlayerMeleeUnit));
    TurnBasedBattles.KnightSpear = KnightSpear;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var KnightSpearEnemy = /** @class */ (function (_super) {
        __extends(KnightSpearEnemy, _super);
        function KnightSpearEnemy(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Knight Spear Enemy";
            _this.level = 1;
            _this.strength = 90;
            _this.agility = 5;
            _this.health = 150;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_KNIGHT_SPEAR;
            _this.priceCost = 100;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "knightSpearEnemy-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "knightSpearEnemy");
            _this.animation.animations.add("idle", [14, 15, 16, 17, 18, 19, 20], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 40);
            _this.animation.animations.add("hurt", [7, 8, 9, 10, 11, 12, 13], 15);
            _this.animation.animations.add("attack", [35, 36, 37, 38, 39, 40, 41], 30);
            _this.animation.animations.add("die", [0, 1, 2, 3, 4, 5, 6], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        KnightSpearEnemy.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        KnightSpearEnemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return KnightSpearEnemy;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.KnightSpearEnemy = KnightSpearEnemy;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    //export enum UnitStates { IDLE, WALKLEFT, WALKRIGHT, ATTACK, DEAD }
    var Mage = /** @class */ (function (_super) {
        __extends(Mage, _super);
        function Mage(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Elf Mage";
            _this.level = 2;
            _this.strength = 35;
            _this.agility = 4;
            _this.health = 55;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0;
            _this.priceCost = 75;
            _this.index = index;
            _this.isWizard = true;
            _this.unitScale = TurnBasedBattles.SIZE_MAGE;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.rectImage = _this.game.make.sprite(x, y, "elfMage-rect");
            _this.circleImage = _this.game.make.sprite(x, y, "elfMage-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "elfMage");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 10);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(_this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        Mage.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        Mage.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Mage;
    }(TurnBasedBattles.PlayerRangeUnit));
    TurnBasedBattles.Mage = Mage;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var OrcAxe = /** @class */ (function (_super) {
        __extends(OrcAxe, _super);
        function OrcAxe(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Orc Axe";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0.5;
            _this.index = index;
            _this.isMelee = true;
            _this.isOrc = true;
            _this.unitScale = TurnBasedBattles.SIZE_ORC;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            _this.circleImage = _this.game.make.sprite(x, y, "orcAxe-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "orcAxe");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        OrcAxe.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        OrcAxe.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return OrcAxe;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.OrcAxe = OrcAxe;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var OrcHammer = /** @class */ (function (_super) {
        __extends(OrcHammer, _super);
        function OrcHammer(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Orc Hammer";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0.5;
            _this.index = index;
            _this.isMelee = true;
            _this.isOrc = true;
            _this.unitScale = TurnBasedBattles.SIZE_ORC;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            _this.circleImage = _this.game.make.sprite(x, y, "orcHammer-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "orcHammer");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        OrcHammer.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        OrcHammer.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return OrcHammer;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.OrcHammer = OrcHammer;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var OrcSword = /** @class */ (function (_super) {
        __extends(OrcSword, _super);
        function OrcSword(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Orc Sword";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 0.5;
            _this.index = index;
            _this.isMelee = true;
            _this.isOrc = true;
            _this.unitScale = TurnBasedBattles.SIZE_ORC;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            _this.circleImage = _this.game.make.sprite(x, y, "orcSword-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "orcSword");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [28, 29, 30, 31, 32, 33, 34], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        OrcSword.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        OrcSword.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return OrcSword;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.OrcSword = OrcSword;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var TrollBone = /** @class */ (function (_super) {
        __extends(TrollBone, _super);
        function TrollBone(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Troll Bone";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_TROLL;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            _this.circleImage = _this.game.make.sprite(x, y, "trollBone-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "trollBone");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [42, 43, 44, 45, 46, 47, 48], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        TrollBone.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        TrollBone.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return TrollBone;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.TrollBone = TrollBone;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var TrollClub = /** @class */ (function (_super) {
        __extends(TrollClub, _super);
        function TrollClub(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Troll Club";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_TROLL;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "trollClub-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "trollClub");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [42, 43, 44, 45, 46, 47, 48], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        TrollClub.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        TrollClub.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return TrollClub;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.TrollClub = TrollClub;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var TrollHammer = /** @class */ (function (_super) {
        __extends(TrollHammer, _super);
        function TrollHammer(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Troll Hammer";
            _this.level = 1;
            _this.strength = 60;
            _this.agility = 5;
            _this.health = 100;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_TROLL;
            _this.priceCost = 50;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "trollHammer-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "trollHammer");
            _this.animation.animations.add("idle", [21, 22, 23, 24, 25, 26, 27], 30);
            _this.animation.animations.add("walk", [42, 43, 44, 45, 46, 47, 48], 20);
            _this.animation.animations.add("hurt", [14, 15, 16, 17, 18, 19, 20], 15);
            _this.animation.animations.add("attack", [0, 1, 2, 3, 4, 5, 6], 13);
            _this.animation.animations.add("die", [7, 8, 9, 10, 11, 12, 13], 13);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        TrollHammer.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        TrollHammer.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return TrollHammer;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.TrollHammer = TrollHammer;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var WomanArcherEnemy = /** @class */ (function (_super) {
        __extends(WomanArcherEnemy, _super);
        function WomanArcherEnemy(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Woman Archer Enemy";
            _this.level = 3;
            _this.strength = 45;
            _this.agility = 9;
            _this.health = 60;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 90;
            _this.index = index;
            _this.unitScale = TurnBasedBattles.SIZE_ARCHER;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "womanArcherEnemy-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "womanArcherEnemy");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 20);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        WomanArcherEnemy.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        WomanArcherEnemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return WomanArcherEnemy;
    }(TurnBasedBattles.EnemyRangeUnit));
    TurnBasedBattles.WomanArcherEnemy = WomanArcherEnemy;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var WomanKnives = /** @class */ (function (_super) {
        __extends(WomanKnives, _super);
        function WomanKnives(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Woman Knives";
            _this.level = 3;
            _this.strength = 90;
            _this.agility = 9;
            _this.health = 70;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 90;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_ARCHER;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "womanKnives-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "womanKnives");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 20);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        WomanKnives.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        WomanKnives.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return WomanKnives;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.WomanKnives = WomanKnives;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var WomanSword = /** @class */ (function (_super) {
        __extends(WomanSword, _super);
        function WomanSword(game, x, y, index) {
            if (index === void 0) { index = null; }
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.name = "Woman Sword";
            _this.level = 3;
            _this.strength = 70;
            _this.agility = 9;
            _this.health = 90;
            _this.defaultHealth = _this.health;
            _this.defaultXanchor = 1;
            _this.priceCost = 90;
            _this.index = index;
            _this.isMelee = true;
            _this.unitScale = TurnBasedBattles.SIZE_ARCHER;
            _this.battleFieldHeight = TurnBasedBattles.MAP_HEIGHT / 2;
            //Add sprite
            _this.circleImage = _this.game.make.sprite(x, y, "womanSword-circle");
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "womanSword");
            _this.animation.animations.add("idle", [0, 1, 2, 3, 4], 30);
            _this.animation.animations.add("walk", [5, 6, 7, 8, 9], 30);
            _this.animation.animations.add("die", [30, 31, 32, 33, 34], 15);
            _this.animation.animations.add("attack", [20, 21, 22, 23, 24], 20);
            _this.animation.animations.add("hurt", [25, 26, 27, 28, 29], 20);
            _this.animation.play("idle", 10, true);
            _this.animation.anchor.setTo(_this.defaultXanchor, 0.5);
            _this.animation.scale.set(-_this.unitScale, _this.unitScale);
            _this.animation.smoothed = false;
            _this.highlightUnit();
            return _this;
        }
        WomanSword.prototype.AttackSequence = function () {
            _super.prototype.AttackSequence.call(this);
        };
        WomanSword.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return WomanSword;
    }(TurnBasedBattles.EnemyMeleeUnit));
    TurnBasedBattles.WomanSword = WomanSword;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.game.load.image("preloadBackground", "src/assets/backgrounds/preload-bg.jpg");
            this.game.load.image("mechanism-1", "src/assets/UI/mechanism-1.png");
            this.game.load.image("mechanism-2", "src/assets/UI/mechanism-2.png");
        };
        Boot.prototype.create = function () {
            this.game.add.sprite(0, 0, "preloadBackground");
            this.game.state.start(TurnBasedBattles.PRELOAD_STATE, false, false);
        };
        return Boot;
    }(Phaser.State));
    TurnBasedBattles.Boot = Boot;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var FieldBattle = /** @class */ (function (_super) {
        __extends(FieldBattle, _super);
        function FieldBattle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FieldBattle.prototype.init = function (uiClass, selectedUnitFormation, mapName, isComplete) {
            this.ui = uiClass;
            this.unitFormation = selectedUnitFormation;
            this.mapName = mapName;
            this.levelComplete = isComplete;
            //console.log("The given array of units from MAP: ");
            //console.log(this.unitFormation);
        };
        FieldBattle.prototype.create = function () {
            var _this = this;
            this.cam = new TurnBasedBattles.Cam(this.game, 640, 360);
            this.loadBattleFieldBackground(this.mapName);
            this.game.world.setBounds(0, 0, TurnBasedBattles.MAP_WIDTH, TurnBasedBattles.MAP_HEIGHT);
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.lvl = 0;
            this.activeGame = true;
            this.playerDead = false;
            this.enemiesDead = false;
            this.highlightSignal = new Phaser.Signal();
            this.attackSignal = new Phaser.Signal();
            this.playerDeadSignal = new Phaser.Signal();
            this.enemiesDeadSignal = new Phaser.Signal();
            this.moveCameraSignal = new Phaser.Signal();
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    //console.log("Empty slot. Null");
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.GOLD_KNIGHT_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Knight(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.ELF_MAGE_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Mage(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.WOMAN_ARCHER_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Archer(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === "Knight Spear")) {
                    this.unitFormation[index] = new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === "Knight Axe")) {
                    this.unitFormation[index] = new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else {
                    //console.log("The " + unit.name + " is missing!");
                }
            }
            this.EnemyDeclaration(this.mapName);
            this.currentUnit = new TurnBasedBattles.Unit(this.game, 0, 0);
            this.nextUnit = new TurnBasedBattles.Unit(this.game, 0, 0);
            this.game.physics.p2.enable(this.cam.animation);
            this.cam.animation.body.fixedRotation = true;
            //console.log("DRAW UI");
            this.ui.drawFieldBattleStateUI();
            this.InitialFillUiSlots();
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.game.camera.follow(this.cam.animation, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
            this.game.add.existing(this.cam.animation);
            this.SpawnEnemies();
            this.MoveUiSlots();
            this.currentUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
            this.nextUnit = this.pickNextUnit();
            this.currentUnit.canAttack = true;
            this.enemiesDead = false;
            this.attackSignal.add(function (canAttack, attackFinished, attackStarted) {
                if (canAttack && attackFinished && attackStarted) {
                    _this.attackOrder();
                    //console.log("attack order DISPATCHED");
                }
                if (_this.unitExists(_this.currentUnit)) {
                    //console.log("1. CUR: " + this.currentUnit.name + " NEXT: " + this.nextUnit.name);
                    //console.log("1. CUR: " + this.currentUnit.canAttack+this.currentUnit.attackFinished
                    //                       + this.currentUnit.attackStarted + "   "+
                    //                       + this.nextUnit.canAttack + this.nextUnit.attackFinished+
                    //                         this.nextUnit.attackStarted);
                    if (!_this.currentUnit.isDone) {
                        _this.CurrentUnitAttack();
                        //console.log("LETS ATTACK NOW");
                    }
                }
                else {
                    _this.pickCurrentUnit();
                    _this.pickNextUnit();
                    _this.currentUnit.canAttack = true;
                    //console.log("2. CUR: " + this.currentUnit.name + " NEXT: " + this.nextUnit.name);
                    //console.log("2. CUR: " + this.currentUnit.canAttack+this.currentUnit.attackFinished
                    //    + this.currentUnit.attackStarted + "   "+
                    //    + this.nextUnit.canAttack + this.nextUnit.attackFinished+
                    //    this.nextUnit.attackStarted);
                }
            });
            this.highlightSignal.add(function () {
                _this.currentUnit.highlightUnit2();
            });
            this.playerDeadSignal.addOnce(function () {
                //console.log("YOU'RE DEAD!!!");
                _this.lvl = 0;
                _this.activeGame = false;
                _this.BattleLost();
            });
            this.enemiesDeadSignal.add(function () {
                //console.log("ENEMIES ARE ALL DEAD!!!");
                _this.lvl++;
                //console.log("LEVEL " + this.lvl);
                if (_this.lvl > 2) {
                    _this.activeGame = false;
                    _this.BattleWon();
                }
                _this.NextLVL();
            });
            this.moveCameraSignal.add(function () {
                if (_this.activeGame && _this.enemiesDead) {
                    if (_this.AttackFinished(_this.unitFormation)) {
                        _this.MoveCamera();
                    }
                }
            });
            //console.log(this.game.state.current.toString());
        };
        FieldBattle.prototype.update = function () {
            this.cam.animation.body.setZeroVelocity();
            this.unitUpdate(this.unitFormation[0]);
            this.unitUpdate(this.unit1enemy);
            this.unitUpdate(this.unitFormation[1]);
            this.unitUpdate(this.unit2enemy);
            this.unitUpdate(this.unitFormation[2]);
            this.unitUpdate(this.unit3enemy);
            this.unitUpdate(this.unitFormation[3]);
            this.unitUpdate(this.unit4enemy);
            this.unitUpdate(this.unitFormation[4]);
            this.unitUpdate(this.unit5enemy);
            this.unitUpdate(this.unitFormation[5]);
            this.unitUpdate(this.unit6enemy);
            this.attackSignal.dispatch(this.currentUnit.canAttack, this.currentUnit.attackFinished, this.currentUnit.attackStarted);
            this.highlightSignal.dispatch(this.currentUnit.canAttack, this.currentUnit.attackStarted);
            this.moveCameraSignal.dispatch();
            //console.log(this.currentUnit.name+"can attack: "+this.currentUnit.canAttack+" AF: "+this.currentUnit.attackFinished+
            //    "AS: "+this.currentUnit.attackStarted+" "+this.nextUnit.name);
        };
        FieldBattle.prototype.EnemyDeclaration = function (map) {
            switch (map) {
                case "Forest": {
                    this.unit1enemy = new TurnBasedBattles.TrollClub(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.TrollHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.TrollBone(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.TrollBone(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.TrollHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.TrollClub(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "Mountain": {
                    this.unit1enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.KnightGoldEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.KnightGoldEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "Waterfall": {
                    this.unit1enemy = new TurnBasedBattles.ElfSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.ElfMageEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.ElfMageEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.ElfSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "PineForest": {
                    this.unit1enemy = new TurnBasedBattles.OrcAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.OrcHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.OrcSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.OrcSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.OrcHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.OrcAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "PineForest2": {
                    this.unit1enemy = new TurnBasedBattles.WomanKnives(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.WomanArcherEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.WomanSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.WomanSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.WomanArcherEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.WomanKnives(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "BossGround": {
                    this.unit1enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.Boss(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                default: {
                    break;
                }
            }
        };
        FieldBattle.prototype.InitialFillUiSlots = function () {
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    //console.log("Empty slot at InitialFillUiSlots");
                }
                else {
                    this.FillUiSlot(this.unitFormation[index], TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, true);
                }
            }
            this.FillUiSlot(this.unit1enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit2enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit3enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit4enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit5enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit6enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
        };
        FieldBattle.prototype.MoveUiSlots = function () {
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    //console.log("Empty slot at MoveUiSlots");
                }
                else {
                    this.MoveUiSlot(this.unitFormation[index], TurnBasedBattles.PSLOT_ARRAY_X[index], TurnBasedBattles.PSLOT_ARRAY_Y[index], true);
                }
            }
            this.MoveUiSlot(this.unit1enemy, TurnBasedBattles.E1SLOT_POS_X, TurnBasedBattles.E1SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit2enemy, TurnBasedBattles.E2SLOT_POS_X, TurnBasedBattles.E2SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit3enemy, TurnBasedBattles.E3SLOT_POS_X, TurnBasedBattles.E3SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit4enemy, TurnBasedBattles.E4SLOT_POS_X, TurnBasedBattles.E4SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit5enemy, TurnBasedBattles.E5SLOT_POS_X, TurnBasedBattles.E5SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit6enemy, TurnBasedBattles.E6SLOT_POS_X, TurnBasedBattles.E6SLOT_POS_Y, false);
        };
        FieldBattle.prototype.MoveUiSlot = function (Unit, x, y, player) {
            this.ClearUiSlot(Unit);
            if (this.unitExists(Unit)) {
                if (player) {
                    // FIXME fix the magic numbers
                    Unit.circleImage.x = x + 22;
                    Unit.circleImage.y = y + 5;
                    Unit.HPbarBottom.x = x + 18;
                    Unit.HPbarBottom.y = y + 70;
                    Unit.HPbarTop.x = x + 18;
                    Unit.HPbarTop.y = y + 70;
                }
                else {
                    // FIXME fix the magic numbers
                    Unit.circleImage.x = x - 22;
                    Unit.circleImage.y = y + 5;
                    Unit.HPbarBottom.x = x - 99;
                    Unit.HPbarBottom.y = y + 70;
                    Unit.HPbarTop.x = x - 99;
                    Unit.HPbarTop.y = y + 70;
                }
                Unit.circleImage.fixedToCamera = true;
                Unit.HPbarBottom.fixedToCamera = true;
                Unit.HPbarTop.fixedToCamera = true;
            }
        };
        FieldBattle.prototype.ClearUiSlot = function (Unit) {
            if (Unit === null) {
                //console.log("Empty slot at ClearUiSlot");
            }
            else {
                Unit.circleImage.fixedToCamera = false;
                Unit.HPbarBottom.fixedToCamera = false;
                Unit.HPbarTop.fixedToCamera = false;
                Unit.circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.circleImage.y = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarBottom.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarBottom.y = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarTop.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarTop.y = TurnBasedBattles.HIDE_FROM_SCREEN;
            }
        };
        FieldBattle.prototype.FillUiSlot = function (Unit, x, y, player) {
            if (player) {
                // FIXME fix the magic numbers
                Unit.circleImage = this.game.add.sprite(x + 22, y + 5, Unit.circleImage.key); // FIXME Make this adjustment prettier
                Unit.circleImage.scale.setTo(1, 1);
                Unit.HPbarBottom = this.game.add.sprite(x, y + 70, Unit.HPbarBottom.key);
                Unit.HPbarBottom.anchor.setTo(0, 0.5);
                Unit.HPbarBottom.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
                Unit.HPbarTop = this.game.add.sprite(x, y + 70, Unit.HPbarTop.key);
                Unit.HPbarTop.anchor.setTo(0, 0.5);
                Unit.HPbarTop.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
            }
            else {
                // FIXME fix the magic numbers
                Unit.circleImage = this.game.add.sprite(x - 22, y + 5, Unit.circleImage.key); // FIXME Make this adjustment prettier
                Unit.circleImage.scale.setTo(-1, 1);
                Unit.HPbarBottom = this.game.add.sprite(x, y + 70, Unit.HPbarBottom.key);
                Unit.HPbarBottom.anchor.setTo(0, 0.5);
                Unit.HPbarBottom.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
                Unit.HPbarTop = this.game.add.sprite(x, y + 70, Unit.HPbarTop.key);
                Unit.HPbarTop.anchor.setTo(0, 0.5);
                Unit.HPbarTop.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
            }
        };
        FieldBattle.prototype.BurnDeadBodies = function (Units) {
            for (var i = 0; i < Units.length; i++) {
                if (!this.unitExists(Units[i])) {
                    Units.splice(i, 1, null);
                }
            }
        };
        FieldBattle.prototype.BattleLost = function () {
            var _this = this;
            var gameLost;
            this.levelComplete = false;
            this.BurnDeadBodies(this.unitFormation);
            gameLost = this.game.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "gameLost");
            gameLost.alpha = 0;
            gameLost.anchor.set(0.5);
            gameLost.fixedToCamera = true;
            this.game.add.tween(gameLost).to({ alpha: 1 }, 1500, Phaser.Easing.Default, true);
            //gameLost.inputEnabled = true;
            this.ui.stopMusic();
            this.ui.gameLostMusic();
            TurnBasedBattles.DrawUi.avaliableUserMoney += 100;
            this.camera.fade(0x000000, 6500);
            this.camera.onFadeComplete.add(function () {
                _this.game.state.start(TurnBasedBattles.TOWN_STATE, true, false, _this.ui, _this.unitFormation, _this.levelComplete);
                //console.log("The units after the battle is lost");
                //console.log(this.unitFormation);
            });
            // gameLost.events.onInputDown.add(() => {
            //     this.game.state.start(TOWN_STATE, true, false, this.ui, this.unitFormation);
            // });
        };
        FieldBattle.prototype.BattleWon = function () {
            var _this = this;
            var gameWon;
            // TODO: add music
            this.levelComplete = true;
            this.BurnDeadBodies(this.unitFormation);
            gameWon = this.game.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "gameWon");
            gameWon.alpha = 0;
            gameWon.anchor.set(0.5);
            gameWon.fixedToCamera = true;
            gameWon.inputEnabled = true;
            this.game.add.tween(gameWon).to({ alpha: 1 }, 1500, Phaser.Easing.Default, true);
            this.ui.stopMusic();
            this.ui.gameWinMusic();
            TurnBasedBattles.DrawUi.avaliableUserMoney += 250;
            gameWon.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.MAP_STATE, true, false, _this.ui, _this.unitFormation, _this.mapName, _this.levelComplete);
                //TODO: have to splice the array with the dead units
                //console.log("The units after the battle is over");
                //console.log(this.unitFormation);
            });
        };
        FieldBattle.prototype.PickPosition = function (Unit, number1, number2, number3, number4, number5, number6, temp) {
            if (temp === void 0) { temp = null; }
            switch (Unit.index) {
                case 1: {
                    temp = number1;
                    break;
                }
                case 2: {
                    temp = number2;
                    break;
                }
                case 3: {
                    temp = number3;
                    break;
                }
                case 4: {
                    temp = number4;
                    break;
                }
                case 5: {
                    temp = number5;
                    break;
                }
                case 6: {
                    temp = number6;
                    break;
                }
                default: {
                    //console.log("ERROR!");
                    break;
                }
            }
            return temp;
        };
        FieldBattle.prototype.SpawnEnemies = function () {
            switch (this.lvl) {
                case 0: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                        this.RespawnEnemy(this.unit5enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                    }
                    break;
                }
                case 1: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit4enemy);
                        this.RespawnEnemy(this.unit6enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit2enemy);
                        this.RespawnEnemy(this.unit4enemy);
                        this.RespawnEnemy(this.unit6enemy);
                    }
                    break;
                }
                case 2: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit2enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                        this.RespawnEnemy(this.unit5enemy);
                    }
                    break;
                }
                default: {
                    break;
                }
            }
            this.MoveUiSlots();
        };
        FieldBattle.prototype.NextLVL = function () {
            this.NextLVLperUnit(this.unitFormation[0]);
            this.NextLVLperUnit(this.unitFormation[1]);
            this.NextLVLperUnit(this.unitFormation[2]);
            this.NextLVLperUnit(this.unitFormation[3]);
            this.NextLVLperUnit(this.unitFormation[4]);
            this.NextLVLperUnit(this.unitFormation[5]);
        };
        FieldBattle.prototype.NextLVLperUnit = function (Unit) {
            if (this.unitExists(Unit)) {
                Unit.lvl = this.lvl;
            }
        };
        FieldBattle.prototype.RespawnEnemy = function (Unit) {
            if (!Unit.isAlive) {
                Unit.x = this.PickPosition(Unit, TurnBasedBattles.EUNIT1_POS_X, TurnBasedBattles.EUNIT2_POS_X, TurnBasedBattles.EUNIT3_POS_X, TurnBasedBattles.EUNIT4_POS_X, TurnBasedBattles.EUNIT5_POS_X, TurnBasedBattles.EUNIT6_POS_X) + this.lvl * TurnBasedBattles.MOVEMENT;
                Unit.y = this.PickPosition(Unit, TurnBasedBattles.EUNIT1_POS_Y, TurnBasedBattles.EUNIT2_POS_Y, TurnBasedBattles.EUNIT3_POS_Y, TurnBasedBattles.EUNIT4_POS_Y, TurnBasedBattles.EUNIT5_POS_Y, TurnBasedBattles.EUNIT6_POS_Y);
                //console.log("CALCULATED POSITION Y IS " + Unit.y);
                Unit.animation.x = Unit.x;
                Unit.animation.y = Unit.y;
                Unit.pointerA_x = Unit.x;
                Unit.pointerA_y = Unit.y;
                Unit.isAlive = true;
                Unit.health = Unit.defaultHealth;
                Unit.HPbarTop.scale.setTo(0.27, 0.25);
                Unit.currentState = TurnBasedBattles.UnitStates.IDLE;
                Unit.lvl = this.lvl;
                Unit.animation.alpha = 1;
            }
        };
        FieldBattle.prototype.AttackFinished = function (units, temp) {
            if (temp === void 0) { temp = null; }
            //return (unit1.attackFinished && unit2.attackFinished && unit3.attackFinished &&
            //    unit4.attackFinished && unit5.attackFinished && unit6.attackFinished);
            temp = true;
            for (var i = 0; i < units.length; i++) {
                if (this.unitExists(units[i])) {
                    temp = temp && units[i].attackFinished;
                }
            }
            return temp;
        };
        FieldBattle.prototype.MovePlayer = function () {
            this.MoveUnit(this.unitFormation[0]);
            this.MoveUnit(this.unitFormation[1]);
            this.MoveUnit(this.unitFormation[2]);
            this.MoveUnit(this.unitFormation[3]);
            this.MoveUnit(this.unitFormation[4]);
            this.MoveUnit(this.unitFormation[5]);
        };
        FieldBattle.prototype.MoveUnit = function (Unit) {
            if (this.unitExists(Unit)) {
                Unit.continue = true;
                Unit.currentState = TurnBasedBattles.UnitStates.WALKRIGHT;
            }
        };
        FieldBattle.prototype.MoveCamera = function () {
            if (this.game.camera.x < this.lvl * TurnBasedBattles.MOVEMENT + TurnBasedBattles.BUFFER) {
                this.game.camera.x += 10;
                this.cam.animation.body.moveRight(240);
                //console.log("moving right");
                this.game.input.enabled = false;
                this.MovePlayer();
                this.SpawnEnemies();
            }
            else {
                this.enemiesDead = false;
                this.game.input.enabled = true;
            }
        };
        FieldBattle.prototype.EnemiesDead = function (temp) {
            if (temp === void 0) { temp = null; }
            //console.log("Enemies DEAD: " + !(this.unitExists(this.unit1enemy) || this.unitExists(this.unit2enemy) ||
            //    this.unitExists(this.unit3enemy) || this.unitExists(this.unit4enemy) ||
            //    this.unitExists(this.unit5enemy) || this.unitExists(this.unit6enemy)));
            return temp = !(this.unitExists(this.unit1enemy) || this.unitExists(this.unit2enemy) ||
                this.unitExists(this.unit3enemy) || this.unitExists(this.unit4enemy) ||
                this.unitExists(this.unit5enemy) || this.unitExists(this.unit6enemy));
        };
        FieldBattle.prototype.PlayerDead = function (temp) {
            if (temp === void 0) { temp = null; }
            return temp = !(this.unitExists(this.unitFormation[0]) || this.unitExists(this.unitFormation[1]) ||
                this.unitExists(this.unitFormation[2]) || this.unitExists(this.unitFormation[3]) ||
                this.unitExists(this.unitFormation[4]) || this.unitExists(this.unitFormation[5]));
        };
        FieldBattle.prototype.unitExists = function (Unit, temp) {
            if (temp === void 0) { temp = null; }
            if (Unit != null) {
                if (Unit.isAlive) {
                    temp = true;
                }
                else {
                    temp = false;
                }
            }
            else {
                temp = false;
            }
            return temp;
        };
        FieldBattle.prototype.unitUpdate = function (Unit) {
            if (this.unitExists(Unit) /*Unit != null*/) {
                Unit.update();
            }
        };
        FieldBattle.prototype.checkIfNull = function (unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12) {
            if (this.unitExists(unit1)) {
                return unit1;
            }
            else if (this.unitExists(unit2)) {
                return unit2;
            }
            else if (this.unitExists(unit3)) {
                return unit3;
            }
            else if (this.unitExists(unit4)) {
                return unit4;
            }
            else if (this.unitExists(unit5)) {
                return unit5;
            }
            else if (this.unitExists(unit6)) {
                return unit6;
            }
            else if (this.unitExists(unit7)) {
                return unit7;
            }
            else if (this.unitExists(unit8)) {
                return unit8;
            }
            else if (this.unitExists(unit9)) {
                return unit9;
            }
            else if (this.unitExists(unit10)) {
                return unit10;
            }
            else if (this.unitExists(unit11)) {
                return unit11;
            }
            else if (this.unitExists(unit12)) {
                return unit12;
            }
            else {
                return this.currentUnit;
            }
        };
        FieldBattle.prototype.pickCurrentUnit = function () {
            if (this.unitExists(this.nextUnit)) {
                this.currentUnit = this.nextUnit;
            }
        };
        FieldBattle.prototype.pickNextUnit = function () {
            if ((this.unitExists(this.unitFormation[0])) && (this.currentUnit === this.unitFormation[0])) {
                this.nextUnit = this.checkIfNull(this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0]);
                //console.log("I'm here 2");
            }
            else if ((this.unitExists(this.unit1enemy)) && (this.currentUnit === this.unit1enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy);
                //console.log("I'm here 3");
            }
            else if ((this.unitExists(this.unitFormation[1])) && (this.currentUnit === this.unitFormation[1])) {
                this.nextUnit = this.checkIfNull(this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1]);
                //console.log("I'm here 4");
            }
            else if ((this.unitExists(this.unit2enemy)) && (this.currentUnit === this.unit2enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy);
                //console.log("I'm here 5");
            }
            else if ((this.unitExists(this.unitFormation[2])) && (this.currentUnit === this.unitFormation[2])) {
                this.nextUnit = this.checkIfNull(this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2]);
                //console.log("I'm here 6");
            }
            else if ((this.unitExists(this.unit3enemy)) && (this.currentUnit === this.unit3enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy);
                //console.log("I'm here 7");
            }
            else if ((this.unitExists(this.unitFormation[3])) && (this.currentUnit === this.unitFormation[3])) {
                this.nextUnit = this.checkIfNull(this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3]);
                //console.log("I'm here 8");
            }
            else if ((this.unitExists(this.unit4enemy)) && (this.currentUnit === this.unit4enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy);
                //console.log("I'm here 9");
            }
            else if ((this.unitExists(this.unitFormation[4])) && (this.currentUnit === this.unitFormation[4])) {
                this.nextUnit = this.checkIfNull(this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4]);
                //console.log("I'm here 10");
            }
            else if ((this.unitExists(this.unit5enemy)) && (this.currentUnit === this.unit5enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy);
                //console.log("I'm here 11");
            }
            else if ((this.unitExists(this.unitFormation[5])) && (this.currentUnit === this.unitFormation[5])) {
                this.nextUnit = this.checkIfNull(this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5]);
                //console.log("I'm here 12");
            }
            else if ((this.unitExists(this.unit6enemy)) && (this.currentUnit === this.unit6enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
                //console.log("I'm here 1");
            }
            else {
                this.nextUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
            }
            //console.log("ALIVE CUR?"+this.currentUnit.isAlive);
            //console.log("ALIVE NXT?"+this.nextUnit.isAlive);
            return this.nextUnit;
        };
        FieldBattle.prototype.attackOrder = function () {
            if (this.nextUnit.isAlive) {
                if (this.currentUnit.canAttack && this.currentUnit.attackFinished && this.currentUnit.attackStarted) {
                    this.currentUnit.canAttack = false;
                    this.currentUnit.attackStarted = false;
                    this.currentUnit.isDone = false;
                    this.pickCurrentUnit();
                    this.pickNextUnit();
                    this.currentUnit.canAttack = true;
                    if (this.currentUnit.isEnemy && this.currentUnit.health > 0) {
                        this.ActivateEnemy();
                    }
                }
            }
            else {
                this.pickCurrentUnit(); //FIXME: Review if needed.
                this.pickNextUnit();
                this.currentUnit.canAttack = true;
            }
            //console.log(this.currentUnit, this.nextUnit);
        };
        FieldBattle.prototype.CurrentUnitAttack = function () {
            if (this.currentUnit.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                if (!this.currentUnit.isEnemy) {
                    this.currentUnit.DoDamage(this.unit1enemy, this.unit2enemy, this.unit3enemy, this.unit4enemy, this.unit5enemy, this.unit6enemy, this.currentUnit.strength);
                    this.ui.attackSound(); /////
                }
                else {
                    this.currentUnit.DoDamage(this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5], this.currentUnit.strength);
                    this.ui.attackSound(); ////
                }
            }
            if (this.PlayerDead()) {
                this.playerDead = true;
                this.playerDeadSignal.dispatch();
            }
            if (this.EnemiesDead()) {
                this.enemiesDead = true;
                if (this.activeGame && this.AttackFinished(this.unitFormation)) {
                    this.enemiesDeadSignal.dispatch();
                }
            }
        };
        FieldBattle.prototype.ActivateEnemy = function () {
            if (this.activeGame) {
                this.tempUnit = this.checkIfNull(this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5], this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5]);
                //console.log(this.activeGame);
                this.currentUnit.pointerB_x = this.tempUnit.x;
                this.currentUnit.pointerB_y = this.tempUnit.y;
                this.tempUnit.isAttackable = true;
                //console.log("Is Attackable " + this.tempUnit.isAttackable + " " + this.tempUnit.name);
                if (this.currentUnit.isMelee) {
                    this.currentUnit.currentState = TurnBasedBattles.UnitStates.WALKLEFT;
                }
                else {
                    this.currentUnit.currentState = TurnBasedBattles.UnitStates.ATTACK;
                }
                this.currentUnit.attackFinished = false;
                this.currentUnit.attackStarted = true;
            }
        };
        FieldBattle.prototype.render = function () {
            //this.game.debug.cameraInfo(this.game.camera, 32, 32);
        };
        FieldBattle.prototype.loadBattleFieldBackground = function (map) {
            switch (map) {
                case "Forest": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldForest");
                    break;
                }
                case "Mountain": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldMountain");
                    break;
                }
                case "Waterfall": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldWaterfall");
                    break;
                }
                case "PineForest": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldPineForest");
                    break;
                }
                case "PineForest2": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldPineForest2");
                    break;
                }
                case "BossGround": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldBossGround");
                    break;
                }
                default: {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldForest");
                    break;
                }
            }
        };
        return FieldBattle;
    }(Phaser.State));
    TurnBasedBattles.FieldBattle = FieldBattle;
})(TurnBasedBattles || (TurnBasedBattles = {}));
/// <reference path = "../../lib/phaser.d.ts"/>
/// <reference path = "../UI/DrawUI.ts"/>
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var MAP_WIDTH = 1300;
    var MAP_HEIGHT = 750;
    var Map = /** @class */ (function (_super) {
        __extends(Map, _super);
        function Map() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Map.prototype.init = function (uiClass, selectedUnitFormation, background, levelComplete) {
            this.ui = uiClass;
            this.unitFormation = selectedUnitFormation;
            //console.log(this.ui.playMusic);
            //console.log("The selected units from previous state: ");
            //console.log(this.unitFormation);
            this.mapCompleted(background, levelComplete);
        };
        Map.prototype.create = function () {
            this.backgroundMap = this.game.add.image(0, 0, "map-bg");
            this.backgroundMap.width = MAP_WIDTH;
            this.backgroundMap.height = MAP_HEIGHT;
            this.drawMissionIcons();
            this.ui.drawMapStateUI();
            //fix for when returning from battle the input is disabled
            //TODO: do it right
            this.game.input.enabled = true;
        };
        Map.prototype.mapCompleted = function (background, isComplete) {
            switch (background) {
                case "Forest": {
                    this.missionOneCompleted = true;
                    break;
                }
                case "Waterfall": {
                    this.missionTwoCompleted = true;
                    break;
                }
                case "Mountain": {
                    this.missionThreeCompleted = true;
                    break;
                }
                case "PineForest": {
                    this.missionFourCompleted = true;
                    break;
                }
                case "PineForest2": {
                    this.missionFiveCompleted = true;
                    break;
                }
                case "BossGround": {
                    this.missionBossCompleted = true;
                    break;
                }
                default: {
                    break;
                }
            }
        };
        Map.prototype.loadMission = function (mission, x, y, background, isComplete) {
            var _this = this;
            mission = this.game.add.sprite(x, y, "battleSpot");
            if (background === "BossGround") {
                mission.scale.set(1);
            }
            else {
                mission.scale.set(0.5);
            }
            mission.inputEnabled = true;
            mission.tint = isComplete ? TurnBasedBattles.COLOR_HOVER_GREEN_NUM3 : TurnBasedBattles.COLOR_HOVER_RED_NUM2;
            mission.events.onInputOver.add(function () {
                mission.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
            });
            mission.events.onInputOut.add(function () {
                mission.tint = isComplete ? TurnBasedBattles.COLOR_HOVER_GREEN_NUM3 : TurnBasedBattles.COLOR_HOVER_RED_NUM2;
            });
            mission.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.FIELD_BATTLE_STATE, true, false, _this.ui, _this.unitFormation, background, isComplete);
            });
        };
        Map.prototype.drawMissionIcons = function () {
            this.loadMission(this.mapMissionOne, 900, 310, "Forest", this.missionOneCompleted);
            if (this.missionOneCompleted) {
                this.loadMission(this.mapMissionTwo, 1050, 420, "Waterfall", this.missionTwoCompleted);
            }
            if (this.missionTwoCompleted) {
                this.loadMission(this.mapMissionThree, 900, 550, "Mountain", this.missionThreeCompleted);
            }
            if (this.missionThreeCompleted) {
                this.loadMission(this.mapMissionFour, 300, 600, "PineForest", this.missionFourCompleted);
            }
            if (this.missionFourCompleted) {
                this.loadMission(this.mapMissionFive, 200, 300, "PineForest2", this.missionFiveCompleted);
            }
            if (this.missionFiveCompleted) {
                this.loadMission(this.mapMissionBoss, 600, 300, "BossGround", this.missionBossCompleted);
            }
        };
        return Map;
    }(Phaser.State));
    TurnBasedBattles.Map = Map;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Menu.prototype.init = function (uiClass) {
            this.ui = uiClass;
        };
        Menu.prototype.create = function () {
            var backgroundImage = this.game.add.sprite(0, 0, "menuBackground");
            this.menuGameTitle();
            this.ui.drawMenuStateUI();
        };
        Menu.prototype.menuGameTitle = function () {
            var titleBanner = this.game.add.sprite(433, 65, "titleBanner");
            titleBanner.scale.setTo(0.5, 0.5);
            titleBanner.width = 940;
            var gameTitle = this.game.add.text(630, 80, "Protectors of Goldcrest", {
                font: TurnBasedBattles.FONT_BERKSHIRE,
                fontWeight: "bold",
                fontSize: 55,
                fill: TurnBasedBattles.COLOR_ORANGE,
                stroke: "#000000",
                strokeThickness: 3
            });
        };
        return Menu;
    }(Phaser.State));
    TurnBasedBattles.Menu = Menu;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Preload = /** @class */ (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preload.prototype.create = function () {
            this.preloadImage = this.game.add.sprite(600, 300, "mechanism-1");
            this.preloadImage.angle = 90;
            this.preloadImage.anchor.setTo(0.5, 0.5);
            this.preloadImageClone = this.game.add.sprite(700, 400, "mechanism-2");
            this.preloadImageClone.angle = 90;
            this.preloadImageClone.anchor.setTo(0.5, 0.5);
            this.startLoading();
            this.game.load.onLoadStart.add(this.startLoading, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
        };
        Preload.prototype.startLoading = function () {
            // Menu
            this.game.load.image("menuBackground", "src/assets/backgrounds/menuBackground.jpg");
            this.game.load.image("menuButton1", "src/assets/UI/menuButton1.png");
            this.game.load.image("menuButton2", "src/assets/UI/menuButton2.png");
            this.game.load.image("speaker", "src/assets/UI/speaker.png");
            this.game.load.image("mute", "src/assets/UI/mute.png");
            this.game.load.image("titleBanner", "src/assets/UI/banner.png");
            // Town
            this.game.load.image("town", "src/assets/town/backgr-town-square.png");
            this.game.load.image("museumR", "src/assets/town/museumR1.png");
            this.game.load.image("castleL", "src/assets/town/castleL1.png");
            this.game.load.image("bellTowerM", "src/assets/town/bell-towerM1.png");
            this.game.load.image("unitSelection", "src/assets/town/unitSelection.png");
            this.game.load.image("armory", "src/assets/town/armory.png");
            this.game.load.image("bg-big", "src/assets/town/bg-big.png");
            this.game.load.image("bg-small", "src/assets/town/bg-small.png");
            // Armory
            this.game.load.image("armor1", "src/assets/town/upgrades/Armor_1.png");
            this.game.load.image("armor2", "src/assets/town/upgrades/Armor_8.png");
            this.game.load.image("armor3", "src/assets/town/upgrades/Armor_10.png");
            this.game.load.image("sword1", "src/assets/town/upgrades/sword_1.png");
            this.game.load.image("sword2", "src/assets/town/upgrades/sword_2.png");
            this.game.load.image("sword3", "src/assets/town/upgrades/sword_3.png");
            this.game.load.image("equipment-arms", "src/assets/town/upgrades/equipment-arms.png");
            this.game.load.image("equipment-legs", "src/assets/town/upgrades/equipment-legs.png");
            // UI
            this.game.load.image("nextIconOr", "src/assets/UI/nextIconOr.png");
            this.game.load.image("returnIconO", "src/assets/UI/returnIconO.png");
            this.game.load.image("clicker", "src/assets/UI/clicker.png");
            this.game.load.image("gold", "src/assets/UI/gold.png");
            // Map
            this.game.load.image("battleSpot", "src/assets/Map/battleSpot.png");
            this.game.load.image("map-bg", "src/assets/Map/map-bg.jpg");
            // Battlefield
            this.game.load.image("battleFieldForest", "src/assets/battlefield/battleFieldForest.png");
            this.game.load.image("battleFieldWaterfall", "src/assets/battlefield/battleFieldWaterfall.png");
            this.game.load.image("battleFieldMountain", "src/assets/battlefield/battleFieldMountain.png");
            this.game.load.image("battleFieldPineForest", "src/assets/battlefield/battleFieldPineForest.png");
            this.game.load.image("battleFieldPineForest2", "src/assets/battlefield/battleFieldPineForest.png");
            this.game.load.image("battleFieldBossGround", "src/assets/battlefield/battleFieldBossGround.png");
            this.game.load.image("battleUI", "src/assets/UI/battleUI.png");
            this.game.load.image("hpTop", "src/assets/UI/HP2.png");
            this.game.load.image("hpBottom", "src/assets/UI/HP1.png");
            this.game.load.image("gameWon", "src/assets/battlefield/icons/gameWon.png");
            this.game.load.image("gameLost", "src/assets/battlefield/icons/gameLost.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor2.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor3.png");
            //**** PLAYER UNITS: ***/
            // Knight Gold
            this.game.load.image("knight-rect", "src/assets/characters/knightGold/knight-rect.png");
            this.game.load.image("knight-circle", "src/assets/characters/knightGold/knight-circle.png");
            this.game.load.atlas("knightGold", "src/assets/characters/knightGold/knightGold.png", "src/assets/characters/knightGold/knightGold.json");
            // Knight Spear
            this.game.load.image("knightSpear-rect", "src/assets/characters/knightSpear/knightSpear-rect.png");
            this.game.load.image("knightSpear-circle", "src/assets/characters/knightSpear/knightSpear-circle.png");
            this.game.load.atlas("knightSpear", "src/assets/characters/knightSpear/knightSpear.png", "src/assets/characters/knightSpear/knightSpear.json");
            // Knight Axe
            this.game.load.image("knightAxe-rect", "src/assets/characters/knightAxe/knightAxe-rect.png");
            this.game.load.image("knightAxe-circle", "src/assets/characters/knightAxe/knightAxe-circle.png");
            this.game.load.atlas("knightAxe", "src/assets/characters/knightAxe/knightAxe.png", "src/assets/characters/knightAxe/knightAxe.json");
            // Woman Archer
            this.game.load.image("womanArcher-rect", "src/assets/characters/womanArcher/womanArcher-rect.png");
            this.game.load.image("womanArcher-circle", "src/assets/characters/womanArcher/womanArcher-circle.png");
            this.game.load.atlas("womanArcher", "src/assets/characters/womanArcher/womanArcher.png", "src/assets/characters/womanArcher/womanArcher.json");
            // Elf Mage
            this.game.load.image("elfMage-rect", "src/assets/characters/elfMage/elfMage-rect.png");
            this.game.load.image("elfMage-circle", "src/assets/characters/elfMage/elfMage-circle.png");
            this.game.load.atlas("elfMage", "src/assets/characters/elfMage/elfMage.png", "src/assets/characters/elfMage/elfMage.json");
            //**** ENEMY UNITS: ****/
            // Troll Club
            this.game.load.image("trollClub-circle", "src/assets/characters/trollClub/trollClub-circle.png");
            this.game.load.atlas("trollClub", "src/assets/characters/trollClub/trollClub.png", "src/assets/characters/trollClub/trollClub.json");
            // Troll Hammer
            this.game.load.image("trollHammer-circle", "src/assets/characters/trollHammer/trollHammer-circle.png");
            this.game.load.atlas("trollHammer", "src/assets/characters/trollHammer/trollHammer.png", "src/assets/characters/trollHammer/trollHammer.json");
            // Troll Bone
            this.game.load.image("trollBone-circle", "src/assets/characters/trollBone/trollBone-circle.png");
            this.game.load.atlas("trollBone", "src/assets/characters/trollBone/trollBone.png", "src/assets/characters/trollBone/trollBone.json");
            // Elf Sword
            this.game.load.image("elfSword-circle", "src/assets/characters/elfSword/elfSword-circle.png");
            this.game.load.atlas("elfSword", "src/assets/characters/elfSword/elfSword.png", "src/assets/characters/elfSword/elfSword.json");
            // Elf Archer
            this.game.load.image("elfArcher-circle", "src/assets/characters/elfArcher/elfArcher-circle.png");
            this.game.load.atlas("elfArcher", "src/assets/characters/elfArcher/elfArcher1.png", "src/assets/characters/elfArcher/elfArcher1.json");
            // Elf Mage
            this.game.load.image("elfMageEnemy-circle", "src/assets/characters/elfMageEnemy/elfMage-circle.png");
            this.game.load.atlas("elfMageEnemy", "src/assets/characters/elfMageEnemy/elfMage.png", "src/assets/characters/elfMageEnemy/elfMage.json");
            // Knight Gold
            this.game.load.image("knightGoldEnemy-circle", "src/assets/characters/knightGoldEnemy/knight-circle.png");
            this.game.load.atlas("knightGoldEnemy", "src/assets/characters/knightGoldEnemy/knightGold.png", "src/assets/characters/knightGoldEnemy/knightGold.json");
            // Knight Spear
            this.game.load.image("knightSpearEnemy-circle", "src/assets/characters/knightSpearEnemy/knightSpear-circle.png");
            this.game.load.atlas("knightSpearEnemy", "src/assets/characters/knightSpearEnemy/knightSpear.png", "src/assets/characters/knightSpearEnemy/knightSpear.json");
            // Knight Axe
            this.game.load.image("knightAxeEnemy-circle", "src/assets/characters/knightAxeEnemy/knightAxe-circle.png");
            this.game.load.atlas("knightAxeEnemy", "src/assets/characters/knightAxeEnemy/knightAxe.png", "src/assets/characters/knightAxeEnemy/knightAxe.json");
            // Orc Axe
            this.game.load.image("orcAxe-circle", "src/assets/characters/orcAxe/orcAxe-circle.png");
            this.game.load.atlas("orcAxe", "src/assets/characters/orcAxe/orcAxe1.png", "src/assets/characters/orcAxe/orcAxe1.json");
            // Orc Hammer
            this.game.load.image("orcHammer-circle", "src/assets/characters/orcHammer/orcHammer-circle.png");
            this.game.load.atlas("orcHammer", "src/assets/characters/orcHammer/orcHammer1.png", "src/assets/characters/orcHammer/orcHammer1.json");
            // Orc Sword
            this.game.load.image("orcSword-circle", "src/assets/characters/orcSword/orcSword-circle.png");
            this.game.load.atlas("orcSword", "src/assets/characters/orcSword/orcSword1.png", "src/assets/characters/orcSword/orcSword1.json");
            // Woman Archer
            this.game.load.image("womanArcherEnemy-circle", "src/assets/characters/womanArcherEnemy/womanArcher-circle.png");
            this.game.load.atlas("womanArcherEnemy", "src/assets/characters/womanArcherEnemy/womanArcher.png", "src/assets/characters/womanArcherEnemy/womanArcher.json");
            // Woman Knives
            this.game.load.image("womanKnives-circle", "src/assets/characters/womanKnives/womanKnives-circle.png");
            this.game.load.atlas("womanKnives", "src/assets/characters/womanKnives/womanKnives.png", "src/assets/characters/womanKnives/womanKnives.json");
            // Woman Sword
            this.game.load.image("womanSword-circle", "src/assets/characters/womanSword/womanSword-circle.png");
            this.game.load.atlas("womanSword", "src/assets/characters/womanSword/womanSword.png", "src/assets/characters/womanSword/womanSword.json");
            // Troll Bone
            this.game.load.image("boss-circle", "src/assets/characters/boss/trollBone-circle.png");
            this.game.load.atlas("boss", "src/assets/characters/boss/trollBone.png", "src/assets/characters/boss/trollBone.json");
            // Sounds
            this.game.load.audio("menuTheme", "src/assets/sounds/menuTheme.mp3");
            this.game.load.audio("townTheme", "src/assets/sounds/townTheme.mp3");
            this.game.load.audio("bell", "src/assets/sounds/bell.mp3");
            this.game.load.audio("buttonClick", "src/assets/sounds/buttonClick.wav");
            this.game.load.audio("mapTheme", "src/assets/sounds/mapTheme.mp3");
            this.game.load.audio("battleTheme", "src/assets/sounds/battleTheme.mp3");
            this.game.load.audio("sword_attack", "src/assets/sounds/sword_attack.wav");
            this.game.load.audio("game_over", "src/assets/sounds/game_over.mp3");
            this.game.load.audio("gamewin", "src/assets/sounds/gamewin.mp3");
            var introText = this.game.add.text(this.game.width * 0.4, this.game.height * 0.8, "LOADING", {
                font: TurnBasedBattles.FONT_BERKSHIRE,
                fill: TurnBasedBattles.COLOR_ORANGE,
                fontWeight: "bold",
                fontSize: 50,
                stroke: "#000000",
                strokeThickness: 3
            });
            this.game.load.start();
        };
        Preload.prototype.loadComplete = function () {
            this.ui = new TurnBasedBattles.DrawUi(this.game, 0, 0, false);
            this.game.state.start(TurnBasedBattles.MENU_STATE, false, false, this.ui);
        };
        Preload.prototype.fileComplete = function () {
            this.preloadImage.angle += 0.5;
            this.preloadImageClone.angle += -0.5;
        };
        return Preload;
    }(Phaser.State));
    TurnBasedBattles.Preload = Preload;
})(TurnBasedBattles || (TurnBasedBattles = {}));
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var Town = /** @class */ (function (_super) {
        __extends(Town, _super);
        function Town() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.intro = true;
            return _this;
        }
        //private playerDead: boolean;
        Town.prototype.init = function (uiClass, selectedUnitFormation, tutorialsEnabled) {
            this.ui = uiClass;
            this.unitFormation = selectedUnitFormation;
            this.tutorialsEnabled = tutorialsEnabled;
            //console.log(this.tutorialsEnabled);
            //console.log(this.unitFormation);
            //this.playerDead = playerDead;
            //console.log("The selected units from MAP: ");
            //console.log(this.unitFormation);
        };
        Town.prototype.create = function () {
            this.loadTown();
            this.ui.drawTownStateUI(this.unitFormation);
            this.ui.townMusic();
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
            //console.log("TOWN");
        };
        Town.prototype.openCharacterMenu = function (open) {
            //console.log("Clicked on museum");
            this.ui.isUnitSelectionOpen(open, this.unitFormation);
            this.armory.inputEnabled = false;
            this.questTower.inputEnabled = false;
        };
        Town.prototype.loadTown = function () {
            var backgroundTown = this.game.add.sprite(0, 0, "town");
            this.loadBarracks();
            this.loadArmory();
            this.loadQuestTower();
            if (this.tutorialsEnabled) {
                this.loadTutorialText();
            }
        };
        Town.prototype.loadTutorialText = function () {
            var _this = this;
            if ((this.unitFormation === undefined)) {
                var introSprite_1 = this.game.add.sprite(300, 75, "bg-big");
                var introText_1 = this.game.add.text(this.game.width / 2, this.game.height / 2, "\nWelcome, Sire! \n\n Thank you for coming here to defend this town \n" +
                    "from the oncoming waves of enemies.\n"
                    + "\n They are very close. \n" +
                    " \n I suggest that you go to the barracks\n to recruit a small army\n" +
                    " and hunt down the enemies!\n\n<OK>", {
                    font: "27px Acme",
                    fill: "#281905",
                    align: "center"
                });
                introText_1.alpha = 0;
                this.game.add.tween(introSprite_1).from({ height: 0 }, 1000, Phaser.Easing.Default, true, 0, 0, false)
                    .onComplete.addOnce(function () {
                    introText_1.anchor.setTo(0.5);
                    introText_1.alignIn(introSprite_1, Phaser.CENTER);
                    _this.game.add.tween(introText_1).to({ alpha: 1 }, 500, Phaser.Easing.Default, true, 0, 0, false);
                    introText_1.inputEnabled = true;
                    introText_1.events.onInputDown.addOnce(function () {
                        introText_1.inputEnabled = false;
                        introSprite_1.destroy();
                        //bmd.clear();
                        introText_1.destroy();
                        //console.log("destroyed stuf");
                        //*****************part*two******************//
                        var secondSprite = _this.game.add.sprite(_this.game.width - 400, 100, "bg-small");
                        var secondText = _this.game.add.text(_this.game.width / 2, _this.game.height / 2, "\nAdd a few units to your army\nand set their position.\n" +
                            "Then you can go to the map\n to select a battle.\n\n < OK >", {
                            font: "22px Acme",
                            fill: "#281905",
                            align: "center"
                        });
                        secondText.alpha = 0;
                        _this.game.add.tween(secondSprite).from({ width: 0 }, 1000, Phaser.Easing.Default, true, 0, 0, false)
                            .onComplete.addOnce(function () {
                            _this.game.add.tween(secondText).to({ alpha: 1 }, 500, Phaser.Easing.Default, true, 0, 0, false);
                            secondText.anchor.setTo(0.5);
                            secondText.alignIn(secondSprite, Phaser.CENTER);
                            secondText.inputEnabled = true;
                            secondText.events.onInputDown.addOnce(function () {
                                secondText.inputEnabled = false;
                                secondSprite.destroy();
                                //newBmd.clear();
                                secondText.destroy();
                                //console.log("destroyed stuf");
                            });
                        });
                    });
                });
            }
            else if ((this.unitFormation !== undefined) && this.intro) {
                //if (this.playerDead) {
                var upgradesSprite_1 = this.game.add.sprite(10, 100, "bg-small");
                var upgradesText_1 = this.game.add.text(this.game.width / 2, this.game.height / 2, "\nWith the aquired gold\n from the fallen enemies, \nyou can purchase "
                    + "Upgrades\n for your army, Sire!\n\n < OK > ", {
                    font: "22px Acme",
                    fill: "#281905",
                    align: "center"
                });
                upgradesText_1.alpha = 0;
                this.game.add.tween(upgradesSprite_1).from({ height: 0 }, 1000, Phaser.Easing.Default, true, 0, 0, false)
                    .onComplete.addOnce(function () {
                    _this.game.add.tween(upgradesText_1).to({ alpha: 1 }, 500, Phaser.Easing.Default, true, 0, 0, false);
                    upgradesText_1.anchor.setTo(0.5);
                    upgradesText_1.alignIn(upgradesSprite_1, Phaser.CENTER);
                    upgradesText_1.inputEnabled = true;
                    upgradesText_1.events.onInputDown.addOnce(function () {
                        upgradesText_1.inputEnabled = false;
                        upgradesSprite_1.destroy();
                        //newBmd.clear();
                        upgradesText_1.destroy();
                        //console.log("destroyed null");
                        _this.intro = false;
                    });
                });
                //console.log("YOU WON, Coming from town");
                //} else {
                //    //console.log("You LOST, Coming from town dead first battle");
                //}
            }
            else if (!this.intro && (this.unitFormation !== undefined)) {
                //Don't display text
            }
            //if (!this.playerDead) {
            //    //console.log("You LOST, Coming from town");
            //}
        };
        Town.prototype.loadBarracks = function () {
            var _this = this;
            this.barracks = this.game.add.sprite(this.game.width, this.game.height, "museumR");
            this.barracks.anchor.set(1);
            this.barracks.inputEnabled = true;
            this.barracks.input.pixelPerfectOver = true;
            this.barracks.input.pixelPerfectClick = true;
            this.barracks.events.onInputOver.add(function () {
                _this.barracks.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                //this.barracks.input.useHandCursor = true;
            });
            this.barracks.events.onInputOut.add(function () {
                _this.barracks.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            var open = true;
            this.barracks.events.onInputDown.add(function () {
                if (open) {
                    _this.openCharacterMenu(open);
                    open = false;
                }
                else {
                    _this.openCharacterMenu(open);
                    open = true;
                    _this.armory.inputEnabled = true;
                    _this.questTower.inputEnabled = true;
                }
            });
        };
        Town.prototype.loadQuestTower = function () {
            var _this = this;
            var QUEST_TOWER_X_POS = 694;
            var QUEST_TOWER_Y_POS = 225;
            this.questTower = this.game.add.sprite(QUEST_TOWER_X_POS, QUEST_TOWER_Y_POS, "bellTowerM");
            this.questTower.inputEnabled = true;
            this.questTower.input.pixelPerfectOver = true;
            this.questTower.input.pixelPerfectClick = true;
            this.questTower.events.onInputOver.add(function () {
                _this.questTower.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                //this.questTower.input.useHandCursor = true;
            });
            this.questTower.events.onInputOut.add(function () {
                _this.questTower.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            this.questTower.events.onInputDown.add(function () {
                //console.log("clicked on bell");
                _this.ui.bellSound();
                // TODO: add this...
            });
        };
        Town.prototype.loadArmory = function () {
            var _this = this;
            this.armory = this.game.add.sprite(0, this.game.height, "castleL");
            this.armory.anchor.set(0, 1);
            this.armory.inputEnabled = true;
            this.armory.input.pixelPerfectOver = true;
            this.armory.input.pixelPerfectClick = true;
            this.armory.events.onInputOver.add(function () {
                _this.armory.tint = TurnBasedBattles.COLOR_HOVER_YELLOW_NUM;
                //this.armory.input.useHandCursor = true;
            });
            this.armory.events.onInputOut.add(function () {
                _this.armory.tint = TurnBasedBattles.COLOR_CLEAR_NUM;
            });
            var isOpen = true;
            this.armory.events.onInputDown.add(function () {
                if (isOpen) {
                    _this.openArmoryMenu(isOpen);
                    isOpen = false;
                }
                else {
                    _this.openArmoryMenu(isOpen);
                    isOpen = true;
                    _this.barracks.inputEnabled = true;
                    _this.questTower.inputEnabled = true;
                }
            });
        };
        Town.prototype.openArmoryMenu = function (isOpen) {
            //console.log("Clicked on armory");
            //console.log(isOpen);
            this.ui.isUpgradeUnitsMenuOpen(isOpen, this.unitFormation);
            this.barracks.inputEnabled = false;
            this.questTower.inputEnabled = false;
        };
        return Town;
    }(Phaser.State));
    TurnBasedBattles.Town = Town;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=tsc.js.map