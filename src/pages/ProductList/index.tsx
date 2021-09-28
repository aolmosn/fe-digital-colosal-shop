// Dependencies
import React, { useState } from 'react'
import Product, { IProduct } from '../../components/Product/Product'
import classes from './ProductList.module.scss'
import ProductoEjemplo from '../../assets/images/product_example.png'

const ProductList = () => {
  const [productList, setProductList] = useState<Array<IProduct>>([
    {
      id: 1,
      image: ProductoEjemplo,
      title: 'HYPERX Cloud Core',
      description: 'Gaming headset + 7.1',
      price: '$ 54.990',
      categorias: ['Gaming', 'Audifonos']
    },
    {
      id: 2,
      image: ProductoEjemplo,
      title: 'HYPERX Cloud Core',
      description: 'Gaming headset + 7.1',
      price: '$ 54.990',
      categorias: ['Gaming', 'Audifonos', 'Microfono']
    },
    {
      id: 3,
      image: ProductoEjemplo,
      title: 'HYPERX Cloud Core',
      description: 'Gaming headset + 7.1',
      price: '$ 54.990',
      categorias: ['Gaming', 'Audifonos', 'Microfono']
    },
    {
      id: 4,
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
            id={product.id}
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
