$(document).ready(function() {
    AOS.init({
        easeing: "easeing",
        duration: 1800,
        once: true
    });
});
const markup = `
<nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href="index.html">Tortadekor/Főmenü</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img class="navbar-icon" src="image/bars-solid.svg">
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="index.html#Képzés">Tematika</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html#Információk">Információk</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="eszkozok.html">Eszközök</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html#Jelentkezés">Jelentkezés</a>
            </li>
        </ul>
    </div>
</nav>
`

document.body.innerHTML = markup + document.body.innerHTML;