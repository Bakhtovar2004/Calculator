let btns = document.querySelector('#buttons')
let display = document.querySelector('#display')

btns.onclick = function(e){
let symbol = e.target.innerText;
if(symbol == 'C'){
    display.innerHTML = ''
}else if (symbol == '='){
    let result = eval(display.innerText);
    display.innerHTML = `<h1>${result}</h1>`;
}else if (symbol == 'Esc'){
    let newResult = display.innerText.split('');
    newResult.pop()
    display.innerHTML = `<h1>${newResult.join('')}</h1>`
}else if( e.target.tagName != 'BUTTON' || display.innerText.split('').length >= 19){
    //do nothing
}else{
    display.innerHTML +=`<h1>${symbol}</h1>`     
}
   
}

