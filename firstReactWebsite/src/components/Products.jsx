import ProductCard from "./ProductCard";

const Products = ({products, addPlant}) => {

    return(
        <div className="products">
            {products.map(product => {
            return <ProductCard 
            product={product}
            key={product.id}
            addPlant={addPlant}
            />
        })}
        </div>
    )
}

export default Products