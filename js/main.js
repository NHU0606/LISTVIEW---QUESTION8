$(document).ready(function () {
  const listView = document.getElementById("list-group");

  fetch("../json/item.json")
    .then((respone) => respone.json())
    .then((itemArray) => {
      let itemList = "";
      itemArray.forEach((item) => {
        itemList += `
            <li class="list-group-item">
                <div class="list-group-item-left">
                    <div class="img-item"
                        style="background-image: url(${item.image});">
                    </div>
                    <div class="text--item">
                        <h3 class="text--item__title">${item.name}</h3>
                        <p class="text--item__des">
                            ${item.des}
                        </p>
                    </div>
                </div>
                <div class="list-group-item-right">
                    <button type="button" class="btn btn-secondary btn-review">
                        Review
                    </button>
                </div>
            </li>
        `;
      });

      listView.innerHTML = itemList;

    });
});
