function averagethree(){
    let a=parseInt(document.getElementById('n1').value);
    let b=parseInt(document.getElementById('n2').value);
    let c=parseInt(document.getElementById('n3').value);
    let sum=(a+b+c)
    let avg= sum/3

    // console.log('average of three :',avg)
    document.getElementById('res').value=avg;
}
function averageDom(){
    let a=parseInt(document.getElementById('dn1').value);
    let b=parseInt(document.getElementById('dn2').value);
    let c=parseInt(document.getElementById('dn3').value);
    let sum=(a+b+c)
    let avg= sum/3
    document.getElementById('dres').value=avg;

}
function sumnnatural(){
    let n=parseInt(document.getElementById('sn').value);
    let sum=(n*(n+1))/2
    document.getElementById('snres').value=sum;
}
function avgnatural(){
    let n=parseInt(document.getElementById('an').value);
    let sum=(n*(n+1))/2
    let avg=sum/n
    document.getElementById('anres').value=avg;


}

function profitperc(){
    let cp=parseInt(document.getElementById('p1').value);
    let sp=parseInt(document.getElementById('p2').value);
    let profit=sp-cp
    let perprofit=(profit/cp)*100
    document.getElementById('pres').value=profit
    document.getElementById('pres2').value=perprofit
}

function simpleint(){
    let p=parseInt(document.getElementById('price').value);
    let t=parseInt(document.getElementById('time').value);
    let r=parseInt(document.getElementById('rate').value);
    let simple=(p*t*r)/100
    document.getElementById('sim').value=simple
}

function missingangle(){
    let a1=parseInt(document.getElementById('angle1').value);
    let a2=parseInt(document.getElementById('angle2').value);
    let a3=180-(a1+a2);
    document.getElementById('angle3').value=a3

}
function lastdigit(){
    let n=parseInt(document.getElementById('num').value);
        ld=n%10
        document.getElementById('last').value=ld
}
function remlast(){
    let n=parseInt(document.getElementById('rnum').value);
    // ld=n%10
    n=n/10
    document.getElementById('reml').value=parseInt(n)
}
function firstdthree(){
    let n=parseInt(document.getElementById('tnum').value);
    fd=n/100
    document.getElementById('fdt').value=parseInt(fd)
}
function firstdfive(){
    let n=parseInt(document.getElementById('fnum').value);
    fdfi=n/10000
    document.getElementById('fdf').value=parseInt(fdfi)
}
function celfahconv(){
    let c=parseFloat(document.getElementById('cel').value);
    let fah=(c*(9/5))+32
    document.getElementById('fahr').value=fah+'°F';
    
}
function fahcelconv(){
    let f=parseFloat(document.getElementById('fah').value);
    let cels=(f-32)*(5/9)
    document.getElementById('celr').value=cels+'°c';
}
function grosssal(){
    let bas=parseInt(document.getElementById('basic').value);
    let hra=0.20*bas
    let da=0.10*bas
    let grosss=bas+hra+da
    document.getElementById('hra').value=hra
    document.getElementById('da').value=da
    document.getElementById('gross').value=grosss
}
function swapt(){
    let a=parseInt(document.getElementById('first').value);
    let b=parseInt(document.getElementById('second').value);
    let c=a
        a=b
        b=c
    document.getElementById('valuea').value=a
    document.getElementById('valueb').value=b

}
function swap(){
    let a=parseInt(document.getElementById('as').value);
    let b=parseInt(document.getElementById('bs').value);
    a=a+b
    b=a-b
    a=a-b
    document.getElementById('swapa').value=a
    document.getElementById('swapb').value=b
}
