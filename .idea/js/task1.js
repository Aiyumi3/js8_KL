document.getElementById('b1').onclick = function(){
    const ip1 = prompt('enter ip : ', ' ');
    const ip2 = prompt('enter ip : ', ' ');
    alert('amount of ip between ' + ip1 + ', ' + ip2 + ' = ' + getAmountIp(ip1, ip2));
}
function getAmountIp(ip1, ip2) {
    let n1 = ip1.split('.').map(item => parseInt(item));
    let n2 = ip2.split('.').map(item => parseInt(item));
    if ( (n1.length && n2.length) == 4) {
        if(n1[0] == 0 && n1[1] == 0 && n1[2] == 0 && n1[3] == 0  && n2[0] == 0 && n2[1] == 0 && n2[2] == 0 && n2[3] == 0) {
            return  1 ;
        }/*else if(n1[3] >= 0 && n2[3] >= 0 && !(n1[3] >= 256) && !(n2[3] >= 256)) {
            am = n2[3] - n1[3];
            return am ;
        }else if(n1[3] >= 0 && !(n1[3] >= 256) && n2[2] >= 0 && !(n2[2] >= 256) ) {
            am = n2[2] + 255 - n1[3];
            return am;
        }*/else if(n1[3] >= 0 && !(n1[3] >= 256) && n2[0] >= 0 && !(n2[0] >= 256)) {
            const am = 765 + n2[0] - n1[3];
            return am;
        }else if(n1[3] >= 0 && !(n1[3] >= 256) && n2[1] >= 0 && !(n2[1] >= 256)) {
            const am = 510 + n2[1] - n1[3];
            return am;
        }else {
            return 'error';
        }
    }
}