const contact = require("./db/contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

  program.parse(process.argv);
  const argv = program.opts();
// console.log(__dirname);

const contactAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const AllContacts = await contact.listContacts();
      return console.log(AllContacts);

    case "get":
      const ByIdContact = await contact.getContactById(id);
      return console.log(ByIdContact);

    case "add":
      const newContact = await contact.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const deleteContact = await contact.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};


contactAction(argv)

// contactAction({ action: "list" });
// contactAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// contactAction({
//   action:"add",
//   name: "Nazar",
//   email: "nazar.ante@vestibul.co.uk",
//   phone: "(414) 820-6885",
// });
// contactAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
