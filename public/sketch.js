var socket;

function setup() {
    createCanvas(600, 400);
    background(51);
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);

}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 12);
    ellipse(data.x, data.y, 35, 35);
}


function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);
    
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
} 

function draw() {
}