const buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
