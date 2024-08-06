import Product from "./Product";
export default function Shop({ products }) {
  return (
    <section className="shop">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.images[0]}
          title={product.title}
          price={product.price}
          rating={product.rating}
          description={product.description}
          stock={product.availabilityStatus}
        />
      ))}
    </section>
  );
}
