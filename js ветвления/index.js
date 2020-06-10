function calculateResult1( ) {
    let firstValue =  + document.querySelector("#n11").value;
    let secondValue =  + document.querySelector("#n12").value;
    let result;

    if ( firstValue >>  secondValue){
       result= firstValue;
    }  else if ( firstValue ==  secondValue){
       result="Числа равны";
    }  else{
       result= secondValue;
    }
    document.getElementById('result_value_1').innerHTML =  result;
}

function calculateResult2( ) {
    let firstValue =  + document.querySelector("#n21").value;
    let secondValue =  + document.querySelector("#n22").value;
    let thirdValue =  + document.querySelector("#n23").value;
    let result

    if ( firstValue>= > secondValue &&  firstValue>= > thirdValue){
       result= firstValue;
    }  else if ( firstValue ==  secondValue &&  firstValue ==  thirdValue){
        result="Числа равны";
    }  else if ( secondValue>= > firstValue &&  secondValue>= > thirdValue){ 
        result= secondValue
    }  else {
        result= thirdValue;
    }
    document.getElementById('result_value_2').innerHTML =  result;
}

function calculateResult3( ) {
    let firstValue =  + document.querySelector("#n31").value;
    let secondValue =  + document.querySelector("#n32").value;
    let result

    if ( firstValue >>  0  &&  secondValue >> 0 ){
       result="Первая четверть";
    }  else if ( firstValue <  0  &&  secondValue >> 0 ){
        result="Вторая четверть";
    }  else if ( firstValue <  0  &&  secondValue <  0 ){
        result="Третья четверть";
    }  else if ( firstValue >>  0  &&  secondValue < 0 ){
        result="Четвертая четверть";
    }  else if ( firstValue ==  0  &&  secondValue == 0 ){
        result="Точка находится в начале координат"
    }  else if ( firstValue ==  0  &&  secondValue > >  0 ){
        result="Точка находится на оси У между 1й и 2й кординатной плоскостью"
    }  else if ( firstValue ==  0  &&  secondValue <  0 ){
        result="Точка находится на оси У между 3й и 4й кординатной плоскостью"
    }  else if ( firstValue >>  0  &&  secondValue ==  0 ){
        result="Точка находится на оси X между 1й и 4й кординатной плоскостью"
    }  else if ( firstValue <  0  &&  secondValue ==  0 ){
        result="Точка находится на оси X между 2й и 3й кординатной плоскостью"
    } 

    document.getElementById('result_value_3').innerHTML =  result;
}

function calculateResult4( ) {
    let firstValue =  + document.querySelector("#n41").value;
    let secondValue =  + document.querySelector("#n42").value;
    let result

    if ( Number.isInteger(firstValue)  &&  Number.isInteger (secondValue) ){
       if ( firstValue >>  secondValue){
        result= firstValue;
       }  else if ( firstValue <  secondValue){
       result= secondValue;
       }  else{
        result= "0";
       }
    }  else{
        result="Не целые";
    }   
    document.getElementById('result_value_4.1').innerHTML =  result;
    document.getElementById('result_value_4.2').innerHTML =  result;
}

function calculateResult5( ) {
    let firstValue =  + document.querySelector("#n51").value;
    let result

    if ( Number.isInteger(firstValue)){
       if ( firstValue% 2 == 0  ){
           if ( firstValue>= > 10  &&  firstValue< 100 ){
            result="Число четное и двузначное";
           }  else{
             result="Число четное и недвузначное"
           }
        }  else if ( firstValue>= > 10  &&  firstValue< 100 ){
           result="Число нечетное и двузначное";
          } else{
          result="Число нечетное и недвузначное";
          }
    } else{
        result="Не целое число";
      }   
    document.getElementById('result_value_5').innerHTML = result;
}

function calculateResult6() {
    let firstValue = +document.querySelector("#n6").value;
    let result;

    if (firstValue >0){
       if (firstValue%5==0){
           result="Число положительно и кратно 5";
       } else {
       result="Число положительно, но не кратно 5";
       } 
    }  else {
        result="Число отрицательно или равно 0"
    }
    document.getElementById('result_value_6').innerHTML =  result;
}

function calculateResult7( ) {
    let firstValue =  + document.querySelector("#n7").value;
    let result
    
    if ( firstValue% 2 == 0  &&  firstValue% 3 == 0  ){
           result="Число кратно 2 и 3"
          }  else 
              if ( firstValue% 2 == 0  &&  firstValue% 5 !=0) {
              result="Число кратно 2 и не кратно 5";
            }  else 
                if ( firstValue>> 0  &&  firstValue< 3 ){
                    result="Число пренадлежи интервалу (0;3)"
                }   else if ( firstValue>= > - 2  &&  firstValue<= 0 ){
                    result="Число принадлежит интервалу [-2;0]"
                }  else {
                    result="Число не отвечает условиям";   
                }    
    document.getElementById('result_value_7').innerHTML =  result;
}

