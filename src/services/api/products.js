import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
    body: JSON.stringify({ ...body }),
  };
  const response = await fetch(endPoints.products.addProducts, config).then((res) => res.json());
  return response;
};
const updateProduct = async (id, body) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
    body: JSON.stringify({ ...body }),
  };
  const response = await fetch(endPoints.products.updateProducts(id), config).then((res) => res.json());
  return response;
};

const deleteProduct = async (id) => {
  const config = {
    method: 'DELETE',
  };
  const response = await fetch(endPoints.products.deleteProduct(id), config).then((res) => res.json());
  return response;
};

export { addProduct, deleteProduct, updateProduct };
