import React from 'react';
import Helmet from '../components/Helmet';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import ProductCard from '../components/ProductCard';
import Grid from '../components/Grid';
import ProductView from '../components/ProductView';

import productData from '../assets/fake-data/products';


const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug);
    
    const realtedProducts = productData.getProducts(8);

    React.useEffect(() => {
        window.scrollTo(0,0);
    },[product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    khám phá thêm
                </SectionTitle>
                <SectionBody>
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {realtedProducts.map((item, index) => (
                    <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                    />
                ))}
      </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
