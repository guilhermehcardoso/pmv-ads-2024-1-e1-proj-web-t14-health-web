const formularioSugestao = document.getElementById('formulario-sugestao');
const inputSugestao = document.getElementById('sugestao-video');

formularioSugestao.addEventListener('submit', function(evento) {
  evento.preventDefault();
  const sugestao = inputSugestao.value.trim();
  if (sugestao) {
    
    let sugestoes = JSON.parse(localStorage.getItem('sugestoesVideo')) || [];

    
    sugestoes.push(sugestao);
    
    localStorage.setItem('sugestoesVideo', JSON.stringify(sugestoes));
    inputSugestao.value = '';
    alert('Sugestão enviada com sucesso!');
  }
});


const sugestoesArmazenadas = JSON.parse(localStorage.getItem('sugestoesVideo'));
if (sugestoesArmazenadas && sugestoesArmazenadas.length > 0) {
  console.log('Sugestões existentes:', sugestoesArmazenadas);
}