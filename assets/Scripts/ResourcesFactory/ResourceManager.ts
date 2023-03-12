import { _decorator, Asset, AssetManager, assetManager, Component, ImageAsset, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResourceManager')
export class ResourceManager {

    public static get resourcesFolder() {
        return assetManager.getBundle("resources");
    }

    public static getImageItem(dir: string, callback?: (sprite: ImageAsset) => void) {
        this.resourcesFolder.load(dir, ImageAsset, (err, data) => {
            if (err) { return } else {
                callback(data);
            }
        });
    }

    public static getDirectory(dir: string, callback?: (assets: Asset[]) => void) {
        console.log("what man");
        this.resourcesFolder.loadDir(dir, (err, data) => {
            console.log(data);
        });
    }

    public static getCharacterAnimations(charName: string, animationName: string, callback?: () => void) {
    }
}


