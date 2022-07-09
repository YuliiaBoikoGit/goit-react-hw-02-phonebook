import { List, ContactListBtn, Contact } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return <List>
        {contacts.map(contact => <Contact key={contact.id}>{contact.name}: {contact.number}
            <ContactListBtn type="button" onClick={() => onDeleteContact(contact.id)}>Delete</ContactListBtn>
        </Contact>)}
    </List>
};