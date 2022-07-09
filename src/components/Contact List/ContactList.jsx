import PropTypes from "prop-types";
import { List } from "./ContactList.styled";
import { ContactItem } from "components/Contact/Contact";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return <List>
        <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </List>
};

ContactList.propTypes = {
    contacts: PropTypes.array,
};