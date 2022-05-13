let display = document.getElementById('display');

let botoes = Array.from(document.getElementsByClassName('botao'));

botoes.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                if(display.innerText){
                    display.innerText = '';
                }
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '÷':
                display.innerText += "/";
                break;
            case '×':
                display.innerText += "*";
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = 'Conta inválida. Por favor reveja a conta.';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});