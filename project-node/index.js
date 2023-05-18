const contact = require("./db/contacts");

console.log(__dirname);

const contactAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const AllContacts = await contact.listContacts();
      return console.log(AllContacts);

    case "get":
      const ByIdContact = await contact.getContactById(id);
      return console.log(ByIdContact);

    case "add":
      const newContact = await contact.addContact({name, email, phone});
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// contactAction({ action: "list" });
// contactAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
contactAction({
  action:"add",
  name: "Nazar",
  email: "nazar.ante@vestibul.co.uk",
  phone: "(414) 820-6885",
});
