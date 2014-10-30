function appCtrl ($scope) {



	$scope.data = {};
	/* $scope.data.city = 'Paris';
	$scope.data.month = 'England';
	$scope.data.country = 'October';
	$scope.data.train = 'TGV';
	$scope.data.museum = 'Louvre';
	$scope.data.frenchfood = 'crepe';
	$scope.data.night = 'concert';
	$scope.data.view = 'eiffel';
	$scope.data.frenchlove = 'amour'; */

	var show_Form = true;


	$scope.submit = function() {
		//console.log('FormSubmitted: ', $scope.data);
		if ($scope.parisForm.$valid) {
			show_Form = true;
		} else {
			show_Form = false;
		}
	};

	$scope.reset = function() {
		// When button clicked clear form
		$scope.data = {}; // sets data to an empty object
		show_Form = true;
		// $scope.$apply();
	};



	$scope.showForm = function(){
			return show_Form;
		}; // returns to the original input page

	


}



angular 
.module('madlibsApp',[])
.controller('appCtrl', appCtrl);


