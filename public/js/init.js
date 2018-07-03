var config = {
    type: Phaser.auto, 
    width: 800,
    height: 600,
    // დავამატოთ Arcade Physics Support 
    physics : {
        default : 'arcade', 
        arcade : {
            debug: false
        }
    },
    scene : {
        preload: preload,
        create: create,
        update: update
    }
};

// თამაშის ინიციალიზება. 
var game = new Phaser.Game(config); 


/* პლატფორმის შექმნა (დინამიური პლატფორმა) რომელიც უზრუნველყოფს 
    Velocity ( სიჩქარეს), 
    accelerator ( ამაჩქარებელს).
*/ 

DPlatform = this.physics.add.DynamicGroup(); 


// ფუნციას იძახებს თამაშის საბოლოოდ ჩატვირთვამდე. 
function preload (){
    this.load.image('bgMain', 'img/bgMain.jpg'); 
    //this.load.image('background', 'img/back.png'); 
    this.load.spritesheet('petIdle', 'img/petIdle.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petWalk', 'img/petWalk.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petRun', 'img/petRun.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petJump', 'img/petJump.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petSit', 'img/petSit.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petSleep', 'img/petSleep.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
    this.load.spritesheet('petAwake', 'img/petAwake.png', {
        frameWidth: 100, 
        frameHeigth: 200
    });
}

function create (){
    // თამაშის ბექრაუნდის დაყენება. 
    this.add.image(450, 300, 'bgMain'); 
    // მოთამაშის მოდელის შექმნა + X,Y კორდინატები თამაშის დაყების წერტილი
    player = this.physics.add.sprite(100, 200, 'petIdle');
    // მივანიჭოთ მოთამაშეს საზღვრები რუკას რომ ვერ გაცდეს. 
    player.setCollideWorldBounds(true);
    // მოთამაშეს შეეძლოს ოდნავ ახტომა
    player.setBounce(0.2); 


    // პლატფორმის შექმნა (სტატიკური პლატფორმა) რომელიც 
    Platform = this.physics.add.StaticGroup();

    // შევქმნათ კედლის ობიექტი.

    //შევქმნათ ანიმაცია spritesheet სურათიდან. 
    this.anims.create({
        key: 'left', 
        frames: this.anims.generateFrameNumbers('petIdle', {
            start: 1, 
            end: 3
        }), 
        frameRate: 10, 
        repeat: -1, 
    }); 
}

function update(){

}; 