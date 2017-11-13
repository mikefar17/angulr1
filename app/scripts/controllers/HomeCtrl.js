(function() {
    function HomeCtrl(Room) {
        var home =this;
        home.rooms = Room.all;
        home.currentRoom = null;
        
        home.setCurrentRoom = function(room) {
            home.currentRoom = room;
        }
    }   

    angular
        .module('angular1-project')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();