import { createSlice } from "@reduxjs/toolkit";

 export const contactsSlice= createSlice({
        name: "contacts",
        // Начальное состояние редюсера слайса
        initialState: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ],
        // Объект редюсеров
        reducers: {
          addContact(state, action) { state.push(action.payload)},
          removeContact(state, action) {
            return state.filter(el => el.id !== action.payload);
          },
        },
      });
   
      // Генераторы экшенов
     export const { addContact, removeContact} = contactsSlice.actions;
      // Редюсер слайса
    export const contactReducer = contactsSlice.reducer;
  