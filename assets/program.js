document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANO ATUAL NO FOOTER
    // =========================

    const anoAtual = document.getElementById("anoAtual");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }


    // =========================
    // BOTÃO VOLTAR AO TOPO
    // =========================

    const btnTopo = document.getElementById("btnTopo");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            btnTopo.classList.add("mostrar");
        } else {
            btnTopo.classList.remove("mostrar");
        }

    });

    if (btnTopo) {

        btnTopo.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =========================
    // FECHAR MENU NO CELULAR
    // =========================

    const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");
    const menu = document.getElementById("menuPrincipal");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu.classList.contains("show")) {

                const menuBootstrap =
                    bootstrap.Collapse.getInstance(menu) ||
                    new bootstrap.Collapse(menu, {
                        toggle: false
                    });

                menuBootstrap.hide();
            }

        });

    });


    // =========================
    // ANIMAÇÕES DE ENTRADA
    // =========================

    const elementosAnimados = document.querySelectorAll(
        ".section-title, .about-card, .info-card, .knowledge-card, .skill-card, .project-card, .objective-card, .contact-card"
    );

    const observador = new IntersectionObserver(
        function (elementos) {

            elementos.forEach(function (elemento) {

                if (elemento.isIntersecting) {

                    elemento.target.classList.add("aparecer");

                    observador.unobserve(elemento.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementosAnimados.forEach(function (elemento) {

        elemento.classList.add("animar");

        observador.observe(elemento);

    });


    // =========================
    // ANIMAÇÃO DO HERO
    // =========================

    const heroTexto = document.querySelector(".hero-section .col-lg-7");
    const heroImagem = document.querySelector(".hero-section .col-lg-5");

    if (heroTexto) {
        heroTexto.classList.add("hero-entrada");
    }

    if (heroImagem) {
        heroImagem.classList.add("hero-entrada-imagem");
    }

});