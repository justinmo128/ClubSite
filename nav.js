let nav = `
<!-- MOBILE NAVIGATION -->
<nav class="mobilenavi">
    <div style="margin-right: 10px;">
        <button class="hamburger mobile-navibutton" id="menubutton">
        <span class="menuthing material-symbols-outlined">menu</span>
        </button>
    </div>
    <div style="display: flex; align-items: center;">
        <div class="titlemed"><img src="img/logoimg.png" alt="Harry Ainlay's Party Video Games Club"/></div>
        <div class="titlesmall"><img src="img/logoimgsupersmall.png" alt="Harry Ainlay's Party Video Games Club"/></div>
        <div class="titleicon"><img src="img/logoiconnew.png"/></div>
    </div>
    <div class="mobilemenu" id="mobilemenu">
        <button class="hamburger mobile-navibutton" id="closemenubutton">
            <span class="menuthing material-symbols-outlined">menu_open</span>
        </button>
        <a href="/index.html">
            <button class="mobile-navibutton">
                <span class="material-symbols-outlined">home</span>Home
            </button>
        </a>
        <a href="/info.html">
            <button class="mobile-navibutton">
                <span class="material-symbols-outlined">info</span>Info
            </button>
        </a>
        <a href="https://discord.gg/ydxYqvW5b6" target="_blank" class="navilink">
            <button class="mobile-navibutton">
                <span class="fa-brands fa-discord" style="font-size: 18px;"></span>Discord
            </button>
        </a>
        <a href="/saul.html">
            <button class="mobile-navibutton">
                <span class="material-symbols-outlined">groups</span>Classroom
            </button>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc692neao5gNpTxfPnpewlATrX_OPri3YXsYG0KEozTpWDrHg/viewform?usp=sf_link" target="_blank">
            <button class="mobile-navibutton">
                <span class="material-icons">list</span>Google Form
            </button>
        </a>
        <a href="/pong.html">
            <button class="mobile-navibutton">
                <span class="material-icons">start</span>Pong (PC Only)
            </button>
        </a>
        <a href="/itemrace.html">
            <button class="mobile-navibutton">
                <span class="material-icons">apps</span>Item Race (PC Only)
            </button>
        </a>
    </div>
</nav>

<!-- DESKTOP NAVIGATION -->
<nav class="desktopnavi" id="desktopnavi">
    <div><img src="img/logoiconnew.png" alt="Harry Ainlay's Party Video Games Club" style="width: 80px; margin-bottom: 10px; border-radius: 50%"/></div>
    <div>
        <a href="/index.html" class="navilink">
            <button class="navibutton">
                <span class="material-symbols-outlined">home</span>
            </button>
            <p>Home</p>
        </a>
        <a href="/info.html" class="navilink">
            <button class="navibutton">
                <span class="material-symbols-outlined">info</span>
            </button>
            <p>Games</p>
        </a>
        <a href="https://discord.gg/ydxYqvW5b6" target="_blank" class="navilink">
            <button class="navibutton">
                <i class="fa-brands fa-discord"></i>
            </button>
            <p>Discord</p>
        </a>
        <a href="/saul.html" class="navilink">
            <button class="navibutton">
                <span class="material-symbols-outlined">groups</span>
            </button>
            <p>Classroom</p>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc692neao5gNpTxfPnpewlATrX_OPri3YXsYG0KEozTpWDrHg/viewform?usp=sf_link" target="_blank" class="navilink">
            <button class="navibutton">
                <span class="material-icons">list</span>
            </button>
            <p>Form</p>
        </a>
        <a href="/pong.html" class="navilink">
            <button class="navibutton">
                <span class="material-icons">start</span>
            </button>
            <p>Pong</p>
        </a>
        <a href="/itemrace.html" class="navilink">
            <button class="navibutton">
                <span class="material-icons">apps</span>
            </button>
            <p>Item Race</p>
        </a>
    </div>
</nav>`;

document.write(nav)
let desktopLinks = document.getElementById("desktopnavi").lastElementChild;
let mobileLinks = document.getElementById("mobilemenu");
for (let i = 0; i < desktopLinks.children.length; i++) {
    if (desktopLinks.children[i].getAttribute('href') == window.location.pathname) {
        desktopLinks.children[i].firstElementChild.className = "active navibutton";
        mobileLinks.children[i + 1].firstElementChild.className = "active mobile-navibutton";
    }
}