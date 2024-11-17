const botaoAcessarConta = document.getElementById('botao-login');
const botaoBuscarProfissionalTelaInicio = document.getElementById('botao-buscar-profissional-inicio');
const botaoEntrarLogin = document.getElementById('botao-Entrar');
const botaoMeuPerfil = document.getElementById('botao-meu-perfil');
const botaoAgendar = document.getElementById('botao-agendar');
const botaoBuscarProfissionalCadastro = document.getElementById('botao-buscar-profissional');
const botaoSair = document.getElementById('botao-sair-conta');

/*function showSection(sectionId, divId) {
    if (sectionId == null){
        return ;
    }

    if (sectionId == 'login'){
        document.getElementById('inicio').style.display = 'none';
    }else{
        if (sectionId == 'busca'){
            document.getElementById('inicio').style.display = 'none';
            document.getElementById('login').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('perfil').style.display = 'none';
            document.getElementById('agendamento').style.display = 'none';
        }else{
            if (sectionId == 'menu'){
                document.getElementById('main-content').style.display = 'block';
                document.getElementById('agendamento').style.display = 'none';
                document.getElementById('busca').style.display = 'none';
                document.getElementById('login').style.display = 'none';
                document.getElementById('perfil').style.display = 'none';
            }else{
                if (sectionId == 'agendamento'){
                    document.getElementById('perfil').style.display = 'none';
                    document.getElementById('busca').style.display = 'none';
                }else{
                    if (sectionId == 'perfil'){
                        document.getElementById('agendamento').style.display = 'none';
                        document.getElementById('busca').style.display = 'none';
                    }else{
                        if (sectionId == 'inicio'){
                            document.getElementById('login').style.display = 'none';
                            document.getElementById('main-content').style.display = 'none';
                            document.getElementById('perfil').style.display = 'none';
                            document.getElementById('agendamento').style.display = 'none';
                            document.getElementById('busca').style.display = 'none';
                            document.getElementById('menu').style.display = 'none';
                        }
                    }
                }
            }
        }
    }
   document.getElementById(sectionId).style.display = 'block';
}
   */

function showSection(sectionId) {
    // IDs das seções principais, incluindo sidebar
    const mainSections = ['inicio', 'login', 'menu'];

    // IDs das seções dentro de 'main-content'
    const contentSections = ['perfil', 'agendamento', 'busca'];

    // Esconde todas as seções principais
    mainSections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Esconde todas as seções de conteúdo, exceto a escolhida
    contentSections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Mostra a seção principal selecionada
    if (mainSections.includes(sectionId)) {
        document.getElementById(sectionId).style.display = 'block';

        // Exibe o menu e o conteúdo principal ao entrar na tela principal após login
        if (sectionId === 'menu') {
            document.getElementById('main-content').style.display = 'block';
        }
    } else if (contentSections.includes(sectionId)) {
        // Se a seção solicitada for uma seção de conteúdo, mostra o menu e o conteúdo principal
        document.getElementById('menu').style.display = 'block';
        document.getElementById('main-content').style.display = 'block';
        
        // Mostra apenas a seção de conteúdo específica
        document.getElementById(sectionId).style.display = 'block';
    }
}

botaoAcessarConta.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('login');
}))

botaoBuscarProfissionalTelaInicio.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('busca');
}))

botaoEntrarLogin.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('menu');
}))

botaoMeuPerfil.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('perfil');
}))

botaoAgendar.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('agendamento');
}))

botaoSair.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('inicio')
}))

botaoBuscarProfissionalCadastro.addEventListener('click', ((e) => {
    e.preventDefault();
    showSection('busca');
}))

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function updateSelectedOptions() {
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    const selectedOptions = [];
    console.log(checkboxes[0].attributes)
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedOptions.push(checkbox.value);
        }
    });

    const dropdownButton = document.getElementById('dropdownButton');
    if (selectedOptions.length > 0) {
        dropdownButton.textContent = selectedOptions.join(', ');
    } else {
        dropdownButton.textContent = '-';
    }
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
}
/*
function registerUser() {
    // Pega os valores do formulário de cadastro
    const name = document.getElementById("cadastro-nome").value;
    const phone = document.getElementById("cadastro-telefone").value;
    const email = document.getElementById("cadastro-email").value;
    
    // Preenche o perfil do usuário com as informações de cadastro
    document.getElementById("user-name").textContent = name;
    document.getElementById("user-phone").textContent = phone;
    document.getElementById("user-email").textContent = email;

    // Mostra a seção de perfil com a sidebar ativa
    showSection('perfil');
}*/
