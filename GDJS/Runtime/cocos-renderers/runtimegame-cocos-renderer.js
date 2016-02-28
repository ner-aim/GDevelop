gdjs.RuntimeGameCocosRenderer = function(game, width, height, forceFullscreen)
{
    this._currentWidth = width; //Current size of the canvas
    this._currentHeight = height;
}

gdjs.RuntimeGameRenderer = gdjs.RuntimeGameCocosRenderer; //Register the class to let the engine use it.

gdjs.RuntimeGameCocosRenderer.prototype.getCurrentWidth = function() {
    return this._currentWidth;
};

gdjs.RuntimeGameCocosRenderer.prototype.getCurrentHeight = function() {
    return this._currentHeight;
};

gdjs.RuntimeGameCocosRenderer.prototype.setSize = function(width, height) {
    this._currentWidth = width;
    this._currentHeight = height;
};


gdjs.RuntimeGameCocosRenderer.prototype.resize = function() {
};

/**
 * Set if the aspect ratio must be kept when the game rendering area is resized.
 */
gdjs.RuntimeGameCocosRenderer.prototype.keepAspectRatio = function(enable) {
};

/**
 * Change the margin that must be preserved around the game.
 */
gdjs.RuntimeGameCocosRenderer.prototype.setMargins = function(top, right, bottom, left) {
};

/**
 * De/activate fullscreen for the game.
 * @method setFullScreen
 */
gdjs.RuntimeGameCocosRenderer.prototype.setFullScreen = function(enable) {
};

gdjs.RuntimeGameCocosRenderer.prototype.startGameLoop = function(fn) {
    this._gameLoopFn = fn;
    this._gameLoopFn(); //TODO
}

gdjs.RuntimeGameCocosRenderer.prototype.onSceneUpdated = function() {
    if (!this._gameLoopFn()) {
        //TODO
    }
}

gdjs.RuntimeGameCocosRenderer.prototype.convertYPosition = function(y) {
    //Cocos2D Y axis is inverted, with origin at the bottom of the window.
    return this._currentHeight - y;
}
