angular.module('trainingcomponentsSlideshow', ['servoy']).directive('trainingcomponentsSlideshow', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel'
			},
			controller: function($scope, $element, $attrs) { },
			link: function($scope, $element, $attrs) {

				$scope.$watch('model.slides', function(newValue, oldValue) {
					console.log(newValue);
						if (newValue) {
							showSlides($scope.slideIndex);
						}
					});

				$scope.slideIndex = 1;

				function plusSlides(n) {
					console.log(n);
					showSlides($scope.slideIndex += n);
				}

				function currentSlide(n) {
					showSlides($scope.slideIndex = n);
				}

				function showSlides(n) {
					var i;
					var slides = document.getElementsByClassName("mySlides");
					var dots = document.getElementsByClassName("dot");
					if (n > slides.length) {
						$scope.slideIndex = 1
					}
					if (n < 1) {
						$scope.slideIndex = slides.length
					}
					for (i = 0; i < slides.length; i++) {
						slides[i].style.display = "none";
					}
					for (i = 0; i < dots.length; i++) {
						dots[i].className = dots[i].className.replace(" active", "");
					}
					
					slides[$scope.slideIndex - 1].style.display = "block";
					dots[$scope.slideIndex - 1].className += " active";
				}

			},
			templateUrl: 'trainingcomponents/slideshow/slideshow.html'
		};
	})