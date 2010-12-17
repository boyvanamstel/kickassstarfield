/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

var Char = function() {
	this.id = Char.id++;
	
	var _element = document.createElement('div');
	_element.setAttribute('id', 'char'+this.id);
	_element.setAttribute('class', 'char');
	_element.style.left = '0px';
	_element.style.left = '0px';
	document.getElementById('canvas').appendChild(_element);
	this.getElement = function() { return _element; }

	var _x = 0;
	this.setX = function(x) {
		_x = x || 0;
		_element.style.left = _x + 'px';
	}
	this.getX = function() { return _x; }

	var _y = 0;
	this.setY = function(y) {
		_y = y || 0;
		_element.style.top = _y + 'px';
	}
	this.getY = function() { return _y; }

	var _xVelocity = 0;
	this.setXVelocity = function(xVelocity) {
		_xVelocity = xVelocity;
	}
	this.getXVelocity = function() { return _xVelocity; }

	var _yVelocity = 0;
	this.setYVelocity = function(yVelocity) {
		_yVelocity = yVelocity;
	}
	this.getYVelocity = function() { return _yVelocity; }

}; Char.id = 0;

Char.prototype.constructor = Char;

Char.prototype.move = function() {
		var element = this.getElement();	
		var x = this.getX();
		var y = this.getY();
		var xVelocity = this.getXVelocity();
		var yVelocity = this.getYVelocity();
		
		this.setX(x + xVelocity + Math.floor((Math.random() * xVelocity) - (xVelocity /2)));
		this.setY(y + yVelocity + Math.floor((Math.random() * yVelocity) - (yVelocity /2)));
		
		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;

		if(element.offsetLeft > w) this.setX(0 - element.offsetWidth );
		if(element.offsetLeft + element.offsetWidth < 0) this.setX(w);

		if(element.offsetTop > h) this.setY(0 - element.offsetHeight);	
		if(element.offsetTop + element.offsetHeight < 0) this.setY(h);
}

Char.prototype.checkAlive = function() {
		var element = this.getElement();

		if(!document.getElementById(element.getAttribute('id'))) {
			Engine.removeDelegate(this, this.move);
			Engine.removeDelegate(this, this.checkAlive);
		}
}
