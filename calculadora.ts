let opcao: string = ``;

do {
    console.log(`-------------------------`)
    console.log(`-      CALCULADORA      -`)
    console.log(`-------------------------`)

    console.log(`+ --> ADIÇÃO`);
    console.log(`- --> SUBTRAÇÃO`);
    console.log(`* --> MULTIPLICAÇÃO`);
    console.log(`/ --> DIVISÃO`);
    console.log(`0 --> SAIR`);

    let teclado = require(`prompt-sync`)();
    let n1: number = parseInt(teclado(`Digite o primeiro número para o calculo: `));
    let n2: number = parseInt(teclado(`Digite a segundo número para o calculo: `));
    opcao = teclado(`Digite a sua opção: `);

    if (opcao == `+`) {
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
    }
    else if (opcao == `-`) {
        console.log(`${n1} + ${n2} = ${n1 - n2}`);
    }
    else if (opcao == `*`) {
        console.log(`${n1} * ${n2} = ${n1 * n2}`);
    }
    else if (opcao == `/`) {
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
    }
    else if (opcao == `0`) {

    }

} while (opcao != "0")


