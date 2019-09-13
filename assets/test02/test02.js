(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test02_atlas_", frames: [[400,837,198,195],[200,837,198,196],[0,837,198,196],[0,0,1993,835]]}
];


// symbols:



(lib.FME01 = function() {
	this.initialize(ss["test02_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rhl_01 = function() {
	this.initialize(ss["test02_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sls_01 = function() {
	this.initialize(ss["test02_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.stellarfuturesremake0102 = function() {
	this.initialize(ss["test02_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.WhiteOverlay01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnjNQQlkjJhumFQhumFDJlgQDIlgGJhqQGIhrFkDIQFlDJBtGGQBvGFjJFgQjJFfmJBrQiIAliDAAQj4AAjpiDg");
	this.shape.setTransform(98.851,97.9189);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.7,195.8);


(lib.rectangle01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj/BeIAAi7IH/AAIAAC7g");
	this.shape.setTransform(25.575,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,18.8);


(lib.Overlay02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq2KzQkgkeAAmVQAAmUEgkeQEgkeGWAAQGXAAEfEeQEhEeAAGUQAAGVkhEeQkfEemXAAQmWAAkgkeg");
	this.shape.setTransform(98.275,97.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.6,195.5);


(lib.Lines01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C4C4").ss(3,1,1).p("A2uHWIWz2zAgYPeIAn+dAWvHqI2q29");
	this.shape.setTransform(145.5,98.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,294,201);


(lib.button01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("EgkFAJdIAAy5MBILAAAIAAS5g");
	this.shape.setTransform(173.95,125.6,1,1.498,0,0,0,1,-61.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,0,462,309);


(lib.STEnd03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.rhl_01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,196.2);


(lib.STEnd02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5,mode:"single"},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.FME01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,195.79999999999998);


(lib.STEnd01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.sls_01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,196.2);


(lib.ST03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.rhl_01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,196.2);


(lib.ST02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.FME01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,195.79999999999998);


(lib.ST01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.WhiteOverlay01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,97.65,1,1,0,0,0,98.9,97.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},26).wait(1));

	// Layer_1
	this.instance_1 = new lib.sls_01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,198,196.2);


(lib.SF01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Overlay02("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.15,98,1,1,0,0,0,98.3,97.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({_off:true},1).wait(85));

	// Layer_3
	this.instance_1 = new lib.rectangle01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.35,123.5,1,1,0,0,0,25.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({startPosition:0},0).to({alpha:0},64,cjs.Ease.cubicOut).wait(3));

	// Layer_2
	this.instance_2 = new lib.stellarfuturesremake0102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.45,55.05,0.0942,0.0942);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(6,2,1).p("AO5AAQAAGIkYEWQkXEVmKAAQmJAAkYkVQkXkWAAmIQAAmHEXkWQEYkVGJAAQGKAAEXEVQEYEWAAGHg");
	this.shape.setTransform(99.1,98.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqhKeQkWkWAAmIQAAmHEWkWQEYkVGJAAQGKAAEXEVQEYEWgBGHQABGIkYEWQkXEVmKAAQmJAAkYkVg");
	this.shape_1.setTransform(99.1,98.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0.3,196.5,195.5);


(lib.object01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_134 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(134).call(this.frame_134).wait(1));

	// Layer_3
	this.instance = new lib.SF01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.25,-25.35,1,1,0,0,0,99,98);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({scaleX:1.4232,scaleY:1.4232,x:-0.3,y:-25.25,startPosition:21,loop:false},21,cjs.Ease.cubicOut).to({scaleX:1.2528,scaleY:1.2528,startPosition:38},17,cjs.Ease.quadOut).wait(60));

	// sls_01_png
	this.instance_1 = new lib.ST01("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.25,-25.35,1,1,0,0,0,99,98);

	this.instance_2 = new lib.STEnd03("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.95,0.45,0.6749,0.6749,0,0,0,99,98);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).to({rotation:14.9992,x:-0.2,y:4.6,mode:"synched",loop:false},13,cjs.Ease.quadInOut).to({rotation:360,x:-0.25,y:-25.35,mode:"single",startPosition:26},22,cjs.Ease.quadInOut).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).to({regX:99.1,regY:98.1,scaleX:0.5304,scaleY:0.5352,x:122.95,y:130.2,mode:"single",startPosition:26},20,cjs.Ease.quadInOut).to({regX:99,x:117.25,y:118.55},18,cjs.Ease.quadOut).wait(5));

	// rhl_01_png
	this.instance_3 = new lib.ST03("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(369.9,39.35,1,1,0,0,0,99,98);

	this.instance_4 = new lib.STEnd02("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.6,-0.45,0.6749,0.6749,0,0,0,98.9,98);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({startPosition:0},0).to({rotation:14.9992,x:401.3,y:51.2,mode:"synched",loop:false},13,cjs.Ease.quadInOut).to({rotation:-360,x:-1.2,y:-26.65,mode:"single",startPosition:26},22,cjs.Ease.quadInOut).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({_off:false},0).to({scaleX:0.5304,scaleY:0.5364,x:-127.45,y:130.25,mode:"single",startPosition:26},20,cjs.Ease.quadInOut).to({x:-123.8,y:118.6},18,cjs.Ease.quadOut).wait(5));

	// FME01_png
	this.instance_5 = new lib.ST02("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-372.05,41.65,1,1,0,0,0,99,97.5);

	this.instance_6 = new lib.STEnd01("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.25,0.45,0.6749,0.6749,0,0,0,99,97.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({startPosition:0},0).to({rotation:-14.9992,x:-404.35,y:53.35,mode:"synched",loop:false},13,cjs.Ease.quadInOut).to({rotation:360,x:-0.95,y:-24.35},22,cjs.Ease.quadInOut).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(92).to({_off:false},0).to({regY:97.7,scaleX:0.5304,scaleY:0.5352,x:-4,y:177.3,mode:"single",startPosition:26},20,cjs.Ease.quadInOut).to({regX:98.9,scaleX:0.5303,scaleY:0.5349,x:-3.9,y:160.1},18,cjs.Ease.quadOut).wait(5));

	// Layer_7
	this.instance_7 = new lib.Lines01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2.5,98.05,1,1,0,0,0,145.5,99);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0.32, 0.32, 0.32, 1, 173.4, 173.4, 173.4, 0)];
	this.instance_7.cache(-3,-3,298,205);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(107).to({_off:false},0).to({startPosition:0},11).wait(17));

	// Base_Grey_Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C4C4").ss(9.1,2,1).p("EhO4AJaUBRrgmHBMFAmH");
	this.shape.setTransform(-2.0457,36.4114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.2,-164.3,1047.5,394.20000000000005);


// stage content:
(lib.test02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var playing = false;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.object01.play();
			playing = !playing;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.button_1 = new lib.button01();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(540.9,25.95,1.7444,1.4697,0,0,0,172.8,131.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button01(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// Layer_1
	this.object01 = new lib.object01();
	this.object01.name = "object01";
	this.object01.parent = this;
	this.object01.setTransform(535,121.9,0.7328,0.7328);

	this.timeline.addTween(cjs.Tween.get(this.object01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(688.3,165.7,255.80000000000007,121.40000000000003);
// library properties:
lib.properties = {
	id: 'C0AEC7CAE55B3B4997FB0797F1FB9079',
	width: 1100,
	height: 290,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/test02_atlas_.png", id:"test02_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C0AEC7CAE55B3B4997FB0797F1FB9079'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;