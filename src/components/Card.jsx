import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { FaStar } from "react-icons/fa";

const Card = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div className="card py-2">
      <div className="d-flex justify-content-end p-2">
        {item.availabilityStatus === "Low Stock" ? (
          <p className="badge bg-danger">Sınırlı Stok</p>
        ) : (
          <p className="badge">.</p>
        )}
      </div>

      <div className="d-flex justify content-center">
        <img
          className="object-fit-contain"
          src={item.thumbnail}
          height={150}
          alt=""
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h4>{item.title}</h4>
          <p className="text-capitalize">{item.category}</p>
        </div>

        <div>
          <div className="d-flex justify-content-between">
            <p className="d-flex-align-items-center gap-1">
              <FaStar className="text-warning" />
              <span>{item.rating}</span>
            </p>
            <h5 className="fw-bold">{item.price} $</h5>
          </div>
          <button onClick={() => addToBasket(item)} className="btn w-100 btn-primary">Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
