import React from "react";
import {
  CardsToPlay,
  SelectedCards,
  ActiveCards,
  DiscardedCards,
  LostCards,
  CharacterSheet,
  Items,
  ModifierArea,
  BattleGoal,
} from "./areaComponents.js";

export function PlayArea() {
  return (
    <>
      <CardsToPlay>
        <center>PlayArea</center>
      </CardsToPlay>
      <SelectedCards>
        <center>SelectedCards</center>
      </SelectedCards>
      <ActiveCards>
        <center>ActiveCards</center>
      </ActiveCards>
      <DiscardedCards>
        <center>DiscardedCards</center>
      </DiscardedCards>
      <LostCards>
        <center>LostCards</center>
      </LostCards>
      <CharacterSheet>
        <center>CharacterSheet</center>
      </CharacterSheet>
      <Items>
        <center>Items</center>
      </Items>
      <ModifierArea>
        <center>ModifierArea</center>
      </ModifierArea>
      <BattleGoal>
        <center>BattleGoal</center>
      </BattleGoal>
    </>
  );
}
