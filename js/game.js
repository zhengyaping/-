function Game(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
this.R = {
    "apple" : "apple.png",
    "snake" : "snake.png",
    "snake0" : "snake0.png",
    "snake1" : "snake1.png",
    "snake2" : "snake2.png",
    "snake3" : "snake3.png",
};
var self = this;
var imageAmount = Object.keys(this.R).length;
var count = 0;
for(var k in this.R){
    (function(k){
        var img = new Image();
        img.src = "image/" + self.R[k];
        img.onload = function(){
            count++;
            self.R[k] = img;
            if(count == imageAmount){
                self.start();
                self.bindEvent();
            }
        }
    })(k)
}
}
Game.prototype.start=function () {
    var self = this;
    this.map = new Map(this);
    this.snake = new Snake(this);
    this.apple = new Apple(this);
    this.snakeb = new Snakeb(this);
    this.f=0;
    this.count=0;
    this.timer=setInterval(function () {
        self.ctx.clearRect(0, 0, 660, 660);
        self.ctx.fillStyle = "white";
        self.ctx.font="bold 20px 黑体";
        self.ctx.fillText("分数:"+self.count, 580, 20); 
        self.f++;
        self.ctx.fillStyle = "white";
        self.ctx.fillText(self.f, 10, 20); 
        self.map.update();
        self.map.render();

        self.snake.update();
        self.snake.render();

        self.apple.update();
        self.apple.render();

        self.snakeb.update();
        self.snakeb.render();
     },20)
}
Game.prototype.bindEvent=function () {
    var self = this;
    document.onkeydown = function (e) {
            if (e.keyCode == 37) {
                self.snake.fangxiang = 1;
                self.snake.dong();
                self.snakeb.fangxiang = 1;
                self.snakeb.dong();
            } else if (e.keyCode == 38) {
                self.snake.fangxiang = 3;
                self.snake.dong();
                self.snakeb.fangxiang = 3;
                self.snakeb.dong();
            } else if (e.keyCode == 39) {
                self.snake.fangxiang = 2;
                self.snake.dong();
                self.snakeb.fangxiang = 2;
                self.snakeb.dong();
            } else if (e.keyCode == 40) {
                self.snake.fangxiang = 0;
                self.snake.dong();
                self.snakeb.fangxiang = 0;
                self.snakeb.dong();
            }
        }
}
