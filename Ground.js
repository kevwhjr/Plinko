class Ground 
{
  constructor(x, y, width, height, fill_color) 
  {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.fillColor = fill_color;
    World.add(world, this.body);
  }

  display() 
  {
    var pos = this.body.position;
    rectMode(CENTER);
    fill(this.fillColor);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
