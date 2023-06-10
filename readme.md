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

## Wanna help?
You can do any item below and submit a PR

--- 
### Class rebalance (wiki page from top to bottom)

- Acolyte
    - Holy light new formula and cast time (can't seem to find this calculation at a first glance)

- Priest
    - ~~Battle mastery new formula~~ and add aspd +12% if skill is lvl 10 (don't know how to apply it correctly, maybe at the same time as spear quicken calculation ?)

- Hunter
    - ~~Blast mine new formula~~
    - ~~Land mine new formula~~
    - Freezing trap new formula (can't seem to find this calculation at a first glance)
    - ~~Claymore trap new formula~~
    - ! These trap's damage can be increased by some cards, investigate how to implement this correctly

- Bard/Dancer
    - ~~Musical lesson increase attack by 5~~ and add 1% aspd per lvl
    - ~~Dancing lesson increase attack by 5~~ and add 1% aspd per lvl

- Wizard
    - Add sense to skills and calculate it's 2% reduction
    
- Sage
    - Add sense to skills and calculate it's 2% reduction
    - ~~Advanced book new formula~~ and +1% matk per lvl
    - Investigate auto spell new changes and how to implement them in the battle calculation

- Assassin
    - ~~Right hand mastery increase values~~
    - ~~Left hand mastery increase values~~ (damage needs to be tested and compared to rocalc)
    - ~~Katar mastery +1 atk per lvl and 0.5% crit per lvl~~ (crit chance needs to be checked, adds 10% but wiki hints it should be double)

- Rogue
    - Strip skills
    - Back stab cast delay

- Super novice
    - Extra HP and SP calculations (need to code this)

### Mobs
- Almost every custom mob has missing skills
### Items
- Momoe's Hairband: Missing 20% DMG to turtles
- Poring Dagger: Missing ASPD increase, haven't found how much it increases yet.
- Staff of the Scholar: Missing MDEF ignore

### Cards
- Corruptor: Add corrupting drain damage
- Indigrant Soul: Decreases after-cast delay of Soul Strike and Napalm Beat by 10%
- Living Magma: Extra MATK on Fire element
- Puck
- Rekenber General: Missing neutral damage and MDEF modifications per refine
- Rekenber Mercenary: Add Bash proc
- Shade of payon: If transcended, damage is +25%
- Twinorc
- WELDER: Cast time reduction
---