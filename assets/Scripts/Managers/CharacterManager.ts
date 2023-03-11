import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property(Sprite)
    characterSprite: Sprite;
    start() {

    }

    update(deltaTime: number) {

    }
}


