(function() {
    function HomeCtrl(Room) {
        var home =this;
        home.rooms = Room.all;
    }

    angular
        .module('angular1-project')
        .controller('HomeCtrl', ['Room',HomeCtrl]);
})();