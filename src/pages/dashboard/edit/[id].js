import FormProduct from '@components/FormProduct';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
export default function Edit() {
  const router = useRouter();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await fetch(endPoints.products.getProduct(id)).then((res) => res.json());
      setProduct(response);
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
