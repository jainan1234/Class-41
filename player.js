class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
    }
    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }
    //writes the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    //writes the player name  and distance to the database
    updateInfo(){
        database.ref("players/player" + this.index).set({
            name: this.name,
            distance: this.distance
        })
    }

    //reads all the players info from the database
    static getPlayerInfo(){
        database.ref("players").on("value",(data) => {
            players = data.val();
        })
    }

    //reads the CarsAtEnd value from the database
    getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value",(data)=>{
            this.rank = data.val();
        })
    }
    //writes the CarsAtEnd value to the database
    static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd: rank
        })
    }
}
