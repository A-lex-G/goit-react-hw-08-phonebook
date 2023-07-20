import { useAuth } from "hooks"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink>
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}