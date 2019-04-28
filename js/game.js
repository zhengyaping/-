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
    this.audio=document.getElementById("audio");
    this.audio1=document.getElementById("audio1");
    this.audio2=document.getElementById("audio2");
    this.map = new Map(this);
    this.snake = new Snake(this);
    this.apple=[];
    this.apple1=new Apple(this);
    this.snakeb=[];
    this.snakeb1 = new Snakeb(this);
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

        for(var i = 0 ; i < self.apple.length ; i++){
            self.apple[i].update();
            self.apple[i] && self.apple[i].render();
        }
        for(var i = 0 ; i < self.snakeb.length ; i++){
            self.snakeb[i].update();
            self.snakeb[i] && self.snakeb[i].render();
        }
     },20)
}
Game.prototype.bindEvent=function () {
    var self = this;
    document.onkeydown = function (e) {
        if (e.keyCode == 37) {
            self.snake.fangxiang = 1;
            self.snake.dong();
            self.snakeb.forEach(item => {
                item.dong();
                item.fangxiang = 1;
            })
            } else if (e.keyCode == 38) {
                self.snake.fangxiang = 3;
                self.snake.dong();
                self.snakeb.forEach(item => {
                    item.dong();
                    item.fangxiang = 3;
                })
            } else if (e.keyCode == 39) {
                self.snake.fangxiang = 2;
                self.snake.dong();
                self.snakeb.forEach(item => {
                    item.dong();
                    item.fangxiang = 2;
                })
            } else if (e.keyCode == 40) {
                self.snake.fangxiang = 0;
                self.snake.dong();
                self.snakeb.forEach(item => {
                    item.dong();
                    item.fangxiang = 0;
                })
            }
        }
}
