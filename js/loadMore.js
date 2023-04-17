$(document).ready(function () {
  const loadMore = document.querySelector(".btn-loadmore");

  let currentNumber = 3;
  loadMore.addEventListener("click", (e) => {
    const elementList = [...document.querySelectorAll(".list-group-item")];
    e.target.classList.add("show-loader");

    for (let i = currentNumber; i < currentNumber + 3; i++) {
      setTimeout(function () {
        e.target.classList.remove("show-loader");
        if (elementList[i]) {
          elementList[i].style.display = "flex";
        }
      }, 2000);
    }
    currentNumber += 3;
    if (currentNumber >= elementList.length) {
      event.target.classList.add("loaded");
    }
  });
});
