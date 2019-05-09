"use strict";
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [
      new Contact("Homer Simpson", "homer@springfieldnuclear.gov", "111-222-3333", "TV Dad"),
      new Contact("Bruce Wayne", "bruce@wayne-enterprises.com", "333-555-9999", "Batman"),
      new Contact("Scrooge McDuck", "richduck@scrooge.com", "333-555-9999", "Rich Duck"),
    ];
  }
  addContact(event) {
    event.preventDefault();
    let contactInfo = document.querySelectorAll("input");
    let div = document.createElement("div");
    div.classList.add("contact_card", "animated", "bounceInDown");
    div.innerHTML = `
    <p>Name: ${contactInfo[0].value} </p>
    <p> Email: ${contactInfo[1].value}</p>
    <p> Phone: ${contactInfo[2].value}</p>
    <p> Relation: ${contactInfo[3].value}</p> 
    <i class="material-icons trash">delete</i>
    `;
    document.querySelector(".contact_display").append(div);
    for (let input of contactInfo) {
      input.value = "";
      document.getElementById("name").focus();
    }
  }
  deleteAt(event) {
    if (event.target.tagName === "I") {
      event.target.parentNode.remove();
    }
  }
  display() {
    const contactCard = document.querySelector(".contact_display");
    this.contacts.forEach(contact => {
      const el = document.createElement("div");
      el.classList.add("contact_card");
      el.innerHTML = `
    <p>Name: ${contact.name} </p>
    <p> Email: ${contact.email}</p>
    <p> Phone: ${contact.phone}</p>
    <p> Relation: ${contact.relation}</p> 
    <i class="material-icons trash">delete</i>
    `;
      contactCard.append(el);
    })
  }
}
const addressBook = new AddressBook();
document.querySelector("form").addEventListener("submit", addressBook.addContact);
document.querySelector(".contact_display").addEventListener("click", addressBook.deleteAt);

window.onload = addressBook.display();