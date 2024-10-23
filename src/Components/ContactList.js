import React from 'react';
import { List } from '@mui/material';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <List>
      {contacts.map((contact, index) => (
        <ContactItem 
          key={index} 
          contact={contact} 
          onEdit={() => onEdit(index)} 
          onDelete={() => onDelete(index)} 
        />
      ))}
    </List>
  );
};

export default ContactList;
