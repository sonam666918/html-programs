 let canvas = document.querySelector("canvas")
let pen =  canvas.getContext("2d")
//pen.fillStyle="red"
//pen.fillRect(50,50,50,50)
//pen.clearRect(50,150,50,50)

let snakecells=[[0,0],[50,0]]
let  cell=50
function draw(){
    for(let i of snakeCells){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)

        
    }
}

function update(){

}

