import React from 'react';
import { nanoid } from "nanoid";
// import { Form } from "./ContactForm.styled";

export class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    handleInputChange = event => {
        const { name, number, value } = event.currentTarget;

        this.setState({ [name]: value, [number]: value });
    };

    handleSubmitForm = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    nameInputId = nanoid();
    telInputID = nanoid();

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <label htmlFor={this.nameInputId}>
                    Name <input
                        type="text"
                        name="name"
                        id={this.nameInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label htmlFor={this.telInputID}>
                    Number <input
                        type="tel"
                        name="number"
                        id={this.telInputID}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit">Add Contact</button>
            </form>
        );
    };
};