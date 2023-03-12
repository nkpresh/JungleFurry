import { _decorator, Component, Sprite, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property(Sprite)
    characterSprite: Sprite;

    @property(typeof (Number))
    movementSpeed: Number = 0;

    targetX: number = 0.5;

    canMove: boolean = true;

    start() {
        this.scheduleOnce(() => {
            this.canMove = false;
        }, 5);
    }

    update(deltaTime: number) {
        if (this.canMove) {
            this.move();
        }

    }

    move() {
        let charPos: Vec3 = this.node.worldPosition.clone();
        let targetPos: Vec3 = new Vec3(charPos.x + this.targetX, charPos.y, 0);
        let movePos = this.node.worldPosition.clone().lerp(targetPos, this.movementSpeed.valueOf());
        this.node.setWorldPosition(movePos);
    }
}


