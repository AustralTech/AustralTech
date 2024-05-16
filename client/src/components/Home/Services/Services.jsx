"use client"

import { useEffect, useState } from "react";
import "../../../styles/services.css"
import cardData from "../../../../public/data/cards.json"
import Cards from "./Cards";

const url = "http://localhost:3001/api/services"

function Services() {
  /*
    const [products, setProducts] = useState([]);

    const getServices = async () => {
      const data = await fetch(url);
      const services = await data.json();
      setProducts(services);
    };

    useEffect(() => {
      getServices();
    }, []);

    console.log(products);
   */
  return (
    <div className="py-8 lg:py-14">
      <Cards data={cardData} />
    </div>
  );
}

export default Services