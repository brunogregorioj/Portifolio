function validarFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var topic = document.getElementById('topic').value;
    var message = document.getElementById('message').value;

    // Validar se os campos estão preenchidos
    if (name.trim() === '' || email.trim() === '' || topic.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Se todas as validações passarem, o formulário é enviado
    alert('Formulário enviado com sucesso!');

    // Limpar os valores dos campos
    document.getElementById('form').reset();

    // Mostrar uma mensagem de confirmação amigável
    var confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = 'Obrigado! Seu formulário foi enviado com sucesso.';
    confirmationMessage.style.color = 'green';
    document.getElementById('form').appendChild(confirmationMessage);

    return true;
}
