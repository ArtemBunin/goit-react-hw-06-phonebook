import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form,Input,FormBtn } from './ContactForm.styled';

export const ContactForm=()=>{
  const [name,SetName]=useState('');
  const [number,SetNumber]=useState('')
const contacts= useSelector(getAllContacts)
const dispatch = useDispatch();


  const handleChange = e => {
    const {name,value}= e.currentTarget

   
    switch(name){
      case('name'):{
        SetName(value)
        break
      }
      case('number'):{
        SetNumber(value)
        break
      }
      default:{
        return
      }
     
    }};
  
    const duplicateName = (value) =>
    contacts.find(({ name }) => name.toLowerCase() === value.toLowerCase());
    const handleSubmit = (evt) => {
          evt.preventDefault();
          duplicateName(name)?alert(`${name} already in contacts.`):
        dispatch(addContact({ name,number, id: nanoid() }));
        SetName('')
        SetNumber('')
        };

   
  return ( <Form onSubmit={handleSubmit}>
            <label >
               Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
                
              />
            </label>
            <label>
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
              />
            </label>
            <FormBtn type="submit">Add contact</FormBtn>
          </Form>)
}

// export class ContactFormOld extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.addPerson({ ...this.state });
//     this.reset();
//   };

  
//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <label >
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             value={this.state.name}
            
//           />
//         </label>
//         <label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             value={this.state.number}
//           />
//         </label>
//         <FormBtn type="submit">Add contact</FormBtn>
//       </Form>
//     );
//   }
// }
ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };