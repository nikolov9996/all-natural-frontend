import React from 'react'
import { ProductType } from './ProductCard.static'
import { CardMedia, Rating } from '@mui/material'
import { Currency, Price, PriceBox, StyledCard, CardFooter, StyledName, Content } from './ProductCard.styles'
import FavoriteIcon from './FavoriteIcon'
import useProductCard from './ProductCard.logic'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { navigateToDetails } = useProductCard()
  return (
    <StyledCard sx={{ boxShadow: 1 }}>
      <FavoriteIcon {...product} />
      <CardMedia
        onClick={() => navigateToDetails(product._id)}
        component="img"
        image={product.photos[0]}
        alt="product"
      />

      <Content onClick={() => navigateToDetails(product._id)} >
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