describe("Address Book", function() {
  it('should be able to add a contact', function() {
    var addressBook = new AddressBook(),
      thisContact = new Contact();

    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  }

)

  it("should be able to delete contacts", function() {
    var addressBook = new AddressBook();
    var thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
