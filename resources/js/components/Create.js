import React, { useState } from "react";

const Create = () => {

    const [data, setData] = useState({
        name: "",
        amount: "",
        type: ""
    });

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const createProducto = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost/products/?insert=1", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="card" >
                <div className="card-header">
                    Products
                </div>
                <div className="card-body">
                    <form onSubmit={createProducto}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={handleOnChange} />
                            <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
                            <input type="number" className="form-control" id="amount" name="amount" value={data.amount} onChange={handleOnChange} />
                            <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                            <input type="text" className="form-control" id="type" name="type" value={data.type} onChange={handleOnChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
