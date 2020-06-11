let div = document.createElement('div');
  div.innerHTML='<h2><b>Черкасов Владислав Константинович</b><h2>';
  div.style.cssText  = "color:black;background: rgb(175, 70, 0)";
  document.body.prepend(div);

let elem = document.createElement('p');
  elem.innerHTML='<h2><b>30.01.1999</b><h2>';
  elem.style.cssText  = "color:black;background:rosybrown";
  some_div.append(elem);

document.body.style.background = 'rgb(255, 188, 126)';
setTimeout(() => document.body.style.background ='', 3000);