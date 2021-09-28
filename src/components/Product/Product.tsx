import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import classes from './Product.module.scss'
import DefaultImage from '../../assets/images/default.png'

export interface IProduct {
  id: number
  image: string
  title: string
  description: string
  price: string
  categorias: string[]
}

type Props = IProduct

const Product: FC<Props> = ({ id, image, title, description, price, categorias }) => {
  return (
    <Link to={`/product/${id}`} className={classes.ProductWrapper}>
      <div className={classes.Product}>
        <div className={classes.ProductImage}>
          <img src={image} alt="imagenDefault" />
        </div>
        <div className={classes.ProductDetails}>
          <p className={classes.ProductTitle}>{title}</p>
          <p className={classes.ProductDescription}>{description}</p>
          <p className={classes.ProductPrice}>{price}</p>

          {/* <div className={classes.ProductCategory}>
            {categorias.map(categoria => (
              <span>{categoria}</span>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default Product
