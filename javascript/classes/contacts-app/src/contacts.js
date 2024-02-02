const contactsDiv = document.getElementById("contacts-list");
const form = document.querySelector("form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

const contacts = [];

// Contact Class
class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date(Date.now());
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  toString() {
    console.log(`Contact name: ${this.name}, and email: ${this.email}`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newContact = new Contact(nameInput.value, emailInput.value);
  console.log(newContact);
  console.log(newContact.toString);

  contacts.push(newContact);
  console.log(contacts);

  displayContact();

  nameInput.value = "";
  emailInput.value = "";
});

function displayContact() {
  contacts.forEach((contact) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    // adding the text
    h3.textContent = contact.name;
    h4.textContent = contact.email;

    // appending elements
    div.appendChild(h3);
    div.appendChild(h4);

    contactsDiv.appendChild(div);
  });
}
