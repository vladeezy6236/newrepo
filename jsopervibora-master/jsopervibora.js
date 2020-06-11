function result1(){
    var n11, n12, result;
    n11  =  +document.querySelector('#n11').value;
    n12  =  +document.querySelector('#n12').value;

    if(n11>n12){
        result=n11;
    }
    else{
        result=n12;
    }
    document.getElementById('result11').innerHTML = result;
}

function result2(){
    var n21, n22, n23, result;
    n21  =  +document.querySelector('#n21').value;
    n22  =  +document.querySelector('#n22').value;
    n23  =  +document.querySelector('#n23').value;

    if(n21>n22 && n21>n23){
        result=n21;
    }
    else if(n22>n21 && n22>n23){
        result=n22;
    }
    else {
        result=n23;
    }
    document.getElementById('result21').innerHTML = result;
}

function result3(){
    var n31, n32, result;
    n31  =  +document.querySelector('#n31').value;
    n32  =  +document.querySelector('#n32').value;

     if(n31>0 && n32>0){
        result='Первая четверть';
     }
     else if(n31<0 && n32>0){
        result='Вторая четверть';
     }
     else if(n31<0 && n32<0){
        result='Третья четверть';
     }
     else if(n31>0 && n32<0){
        result='Четвертая четверть';
     }
     else if(n31==0 && n32!=0){
        result='На оси ОХ';
     }
     else if(n32==0 && n31!=0){
        result='На оси ОУ';
     }
     else if(n31==0 && n32==0){
        result='Начало координат';
     } 
    document.getElementById('result31').innerHTML = result;
}

function result4(){
    var n41, n42, result;
    n41  =  +document.querySelector('#n41').value;
    n42  =  +document.querySelector('#n42').value;

     if(Number.isInteger(n41) && Number.isInteger(n42)){
         if(n41>n42){
             result=n41;
         }
         else if(n41<n42){
             result=n42;
         }
         else{
             result="0";
         }
     } else{
         result='Не целые';
     }
     document.getElementById('result41').innerHTML = result;
     document.getElementById('result42').innerHTML = result;
}     

function result5(){
    var n51, result;
    n51  =  +document.querySelector('#n51').value;

     if(Number.isInteger(n51)){
         if(n51%2==0){
             if(n51>=10 && n51<=99){
                 result='Число четное и двузначное';
             }
             else{
                 result='Число четное и недвузначное';
             }
         } else if(n51>=10 && n51<=99){
             result='Число нечетное и двузначное';
         }
         else{
             result='Число нечетное и недвузначное';
         }
      } 
       else{
           result='Не целое число';
       }
         document.getElementById('result51').innerHTML = result;
}

function result6(){
    var n61, result;
    n61  =  +document.querySelector('#n61').value;
    if(Number.isInteger(n61)){
     if(n61>1){
         if(n61%2==0){
             result='Число кратно 2 и положительно';
         }
         else if(n61%3==0){
            result='Число кратно 3 и положительно';
         }
         else if(n61%5==0){
                result='Число кратно 5 и положительно';
         }
         else if(n61%7==0){
            result='Число кратно 7 и положительно';
         }
         else{
             result='Число не кратное';
         }
    }
     else if(n61==0){
         result='Число равно 0';
     }  
     else if(n61==1){
         result='Число не кратное, но положительное';
     }  
     else{
         result='Число отрицательно';
     }
    }
    else{
         result='Не целое число';
     }
    document.getElementById('result61').innerHTML = result; 
}

function result7(){
    var n71, result;
    n71  =  +document.querySelector('#n71').value;
    if(Number.isInteger(71)){
        if(n71%2==0 && n71%3==0 && n71!=0){
            result='Число кратно 2 и 3';
        }
        else if(n71%2==0 && n71%5!=0 && n71!=0){
            result='Число кратно 2 и не кратно 5';
        }
        else if(n71>0 && n71<3 && n71!=0){
            result='Число принадлежит интервалу (0;3)';
        }
        else if(n71>=-2 && n71<=0){
            result='Число принадлежит интервалу [-2;0]';
        }
        } 
    else{
        result='Число не целое';
    }
    document.getElementById('result71').innerHTML = result; 
}         

