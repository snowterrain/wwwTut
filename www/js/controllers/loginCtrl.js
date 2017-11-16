app.controller('loginCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    ionic.material.ink.displayEffect();
   


var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
  //--------------------------------------------
   $scope.login = function(user) {

   	$scope.showAlert('Invalid username or password.');	
   	

			

	};

});





