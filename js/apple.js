function Apple(game){
    this.game=game;
    this.col=Math.floor(Math.random()*20);
    this.row=Math.floor(Math.random()*20);
    this.x=this.col*33;
    this.y=this.row*33;
    this.sudu=2;
    this.game.apple.push(this);
}
Apple.prototype.update=function () { 
 
 }
Apple.prototype.t4dian=function () { 
    return{
        "U":this.game.map.code[this.row-1][this.col],
        "R":this.game.map.code[this.row][this.col+1],
        "D":this.game.map.code[this.row+1][this.col],
        "L":this.game.map.code[this.row][this.col-1]
    }
}
Apple.prototype.zisha = function(){
    for(var i = 0 ; i < this.game.apple.length ; i++){
        if(this.game.apple[i] == this){
            this.game.apple.splice(i, 1);
        }
    }
}
Apple.prototype.render=function () { 
    this.game.ctx.drawImage(this.game.R.apple, 0, 0, 33, 33, this.x, this.y, 33, 33);
}