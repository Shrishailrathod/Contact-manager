import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = ({ onSubmit, editingIndex, contact }) => {
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, padding: 3, bgcolor: 'white', borderRadius: 1, boxShadow: 1 }}>
      <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 2 }} />
      <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} />
      <TextField label="Phone" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ mb: 2 }} />
      <Button type="submit" variant="contained" color="primary">
        {editingIndex >= 0 ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Box>
  );
};

export default ContactForm;
