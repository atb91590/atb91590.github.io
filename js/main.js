(function(){
	var app = angular.module('mainModule',
		['menubarDirective','profileDirective','skillDirective','workDirective','projectDirective','educationDirective','awardDirective']);

	var metaItems = {
		description: "Alex Taing Bu Software Engineer",
		author: "Alex Bu"
	}

	app.controller('MainController', function($scope){
		this.metaTags = metaItems;
		this.getMetaDescription = function(){
			return this.metaTags.description;
		}
		this.getMetaAuthor = function(){
			return this.metaTags.author;
		}
		// Start: Activate Draggable Content------------------------------------------------
		interact('.draggable').draggable({
		    inertia: true,
		    restrict: {
		      restriction: "parent",
		      endOnly: true,
		      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		    },
		    onmove: function(event){
			    var target = event.target;
			    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
			    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
			    target.style.webkitTransform = target.style.transform = 'translate('+x+'px,'+y+'px)';
			    target.setAttribute('data-x', x);
			    target.setAttribute('data-y', y);
		    },
		    onend: function (event) {
		      var textEl = event.target.querySelector('p');
		      textEl && (textEl.textContent =
		        'moved a distance of '
		        + (Math.sqrt(event.dx * event.dx +
		                     event.dy * event.dy)|0) + 'px');
		    }
		});
		// End: Activate Draggable Content------------------------------------------------

	    // Hash Function used to generate unique ids for DOM elements
	    this.hashString = function(str) {
			var hash = 0, i, chr, len;
			if (str.length == 0) return hash;
			for (i = 0, len = str.length; i < len; i++) {
				chr   = str.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash;
	    }
		this.isNumeric = function(num){
			return !isNaN(num) && isFinite(num);
		}
	    this.closeAlert = function(){
	    	$('#alert').fadeTo(300, 0.5).slideUp(500, function () {
                $('#alert').alert('close');
            });
	    }
	});
})();