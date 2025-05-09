const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const contactsFile = path.join(__dirname, '../data/contacts.json');

router.post('/', (req, res) => {
  const contact = req.body;
  let contacts = [];
  if (fs.existsSync(contactsFile)) {
    contacts = JSON.parse(fs.readFileSync(contactsFile));
  }
  contacts.push(contact);
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
  res.json({ message: 'Pesan diterima!' });
});

module.exports = router;
