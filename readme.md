# jQuery Wheelzoom

A small plugin for zooming IMG elements with the mousewheel/trackpad.  Wheelzoom works by scaling and positioning a background-image, after it sets the IMG element's src to a transparent png.  Wheelzoom doesn't add any extra elements to the DOM, or change the positioning of the IMG element.

## Usage:
````javascript
$('img').wheelzoom();
// or
$('img').wheelzoom({zoom:0.05});
// zoom sets the zoom percent.
````

## License
This plugin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

## Supported Browsers:
Chrome, Safari, Opera, FireFox 17+, IE9+.

## Changelog:

### v.2.0.0 - 2014/4/17
* Simplified by dropping support for having border and padding on the img element. Borders and/or padding should be applied to the parent element, rather than the img element.

### v.1.1.3 - 2014/4/13
* Minor code improvement.

### v.1.1.2 - 2013/1/31
* Fixed bug with unzoom trigger.

### v1.1.1 - 2013/1/29
* Added trigger to unzoom image: 
````javascript
	$('#example').trigger('wheelzoom.reset')
````

### v1.1.0 - 2012/11/28
* Added dragging.

### v1.0 - 2012/11/26
* Initial release.
