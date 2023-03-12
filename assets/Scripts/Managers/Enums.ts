import { _decorator, Component, Enum, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum CharacterState {
    Idle,
    Move,
    Attack,
    Death,
}


