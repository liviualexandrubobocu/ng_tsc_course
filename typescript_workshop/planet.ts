import Planetoid from "./planetoid";
import Size from "./size";

class Planet extends Planetoid {
    private size: Size = Size.LARGE;
    public getOrbit() {
        console.log("new orbit");
    }
}

export default Planet;