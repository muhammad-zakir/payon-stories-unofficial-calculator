declare global {
    // Every monster
    var m_Monster: any[];

    // Count of monsters
    var EnemyNum: number;

    // Monsters sorted alphabetically (just the IDs)
    var v_MonsterSort: number[];


    var PvP: number;

    // Array containing some maps and monsters inside them;
    var m_MonsterMap: MonsterMap[];

    // * Falcon related
    var falconSingleHitDamage: number;
    var falconTotalDamage: number;
    var falconHitCount: number;
    var falconChance: number;
}

export { };



interface MonsterMap {
    name: string;
    monsterList: Array<number, string>;
}