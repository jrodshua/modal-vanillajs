const pageDiv = document.getElementById("page");

function handleClick(e) {
  e.preventDefault();
  const modal = document.querySelector(".modal-container").classList;
  const overlay = document.querySelector(".overlay").classList;
  target = e.target.className;

  if (target === "page-delete") {
    modal.add("modal--showing");
    overlay.add("overlay--showing");
  } else if (target === "modal-can") {
    modal.remove("modal--showing");
    overlay.remove("overlay--showing");
  }
}

pageDiv.addEventListener("click", handleClick);
