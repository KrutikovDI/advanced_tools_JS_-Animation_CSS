const btnCollapse = document.querySelector(".btn-collapse");
const collapse = document.querySelector(".collapse");
const copy = document.querySelector(".copy");
const fieldCollapse = document.querySelector(".field-collapse");

btnCollapse.addEventListener("click", () => {
  if (collapse.classList.contains("stop")) {
    collapse.classList.remove("stop");
    copy.classList.remove("stop");
  }
  collapse.classList.add("animation-collapse");
  copy.classList.add("animation-copy");
  btnCollapse.classList.add("btn-active");
});

fieldCollapse.addEventListener("mouseover", (e) => {
  if (e.target == btnCollapse) return;
  collapse.classList.add("stop");
  copy.classList.add("stop");
});
