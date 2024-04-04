let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hey Oya Comeback :(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})