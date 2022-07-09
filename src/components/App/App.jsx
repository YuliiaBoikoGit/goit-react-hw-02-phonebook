import React from "react";
import { nanoid } from "nanoid";
import { Container, PageTitle, Title } from "./App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { ContactList } from "components/Contact List/ContactList";
import { Filter } from "components/Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = data => {
    const existingContact = this.state.contacts.map(contact => contact.name).includes(data.name);

    if (existingContact) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        name: data.name,
        number: data.number,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
      }));
    };
  };

  handleFIlterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handleFIlterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  };
};