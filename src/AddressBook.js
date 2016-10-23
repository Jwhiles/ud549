var AddressBook = function AddressBook(){
  this.contacts = [];
};

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(number) {
  return this.contacts[number];
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
};
