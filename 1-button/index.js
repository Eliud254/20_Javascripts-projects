const btnElement = document.querySelector(`button`);
const spanElement = document.querySelector(`span`); // Assuming you want to use this element later

btnElement.addEventListener(`click`, () => {
  const name = prompt(`Please enter your name:`); // Using template literals and storing the response in a variable
  if (name) { // Check if a name was entered (prompt can be canceled)
    spanElement.textContent = `Hello, ${name}!`; // Update the span element's text content with a greeting
  } else {
    console.log("No name entered."); // Optional: Log a message if no name was entered
  }
});
