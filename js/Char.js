var Char = function() {
	this.id = Char.id++;
	
	this.element = document.createElement('div');
	this.element.setAttribute('id', 'char'+this.id);
	this.element.setAttribute('class', 'char');
	document.getElementById('canvas').appendChild(this.element);

	this.x = 0;
	this.setX = function(x) {
		this.x = x;
		this.element.style.left = this.x + 'px';
	}
	this.y = 0;
	this.setY = function(y) {
		this.y = y;
		this.element.style.top = this.y + 'px';
	}
	this.xVelocity = 0;
	this.yVelocity = 0;

	this.move = function() {
		this.x += this.xVelocity + Math.floor(Math.random() * this.xVelocity - this.xVelocity /2);
		this.element.style.left = this.x + 'px';

		this.y += this.yVelocity + Math.floor(Math.random() * this.yVelocity - this.yVelocity /2);
		this.element.style.top = this.y + 'px';

		if(this.element.offsetLeft + this.element.offsetWidth > window.innerWidth) this.x = 0;
		if(this.element.offsetLeft + this.element.offsetWidth < 0) this.x = window.innerWidth - this.element.offsetWidth;	


		if(this.element.offsetTop + this.element.offsetHeight > window.innerHeight) this.y = 0;	
		if(this.element.offsetTop + this.element.offsetWidth < 0) this.y = window.innerHeight - this.element.offsetHeight;	
	}

	this.checkAlive = function() {
		if(!document.getElementById(this.element.getAttribute('id'))) {
			Engine.removeDelegate(this, this.move);
			Engine.removeDelegate(this, this.checkAlive);
		}
	}
}; Char.id = 0;
