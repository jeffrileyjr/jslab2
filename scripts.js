"use strict";

class AddressBook {
  constructor() {
    this.contacts = [
      {
        name: "Homer J. Simpson",
        email: "homer.simpson@springfieldnuclear.gov",
        phone: "KL5-3226",
        relation: "TV-dad"
      },
      {
        name: "Bob Ross",
        email: "bob.ross@pbs.org",
        phone: "555-555-5555",
        relation: "chill dude"
      },
      {
        name: "Bruce Wayne",
        email: "bruce@wayne-enterprises.com",
        phone: "734-555-1234",
        relation: "Batman"
      }
    ];
  }
  add(info) {
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(`Name: ${this.contacts[i].name} Email: ${this.contacts[i].email} Phone: ${this.contacts[i].phone} relation: ${this.contacts[i].relation}`)
    }
  }
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (name === this.contacts[i].name) {
        this.contacts.splice(i, 1);
      }
    }
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

let addressBook = new AddressBook();


while (true) {
  let userChoice = prompt("Welcome to your address book!\nWould you like to add, delete, print or quit?");
  if (userChoice === "add") {
    let info = {
      name: prompt("What is the contact's name?"),
      email: prompt(`What is contacts's E-mail address?`),
      phone: prompt(`What is contacts's phone number?`),
      relation: prompt(`What is contacts's relation?`),
    };
    addressBook.add(info);
  } else if (userChoice === "delete") {
    let deleteChoice = prompt(`Would you like to delete by index or name?`);
    if (deleteChoice === "index") {
      let index = prompt(`Which index between 0 and ${addressBook.contacts.length - 1} would you like to delete?`);
      addressBook.deleteAt(index);
    } else if (deleteChoice === "name") {
      let name = prompt(`What contact would you like to remove?`);
      addressBook.deleteByName(name);
    }
  } else if (userChoice === "print") {
    addressBook.print();
  } else if (userChoice === "quit") {
    console.log("Thank you, good-bye!");
    break;
  }
}