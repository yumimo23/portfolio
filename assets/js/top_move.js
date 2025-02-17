const btn = document.getElementById("nav__fotterUpBtn");
btn.addEventListener("click", () => {
    window.scroll(
        {
            top: 0,
            behavior: "smooth",
        }
    );
});
