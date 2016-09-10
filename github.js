/** Name : Angular Github Userinfo Directive
 *  Description: A Simple Github Directive in Angular JS.
 *  Author : Krijesh PV.
 *  Email :pvkrijesh@gmail.com
**/
(function() {

 //Module Init
	var myApp = angular.module("myGithub",[]);
//Directive decalration
	myApp.directive('gitProfile', ['$http', function($http) {
		return {
				restrict: 'E',
				transclude: true,
				replace: true,     
				scope:{
						userName:'=',
				},
	
				controller:function($scope) {	
								var commongitUrl = "https://api.github.com/users/"	
								var userapiUrl = (commongitUrl +$scope.userName);
        
								$http({method: 'GET', url:userapiUrl}).then(function (result) {											                        
									$scope.avatarurl = result.data.avatar_url;
									$scope.avatarlogin = result.data.login;
									$scope.avatarfollowers = result.data.followers;
									$scope.avatarfollowing = result.data.following;
						   
                        }, function (result) {
                            alert("Error: Empty Response");
                        });
				},
				template: "<div  style='border:solid 2px; width:300px'> <img style='margin-left:40px;margin-top:40px' ng-src='{{avatarurl}}'></img><h6 style='margin-left:100px;'>{{avatarlogin}}</h6> <span>Followers :{{avatarfollowers}}  Following :{{avatarfollowers}}</span></div>",

			}
	}]);

}());