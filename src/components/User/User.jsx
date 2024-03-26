import { Link } from "react-router-dom";

const User = ({user}) => {
    console.log(user);
    const {id,name,email,address}=user;
    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <p>Address: {address}</p> */}
            <Link to={`/user/${id}`}>Show More</Link>
            <button>Show More</button>
        </div>
    );
};

export default User;