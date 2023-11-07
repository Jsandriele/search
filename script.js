import sdk from '@stackblitz/sdk'

sdk.embedProjectId(
  'elementOrId',
  'web-platform-yjxvaf',
  {
    forceEmbedLayout: true,
    openFile: 'styles.css',
  }
);

function tabuada(){
    const inputNumero = document.getElementById('search-input');
    const numero = parseInt(inputNumero.value);

    const outputTabuada = document.getElementById('resposta');
    let tabuada = '';


    

    for(let i = 1; i <= 10; i++){
        tabuada += numero +" X " + i+ " = "+
        (numero*i)+ "<br>";
        
    }
    tabuada += '';
    outputTabuada.innerHTML= tabuada();

}
document.getElementById('search-button').addEventListener('click', tabuada());
console.log(tabuada)