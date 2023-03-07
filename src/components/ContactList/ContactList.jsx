
import { Item, Btn, NumberText } from './ContactList.styled';
import { useSelector,useDispatch } from 'react-redux';
import { getAllContacts } from 'components/redux/selectors';
import { removeContact } from 'components/redux/contactsSlice';


export const ContactList = () => {
  const contacts= useSelector(getAllContacts)

  const dispatch= useDispatch();
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}
              <NumberText>{number}</NumberText>
            </p>
            <Btn onClick={() => dispatch(removeContact(id))}>Delete</Btn>
          </Item>
        ))}
      </ul>
    </>
  );
  
};

