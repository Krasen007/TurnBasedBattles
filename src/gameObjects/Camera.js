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
    var Cam = /** @class */ (function (_super) {
        __extends(Cam, _super);
        function Cam(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.game = game;
            _this.x = x;
            _this.y = y;
            _this.animation = _this.game.add.sprite(_this.x, _this.y, "Camera");
            return _this;
        }
        Cam.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Cam;
    }(Phaser.Sprite));
    TurnBasedBattles.Cam = Cam;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Camera.js.map