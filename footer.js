document.addEventListener("DOMContentLoaded", function () {

  const titles = document.querySelectorAll(".footer__link--title");

  titles.forEach(title => {

    title.addEventListener("click", function () {

      const list = this.nextElementSibling;
      list.classList.toggle("active");

    });

  });

});