import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    const navigate=useNavigate();
    const handleGoHome=()=>{
        navigate('/');
    };
    console.log(error);
    return (
        <div>
            <h2>Oops!!!</h2>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <button onClick={handleGoHome}>Go Home</button>            
        </div>
    );
};

export default ErrorPage;