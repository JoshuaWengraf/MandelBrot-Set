function checkIfBelongsToSet(c) {
    let maxIterations = 100;

    let belongsToSet;

    let z = 0
    for(let i = 0; i < maxIterations; i++) {
        z = math.multiply(z,z)
        z = math.add(z,c)

        if(math.abs(z) > 2){
            belongsToSet = false
            break;
        }
    }

    if (belongsToSet === false) return false 
    else return true;

  }

myCanvas = document.getElementById('canvas')
const ctx = myCanvas.getContext('2d');

let magnificationFactor = 200;
let xOffset = 2.25;
let yOffset = 1.5;

for (let x = 0; x < myCanvas.width; x++){
    for (let y = 0; y < myCanvas.height; y++){
        let c = math.complex(x/magnificationFactor - xOffset, y/magnificationFactor - yOffset)

        let belongsToSet = checkIfBelongsToSet(c)

        if (belongsToSet == true){
            ctx.fillStyle = 'teal';
            ctx.fillRect(x,y, 1,1);  
        } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(x,y, 1,1);  
        }
    } 
}
    