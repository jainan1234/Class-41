class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Enter Your Name");
        this.button = createButton("Play");
        this.reset = createButton("Reset");
        this.greeting = createElement("h3")
    }
    display(){
        //dom library
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-100, 0);
        this.reset.position(displayWidth-100, 20);
        this.input.position(displayWidth/2-100,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
            this.greeting.html("Hi "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(() => {
            player.updateCount(0)
            game.updateState(0)
            player.updateCarsAtEnd(0)
        })
    }
    Hide(){
        this.title.hide();
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        }
    }

