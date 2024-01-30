# DO-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Camilo lopez

## Ejemplos

```
import { ProductCard, ProductImage, ProductButtons, ProductTitle} from 'do-product-card';

```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10,
    }}
>
    {
        ({count,increaseBy,isMaxCountReached,reset,maxCount})=> (
        <>
            <ProductImage  />
            <ProductTitle  />
            <ProductButtons  />                 
        </>
        )

    }
</ProductCard>  
```