document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        // Remove a classe 'active' de todas as abas
        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove a classe 'active' de todo o conteúdo das abas
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Adiciona a classe 'active' à aba clicada
        this.classList.add('active');

        // Mostra o conteúdo correspondente
        document.getElementById(tabId).classList.add('active');
    });
});
