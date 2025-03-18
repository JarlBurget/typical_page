import './Navigation.css'

const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href='/users'>Users</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
                {props.loggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>

        </nav>
    )
}
export default Navigation