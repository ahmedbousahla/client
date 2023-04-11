import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Table, Thead, Tbody, Tr, Th , Flex , Text } from "@chakra-ui/react";

import TableItem from "./TableItem";
import { getProducts } from "@/controls/controller";
import { productlistReducer } from "@/store/slices/productSlice";

export default function TableArea() {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.product);
  
  const fetchProducts = async() => {
    try {
      await getProducts().then((res)=>{
        dispatch(
          productlistReducer(res.data.products)
        );
      }).catch((err)=>{
        console.log('err' ,err)
      })
    } catch (error) {
      console.log('error' ,error)
     
    }
  }
  useEffect(()=>{
    fetchProducts()
    
  },[])
  if (list.length !==0) {
    return (
      <Table variant="unstyled" mt={4}>
        <Thead>
          <Tr color="gray">
            <Th>Name of product</Th>
            <Th>qty</Th>            
            <Th>buying price</Th>
            <Th> selling price</Th>
            <Th >expire Date</Th>
            <Th ></Th>
            <Th ></Th>
           
          </Tr>
        </Thead>
        <Tbody>
          {list.map((item, index) => (
            <TableItem key={index} data={item} />
          ))}
        </Tbody>
      </Table>
    );
  } else {
    return(<Flex mt={50}>
    <Text fontSize="25" m="auto">
    No transactions made 💵
    </Text>
  </Flex>)
  }
  
}
