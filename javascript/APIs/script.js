
//* not sure why i need this since its only one function but 
//* (The code starts with document.addEventListener('DOMContentLoaded', function () {...}). This event 
//* listener ensures that the JavaScript code inside it runs when the DOM (HTML structure) is fully loaded and ready.)
document.addEventListener("DOMContentLoaded", function () {
  //* Referencing my html elements
  const getAdviceBtn = document.getElementById("getAdviceBtn");
  const adviceText = document.createElement("h2");

  adviceText.style.color = '#0e9aa7';
  // adviceText.textContent = ''

  document.body.appendChild(adviceText)

  //* gotta have that 'click' event listener you know what im sayin
  getAdviceBtn.addEventListener("click", function () { 
    fetch("https://api.adviceslip.com/advice") //* request the api using fetch
      .then((response) => response.json()) //* convert response to JSON
      .then((data) => { //* if successful this code will run
        adviceText.textContent = data.slip.advice;
        console.log(data);
      })
      .catch((error) => { //* this code will run if there is errors in the request
        console.error("Error fetching advice:", error);
        adviceText.textContent = "Error fetching advice. Please try again.";
      });
  });
});



// async function fetchData() {
//   const getAdviceBtn = document.getElementById("getAdviceBtn");
//   const adviceText = document.createElement("h2");

//   adviceText.style.color = '#0e9aa7';
//   adviceText.textContent = '';

//   document.body.appendChild(adviceText);

//   getAdviceBtn.addEventListener("click", async function () {
//     try {
//       const response = await fetch("https://api.adviceslip.com/advice");
//       const data = await response.json();
//       adviceText.textContent = data.slip.advice;
//     } catch (error) {
//       console.error("Error fetching advice:", error);
//       adviceText.textContent = "Error fetching advice. Please try again.";
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", fetchData);