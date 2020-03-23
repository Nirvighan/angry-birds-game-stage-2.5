//create the bird class (child class)

class Bird extends BaseClass
{
  constructor(x,y)
  {
    super(x,y,50,50);

    //load the image for bird
    this.image = loadImage("sprites/bird.png");
  }

  display()
  {

    //make the bird move with mouse
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
    super.display();
  }
}