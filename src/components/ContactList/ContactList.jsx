import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/selectors";
import { selectContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);
  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <ul className={style.contactList}>
      {filtredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
