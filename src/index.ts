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
let rectarray : number[][] = [];


const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
    sketch.draw = draw;
    sketch.mouseclicked = mouseclicked;
})
function preload (){
   tischimage= p.loadImage('assets/tische-anordnung.png')
   rectarray = p.loadJSON('test.json') as number[][];
}

function setup() {
    p.createCanvas(innerWidth, innerHeight);
    mouseclicked()
   
}
function draw (){
    p.image(tischimage, 0, 0, innerWidth - 20, innerHeight - 20);
    
}
function mouseclicked() {
   
    
   
} 