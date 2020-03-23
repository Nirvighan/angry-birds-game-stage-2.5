//create the box class (child class ) 

class Box extends BaseClass {
  constructor(x, y, width, height) {
    // call the constructor of parent class
    super(x, y, width, height);
    this.image = loadImage("sprites/wood1.png");

  }


}