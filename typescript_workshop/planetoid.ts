import IPlanetoid from "./iplanetoid";
import Size from "./size";

class Planetoid implements IPlanetoid {
    private size: Size = Size.SMALL;
    private radius: number = 312312;
    public getCircumference() {
        return this.radius * Math.PI * 2;
    }
}

export default Planetoid;