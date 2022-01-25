import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import { roller } from "./roller";

export const roll = (diceCommand: string): DiceRoll =>
  roller.roll(diceCommand) as DiceRoll;
