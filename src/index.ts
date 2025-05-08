/*
TODOS:
1: rects machen
2: rects in forschleife(doppel array bsp: let bla [[10, 10,[]]])
3: farben ändern keine bestellung(0)= blau
offene bestellung(1)= orange
fertige bestellung(2)= grün
4:
*/ 
import p5 from "p5";
let tischimage : p5.Image;
let rectarray : number[][] = [ [50, 20],[110, 20],[170, 20],[230, 20],[290, 20],[350, 20],[410, 20],
                               [50, 80],[110, 80],[170, 80],[230, 80],[290, 80],[350, 80],[410, 80],
                                                                              [350, 140],[410, 140],
                             [50, 200],[110, 200],[170, 200],      [290, 200],[350, 200],[410, 200],
                             [50, 260],[110, 260],[170, 260],      [290, 260],[350, 260],[410, 260],
                             [50, 320],[110, 320],[170, 320],      [290, 320],[350, 320],[410, 320],
                             [50, 380],[110, 380],                 [290, 380],[350, 380],[410, 380],
                             [50, 440],[110, 440],                 [290, 440],[350, 440],[410, 440],
                             [50, 500],[110, 500],                 [290, 500],[350, 500],[410, 500]];


const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
    sketch.draw = draw;
    sketch.mouseclicked = mouseclicked;
    sketch.drawRect = drawRect;
})
function preload (){
  // tischimage= p.loadImage('assets/tische-anordnung.png')
   rectarray = p.loadJSON('test.json') as number[][];
}

function setup() {
    p.createCanvas(innerWidth, innerHeight);
    
   
}
function draw (){
    //p.image(tischimage, 0, 0, innerWidth - 20, innerHeight - 20);
    mouseclicked();
    drawRect();
    
}
function mouseclicked() {
    console.log(p.mouseX);
    console.log(p.mouseY);
   
} 
function drawRect() {
    p.fill('blue');
    p.stroke('black');
    let j = 0;
    for (let i = 0; i < rectarray.length; i++) {
        j = j + 1;
        let x = rectarray[i][j];
        let y = rectarray[i][j];
        p.rect(x, y, 50, 50);
    }
}