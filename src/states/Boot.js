/// <reference path = "../../lib/phaser.d.ts"/>
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
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.game.load.image("preloadBackground", "src/assets/backgrounds/preload-bg.jpg");
            this.game.load.image("mechanism-1", "src/assets/UI/mechanism-1.png");
            this.game.load.image("mechanism-2", "src/assets/UI/mechanism-2.png");
        };
        Boot.prototype.create = function () {
            var _this = this;
            this.game.add.sprite(0, 0, "preloadBackground");
            this.introText = this.game.add.text(this.game.width * 0.4, this.game.height * 0.8, "LOADING", { font: TurnBasedBattles.FONT_BERKSHIRE,
                fill: TurnBasedBattles.COLOR_ORANGE,
                fontWeight: "bold",
                fontSize: 50,
                stroke: "#000000",
                strokeThickness: 3 });
            this.game.time.events.loop(1500, function () {
                _this.introText.text += ".";
            });
            this.game.time.events.loop(20, function () {
                _this.preloadImage.angle += 0.5;
                _this.preloadImageClone.angle += -0.5;
            });
            this.preloadImage = this.game.add.sprite(600, 300, "mechanism-1");
            // this.preloadImage.position.x = 600;
            // this.preloadImage.position.y = 300;
            this.preloadImage.angle = 90;
            this.preloadImage.anchor.setTo(0.5, 0.5);
            this.preloadImageClone = this.game.add.sprite(700, 400, "mechanism-2");
            // this.preloadImageClone.position.x = 700;
            // this.preloadImageClone.position.y = 400;
            this.preloadImageClone.angle = 90;
            this.preloadImageClone.anchor.setTo(0.5, 0.5);
            this.game.time.events.add(15000, function () {
                _this.game.state.start(TurnBasedBattles.PRELOAD_STATE);
            });
        };
        return Boot;
    }(Phaser.State));
    TurnBasedBattles.Boot = Boot;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Boot.js.map