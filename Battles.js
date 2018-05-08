/// <reference path = "lib/phaser.d.ts"/>
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
    var GAME_WIDHT = 1280;
    var GAME_HEIGHT = 720;
    var Battles = /** @class */ (function (_super) {
        __extends(Battles, _super);
        function Battles(width, height) {
            var _this = _super.call(this, width, height, Phaser.AUTO, "phaser-div") || this;
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
        var theGame = new Battles(GAME_WIDHT, GAME_HEIGHT);
    };
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Battles.js.map