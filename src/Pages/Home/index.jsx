import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

export default function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Eula
      <div className="flex flex-wrap gap-4 justify-center">
        {items?.map(({ id, title, image, price, category }) => (
          <Card
            key={id}
            title={title}
            image={image}
            price={price}
            categoryName={category}
          />
        ))}
      </div>
    </Layout>
  );
}
