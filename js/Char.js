/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

var Char = function() {
	this.id = Char.id++;
	
	this.element = document.createElement('div');
	this.element.setAttribute('id', 'char'+this.id);
	this.element.setAttribute('class', 'char');
	this.element.style.left = '0px';
	this.element.style.left = '0px';
	document.getElementById('canvas').appendChild(this.element);

	this.x = 0;
	this.setX = function(x) {
		this.x = x || 0;
		this.element.style.left = this.x + 'px';
	}
	this.y = 0;
	this.setY = function(y) {
		this.y = y || 0;
		this.element.style.top = this.y + 'px';
	}
	this.xVelocity = 0;
	this.yVelocity = 0;

	this.move = function() {
		this.setX(this.x + this.xVelocity + Math.floor((Math.random() * this.xVelocity) - (this.xVelocity /2)));
		this.setY(this.y + this.yVelocity + Math.floor((Math.random() * this.yVelocity) - (this.yVelocity /2)));

		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;

		if(this.element.offsetLeft + this.element.offsetWidth > w) this.setX(0);
		if(this.element.offsetLeft + this.element.offsetWidth < 0) this.setX(w - this.element.offsetWidth);

		if(this.element.offsetTop + this.element.offsetHeight > h) this.setY(0);	
		if(this.element.offsetTop + this.element.offsetWidth < 0) this.setY(h - this.element.offsetHeight);	
	}

	this.checkAlive = function() {
		if(!document.getElementById(this.element.getAttribute('id'))) {
			Engine.removeDelegate(this, this.move);
			Engine.removeDelegate(this, this.checkAlive);
		}
	}
}; Char.id = 0;
