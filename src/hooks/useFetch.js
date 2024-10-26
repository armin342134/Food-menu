import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

export const useFetch = (url, method = "GET") => {
  const [data, setdata] = useState(null);
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    console.log(postData);
  };

  useEffect(() => {
    const fetchdate = async (fetchOptions) => {
      try {
        setIsloading(true);
        const response = await fetch(url, { ...fetchOptions });
        if (!response.ok) {
          return Swal.fire({
            title: "خطا در ثبت",
            icon: "error",
          });
          // throw new Error(response.statusText);
        }
        const json = await response.json();
        setdata(json);
        setIsloading(false);
        setError(null);
      } catch (error) {
        setIsloading(false);
        setError(error.message);
      }
    };
    if (method === "GET") {
      fetchdate();
    }
    if (method === "POST" && options) {
      fetchdate(options);
    }
  }, [url, method, options]);

  return { data, loading, error, postData };
};
