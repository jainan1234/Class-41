class Game{
    constructor(){
    }
    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        })
    }
    //writes the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)

        car1.addImage(carImg1)
        car2.addImage(carImg2)
        car3.addImage(carImg3)
        car4.addImage(carImg4)

        cars = [car1, car2, car3, car4]
    }
    
    play(){
        form.Hide();
        Player.getPlayerInfo()
        //!== not equal to
        if(players !== undefined){
            background("blue")
            image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5)
           var index = 0
           var x = 175      
           var y 
           for(var i in players){
               index = index+1
               x = x+200
               y = displayHeight - players[i].distance
               cars[index-1].x = x
               cars[index-1].y = y
               if(index === player.index){
                   fill("brown")
                   ellipse(x, y, 60)
                   camera.position.x = displayWidth/2
                   camera.position.y = cars[index-1].y
               }
           }
        }
        player.getCarsAtEnd()
        if(player.distance>3860){
            gameState = 2
            player.rank++
            Player.updateCarsAtEnd(player.rank)
        }

        if(keyDown("up")&& player.index !== null){
            player.distance = player.distance+10
            player.updateInfo()
        }
        drawSprites()
    }
    end(){
        console.log("GAME OVER")
        console.log(player.rank)
    }
}

//i get it