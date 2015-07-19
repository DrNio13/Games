/**
 * Created by Nio on 8/7/2015.
 */

/*
* Create and return Games List
* */
function createGames(){

    var gamesList = [];

    // Create the first 50 fake Games
    for(var i=0; i<50; i++){
        gamesList.push({
            "id": i,
            "title": "skata" + i
        });
    }

    // Create the other 50 fake Games
    for(var j=50; j<100; j++){
        gamesList.push({
            "id": j,
            "title": "poutses" + j
        });
    }

    return gamesList;
}

var sk = createGames();

console.log(JSON.stringify(sk));