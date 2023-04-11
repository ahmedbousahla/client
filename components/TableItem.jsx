import { useDispatch, useSelector } from "react-redux";
import { del } from "../store/slices/productSlice";




import Link from "next/link";

import {
  Tr,
  Td,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiX, FiClipboard } from "react-icons/fi";
import { deleteProduct, getProduct } from "@/controls/controller";
import { formatCurrentMonth } from "@/utils/dateUtil";

export default function TableItem({ data }) {
  const listc = useSelector((state) => state.cart);
 
  const dispatch = useDispatch();
  const sendId = async() =>{
    const body = {id:data.id}
    getProduct(body)
  }

  const handleDelItem = async() => {
    if (confirm("delete this item")) { 
      try {
        const body = {id : data.id}  
      console.log("body",body)   
      await deleteProduct(body).then(()=>{
      dispatch(del({ id: data.id }));
    }).catch((err)=>{
      console.log('err' , err)

      })
      } catch (error) {
      console.log('errorr' , error)
        
      }
      
    }
  };

  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.productName}
            </Heading>            
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex>{data.countInStock}</Flex>
      </Td>
      <Td >
        <Text fontWeight="bold" display="inline-table">
          {data.buyingPrice}         
        </Text>
      </Td>
      <Td >
        <Text fontWeight="bold" display="inline-table">
          {data.sellingPrice}         
        </Text>
      </Td>
      <Td >
        <Text fontWeight="bold" display="inline-table">
        {formatCurrentMonth(data.expireDate)}         
        </Text>
      </Td>
      <Td>
        <Link href={`/product/${data.id}`} onClick={() => sendId }>
          <IconButton icon={<FiClipboard />} mr={5} />
        </Link>
        
      </Td>
      <Td>
        
        <IconButton icon={<FiX />} onClick={handleDelItem} />
      </Td>
    </Tr>
  );
}
