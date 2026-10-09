# Internal N Crush sound credits

Every sound the game ships is listed below with where it came from and its licence. The machine-readable list is
`assets/AUDIO_SOURCES.json`; the build (`tools/build_audio.py`) copies each licence into `assets/audio_manifest.json`.
Recipes (cuts, pitch, filters, mixing) are in the build scripts named for each sound in that file.

## Licences

- **Pixabay Content License** (https://pixabay.com/service/license-summary/): free to use in the game, no attribution
  required; the original recordings may not be redistributed or sold on their own. Pixabay-derived sounds are therefore
  provided only as part of the game, not as a separate sound library, and are NOT relicensed under CC0 or MIT.
- **CC BY-SA 3.0** (https://creativecommons.org/licenses/by-sa/3.0/): the gun sounds adapted from Q009's weapon sounds
  stay under CC BY-SA 3.0 (attribution below, licence text in `AUDIO_Q009_LICENSE.txt`).
- **CC0 1.0** (https://creativecommons.org/publicdomain/zero/1.0/): sounds made only from Kenney / OpenGameArt CC0
  recordings and the game's own synthesis. These mixes are also offered under CC0.
- **Kokoro-82M** (Apache-2.0 model, `AUDIO_KOKORO_LICENSE.txt`): the eleven English announcements are generated speech.
- **unknown**: sounds whose source recording is not identified yet (listed under "Unidentified sources"). They are
  scheduled to be identified or replaced; no licence is claimed for them.

The MIT licence of the game code does not apply to any of these sounds.

## Pixabay sound effects (source confirmed)

- ["Rifle Gunshot"](https://pixabay.com/sound-effects/rifle-gunshot-99749/) by freesound_community, originally by Mozfoo (Freesound) (Pixabay id 99749) - used in `gun_r1`, `gun_r2`, `gun_m4`.
- ["Submachine Gun"](https://pixabay.com/sound-effects/submachine-gun-79846/) by freesound_community, originally by morganpurkis (Freesound) (Pixabay id 79846) - used in `gun_r3`, `gun_r4`, `gun_r5`.
- ["Gun shoot"](https://pixabay.com/sound-effects/gun-shoot-512969/) by u_2n07b18i8q (Pixabay id 512969) - used in `gun_h1`, `gun_h2`.
- ["revovler sound"](https://pixabay.com/sound-effects/revovler-sound-328431/) by diega1241251 (Pixabay id 328431) - used in `gun_heavy_pistol`, `gun_eng_pistol`, `gun_dual_pistols`.
- ["Punches"](https://pixabay.com/sound-effects/punches-65734/) by freesound_community, originally by Themiwa100 (Freesound) (Pixabay id 65734) - used in `hit`, `hit_v1`, `hit_v2`, `hit_v3`.
- ["sword-sound"](https://pixabay.com/sound-effects/sword-sound-260274/) by MUSICHOLDER (Pixabay id 260274) - used in `knife_swing`.
- ["Walking In Water"](https://pixabay.com/sound-effects/walking-in-water-199418/) by Alex_Jauk (Pixabay id 199418) - used in `step_water_0`, `step_water_1`, `step_water_2`, `step_water_3`.
- ["Healing Magic (1)"](https://pixabay.com/sound-effects/healing-magic-1-378665/) by Yodguard (Pixabay id 378665) - used in `medkit`.
- ["explosion"](https://pixabay.com/sound-effects/explosion-47821/) by freesound_community, originally by WhaTThes (Freesound) (Pixabay id 47821) - used in `explosion`, `rocket_explosion`.
- ["laser weld"](https://pixabay.com/sound-effects/laser-weld-103309/) by freesound_community, originally by cognito perceptu (Freesound) (Pixabay id 103309) - used in `laser_loop`.
- ["Fire Sound Effects"](https://pixabay.com/sound-effects/film-special-effects-fire-sound-effects-224089/) by Alice_soundz (Pixabay id 224089) - used in `molotov`.
- ["Crackling Fire"](https://pixabay.com/sound-effects/crackling-fire-584730/) by DRAGON-STUDIO (Pixabay id 584730) - used in `fire_loop`.
- ["Pistol Cock"](https://pixabay.com/sound-effects/pistol-cock-6014/) by freesound_community, originally by nebulasnails (Freesound) (Pixabay id 6014) - used in `bolt`.
- ["Metal Clang sound"](https://pixabay.com/sound-effects/metal-clang-sound-81634/) by freesound_community, originally by kermite607 (Freesound) (Pixabay id 81634) - used in `rocket_clank`.
- ["snd_elevator_power_down"](https://pixabay.com/sound-effects/snd-elevator-power-down-37310/) by freesound_community, originally by gristi (Freesound) (Pixabay id 37310) - used in `shield_block`.
- ["Hero Skill Attack Reveal 1"](https://pixabay.com/sound-effects/hero-skill-attack-reveal-1-384975/) by freesound_gamestudio (Pixabay id 384975) - used in `skill`, `skill_end`.
- ["Sci-Fi sliding door (height adjustable chair sounds)"](https://pixabay.com/sound-effects/sci-fi-sliding-door-height-adjustable-chair-sounds-27425/) by freesound_community, originally by Pablobd (Freesound) (Pixabay id 27425) - used in `door`, `door_v1`, `door_v2`.
- ["Sweeping"](https://pixabay.com/sound-effects/sweeping-44962/) by freesound_community, originally by cMilan (Freesound) (Pixabay id 44962) - used in `slide`.
- ["clothes drop 2"](https://pixabay.com/sound-effects/household-clothes-drop-2-40202/) by freesound_community (Pixabay id 40202) - used in `slide`.
- ["029974_inside the robot"](https://pixabay.com/sound-effects/029974-inside-the-robot-70923/) by freesound_community (Pixabay id 70923) - used in `engineer_deploy`.
- ["Metal crunch"](https://pixabay.com/sound-effects/metal-crunch-263638/) by u_y3wk5ympz8 (Pixabay id 263638) - used in `bipod`.
- ["Large Underwater Explosion"](https://pixabay.com/sound-effects/large-underwater-explosion-190270/) by DavidDumaisAudio (Pixabay id 190270) - used in `ke_call`.
- ["Rock Destroy"](https://pixabay.com/sound-effects/rock-destroy-6409/) by freesound_community (Pixabay id 6409) - used in `ke_pierce`.
- ["Boom"](https://pixabay.com/sound-effects/boom-copyright-free-487662/) by DRAGON-STUDIO (Pixabay id 487662) - used in `ke_pierce`.
- ["Bomb Explosion 1"](https://pixabay.com/sound-effects/bomb-explosion-1-381972/) by u_xg7ssi08yr (Pixabay id 381972) - used in `ke_blast`.
- ["shimmer_synth_1"](https://pixabay.com/sound-effects/film-special-effects-shimmer-synth-1-47675/) by freesound_community (Pixabay id 47675) - used in `cloak_off`, `cloak_on`.
- ["Drone Fly"](https://pixabay.com/sound-effects/drone-fly-397287/) by klemenflerin (Pixabay id 397287) - used in `drone_loop`.
- "rpg-7 sound effect" by sovetsky_rastov72 (Pixabay id 267739) - used in `gun_h5`, `rocket_flight`.
- ["shell load"](https://pixabay.com/sound-effects/film-special-effects-shell-load-87813/) by freesound_community (Pixabay id 87813) - used in `shell_insert`.
- ["Realistic Shotgun Cocking Sound!!"](https://pixabay.com/sound-effects/film-special-effects-realistic-shotgun-cocking-sound-38640/) by freesound_community (Pixabay id 38640) - used in `pump`.
- "revolver reload" (Pixabay id 518860) - used in `pistol_magazine`.
- "grenade launcher" (Pixabay id 106342) - used in `gun_h4`.
- "impact" by liecio (Pixabay id 258054) - used in `gun_h4`.
- ["Explosion"](https://pixabay.com/sound-effects/film-special-effects-explosion-42132/) by freesound_community (Pixabay id 42132) - used in `bomb_explosion`.
- ["Medium Explosion"](https://pixabay.com/sound-effects/film-special-effects-medium-explosion-40472/) by freesound_community (Pixabay id 40472) - used in `bomb_explosion_v1`.
- "bomb explosion 2" (Pixabay id 369633) - used in `bomb_explosion_v2`.
- "water drop pop" (Pixabay id 11509) - used in `vocal_rifle`.
- "pop" (Pixabay id 312576) - used in `vocal_sniper`.
- "pop" (Pixabay id 94319) - used in `vocal_shotgun`.
- "bubble pop" (Pixabay id 406640) - used in `vocal_machinegun`.
- "pop" (Pixabay id 423717) - used in `vocal_smg`.
- "pop" (Pixabay id 402324) - used in `vocal_pistol`.

## Pixabay sound effects (most likely source)

Only a description of these files was kept when they were added; each is the closest title match on Pixabay.

- ["80s-Style Power-up sound"](https://pixabay.com/sound-effects/film-special-effects-80s-style-power-up-sound-95133/) by freesound_community (Pixabay id 95133) - used in `laser_loop`.
- ["Power Charge"](https://pixabay.com/sound-effects/film-special-effects-power-charge-6798/) by freesound_community (Pixabay id 6798) - used in `link_loop`.
- ["Knife Killing Sound"](https://pixabay.com/sound-effects/film-special-effects-knife-killing-sound-332841/) by RandomAhhAccount (Pixabay id 332841) - used in `knife_flesh`.
- ["Swing Whoosh"](https://pixabay.com/sound-effects/film-special-effects-swing-whoosh-110410/) by Jofae (Pixabay id 110410) - used in `wrench_swing`.
- ["hit by a wood"](https://pixabay.com/sound-effects/film-special-effects-hit-by-a-wood-230542/) by RibhavAgrawal (Pixabay id 230542) - used in `wrench_flesh`.
- ["female-hurt-2"](https://pixabay.com/sound-effects/people-female-hurt-2-94301/) by freesound_community (Pixabay id 94301) - used in `hurt_female`, `armor_hurt_female`, `hurt_female_v1`, `hurt_female_v2`, `hurt_female_v3`, `armor_hurt_female_v1`, `armor_hurt_female_v2`, `armor_hurt_female_v3`.
- ["Air Impact Wrench"](https://pixabay.com/sound-effects/film-special-effects-air-impact-wrench-82141/) by freesound_community (Pixabay id 82141) - used in `wrench_repair`.
- ["Mech Power-up"](https://pixabay.com/sound-effects/film-special-effects-mech-power-up-37453/) by freesound_community (Pixabay id 37453) - used in `invulnerable_loop`.
- ["Metal pipe Swing-1"](https://pixabay.com/sound-effects/musical-metal-pipe-swing-1-47741/) by freesound_community (Pixabay id 47741) - used in `rocket_insert`.
- ["Pipe Bang"](https://pixabay.com/sound-effects/film-special-effects-pipe-bang-306438/) by unknown (Pixabay id 306438) - used in `rocket_insert`.
- ["clothes drop 2 (or another clothes-drop clip)"](https://pixabay.com/sound-effects/household-clothes-drop-2-40202/) by freesound_community (Pixabay id 40202) - used in `plate_on`.

## Free-licence packs and generated sounds

- ["Q009's weapon sounds"](https://opengameart.org/content/q009s-weapon-sounds) by Q009 (uploaded by Calinou) - CC-BY-SA-3.0. Attribution and ShareAlike: the adapted gun sounds stay CC BY-SA 3.0.
  Used in `gun_a1`, `gun_a2`, `gun_a3`, `gun_a4`, `gun_e1`, `gun_e2`, `gun_e3`, `gun_c1`, `gun_c2`, `gun_c3`, `gun_c4`, `gun_m2`, `gun_pistol`, `gun_auto_pistol`, `gun_burst_pistol`, `gun_med_pistol`, `gun_m3`.
- ["Impact Sounds, Interface Sounds, RPG Audio"](https://kenney.nl/assets) by Kenney - CC0-1.0.
  Used in `gun_a1`, `gun_a2`, `gun_a3`, `gun_a4`, `gun_e1`, `gun_e2`, `gun_e3`, `gun_c1`, `gun_c2`, `gun_c3`, `gun_c4`, `gun_m2`, `gun_pistol`, `gun_auto_pistol`, `gun_burst_pistol`, `gun_med_pistol`, `gun_m3`, `gun_h6`, `step_stone_0`, `step_metal_0`, `step_stone_1`, `step_metal_1`, `step_stone_2`, `step_metal_2`, `step_stone_3`, `step_metal_3`, `armor_hurt`, `armor_hurt_female`, `confirm`, `ui`, `switch`, `reload`, `heal`, `bomb_defuse`, `turret_detect`, `melee_swing`, `throw`, `bounce`, `melee_flesh`, `knife_wall`, `wrench_wall`, `laser_fire`, `laser_vent`, `link_fire`, `link_start`, `link_stop`, `pin`, `armor_hurt_v1`, `armor_hurt_v2`, `armor_hurt_v3`, `armor_hurt_female_v1`, `armor_hurt_female_v2`, `armor_hurt_female_v3`, `door_swing_open`, `door_swing_open_v1`, `door_swing_close`, `door_swing_close_v1`, `door_swing_close_v2`, `door_swing_close_v3`, `rocket_reload`.
- ["25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX"](https://opengameart.org/content/25-cc0-bang-firework-sfx) by rubberduck - CC0-1.0.
  Used in `gun_a1`, `gun_a2`, `gun_a3`, `gun_a4`, `gun_e1`, `gun_e2`, `gun_e3`, `gun_c1`, `gun_c2`, `gun_c3`, `gun_c4`, `gun_m2`, `gun_pistol`, `gun_auto_pistol`, `gun_burst_pistol`, `gun_med_pistol`, `gun_m3`, `magazine`, `flash`, `smoke`, `rocket_launch`.
- ["Handgun Reload Sound Effect; Shotgun Reload Sound effects"](https://opengameart.org/content/handgun-reload-sound-effect) by zer0_sol - CC0-1.0.
  Used in `switch`, `reload`, `magazine`, `action_close`, `rocket_reload`.
- ["Gun Reload Sound Effects (clipload1)"](https://opengameart.org/content/gun-reload-sound-effects) by BMacZero (Brian MacIntosh) - CC0-1.0.
  Used in `magazine`.
- ["Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard)"](https://opengameart.org/content/hurt-sound-effects) by EZduzziteh; AuraVoice - CC0-1.0. Only as the quiet layer under the armoured hurt cues.
  Used in `armor_hurt`, `armor_hurt_female`, `armor_hurt_v1`, `armor_hurt_v2`, `armor_hurt_v3`, `armor_hurt_female_v1`, `armor_hurt_female_v2`, `armor_hurt_female_v3`.
- ["Kokoro-82M v1.0, voice af_heart"](https://huggingface.co/hexgrad/Kokoro-82M) by hexgrad - Apache-2.0 (model); generated speech.
  Used in `bomb_planted`, `bomb_dropped`, `bomb_defused`, `win_blue`, `win_orange`, `capture_blue_a`, `capture_blue_b`, `capture_blue_c`, `capture_orange_a`, `capture_orange_b`, `capture_orange_c`.
- "Deterministic synthesis in the build scripts" by Internal N Crush - CC0-1.0.
  Used in `gun_h6`, `confirm`, `ui`, `heal`, `deploy`, `bomb_beep`, `bomb_defuse`, `kill_sting`, `turret_detect`, `equip`, `melee_swing`, `throw`, `bounce`, `melee_flesh`, `flash_ring`, `knife_wall`, `wrench_wall`, `laser_fire`, `laser_vent`, `link_fire`, `repair_loop`, `link_start`, `link_stop`, `pin`, `shield_loop`, `heartbeat`.

## Unidentified sources

The following recordings were supplied without a recorded origin. Their licence is unknown; the sounds that use them are
marked `unknown` in the manifest.

- "oof" (Pixabay (assumed)): Several Pixabay pages are titled "oof" (97698, 64561 "048101_oof", 147492, 212224, 580732); the file was not identified. The four clips are different takes (cross-correlation 0.05-0.72), so it is probably not the single Roblox "oof" sample, but this is not verified. Used in `hurt`, `armor_hurt`, `hurt_v1`, `hurt_v2`, `hurt_v3`, `armor_hurt_v1`, `armor_hurt_v2`, `armor_hurt_v3`.
- "bullet-hit" (Pixabay (assumed)): Candidates: freesound_community "0808xx_Bullet Hit" (39870-39873). Used in `body_impact`.
- "Desktop/제목 없음 1.wav" (user file): Supplied by the user on 2026-10-05; the user says they mixed it themselves from free sounds (individual sources not recorded). Used in `rocket_clank`.
- "Desktop/제목 없는 세션 1_믹스다운.wav" (user file): A DAW mixdown supplied by the user on 2026-10-05; the sounds inside it are not recorded. Used in `mark`.
- "미사일 장전.mp4" (video) Used in `rocket_insert`.

## Every shipped sound

| Sound | Licence | Sources | Clip / recipe |
|---|---|---|---|
| `gun_a1` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_a2` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_a3` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_a4` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_r1` | Pixabay Content License | Pixabay 99749 | from 0.085 s, 0.8-0.95 s, slight per-weapon pitch; `tools/combat_audio_v156.py` |
| `gun_r2` | Pixabay Content License | Pixabay 99749 | from 0.085 s, 0.8-0.95 s, slight per-weapon pitch; `tools/combat_audio_v156.py` |
| `gun_r3` | Pixabay Content License | Pixabay 79846 | from 0.035 s, 0.5-0.55 s; `tools/combat_audio_v156.py` |
| `gun_r4` | Pixabay Content License | Pixabay 79846 | from 0.035 s, 0.5-0.55 s; `tools/combat_audio_v156.py` |
| `gun_r5` | Pixabay Content License | Pixabay 79846 | from 0.035 s, 0.5-0.55 s; `tools/combat_audio_v156.py` |
| `gun_h1` | Pixabay Content License | Pixabay 512969 | one round of the burst at 0.598 s, 0.115 s; `tools/combat_audio_v156.py` |
| `gun_h2` | Pixabay Content License | Pixabay 512969 | one round of the burst at 0.598 s, 0.115 s; `tools/combat_audio_v156.py` |
| `gun_e1` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_e2` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_e3` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_c1` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_c2` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_c3` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_c4` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_m2` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_pistol` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_heavy_pistol` | Pixabay Content License | Pixabay 328431 | from 0.315 s, 0.5-0.6 s; `tools/combat_audio_v156.py` |
| `gun_auto_pistol` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_eng_pistol` | Pixabay Content License | Pixabay 328431 | from 0.315 s, 0.5-0.6 s; `tools/combat_audio_v156.py` |
| `gun_burst_pistol` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_med_pistol` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_m3` | CC-BY-SA-3.0 | Q009's weapon sounds; 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX; Impact Sounds, Interface Sounds, RPG Audio | Q009 shots trimmed, pitched and layered with a CC0 thump and case click; `tools/combat_audio_v150.py` |
| `gun_h4` | Pixabay Content License | Pixabay 106342; Pixabay 258054 | the user's mix (launch 106342 + flight 258054), trimmed to 1.3 s; `tools/combat_audio_v205.py` |
| `gun_dual_pistols` | Pixabay Content License | Pixabay 328431 | from 0.315 s, 0.5-0.6 s; `tools/combat_audio_v156.py` |
| `gun_h5` | Pixabay Content License | Pixabay 267739 | launch 0.02-1.1 s, pitched down (user_rocket.wav = Pixabay 267739); `tools/combat_audio_v151.py` |
| `gun_h6` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `gun_m4` | Pixabay Content License | Pixabay 99749 | from 0.085 s, 0.8-0.95 s, slight per-weapon pitch; `tools/combat_audio_v156.py` |
| `step_stone_0` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_metal_0` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_water_0` | Pixabay Content License | Pixabay 199418 | one slosh per step at 0.51/1.33/2.58/3.84 s, 1.3x faster; `tools/combat_audio_v154.py` |
| `step_stone_1` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_metal_1` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_water_1` | Pixabay Content License | Pixabay 199418 | one slosh per step at 0.51/1.33/2.58/3.84 s, 1.3x faster; `tools/combat_audio_v154.py` |
| `step_stone_2` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_metal_2` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_water_2` | Pixabay Content License | Pixabay 199418 | one slosh per step at 0.51/1.33/2.58/3.84 s, 1.3x faster; `tools/combat_audio_v154.py` |
| `step_stone_3` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_metal_3` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney footsteps and plates; `tools/build_audio.py` |
| `step_water_3` | Pixabay Content License | Pixabay 199418 | one slosh per step at 0.51/1.33/2.58/3.84 s, 1.3x faster; `tools/combat_audio_v154.py` |
| `body_impact` | unknown | bullet-hit (not found) | `tools/combat_audio_v151.py` |
| `hurt` | unknown | oof (not found) | four takes; `tools/combat_audio_v151.py` |
| `armor_hurt` | unknown | oof (not found); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | oof takes over the old armoured grunt + plate; `tools/combat_audio_v151.py` |
| `hurt_female` | Pixabay Content License | Pixabay 94301 (likely) | pitches 1.0/0.95/1.06/1.12; `tools/combat_audio_v151.py` |
| `armor_hurt_female` | Pixabay Content License | Pixabay 94301 (likely); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | `tools/combat_audio_v151.py` |
| `hit` | Pixabay Content License | Pixabay 65734 | punches at 0.405/1.805/3.215/4.595 s, 0.22 s, dulled (v157); `tools/combat_audio_v157.py` |
| `confirm` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `ui` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `switch` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Handgun Reload Sound Effect; Shotgun Reload Sound effects | cloth + magazine-release click; `tools/combat_audio_v151.py` |
| `reload` | CC0-1.0 | Handgun Reload Sound Effect; Shotgun Reload Sound effects; Impact Sounds, Interface Sounds, RPG Audio | magazine release + click; `tools/combat_audio_v150.py` |
| `magazine` | CC0-1.0 | Handgun Reload Sound Effect; Shotgun Reload Sound effects; Gun Reload Sound Effects (clipload1); 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX | `tools/combat_audio_v150.py` |
| `bolt` | Pixabay Content License | Pixabay 6014 | from the first sound, 0.62 s; `tools/combat_audio_v155.py` |
| `action_close` | CC0-1.0 | Handgun Reload Sound Effect; Shotgun Reload Sound effects | shotgun rack (shotgunsounds.zip); `tools/combat_audio_v150.py` |
| `shell_insert` | Pixabay Content License | Pixabay 87813 | from the onset, 0.34 s; `tools/combat_audio_v205.py` |
| `rocket_insert` | unknown | 미사일 장전.mp4 (not found); Pixabay 47741 (likely); Pixabay 306438 (likely) | the user's own mix: pipe swing + pipe bang (Pixabay, likely) with a residual ~0.1 s of the 미사일 장전.mp4 reload slide (unknown source) and its room tail; first 0.30 s muted (v157). Kept as is (user decision 2026-10-09).; `tools/combat_audio_v157.py` |
| `heal` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `deploy` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/build_audio.py` |
| `bomb_beep` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/build_audio.py` |
| `bomb_defuse` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `bomb_planted` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `bomb_dropped` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `bomb_defused` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `win_blue` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `win_orange` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_blue_a` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_blue_b` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_blue_c` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_orange_a` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_orange_b` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `capture_orange_c` | Kokoro (Apache-2.0 model) | Kokoro-82M v1.0, voice af_heart | `tools/build_announcer.py` |
| `bomb_explosion` | Pixabay Content License | Pixabay 42132 | random variant 1 of 3; 2.8 s, top eased and soft-limited (clipped source); `tools/combat_audio_v205.py` |
| `bomb_explosion_v1` | Pixabay Content License | Pixabay 40472 | random variant 2 of 3; whole blast; `tools/combat_audio_v205.py` |
| `bomb_explosion_v2` | Pixabay Content License | Pixabay 369633 | random variant 3 of 3; first 3 s (one blast); `tools/combat_audio_v205.py` |
| `explosion` | Pixabay Content License | Pixabay 47821 | about 2.3 s, soft-clipped, cut to 1.25 s; `tools/combat_audio_v154.py` |
| `flash` | CC0-1.0 | 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX | bang_03 + cannon_01 layers; `tools/build_audio.py` |
| `smoke` | CC0-1.0 | 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX | bang_03 + cannon_01 layers; `tools/build_audio.py` |
| `skill` | Pixabay Content License | Pixabay 384975 | 0.08-1.25 s; `tools/combat_audio_v154.py` |
| `kill_sting` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/build_audio.py` |
| `turret_detect` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `equip` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/build_audio.py` |
| `melee_swing` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `throw` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_v150.py` |
| `bounce` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_v150.py` |
| `melee_flesh` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `rocket_launch` | CC0-1.0 | 25 CC0 bang / firework SFX; 100 CC0 Metal and Wood SFX | bang_03 + cannon_01 layers; `tools/build_audio.py` |
| `flash_ring` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/build_audio.py` |
| `knife_wall` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `wrench_wall` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_refresh.py` |
| `wrench_flesh` | Pixabay Content License | Pixabay 230542 (likely) | `tools/combat_audio_v151.py` |
| `knife_flesh` | Pixabay Content License | Pixabay 332841 (likely) | `tools/combat_audio_v151.py` |
| `wrench_repair` | Pixabay Content License | Pixabay 82141 (likely) | burst 1.96-2.36 s, -4 dB; `tools/combat_audio_v151.py` |
| `rocket_flight` | Pixabay Content License | Pixabay 267739 | launch whoosh 0.18-0.7 s, pitched down (user_rocket.wav = Pixabay 267739); `tools/combat_audio_v151.py` |
| `laser_fire` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `laser_vent` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `link_fire` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `door` | Pixabay Content License | Pixabay 27425 | three slides of the 50 s clip; `tools/combat_audio_v154.py` |
| `knife_swing` | Pixabay Content License | Pixabay 260274 | whole file, leading silence cut; `tools/combat_audio_v151.py` |
| `wrench_swing` | Pixabay Content License | Pixabay 110410 (likely) | `tools/combat_audio_v151.py` |
| `slide` | Pixabay Content License | Pixabay 44962; Pixabay 40202 | sweep at 5.95 s + clothes drop; `tools/combat_audio_v154.py` |
| `link_loop` | Pixabay Content License | Pixabay 6798 (likely) | filtered, seamless loop; `tools/combat_audio_v151.py` |
| `repair_loop` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/combat_audio_v151.py` |
| `link_start` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `link_stop` | CC0-1.0 | Deterministic synthesis in the build scripts; Impact Sounds, Interface Sounds, RPG Audio | filtered noise / sweeps (link_start with a Kenney cloth layer); `tools/combat_audio_refresh.py` |
| `pin` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio; Deterministic synthesis in the build scripts | `tools/combat_audio_v150.py` |
| `rocket_explosion` | Pixabay Content License | Pixabay 47821 | about 2.3 s, soft-clipped, cut to 1.25 s; `tools/combat_audio_v154.py` |
| `pump` | Pixabay Content License | Pixabay 38640 | from the onset, 0.53 s; `tools/combat_audio_v205.py` |
| `laser_loop` | Pixabay Content License | Pixabay 103309; Pixabay 95133 (likely) | weld + power-up, soft-clipped, seamless loop; `tools/combat_audio_v151.py` |
| `hurt_v1` | unknown | oof (not found) | four takes; `tools/combat_audio_v151.py` |
| `hurt_v2` | unknown | oof (not found) | four takes; `tools/combat_audio_v151.py` |
| `hurt_v3` | unknown | oof (not found) | four takes; `tools/combat_audio_v151.py` |
| `armor_hurt_v1` | unknown | oof (not found); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | oof takes over the old armoured grunt + plate; `tools/combat_audio_v151.py` |
| `armor_hurt_v2` | unknown | oof (not found); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | oof takes over the old armoured grunt + plate; `tools/combat_audio_v151.py` |
| `armor_hurt_v3` | unknown | oof (not found); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | oof takes over the old armoured grunt + plate; `tools/combat_audio_v151.py` |
| `hurt_female_v1` | Pixabay Content License | Pixabay 94301 (likely) | pitches 1.0/0.95/1.06/1.12; `tools/combat_audio_v151.py` |
| `hurt_female_v2` | Pixabay Content License | Pixabay 94301 (likely) | pitches 1.0/0.95/1.06/1.12; `tools/combat_audio_v151.py` |
| `hurt_female_v3` | Pixabay Content License | Pixabay 94301 (likely) | pitches 1.0/0.95/1.06/1.12; `tools/combat_audio_v151.py` |
| `armor_hurt_female_v1` | Pixabay Content License | Pixabay 94301 (likely); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | `tools/combat_audio_v151.py` |
| `armor_hurt_female_v2` | Pixabay Content License | Pixabay 94301 (likely); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | `tools/combat_audio_v151.py` |
| `armor_hurt_female_v3` | Pixabay Content License | Pixabay 94301 (likely); Hurt Sound Effects (EZduzziteh); Female Hurt Grunts & Groans (AuraVoice / Nocturnal_Vanguard); Impact Sounds, Interface Sounds, RPG Audio | `tools/combat_audio_v151.py` |
| `pistol_magazine` | Pixabay Content License | Pixabay 518860 | cylinder double click 0.44-0.625 s; `tools/combat_audio_v205.py` |
| `invulnerable_loop` | Pixabay Content License | Pixabay 37453 (likely) | lowpassed, seamless loop; `tools/combat_audio_v151.py` |
| `shield_loop` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/combat_audio_v151.py` |
| `shield_block` | Pixabay Content License | Pixabay 37310 | 1.5x faster, -4 dB; `tools/combat_audio_v151.py` |
| `plate_on` | Pixabay Content License | Pixabay 40202 (likely) | fitted to 0.7 s; `tools/combat_audio_v151.py` |
| `medkit` | Pixabay Content License | Pixabay 378665 | 0-1.25 s, 2.2 kHz steep lowpass; `tools/combat_audio_v154.py` |
| `skill_end` | Pixabay Content License | Pixabay 384975 | 1.22-2.42 s; `tools/combat_audio_v154.py` |
| `door_v1` | Pixabay Content License | Pixabay 27425 | three slides of the 50 s clip; `tools/combat_audio_v154.py` |
| `door_v2` | Pixabay Content License | Pixabay 27425 | three slides of the 50 s clip; `tools/combat_audio_v154.py` |
| `door_swing_open` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `door_swing_open_v1` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `door_swing_close` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `door_swing_close_v1` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `door_swing_close_v2` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `door_swing_close_v3` | CC0-1.0 | Impact Sounds, Interface Sounds, RPG Audio | Kenney RPG Audio door/creak; `tools/combat_audio_v154.py` |
| `engineer_deploy` | Pixabay Content License | Pixabay 70923 | 0.38-1.25 s, three pitches layered; `tools/combat_audio_v154.py` |
| `mark` | unknown | Desktop/제목 없는 세션 1_믹스다운.wav (not found) | 94% speed; `tools/combat_audio_v157.py` |
| `bipod` | Pixabay Content License | Pixabay 263638 | first clack, -12 dB; `tools/combat_audio_v154.py` |
| `molotov` | Pixabay Content License | Pixabay 224089 | first whoosh, 2.6 s; `tools/combat_audio_v155.py` |
| `fire_loop` | Pixabay Content License | Pixabay 584730 | 9 s excerpt (2-8.3 s used), seamless loop; `tools/combat_audio_v155.py` |
| `hit_v1` | Pixabay Content License | Pixabay 65734 | punches at 0.405/1.805/3.215/4.595 s, 0.22 s, dulled (v157); `tools/combat_audio_v157.py` |
| `hit_v2` | Pixabay Content License | Pixabay 65734 | punches at 0.405/1.805/3.215/4.595 s, 0.22 s, dulled (v157); `tools/combat_audio_v157.py` |
| `hit_v3` | Pixabay Content License | Pixabay 65734 | punches at 0.405/1.805/3.215/4.595 s, 0.22 s, dulled (v157); `tools/combat_audio_v157.py` |
| `rocket_clank` | unknown | Pixabay 81634; Desktop/제목 없음 1.wav (not found) | the user's own mix of free sounds: 70% Pixabay metal clang + 30% the user's clack file. Kept as is (user decision 2026-10-09).; `tools/combat_audio_v157.py` |
| `rocket_reload` | CC0-1.0 | Handgun Reload Sound Effect; Shotgun Reload Sound effects; Impact Sounds, Interface Sounds, RPG Audio | magazine release + click; `tools/combat_audio_v157.py` |
| `cloak_off` | Pixabay Content License | Pixabay 47675 | first 1.6 s (cloak_on reversed); `tools/combat_audio_v200.py` |
| `cloak_on` | Pixabay Content License | Pixabay 47675 | first 1.6 s (cloak_on reversed); `tools/combat_audio_v200.py` |
| `drone_loop` | Pixabay Content License | Pixabay 397287 | steady flight from 10 s, 6 s loop; `tools/combat_audio_v200.py` |
| `ke_call` | Pixabay Content License | Pixabay 190270 | first 6 s; `tools/combat_audio_v200.py` |
| `ke_pierce` | Pixabay Content License | Pixabay 6409; Pixabay 487662 | first 1.4 s mixed; `tools/combat_audio_v200.py` |
| `ke_blast` | Pixabay Content License | Pixabay 381972 | 0.45-2.25 s; `tools/combat_audio_v200.py` |
| `heartbeat` | CC0-1.0 | Deterministic synthesis in the build scripts | deterministic synthesis; `tools/combat_audio_v201.py` |
| `vocal_pistol` | Pixabay Content License | Pixabay 402324 | one pop, trimmed; `tools/combat_audio_v205.py` |
| `vocal_smg` | Pixabay Content License | Pixabay 423717 | one pop, trimmed; `tools/combat_audio_v205.py` |
| `vocal_rifle` | Pixabay Content License | Pixabay 11509 | one pop, trimmed; `tools/combat_audio_v205.py` |
| `vocal_machinegun` | Pixabay Content License | Pixabay 406640 | one pop, trimmed; `tools/combat_audio_v205.py` |
| `vocal_sniper` | Pixabay Content License | Pixabay 312576 | one pop, trimmed; `tools/combat_audio_v205.py` |
| `vocal_shotgun` | Pixabay Content License | Pixabay 94319 | one pop, trimmed; `tools/combat_audio_v205.py` |

No audio from Metal Slug, Call of Duty, Counter-Strike, VALORANT or other games is knowingly included. The authors of the
sources above do not endorse this game.
