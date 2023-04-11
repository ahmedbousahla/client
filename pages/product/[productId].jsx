import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../store/slices/productSlice";

import Head from "next/head";
import { useRouter } from "next/router";

import Menu from "../../components/Menu";

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,  
  Button,
  NumberInput,
  NumberInputField,
  Center,
} from "@chakra-ui/react";
import { updateProduct } from "@/controls/controller";

export default function Product() {
  const [id, setId] = useState("");

  const [productName, setProductName] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    // loop to check if the id passed as a parameter exists in the list. Then fill in the data
    
    for (let i in state) {      
      if (state[i].id == query.productId) {
        
        setProductName(state[i].productName);
        setCountInStock(state[i].countInStock);
        setBuyingPrice(state[i].buyingPrice);
        setSellingPrice(state[i].sellingPrice);
      }
    }
  }, []);

  const handleEditProduct = async() => {
    if (productName !== "" && countInStock !== "" && sellingPrice !== ""&& sellingPrice !== "") {
      
      try {
        console.log('name' ,productName , 'putchasPrice', sellingPrice)
      const body = {  
        id : query.productId,      
        productName,
        countInStock ,
        buyingPrice ,
        sellingPrice ,
        
    }
    await updateProduct(body).then(()=>{
      dispatch(        
        edit({
          id: parseInt(query.productId),
          productName,
          countInStock ,
           buyingPrice ,
           sellingPrice,
          
        })
      );
      }).catch((err)=>{
      console.log('err' , err)

      })
        
    } catch (error) {
      console.log('error' , error)
    }
    router.push("/about");
    } else {
      alert("Fill in all fields!");
    }
  };

  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - AddArea */}
       
        <Flex
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          h="100vh"
          
          background="#fff"          
        >
          <Heading fontWeight="normal" m={12} letterSpacing="tight">
          Edit Transaction
          </Heading>
          <Flex
          w="75%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <FormControl >
            <FormLabel htmlFor="product-name">Product's name:</FormLabel>
            <Input
              id="product-name"
              placeholder={productName}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="category">count IN stock:</FormLabel>
            <Input
              id="countInStock"
              placeholder={countInStock}
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="product-price">buying price:</FormLabel>
            <NumberInput max={99999} min={1} value={buyingPrice}>
              <NumberInputField
                id="product-price"
                placeholder={buyingPrice}
                onChange={(e) => setBuyingPrice(e.target.value)}
              />
            </NumberInput>
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="product-price">selling price:</FormLabel>
            <NumberInput max={99999} min={1} value={sellingPrice}>
              <NumberInputField
                id="product-price"
                placeholder="Valor total da transação"
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </NumberInput>
          </FormControl>
          <br />
          <Button
            mt={4}
            background="#000"
            color="#fff"
            _hover={false}
            type="submit"
            onClick={handleEditProduct}
          >
            Edit Transaction
          </Button>

          </Flex>
          </Flex>
          
      </Flex>
    </>
  );
}
