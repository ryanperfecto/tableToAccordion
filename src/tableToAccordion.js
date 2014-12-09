(function($){

	$.fn.extend({
		// Which options should be passed? 
		tableToAccordion: function(options) {
			var defaults = {
				parentClass: 	'TTAParent',
				childClass:		'TTAChild',
				headerClass: 	'TTASectionHeader',
				fadeEnabled:	true,
				fadeTime:		100
			};

			var options = $.extend(defaults, options);

			// Add the parent class to each of the headers
			$('.TTASectionHeader').addClass(options.parentClass);

			// Add the child class to each of the children
			$('.'+options.parentClass).each(function() {
				$(this).parent('tr').next().addClass(options.childClass);
			});
			
			// Hide all of the children
			$('.'+options.childClass).hide();

			$('.'+options.parentClass+' a').click(function() {
				if(options.fadeEnabled === true) {
					$(this).parent('td').parent('tr').next().fadeToggle(options.fadeTime);
				} else {
					$(this).parent('td').parent('tr').next().toggle();
				}
				$(this).toggleClass('down');
			});
		}
	});

})(jQuery);
