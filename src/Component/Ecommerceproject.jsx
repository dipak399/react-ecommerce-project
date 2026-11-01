import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AllProducts, Electronics, Fashion, Lifestyle } from "./Product";
import ProductCard from "./ProductCard";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ShopZone
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container-fluid bg-primary text-white text-center p-5">
      <div className="py-5">
        <h1>Welcome to ShopZone</h1>
        <p>Find your favourite products at the best prices.</p>
        <Link to="/products" className="btn btn-light">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>

      <h4>Our Story</h4>
      <p>ShopZone is an online shopping website offering different products.</p>

      <h4>Our Mission</h4>
      <p>Our mission is to provide quality products at affordable prices.</p>

      <h4>Why Choose Us?</h4>
      <p>We provide good products, best prices and easy shopping.</p>
    </div>
  );
}

function Products() {
  const [showAllProducts, setAllProducts] = useState(true);
  const [showElectronics, setElectronics] = useState(false);
  const [showFashion, setFashion] = useState(false);
  const [showLifestyle, setLifestyle] = useState(false);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Our Products</h2>

      <div className="text-center my-3">
        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            setAllProducts(true);
            setElectronics(false);
            setFashion(false);
            setLifestyle(false);
          }}
        >
          All Products
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setAllProducts(false);
            setElectronics(true);
            setFashion(false);
            setLifestyle(false);
          }}
        >
          Electronics
        </button>

        <button
          className="btn btn-warning m-2"
          onClick={() => {
            setAllProducts(false);
            setElectronics(false);
            setFashion(true);
            setLifestyle(false);
          }}
        >
          Fashion
        </button>

        <button
          className="btn btn-success m-2"
          onClick={() => {
            setAllProducts(false);
            setElectronics(false);
            setFashion(false);
            setLifestyle(true);
          }}
        >
          Lifestyle
        </button>
      </div>

      <div className="row">
        {showAllProducts === true
          ? AllProducts.map((val) => {
              return (
                <ProductCard
                  id={val.id}
                  name={val.name}
                  category={val.category}
                  price={val.price}
                  image={val.image}
                />
              );
            })
          : showElectronics === true
            ? Electronics.map((val) => {
                return (
                  <ProductCard
                    id={val.id}
                    name={val.name}
                    category={val.category}
                    price={val.price}
                    image={val.image}
                  />
                );
              })
            : showFashion === true
              ? Fashion.map((val) => {
                  return (
                    <ProductCard
                      id={val.id}
                      name={val.name}
                      category={val.category}
                      price={val.price}
                      image={val.image}
                    />
                  );
                })
              : showLifestyle === true
                ? Lifestyle.map((val) => {
                    return (
                      <ProductCard
                        id={val.id}
                        name={val.name}
                        category={val.category}
                        price={val.price}
                        image={val.image}
                      />
                    );
                  })
                : null}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Subject"
            />

            <textarea
              className="form-control mb-3"
              placeholder="Enter Message"
            ></textarea>

            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Ecommerceproject() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Ecommerceproject;
