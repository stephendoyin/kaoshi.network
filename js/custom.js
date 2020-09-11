let faqText = document.querySelectorAll(".faq__content");
let faqHeader = document.querySelectorAll(".faq__header");
let faqItem = document.querySelectorAll(".faq__item");
animHeight();
triggerEvent();

function triggerEvent() {
  window.addEventListener("resize", () => {
    animHeight();
  });
}

function animHeight() {
  faqHeader.forEach((element, i) => {
    faqItem[i].style.height = `${element.clientHeight}px`;

    element.addEventListener("click", e => {
      changeHeight(e, i);
    });
  });
}

function changeHeight(e, i) {
  faqItem.forEach((element, x) => {
    if (i !== x) {
      faqItem[x].style.height = `${faqHeader[x].clientHeight}px`;
      faqHeader[x].classList.remove("active");
    } else if (
      i === x &&
      element.clientHeight > faqHeader[x].clientHeight + 2
    ) {
      element.style.height = `${faqHeader[x].clientHeight}px`;
      faqHeader[i].classList.remove("active");
    } else {
      faqHeader[i].classList.add("active");
      faqItem[i].style.height = `${
        faqHeader[x].clientHeight + 17 + faqText[x].clientHeight
      }px`;
    }
  });
}
