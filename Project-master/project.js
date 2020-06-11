let c = document.createElement('p');
c.innerHTML='<b>Ответ верный</b>';
c.style.cssText = "color: green; font-size: 1em;";

let d = document.createElement('p');
d.innerHTML='<b>Ответ ложный</b>';
d.style.cssText = "color: red; font-size: 1em;";

function res1(a){
    a  =  document.getElementById('a').value;
    let b  =  2500;
    if(a==b){
        result1.append(c);
    }
    else{
        result1.append(d);
    }
}
function dec1(){
    let e = "<p>Решение:</p><p>Производственным методом (на стадии производства товаров и услуг) ВВП рассчитывается как сумма валовой добавленной стоимости отраслей или секторов экономики: ВВП = ΣВДС + Н - С, где ΣВДС - сумма валовой добавленной стоимости в основных ценах всех секторов или отраслей экономики; Н - сумма всех налогов на продукты и импорт; С - сумма всех субсидий на продукты и импорт. Добавленная стоимость – это валовая продукция предприятия (или рыночная цена выпущенной продукции) за минусом текущих материальных издержек, но с включением в неё отчислений на амортизацию (так как основные фонды предприятия принимают участие в создании новой стоимости производимой продукции). Отсюда следует, что: ВВП = 2000 – 800 + 200 + 300 – 200 = 1500 млрд. руб.</p>";
    document.getElementById('decision1').innerHTML = e;
}

function res2(a){
    a  =  document.getElementById('b').value;
    let b  =  102000;
    if(a==b){
        result2.append(c);
    }
    else{
        result2.append(d);
    }
}
function dec2(){
    let e = "<p>Решение:</p><p>К основным фондам относятся здания и сооружения, станки и оборудование, инструменты сроком службы более года и средства вычислительной техники. Сырьё и материалы, тара и тарные материалы относятся к оборотным средствам. Следовательно, стоимость основных фондов составляет 50000 + 13000 + 17000 + 4000 = 84000 млн. руб.</p>";
    document.getElementById('decision2').innerHTML = e;
}

function res3(a){
    a  =  document.getElementById('c').value;
    let b  =  17;
    if(a==b){
        result3.append(c);
    }
    else{
        result3.append(d);
    }
}
function dec3(){
    let e = "<p>Решение:</p><p>Численность экономически активного населения рассчитывается по формуле: ЭАН = З + Б, где З – численность занятого населения; Б – численность безработного населения. Тогда: ЭАН = 88 + 12 = 100 млн. чел. Рассчитаем уровень безработицы: Уб = Б/ЭАН*100%=12/100*100%=12%</p>";
    document.getElementById('decision3').innerHTML = e;
}