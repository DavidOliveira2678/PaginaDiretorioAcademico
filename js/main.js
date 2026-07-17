const navMarkup = `
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-3" href="index.html">
      <img src="assets/img/logo.png" alt="Logo DA-ADS" height="40">
      Diretório Acadêmico de ADS
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Alternar navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menuPrincipal">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="index.html" data-nav-link>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sobre.html" data-nav-link>Sobre</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const footerMarkup = `
<footer class="bg-primary text-white text-center py-3 mt-auto">
  <p class="mb-0">
    &copy; <strong>2026 Diretório Acadêmico de ADS</strong>
    <span class="mx-1">·</span>
    <span>IFPE Campus Paulista</span>
  </p>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-include]').forEach((element) => {
		const includePath = element.getAttribute('data-include');

		if (includePath && includePath.includes('nav.html')) {
			element.outerHTML = navMarkup;
			return;
		}

		if (includePath && includePath.includes('footer.html')) {
			element.outerHTML = footerMarkup;
		}
	});

	const currentPage = window.location.pathname.split('/').pop() || 'index.html';

	document.querySelectorAll('[data-nav-link]').forEach((link) => {
		const linkPage = link.getAttribute('href');

		if (linkPage === currentPage) {
			link.classList.add('active');
			link.setAttribute('aria-current', 'page');
		}
	});
});
