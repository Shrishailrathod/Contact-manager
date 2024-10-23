import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = (contact) => {
    if (editingIndex >= 0) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = contact;
      setContacts(updatedContacts);
      setEditingIndex(-1);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">Contact Manager</Typography>
      <ContactForm onSubmit={handleSubmit} editingIndex={editingIndex} contact={editingIndex >= 0 ? contacts[editingIndex] : null} />
      <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default App;
