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
            console.log(this.health, this.defaultHealth);
            this.HPbarTop.scale.setTo(this.estimateHealthScale(), TurnBasedBattles.SIZE_HP - 0.02);
            console.log(this.name, this.health);
        };
        Unit.prototype.DoUnitDamage = function (Unit, damage) {
            if (Unit != null && Unit.isAlive && (Unit.isAttackable || this.isWizard)) {
                Unit.TakeDamage(damage);
                Unit.isAttackable = false;
                this.ShowDamage(this.showDMG, Unit, "-" + damage.toString());
                console.log("Do damage: " + this.name + " Take damage:" + Unit.name);
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
                console.log("Highlighted");
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
//# sourceMappingURL=Unit.js.map