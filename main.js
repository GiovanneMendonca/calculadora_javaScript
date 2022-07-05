
function calculator() {
    const operation = Number(prompt('Escolhar uma operação: \n1- soma (+) \n2- Subtração (-) \n3 - Multiplicação (*) \n4- Divisão Real (/) \n5- Divisão Inteira (%) \n6- Potenciação (**) \n7 - Sair'))


    if (!operation || operation > 7 || operation <= 0) {
        alert("erro- Operação inválida");
        calculator();
    }
    else if (operation === 7) {
        alert("Sair... até breve!!!");
    }
    else {

        let num1 = Number(prompt("Digite o primeiro Numero: "));
        let num2 = Number(prompt("Digite o segundo numero: "));

        if (!num1 || !num2) {
            alert("Erro-- Insirar um Numero válido: \nrefaça a operação");
            calculator();
        }
        else {

            function sum() {
                let result = num1 + num2;
                alert(`${num1} + ${num2} = ${result}`);
                newOperation();

            }

            function subtraction() {
                let result = num1 - num2;
                alert(`${num1} - ${num2} = ${result}`);
                newOperation();
            }

            function multiplication() {
                let result = num1 * num2;
                alert(`${num1} * ${num2} = ${result}`);
                newOperation();
            }

            function realDivision() {
                let result = num1 / num2;
                alert(`${num1} / ${num2} = ${result}`);
                newOperation();
            }

            function integerDivision() {
                let result = num1 % num2;
                alert(`O resto da divisão entre ${num1} + ${num2} é igual a ${result}`);
                newOperation();
            }

            function potentiation() {
                let result = num1 ** num2;
                alert(`${num1} elevado a ${num2} é igual a ${result}`);
                newOperation();
            }

            function newOperation() {
                let option = Number(prompt("Deseja realizar outra operação? \n1-Sim \n2-Não \nSelecione a Opcçao: "));
                if (!option || option > 2 || option < 1) {
                    alert("Erro -Opção inválida")
                    newOperation();
                }
                else if (option === 1) {
                    calculator();
                }
                else if (option === 2) {
                    alert("Até mais");
                }
            }

            switch (operation) {
                case 1:
                    sum();
                    break;
                case 2:
                    subtraction();
                    break;
                case 3:
                    multiplication();
                    break;
                case 4:
                    realDivision();
                    break;
                case 5:
                    integerDivision();
                    break;
                case 6:
                    potentiation();
                    break;

            }

        }

    }

}
calculator();
