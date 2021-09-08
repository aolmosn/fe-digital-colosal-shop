// Dependencies
import React, { useState } from 'react'
import Product, { IProduct } from '../../components/Product/Product'
import classes from './ProductList.module.scss'
import ProductoEjemplo from '../../assets/images/product_example.png'

const ProductList = () => {
  const [productList, setProductList] = useState<Array<IProduct>>([
    {
      image: ProductoEjemplo,
      title: 'HYPERX Cloud Core',
      description: 'Gaming headset + 7.1',
      price: '$ 54.990',
      categorias: ['Gaming', 'Audifonos']
    },
    {
      image: ProductoEjemplo,
      title: 'HYPERX Cloud Core',
      description: 'Gaming headset + 7.1',
      price: '$ 54.990',
      categorias: ['Gaming', 'Audifonos', 'Microfono']
    }
  ])

  return (
    <>
      <h1>Product List</h1>
      <div className={classes.ProductListContainer}>
        {productList.map(product => (
          <Product
            key={product.title}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            categorias={product.categorias}
          />
        ))}
      </div>
    </>
  )
}

export default ProductList