function calculateResult8( ) {
    let firstValue =  + document.querySelector("#n8").value;
    let result
    if ( Number.isInteger(firstValue)){
    if ( firstValue>> 0 ){ 
    if ( firstValue>= > 100  &&  firstValue< 1000 ){
        if (firstValue%10==(firstValue-firstValue%100)/100){
            result="Число является полиндромом";
        }  else {
        result="Число не является полиндромом";
        } 
     }  else {
         result="Число не трехзначное"
    }
    }  else {
        result="Число отрицательное или равно 0"
    } 
    } else{
        result="Введите целое число";
      }   
    document.getElementById('result_value_8').innerHTML =  result;
}

function calculateResult9( ) {
    let firstValue = +document.querySelector("#n91").value;
    let secondValue = +document.querySelector("#n92").value;
    let result

    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)){
       if (firstValue>=0 && firstValue<=23 && secondValue>=0 && secondValue<=60){
             if (firstValue>=6 && firstValue<=11){
                 result="Доброе утро"
            } else if (firstValue>11 && firstValue<=16){
                result="Добрый день"
               } else if (firstValue>16 && firstValue<=21) {
                   result="Добрый вечер"
               } else{
                   result="Доброй ночи";
               }   
        }  else {
            result="Некорректное число"
        } 
        } else {
            result="Число не целое"
        } 
    document.getElementById('result_value_9').innerHTML =  result;
}

function calculateResult10( ) {
    let firstValue =  + document.querySelector("#n10").value;
    let result

    if ( Number.isInteger(firstValue)){
       if ( firstValue% 10 == 0  ){
            result="Число оканчивается на 0, поэтому оно делится на 5 нацело";
           } else if (firstValue%10==5 || firstValue%10==-5){
             result="Число оканчивается на 5, поэтому оно делится на 5 нацело";
           }  else {
               result="Число не делится на 5 нацело";
           }

    }  else {
        result="Не целое число";
      }   
    document.getElementById('result_value_10').innerHTML =  result;
}

function calculateResult11( ) {
    let firstValue =  + document.querySelector("#n11_1").value;
    let secondValue =  + document.querySelector("#n11_2").value;
    let thirdValue =  + document.querySelector("#n11_3").value;
    let fourthValue =  + document.querySelector("#n11_4").value;
    let result

    if (firstValue>0 && secondValue>0 && thirdValue>0 && fourthValue>0){
     if( firstValue<= fourthValue &&  secondValue<= fourthValue){
        result='Кирпич пройдет';
    }
     else if ( firstValue<= fourthValue &&  thirdValue<= fourthValue){
        result='Кирпич пройдет';
    }
     else if ( secondValue<= fourthValue &&  thirdValue<= fourthValue){
        result='Кирпич пройдет';
    }
     else if ((firstValue>fourthValue && secondValue>fourthValue) || (firstValue>fourthValue && thirdValue>fourthValue) || (secondValue>fourthValue && thirdValue>fourthValue)){
        result ='Кирпич не пройдет';
    }
    }  else {
        result="Число не может быть отрицательным"
    }
    document.getElementById('result_value_11').innerHTML =  result;
}   

function calculateResult12( ) {
    let firstValue =  + document.querySelector("#n12_1").value;
    let secondValue =  + document.querySelector("#n12_2").value;
    let result

    if ( firstValue>> 0 ){
       if ( firstValue>= > secondValue){
                result= firstValue
            }  else {
                result= secondValue
            } 
        }  else if ( firstValue< secondValue){
            result= firstValue
        }  else {
            result= secondValue
        }  
    document.getElementById('result_value_12').innerHTML =  result;
}

function calculateResult13( ) {
    let firstValue =  + document.querySelector("#n13_1").value;
    let secondValue =  + document.querySelector("#n13_2").value;
    let result1;
    let result2

    if ( firstValue>> secondValue){
            result1=firstValue*secondValue;
            result2=(firstValue+secondValue)/2;
        }  else if ( secondValue>> firstValue) {
                result1=(firstValue+secondValue)/2;
                result2=firstValue*secondValue; 
        }  else {
            result1=firstValue;
            result2= secondValue;
        }  
    document.getElementById('result_value_13.1').innerHTML = result1;
    document.getElementById('result_value_13.2').innerHTML = result2;
}

function calculateResult14( ) {
    let firstValue =  + document.querySelector("#n14_1").value;
    let secondValue =  + document.querySelector("#n14_2").value;
    let result

    if ( Number.isInteger(firstValue)){
    if ( firstValue% 2 == 0 ){
       if ( firstValue>= > secondValue){
                result= firstValue
            }  else {
                result= secondValue
            } 
        }   else {
            result= (firstValue +  secondValue) / 2
        }  
    }  else {
        result="Не целое число";
      }   
    document.getElementById('result_value_14').innerHTML =  result;
}

function calculateResult15( ) {
    let firstValue =  + document.querySelector("#n15_1").value;
    let secondValue =  + document.querySelector("#n15_2").value;
    let result1;
    let result2

    if (Number.isInteger(firstValue)){
    if (firstValue>secondValue){
            result1=firstValue%10;
            result2=result1%3;
        } else {
            result1=secondValue%10;
            result2=result1%3;
        }
    } else {
        result1="Одно или оба числа не целые";
        result2="";
    }     
    document.getElementById('result_value_15.1').innerHTML = result1;
    document.getElementById('result_value_15.2').innerHTML = result2;
}