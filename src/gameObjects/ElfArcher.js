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
//# sourceMappingURL=ElfArcher.js.map