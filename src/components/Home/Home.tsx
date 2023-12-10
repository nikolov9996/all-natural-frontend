import React from 'react'
import ButtonBase from '../Common/Button';
import { useGetProducts } from '~/services/hooks';
import ProductCard from '../Common/ProductCard/ProductCard';
import { ProductType } from '../Common/ProductCard/ProductCard.static';


const Home: React.FC = () => {

    const { data, isLoading } = useGetProducts().useGetManyProducts(2)

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <>
            <ButtonBase title='button' />
            <h1>
                <div>Home Page Here, Кирилица може би</div>
            </h1>
            {data.Products.map((prod: ProductType) => {
                return <ProductCard product={prod} />
            })}
            <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia autem non est quae at sit ab error iusto, voluptate natus fuga laborum asperiores doloribus quas voluptatem consequatur cumque quos.</p>
        </>
    )
}

export default Home;