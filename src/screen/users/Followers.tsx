import { useOutletContext } from "react-router-dom";

interface FollowersContext {
    nameOfMyUser: string;
}

function Followers() {
    const { nameOfMyUser } = useOutletContext<FollowersContext>();
    console.log(nameOfMyUser);
    return <h1>Here are {nameOfMyUser}'s place</h1>;
}

export default Followers;
