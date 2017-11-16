app.controller('AppCtrl', function ($scope,$state, $ionicModal, $ionicPopover, $timeout, $location,ionicMaterialInk,$ionicNavBarDelegate, $ionicSideMenuDelegate,$ionicHistory) {


    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

/*
    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });
*/
    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">IAS Checklist</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       Weekly tasks' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });


  //--------------------------------------------
   $scope.login = function(user) {

    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    

            
        if(typeof(user)=='undefined'){
            $scope.showAlert('Please fill username and password to proceed.');  
            return false;
        }

        if(user.username=='admin' && user.password=='admin'){
            // $ionicNavBarDelegate.showBackButton(false);
            //$ionicSideMenuDelegate.canDragContent(false);
            //$location.path('/app/components');
              $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.components')

        }else{
            $scope.showAlert('Invalid username or password.');  
        }
        
    };


      $scope.courses = function(user) {

        $location.path('/app/courses');
      };


});