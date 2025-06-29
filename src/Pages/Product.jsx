import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import BredCrums from '../Components/BredCrums/BredCrums';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
    if (!product) return <div>Product not found</div>;
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product