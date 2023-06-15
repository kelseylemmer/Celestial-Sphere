import { Link } from "react-router-dom"

export const Sun = ({ id, fullName, address, phoneNumber }) => {
    return <section className="customer">
        <div>
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div> Address: {address} </div>
        <div> phone Number: {phoneNumber} </div>
    </section>
}

//Create a Customer module that contains a component function that accepts:
// a single customer object as a prop
//It should display the customer name, address, and phone number.