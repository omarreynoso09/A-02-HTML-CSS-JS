let count = 5;

const remove = document.getElementById("remove");
const add = document.getElementById("add");
const numberCounter = document.getElementById("count");
const stars = document.querySelector(".stars");

const updateStars = () => {
  stars.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "⭐️";
    stars.append(star);
  }
};

const updateNumber = () => {
  numberCounter.textContent = count;
  updateStars();
};
updateNumber();

remove.addEventListener("click", () => {
  if (count > 0) count -= 1;
  updateNumber();
});

add.addEventListener("click", () => {
  if (count <= 4) {
    count += 1;
    updateNumber();
  }
});
