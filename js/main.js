(function(){
	var app = angular.module('mainModule',['menubarDirective','profileDirective','skillDirective','workDirective','projectDirective','educationDirective','awardDirective']);

	var metaItems = {
		description: "Alex Taing Bu Software Engineer",
		author: "Alex Bu"
	}

	var spinnerImage = 'img/spinner.gif';

	app.controller('MainController', function($scope, $location, anchorSmoothScroll){
		this.spinner = spinnerImage;
		this.metaTags = metaItems;
		this.getMetaDescription = function(){
			return this.metaTags.description;
		}
		this.getMetaAuthor = function(){
			return this.metaTags.author;
		}

		var gpaEgg = new Konami();
		gpaEgg.code = function(this){
			this.konami=true;
		}
		gpaEgg.load();

		// Start: Activate Draggable Profile Pic------------------------------------------------
		interact('#profPic').draggable({
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
		// End: Activate Draggable Profile Pic------------------------------------------------

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

		this.closeDropDown = function(){
			var bar = angular.element(document.getElementById('menubar'));
			bar.collapse('hide');
		}
		this.gotoElement = function (eID){
	      $location.hash('bottom');
	      anchorSmoothScroll.scrollTo(eID);
	    };
	    this.closeAlert = function(){
	    	$('#alert').fadeTo(300, 0.5).slideUp(500, function () {
                $('#alert').alert('close');
            });
	    }
	    this.toggleDropMenu = function(id){
			var menu = $('#'+id);
	    	if (menu.is(':visible')){
		    	menu.fadeTo(1, 0.5).slideUp(200, function () {
	                menu.hide();
	            });
	    	}
	    	else {
	    		menu.slideDown(200).fadeTo(1, 1, function(){
	    			menu.show();
	    		});
	    	}
		}
	})
	.directive('loadSpinner',function(){
		return {
			restrict: 'A',
			link: function(scope, element){
				element.on('load',function(){
					element.removeClass('isLoading');
					element.addClass('isLoaded');
					element.parent().find('.spinner').remove();

				});
				scope.$watch('ngSrc',function(){
					element.addClass('isLoading');
				});
			}
		};
	})
	.service('anchorSmoothScroll', function(){
	    this.scrollTo = function(eID) {
	        var startY = currentYPosition();
	        var stopY = elmYPosition(eID);
	        var distance = stopY > startY ? stopY - startY : startY - stopY;
	        var speed = Math.round(distance / 100);
	        if (speed >= 20) speed = 20;
	        var step = 1;
	        var leapY = stopY > startY ? startY + step : startY - step;
	        var timer = 0;
	        if (stopY > startY) 
	            for (var i=startY; i<stopY; i+=step, step*=1.05) {
	                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	                leapY += step; 
	                if (leapY > stopY) 
	                	leapY = stopY; timer++;
	            }
	        else
	        	for (var i=startY; i>stopY; i-=step, step*=1.05) {
		            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		            leapY -= step; 
		            if (leapY < stopY) 
		            	leapY = stopY; timer++;
		        }
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	        
	        function currentYPosition() {
	            // Firefox, Chrome, Opera, Safari
	            if (self.pageYOffset) return self.pageYOffset;
	            // Internet Explorer 6 - standards mode
	            if (document.documentElement && document.documentElement.scrollTop)
	                return document.documentElement.scrollTop;
	            // Internet Explorer 6, 7 and 8
	            if (document.body.scrollTop) return document.body.scrollTop;
	            return 0;
	        }
	        
	        function elmYPosition(eID) {
	            var elm = document.getElementById(eID);
	            var y = elm.offsetTop;
	            var node = elm;
	            while (node.offsetParent && node.offsetParent != document.body) {
	                node = node.offsetParent;
	                y += node.offsetTop;
	            } return y;
	        }

	    };
	    
	});
})();