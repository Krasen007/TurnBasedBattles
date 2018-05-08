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
    //const GAME_NAME_TEXT_COLOR: string = "#8ef756";
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Menu.prototype.init = function (uiClass) {
            this.ui = uiClass;
            //console.log(this.ui.playMusic);
        };
        Menu.prototype.create = function () {
            this.createBackground();
            this.menuGameTitle();
            this.ui.drawMenuStateUI();
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor2.png'), pointer";
        };
        Menu.prototype.createBackground = function () {
            this.backgroundImage = this.game.add.sprite(0, 0, "menuBackground");
        };
        Menu.prototype.menuGameTitle = function () {
            //this.titleBanner = this.game.add.sprite(520, 75, "titleBanner");
            //this.titleBanner.scale.setTo(0.5, 0.5);
            //this.titleBanner.width = 790;
            this.gameTitle = this.game.add.text(630, 80, "Protectors of Goldcrest", { font: TurnBasedBattles.FONT_BERKSHIRE,
                fontWeight: "bold",
                fontSize: 55,
                fill: TurnBasedBattles.COLOR_ORANGE,
                stroke: "#000000",
                strokeThickness: 3 });
        };
        return Menu;
    }(Phaser.State));
    TurnBasedBattles.Menu = Menu;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Menu.js.map