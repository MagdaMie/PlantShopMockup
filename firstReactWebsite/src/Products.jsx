import ProductCard from "./ProductCard"

const Products = () => {
    const products = [
        {
            name: 'plant',
            price: '$43',
            img: '/1.png',
            id: 1
        },
        {
            name: 'plant',
            price: '$43',
            img: '/2.png',
            id: 2
        },
        {
            name: 'plant',
            price: '$43',
            img: '/3.png',
            id: 3
        },
        {
            name: 'plant',
            price: '$43',
            img: '/4.png',
            id: 4
        },
        {
            name: 'plant',
            price: '$43',
            img: '/5.png',
            id: 5
        },
        {
            name: 'plant',
            price: '$43',
            img: '/6.png',
            id: 6
        },
        {
            name: 'plant',
            price: '$43',
            img: '/7.png',
            id: 7
        },
        {
            name: 'plant',
            price: '$43',
            img: '/8.png',
            id: 8
        },
        {
            name: 'plant',
            price: '$43',
            img: '/9.png',
            id: 9
        },
        {
            name: 'plant',
            price: '$43',
            img: '/10.png',
            id: 10
        },
        {
            name: 'plant',
            price: '$43',
            img: '/11.png',
            id: 11
        },
        {
            name: 'plant',
            price: '$43',
            img: '/12.png',
            id: 12
        }  
    ]

    return(
        <div className="products">
            {products.map(product => {
            return <ProductCard 
            name={product.name}
            price={product.price}
            img={product.img}
            key={product.id}
            />
        })}
        </div>
    )
}

export default Products