let sung = new Weapons();
let dich = new Enermy();
let flag = 0;
let hp = hp1;
function clearMap() {
    ctx.clearRect(0,0,1400,500)
}
function moveEnermy() {

    if(dich.positionY >= 400){
        flag = 1;
    }
    if (flag === 0) {
        dich.moveEnermyDown();
    }
    if (flag === 1) {
        dich.moveEnermyUp();
        if(dich.positionY <= 0){
            flag = 0;
        }
    }
    enemyFire();

    requestAnimationFrame(moveEnermy);
}

function enemyFire () {
    dich.reloadCount++;
    if ( dich.reloadCount >= dich.reloadTime ) {dich.fire();dich.reloadCount = 0}

}

function checkImpact(gun,bullet,enermy) {
    let flag = false;
    if (bullet.positionX + 15 >= enermy.positionX - gun.sizeBulletX1 &&
        bullet.positionX + 15 <= enermy.positionX + gun.sizeBulletX2 &&
        bullet.positionY - 2 >= enermy.positionY - enermy.sizeY1 &&
        bullet.positionY + 2 <= enermy.positionY + enermy.sizeY2)
        flag = true;
    return flag ;
}


function bulletFlying() {
    clearMap();
    for (let i = 0; i < bullets.length;i++) {
        if ( bullets[i].positionX < 1500){
        bullets[i].moveRight();
        bullets[i].drawBullet();
        }else continue;
        if (checkImpact(sung,bullets[i],dich) === true )
            hp -= sung.damage;

    }
    for (let j = 0; j <enermyBullets.length ; j++) {
        if ( enermyBullets[j].positionX > 0){
            enermyBullets[j].moveEnermyBullet();
            enermyBullets[j].drawEnermyBullet();
        }
    }
    document.getElementById("enermyHP").value = hp;
    sung.drawWeapon();
    if ( hp <= 0 && dich.type === enermy1) {
        dich.changeEnermy2();
        hp = hp2
    }
    if ( hp <= 0 && dich.type === enermy2) {
        dich.changeEnermy3();
        hp = hp3
    }
    if ( hp <= 0 && dich.type === enermy3) {
        dich.changeEnermy4();
        hp = hp4;
        document.getElementById("tot").innerHTML = tot
    }
    if ( hp <= 0 && dich.type === enermy4) {
        dich.changeEnermy5();
        hp = hp5;
        document.getElementById("xe").innerHTML = xe
    }
    if ( hp <= 0 && dich.type === enermy5) {
        dich.changeEnermy6();
        hp = hp6;
        document.getElementById("ma").innerHTML = ma
    }
    if ( hp <= 0 && dich.type === enermy6) {
        dich.changeEnermy7();
        hp = hp7;
        document.getElementById("tuong").innerHTML = tuong
    }
    if ( hp <= 0 && dich.type === enermy7) {
        dich.changeEnermy8();
        hp = hp8;
        document.getElementById("hau").innerHTML = hau
    }
    if ( hp <= 0) {
        document.getElementById("vua").innerHTML = vua
    }
    dich.drawEnermy();
    requestAnimationFrame(bulletFlying)
}
function returnTypeOfGun(gun) {
    if (gun.type === anaconda || gun.type === anacondaBan)
        gun.type = anaconda;
    if (gun.type === ak47 || gun.type === ak47Ban)
        gun.type = ak47;
    if (gun.type === fnscar || gun.type === fnscarBan)
        gun.type = fnscar;
    if (gun.type === cheytac || gun.type === cheytacBan)
        gun.type = cheytac;
    if (gun.type === bazooka || gun.type === bazookaBan)
        gun.type = bazooka;
    return gun.type
}

function move(event) {
    switch (event.keyCode) {
        case 49:
        case 97: {
            sung.changeto1();
            break;
        }
        case 50:
        case 98: {
            sung.changeto2();
            break;
        }
        case 51:
        case 99: {
            sung.changeto3();
            break;
        }
        case 52:
        case 100: {
            sung.changeto4();
            break;
        }
        case 53:
        case 101: {
            sung.changeto5();
            break;
        }
        case 38:
        case 37: {
            sung.positionX = 0;
            returnTypeOfGun(sung);
            sung.moveUp();
            break;
        }
        case 39:
        case 40: {
            sung.positionX = 0;
            returnTypeOfGun(sung);
            sung.moveDown();
            break;
        }
        case 32: {
            if (capacity1 > 0)
            if (sung.type === anaconda || sung.type === anacondaBan)  {
                sung.positionX = 12;
                sung.type = anacondaBan;
                sung.fire();
            }
            if (capacity2 > 0)
            if (sung.type === ak47 || sung.type === ak47Ban) {
                sung.positionX = 12;
                sung.type = ak47Ban;
                sung.fire();
            }
            if (capacity3 > 0)
            if (sung.type === fnscar || sung.type === fnscarBan ) {
                sung.positionX = 10;
                sung.type = fnscarBan;
                sung.fire()
            }
            if (capacity4 > 0)
            if (sung.type === cheytac || sung.type === cheytacBan) {
                sung.positionX = 20;
                sung.type = cheytacBan;
                sung.fire()
            }
            if( capacity5 > 0)
            if (sung.type === bazooka || sung.type === bazookaBan ) {
                sung.positionX = 20;
                sung.type = bazookaBan;
                sung.fire()
            }

            if (sung.type === anaconda || sung.type === anacondaBan)
                if (capacity1 > 0) capacity1--;
            if (sung.type === ak47 || sung.type === ak47Ban)
                if (capacity2 > 0) capacity2--;
            if (sung.type === fnscar || sung.type === fnscarBan)
                if (capacity3 > 0) capacity3--;
            if (sung.type === cheytac || sung.type === cheytacBan)
                if (capacity4 > 0) capacity4--;
            if (sung.type === bazooka || sung.type === bazookaBan)
                if( capacity5 > 0) capacity5--;
            document.getElementById("capacity1").value = capacity1;
            document.getElementById("capacity2").value = capacity2;
            document.getElementById("capacity3").value = capacity3;
            document.getElementById("capacity4").value = capacity4;
            document.getElementById("capacity5").value = capacity5;
        }
    }

        clearMap();
        dich.drawEnermy();
        sung.drawWeapon();

}

function run() {
    window.addEventListener('keydown',move);
}
bulletFlying();
moveEnermy();

