import { useDispatch } from "react-redux";
import { LogIn } from "redux/auth/operations";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const handleLogIn = e => {

        e.preventDefault();

        const data = e.currentTarget.elements;
        const logInCredentials = {
            email: data.email.value,
            password: data.password.value,
        }
        dispatch(LogIn(logInCredentials));
        console.log('logInCredentials =>', logInCredentials);
        
    }

    return (
        <>
            <form
                onSubmit={handleLogIn}
                autoComplete="off"
            >
                <label
                    placeholder="please set your email"
                >
                    Email:
                    <input
                        type="email"
                        name="email"
                    />
                </label>
                <label
                    placeholder="please set your password"
                >
                    Password:
                    <input
                        type="password"
                        name="password"
                    />
                </label>
                <button
                    type="submit">
                    LogIn
                </button>

            </form>
        </>
    )
}