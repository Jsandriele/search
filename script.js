function tabuada() {
  const inputNumero = document.getElementById('search-input');
  const numero = parseInt(inputNumero.value);

  const outputTabuada = document.getElementById('resposta');
  let tabuadaHTML = '';

  for (let i = 1; i <= 10; i++) {
    tabuadaHTML += numero + ' X ' + i + ' = ' + numero * i + '<br>';
  }
  tabuada += '';
  outputTabuada.innerHTML = tabuadaHTML;
}
document.getElementById('button').addEventListener('click', tabuada)