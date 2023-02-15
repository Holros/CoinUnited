//Block For NavBar
{
  let visibility = document.getElementById("dropdown2").style.display;
  console.log(visibility);
  function hi() {
    if (visibility == "flex") {
      visibility = "none";
      document.getElementById("menu_cancel").className = "fa-solid fa-bars";
    } else {
      visibility = "flex";
      document.getElementById("menu_cancel").className = "fa-solid fa-xmark";
    }
    console.log(visibility);
    document.getElementById("dropdown2").style.display = visibility;
  }

  document.getElementById("menu_cancel").addEventListener("click", hi);
}

//block for Search Bar
{
  let input_container = document.querySelectorAll(".input-container");
  let input = document.querySelectorAll(".input-container input");
  let icon = document.querySelectorAll(".input-container i");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focusin", change);
  }
  function change() {
    for (let i = 0; i < input_container.length; i++) {
      input_container[i].style.border = "1px solid rgb(237, 139, 24)";
      icon[i].style.color = "rgb(237, 139, 24)";
    }
  }
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focusout", changeBack);
  }
  function changeBack() {
    for (let i = 0; i < input_container.length; i++) {
      input_container[i].style.border = "1px solid rgba(118, 128, 143, 0.502)";
      icon[i].style.color = "rgba(118, 128, 143, 0.502)";
    }
  }
}
//block for tags
{
  let tag_span = document.querySelectorAll(".pop-tag-diff span");
  let tag_span_diff = document.querySelectorAll(".pop-diff span");
  for (let i = 0; i < tag_span.length; i++) {
    tag_span[i].addEventListener("click", change);
  }
  for (let i = 0; i < tag_span_diff.length; i++) {
    tag_span_diff[i].addEventListener("click", changeBackground);
  }
  function change() {
    if (this.lastChild.className == "fa-solid fa-plus") {
      this.lastChild.className = "fa-solid fa-check";
    } else {
      this.lastChild.className = "fa-solid fa-plus";
    }
  }
  function changeBackground() {
    if (this.style.backgroundColor == "") {
      this.style.backgroundColor = this.className;
    } else {
      this.style.backgroundColor = "";
    }
    console.log(this.style.backgroundColor);
  }
}
