const botaoCalculaMedia = document.querySelector('.submitBotao');

botaoCalculaMedia.addEventListener('click', calculaMediaFinal);

function getStudentName() {
    let nome = document.getElementById('estudante').value;
    return nome;
}

function mediaAluno() {
    let notaPrimeiroBimestre = Number(document.getElementById('notaPrimeiroBimestre').value);
    let notaSegundoBimestre = Number(document.getElementById('notaSegundoBimestre').value);
    let notaTerceiroBimestre = Number(document.getElementById('notaTerceiroBimestre').value);
    let notaQuartoBimestre = Number(document.getElementById('notaQuartoBimestre').value);

    if (notaPrimeiroBimestre > 10 || notaSegundoBimestre > 10 || notaTerceiroBimestre > 10 || notaQuartoBimestre > 10) {
        return 11
    } else if (notaPrimeiroBimestre < 0 || notaSegundoBimestre < 0 || notaTerceiroBimestre < 0 || notaQuartoBimestre < 0) {
        return 11
    } else if (notaPrimeiroBimestre === null || notaSegundoBimestre === null || notaTerceiroBimestre === null || notaQuartoBimestre === null) {
        return 11
    } else {
        let mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
        let mediaFinalFixada = mediaFinal.toFixed(1);

        return mediaFinalFixada;
    }
}

function calculaMediaFinal() {
    let nome = getStudentName();
    let mediaFinal = mediaAluno();
    let result = getResult();

    if (nome.length == 0) {
        alert(`Por favor, insira o nome do aluno.`)
    } else if (mediaFinal === 11) {
        alert(`Erro: A nota máxima é 10. Por favor, confira se as notas estão corretas.`)
    } else {
        renderResults();
    }
}

function getResult() {
    let mediaFinal = mediaAluno();
    let result = true;

    if (mediaFinal < 6.73) {
        result = false;
    }
    return result;
}

function renderResults() {
    let divResult = document.querySelector('.result');
    let nome = getStudentName();
    let mediaFinal = mediaAluno();
    let result = getResult();

    if (result == true) {
      if(mediaFinal >= 6.73 && mediaFinal < 7){
        mediaFinal = 7.0
      }
        divResult.innerHTML = `<br />
  <fieldset class="resultapproved">
  <legend class="legendresult">Aprovado!</legend>
  Parabéns, <strong>${nome}</strong>!<br/>
  <strong>${nome}</strong> foi aprovado com média <strong>${mediaFinal}</strong><br/>
  <br/>
  </fieldset>`;
    } else if (result == false) {
        divResult.innerHTML = `<br />
    <fieldset class="resultreproved">
    <legend class="legendresult">Reprovado!</legend>
    Este ano não deu, <strong>${nome}</strong>!<br/>
    <strong>${nome}</strong> foi reprovado com média <strong>${mediaFinal}</strong>. <br />
    <br />
    </fieldset>`;
    }
}