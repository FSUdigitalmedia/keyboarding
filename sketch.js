let block;

function setup() {
    let canvas = new Canvas("fullscreen");
    world.gravity.y = 10;

    block = new Sprite();
    block.collider = "kinematic";
    block.width = 160;
    block.y = height/3;
}

function draw() {
    clear();

    if (kb.pressed('B')) {
        let ball = new Sprite();
        ball.diameter = 40;
        ball.x = random(width/2-20, width/2+20);
        ball.y = -20;
        ball.rotationDrag = 10;
    }

    if (kb.pressed('D')) {
        block.rotationSpeed = 10
    }

    if (kb.pressed('L')) {
        block.rotationSpeed = 0
    }

}

