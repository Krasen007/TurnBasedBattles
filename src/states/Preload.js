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
    var BORDER_WIDTH = 5;
    var GLOW_WIDTH = 15;
    var Preload = /** @class */ (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preload.prototype.preload = function () {
            // Menu
            this.game.load.image("menuBackground", "src/assets/backgrounds/menuBackground.jpg");
            this.game.load.image("menuButton1", "src/assets/UI/menuButton1.png");
            this.game.load.image("menuButton2", "src/assets/UI/menuButton2.png");
            this.game.load.image("speaker", "src/assets/UI/speaker.png");
            this.game.load.image("mute", "src/assets/UI/mute.png");
            this.game.load.image("titleBanner", "src/assets/UI/banner.png");
            // Town
            this.game.load.image("town", "src/assets/town/backgr-town-square.png");
            this.game.load.image("museumR", "src/assets/town/museumR1.png");
            this.game.load.image("castleL", "src/assets/town/castleL1.png");
            this.game.load.image("bellTowerM", "src/assets/town/bell-towerM1.png");
            this.game.load.image("unitSelection", "src/assets/town/unitSelection.png");
            this.game.load.image("armory", "src/assets/town/armory.png");
            this.game.load.image("bg-big", "src/assets/town/bg-big.png");
            this.game.load.image("bg-small", "src/assets/town/bg-small.png");
            // Armory
            this.game.load.image("armor1", "src/assets/town/upgrades/Armor_1.png");
            this.game.load.image("armor2", "src/assets/town/upgrades/Armor_8.png");
            this.game.load.image("armor3", "src/assets/town/upgrades/Armor_10.png");
            this.game.load.image("sword1", "src/assets/town/upgrades/sword_1.png");
            this.game.load.image("sword2", "src/assets/town/upgrades/sword_2.png");
            this.game.load.image("sword3", "src/assets/town/upgrades/sword_3.png");
            this.game.load.image("equipment-arms", "src/assets/town/upgrades/equipment-arms.png");
            this.game.load.image("equipment-legs", "src/assets/town/upgrades/equipment-legs.png");
            // UI
            this.game.load.image("nextIconOr", "src/assets/UI/nextIconOr.png");
            this.game.load.image("returnIconO", "src/assets/UI/returnIconO.png");
            this.game.load.image("endTurnIcon", "src/assets/UI/endTurnIcon.png");
            this.game.load.image("clicker", "src/assets/UI/clicker.png");
            this.game.load.image("gold", "src/assets/UI/gold.png");
            //this.game.load.image("mechanism-1", "src/assets/UI/mechanism-1.png");
            //this.game.load.image("mechanism-2", "src/assets/UI/mechanism-2.png");
            // Map
            this.game.load.image("battleSpot", "src/assets/Map/battleSpot.png");
            this.game.load.image("map-bg", "src/assets/Map/map-bg.jpg");
            // Battlefield
            this.game.load.image("battleFieldForest", "src/assets/battlefield/battleFieldForest.png");
            this.game.load.image("battleFieldWaterfall", "src/assets/battlefield/battleFieldWaterfall.png");
            this.game.load.image("battleFieldMountain", "src/assets/battlefield/battleFieldMountain.png");
            this.game.load.image("battleFieldPineForest", "src/assets/battlefield/battleFieldPineForest.png");
            this.game.load.image("battleFieldPineForest2", "src/assets/battlefield/battleFieldPineForest.png");
            this.game.load.image("battleFieldBossGround", "src/assets/battlefield/battleFieldBossGround.png");
            this.game.load.image("battleUI", "src/assets/UI/battleUI.png");
            this.game.load.image("hpTop", "src/assets/UI/HP2.png");
            this.game.load.image("hpBottom", "src/assets/UI/HP1.png");
            this.game.load.image("gameWon", "src/assets/battlefield/icons/gameWon.png");
            this.game.load.image("gameLost", "src/assets/battlefield/icons/gameLost.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor2.png");
            this.game.load.image("BattleCursor", "src/assets/battlefield/icons/cursor3.png");
            // PLAYER UNITS:
            // Knight Gold
            this.game.load.image("knight-rect", "src/assets/characters/knightGold/knight-rect.png");
            this.game.load.image("knight-circle", "src/assets/characters/knightGold/knight-circle.png");
            this.game.load.atlas("knightGold", "src/assets/characters/knightGold/knightGold.png", "src/assets/characters/knightGold/knightGold.json");
            // Knight Spear
            this.game.load.image("knightSpear-rect", "src/assets/characters/knightSpear/knightSpear-rect.png");
            this.game.load.image("knightSpear-circle", "src/assets/characters/knightSpear/knightSpear-circle.png");
            this.game.load.atlas("knightSpear", "src/assets/characters/knightSpear/knightSpear.png", "src/assets/characters/knightSpear/knightSpear.json");
            // Knight Axe
            this.game.load.image("knightAxe-rect", "src/assets/characters/knightAxe/knightAxe-rect.png");
            this.game.load.image("knightAxe-circle", "src/assets/characters/knightAxe/knightAxe-circle.png");
            this.game.load.atlas("knightAxe", "src/assets/characters/knightAxe/knightAxe.png", "src/assets/characters/knightAxe/knightAxe.json");
            // Woman Archer
            this.game.load.image("womanArcher-rect", "src/assets/characters/womanArcher/womanArcher-rect.png");
            this.game.load.image("womanArcher-circle", "src/assets/characters/womanArcher/womanArcher-circle.png");
            this.game.load.atlas("womanArcher", "src/assets/characters/womanArcher/womanArcher.png", "src/assets/characters/womanArcher/womanArcher.json");
            // Elf Mage
            this.game.load.image("elfMage-rect", "src/assets/characters/elfMage/elfMage-rect.png");
            this.game.load.image("elfMage-circle", "src/assets/characters/elfMage/elfMage-circle.png");
            this.game.load.atlas("elfMage", "src/assets/characters/elfMage/elfMage.png", "src/assets/characters/elfMage/elfMage.json");
            // ENEMY UNITS:
            // Troll Club
            this.game.load.image("trollClub-circle", "src/assets/characters/trollClub/trollClub-circle.png");
            this.game.load.atlas("trollClub", "src/assets/characters/trollClub/trollClub.png", "src/assets/characters/trollClub/trollClub.json");
            // Troll Hammer
            this.game.load.image("trollHammer-circle", "src/assets/characters/trollHammer/trollHammer-circle.png");
            this.game.load.atlas("trollHammer", "src/assets/characters/trollHammer/trollHammer.png", "src/assets/characters/trollHammer/trollHammer.json");
            // Troll Bone
            this.game.load.image("trollBone-circle", "src/assets/characters/trollBone/trollBone-circle.png");
            this.game.load.atlas("trollBone", "src/assets/characters/trollBone/trollBone.png", "src/assets/characters/trollBone/trollBone.json");
            // Elf Sword
            this.game.load.image("elfSword-circle", "src/assets/characters/elfSword/elfSword-circle.png");
            this.game.load.atlas("elfSword", "src/assets/characters/elfSword/elfSword.png", "src/assets/characters/elfSword/elfSword.json");
            // Elf Archer
            this.game.load.image("elfArcher-circle", "src/assets/characters/elfArcher/elfArcher-circle.png");
            this.game.load.atlas("elfArcher", "src/assets/characters/elfArcher/elfArcher1.png", "src/assets/characters/elfArcher/elfArcher1.json");
            // Elf Mage
            this.game.load.image("elfMageEnemy-circle", "src/assets/characters/elfMageEnemy/elfMage-circle.png");
            this.game.load.atlas("elfMageEnemy", "src/assets/characters/elfMageEnemy/elfMage.png", "src/assets/characters/elfMageEnemy/elfMage.json");
            // Knight Gold
            this.game.load.image("knightGoldEnemy-circle", "src/assets/characters/knightGoldEnemy/knight-circle.png");
            this.game.load.atlas("knightGoldEnemy", "src/assets/characters/knightGoldEnemy/knightGold.png", "src/assets/characters/knightGoldEnemy/knightGold.json");
            // Knight Spear
            this.game.load.image("knightSpearEnemy-circle", "src/assets/characters/knightSpearEnemy/knightSpear-circle.png");
            this.game.load.atlas("knightSpearEnemy", "src/assets/characters/knightSpearEnemy/knightSpear.png", "src/assets/characters/knightSpearEnemy/knightSpear.json");
            // Knight Axe
            this.game.load.image("knightAxeEnemy-circle", "src/assets/characters/knightAxeEnemy/knightAxe-circle.png");
            this.game.load.atlas("knightAxeEnemy", "src/assets/characters/knightAxeEnemy/knightAxe.png", "src/assets/characters/knightAxeEnemy/knightAxe.json");
            // Orc Axe
            this.game.load.image("orcAxe-circle", "src/assets/characters/orcAxe/orcAxe-circle.png");
            this.game.load.atlas("orcAxe", "src/assets/characters/orcAxe/orcAxe1.png", "src/assets/characters/orcAxe/orcAxe1.json");
            // Orc Hammer
            this.game.load.image("orcHammer-circle", "src/assets/characters/orcHammer/orcHammer-circle.png");
            this.game.load.atlas("orcHammer", "src/assets/characters/orcHammer/orcHammer1.png", "src/assets/characters/orcHammer/orcHammer1.json");
            // Orc Sword
            this.game.load.image("orcSword-circle", "src/assets/characters/orcSword/orcSword-circle.png");
            this.game.load.atlas("orcSword", "src/assets/characters/orcSword/orcSword1.png", "src/assets/characters/orcSword/orcSword1.json");
            // Woman Archer
            this.game.load.image("womanArcherEnemy-circle", "src/assets/characters/womanArcherEnemy/womanArcher-circle.png");
            this.game.load.atlas("womanArcherEnemy", "src/assets/characters/womanArcherEnemy/womanArcher.png", "src/assets/characters/womanArcherEnemy/womanArcher.json");
            // Woman Knives
            this.game.load.image("womanKnives-circle", "src/assets/characters/womanKnives/womanKnives-circle.png");
            this.game.load.atlas("womanKnives", "src/assets/characters/womanKnives/womanKnives.png", "src/assets/characters/womanKnives/womanKnives.json");
            // Woman Sword
            this.game.load.image("womanSword-circle", "src/assets/characters/womanSword/womanSword-circle.png");
            this.game.load.atlas("womanSword", "src/assets/characters/womanSword/womanSword.png", "src/assets/characters/womanSword/womanSword.json");
            // Troll Bone
            this.game.load.image("boss-circle", "src/assets/characters/boss/trollBone-circle.png");
            this.game.load.atlas("boss", "src/assets/characters/boss/trollBone.png", "src/assets/characters/boss/trollBone.json");
            // Sounds
            this.game.load.audio("buttonClick", "src/assets/sounds/buttonClick.wav");
            this.game.load.audio("menuTheme", "src/assets/sounds/menuTheme.mp3");
            this.game.load.audio("townTheme", "src/assets/sounds/townTheme.wav");
            this.game.load.audio("mapTheme", "src/assets/sounds/mapTheme.mp3");
            this.game.load.audio("battleTheme", "src/assets/sounds/battleTheme.wav");
            this.game.load.audio("game_over", "src/assets/sounds/game_over.mp3");
            this.game.load.audio("gamewin", "src/assets/sounds/gamewin.mp3");
            this.game.load.audio("sword_attack", "src/assets/sounds/sword_attack.wav");
            this.game.load.audio("bell", "src/assets/sounds/bell.wav");
        };
        Preload.prototype.create = function () {
            this.ui = new TurnBasedBattles.DrawUi(this.game, 0, 0, false);
            //this.game.state.start(MENU_STATE, false, false, this.ui);
            this.game.state.start(TurnBasedBattles.MENU_STATE, false, false, this.ui);
        };
        return Preload;
    }(Phaser.State));
    TurnBasedBattles.Preload = Preload;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Preload.js.map