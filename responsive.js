document.addEventListener("DOMContentLoaded", function () {
  const countrySections = document.querySelectorAll(".country-section");
  const countryLinks = document.querySelectorAll(".continents-list li[data-country]");
  const allSection = document.getElementById("all");
  const gridContainer = document.querySelector(".grid-container");

  console.log("Script loaded!"); // Debugging line

  // Ensure all sections except "All" are hidden
  countrySections.forEach((section) => {
      if (section.id !== "all") {
          section.style.display = "none";
      }
  });

  // Show the "All" section and its content automatically on page load
  if (allSection) {
      console.log("All section found!"); // Debugging line
      allSection.style.display = "block";

      // Make sure all items inside "All" are visible
      const allItems = allSection.querySelectorAll(".grid-item");
      allItems.forEach((item) => {
          item.style.display = "block";
          console.log("Showing:", item); // Debugging each item
      });
  } else {
      console.log("All section NOT found! Check HTML.");
  }

  // Handle filtering when a continent is clicked
  countryLinks.forEach((link) => {
      link.addEventListener("click", function () {
          const country = this.getAttribute("data-country");

          if (country === "all") {
              countrySections.forEach((section) => {
                  section.style.display = "block";
              });
          } else {
              countrySections.forEach((section) => {
                  section.style.display = "none";
              });

              const selectedSection = document.getElementById(country);
              if (selectedSection) {
                  selectedSection.style.display = "block";
              }
          }
      });
  });
});


  const galleryContainer = document.querySelector(".gallery-container");
  const galleryControlsContainer = document.querySelector(".gallery-controls");
  const galleryControls = ["previous", "next"];
  const galleryItems = document.querySelectorAll(".gallery-item");
  
  class Carousel {
    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
    }
  
    updateGallery() {
      this.carouselArray.forEach((el) => {
        el.classList.remove("gallery-item-1");
        el.classList.remove("gallery-item-2");
        el.classList.remove("gallery-item-3");
        el.classList.remove("gallery-item-4");
        el.classList.remove("gallery-item-5");
      });
  
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 1}`);
      });
    }
    setCurrentState(direction) {
      if (direction.className == "gallery-controls-previous") {
        this.carouselArray.unshift(this.carouselArray.pop());
      } else {
        this.carouselArray.push(this.carouselArray.shift());
      }
      this.updateGallery();
    }
    setControls() {
      this.carouselControls.forEach((control) => {
        galleryControlsContainer.appendChild(
          document.createElement("button")
        ).className = `gallery-controls-${control}`;
        document.querySelector(`.gallery-controls-${control}`).innerText =
          control;
      });
    }
    useControls() {
      const triggers = [...galleryControlsContainer.childNodes];
      triggers.forEach((control) => {
        control.addEventListener("click", (e) => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }
  }
  const exampleCarousel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls
  );
  
  exampleCarousel.setControls();
  exampleCarousel.useControls();
  
  
  
  