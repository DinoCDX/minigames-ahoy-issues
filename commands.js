window.HELP=[
 {
  "c": "Party Games",
  "cmds": [
   {
    "n": "mafia",
    "d": "A classic game of deception and manipulation. Play as the Mafia, Doctor, Detective, or Villager. Eliminate the opposing team to win.\n\nMinimum players : 4 • Maximum players : 20",
    "s": [
     [
      "Modes",
      "`classic` (default): just Mafia, Doctor, Detective, Villager.\n\n`extended`: turns on the full optional-role pool by default.\n\nEither way, the host can fine-tune exactly which optional roles are in play from the lobby's config menu (`Optional Roles`), before starting. No selected role is guaranteed to show up in a given game, and leftover players are still plain Villagers."
     ],
     [
      "Classic Roles",
      "🔪 Mafia: kill one player each night.\n💉 Doctor: save one player each night.\n🔎 Detective: investigate one player each night.\nVillager: no powers, just a vote."
     ],
     [
      "Extended Roles",
      "**Mafia**\n🔪 Mafia: kill one player each night.\n🕴️ Godfather: kills with the Mafia, reads innocent to the Detective.\n🎭 Framer: makes someone read as Mafia to the Detective for the night.\n\n**Town**\n💉 Doctor: save one player each night.\n🔎 Detective: investigate one player each night.\n🛡️ Bodyguard: guards someone, dies in their place if they're hit.\n💃 Escort: blocks one player's night action.\n👣 Tracker: sees who their target visited.\n🔫 Vigilante: 1 bullet, dies from guilt if it hits Town.\n🎩 Mayor: no night action, but their vote counts double.\nVillager: no powers, just a vote.\n\n**Neutral**\n🃏 Jester: wins alone if voted out.\n\n**Special**\n🧱 Masons: Town players (any role) who also know the other Masons.\n👥 Twins: dormant Villagers. When one dies, the other becomes Vigilante (mafia kill) or Mafia (any other death)."
     ]
    ]
   },
   {
    "n": "undercover",
    "d": "Everyone is given a word, but one person gets a different word. Everyone must send a hint in the chat and try to figure out who the imposter is.\n\nMinimum players : 3 • Maximum players : 10",
    "s": []
   },
   {
    "n": "hungergames",
    "d": "Welcome to the hunger games tribute. A game of random chance with hundreds of different events, who will survive till the end?\n\nMinimum players : 2 • Maximum players : 50",
    "s": [
     [
      "Modes",
      "`classic` (default): hunger, weapons, sponsors and arena hazards.\nEvents: The Brawl, The Feast, Capitol Hazard.\n\n`pirate`: crews, plunder and mutiny. See the Pirate Rules tab.\nEvents: The Duel, The Treasure Hunt, The Kraken's Wake.\n\n`guns`: HP, firefights and a closing perimeter. See the Guns Rules tab.\nEvents: The Showdown, The Airdrop, The Perimeter Collapse.\n\nThe mode can be set with the `mode` parameter or changed by the host from the lobby's config menu (`Mode`) before starting. The same menu also sets the day speed."
     ],
     [
      "Pirate Rules",
      "With 4 or more players everyone is split into crews of about 3, announced when the game starts.\n\n• Crewmates share food and weapon finds and never fight each other.\n• Crews raid each other, and the winner plunders a dead player's weapon.\n• A crew member can mutiny and kill a crewmate.\n• Once only one crew is left, it turns on itself until one pirate remains.\n• The Kraken is deadliest for unarmed players, and armed players may haul a crewmate to safety.\n• Starvation hits after 5 days without food."
     ],
     [
      "Guns Rules",
      "Everyone starts with 3 HP.\n\n• Every armed attacker adds 1 damage (up to 3), unarmed attackers deal 1, and firefights have two volleys.\n• Wounded players are easier to hit and slowly recover while resting.\n• Food heals 1 HP, and there is no starvation.\n• Weapons are easy to find.\n• Each Perimeter Collapse puts more players at risk and deals more damage than the last.\n• Fights get deadlier from day 4 onwards.\n• Wounded survivors show their HP in the daily summary."
     ]
    ]
   },
   {
    "n": "hideandseek",
    "d": "A game where hiders must choose tiles to hide in and pray that the seeker doesn't find them. Last one remaining wins!\n\nMinimum players : 2 • Maximum players : 20",
    "s": []
   },
   {
    "n": "buckshot",
    "d": "A game of buckshot roulette, buckshot style. Shoot yourself or others, use items, break friendships.\n\nMinimum players : 2 • Maximum players : 8",
    "s": [
     [
      "Modes",
      "`normal` (default): classic rules, no special items or events.\n\n`experimental`: adds random per-round bullet events plus kill-reward items. See the Items tab."
     ],
     [
      "Items",
      "**Items (any mode):**\n🚬 Cigarette: heal 1 hp (0.5 in experimental)\n🔎 Magnifying Glass: peek if the next shell is Live or Blank\n🔪 Saw: your next live shot deals double damage\n🧤 Thief Glove: steal a random item from someone else\n🍺 Beer: rack the gun, ejecting the next shell safely\n🔀 Converter: swap the next shell between Live and Blank\n**Experimental-only kill rewards** (chance to drop when you eliminate someone):\n❤️ Heart Container: permanently +1 max hp\n✨ Second Wind: fully heal\n⚔️ Executioner's Mark: your next live shot deals double damage"
     ]
    ]
   },
   {
    "n": "treasurehunt",
    "d": "Everyone races to the treasure. Each round every player gets a random event that can help or set them back. First to reach the treasure wins.",
    "s": []
   },
   {
    "n": "blacktea",
    "d": "Word chain elimination: one player at a time must type a real word containing the given 3 letters before time runs out, or they're eliminated. Last one standing wins.\n\nMinimum players : 2",
    "s": []
   },
   {
    "n": "greentea",
    "d": "Everyone races to type a real word containing the given 3 letters each round, the first three correct answers score 🥇🥈🥉 points. Highest score after all rounds wins.\n\nMinimum players : 2",
    "s": []
   },
   {
    "n": "spellingbee",
    "d": "Type the correct spellings of the word or get ELIMINATED!, last one standing wins. (Voice Required)\n\nMinimum players : 2 • Maximum players : 8",
    "s": []
   },
   {
    "n": "auction",
    "d": "Guess the exact price of rare and famous items across several rounds. Closest guess each round scores the most points.\n\nMinimum players : 2 • Maximum players : 20",
    "s": []
   },
   {
    "n": "poker",
    "d": "Five card draw poker. Everyone gets a hand, one draw round to swap cards, best hand wins.\n\nMinimum players : 2 • Maximum players : 6",
    "s": []
   }
  ]
 },
 {
  "c": "Quick & Trivia Games",
  "cmds": [
   {
    "n": "fastgame",
    "d": "",
    "s": []
   },
   {
    "n": "fastclick",
    "d": "",
    "s": []
   },
   {
    "n": "fasttype",
    "d": "",
    "s": []
   },
   {
    "n": "reversetype",
    "d": "",
    "s": []
   },
   {
    "n": "findletter",
    "d": "",
    "s": []
   },
   {
    "n": "fastmath",
    "d": "",
    "s": []
   },
   {
    "n": "fastreact",
    "d": "",
    "s": []
   },
   {
    "n": "fastword",
    "d": "",
    "s": []
   },
   {
    "n": "pokemon",
    "d": "",
    "s": []
   },
   {
    "n": "guess",
    "d": "Guessing games. Start a number or word round, ask for a hint, or stop the current round.",
    "s": []
   },
   {
    "n": "guess number",
    "d": "Start a number guessing game.",
    "s": []
   },
   {
    "n": "guess word",
    "d": "Start a word guessing game.",
    "s": []
   },
   {
    "n": "guess hint",
    "d": "Get a hint for the current round.",
    "s": []
   },
   {
    "n": "guess stop",
    "d": "Stop the current guessing game.",
    "s": []
   }
  ]
 },
 {
  "c": "2 Player Games",
  "cmds": [
   {
    "n": "rps",
    "d": "Rock Paper Scissors, 1v1.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "rps normal",
    "d": "The classic best-of format, one pick per round.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "rps minusone",
    "d": "Each player secretly picks two moves, then chooses which one to keep before revealing.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "tictactoe",
    "d": "Tic Tac Toe, 1v1.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "tictactoe normal",
    "d": "Classic Tic Tac Toe, 1v1.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "tictactoe hot",
    "d": "Tic Tac Toe where you can only have 3 of your pieces on the board. When you place a new one, your oldest piece is removed.\n\nPlayers: 2",
    "s": []
   },
   {
    "n": "russianroulette",
    "d": "A gritty 1v1 duel of chance and nerve. Six chambers, one live round. Shoot yourself to pass the turn, or aim at your opponent for a chance at an instant win, but if you fire a blank at them, you forfeit!\n\nPlayers : 2",
    "s": []
   },
   {
    "n": "bomber",
    "d": "A strategic 1v1 minefield duel. Secretly plant 3 bombs on a 16-tile grid, then take turns sweeping the board. Stack bombs on the same tile for massive damage combos. First player to lose 3 HP gets blown away.\n\nPlayers : 2",
    "s": []
   },
   {
    "n": "shootout",
    "d": "",
    "s": []
   },
   {
    "n": "dicepoker",
    "d": "",
    "s": []
   },
   {
    "n": "blackjack",
    "d": "",
    "s": []
   }
  ]
 },
 {
  "c": "Fishing",
  "cmds": [
   {
    "n": "fish",
    "d": "",
    "s": []
   },
   {
    "n": "fishing",
    "d": "",
    "s": []
   }
  ]
 },
 {
  "c": "Social",
  "cmds": [
   {
    "n": "hug",
    "d": "",
    "s": []
   },
   {
    "n": "cuddle",
    "d": "",
    "s": []
   },
   {
    "n": "pat",
    "d": "",
    "s": []
   },
   {
    "n": "poke",
    "d": "",
    "s": []
   },
   {
    "n": "nom",
    "d": "",
    "s": []
   },
   {
    "n": "bite",
    "d": "",
    "s": []
   },
   {
    "n": "punch",
    "d": "",
    "s": []
   },
   {
    "n": "slap",
    "d": "",
    "s": []
   },
   {
    "n": "stare",
    "d": "",
    "s": []
   },
   {
    "n": "ship",
    "d": "",
    "s": []
   },
   {
    "n": "fate",
    "d": "",
    "s": []
   },
   {
    "n": "8ball",
    "d": "",
    "s": []
   },
   {
    "n": "hotmeter",
    "d": "",
    "s": []
   },
   {
    "n": "waifumeter",
    "d": "",
    "s": []
   },
   {
    "n": "gaymeter",
    "d": "",
    "s": []
   },
   {
    "n": "iqmeter",
    "d": "",
    "s": []
   },
   {
    "n": "susmeter",
    "d": "",
    "s": []
   },
   {
    "n": "rizzmeter",
    "d": "",
    "s": []
   },
   {
    "n": "luckmeter",
    "d": "",
    "s": []
   },
   {
    "n": "femboymeter",
    "d": "",
    "s": []
   },
   {
    "n": "cutemeter",
    "d": "",
    "s": []
   }
  ]
 },
 {
  "c": "Fun",
  "cmds": [
   {
    "n": "truth",
    "d": "Truth or dare.",
    "s": []
   },
   {
    "n": "truth or dare",
    "d": "Sends a random truth or dare to the channel.",
    "s": []
   },
   {
    "n": "would",
    "d": "Would you rather.",
    "s": []
   },
   {
    "n": "would you rather",
    "d": "Sends a random would you rather question to the channel.",
    "s": []
   },
   {
    "n": "random",
    "d": "A bunch of random stuff: quotes, facts, memes and pictures of animals.",
    "s": []
   },
   {
    "n": "random quote",
    "d": "Sends a random quote.",
    "s": []
   },
   {
    "n": "random fact",
    "d": "Sends a random fact.",
    "s": []
   },
   {
    "n": "random meme",
    "d": "Sends a random meme.",
    "s": []
   },
   {
    "n": "random cat",
    "d": "Sends a random cat picture.",
    "s": []
   },
   {
    "n": "random dog",
    "d": "Sends a random dog picture.",
    "s": []
   },
   {
    "n": "random animal",
    "d": "Sends a random animal picture.",
    "s": []
   },
   {
    "n": "quote",
    "d": "Turn a message into a quote.",
    "s": []
   }
  ]
 },
 {
  "c": "Server Setup",
  "cmds": [
   {
    "n": "server",
    "d": "",
    "s": []
   },
   {
    "n": "counting",
    "d": "Set up and manage the counting game in your server.",
    "s": []
   },
   {
    "n": "qotd",
    "d": "Set up and manage the question of the day in your server.",
    "s": []
   }
  ]
 },
 {
  "c": "Utility",
  "cmds": [
   {
    "n": "profile",
    "d": "",
    "s": []
   },
   {
    "n": "ping",
    "d": "",
    "s": []
   },
   {
    "n": "endgame",
    "d": "",
    "s": []
   },
   {
    "n": "help",
    "d": "",
    "s": []
   }
  ]
 }
];