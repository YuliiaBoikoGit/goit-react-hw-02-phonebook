import React from "react";
import { Container } from "./App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { ContactList } from "components/Contact List/ContactList";
import { Filter } from "components/Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  };
  
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  };
};
