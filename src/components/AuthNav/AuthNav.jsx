// import { NavLink } from "react-router-dom";
import { StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <>
            <StyledNavLink
                to='/register'>
                Registration
            </StyledNavLink>
            <StyledNavLink
                to='/login'>
                LogIn
            </StyledNavLink>
        </>
    )
}