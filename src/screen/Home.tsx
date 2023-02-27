import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
    const [readSerchParams, setSearchParams] = useSearchParams();
    console.log(readSerchParams);
    return (
        <div>
            <h1>USER</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
