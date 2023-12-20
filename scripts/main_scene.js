// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
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
        this.load.image('Hanako', 'assets/Hanako.png');
        this.load.image('APPLE', 'assets/APPLE.png');
        this.load.image('ORANGE', 'assets/ORANGE.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'background');

        const Taro = this.physics.add.sprite(50, 50, 'Taro')
        const Hanako = this.physics.add.sprite(750, 400, 'Hanako')
        for(let i=0; i<5; i++){
        let  randx = Phaser.Math.Between(25, 775) ;  // y は　50～750の間の値
        let randy =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
        this.add.image(randx, randy , 'ORANGE'); }//ランダムな場所に生成
        for(let i=0; i<5; i++){
        let  randa = Phaser.Math.Between(25, 775) ;  // y は　50～750の間の値
        let randb =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
        this.add.image(randa, randb , 'APPLE');} //ランダムな場所に生成
        this.Taro = Taro
        this.Hanako = Hanako
         
        
        }
     // 毎フレーム実行される繰り返し処理
    update(time, delta) {
         // キーボードの情報を取
         let cursors = this.input.keyboard.createCursorKeys();
         if(cursors.up.isDown){
             console.log("Up!!");
             this.Taro.setVelocityY(-40);// 上方向の速度を設定
             this.Hanako.setVelocityY(40);// 上方向の速度を設定
         } else if(cursors.down.isDown){
             console.log("down!!");
             this.Taro.setVelocityY(40);// 下方向の速度を設
             this.Hanako.setVelocityY(-40);// 下方向の速度を設
         }else if(cursors.left.isDown){
             console.log("Left");
             this.Taro.setVelocityX(-40);// 左方向の速度を設定
             this.Hanako.setVelocityX(40);// 左方向の速度を設定
         }else if(cursors.right.isDown){
             console.log("Right!!");
             this.Taro.setVelocityX(40);// 右方向の速度を設定
             this.Hanako.setVelocityX(-40);// 右方向の速度を設定
         }else{
             this.Taro.setVelocityX(0);// 横方向の速度を0
             this.Taro.setVelocityY(0);// 縦方向の速度を0
             this.Hanako.setVelocityX(0);// 横方向の速度を0
             this.Hanako.setVelocityY(0);// 縦方向の速度を0
         }
    }

}