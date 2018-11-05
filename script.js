var loginWindow = document.getElementsByClassName("login-window")[0],
    overlay = document.getElementsByClassName("overlay")[0];
function openLoginWindow() {
  loginWindow.style.display = "flex";
  overlay.style.display = "block";
}
function closeLoginWindow() {
  loginWindow.style.display = "none";
  overlay.style.display = "none";
}
document.getElementsByClassName("login-window-open")[0].addEventListener("click", openLoginWindow);
document.getElementsByClassName("login-window-close")[0].addEventListener("click", closeLoginWindow);
document.getElementsByClassName("login-window-login")[0].addEventListener("click", closeLoginWindow);
document.getElementsByClassName("overlay")[0].addEventListener("click", closeLoginWindow);