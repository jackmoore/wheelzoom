// Wheelzoom 0.0.1
// (c) 2012 jacklmoore.com | license: www.opensource.org/licenses/mit-license.php
!function($){
	var transparent = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
	var defaults = {
		zoom: 0.10
	};
	
	$.fn.wheelzoom = function(options){
		var settings = $.extend({}, defaults, options);

		return $(this).each(function(){
			var img = this;
			var $img = $(img);

			function loaded() {
				var width = $img.width();
				var height = $img.height();
				var bgWidth = width;
				var bgHeight = height;
				var bgPosX = 0;
				var bgPosY = 0;

				var offsetBorderX = parseInt($img.css('border-left-width'),10);
				var offsetBorderY = parseInt($img.css('border-top-width'),10);

				var offsetPaddingX = parseInt($img.css('padding-left'),10);
				var offsetPaddingY = parseInt($img.css('padding-top'),10);

				$img.css({
					background: "url("+img.src+") 0 0 no-repeat",
					backgroundSize: width+'px '+height+'px',
					backgroundPosition: offsetPaddingX+'px '+offsetPaddingY+'px'
				});

				// Explicitly set the size to the current dimensions,
				// as the src is about to be changed to a 1x1 transparent png.
				img.width = img.width || img.naturalWidth;
				img.height = img.height || img.naturalHeight;
				img.src = transparent;

				img.onwheel = img.onmousewheel = function(e) {
					var offsetX;
					var offsetY;

					e.preventDefault();

					// Normalize
					if (e.offsetX != null) {
						offsetX = e.offsetX;
						offsetY = e.offsetY;
					} else {
						var offsetParent = $img.offset();
						offsetX = e.pageX - offsetParent.left;
						offsetY = e.pageY - offsetParent.top;
					}
					if (e.wheelDeltaY == null) {
						e.wheelDeltaY = -e.deltaY;
					}

					offsetX -= offsetBorderX + offsetPaddingX;
					offsetY -= offsetBorderY + offsetPaddingY;

					// Record the offset between the bg edge and cursor:
					var bgCursorX = offsetX - bgPosX;
					var bgCursorY = offsetY - bgPosY;
					
					// Use the previous offset to get the percent offset between the bg edge and cursor:
					var bgRatioX = bgCursorX/bgWidth;
					var bgRatioY = bgCursorY/bgHeight;

					// Update the bg size:
					if (e.wheelDeltaY > 0) {
						bgWidth += bgWidth*settings.zoom;
						bgHeight += bgHeight*settings.zoom;
					} else {
						bgWidth -= bgWidth*settings.zoom;
						bgHeight -= bgHeight*settings.zoom;
					}

					// Take the percent offset and apply it to the new size:
					bgPosX = offsetX - (bgWidth * bgRatioX);
					bgPosY = offsetY - (bgHeight * bgRatioY);

					// Prevent zooming out beyond the starting size
					if (bgWidth <= width || bgHeight <= height) {
						bgWidth = width;
						bgHeight = height;
						bgPosX = bgPosY = 0;
					}

					if (bgPosX > 0) {
						bgPosX = 0;
					} else if (bgPosX < width - bgWidth) {
						bgPosX = width - bgWidth;
					}

					if (bgPosY > 0) {
						bgPosY = 0;
					} else if (bgPosY < height - bgHeight) {
						bgPosY = height - bgHeight;
					}

					img.style.backgroundSize = bgWidth + 'px ' + bgHeight + 'px';
					img.style.backgroundPosition = (bgPosX+offsetPaddingX) + 'px ' + (bgPosY+offsetPaddingY) + 'px';
				};

			}

			if (img.complete) {
				loaded();
			} else {
				$img.on('load.zoom', function(){
					$img.off('load.zoom');
					loaded();
				});
			}

		});
	};

	$.fn.wheelzoom.defaults = defaults;

}(window.jQuery);