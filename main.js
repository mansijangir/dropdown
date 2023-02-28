const containers = document.querySelectorAll(".patient-info__input-container");

let ind;
containers.forEach((container, index) => {
  container.addEventListener("click", () => {
    if (ind === index) {
      container
        .querySelector(".patient-info__option__list")
        .classList.remove("show-dropdown");
      container.querySelector(".fa-caret-right").classList.remove("rotate-icon");
      ind = undefined;
    } else {
      containers.forEach((element) => {
        element
          .querySelector(".patient-info__option__list")
          .classList.remove("show-dropdown");
        element.querySelector(".fa-caret-right").classList.remove("rotate-icon");
      });
      container
        .querySelector(".patient-info__option__list")
        .classList.add("show-dropdown");
      container.querySelector(".fa-caret-right").classList.add("rotate-icon");
      ind = index;
    }
  });

  const list_item = container.querySelectorAll(".patient-info__option__list__item")
  list_item.forEach(item=>
    {
      item.addEventListener("click", () => {
        container.querySelector(".patient-info__placeholder").innerHTML=item.innerText;
      }
      )
    })

});

