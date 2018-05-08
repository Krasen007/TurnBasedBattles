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
    var EnemyMeleeUnit = /** @class */ (function (_super) {
        __extends(EnemyMeleeUnit, _super);
        function EnemyMeleeUnit(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
            _this.x = x;
            _this.y = y;
            _this.isAlive = false;
            _this.isEnemy = true;
            _this.cursor = _this.game.input.keyboard.createCursorKeys();
            if (_this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                _this.pointerA_x = _this.x;
                _this.pointerA_y = _this.y;
                _this.step_x = 4; // FIXME
                _this.attackStarted = true;
                _this.game.input.onDown.add(function () {
                    if (_this.isHighlighted) {
                        _this.isAttackable = true;
                    }
                }, _this);
            }
            return _this;
        }
        EnemyMeleeUnit.prototype.highlightUnit = function () {
            _super.prototype.highlightUnit.call(this);
        };
        EnemyMeleeUnit.prototype.AttackSequence = function () {
            var _this = this;
            if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                this.animation.animations.play("idle", null, true);
                if (this.canAttack) {
                    this.currentState = TurnBasedBattles.UnitStates.WALKLEFT;
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKLEFT) {
                this.animation.animations.play("walk", null, true);
                if (this.y < this.pointerB_y) {
                    this.y += this.calculateStepY();
                }
                else if (this.y > this.pointerB_y) {
                    this.y -= this.calculateStepY();
                }
                if (this.x > this.pointerB_x + (this.isOrc ? 3 * TurnBasedBattles.BUFFER : TurnBasedBattles.BUFFER + 20)) {
                    this.x -= this.step_x;
                }
                else {
                    this.currentState = TurnBasedBattles.UnitStates.ATTACK;
                }
            }
            if (this.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                this.animation.animations.play("attack", null, false)
                    .onComplete.add(function () {
                    _this.currentState = TurnBasedBattles.UnitStates.WALKRIGHT;
                });
            }
            if (this.currentState === TurnBasedBattles.UnitStates.WALKRIGHT) {
                this.animation.animations.play("walk", null, true);
                this.animation.anchor.setTo(this.isOrc ? 0.5 : 0, 0.5);
                this.animation.scale.set(this.unitScale, this.unitScale);
                if (this.y > this.pointerA_y) {
                    this.y -= this.calculateStepY();
                }
                else if (this.y < this.pointerA_y) {
                    this.y += this.calculateStepY();
                }
                if (this.x < this.pointerA_x) {
                    this.x += this.step_x;
                }
                else {
                    this.currentState = TurnBasedBattles.UnitStates.IDLE;
                    this.game.input.enabled = true;
                    this.attackFinished = true;
                    this.animation.anchor.setTo(this.isOrc ? 0.5 : 1, 0.5);
                    this.animation.scale.set(-this.unitScale, this.unitScale);
                }
            }
            this.animation.position.x = this.x;
            this.animation.position.y = this.y;
        };
        EnemyMeleeUnit.prototype.calculateStepY = function () {
            return Math.abs((this.pointerB_y - this.pointerA_y) / ((this.pointerB_x - this.pointerA_x) / this.step_x));
        };
        EnemyMeleeUnit.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            if (this.game.state.current.toString() === TurnBasedBattles.FIELD_BATTLE_STATE) {
                if (this.currentState === TurnBasedBattles.UnitStates.IDLE) {
                    this.animation.animations.play("idle");
                    if (this.isAttacked) {
                        this.currentState = TurnBasedBattles.UnitStates.HURT;
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.HURT) {
                    if (this.health > 0) {
                        this.animation.animations.play("hurt", null, false)
                            .onComplete.add(function () {
                            _this.isAttacked = false;
                            _this.currentState = TurnBasedBattles.UnitStates.IDLE;
                        });
                    }
                    else {
                        this.animation.animations.play("die", null, false)
                            .onComplete.add(function () {
                            _this.currentState = TurnBasedBattles.UnitStates.DEAD;
                        });
                    }
                }
                else if (this.currentState === TurnBasedBattles.UnitStates.DEAD) {
                    this.isHighlighted = false;
                    this.isAttackable = false;
                    this.isAttacked = false;
                    this.isAlive = false;
                    this.animation.alpha = 0.5;
                }
                else {
                    this.AttackSequence();
                }
            }
        };
        return EnemyMeleeUnit;
    }(TurnBasedBattles.Unit));
    TurnBasedBattles.EnemyMeleeUnit = EnemyMeleeUnit;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=EnemyMeleeUnit.js.map