const overlay = document.getElementById("lightbox-overlay");
const images = document.querySelectorAll("li > img");

images.forEach((images) => {
  images.addEventListener("click", () => {
    overlay.classList.add("active");

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  });
});

console.log(overlay);
console.log("connected");
