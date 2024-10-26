import React, { useEffect, useState } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingtime, setCookingtime] = useState("");
  const [newingredients, setNewingredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch("http://localhost:5000/", "POST");

  const submithandel = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingtime: cookingtime + "دقیقه",
    });
  };
  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "با موفقیعت ثبت شد",
        icon: "success",
      });
      navigate("/");
    }
  }, [data]);
  const handeladd = (e) => {
    e.preventDefault();
    if (newingredients && !ingredients.includes(newingredients)) {
      setIngredients((preving) => [...preving, newingredients]);
    }
    setNewingredients("");
  };

  return (
    <div className="create">
      <h1>دستور پخت غذا</h1>
      <form className="form">
        <label>
          <span>نام غذا : </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>مواد اولیه : </span>
          <div>
            <input
              type="text"
              onChange={(e) => setNewingredients(e.target.value)}
              value={newingredients}
            />
            <button onClick={handeladd}>اضافه کن</button>
          </div>
          <p>
            {ingredients.map((i) => (
              <em key={i}> , {i}</em>
            ))}{" "}
          </p>
        </label>

        <label>
          <span>زمان پخت : </span>
          <input
            type="number"
            onChange={(e) => setCookingtime(e.target.value)}
            value={cookingtime}
            required
            min={0}
          />
        </label>
        <label className="area">
          <span>دستور پخت : </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <button className="sub-btn" type="submit" onClick={submithandel}>
          ارسال
        </button>
      </form>
    </div>
  );
}
