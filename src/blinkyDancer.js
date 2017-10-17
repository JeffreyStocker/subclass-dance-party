var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="img/bonnie_bunnie.png" height = 50%>'); 
  // this.$node.prepend('<img src="scary_rabbit.jpg" >'); 
  // <img src="scary_rabbit.jpg"
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var me = this;
  var oldStep = Dancer.prototype.step;
  oldStep.apply(me);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  me.$node.toggle();
};