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
    var FieldBattle = /** @class */ (function (_super) {
        __extends(FieldBattle, _super);
        function FieldBattle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FieldBattle.prototype.init = function (uiClass, selectedUnitFormation, mapName, isComplete) {
            this.ui = uiClass;
            this.unitFormation = selectedUnitFormation;
            this.mapName = mapName;
            this.levelComplete = isComplete;
            console.log("The given array of units from MAP: ");
            console.log(this.unitFormation);
        };
        FieldBattle.prototype.create = function () {
            var _this = this;
            this.cam = new TurnBasedBattles.Cam(this.game, 640, 360);
            this.loadBattleFieldBackground(this.mapName);
            this.game.world.setBounds(0, 0, TurnBasedBattles.MAP_WIDTH, TurnBasedBattles.MAP_HEIGHT);
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.lvl = 0;
            this.activeGame = true;
            this.playerDead = false;
            this.enemiesDead = false;
            this.highlightSignal = new Phaser.Signal();
            this.attackSignal = new Phaser.Signal();
            this.playerDeadSignal = new Phaser.Signal();
            this.enemiesDeadSignal = new Phaser.Signal();
            this.moveCameraSignal = new Phaser.Signal();
            this.game.canvas.style.cursor = "url('src/assets/battlefield/icons/cursor.png'), pointer";
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    console.log("Empty slot. Null");
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.GOLD_KNIGHT_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Knight(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.ELF_MAGE_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Mage(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === TurnBasedBattles.WOMAN_ARCHER_STR)) {
                    this.unitFormation[index] = new TurnBasedBattles.Archer(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === "Knight Spear")) {
                    this.unitFormation[index] = new TurnBasedBattles.KnightSpear(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else if (this.unitFormation[index] && (unit.name === "Knight Axe")) {
                    this.unitFormation[index] = new TurnBasedBattles.KnightAxe(this.game, TurnBasedBattles.PUNIT_ARRAY_X[index], TurnBasedBattles.PUNIT_ARRAY_Y[index], index + 1);
                }
                else {
                    console.log("The " + unit.name + " is missing!");
                }
            }
            this.EnemyDeclaration(this.mapName);
            this.currentUnit = new TurnBasedBattles.Unit(this.game, 0, 0);
            this.nextUnit = new TurnBasedBattles.Unit(this.game, 0, 0);
            this.game.physics.p2.enable(this.cam.animation);
            this.cam.animation.body.fixedRotation = true;
            console.log("DRAW UI");
            this.ui.drawFieldBattleStateUI();
            this.InitialFillUiSlots();
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.game.camera.follow(this.cam.animation, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
            this.game.add.existing(this.cam.animation);
            this.SpawnEnemies();
            this.MoveUiSlots();
            this.currentUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
            this.nextUnit = this.pickNextUnit();
            this.currentUnit.canAttack = true;
            this.enemiesDead = false;
            this.attackSignal.add(function (canAttack, attackFinished, attackStarted) {
                if (canAttack && attackFinished && attackStarted) {
                    _this.attackOrder();
                    console.log("attack order DISPATCHED");
                }
                if (_this.unitExists(_this.currentUnit)) {
                    //console.log("1. CUR: " + this.currentUnit.name + " NEXT: " + this.nextUnit.name);
                    //console.log("1. CUR: " + this.currentUnit.canAttack+this.currentUnit.attackFinished
                    //                       + this.currentUnit.attackStarted + "   "+
                    //                       + this.nextUnit.canAttack + this.nextUnit.attackFinished+
                    //                         this.nextUnit.attackStarted);
                    if (!_this.currentUnit.isDone) {
                        _this.CurrentUnitAttack();
                        console.log("LETS ATTACK NOW");
                    }
                }
                else {
                    _this.pickCurrentUnit();
                    _this.pickNextUnit();
                    _this.currentUnit.canAttack = true;
                    //console.log("2. CUR: " + this.currentUnit.name + " NEXT: " + this.nextUnit.name);
                    //console.log("2. CUR: " + this.currentUnit.canAttack+this.currentUnit.attackFinished
                    //    + this.currentUnit.attackStarted + "   "+
                    //    + this.nextUnit.canAttack + this.nextUnit.attackFinished+
                    //    this.nextUnit.attackStarted);
                }
            });
            this.highlightSignal.add(function () {
                _this.currentUnit.highlightUnit2();
            });
            this.playerDeadSignal.addOnce(function () {
                console.log("YOU'RE DEAD!!!");
                _this.lvl = 0;
                _this.activeGame = false;
                _this.BattleLost();
            });
            this.enemiesDeadSignal.add(function () {
                console.log("ENEMIES ARE ALL DEAD!!!");
                _this.lvl++;
                console.log("LEVEL " + _this.lvl);
                if (_this.lvl > 2) {
                    _this.activeGame = false;
                    _this.BattleWon();
                }
                _this.NextLVL();
            });
            this.moveCameraSignal.add(function () {
                if (_this.activeGame && _this.enemiesDead) {
                    if (_this.AttackFinished(_this.unitFormation)) {
                        _this.MoveCamera();
                    }
                }
            });
            console.log(this.game.state.current.toString());
        };
        FieldBattle.prototype.update = function () {
            this.cam.animation.body.setZeroVelocity();
            this.unitUpdate(this.unitFormation[0]);
            this.unitUpdate(this.unit1enemy);
            this.unitUpdate(this.unitFormation[1]);
            this.unitUpdate(this.unit2enemy);
            this.unitUpdate(this.unitFormation[2]);
            this.unitUpdate(this.unit3enemy);
            this.unitUpdate(this.unitFormation[3]);
            this.unitUpdate(this.unit4enemy);
            this.unitUpdate(this.unitFormation[4]);
            this.unitUpdate(this.unit5enemy);
            this.unitUpdate(this.unitFormation[5]);
            this.unitUpdate(this.unit6enemy);
            this.attackSignal.dispatch(this.currentUnit.canAttack, this.currentUnit.attackFinished, this.currentUnit.attackStarted);
            this.highlightSignal.dispatch(this.currentUnit.canAttack, this.currentUnit.attackStarted);
            this.moveCameraSignal.dispatch();
            //console.log(this.currentUnit.name+"can attack: "+this.currentUnit.canAttack+" AF: "+this.currentUnit.attackFinished+
            //    "AS: "+this.currentUnit.attackStarted+" "+this.nextUnit.name);
        };
        FieldBattle.prototype.EnemyDeclaration = function (map) {
            switch (map) {
                case "Forest": {
                    this.unit1enemy = new TurnBasedBattles.TrollClub(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.TrollHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.TrollBone(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.TrollBone(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.TrollHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.TrollClub(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "Mountain": {
                    this.unit1enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.KnightGoldEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.KnightGoldEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "Waterfall": {
                    this.unit1enemy = new TurnBasedBattles.ElfSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.ElfMageEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.ElfMageEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.ElfSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "PineForest": {
                    this.unit1enemy = new TurnBasedBattles.OrcAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.OrcHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.OrcSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.OrcSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.OrcHammer(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.OrcAxe(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "PineForest2": {
                    this.unit1enemy = new TurnBasedBattles.WomanKnives(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.WomanArcherEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.WomanSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.WomanSword(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.WomanArcherEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.WomanKnives(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                case "BossGround": {
                    this.unit1enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 1);
                    this.unit2enemy = new TurnBasedBattles.Boss(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 2);
                    this.unit3enemy = new TurnBasedBattles.KnightSpearEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 3);
                    this.unit4enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 4);
                    this.unit5enemy = new TurnBasedBattles.ElfArcher(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 5);
                    this.unit6enemy = new TurnBasedBattles.KnightAxeEnemy(this.game, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, 6);
                    break;
                }
                default: {
                    break;
                }
            }
        };
        FieldBattle.prototype.InitialFillUiSlots = function () {
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    console.log("Empty slot at InitialFillUiSlots");
                }
                else {
                    this.FillUiSlot(this.unitFormation[index], TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, true);
                }
            }
            this.FillUiSlot(this.unit1enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit2enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit3enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit4enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit5enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
            this.FillUiSlot(this.unit6enemy, TurnBasedBattles.HIDE_FROM_SCREEN, TurnBasedBattles.HIDE_FROM_SCREEN, false);
        };
        FieldBattle.prototype.MoveUiSlots = function () {
            for (var index = 0; index < this.unitFormation.length; index++) {
                var unit = this.unitFormation[index];
                if (unit === null) {
                    console.log("Empty slot at MoveUiSlots");
                }
                else {
                    this.MoveUiSlot(this.unitFormation[index], TurnBasedBattles.PSLOT_ARRAY_X[index], TurnBasedBattles.PSLOT_ARRAY_Y[index], true);
                }
            }
            this.MoveUiSlot(this.unit1enemy, TurnBasedBattles.E1SLOT_POS_X, TurnBasedBattles.E1SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit2enemy, TurnBasedBattles.E2SLOT_POS_X, TurnBasedBattles.E2SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit3enemy, TurnBasedBattles.E3SLOT_POS_X, TurnBasedBattles.E3SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit4enemy, TurnBasedBattles.E4SLOT_POS_X, TurnBasedBattles.E4SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit5enemy, TurnBasedBattles.E5SLOT_POS_X, TurnBasedBattles.E5SLOT_POS_Y, false);
            this.MoveUiSlot(this.unit6enemy, TurnBasedBattles.E6SLOT_POS_X, TurnBasedBattles.E6SLOT_POS_Y, false);
        };
        FieldBattle.prototype.MoveUiSlot = function (Unit, x, y, player) {
            this.ClearUiSlot(Unit);
            if (this.unitExists(Unit)) {
                if (player) {
                    // FIXME fix the magic numbers
                    Unit.circleImage.x = x + 22;
                    Unit.circleImage.y = y + 5;
                    Unit.HPbarBottom.x = x + 18;
                    Unit.HPbarBottom.y = y + 70;
                    Unit.HPbarTop.x = x + 18;
                    Unit.HPbarTop.y = y + 70;
                }
                else {
                    // FIXME fix the magic numbers
                    Unit.circleImage.x = x - 22;
                    Unit.circleImage.y = y + 5;
                    Unit.HPbarBottom.x = x - 99;
                    Unit.HPbarBottom.y = y + 70;
                    Unit.HPbarTop.x = x - 99;
                    Unit.HPbarTop.y = y + 70;
                }
                Unit.circleImage.fixedToCamera = true;
                Unit.HPbarBottom.fixedToCamera = true;
                Unit.HPbarTop.fixedToCamera = true;
            }
        };
        FieldBattle.prototype.ClearUiSlot = function (Unit) {
            if (Unit === null) {
                console.log("Empty slot at ClearUiSlot");
            }
            else {
                Unit.circleImage.fixedToCamera = false;
                Unit.HPbarBottom.fixedToCamera = false;
                Unit.HPbarTop.fixedToCamera = false;
                Unit.circleImage.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.circleImage.y = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarBottom.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarBottom.y = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarTop.x = TurnBasedBattles.HIDE_FROM_SCREEN;
                Unit.HPbarTop.y = TurnBasedBattles.HIDE_FROM_SCREEN;
            }
        };
        FieldBattle.prototype.FillUiSlot = function (Unit, x, y, player) {
            if (player) {
                // FIXME fix the magic numbers
                Unit.circleImage = this.game.add.sprite(x + 22, y + 5, Unit.circleImage.key); // FIXME Make this adjustment prettier
                Unit.circleImage.scale.setTo(1, 1);
                Unit.HPbarBottom = this.game.add.sprite(x, y + 70, Unit.HPbarBottom.key);
                Unit.HPbarBottom.anchor.setTo(0, 0.5);
                Unit.HPbarBottom.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
                Unit.HPbarTop = this.game.add.sprite(x, y + 70, Unit.HPbarTop.key);
                Unit.HPbarTop.anchor.setTo(0, 0.5);
                Unit.HPbarTop.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
            }
            else {
                // FIXME fix the magic numbers
                Unit.circleImage = this.game.add.sprite(x - 22, y + 5, Unit.circleImage.key); // FIXME Make this adjustment prettier
                Unit.circleImage.scale.setTo(-1, 1);
                Unit.HPbarBottom = this.game.add.sprite(x, y + 70, Unit.HPbarBottom.key);
                Unit.HPbarBottom.anchor.setTo(0, 0.5);
                Unit.HPbarBottom.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
                Unit.HPbarTop = this.game.add.sprite(x, y + 70, Unit.HPbarTop.key);
                Unit.HPbarTop.anchor.setTo(0, 0.5);
                Unit.HPbarTop.scale.setTo(TurnBasedBattles.SIZE_HP, TurnBasedBattles.SIZE_HP - 0.02);
            }
        };
        FieldBattle.prototype.BurnDeadBodies = function (Units) {
            for (var i = 0; i < Units.length; i++) {
                if (!this.unitExists(Units[i])) {
                    Units.splice(i, 1, null);
                }
            }
        };
        FieldBattle.prototype.BattleLost = function () {
            var _this = this;
            var gameLost;
            this.levelComplete = false;
            this.BurnDeadBodies(this.unitFormation);
            gameLost = this.game.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "gameLost");
            gameLost.alpha = 0;
            gameLost.anchor.set(0.5);
            gameLost.fixedToCamera = true;
            this.game.add.tween(gameLost).to({ alpha: 1 }, 1500, Phaser.Easing.Default, true);
            //gameLost.inputEnabled = true;
            this.ui.stopMusic();
            this.ui.gameLostMusic();
            TurnBasedBattles.DrawUi.avaliableUserMoney += 100;
            this.camera.fade(0x000000, 6500);
            this.camera.onFadeComplete.add(function () {
                _this.game.state.start(TurnBasedBattles.TOWN_STATE, true, false, _this.ui, _this.unitFormation, _this.levelComplete);
                console.log("The units after the battle is lost");
                console.log(_this.unitFormation);
            });
            // gameLost.events.onInputDown.add(() => {
            //     this.game.state.start(TOWN_STATE, true, false, this.ui, this.unitFormation);
            // });
        };
        FieldBattle.prototype.BattleWon = function () {
            var _this = this;
            var gameWon;
            // TODO: add music
            this.levelComplete = true;
            this.BurnDeadBodies(this.unitFormation);
            gameWon = this.game.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "gameWon");
            gameWon.alpha = 0;
            gameWon.anchor.set(0.5);
            gameWon.fixedToCamera = true;
            gameWon.inputEnabled = true;
            this.game.add.tween(gameWon).to({ alpha: 1 }, 1500, Phaser.Easing.Default, true);
            this.ui.stopMusic();
            this.ui.gameWinMusic();
            TurnBasedBattles.DrawUi.avaliableUserMoney += 250;
            gameWon.events.onInputDown.add(function () {
                _this.game.state.start(TurnBasedBattles.MAP_STATE, true, false, _this.ui, _this.unitFormation, _this.mapName, _this.levelComplete);
                //TODO: have to splice the array with the dead units
                console.log("The units after the battle is over");
                console.log(_this.unitFormation);
            });
        };
        FieldBattle.prototype.PickPosition = function (Unit, number1, number2, number3, number4, number5, number6, temp) {
            if (temp === void 0) { temp = null; }
            switch (Unit.index) {
                case 1: {
                    temp = number1;
                    break;
                }
                case 2: {
                    temp = number2;
                    break;
                }
                case 3: {
                    temp = number3;
                    break;
                }
                case 4: {
                    temp = number4;
                    break;
                }
                case 5: {
                    temp = number5;
                    break;
                }
                case 6: {
                    temp = number6;
                    break;
                }
                default: {
                    console.log("ERROR!");
                    break;
                }
            }
            return temp;
        };
        FieldBattle.prototype.SpawnEnemies = function () {
            switch (this.lvl) {
                case 0: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                        this.RespawnEnemy(this.unit5enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                    }
                    break;
                }
                case 1: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit4enemy);
                        this.RespawnEnemy(this.unit6enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit2enemy);
                        this.RespawnEnemy(this.unit4enemy);
                        this.RespawnEnemy(this.unit6enemy);
                    }
                    break;
                }
                case 2: {
                    if (this.mapName === "BossGround") {
                        this.RespawnEnemy(this.unit2enemy);
                    }
                    else {
                        this.RespawnEnemy(this.unit1enemy);
                        this.RespawnEnemy(this.unit3enemy);
                        this.RespawnEnemy(this.unit5enemy);
                    }
                    break;
                }
                default: {
                    break;
                }
            }
            this.MoveUiSlots();
        };
        FieldBattle.prototype.NextLVL = function () {
            this.NextLVLperUnit(this.unitFormation[0]);
            this.NextLVLperUnit(this.unitFormation[1]);
            this.NextLVLperUnit(this.unitFormation[2]);
            this.NextLVLperUnit(this.unitFormation[3]);
            this.NextLVLperUnit(this.unitFormation[4]);
            this.NextLVLperUnit(this.unitFormation[5]);
        };
        FieldBattle.prototype.NextLVLperUnit = function (Unit) {
            if (this.unitExists(Unit)) {
                Unit.lvl = this.lvl;
            }
        };
        FieldBattle.prototype.RespawnEnemy = function (Unit) {
            if (!Unit.isAlive) {
                Unit.x = this.PickPosition(Unit, TurnBasedBattles.EUNIT1_POS_X, TurnBasedBattles.EUNIT2_POS_X, TurnBasedBattles.EUNIT3_POS_X, TurnBasedBattles.EUNIT4_POS_X, TurnBasedBattles.EUNIT5_POS_X, TurnBasedBattles.EUNIT6_POS_X) + this.lvl * TurnBasedBattles.MOVEMENT;
                Unit.y = this.PickPosition(Unit, TurnBasedBattles.EUNIT1_POS_Y, TurnBasedBattles.EUNIT2_POS_Y, TurnBasedBattles.EUNIT3_POS_Y, TurnBasedBattles.EUNIT4_POS_Y, TurnBasedBattles.EUNIT5_POS_Y, TurnBasedBattles.EUNIT6_POS_Y);
                console.log("CALCULATED POSITION Y IS " + Unit.y);
                Unit.animation.x = Unit.x;
                Unit.animation.y = Unit.y;
                Unit.pointerA_x = Unit.x;
                Unit.pointerA_y = Unit.y;
                Unit.isAlive = true;
                Unit.health = Unit.defaultHealth;
                Unit.HPbarTop.scale.setTo(0.27, 0.25);
                Unit.currentState = TurnBasedBattles.UnitStates.IDLE;
                Unit.lvl = this.lvl;
                Unit.animation.alpha = 1;
            }
        };
        FieldBattle.prototype.AttackFinished = function (units, temp) {
            if (temp === void 0) { temp = null; }
            //return (unit1.attackFinished && unit2.attackFinished && unit3.attackFinished &&
            //    unit4.attackFinished && unit5.attackFinished && unit6.attackFinished);
            temp = true;
            for (var i = 0; i < units.length; i++) {
                if (this.unitExists(units[i])) {
                    temp = temp && units[i].attackFinished;
                }
            }
            return temp;
        };
        FieldBattle.prototype.MovePlayer = function () {
            this.MoveUnit(this.unitFormation[0]);
            this.MoveUnit(this.unitFormation[1]);
            this.MoveUnit(this.unitFormation[2]);
            this.MoveUnit(this.unitFormation[3]);
            this.MoveUnit(this.unitFormation[4]);
            this.MoveUnit(this.unitFormation[5]);
        };
        FieldBattle.prototype.MoveUnit = function (Unit) {
            if (this.unitExists(Unit)) {
                Unit.continue = true;
                Unit.currentState = TurnBasedBattles.UnitStates.WALKRIGHT;
            }
        };
        FieldBattle.prototype.MoveCamera = function () {
            if (this.game.camera.x < this.lvl * TurnBasedBattles.MOVEMENT + TurnBasedBattles.BUFFER) {
                this.game.camera.x += 10;
                this.cam.animation.body.moveRight(240);
                console.log("moving right");
                this.game.input.enabled = false;
                this.MovePlayer();
                this.SpawnEnemies();
            }
            else {
                this.enemiesDead = false;
                this.game.input.enabled = true;
            }
        };
        FieldBattle.prototype.EnemiesDead = function (temp) {
            if (temp === void 0) { temp = null; }
            console.log("Enemies DEAD: " + !(this.unitExists(this.unit1enemy) || this.unitExists(this.unit2enemy) ||
                this.unitExists(this.unit3enemy) || this.unitExists(this.unit4enemy) ||
                this.unitExists(this.unit5enemy) || this.unitExists(this.unit6enemy)));
            return temp = !(this.unitExists(this.unit1enemy) || this.unitExists(this.unit2enemy) ||
                this.unitExists(this.unit3enemy) || this.unitExists(this.unit4enemy) ||
                this.unitExists(this.unit5enemy) || this.unitExists(this.unit6enemy));
        };
        FieldBattle.prototype.PlayerDead = function (temp) {
            if (temp === void 0) { temp = null; }
            return temp = !(this.unitExists(this.unitFormation[0]) || this.unitExists(this.unitFormation[1]) ||
                this.unitExists(this.unitFormation[2]) || this.unitExists(this.unitFormation[3]) ||
                this.unitExists(this.unitFormation[4]) || this.unitExists(this.unitFormation[5]));
        };
        FieldBattle.prototype.unitExists = function (Unit, temp) {
            if (temp === void 0) { temp = null; }
            if (Unit != null) {
                if (Unit.isAlive) {
                    temp = true;
                }
                else {
                    temp = false;
                }
            }
            else {
                temp = false;
            }
            return temp;
        };
        FieldBattle.prototype.unitUpdate = function (Unit) {
            if (this.unitExists(Unit) /*Unit != null*/) {
                Unit.update();
            }
        };
        FieldBattle.prototype.checkIfNull = function (unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12) {
            if (this.unitExists(unit1)) {
                return unit1;
            }
            else if (this.unitExists(unit2)) {
                return unit2;
            }
            else if (this.unitExists(unit3)) {
                return unit3;
            }
            else if (this.unitExists(unit4)) {
                return unit4;
            }
            else if (this.unitExists(unit5)) {
                return unit5;
            }
            else if (this.unitExists(unit6)) {
                return unit6;
            }
            else if (this.unitExists(unit7)) {
                return unit7;
            }
            else if (this.unitExists(unit8)) {
                return unit8;
            }
            else if (this.unitExists(unit9)) {
                return unit9;
            }
            else if (this.unitExists(unit10)) {
                return unit10;
            }
            else if (this.unitExists(unit11)) {
                return unit11;
            }
            else if (this.unitExists(unit12)) {
                return unit12;
            }
            else {
                return this.currentUnit;
            }
        };
        FieldBattle.prototype.pickCurrentUnit = function () {
            if (this.unitExists(this.nextUnit)) {
                this.currentUnit = this.nextUnit;
            }
        };
        FieldBattle.prototype.pickNextUnit = function () {
            if ((this.unitExists(this.unitFormation[0])) && (this.currentUnit === this.unitFormation[0])) {
                this.nextUnit = this.checkIfNull(this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0]);
                console.log("I'm here 2");
            }
            else if ((this.unitExists(this.unit1enemy)) && (this.currentUnit === this.unit1enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy);
                console.log("I'm here 3");
            }
            else if ((this.unitExists(this.unitFormation[1])) && (this.currentUnit === this.unitFormation[1])) {
                this.nextUnit = this.checkIfNull(this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1]);
                console.log("I'm here 4");
            }
            else if ((this.unitExists(this.unit2enemy)) && (this.currentUnit === this.unit2enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy);
                console.log("I'm here 5");
            }
            else if ((this.unitExists(this.unitFormation[2])) && (this.currentUnit === this.unitFormation[2])) {
                this.nextUnit = this.checkIfNull(this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2]);
                console.log("I'm here 6");
            }
            else if ((this.unitExists(this.unit3enemy)) && (this.currentUnit === this.unit3enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy);
                console.log("I'm here 7");
            }
            else if ((this.unitExists(this.unitFormation[3])) && (this.currentUnit === this.unitFormation[3])) {
                this.nextUnit = this.checkIfNull(this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3]);
                console.log("I'm here 8");
            }
            else if ((this.unitExists(this.unit4enemy)) && (this.currentUnit === this.unit4enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy);
                console.log("I'm here 9");
            }
            else if ((this.unitExists(this.unitFormation[4])) && (this.currentUnit === this.unitFormation[4])) {
                this.nextUnit = this.checkIfNull(this.unit5enemy, this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4]);
                console.log("I'm here 10");
            }
            else if ((this.unitExists(this.unit5enemy)) && (this.currentUnit === this.unit5enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[5], this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy);
                console.log("I'm here 11");
            }
            else if ((this.unitExists(this.unitFormation[5])) && (this.currentUnit === this.unitFormation[5])) {
                this.nextUnit = this.checkIfNull(this.unit6enemy, this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5]);
                console.log("I'm here 12");
            }
            else if ((this.unitExists(this.unit6enemy)) && (this.currentUnit === this.unit6enemy)) {
                this.nextUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
                console.log("I'm here 1");
            }
            else {
                this.nextUnit = this.checkIfNull(this.unitFormation[0], this.unit1enemy, this.unitFormation[1], this.unit2enemy, this.unitFormation[2], this.unit3enemy, this.unitFormation[3], this.unit4enemy, this.unitFormation[4], this.unit5enemy, this.unitFormation[5], this.unit6enemy);
            }
            //console.log("ALIVE CUR?"+this.currentUnit.isAlive);
            //console.log("ALIVE NXT?"+this.nextUnit.isAlive);
            return this.nextUnit;
        };
        FieldBattle.prototype.attackOrder = function () {
            if (this.nextUnit.isAlive) {
                if (this.currentUnit.canAttack && this.currentUnit.attackFinished && this.currentUnit.attackStarted) {
                    this.currentUnit.canAttack = false;
                    this.currentUnit.attackStarted = false;
                    this.currentUnit.isDone = false;
                    this.pickCurrentUnit();
                    this.pickNextUnit();
                    this.currentUnit.canAttack = true;
                    if (this.currentUnit.isEnemy && this.currentUnit.health > 0) {
                        this.ActivateEnemy();
                    }
                }
            }
            else {
                this.pickCurrentUnit(); //FIXME: Review if needed.
                this.pickNextUnit();
                this.currentUnit.canAttack = true;
            }
            console.log(this.currentUnit, this.nextUnit);
        };
        FieldBattle.prototype.CurrentUnitAttack = function () {
            if (this.currentUnit.currentState === TurnBasedBattles.UnitStates.ATTACK) {
                if (!this.currentUnit.isEnemy) {
                    this.currentUnit.DoDamage(this.unit1enemy, this.unit2enemy, this.unit3enemy, this.unit4enemy, this.unit5enemy, this.unit6enemy, this.currentUnit.strength);
                    this.ui.attackSound(); ///////
                }
                else {
                    this.currentUnit.DoDamage(this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5], this.currentUnit.strength);
                    this.ui.attackSound(); //////
                }
            }
            if (this.PlayerDead()) {
                this.playerDead = true;
                this.playerDeadSignal.dispatch();
            }
            if (this.EnemiesDead()) {
                this.enemiesDead = true;
                if (this.activeGame && this.AttackFinished(this.unitFormation)) {
                    this.enemiesDeadSignal.dispatch();
                }
            }
        };
        FieldBattle.prototype.ActivateEnemy = function () {
            if (this.activeGame) {
                this.tempUnit = this.checkIfNull(this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5], this.unitFormation[0], this.unitFormation[1], this.unitFormation[2], this.unitFormation[3], this.unitFormation[4], this.unitFormation[5]);
                console.log(this.activeGame);
                this.currentUnit.pointerB_x = this.tempUnit.x;
                this.currentUnit.pointerB_y = this.tempUnit.y;
                this.tempUnit.isAttackable = true;
                console.log("Is Attackable " + this.tempUnit.isAttackable + " " + this.tempUnit.name);
                if (this.currentUnit.isMelee) {
                    this.currentUnit.currentState = TurnBasedBattles.UnitStates.WALKLEFT;
                }
                else {
                    this.currentUnit.currentState = TurnBasedBattles.UnitStates.ATTACK;
                }
                this.currentUnit.attackFinished = false;
                this.currentUnit.attackStarted = true;
            }
        };
        FieldBattle.prototype.render = function () {
            //this.game.debug.cameraInfo(this.game.camera, 32, 32);
        };
        FieldBattle.prototype.loadBattleFieldBackground = function (map) {
            switch (map) {
                case "Forest": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldForest");
                    break;
                }
                case "Mountain": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldMountain");
                    break;
                }
                case "Waterfall": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldWaterfall");
                    break;
                }
                case "PineForest": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldPineForest");
                    break;
                }
                case "PineForest2": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldPineForest2");
                    break;
                }
                case "BossGround": {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldBossGround");
                    break;
                }
                default: {
                    this.backgroundBattleField = this.game.add.sprite(0, 0, "battleFieldForest");
                    break;
                }
            }
        };
        return FieldBattle;
    }(Phaser.State));
    TurnBasedBattles.FieldBattle = FieldBattle;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=FieldBattle.js.map