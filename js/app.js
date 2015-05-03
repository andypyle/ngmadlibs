angular.module('madlibApp', ['ngMessages'])
	.controller('madlibCtrl', function($scope){

		$scope.clearFields = function(){
			$scope.name = '';
			$scope.jobTitle = '';
			$scope.tediousTask = '';
			$scope.dirtyTask = '';
			$scope.celebrity = '';
			$scope.uselessSkill = '';
			$scope.adjective = '';
			$scope.obnoxious = '';
			$scope.hugeNumber = '';

			$scope.genderIs = 'he';
			$scope.genderOwner = 'him';
			$scope.genderOwner2 = 'his';
		};
		
		$scope.clearFields();

		$scope.checkGender = function(gender){
			gender = $scope.gender;
			if(!gender){
				$scope.genderIs = 'he';
				$scope.genderOwner = 'him';
				$scope.genderOwner2 = 'his';
			} else {
				$scope.genderIs = 'she';
				$scope.genderOwner = 'her';
				$scope.genderOwner2 = 'her';
			}		
		}

		$scope.checkClass = function(word){
			return !word ? 'blankSpace':'';
		}

		$scope.startOver = function(){
			$scope.formIsValid = false;
			$scope.madlibForm.$submitted = null;
			
			$scope.clearFields();
		};

		$scope.formIsValid = false;
		$scope.submitted = false;

		$scope.submitMadlib = function(){
			$scope.submitted = true;
			if($scope.madlibForm.$valid){
				$scope.formIsValid = true;
			} else {
				$scope.formIsValid = false;
			}
		}
	});