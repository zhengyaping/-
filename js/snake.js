function Snake(game){
    this.game=game;
    this.col=5;
    this.row=5;
    this.x=this.col*33;
    this.y=this.row*33;
    this.sudu=2;
    this.img = this.game.R.snake0;
    this.isMove=false;
    this.fangxiang=0;
}
Snake.prototype.update=function () { 
    if(this.isMove){
        if (this.fangxiang == 1) {
            this.img = this.game.R.snake1;
            this.x -= this.sudu;
        } else if (this.fangxiang == 3) {
            this.img = this.game.R.snake3;
            this.y -= this.sudu;
        } else
         if (this.fangxiang == 2) {
            this.img = this.game.R.snake2;
            this.x += this.sudu;
        } else if (this.fangxiang == 0) {
            this.img = this.game.R.snake0;
            this.y += this.sudu;
        }    
 }
    if(this.x>660-33||this.x<0||this.y>660-33||this.y<0){
        this.isMove=false;
        clearInterval(this.game.timer);
        alert("GAME OVER！");
 }

}
Snake.prototype.dong=function () { 
        this.isMove=true;
}
 Snake.prototype.render=function () { 
    this.game.ctx.drawImage(this.img, 0, 0, 33, 42, this.x, this.y, 33, 33);
 }
