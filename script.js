class Bal {
   constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
   }
   


   show(){
       fill(100,255,255);
       ellipse(this.x,this.y,this.diameter,this.diameter);
   }

   update(){
     this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

   if (this.x <= 0 || this.x >= 1280 ) {
      this.speedX = this.speedX * -1
   }

   if (this.y <= 0 || this.y >= 720) {
      this.speedY = this.speedY * -1;
   }
   if (this.x +40 >= blokje.y && this.x +40 <= blokje.y+50){
       this.speedX = this.speedX * -1;
   }

   if (this.y +40 >= blokje.x && this.y +40 <= blokje.x+100 ){
       this.speedY = this.speedY * -1;
   }


   }
}

class Blok {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width= width;
        this.height = height;
    }

    show() {
        fill(255,255,255);
        rect(this.x,this.y,this.width,this.height);
        }
    
}


var bal = new Bal(200, 640, 3, 6);
var blokje = new Blok(40,80,100,50);

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}
 

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(0,0,0);
  
  // stel vulkleur in  

   // teken een cirkel
   bal.show();
   bal.update();

   blokje.show();
   

   // update positie
  
}