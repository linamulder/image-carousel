const buttons = document.querySelectorAll("[data-carousel-button]");

// I'm using datasets instead of classes to grab nodes to not confuse when grabbing classes
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // closest() searches up the DOM tree which matches closest selector
    // Dong this will ensure that no matter how many carousels wer have on our page, all of them will work fine (for re-use for larger web pages)
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");

    // Use the spread operator to grab the array of children of the UL, and then grab the index of the current slide with the data-active currently. Add the offset depending on whether the user hits next or previous arrow.
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    // This is to add the new dataset to the current active element
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
