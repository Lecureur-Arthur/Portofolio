document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si on est dans un sous-dossier (comme /projects/)
    // On regarde si le fichier actuel est dans le dossier "projects"
    const isSubFolder = window.location.pathname.includes("/projects/");
    
    // Si on est dans un sous-dossier, on ajoute "../", sinon rien.
    const pathPrefix = isSubFolder ? "../" : "";

    /* --- GÉNÉRATION DU HEADER --- */
    const headerHTML = `
    <nav>
        <ul>
            <li><a href="${pathPrefix}index.html">Accueil</a></li>
            <li><a href="${pathPrefix}about.html">À propos</a></li>
            <li><a href="${pathPrefix}projects.html">Projets</a></li>
            <li><a href="${pathPrefix}experience.html">Expériences</a></li>
        </ul>
    </nav>
    `;

    // On injecte le HTML dans la balise <header>
    const headerElement = document.querySelector('header.navbar');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    /* --- GÉNÉRATION DU FOOTER --- */
    const footerHTML = `
        <section class="contact">
            <h2>Me Contacter & Me Suivre</h2>
            <p><strong>Email :</strong> <a href="mailto:arthur.lecureur@gmail.com">arthur.lecureur@gmail.com</a></p>
            <p style="margin-top: 15px; line-height: 1.8;">
                <a href="https://github.com/Lecureur-Arthur" target="_blank">GitHub</a> • 
                <a href="https://www.twitch.tv/zerykoll" target="_blank">Twitch</a> • 
                <a href="https://www.youtube.com/channel/UCm30bHXZubIY58ss464HEtw" target="_blank">YouTube</a> • 
                <a href="https://discord.com/invite/vzcCCcvaFe" target="_blank">Discord</a>
            </p>
        </section>
        <p>© 2024 Arthur Lecureur - Navigateur des codes & aventure</p>
    `;

    // On injecte le HTML dans la balise <footer>
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});