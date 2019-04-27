function Snakeb(game){
    this.game=game;
    this.col=5;
    this.row=4;
    this.x=this.col*33;
    this.y=this.row*33;
    this.sudu=5;
    this.fangxiang=0;
}
Snakeb.prototype.update=function () { 

 }
 Snakeb.prototype.render=function () { 
    this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x, this.y, 33, 33);

 }