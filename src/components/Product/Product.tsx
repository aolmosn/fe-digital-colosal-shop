import React, { FC } from 'react'

import classes from './Product.module.scss'
import DefaultImage from '../../assets/images/default.png'

export interface IProduct {
  image: string
  title: string
  description: string
  price: string
  categorias: string[]
}

type Props = IProduct

const Product: FC<Props> = ({ image, title, description, price, categorias }) => {
  return (
    <div className={classes.Product}>
      <div className={classes.ProductImage}>
        <img src={image} alt="imagenDefault" />
      </div>
      <div className={classes.ProductDetails}>
        <p className={classes.ProductTitle}>{title}</p>
        <p className={classes.ProductDescription}>{description}</p>
        <p className={classes.ProductPrice}>{price}</p>

        <div className={classes.ProductCategory}>
          {categorias.map(categoria => (
            <span>{categoria}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
