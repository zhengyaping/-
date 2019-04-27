function Snakeb(game){
    this.game=game;
    this.col=5;
    this.row=4;
    this.x=this.col*33;
    this.y=this.row*33;
    this.sudu=2;
    this.fangxiang=0;
    this.isMove=false;
}
Snakeb.prototype.update=function () { 
    if(this.isMove){
        if (this.fangxiang == 1) {
            this.x -= this.sudu;
        } else if (this.fangxiang == 3) {
            this.y -= this.sudu;
        } else
         if (this.fangxiang == 2) {
            this.x += this.sudu;
        } else if (this.fangxiang == 0) {
            this.y += this.sudu;
        }    
 }
   
 }
 Snakeb.prototype.dong=function () { 
    this.isMove=true;
}
 Snakeb.prototype.render=function () { 
    this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x, this.y, 33, 33);

 }
