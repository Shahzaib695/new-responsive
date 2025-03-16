document.addEventListener("DOMContentLoaded", function () {
  const countrySections = document.querySelectorAll(".country-section");
  const countryLinks = document.querySelectorAll(".continents-list li[data-country]");
  const allSection = document.getElementById("all");

  console.log("✅ Script loaded!");

  // ✅ Hide all sections first
  countrySections.forEach((section) => {
      section.style.display = "none";
      section.style.opacity = "0";
      section.style.height = "0";
  });

  // ✅ Show "All" section by default
  if (allSection) {
      allSection.style.display = "block";
      allSection.style.opacity = "1";
      allSection.style.height = "auto";
  }

  // ✅ Filtering when a continent is clicked
  countryLinks.forEach((link) => {
      link.addEventListener("click", function () {
          const country = this.getAttribute("data-country");
          console.log("🌍 Clicked:", country); // Debugging log

          // ✅ Hide all sections first
          countrySections.forEach((section) => {
              section.style.display = "none";
              section.style.opacity = "0";
              section.style.height = "0";
          });

          // ✅ Show "All" section when clicking "All"
          if (country === "all") {
              allSection.style.display = "block";
              allSection.style.opacity = "1";
              allSection.style.height = "auto";
              console.log("✅ Showing all parks");
              return;
          }

          // ✅ Show only the selected country section
          const selectedSection = document.getElementById(country);
          if (selectedSection) {
              selectedSection.style.display = "block";
              selectedSection.style.opacity = "1";
              selectedSection.style.height = "auto";
              console.log("✅ Showing section:", country);
          } else {
              console.log("❌ No section found for:", country);
          }
      });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // Show 3 slides at a time
  spaceBetween: 20, // Adjust space between slides
  loop: true,
  autoplay: {
    delay: 3000, // 3 seconds per slide
    disableOnInteraction: false, // Keeps autoplay running even if user interacts
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
  }
});
