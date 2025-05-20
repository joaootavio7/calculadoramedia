let teclado = require(`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;
let opcao: string = ``;

function soma(): void {
    n1 = parseInt(teclado(`Digite o número: `));
    n2 = parseInt(teclado(`Digite o segundo número: `));

    console.log(n1 + n2);

    menu();
}
function subtracao(): void {
    n1 = parseInt(teclado(`Digite o número: `));
    n2 = parseInt(teclado(`Digite o segundo número: `));

    console.log(n1 - n2);

    menu();
}
function multiplicacao(): void {
    n1 = parseInt(teclado(`Digite o número: `));
    n2 = parseInt(teclado(`Digite o segundo número: `));

    console.log(n1 * n2);

    menu();
}
function divisao(): void {
    n1 = parseInt(teclado(`Digite o número: `));
    n2 = parseInt(teclado(`Digite o segundo número: `));

    console.log(n1 / n2);

    menu();
}

function sair(): void {
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);
}

function opcoes(opcao: string): void {
    switch (opcao) {
        case '+': soma(); break;
        case '-': subtracao(); break;
        case '*': multiplicacao(); break;
        case '/': divisao(); break;
        case '0': sair(); break;
        default: break;
    }
}

function menu(): void {
    console.log(`---* CALCULADORA *---`);
    console.log(`Digite `);
    console.log(`+ --> ADIÇÃO`);
    console.log(`- --> SUBTRAÇÃO`);
    console.log(`* --> MULTIPLICAÇÃO`);
    console.log(`/ --> DIVISÃO`);
    console.log(`0 --> SAIR`);
    opcao = teclado(`Digite a sua opção: `);
    opcoes(opcao);
}
menu(); 