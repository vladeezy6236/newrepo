console.log("Часть 1:")
console.log("Задание 1:");
let aa = Array();
aa[0]=2;
aa[1]=3;
aa[2]=4;
aa[3]=5;
aa[4]=4;
aa[5]=3;
aa[6]=2;
aa[7]=1;
aa[8]=5;
aa[9]=6;
console.log(aa[0] + " " + aa[1] + " " + aa[2] + " " + aa[3] + " " + aa[4]+ " " + aa[5]+ " " + aa[6]+ " " + aa[7]+ " " + aa[8]+ " " + aa[9]);

console.log("Задание 2:");
let bb=Array();
bb[0]=2;
bb[1]=2*2;
bb[2]=2*2*2;
bb[3]=2*2*2*2;
bb[4]=2*2*2*2*2;
bb[5]=2*2*2*2*2*2;
console.log(bb[0]+" "+bb[1]+" "+bb[2]+" "+bb[3]+" "+bb[4]+" "+bb[5]);

console.log("Задание 3:");
let nn=Array();

let resu = "";
for(let i=0;i<6;i++){
    nn[i]=Math.pow(2, i+1);
    resu+=nn[i]+" ";
}
console.log(resu);

console.log("Задание 4:");
let dd = Array();
dd[0] = Math.floor(Math.random() * 10);
dd[1] = dd[0]*2;
dd[2] = dd[1]+1;
dd[3] = dd[0]*dd[1];
dd[4] = dd[1]*dd[3];
console.log(dd[0] + " " + dd[1] + " " + dd[2] + " " + dd[3] + " " + dd[4]);

console.log("Часть 2:");
let ee = Array();
for (let i = 0; i <= 9; i++) {
    ee[i] = parseFloat((Math.random() * 50).toFixed(2));
}
let res = '';
for (let i = 0; i <= 9; i++) {
    res += ee[i] + ' ';
}
document.getElementById('result1').innerHTML = res;

let sum = 0;
let n = 0;
for (let i = 0; i < ee.length; i++) {
    sum += ee[i];
    n += 1;
}
let avg = sum / n;
document.getElementById('result2').innerHTML = avg;

let ff = Array();
let sum2=0;
let str =" ";
pp=prompt("Введите количество значений массива");
for (let i = 0; i < pp; i++) {
    ff[i] = prompt("Введите " + (i+1) + "-й элемент массива");
    str += ff[i] + " ";
    if(ff[i]=='a'){
        sum2+=1;
    } else if(ff[i]=='а'){ 
        sum2+=1;
    }
}
document.getElementById('result3').innerHTML = str;
document.getElementById('result4').innerHTML = sum2;


let xx = Array();
let str2 = '';
let sum3=0;

for (let i = 0; i < 10; i++) {
    xx[i] = Math.floor(Math.random() * 2);
    if(xx[i]==0){
        xx[i]="Ложь";
    }
    else{
        xx[i]="Истина";
        sum3+=1;
    }
    str2 += xx[i] + ' ';
}

document.getElementById('result5').innerHTML = str2;

if(sum3>5){
    result="Больше значений 'Истина'";
}
else if(sum3<5){
    result="Больше значений 'Ложь'";
}
else{
    result="Количество значений 'Истина' и 'Ложь' равное";
}

document.getElementById('result6').innerHTML = result;