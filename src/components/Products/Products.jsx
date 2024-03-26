import { useLoaderData } from "react-router-dom";

const Products = () => {
    const products =useLoaderData();
    return (
        <div>
            <h3>Products: {products.length}</h3>            
        </div>
    );
};

export default Products;