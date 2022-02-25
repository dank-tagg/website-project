document.addEventListener("DOMContentLoaded", function (event) {
    document.documentElement.setAttribute("theme", localStorage.theme);

    var themeSwitcher = document.getElementById("switch-theme");

    themeSwitcher.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("theme");

        var switchToTheme = currentTheme === "dark" ? "light" : "dark"
        localStorage.theme = switchToTheme

        document.documentElement.setAttribute("theme", switchToTheme);
    }
});