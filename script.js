const resultado =

document.getElementById("resultado");

const somClick = new Audio("click.wav");

function atualizarDisplay(valor) {
    if (resultado.innerText === "0" && valor !== ".")
        resultado.innerText = valor;

    else {
        resultado.innerText += valor;
    }
}

function calcular () {
    try {
        resultado.innerText = eval(resultado.innerText);
    } catch (error) {
        resultado.innerText = "Erro";
    }
}

function limpar() {
    resultado.innerText = "0";
}

function apagarUltimo() {
    resultado.innerText = resultado.innerText.slice(0, -1);
        if (resultado.innerText === "") {
            resultado.innerText = "0";
        }
}


document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", () => {

        somClick.currentTime = 0;
        somClick.play();

        let valor = botao.innerText;

        if (valor === "X") {valor = "*";
        }

        if (valor === "<") {
            apagarUltimo();
            return;
        }

        if (valor === "C") { limpar() = "limpar";
            return;
        }

        if (valor === "=") {valor = "calcular";
            return;
        }

        atualizarDisplay(valor);
    });
});

const botaoIgual =
document.querySelector(".botaoIgual");
    if (botaoIgual) {
        botaoIgual.addEventListener("click", () => {
            somClick.currentTime = 0;
            somClick.play();
            calcular();
        });
}


