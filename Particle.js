
class Particle
{
    constructor(x, y, r, fill_color)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.fillColor = fill_color;
        var options = 
        {
            density: 0.2,
            restitution: 0.5,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        fill(this.fillColor);
        circle(pos.x, pos.y, this.r);
    }

}