/// <reference path = "../../lib/phaser.d.ts"/>
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
            console.log("The selected units from previous state: ");
            console.log(this.unitFormation);
            this.mapCompleted(background, levelComplete);
        };
        Map.prototype.create = function () {
            this.loadMapBackground();
            this.ui.drawMapStateUI();
            //fix for ivelin's code ;)
            //TODO: do it right
            this.game.input.enabled = true;
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
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
        Map.prototype.loadMapBackground = function () {
            this.backgroundMap = this.game.add.image(0, 0, "map-bg");
            this.backgroundMap.width = MAP_WIDTH;
            this.backgroundMap.height = MAP_HEIGHT;
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
//# sourceMappingURL=Map.js.map