function result8(){
    var n81, result;
    n81 = +document.querySelector('#n81').value;
    if(n81>=100 && n81<=999){
        if((n81-n81%100)/100==n81%10){
            result='3-значное число полиндром';
        }
        else{
            result='3-значное число не полиндром';
        }

    }
    else{
        result='Число не трехзначное';
    }
    document.getElementById('result81').innerHTML = result;
}

function result9(){
    var n91, n92, result;
    n91 = +document.querySelector('#n91').value;
    n92 = +document.querySelector('#n92').value;
    if(n91>=0 && n91<24 && n92>=0 && n92<60){
        if(n91>4 && n91<12){
            result='Доброе утро, преподаватель!';
        }
        else if(n91>=12 && n91<18){
            result='Добрый день, преподаватель!';
        }
        else if(n91>=18 && n91<24){
            result='Добрый вечер, преподаватель!';
        }
        else{
            result='Доброй ночи, преподаватель!';
        }
    }
    else{
        result='Вы ввели некоректное время';
    }
    document.getElementById('result91').innerHTML = result;
}

function result10(){
    var n101, result;
    n101 = +document.querySelector('#n101').value;
    if(Number.isInteger(n101)){
        if(n101%10==0){
            result='Число делится на 5, так как последняя цифра 0';
        }
        else if(n101%10==5 || n101%10==-5){
            result='Число делится на 5, так как последняя цифра 5';
        }
        else{
            result='Число не имеет признаков деления на 5, поэтому не делится на 5 нацело';
        }   
    }
    else{
        result='Число не целое';
    }
    document.getElementById('result101').innerHTML = result;
}

function result11(){
    var x, y, z, a, result;
    x = +document.querySelector('#n111').value;
    y = +document.querySelector('#n112').value;
    z = +document.querySelector('#n113').value;
    a = +document.querySelector('#n114').value;

    if(x>0 && y>0 && z>0 && a>0){
        if(x<=a && y<=a){
            result='Кирпич пройдет в отверстие';
        }
        else if (x<=a && z<=a){
            result='Кирпич пройдет в отверстие';
        }
        else if (y<=a && z<=a){
            result='Кирпич пройдет в отверстие';
        }
        else if ((x>=a && y>=a) || (x>=a && z>=a) || (y>=a && z>=a)){
            result='Кирпич не пройдет в отверстие';
        }
        }
    else {
        result='Стороны не могут быть орицательным числом'
    }
    document.getElementById('result111').innerHTML = result;
}

function result12(){
    var x, y, result;
    x = +document.querySelector('#n121').value;
    y = +document.querySelector('#n122').value;

    if(x>0){
        if(x>y){
            result=x;
        }
        else{
            result=y;
        }
    }
    else if(x<=0){
        if(x<y){
            result=x;
        }
        else{
            result=y;
        }
    }
    document.getElementById('result121').innerHTML = result;
}

function result13(){
    var n131, n132, result_x, result_y;
    x = +document.querySelector('#n131').value;
    y = +document.querySelector('#n132').value;
    a=x;
    b=y;

    if(x>y){
        result_x = a*b;
        result_y = (a+b)/2;
    }
    else if(y>x){
        result_x = (a+b)/2;
        result_y = a*b;
    }
    else{
        result_x = a;
        result_y = b;
    }
    document.getElementById('result131').innerHTML = result_x;
    document.getElementById('result132').innerHTML = result_y;
}

function result14(){
    var x, y, result;
    x = +document.querySelector('#n141').value;
    y = +document.querySelector('#n142').value;

    if(Number.isInteger(x)){
      if(x%2==0){
        if(x>y){
            result=x;
        }
        else{
            result=y;
        }
      }
      else {
        result=(x+y)/2;
      }
    } else {
        result='Число Х не целое';
    }  
    document.getElementById('result141').innerHTML = result;
}

function result15(){
    var p, t, result_p, result_t;
    p = +document.querySelector('#n151').value;
    t = +document.querySelector('#n152').value;

    if(Number.isInteger(p)){
        if(p>t){
            result_p=p%10;
            result_t=result_p%3;
        }
        else{
            result_p=t%10;
            result_t=result_p%3;
        }
    }
    else {
        result_p='Числа не целые';
        result_t='';
    }
    document.getElementById('result151').innerHTML = result_p;
    document.getElementById('result152').innerHTML = result_t;
}