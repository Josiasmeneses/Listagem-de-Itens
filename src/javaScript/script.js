document.getElementById('btn').addEventListener('click', function() {
    var nome = document.getElementById('name').value;
    var telefone = document.getElementById('phone').value;
    
    // Armazenar dados no armazenamento local
    localStorage.setItem('nome', nome);
    localStorage.setItem('telefone', telefone);
  
    // Redirecionar para outra página
    window.location.href = 'outraPagina.html';
  });