function Apple(game){
    this.game=game;
    this.col=Math.floor(Math.random()*20);
    this.row=Math.floor(Math.random()*20);
    this.x=this.col*33;
    this.y=this.row*33;
    this.sudu=2;
}
Apple.prototype.update=function () { 
    
 }
Apple.prototype.render=function () { 
    this.game.ctx.drawImage(this.game.R.apple, 0, 0, 33, 33, this.x, this.y, 33, 33);
}