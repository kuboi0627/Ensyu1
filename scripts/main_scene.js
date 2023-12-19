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
            // キーボードの情報を取得
            let cursors = this.input.keyboard.createCursorKeys();
            if(cursors.up.isDown){
                console.log("Up!!");
                this.Hanako.setVelocityY(-40);
                this.Taro.setVelocityY(40);// 上方向の速度を設定
            } else if(cursors.down.isDown){
                console.log("down!!");
                this.Hanako.setVelocityY(40);
                this.Taro.setVelocityY(-40);// 下方向の速度を設定
            }else if(cursors.left.isDown){
                console.log("Left");
                this.Hanako.setVelocityY(-40);
                this.Taro.setVelocityX(40);// 左方向の速度を設定
            }else if(cursors.right.isDown){
                console.log("Right!!");
                this.Hanako.setVelocityY(-40);
                this.Taro.setVelocityX-(40);// 右方向の速度を設定
            }else{
                this.Taro.setVelocityX(0);// 横方向の速度を0
                this.Taro.setVelocityY(0);// 縦方向の速度を0
                this.Hanako.setVelocityX(0);// 横方向の速度を0
                this.Hanako.setVelocityY(0);// 縦方向の速度を0
    
            }
    
    
        }
    }


