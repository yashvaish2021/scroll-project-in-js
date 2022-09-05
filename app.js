// change the date dynamially

const changeDate = window.document.querySelector("#date");

const date = new Date();
changeDate.textContent = date.getFullYear();

//close links

const toggleBtn = window.document.querySelector(".nav-toggle");

const linksContainer = window.document.querySelector(".links-container");

const links = window.document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0px !important`;
  }
});

//fix navbar

const navBar = window.document.querySelector("#nav");

const topBtn = window.document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const navbarHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = this.window.pageYOffset;
  if (scrollHeight > navbarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});

//scroll

const scrollLinks = window.document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const getLink = e.currentTarget.getAttribute("href").slice(1);
    const element = window.document.getElementById(getLink);
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNavbar = navBar.classList.contains("fixed-nav");
    let elementPosition = element.offsetTop - navHeight;
    if (!fixedNavbar) {
      elementPosition = elementPosition - navHeight;
    }
    if (navHeight > 82) {
      elementPosition = elementPosition + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: elementPosition,
    });
    linksContainer.style.height = 0;
  });
});
