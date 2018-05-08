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
//# sourceMappingURL=KnightSpear.js.map