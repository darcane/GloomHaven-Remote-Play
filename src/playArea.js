import React from "react";
import { ImageBase } from "./mainComponents.js";
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

const mt = require("./gloomhaven/images/character-ability-cards/MT/*.png");
const items = require("./gloomhaven/images/items/1-14/*.png");
const bg = require("./gloomhaven/images/battle-goals/battlegoal-back.png");

export function PlayArea() {
  return (
    <>
      <CardsToPlay>
        <center>PlayArea</center>
        <ImageBase src={mt["mt-back"]} width={175}></ImageBase>
        <ImageBase src={mt["possession"]} width={175}></ImageBase>
        <ImageBase src={mt["perverse-edge"]} width={175}></ImageBase>
        <ImageBase src={mt["fearsome-blade"]} width={175}></ImageBase>
        <ImageBase src={mt["hostile-takeover"]} width={175}></ImageBase>
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
        <ImageBase src={items["poison-dagger"]} width={150}></ImageBase>
        <ImageBase src={items["minor-stamina-potion"]} width={150}></ImageBase>
      </Items>
      <ModifierArea>
        <center>ModifierArea</center>
      </ModifierArea>
      <BattleGoal>
        <center>
          BattleGoal
          <ImageBase src={bg} width={150}></ImageBase>
        </center>
      </BattleGoal>
    </>
  );
}
