document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de animação para o formulário de contato
    const contatoForm = document.getElementById('contatoForm');
    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado!');
    });

    // Scroll suave para links do menu
    const linksMenu = document.querySelectorAll('nav ul li a');
    linksMenu.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
