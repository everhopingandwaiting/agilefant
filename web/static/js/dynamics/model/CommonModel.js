/*
 * Abstract common model for dynamics inheritance
 */

var CommonModel = function() {};

CommonModel.prototype.reload = function() {
  throw "Abstract method called";
};

CommonModel.prototype.getId = function() {
  return this.id;
};

CommonModel.prototype.addEditListener = function() {
	//TODO: implement
};

CommonModel.prototype.addDeleteListener = function() {
	//TODO: implement
};
