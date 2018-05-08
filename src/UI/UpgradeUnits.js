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
                            // console.log("Upgraded!" + Knight.strength);
                            if (unitFormation === undefined) {
                                console.log("Undefined unit formation!");
                            }
                            else {
                                unitFormation.forEach(function (unit) {
                                    if (unit === null) {
                                        console.log("Null!");
                                    }
                                    else {
                                        unit.strength += 200;
                                        console.log("Upgraded!" + unit.strength);
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
//# sourceMappingURL=UpgradeUnits.js.map