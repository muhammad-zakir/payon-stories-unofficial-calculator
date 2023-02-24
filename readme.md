# Ragnarok calculator

Shameless copy from [rocalc.com](https://www.rocalc.com) adapted for Payon Stories

## Objective

- Change every javascript file to a typescript file (got a branch with some progress but it is hard)
- Add typing
- Make the code readable
- Add enums and populate them on the code to get a better understanding (race: 0 is Race.Formless)
- Make it easy to add new mobs, items and maps

## How to start developing
```
npm install
npm run dev
```

## Pending modifications
!!! This list is incomplete
### Class rebalance (wiki page from top to bottom)

- Knight
    - ~~Bowling bash new damage formula~~

- Crusader
    - ~~Spear quicken new formula~~

- Acolyte
    - ~~Demon bane new stats~~
    - Holy light new formula and cast time (can't seem to find this calculation at a first glance)

- Priest
    - ~~Battle mastery new formula~~ and add aspd +12% if skill is lvl 10 (don't know how to apply it correctly, maybe at the same time as spear quicken calculation ?)
    - ~~Turn undead new damage on failure formula~~
    - ~~Remove slow poison skill~~

- Monk
    - ~~Dodge new flee formula~~
    - ~~Mental strength new formula~~
    - ~~Iron fists new formula~~
    - ~~Iron fist extra aspd increase~~
    - ~~Raging quadruple blow damage increase by 30%~~
    - ~~Raging thrust damage increase~~ (and 15% attack buff ?)
    - ~~Throw spirit sphere new formula~~

- Hunter
    - ~~Blast mine new formula~~
    - ~~Land mine new formula~~
    - Freezing trap new formula (can't seem to find this calculation at a first glance)
    - ~~Claymore trap new formula~~
    - ! These trap's damage can be increased by some cards, investigate how to implement this correctly

- Bard/Dancer
    - ~~Musical lesson increase attack by 5~~ and add 1% aspd per lvl
    - ~~Dancing lesson increase attack by 5~~ and add 1% aspd per lvl
    - ~~Throw arrow new formula~~
    - ~~Musical strike new formula~~

- Wizard
    - Add sense to skills and calculate it's 2% reduction
    
- Sage
    - Add sense to skills and calculate it's 2% reduction
    - ~~Advanced book new formula~~ and +1% matk per lvl
    - Investigate auto spell new changes and how to implement them in the battle calculation

- Thief
    - ~~Double attack increased chance~~
    - Envenom new formula (can't seem to find this calculation at a first glance)

- Assassin
    - ~~Right hand mastery increase values~~
    - ~~Left hand mastery increase values~~ (damage needs to be tested and compared to rocalc)
    - ~~Katar mastery +1 atk per lvl and 0.5% crit per lvl~~ (crit chance needs to be checked, adds 10% but wiki hints it should be double)

- Rogue
    - Strip skills
    - ~~Sword mastery now has double attack chance~~
    - Back stab cast delay
    - ~~Raid new formula~~

- Blacksmith
    - ~~Skin tempering new formula~~

- Alchemist
    - ~~Axe mastery +5 atk~~ and +0.8% aspd per lvl

- Super novice
    - Extra HP and SP calculations (need to code this)

### Add new items, monsters and areas
- This includes new cards mechanics, which will be the most difficult thing

### Project files

This are some tasks anyone can do despite not knowing about RO at all

- Modify every file to typescript, this is done by adding global variables to global.d.ts and adding "global" to every variable in the file, later modify the index.html
- Create enums for whatever is necessary (weapon types, skills, races, elements, ...)
- Create typings, for example for global variables
- Rewrite some parts of the code and add comments for better understanding