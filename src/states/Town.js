/// <reference path = "../../lib/phaser.d.ts"/>
/// <reference path = "../Utilites.ts"/>
/// <reference path = "../UI/DrawUI.ts"/>
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
    var Town = /** @class */ (function (_super) {
        __extends(Town, _super);
        function Town() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.intro = true;
            return _this;
        }
        //private playerDead: boolean;
        Town.prototype.init = function (uiClass, selectedUnitFormation, playerDead) {
            this.ui = uiClass;
            this.unitFormation = selectedUnitFormation;
            //this.playerDead = playerDead;
            console.log("The selected units from MAP: ");
            console.log(this.unitFormation);
        };
        Town.prototype.create = function () {
            this.loadTown();
            this.ui.drawTownStateUI(this.unitFormation);
            this.ui.townMusic();
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
        };
        Town.prototype.openCharacterMenu = function (open) {
            console.log("Clicked on museum");
            this.ui.isUnitSelectionOpen(open, this.unitFormation);
            this.armory.inputEnabled = false;
            this.questTower.inputEnabled = false;
        };
        Town.prototype.loadTown = function () {
            var backgroundTown = this.game.add.sprite(0, 0, "town");
            this.loadBarracks();
            this.loadArmory();
            this.loadQuestTower();
            this.loadInfoText();
        };
        Town.prototype.loadInfoText = function () {
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
                        console.log("destroyed stuf");
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
                                console.log("destroyed stuf");
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
                        console.log("destroyed null");
                        _this.intro = false;
                    });
                });
                //console.log("YOU WON, Coming from town");
                //} else {
                //    console.log("You LOST, Coming from town dead first battle");
                //}
            }
            else if (!this.intro && (this.unitFormation !== undefined)) {
                //Don't display text
            }
            //if (!this.playerDead) {
            //    console.log("You LOST, Coming from town");
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
                console.log("clicked on bell");
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
            console.log("Clicked on armory");
            //console.log(isOpen);
            this.ui.isUpgradeUnitsMenuOpen(isOpen, this.unitFormation);
            this.barracks.inputEnabled = false;
            this.questTower.inputEnabled = false;
        };
        return Town;
    }(Phaser.State));
    TurnBasedBattles.Town = Town;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Town.js.map