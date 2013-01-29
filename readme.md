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

### v1.1.1 - 2012/11/28
* Added trigger to unzoom image: `$('#example').trigger('wheelzoom.reset')`

### v1.1.0 - 2012/11/28
* Added dragging.

### v1.0 - 2012/11/26
* Initial release.
