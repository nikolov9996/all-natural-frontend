import React, { MouseEventHandler, useState } from 'react'
import { FavoriteIconFilled, FavoriteIconBorder, StyledIconButton } from './ProductCard.styles'
import { ProductType } from './ProductCard.static'

const FavoriteIcon: React.FC<ProductType> = (product) => {
    const [liked, setLiked] = useState<boolean>(false)
    // temp solution before saving in localStorage
    // or cookie before sync with account

    // liked flag will be used here

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event && event.preventDefault();
        setLiked(!liked);
    }

    if (liked) {
        return (
            <StyledIconButton size='small' onClick={handleClick}>
                <FavoriteIconFilled />
            </StyledIconButton>
        )
    }

    return (
        <StyledIconButton size='small' onClick={() => setLiked(true)}>
            <FavoriteIconBorder color='error' />
        </StyledIconButton>
    )
}
export default FavoriteIcon