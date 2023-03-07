
import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch,useSelector  } from 'react-redux';
import {getFilter } from '../redux/selectors';
import {changeFilter} from '../redux/filterSlice'

export function Filter() {
    const value= useSelector(getFilter)
    console.log(value);
    const dispatch= useDispatch();
    
    return (
        <label>
            Find contacts by name
            <Input type='text' value={value}  onChange={(e)=>{dispatch(changeFilter(e.target.value) )}} />
        </label>
    )
}

