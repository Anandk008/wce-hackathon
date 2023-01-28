//Sticky Menu
window.addEventListener("scroll", function () {
  var v = document.getElementById("nav-bar");
  if (window.scrollY > 3) {
    // this.document.querySelector(".nav-box").style.opacity = 1;
    if (v.classList !== "nav-box") {
      v.className += "nav-box ";
    }
    // v.classList.add("nav-box") ;
    // v.setAttribute("class","nav-box");
    // v.classList.toggle("nav-box");
  } else {
    v.className = "nav";
    // this.document.querySelector(".nav-box").style.opacity = 0;
  }
});

// // Lottie
// var animation = bodymovin.loadAnimation({
//   // animationData: { /* ... */ },
//   container: document.getElementById("svg"), // required
//   path: "lottie1.json", // required
//   renderer: "svg", // required
//   loop: true, // optional
//   autoplay: true, // optional
//   name: "Demo Animation", // optional
// });

// // typing Effect
// const carouselText = [
//   { text: "Prople", color: "red" },
//   { text: "Mentor", color: "orange" },
//   { text: "Hacker", color: "yellow" },
//   { text: "Prizes", color: "green" },
// ];

// $(document).ready(async function () {
//   carousel(carouselText, "#feature-text");
// });

// async function typeSentence(sentence, eleRef, delay = 100) {
//   const letters = sentence.split("");
//   let i = 0;
//   while (i < letters.length) {
//     await waitForMs(delay);
//     $(eleRef).append(letters[i]);
//     i++;
//   }
//   return;
// }

// async function deleteSentence(eleRef) {
//   const sentence = $(eleRef).html();
//   const letters = sentence.split("");
//   let i = 0;
//   while (letters.length > 0) {
//     await waitForMs(100);
//     letters.pop();
//     $(eleRef).html(letters.join(""));
//   }
// }

// async function carousel(carouselList, eleRef) {
//   var i = 0;
//   while (true) {
//     updateFontColor(eleRef, carouselList[i].color);
//     await typeSentence(carouselList[i].text, eleRef);
//     await waitForMs(1500);
//     await deleteSentence(eleRef);
//     await waitForMs(500);
//     i++;
//     if (i >= carouselList.length) {
//       i = 0;
//     }
//   }
// }

// function updateFontColor(eleRef, color) {
//   $(eleRef).css("color", color);
// }

// function waitForMs(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// //Sticky Menu
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 150) {
//     this.document.this.document.querySelector(".nav-bar").className +=
//       "nav-box";
//   } else {
//     this.document.querySelector("#top-nav").style.opacity = 1;
//   }
// });

// // Smooth Scrolling

// $(document).ready(function () {
//   $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top - 110,
//         },
//         1500,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash - 100;
//         }
//       );
//     } // End if
//   });
// });
