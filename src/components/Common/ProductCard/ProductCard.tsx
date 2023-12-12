import React from 'react'
import { ProductType } from './ProductCard.static'
import { CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import { StyledCard } from './ProductCard.styles'
import FavoriteIcon from './FavoriteIcon'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {

  return (
    <StyledCard sx={{ boxShadow: 1 }}>
      <FavoriteIcon {...product} />
      <CardMedia
        component="img"
        height="120"
        image={product.photos[0]}
        alt="product "
      />

      <CardContent>
        {/* style this */}
        <Typography> {product.name}</Typography>

      </CardContent>
      <CardActions>
        {/* style this as well */}
        <Chip label={product.price} />
      </CardActions>
    </StyledCard>
  )
}



export default ProductCard