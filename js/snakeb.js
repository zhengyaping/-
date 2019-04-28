function Snakeb(game) {
    this.game = game;
    this.col = 5;
    this.row = 5;
    this.x = this.col * 33;
    this.y = this.row * 33;
    this.sudu = 5;
    this.fangxiang = 0;
    this.isMove = false;
    this.game.snakeb.push(this);
}
Snakeb.prototype.update = function () {
    if (this.isMove) {
        if (this.fangxiang == 1) {
            this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x + 33, this.y - 3, 33, 33);
            this.x -= this.sudu;
        } else if (this.fangxiang == 3) {
            this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x, this.y + 25, 33, 33);
            this.y -= this.sudu;
        } else if (this.fangxiang == 2) {
                this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x - 30, this.y - 3, 33, 33);
                this.x += this.sudu;
        } else if (this.fangxiang == 0) {
            this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x, this.y - 30, 33, 33);
            this.y += this.sudu;
        }
    }

}
Snakeb.prototype.dong = function () {
    this.isMove = true;
}
Snakeb.prototype.render = function () {
    // this.game.ctx.drawImage(this.game.R.snake, 0, 0, 33, 33, this.x, this.y, 33, 33);

}
