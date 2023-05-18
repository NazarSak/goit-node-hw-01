const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactById = contacts.find((contact) => contact.id === contactId);
  return contactById || null;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts,null,2));
  return newContact
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
