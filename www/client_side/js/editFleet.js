function editFleetCtrl($scope, $interval, NavbarService, SessionService){
    NavbarService.initializeNavbar($scope);
    // $scope.username = SessionService.getCurrentUser();
    $scope.username = "kwberner"; // TODO: Comment out for demo
    $scope.vehicleIDs = [];

    // $scope.$apply($scope.getVehicleIDs);

    $scope.getVehicleIDs = function(){
        var url = "http://35.193.191.2:8080/manager/" + $scope.username;
        $.get(url, function(data, status){
            $scope.vehicleIDs = [];
            for(i = 0; i < data.length; i++){
                if(data[i].uid != null){
                    $scope.vehicleIDs.push(data[i].uid);
                }
            }
        });
    }

    $interval(function(){
        $scope.getVehicleIDs();
    }, 500);

    $scope.delete = function(vehicleID){
        alert("Delete" + vehicleID);
    }
}

angular
  .module('editFleet', ['NavbarService', 'SessionService'])
  .controller('editFleetCtrl', editFleetCtrl);
