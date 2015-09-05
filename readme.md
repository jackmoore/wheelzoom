# Wheelzoom

A small script for zooming IMG elements with the mousewheel/trackpad.  Wheelzoom works by replacing the img element's src with a transparent image, then using the original src as a background image, which can be sized and positioned. Wheelzoom is dependency free, doesn't add any extra elements to the DOM, or change the positioning of the IMG element.

## Usage:
````javascript
wheelzoom(document.querySelectorAll('img'));
// or
wheelzoom(document.querySelectorAll('img'), {zoom:0.05});
// zoom sets the zoom percent.
````

## License
[MIT License](http://opensource.org/licenses/MIT)

## Supported Browsers:
Chrome, Safari, Opera, FireFox 17+, IE9+.

## Changelog:

##### v.3.0.1 - 2015/09/05
* Fixed issue with src URLs that contain single quotes. Fixes #13.

##### v.3.0.0 - 2014/10/14
* Removed jQuery dependency
* Added 'wheelzoom.destroy' event for removing changes that wheelzoom has made to an element.

##### v.2.0.1 - 2014/9/9
* Merged bugfix to wrap background-image path in quotes.  Ref #8.

##### v.2.0.0 - 2014/4/17
* Simplified by dropping support for having border and padding on the img element. Borders and/or padding should be applied to the parent element, rather than the img element.

##### v.1.1.3 - 2014/4/13
* Minor code improvement.

##### v.1.1.2 - 2013/1/31
* Fixed bug with unzoom trigger.

##### v1.1.1 - 2013/1/29
* Added trigger to unzoom image: 
````javascript
	$('#example').trigger('wheelzoom.reset')
````

##### v1.1.0 - 2012/11/28
* Added dragging.

##### v1.0 - 2012/11/26
* Initial release.
