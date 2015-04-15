(function(){
	var app = angular.module('mainModule',['menubarDirective','profileDirective','skillDirective','workDirective','projectDirective','educationDirective','awardDirective']);

	var metaItems = {
		description: "Alex Taing Bu Software Engineer",
		author: "Alex Bu"
	}

	app.controller('MainController', function($scope, $location, anchorSmoothScroll){
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
	})
	.service('anchorSmoothScroll', function(){
	    this.scrollTo = function(eID) {
	        var startY = currentYPosition();
	        var stopY = elmYPosition(eID);
	        var distance = stopY > startY ? stopY - startY : startY - stopY;
	        if (distance < 100) {
	            scrollTo(0, stopY); return;
	        }
	        var speed = Math.round(distance / 100);
	        if (speed >= 20) speed = 20;
	        var step = Math.round(distance / 25);
	        var leapY = stopY > startY ? startY + step : startY - step;
	        var timer = 0;
	        if (stopY > startY) {
	            for ( var i=startY; i<stopY; i+=step ) {
	                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
	            } return;
	        }
	        for ( var i=startY; i>stopY; i-=step ) {
	            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	        }
	        
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