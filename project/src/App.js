import React from "react";
import PropTypes from 'prop-types';
import "./App.css";

function App() {
  const products = [
    { name: "dress", price: "100$", category: "Clothes" },
    { name: "jeans", price: "80$", category: "Clothes" },
    { name: "diode", price: "10$", category: "Electronics" },
  ];
  return (
    <div className="App">
      <ProductTable products={products} />
    </div>
  );
}

export default App;

const ProductTable = ({ products }) => {
  return (
    <table className="content-table">
      <thead>
        <tr align='center'>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>

      {products.map((el,i) => {
        return (
          <tbody key={i}>
          <tr  className="active-row" align='center'>
            <td>{el.name}</td>
            <td> {el.price}</td>
            <td>{el.category}</td>
          </tr>
          </tbody>
        );
      })}
    </table>
  );
};

ProductTable.propTypes={
  products:PropTypes.arrayOf(PropTypes.object).isRequired
}