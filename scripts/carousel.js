let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");

function showNextItem() {
    items[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("visible");
}

setInterval(showNextItem, 2000);
