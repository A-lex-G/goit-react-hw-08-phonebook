// import { Form } from "./Form/Form";
// import { ContactsList } from "./ContactsList/ContactsList";
// import { SearchInput } from "./SearchInput/SearchInput";
// import { StyledContainer } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Layout";
import { lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={<SharedLayout />}>
        <Route
          index element={<HomePage />}
        />
        <Route
          path='/register'
          element={
            <RestrictedRoute
              redirectTo = '/contacts'
              component = {<RegisterPage/>}
            />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute
              redirectTo = "/contacts"
              component = {<LoginPage/>}
            />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute
              redirectTo = '/login'
              component = {<ContactsPage/>}
            />
          }
        />
      </Route>
        
      {/* <StyledContainer>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <SearchInput />
        <ContactsList />
      </StyledContainer> */}
    </Routes>
  );
}
  