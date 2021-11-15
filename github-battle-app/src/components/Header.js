import { NavLink } from 'react-router-dom';

function Header(props)
{
    return (
        <header className="header">
            <nav>
                <NavLink
                    exact
                    activeClassName={props.darkMode ? 'dark' : 'light'}
                    className={props.darkMode ? 'btn_primary_dark' : 'btn_primary_light'}
                    to="/"
                >
                    <button className="btn_primary">Popular</button>
                </NavLink>
                <NavLink
                    activeClassName={props.darkMode ? 'dark' : 'light'}
                    className={props.darkMode ? 'btn_primary_dark' : 'btn_primary_light'}
                    to="/battle"
                >
                    <button className="btn_primary">Battle</button>
                </NavLink>
            </nav>
            <button className="btn_sec_wrapper" onClick={props.toggleDarkMode}>
                {props.darkMode ? (
                    <img alt="" className="btn_secondary" src="/images/switch.png" />
                ) : (
                    <img alt="" className="btn_secondary" src="/images/switch1.png" />
                )}
            </button>
        </header>
    );
}

export default Header;