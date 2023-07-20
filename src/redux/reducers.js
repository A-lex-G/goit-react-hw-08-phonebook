import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  contacts: contactsReducer,

  filter: filterReducer,
});
