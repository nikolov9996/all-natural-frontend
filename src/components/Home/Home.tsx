import React from 'react'
import ButtonBase from '../Common/Button';


const Home: React.FC = () => {
    return (
        <>
            <ButtonBase title='button' />
            <h1>
                <div>Home Page Here, Кирилица може би</div>
            </h1>
            <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia autem non est quae at sit ab error iusto, voluptate natus fuga laborum asperiores doloribus quas voluptatem consequatur cumque quos.</p>
        </>
    )
}

export default Home;