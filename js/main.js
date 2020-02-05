$(document).ready(function() {
  $(function() {
    $.scrollify({
      offset: -60,
      section: ".page-section",
      before: function(index, section) {
        $(".navigation li").on("click", function() {
          $(".navigation li").removeClass("active");
          $(this).addClass("active");
        });
      },
      after: function(index, section) {
        $(".navigation li").each(function(i, navItem) {
          i == index
            ? $(navItem).addClass("active")
            : $(navItem).removeClass("active");
        });

      }
    });
  });

  $(".navigation a").on("click", $.scrollify.move);

  const htmlBar = document.querySelector(".bar-html");
  const cssBar = document.querySelector(".bar-css");
  const jsBar = document.querySelector(".bar-javascript");
  const angularBar = document.querySelector(".bar-angular");
  const phpBar = document.querySelector(".bar-php");
  const nodeBar = document.querySelector(".bar-node");

  var t1 = new TimelineLite();

  t1.fromTo(
    htmlBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(95% - 6px)", ease: Power4.easeOut }
  )
    .fromTo(
      cssBar,
      0.75,
      { width: "calc(0% - 6px)" },
      { width: "calc(80% - 6px)", ease: Power4.easeOut }
    )
    .fromTo(
      jsBar,
      0.75,
      { width: "calc(0% - 6px)" },
      { width: "calc(70% - 6px)", ease: Power4.easeOut }
    )
    .fromTo(
      angularBar,
      0.75,
      { width: "calc(0% - 6px)" },
      { width: "calc(70% - 6px)", ease: Power4.easeOut }
    )
    .fromTo(
      phpBar,
      0.75,
      { width: "calc(0% - 6px)" },
      { width: "calc(65% - 6px)", ease: Power4.easeOut }
    )
    .fromTo(
      nodeBar,
      0.75,
      { width: "calc(0% - 6px)" },
      { width: "calc(80% - 6px)", ease: Power4.easeOut }
    );

  const contoller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    triggerHook: 0
  })
    .setTween(t1)
    .addTo(contoller);

  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const sidebarBackground = document.querySelector(".sidebarCloseTrigger");

    // Open Sidebar
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      sidebarBackground.style.display = 'block';

      burger.classList.toggle("toggle");
    });

    // Close Sidebar
    sidebarBackground.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      sidebarBackground.style.display = 'none';
    })
  };
  navSlide();

  // Open Modal On Click
  document.querySelectorAll(".contactUs").forEach(function(e, i) {
    e.addEventListener("click", () => {
      addClass(document.querySelector("body"), "o-h");
      addClass(document.querySelector(".modal"), "contact-modal-show");
      document.querySelector(".modal").setAttribute("data-active", "on");
      addClass(
        document.querySelector(".modal-container"),
        "modal-container-show"
      );
    });
  });

  // Close Modal On Click
  document.querySelectorAll(".close-modal-trigger").forEach(function(e, i) {
    e.addEventListener("click", () => {
      removeClass(document.querySelector("body"), "o-h");
      removeClass(document.querySelector(".modal"), "contact-modal-show");
      document.querySelector(".modal").setAttribute("data-active", "off");
      removeClass(
        document.querySelector(".modal-container"),
        "modal-container-show"
      );
    });
  });

  // Change Navbar Color After Scrolling

  var scroll_start = 0;
  var startchange = $("#startchange");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(document).scrollTop();
      if (scroll_start > offset.top) {
        $(".navigation").css("background-color", "#131313");
      } else {
        $(".navigation").css("background-color", "transparent");
      }
    });
  }
});

// Function To Check If Element Has Class
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

// Function To Add Class To Element
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

// Function To Remove Class Of Element
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

const showRequiredCategory = event => {
  const getId = event.id;
  const links = document.querySelectorAll(".works-category button");
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }
  event.classList.add("active");

  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class ^= "category-"]');
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }
  getCategory.classList.remove("hideCategory");
  getCategory.classList.add("showCategory");
};
