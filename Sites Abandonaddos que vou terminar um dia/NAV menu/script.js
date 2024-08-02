// Função para alternar entre abas
function toggleTab(tabId) {
    const tabs = document.querySelectorAll('.aba-conteudo');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

// Adicione um ouvinte de evento para cada link da aba
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const tabId = this.getAttribute('href').substring(1);
        toggleTab(tabId);
    });
});

// Ative a primeira aba por padrão
toggleTab('home');
