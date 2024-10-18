document.addEventListener("DOMContentLoaded", () => {
    const appBar = document.createElement("nav");
    appBar.innerHTML = `
      <div class="logo">
        <div class="logo-text">Bimbel, Kursus dan Web Developer  </div>
      </div>
      <button class="hamburger">
        <img src="../images/heros/burger-bar.png" alt="menu-hamburger">
      </button>
      <ul class="nav-links">
        <li class = "tittle"><a href="/">Home</a></li>
        <li class = "tittle"><a href="https://www.linkedin.com/in/tommy-azwar-muslim-64a969263/">About us</a></li>
        <li class = "tittle"><a href="https://www.youtube.com/channel/UCoOL7WXZvz4VQYPv9HDYsuw">Favorite</a></li>
        <li class = "tittle"><a href="#restaurant-list">Content</a></li>
 
      </ul>
    `;
    document.getElementById("app").appendChild(appBar);
    const jumbotron = document.createElement("section");
    jumbotron.innerHTML = `
    <img src = "../images/heros/logo ke 9.png" alt ="hero">
    `
    jumbotron.classList.add('hero');
    document.getElementById("app").appendChild(jumbotron)
  });
  
  
  