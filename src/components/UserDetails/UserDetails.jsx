import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user =useLoaderData();

    const navigate = useNavigate();

    const handleGoBack=()=>{
        navigate(-1);
    }

    const {name,email,website}=user;
    return (
        <div>
            <h3>Details about User : {name} </h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;