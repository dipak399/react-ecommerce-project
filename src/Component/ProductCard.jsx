function ProductCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div className="card-body">
          <h5>{props.name}</h5>
          <p>Product ID: {props.id}</p>
          <p>Category: {props.category}</p>
          <p>Price: ₹{props.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
