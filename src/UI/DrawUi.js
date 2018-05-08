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
var TurnBasedBattles;
(function (TurnBasedBattles) {
    var UNIT_SELECTION_POS_X = 50;
    var UNIT_SELECTION_POS_Y = 50;
    var ARMORY_POS_X = 370;
    var ARMORY_POS_Y = 50;
    var TOP_BUTTON_COLOR = "#2d2e30";
    var BOTTOM_BUTTON_COLOR = "#d1861d";
    var TOP_BUTTON_COLOR_HOVER = "#181b21";
    var BOTTOM_BUTTON_COLOR_HOVER = "#f26321";
    var DrawUi = /** @class */ (function (_super) {
        __extends(DrawUi, _super);
        function DrawUi(game, x, y, playMusic) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.playMusic = playMusic;
            return _this;
        }
        DrawUi.prototype.drawMenuStateUI = function () {
            var _this = this;
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
        };
        DrawUi.prototype.drawTownStateUI = function (unitFormation) {
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
                    console.log("How many times");
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
                console.log("game_over sound is stopping all");
            }
        };
        DrawUi.prototype.gameLostMusic = function () {
            if (this.playMusic) {
                var gameLose = this.game.add.audio("game_over");
                gameLose.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("game_over sound is stopping all");
            }
        };
        DrawUi.prototype.gameWinMusic = function () {
            if (this.playMusic) {
                var gameWin = this.game.add.audio("gamewin");
                gameWin.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("gameWinMusic sound is stopping all");
            }
        };
        DrawUi.prototype.bellSound = function () {
            if (this.playMusic) {
                var bell = this.game.add.audio("bell");
                bell.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("clicking sound is stopping all");
            }
        };
        DrawUi.prototype.stopMusic = function () {
            if (this.playMusic) {
                this.game.sound.stopAll();
                console.log("stopMusic sound is stopping all");
            }
        };
        DrawUi.prototype.clickIconSound = function () {
            if (this.playMusic) {
                this.iconClick = this.game.add.audio("buttonClick");
                this.iconClick.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("clicking sound is stopping all");
            }
        };
        DrawUi.prototype.menuMusic = function () {
            if (this.playMusic) {
                this.menuTheme = this.game.add.audio("menuTheme");
                this.menuTheme.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("menu music is stopping all");
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
                console.log("town music is stopping all");
            }
        };
        DrawUi.prototype.mapMusic = function () {
            if (this.playMusic) {
                this.mapTheme = this.game.add.audio("mapTheme");
                this.mapTheme.play();
            }
            else {
                this.game.sound.stopAll();
                console.log("map music is stopping all");
            }
        };
        DrawUi.prototype.battleMusic = function () {
            if (this.playMusic) {
                this.battleTheme = this.game.add.audio("battleTheme");
                this.battleTheme.play(null, null, 0.5, true);
            }
            else {
                this.game.sound.stopAll();
                console.log("map music is stopping all");
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
                _this.game.state.start(TurnBasedBattles.TOWN_STATE, true, false, _this);
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
                console.log("clicked on options");
                if (_this.speakerButton.alpha === 0) {
                    _this.speakerButton.alpha = 1;
                }
                else if (_this.speakerButton.alpha === 1) {
                    _this.speakerButton.alpha = 0;
                }
                if (_this.muteButton.alpha === 0) {
                    _this.muteButton.alpha = 1;
                }
                else if (_this.muteButton.alpha === 1) {
                    _this.muteButton.alpha = 0;
                }
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
            });
        };
        DrawUi.avaliableUserMoney = TurnBasedBattles.START_MONEY;
        return DrawUi;
    }(Phaser.Sprite));
    TurnBasedBattles.DrawUi = DrawUi;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=DrawUi.js.map