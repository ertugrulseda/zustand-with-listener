
import { userStore } from '../../store/userStore'

const Logout = () => {
    const logout = userStore(s => s.logout)

    const onClick = () => {
        logout();
    }

    return (
        <div>
            <button onClick={onClick}>Logout</button>
        </div>
    );
}

export default Logout;