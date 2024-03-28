import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    console.log(user);
    const {id,name,email,address}=user;

    const navigate=useNavigate();

    const handleShowDetail=()=>{
        navigate(`/user/${id}`)
    };
    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <p>Address: {address}</p> */}
            <Link to={`/user/${id}`}>Show More</Link>
            <button onClick={handleShowDetail}>Show More</button>
        </div>
    );
};

export default User;