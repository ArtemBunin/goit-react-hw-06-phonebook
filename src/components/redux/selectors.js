export const getAllContacts = state => state.contacts;

export const getFilter = state => state.filter;


export const getFilterContacts = state =>
  state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase())
  );