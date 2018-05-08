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
                console.log("draw icons and text unit icons UNDEFINED");
            }
            else {
                _this.drawAllIconsAndText(_this.unitIcons);
                _this.loadClickers();
                _this.loadDefaultIcons();
                console.log("1. These are the generated units: ");
                console.log(newUnitFormation);
                _this.generateUnits(newUnitFormation);
                console.log("draw icons and text not Undefined");
                console.log("2. These are the generated units: ");
                console.log(newUnitFormation);
            }
            return _this;
        }
        SelectUnits.prototype.displayUnitSelectionMenu = function (open, unitFormation) {
            if (open) {
                if (unitFormation === undefined) {
                    this.showIcons(this.unitIcons, false);
                    console.log("Frst time from select units and its UNDEFINED");
                }
                else {
                    unitFormation = unitFormation.concat(this.unitIcons);
                    this.showIcons(unitFormation, true);
                    console.log("Frst time from select units and its not Undef");
                }
            }
            else {
                if (unitFormation === undefined) {
                    console.log("Second time from select units and its UNDEFINED");
                    this.hideIcons(this.unitIcons, false);
                }
                else {
                    unitFormation = unitFormation.concat(this.unitIcons);
                    console.log("Second time from select units and its not Undef");
                    this.hideIcons(unitFormation, false);
                }
            }
        };
        SelectUnits.prototype.generateUnits = function (unitFormation) {
            this.unitFormation = unitFormation;
            for (var i = 0; i < this.unitFormation.length; i++) {
                console.log("MSG1");
                console.log(unitFormation);
                console.log("MSG2");
                console.log(this.unitFormation);
                if (this.unitFormation[i] === null) {
                    this.unitFormation.splice(i, 1, null);
                    console.log("Null" + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.GOLD_KNIGHT_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Knight(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.ELF_MAGE_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Mage(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === TurnBasedBattles.WOMAN_ARCHER_STR) {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.Archer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === "Knight Spear") {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    console.log(this.unitFormation[i].name + " at " + i.toString());
                }
                else if (this.unitFormation[i].name === "Knight Axe") {
                    this.unitFormation.splice(i, 1, (new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN)));
                    console.log(this.unitFormation[i].name + " at " + i.toString());
                }
            }
            for (var index = 0; index < this.unitFormation.length; index++) {
                console.log("MSG3");
                console.log(unitFormation);
                console.log("MSG4");
                console.log(this.unitFormation);
                if (this.unitFormation[index] === null) {
                    console.log("Null at set rect and generate units");
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
                    console.log(" Null at enable behavoiur");
                }
                else {
                    unit.circleImage.events.onDragStart.add(function () {
                        tempPosX = unit.circleImage.x;
                        tempPosY = unit.circleImage.y;
                        console.log(tempPosX);
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
                console.log("the circleimage x position is: " + unit.circleImage.x);
            }
            if (unit.circleImage.x === TurnBasedBattles.HIDE_FROM_SCREEN) {
                console.log("position out of screen");
            }
            else if (unit.circleImage.x !== tempX || unit.circleImage.y !== tempX) {
                unit.circleImage.x = tempX;
                unit.circleImage.y = tempY;
                console.log("the temp x position is: " + tempX);
                console.log("the circleimage x position is: " + unit.circleImage.x);
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
                    console.log(" Null at enable clicker of current unit" + currentUnit.toString());
                }
                else {
                    unit.rectImage.events.onDragStart.add(function () {
                        tempPosX = unit.rectImage.x;
                        tempPosY = unit.rectImage.y;
                        console.log(tempPosX);
                    });
                    unit.rectImage.events.onDragStop.add(function () {
                        console.log("before unit rect image x" + unit.rectImage.x);
                        _this.clickerSprites.forEach(function (clicker) {
                            for (var checkedUnit = 0; checkedUnit < unitFormation.length; checkedUnit++) {
                                var unitCheck = unitFormation[checkedUnit];
                                if (unitCheck === null) {
                                    console.log(" Null at enable checked unit");
                                }
                                else {
                                    console.log("unit x" + unit.rectImage.x + " unitCheck x" + unitCheck.rectImage.x);
                                    if (unit.rectImage.overlap(clicker)) {
                                        unit.rectImage.x = clicker.x;
                                        unit.rectImage.y = clicker.y;
                                        console.log(" old behaviour");
                                    }
                                    else if (unit.name === unitCheck.name) {
                                        console.log(" unit has the same name as unitcheck, so skip");
                                    }
                                    else if (unit.rectImage.overlap(unitCheck.rectImage)) {
                                        console.log(unit.name + " is overlaps over " + unitCheck.name);
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
                    console.log(" Null at unitinfo");
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
                    if (i < TOTAL_UNIT_SLOTS && concat) {
                        //this.emptySlots--;
                        //this.slotsAvaliableText.setText((this.emptySlots).toString());
                        unitFormation[i].circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                        unitFormation[i].rectImage.x = this.clickerSprites[i].x;
                        unitFormation[i].rectImage.y = this.clickerSprites[i].y;
                        console.log("unit number " + i + " " + unitFormation[i].name);
                        console.log(unitFormation);
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
            // tween objects to invisible
            //this.game.add.tween(DrawUi.userMoneyText).to({alpha: 0}, 250, Phaser.Easing.Default, true)
            //    .onComplete.addOnce(() => {
            //    this.unitSelectionSprite.x = HIDE_FROM_SCREEN;
            //});
            this.game.add.tween(this.unitInfoText).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
                .onComplete.addOnce(function () {
                _this.unitSelectionSprite.x = TurnBasedBattles.HIDE_FROM_SCREEN;
            });
            //this.game.add.tween(this.slotsAvaliableText).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
            //    .onComplete.addOnce(() => {
            //        this.unitSelectionSprite.x = HIDE_FROM_SCREEN;
            //    });
            //this.game.add.tween(this.resetUnitsIcon).to({ alpha: 0 }, 250, Phaser.Easing.Default, true)
            //    .onComplete.addOnce(() => {
            //        this.unitSelectionSprite.x = HIDE_FROM_SCREEN;
            //    });
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
                console.log("I'm at export array at current clicker index of: " + currentClickerIndex.toString());
                if (!concat) {
                    console.log("SPLICED! at currentClickerIndex with null, is finished:" + concat);
                    this.unitFormation.splice(currentClickerIndex, 1, null);
                }
                console.log("DBG IVR1, Given unitFormation:");
                console.log(unitFormation);
                console.log("DBG IVR2, Current this.unitFormation:");
                console.log(this.unitFormation);
                for (var currentUnitIndex = 0; currentUnitIndex < unitFormation.length; currentUnitIndex++) {
                    if (unitFormation[currentUnitIndex] === null && currentUnitIndex < TOTAL_UNIT_SLOTS) {
                        console.log("Null so no export");
                    }
                    else {
                        if (unitFormation[currentUnitIndex].rectImage.x === clicker.x &&
                            unitFormation[currentUnitIndex].rectImage.y === clicker.y) {
                            this.unitFormation.splice(currentClickerIndex, 1, unitFormation[currentUnitIndex]);
                            console.log("unitFormation[currentUnitIndex].rectImage matches the clicker!");
                            console.log(clicker.name + " " + unitFormation[currentUnitIndex].name);
                        }
                        else {
                            console.log("unitFormation[currentUnitIndex] !== null: clicker name:"
                                + clicker.name + " clicker.x:" + clicker.x + " y:" + clicker.y);
                        }
                    }
                }
            }
            console.log("The final exported array is this.unitFormation: ");
            console.log(this.unitFormation);
        };
        return SelectUnits;
    }(Phaser.Sprite));
    TurnBasedBattles.SelectUnits = SelectUnits;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=SelectUnits.js.map