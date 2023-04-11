import React, { useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,  
  Button,
  Stack,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { insert } from "../store/slices/productSlice";

import Menu from "../components/Menu";
import { createNewProduct } from "../controls/controller";
// import { getCurrentDate } from "../utils/dateUtil";

// import MaskedInput from "react-text-mask";
// import priceMask from "../data/priceMask";

export default function Add() {
  const [code, setCode] = useState('')
  const [productName, setProductName] = useState("");
  const [countInStock, setCountInStock] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [buyingPrice, setBuyingPrice] = useState("");
  const [expireDate, setExpireDate] = useState('')

  const dispatch = useDispatch();
  // const currentDate = getCurrentDate();
  const router = useRouter();

  const handleAddProduct = async () => {
    if (productName !== "" && countInStock !== "" && expireDate !== "") {
      console.log('buy' , buyingPrice)
      try {
        const body = {
            code ,
            productName,
            countInStock ,
            buyingPrice ,
            sellingPrice,
            expireDate,
        }
        await createNewProduct(body).then((res)=>{
          dispatch(
            insert({
              id: res.data.id ,
              code ,
              productName,
              countInStock ,
              buyingPrice ,
              sellingPrice,
              expireDate,
            })
          );
        }).catch((err)=>{})
        
      } catch (error) {
        
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
          minH="100vh"
          background="#fff"
        >
          <Heading fontWeight="normal" mb={5} letterSpacing="tight">
          Add New Product
          </Heading>
          <Flex
          w="100%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Stack spacing={3} w='50%' ml="10%" alignItems="center" justifyContent="center" align={"center"} >
          
          <FormControl>
            <FormLabel htmlFor="product-name">Product's codebare:</FormLabel>
            <Input
              id="product-name"
              variant='outline'
              placeholder="ex: Macbook Pro M1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="product-name">Product's name:</FormLabel>
            <Input
              id="product-name"
              variant='outline'
              placeholder="ex: Macbook Pro M1"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormControl>
          
          

          <FormControl>
            <FormLabel htmlFor="product-name">Count in stock:</FormLabel>
            <Input
              id="product-name"
              variant='outline'
              placeholder="ex: Macbook Pro M1"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="product-name">buying price:</FormLabel>
            <Input
              id="product-name"
              variant='outline'
              placeholder="ex: Macbook Pro M1"
              value={buyingPrice}
              onChange={(e) => setBuyingPrice(e.target.value)}
            />
          </FormControl>
          
          

          <FormControl>
            <FormLabel htmlFor="product-price">selling price:</FormLabel>
            {/* <MaskedInput
              mask={priceMask}
              type="text"
              id="product-price"
              placeholder="Valor total da transação"
              value={productValue}
              onChange={(e) => setProductValue(e.target.value)}
            /> */}
            <Input
              type="text"
              id="product-price"
              placeholder="Valor total da transação"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="product-name">expiring date:</FormLabel>
            <Input
                placeholder="expire Date and Time"
                size="md"
                type="date" value={expireDate} onChange={(e)=>setExpireDate(e.target.value)}
              />
          </FormControl>

          


          <br />

          <Button
            mt={4}         
            
            type="submit"
            colorScheme='teal' variant='outline'
            onClick={handleAddProduct}
          >
         Register Transaction
          </Button>
          </Stack></Flex>
        </Flex>
      </Flex>
    </>
  );
}
