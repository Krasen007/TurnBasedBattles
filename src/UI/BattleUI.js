var TurnBasedBattles;
(function (TurnBasedBattles) {
    var BattleUI = /** @class */ (function () {
        function BattleUI(game, x, y) {
            this.game = game;
            this.drawMainUI();
        }
        BattleUI.prototype.drawMainUI = function () {
            this.MainPUI = this.game.add.sprite(20, 20, "battleUI");
            this.MainPUI.scale.setTo(1.5, 0.8);
            this.MainPUI.fixedToCamera = true;
            this.drawSlot(this.P1slot, TurnBasedBattles.PSLOT_ARRAY_X[0], TurnBasedBattles.PSLOT_ARRAY_Y[0], true);
            this.drawSlot(this.P2slot, TurnBasedBattles.PSLOT_ARRAY_X[1], TurnBasedBattles.PSLOT_ARRAY_Y[1], true);
            this.drawSlot(this.P3slot, TurnBasedBattles.PSLOT_ARRAY_X[2], TurnBasedBattles.PSLOT_ARRAY_Y[2], true);
            this.drawSlot(this.P4slot, TurnBasedBattles.PSLOT_ARRAY_X[3], TurnBasedBattles.PSLOT_ARRAY_Y[3], true);
            this.drawSlot(this.P5slot, TurnBasedBattles.PSLOT_ARRAY_X[4], TurnBasedBattles.PSLOT_ARRAY_Y[4], true);
            this.drawSlot(this.P6slot, TurnBasedBattles.PSLOT_ARRAY_X[5], TurnBasedBattles.PSLOT_ARRAY_Y[5], true);
            this.MainEUI = this.game.add.sprite(1250, 20, "battleUI");
            this.MainEUI.scale.setTo(-1.5, 0.8);
            this.MainEUI.fixedToCamera = true;
            this.drawSlot(this.E1slot, TurnBasedBattles.E1SLOT_POS_X, TurnBasedBattles.E1SLOT_POS_Y, false);
            this.drawSlot(this.E2slot, TurnBasedBattles.E2SLOT_POS_X, TurnBasedBattles.E2SLOT_POS_Y, false);
            this.drawSlot(this.E3slot, TurnBasedBattles.E3SLOT_POS_X, TurnBasedBattles.E3SLOT_POS_Y, false);
            this.drawSlot(this.E4slot, TurnBasedBattles.E4SLOT_POS_X, TurnBasedBattles.E4SLOT_POS_Y, false);
            this.drawSlot(this.E5slot, TurnBasedBattles.E5SLOT_POS_X, TurnBasedBattles.E5SLOT_POS_Y, false);
            this.drawSlot(this.E6slot, TurnBasedBattles.E6SLOT_POS_X, TurnBasedBattles.E6SLOT_POS_Y, false);
        };
        BattleUI.prototype.drawSlot = function (unit, x, y, temp) {
            unit = this.game.add.sprite(x, y, "battleUI");
            if (temp) {
                unit.scale.setTo(0.6, 0.2);
            }
            else {
                unit.scale.setTo(-0.6, 0.2);
            }
            unit.fixedToCamera = true;
        };
        return BattleUI;
    }());
    TurnBasedBattles.BattleUI = BattleUI;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=BattleUi.js.map