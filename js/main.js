document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach((element) => {
    const includePath = element.getAttribute('data-include');

    if (includePath) {
      fetch(includePath)
        .then(response => {
          if (!response.ok) throw new Error('Erro ao carregar e exibir o componente: ' + includePath);
          return response.text();
        })
        .then(html => {
          element.outerHTML = html;

          if (includePath.includes('nav.html')) {
            marcarLinkAtivo();
          }
        })
        .catch(error => console.error(error));
    }
  });
});

function linkAtivo() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}