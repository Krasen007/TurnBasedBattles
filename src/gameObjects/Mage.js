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
//# sourceMappingURL=Mage.js.map