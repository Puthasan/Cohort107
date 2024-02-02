// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const topMenuLinks = []; // creates an array for topMenuLinks

for (let i = 0; i < menuLinks.length; i++) {
  const anchorLink = document.createElement("a");
  topMenuLinks.push(anchorLink); // Appends the new elements to the end of Array
  anchorLink.setAttribute("href", menuLinks[i].href);
  anchorLink.textContent = menuLinks[i].text;
  topMenuEl.appendChild(anchorLink);
}
console.log(menuLinks);

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// const topMenuLinks = document.querySelectorAll('a');
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  this.querySelectorAll("a").forEach((anchor) => {
    if (e.target !== anchor) {
      anchor.classList.remove("active");
    }
  });
  if (e.target.tagName !== "A") return;
  if (e.target.classList.value.includes("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }
});

console.log(topMenuLinks);
