import { delc, editc } from "@/store/slices/cartSlice";
import { Box, Button, Center, Flex, Heading, IconButton, Td, Tr, useControllableState } from "@chakra-ui/react";

import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";


export default function Row({data}){

    const dispatch =useDispatch()
    const [qty, setQty] = useControllableState( {defaultValue:data.qty});
    
    const editingHandler = async () => {
      
      dispatch(editc({
        id : data.id ,
        qty : data.qty
      }))
    }

    const handleDelItem = async() => {
        if (confirm("delete this item")) { 
          try {
            
           
          
          dispatch(delc({ name: data.name }));
        
          } catch (error) {
          console.log('errorr' , error)
            
          }
          
        }
      };

return(
    <Tr >
           
      <Td>
        <Flex align="center">
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.name}
            </Heading>            
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex>

        <Button onClick={() =>{ setQty(qty + 1);
        editingHandler ;
        }}>+</Button>
      <Center as='span' w='20px' mx='20px'>
        {qty}
      </Center>
      <Button onClick={() => {editingHandler() ; setQty(qty - 1); }}>-</Button>
            
            </Flex>
      </Td>
      <Td>
        <Flex>{data.sellingPrice}</Flex>
      </Td>
      <Td>
        <Flex>{data.sellingPrice * data.qty}</Flex>
      </Td>
      <Td>
      <IconButton icon={<FiX />} onClick={handleDelItem} />
      </Td>
      
      
      
      
    </Tr>
)
}