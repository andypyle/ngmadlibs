angular.module('madlibApp', [])
	.controller('madlibCtrl', function($scope){
		
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

		$scope.submitMadlib = function(){

		}
	});