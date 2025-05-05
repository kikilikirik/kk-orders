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
let tischimage = p5.Image;
let 

const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.prelaod = prelaod;
});
function prelaod (){

}

function setup() {
    p.createCanvas(400, 400);
    p.background("red");
}
