import React from 'react'
import { ProductType } from './ProductCard.static'
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  console.log(product.name)
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            s
          </IconButton>
        }
        title={product.name}
        subheader={product.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.photos[0]}
        alt="Paella dish"
      />
      <CardContent>


      </CardContent>
    </Card>
  )
}

export default ProductCard