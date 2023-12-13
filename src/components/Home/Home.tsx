import React from 'react'
import ButtonBase from '../Common/Button/Button';
import { useGetProducts } from '~/services/hooks';
import ProductCard from '../Common/ProductCard/ProductCard';
import { ProductType } from '../Common/ProductCard/ProductCard.static';
import { Grid, Skeleton } from '@mui/material';


const Home: React.FC = () => {

    const { data, isLoading } = useGetProducts().useGetManyProducts(10)

    if (isLoading) {
        return <Grid container spacing={2}>
            {Array(20).fill(1).map((_, i) => {
                return <Grid item key={i} md={4} sm={6} xs={12} lg={3} xl={2} >
                    <Skeleton width={'auto'} height={300} />
                </Grid>
            })}
        </Grid>
        // TODO: Add skeleton here
    }

    return (
        <>
            <Grid container spacing={2} pt={1} pb={1}>
                {data.Products.map((prod: ProductType) => {
                    return <Grid md={4} sm={6} xs={12} lg={3} xl={2} item key={prod._id}>
                        <ProductCard product={prod} />
                    </Grid>
                })}
            </Grid>
            <ButtonBase title='button' />
        </>
    )
}

export default Home;