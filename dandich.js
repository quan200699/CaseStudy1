let f = document.getElementById("myCanvas");
let ftx = f.getContext("2d");
const BULLETENERMY = "dandich.jpg";
const GRENADE = "luudan.jpg";
const KNIVE = "dao.jpg";
let EnermyBullet = function (enermy) {
    this.type = KNIVE;
    this.positionX = enermy.positionX;
    this.positionY = enermy.positionY ;
    this.drawEnermyBullet = function () {
        let image = new Image();
        image.src = this.type;
        ftx.drawImage(image,this.positionX,this.positionY)
    };
    this.moveEnermyBullet = function () {
        this.positionX -= 4;
    };

};

