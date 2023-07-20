import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleRegistration = e => {

        e.preventDefault();
        
        const data = e.currentTarget.elements;
        const registrationCredentials = {
            name: data.name.value,
            email: data.email.value,
            password: data.password.value,
        }
        dispatch(register(registrationCredentials));
        console.log('registrationCredentials =>', registrationCredentials);
    }

    return (
        <form
            onSubmit={handleRegistration}
            autoComplete="off">
            <label>
                User Name:
                <input
                    type="text"
                    name='name'
                    placeholder="please set user name"
                />
            </label>
            <label>
                User Email:
                <input
                    type="email"
                    name='email'
                    placeholder="please set user email"
                />
            </label>
            <label>
                <input
                    type="password"
                    name='password'
                    placeholder="please set user password"
                />
            </label>
            <button
                type="submit">
                Register
            </button>
        </form>
    )
}