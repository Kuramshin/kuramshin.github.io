(function(window){
	var Slider = function() {



	this.init=function(config) {
		var domNode = config.domNode;
		var dom = config.dom = {
			images:domNode.querySelector('.slider__images'),
			imagesWrap:domNode.querySelector('.slider__images-wrap'),
			prev:domNode.querySelector('.slider__pagerPrev'),
			next:domNode.querySelector('.slider__pager_next'),
			pagination:domNode.querySelector('.slider__pagination'),

		};
		config.current = config.current || 0;
		config.count = config.dom.images.children.length;
		config.width = dom.images.offsetWidth;
		this.config = config;

		console.log(config);
	};

		this.__sliderLeft = function() {

		var imagesWrap = this.config.imagesWrap;
			imagesWrap.
		}
	};
	window.Slider = new Slider ();

 })(window);
