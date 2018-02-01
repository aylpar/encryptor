app.controller('AppController', ['$mdMedia', '$mdSidenav', function($mdMedia, $mdSidenav){

    var controller = this;

    controller.$mdMedia = $mdMedia;
    
      controller.screenIsExtraSmall = $mdMedia('xs');
      controller.screenIsSmall = $mdMedia('sm');
      controller.screenIsMedium = $mdMedia('md');
      controller.screenIsLarge = $mdMedia('lg');
      controller.screenIsExtraLarge = $mdMedia('xl');
    
      controller.openLeftMenu = function() {
    $mdSidenav('left').toggle();
    };

}]);