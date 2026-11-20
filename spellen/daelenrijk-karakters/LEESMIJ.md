# Daelenrijk 3D (karakters met animaties)

Gekopieerd uit `/Users/tomvandalen/docker/bouwplaats-bram/site/avontuur3d`.

## Welk bestand laadt de modellen
`index.html` (GLTFLoader, AnimationMixer). Modellen staan in `modellen/`.

## Personages
| Personage | Basis | Kleding | Extra |
|---|---|---|---|
| Gijs (held) | Superhero_Male_FullBody | Male_Peasant | Hair_SimpleParted |
| Vrouw Mechteld (zit op bank) | Superhero_Female_FullBody | Female_Peasant | Hair_Buns |
| Wachter | Superhero_Male_FullBody | Male_Ranger | Hair_Beard |
| Trol | monsters/Puglin.glb (geen eigen animaties; de code gebruikt het skelet van de Superhero-basis) | | |
| Imp | monsters/Imp.glb (geen animaties) | | |

Props staan in `modellen/props/`, texturen in `modellen/tex/`.

## Animaties
Alle animaties zitten in `modellen/UAL1_Standard.glb` en `modellen/UAL2_Standard.glb` en worden op naam gekoppeld aan de karakters.
Gebruikt: Idle_Loop, Walk_Loop, Idle_Talking_Loop, Sitting_Idle_Loop, Sitting_Talking_Loop, LayToIdle.

UAL1: A_TPose, Crouch_Fwd_Loop, Crouch_Idle_Loop, Dance_Loop, Death01, Driving_Loop, Fixing_Kneeling, Hit_Chest, Hit_Head, Idle_Loop, Idle_Talking_Loop, Idle_Torch_Loop, Interact, Jog_Fwd_Loop, Jump_Land, Jump_Loop, Jump_Start, PickUp_Table, Pistol_*, Punch_Cross, Punch_Jab, Push_Loop, Roll, Sitting_Enter, Sitting_Exit, Sitting_Idle_Loop, Sitting_Talking_Loop, Spell_Simple_*, Sprint_Loop, Swim_Fwd_Loop, Swim_Idle_Loop, Sword_Attack, Sword_Idle, Walk_Formal_Loop, Walk_Loop

UAL2: A_TPose, Chest_Open, ClimbUp_1m, Consume, Farm_Harvest, Farm_PlantSeed, Farm_Watering, Hit_Knockback, Idle_FoldArms_Loop, Idle_Lantern_Loop, Idle_No_Loop, Idle_Rail_Call, Idle_Rail_Loop, Idle_Shield_Break, Idle_Shield_Loop, Idle_TalkingPhone_Loop, LayToIdle, Melee_Hook(_Rec), NinjaJump_*, OverhandThrow, Shield_Dash, Shield_OneShot, Slide_*, Sword_Block, Sword_Dash, Sword_Heavy_Combo, Sword_Regular_A/B/C(_Rec), Sword_Regular_Combo, TreeChopping_Loop, Walk_Carry_Loop, Yes, Zombie_*
