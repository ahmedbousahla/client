import axios from "axios";


export const createNewProduct = async (body) => {
  
  const accessPoint = "http://localhost:3406/api/create";
  return await axios
    .post(accessPoint, body, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
      return res;
    });
};

export const updateProduct = async (body) => {
  
  const accessPoint = `http://localhost:3406/api/update`;
  return await axios
    .put(accessPoint, body, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
      return res;
    });
};

export const getProduct = async () => {
  
  const accessPoint = `http://localhost:3406/api/product`;
  return await axios
    .get(accessPoint,body , {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
      return res;
    });
};
export const getProducts = async () => {
  
  const accessPoint = `http://localhost:3406/api/products`;
  return await axios
    .get(accessPoint, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
      return res;
    });
};

export const deleteProduct = async (body) => {
  console.log('id ' , body.id)
  const accessPoint = "http://localhost:3406/api/delete";
  return await axios
    .delete(accessPoint, {
      headers: {
        "Content-Type": "application/json"
      },data : body
    })
    .then((res) => {
      return res;
    });
};

export const createOrder = async (body) => {
  console.log('front' , body)
  const accessPoint = "http://localhost:3406/api/order";
  return await axios
    .post(accessPoint, body, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
      return res;
    });
};