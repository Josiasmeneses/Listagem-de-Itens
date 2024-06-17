
document.getElementById('btn').addEventListener('click', function () {
  var nome = 
  document.getElementById('name').value;
  

  // Armazenar dados no armazenamento local
  localStorage.setItem('nome', nome);


  // Redirecionar para outra página
  window.location.href = 'lista.html';

});
