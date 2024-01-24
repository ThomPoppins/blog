let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      document.querySelector(".nav-links").classList.remove("nav-up");
    } else if (
      currentScroll > lastScroll &&
      !document.querySelector(".nav-links").classList.contains("nav-up")
    ) {
      document.querySelector(".nav-links").classList.add("nav-up");
    } else if (
      currentScroll < lastScroll &&
      document.querySelector(".nav-links").classList.contains("nav-up")
    ) {
      document.querySelector(".nav-links").classList.remove("nav-up");
    }
    lastScroll = currentScroll;
  });

  