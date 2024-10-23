import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <ListItem sx={{ bgcolor: 'white', mb: 1, borderRadius: 1, boxShadow: 1 }}>
      <ListItemText primary={contact.name} secondary={`${contact.email}, ${contact.phone}`} />
      <Button onClick={onEdit} color="primary" sx={{ mr: 1 }}>Edit</Button>
      <Button onClick={onDelete} color="error">Delete</Button>
    </ListItem>
  );
};

export default ContactItem;
