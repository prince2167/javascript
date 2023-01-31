const themeSelector = document.getElementById("themeSelector");

themeSelector.addEventListener("change", (e) => {
  localStorage.setItem("theme", e.target.value);
  changeTheme(e.target.value);
});

const changeTheme = (theme) => {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#222";
  } else if (theme === "light") {
    document.body.style.backgroundColor = "#e5e5e5";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
};

window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    changeTheme(e.newValue);
    themeSelector.value = e.newValue; 
  }
});
