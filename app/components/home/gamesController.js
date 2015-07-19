
var gamesApp = angular.module('gamesApp',['ui.bootstrap']);

gamesApp.controller('GamesController',['$scope','$http','$log', function($scope,$http,$log){

    /*
    * Initialize array allGames and filteredGames
    *
    * */
    $scope.allGames = [];
    $scope.filteredGames = [];

    /*
    * Set parameters for 100 games
    *
    * */
    $scope.currentPage = 1;

    // Games per page
    $scope.numPerPage = 20;

    // Limit the pagination number
    $scope.maxSize = 5;


    /*
    * Get the json file with the games
    * */
    $http.get('games.json').success(function(data){

        $scope.allGames = data;

        // Set the first filteredGames to be the first 20 games
        $scope.filteredGames = $scope.allGames.slice(0, 20);

        // All categories of the data set
        $scope.categories = [];

        data.forEach(function(game){

            // Add only unique categories
            if ($scope.categories.indexOf(game.categoryDesc) == -1){

                $scope.categories.push(game.categoryDesc);
            }

        });

    });



    // To be deleted when uploading to Production server
    $scope.path = "https://assosplay.avacsum.com/Casino";

    /*
    * Use Angular $watch to change pagination and the set of data
    * */
    $scope.$watch('currentPage + numPerPage', function() {

        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredGames = $scope.allGames.slice(begin, end);

        /*if ($scope.getGamesByCategory() === true){
            $log.log('nai malaka');
        }
        else {
            $log.log('oxi malaka');
        }*/



    });



    /*
    * Show only the specific category of games
    * */
    $scope.getGamesByCategory = function(catClicked){

        var used = false;

        // store all the data
        var allGames = $scope.allGames;

        var categoryGames = [];

        // for every game in data
        allGames.forEach(function(game){

            // check all properties of the game
            for(var prop in game){

                // check if the game has enumerable properties - works without this if - maybe redundant
                if (game.hasOwnProperty(prop)){

                    // the category that was clicked
                    if(game[prop] === catClicked){
                       //$log.log(game);
                        //return game;
                        categoryGames.push(game);

                    }
                }
            }

        });

        $scope.filteredGames = categoryGames;

        //used = true;
        return used;

    };


}]);