function limparCampos() {
  const resultado = document.getElementById("resultado");
  document.getElementById("input-a").value = "";
  document.getElementById("input-b").value = "";
  document.getElementById("input-c").value = "";
  resultado.innerHTML = "";
  resultado.classList.remove("paragrafo-resultado", "bad");
}

function exibirMensagem(mensagem, classe) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = mensagem;
  resultado.classList.remove("paragrafo-resultado", "bad");
  resultado.classList.add(classe);
}

function calcularRaiz() {
  const a = parseFloat(document.getElementById("input-a").value);
  const b = parseFloat(document.getElementById("input-b").value);
  const c = parseFloat(document.getElementById("input-c").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    exibirMensagem("Preencha os campos corretamente!", "bad");
    return;
  }

  if (a === 0 || b === 0 || c === 0) {
    exibirMensagem(`As Variáveis precisam de ser diferentes de 0.`, "bad");
    return;
  }

  const Delta = b ** 2 - 4 * a * c;

  if (Delta > 0) {
    const raiz1 = (-b + Math.sqrt(Delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(Delta)) / (2 * a);
    exibirMensagem(
      "X' : " + raiz1.toFixed(2) + "<br/>X'' : " + raiz2.toFixed(2),
      "paragrafo-resultado"
    );
  } else if (Delta === 0) {
    const raiz = -b / (2 * a);
    exibirMensagem(
      `A equação possui apenas uma raiz real: ${raiz.toFixed(2)}`,
      "paragrafo-resultado"
    );
  } else {
    exibirMensagem(
      "Delta negativo: não há raízes reais.",
      "paragrafo-resultado"
    );
  }
}
