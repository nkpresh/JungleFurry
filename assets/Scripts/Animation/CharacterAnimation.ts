import { Component, SpriteFrame, Texture2D } from "cc";
import { CharacterState } from "../Managers/Enums";

export enum CharacterAnimationStates {

}
export class CharacterAnimation extends Component {
    characterStat: CharacterState
    characterAnimationMap: Map<CharacterAnimationStates, SpriteFrame>
    updateAnimation() {

    }

}