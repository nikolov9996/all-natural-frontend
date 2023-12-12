import React from 'react'
import { ProductType } from './ProductCard.static'
import { CardMedia, Rating } from '@mui/material'
import { Currency, Price, PriceBox, StyledCard, CardFooter, StyledName, Content } from './ProductCard.styles'
import FavoriteIcon from './FavoriteIcon'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {

  return (
    <StyledCard sx={{ boxShadow: 1 }}>
      <FavoriteIcon {...product} />
      <CardMedia
        component="img"
        height="220"
        image={product.photos[0]}
        alt="product"
      />

      <Content >
        <Rating readOnly value={3} size={'small'} />
        <CardFooter>
          <StyledName >{product.name}</StyledName>
          <PriceBox><Price>{product.price}</Price><Currency>EUR</Currency></PriceBox>
        </CardFooter>
      </Content>

    </StyledCard>
  )
}



export default ProductCard