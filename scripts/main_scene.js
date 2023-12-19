class MainScene extends Phaser.Scene {
    
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/Untitled.png');
        this.load.image('Taro', 'assets/Taro.png');
        this.load.image('Hanako', 'assets/Hanako.png')
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'background');
        const Taro = this.physics.add.sprite(50, 50, 'Taro');
        const Hanako = this.physics.add.sprite(700, 400, 'Hanako');

        this.Taro = Taro
        this.Hanako = Hanako
        }

     // 毎フレーム実行される繰り返し処理
    update(time, delta) {
        
    }

}
