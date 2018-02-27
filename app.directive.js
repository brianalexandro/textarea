angular.module('ngApp').directive('uiTextarea', function($timeout) {
	return {
		transclude : true,
		replace    : true,
		restrict   : 'E',
		template   : function(element, attrs) {
        	return '<textarea class="wrapper-textarea"></textarea>';
		},
		link : function($scope, element, attrs) {

	        $scope.init = function() {
	        	element.bind("$destroy", function() {
		            $scope.$destroy();
		        });

		        $scope.initialHeight = $scope.initialHeight || element[0].style.height;
		        element.on("input change", $scope.resize);
            	$timeout($scope.resize, 0);
	        }

            $scope.resize = function() {
                element[0].style.height = $scope.initialHeight;
                element[0].style.height = "" + element[0].scrollHeight + "px";
            };

	        $scope.init();
	    }
	};
});