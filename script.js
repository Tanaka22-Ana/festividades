/* ARQUIVO JAVASCRIPT: script.js */

/**
 * Função para alternar a exibição do menu de navegação em dispositivos móveis.
 * Usada pelo botão "Menu Hambúrguer".
 */
function toggleMenu() {
    const menu = document.getElementById('listaMenu');
    menu.classList.toggle('active');
}

/**
 * Função de validação do formulário (contato.html).
 * Verifica se os campos obrigatórios estão preenchidos e faz uma validação de formato de email.
 * @param {Event} event - O evento de submissão do formulário.
 * @returns {boolean} True se o formulário for válido, False caso contrário.
 */
function validarFormulario(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validação de campos obrigatórios
    if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Impede o envio
        return false;
    }

    // Validação de formato de E-mail (Exemplo)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault(); // Impede o envio
        return false;
    }

    // Validação de Limite de Caracteres (Exemplo: Assunto máx 100 caracteres)
    if (assunto.length > 100) {
        alert("O campo Assunto deve ter no máximo 100 caracteres.");
        event.preventDefault(); // Impede o envio
        return false;
    }
    
    // Se tudo estiver OK, o formulário será enviado para processa.html
    return true;
}

// Opcional: Adiciona o listener para o menu toggle ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }
});