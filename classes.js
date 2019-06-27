var imgBottle;
var clean = true;
const bottleWidth = 977 /10 , bottleHeigth = 689/10
var speed = 3;
var blockPos = [];
const db1 = 30, db2 = -10, db3 = -bottleWidth + 15;
class Bottle{
	constructor(x, y) {
		this.x = x;
		this.y = y;
        this.live = true;
	}
	falling(){
        if(clean) {
            image(imgBottle, this.x, this.y, bottleWidth, bottleHeigth);
            for(var i1 in blockPos){
                if(this.y >= blockPos[i1][1] - bottleHeigth + db1 && this.x >= blockPos[i1][0] + db2
                    && this.x <= blockPos[i1][0] + bottleWidth + db3){
                    if(this.live){
                        this.live = false;
                        blockPos.push([this.x, this.y]);
                    }
                    return;
                }       
            }
            if(this.y >= height - bottleHeigth*4){
                if(this.live){
                    this.live = false;
                    blockPos.push([this.x, this.y]);
                }
                return;
            }
            this.y+=speed;
        }

    }
    
    collect() {
        if(this.y >= height) {
            clean = false;
        }
        if(!clean) {
            speed = 0;
        }
    }
}