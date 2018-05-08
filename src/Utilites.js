var TurnBasedBattles;
(function (TurnBasedBattles) {
    TurnBasedBattles.COLOR_CLEAR_NUM = 0xFFFFFF;
    TurnBasedBattles.COLOR_HOVER_YELLOW_NUM = 0xffe484;
    TurnBasedBattles.COLOR_HOVER_RED_NUM2 = 0xff2222;
    TurnBasedBattles.COLOR_HOVER_GREEN_NUM3 = 0x22ff22;
    TurnBasedBattles.COLOR_HOVER_ORANGE = 0xffb12b;
    TurnBasedBattles.BOOT_STATE = "Boot";
    TurnBasedBattles.TOWN_STATE = "Town";
    TurnBasedBattles.PRELOAD_STATE = "Preload";
    TurnBasedBattles.MAP_STATE = "Map";
    TurnBasedBattles.MENU_STATE = "Menu";
    TurnBasedBattles.FIELD_BATTLE_STATE = "FieldBattle";
    TurnBasedBattles.HIDE_FROM_SCREEN = -1000;
    TurnBasedBattles.START_MONEY = 990;
    TurnBasedBattles.UNIT_SELECTION_POS_X = 50;
    TurnBasedBattles.UNIT_SELECTION_POS_Y = 50;
    TurnBasedBattles.COLOR_ORANGE = "#f4b042";
    TurnBasedBattles.COLOR_YELLOW = "#ffFF0F";
    TurnBasedBattles.COLOR_GOLD = "#f2d254";
    TurnBasedBattles.GOLD_STR = "GOLD: ";
    TurnBasedBattles.FONT_ACME = "30px Acme";
    TurnBasedBattles.FONT_BERKSHIRE = "50px Berkshire Swash";
    TurnBasedBattles.GOLD_KNIGHT_STR = "Gold Knight";
    TurnBasedBattles.ELF_MAGE_STR = "Elf Mage";
    TurnBasedBattles.WOMAN_ARCHER_STR = "Woman Archer";
    TurnBasedBattles.PUNIT_ARRAY_X = [
        250,
        250,
        250,
        100,
        100,
        100,
    ];
    TurnBasedBattles.PUNIT_ARRAY_Y = [
        450,
        550,
        650,
        450,
        550,
        650 //11
    ];
    TurnBasedBattles.EUNIT1_POS_X = 850;
    TurnBasedBattles.EUNIT1_POS_Y = 450;
    TurnBasedBattles.EUNIT2_POS_X = 850;
    TurnBasedBattles.EUNIT2_POS_Y = 550;
    TurnBasedBattles.EUNIT3_POS_X = 850;
    TurnBasedBattles.EUNIT3_POS_Y = 650;
    TurnBasedBattles.EUNIT4_POS_X = 1000;
    TurnBasedBattles.EUNIT4_POS_Y = 450;
    TurnBasedBattles.EUNIT5_POS_X = 1000;
    TurnBasedBattles.EUNIT5_POS_Y = 550;
    TurnBasedBattles.EUNIT6_POS_X = 1000;
    TurnBasedBattles.EUNIT6_POS_Y = 650;
    TurnBasedBattles.PSLOT_ARRAY_X = [
        160,
        160,
        160,
        60,
        60,
        60 //11
    ];
    TurnBasedBattles.PSLOT_ARRAY_Y = [
        45,
        145,
        245,
        45,
        145,
        245 //11
    ];
    TurnBasedBattles.E1SLOT_POS_X = 1110;
    TurnBasedBattles.E1SLOT_POS_Y = 45;
    TurnBasedBattles.E2SLOT_POS_X = 1110;
    TurnBasedBattles.E2SLOT_POS_Y = 145;
    TurnBasedBattles.E3SLOT_POS_X = 1110;
    TurnBasedBattles.E3SLOT_POS_Y = 245;
    TurnBasedBattles.E4SLOT_POS_X = 1210;
    TurnBasedBattles.E4SLOT_POS_Y = 45;
    TurnBasedBattles.E5SLOT_POS_X = 1210;
    TurnBasedBattles.E5SLOT_POS_Y = 145;
    TurnBasedBattles.E6SLOT_POS_X = 1210;
    TurnBasedBattles.E6SLOT_POS_Y = 245;
    TurnBasedBattles.MOVEMENT = 1250;
    TurnBasedBattles.BUFFER = 50;
    TurnBasedBattles.MAP_WIDTH = 4641;
    TurnBasedBattles.MAP_HEIGHT = 720;
    TurnBasedBattles.SIZE_ARCHER = 0.75;
    TurnBasedBattles.SIZE_KNIGHT = 1;
    TurnBasedBattles.SIZE_MAGE = 0.55;
    TurnBasedBattles.SIZE_TROLL = 1.3;
    TurnBasedBattles.SIZE_ELF_ARCHER = 1.3;
    TurnBasedBattles.SIZE_KNIGHT_AXE = 0.68;
    TurnBasedBattles.SIZE_KNIGHT_SPEAR = 0.60;
    TurnBasedBattles.SIZE_ORC = 1.3;
    TurnBasedBattles.SIZE_BOSS = 2.5;
    TurnBasedBattles.SIZE_HP = 0.27;
    TurnBasedBattles.SIZE_DMG = 40;
})(TurnBasedBattles || (TurnBasedBattles = {}));
//# sourceMappingURL=Utilites.js.map