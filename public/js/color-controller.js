'use strict';

angular.module('Color Wheel').controller('colorController', function ($scope) {
	var vm = this;

	var init = function init() {
		vm.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
		vm.colorChanged = colorChanged;
		vm.colorHistory = [];
	};

	var colorChanged = function colorChanged() {
		console.log("color changed:", vm.color);
		vm.colorHistory.push(vm.color);

		if (vm.colorHistory.length > 50) {
			vm.colorHistory.shift();
		}
	};

	init();
	return;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9jb2xvci1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FFNUIsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsTUFBTSxFQUFFO0FBQ2hELEtBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFYixLQUFJLElBQUksR0FBRyxTQUFQLElBQUksR0FBYztBQUNuQixJQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxRQUFRLElBQUUsQ0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELElBQUUsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQy9CLElBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO0VBQ3JCLENBQUE7O0FBRUgsS0FBSSxZQUFZLEdBQUcsU0FBZixZQUFZLEdBQWM7QUFDMUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDekMsSUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDOztBQUVqQyxNQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtBQUMvQixLQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0dBQ3hCO0VBQ0YsQ0FBQTs7QUFFRixLQUFJLEVBQUUsQ0FBQztBQUNQLFFBQU87Q0FDUixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2pzL2NvbG9yLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnQ29sb3IgV2hlZWwnKVxuXG4uY29udHJvbGxlcignY29sb3JDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSkge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdm0uY29sb3IgPSAnIycrKE1hdGgucmFuZG9tKCkqMHhGRkZGRkY8PDApLnRvU3RyaW5nKDE2KTtcblx0ICAgIHZtLmNvbG9yQ2hhbmdlZCA9IGNvbG9yQ2hhbmdlZDtcblx0ICAgIHZtLmNvbG9ySGlzdG9yeSA9IFtdXG4gIFx0fVxuXG5cdHZhciBjb2xvckNoYW5nZWQgPSBmdW5jdGlvbigpIHtcblx0ICAgIGNvbnNvbGUubG9nKFwiY29sb3IgY2hhbmdlZDpcIiwgdm0uY29sb3IgKTtcblx0ICAgIHZtLmNvbG9ySGlzdG9yeS5wdXNoKCB2bS5jb2xvciApO1xuXG5cdCAgICBpZiAodm0uY29sb3JIaXN0b3J5Lmxlbmd0aCA+IDUwKSB7XG5cdCAgICAgIHZtLmNvbG9ySGlzdG9yeS5zaGlmdCgpXG5cdCAgICB9XG5cdCAgfVxuXG5cdCBpbml0KCk7XG5cdCByZXR1cm47XG59KTsiXX0=