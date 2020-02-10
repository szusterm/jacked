import FloatingBox from './components/FloatingBox';
import {Currency} from '../../../shared/scrapper';
import ProductInfo from './pages/ProductInfo';
import React, {useState} from 'react';

function App() {
    const [isHidden, setIsHidden] = useState(true);

    const switchIsHidden = () => setIsHidden(isHidden => !isHidden);

    const EXAMPLE_PRODUCT = {
        name: 'Sweet T-shirt',
        image: 'cdn.shopify.com/s/files/1/0877/4244/products/sports_bra_front_classic_Store_photo_1024x1024.png?v=1554859388',
        price: 40,
        currency: Currency.USD
    };

    return (
        <FloatingBox
            hidden={isHidden}
            onClickOpen={switchIsHidden}
        >
            <ProductInfo {...EXAMPLE_PRODUCT}/>
        </FloatingBox>
    );
}

export default App;
