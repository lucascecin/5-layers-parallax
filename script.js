const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5

const backgroundLayer1 = new Image()
backgroundLayer1.src = 'img/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = 'img/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = 'img/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = 'img/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = 'img/layer-5.png'

// 1º criar classe Layer, para depois criar 5 instâncias e colocar todas num array, para desenhá-las

class Layer {
    
    constructor(image, speedModifier) {
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width // inicia onde termina a primeira = 2400
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }
    
    update() {
        
        //recalculando this.speed caso haja mudança no meio no jogo
        this.speed = gameSpeed * this.speedModifier
        
        //reset da imagem
        if (this.x <= -this.width) {
            this.x = 0
        }
        this.x -= this.speed

        
    }
    draw() {
       
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)

    }
}


const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1.1)

var gameObjects = [layer1, layer2, layer3, layer4, layer5]


// loop
function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    
    gameObjects.forEach(object => {     // arrow function syntax
        object.update()
        object.draw()
    })

    requestAnimationFrame(animate)
}
animate()




