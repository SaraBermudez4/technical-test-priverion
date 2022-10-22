import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // https://localhost/index.php/products/list?limit=20
        axios.get("http://localhost/produtcs/")
            .then((response) => {
                setProducts(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!loading) { return (<div>Loading...</div>) }

    return (
        <div className="card" >
            <div className="card-header">
                Products Lists
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td scope="row">{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.phone}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
