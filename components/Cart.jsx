import { createOrder } from '@/controls/controller';
import { cartlistReducer, insertc, empty } from '@/store/slices/cartSlice';
import {
  Box, Button, Flex, Heading, Input, Spacer, Table,
  Tbody, Thead, Tr, Th, Divider
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from './Row';
import { setExpense, setRevenue } from '@/store/slices/financeSlice';



export default function Cart() {
  const listc = useSelector((state) => state.cart);
  const list = useSelector((state) => state.product);
  const fianenc = useSelector((state) => state.finance);
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()




  // dispatch(cartlistReducer())
  const oderHandler = async () => {

    if (listc) {
      const body = []
      listc.map(function (data) {
        body.push({
          productId: data.id,
          qty: data.qty
        })
      })
      console.log('after map ', body)
      await createOrder(body).catch(
        (err) => { console.log(err) }
      ).then(
        dispatch(empty())
      )

    } else {
      console.log('zerooo')
    }
  }
  useEffect(() => {
    let revenueCount = 0;
    let expenseCount = 0;

    for (let i in listc) {
      revenueCount += listc[i].sellingPrice * listc[i].qty;
      expenseCount += listc[i].sellingPrice * listc[i].qty;
    }

    console.log('rev', revenueCount)

    dispatch(setRevenue(revenueCount));
    dispatch(setExpense(expenseCount));
  }, [listc])
  const handleAddCart = async () => {
    if (name !== "") {

      let existe = false
      list.map(function (data) {
        if (data.productName == name) {
          listc.some((data) => {
            if (data.name == name) {
              console.log('broduct already exist')
              existe = true

            }
          })
          if (!existe) {
            dispatch(
              insertc({
                id: data.id,
                name: data.productName,
                sellingPrice: data.sellingPrice,
                qty,
              })
            )

          }

          setName('')
          setQty(1)
        } else {
          console.log('zezeze')
        }
      }
      )



    } else {
      alert("Fill in all fields!");
    }
  };

  return (


    <div>


      <Flex w='full' alignItems='center' gap='2'  >
        <Box p='2' >
          <Heading size='md'>input the name or the code :</Heading>
        </Box>
        <Spacer />

        <Input placeholder='the name or the code' size='lg' id="inputi" htmlSize={30} width='auto'
          autoComplete='false'
          variant='outline' value={name}
          onChange={(e) => setName(e.target.value)}
        />




        <Input placeholder='the qty' size='lg' id="input-qty"
          variant='outline' htmlSize={4} width='auto'
          value={qty} onChange={(e) => setQty(parseInt(e.target.value))}
        />

        <Button colorScheme='teal' px={4} onClick={handleAddCart}>add</Button>
      </Flex>
      {/* color='gray.500' borderRadius='lg' */}
      <Box overflowY={'scroll'} borderWidth='1px' w={'100%'} mt={4} p={'2'} h='350px' scrollBehavior={'inside'} >
        <Table variant='simple' size={'sm'} mt={2}>
          <Thead>
            <Tr color="gray">
              <Th>Name of product</Th>
              <Th>qty</Th>

              <Th> selling price</Th>

              <Th >som</Th>
              <Th ></Th>

            </Tr>
          </Thead>
          <Divider w={'full'} />
          <Tbody>
            {listc.map((data, index) => (

              <Row key={index} data={data} />


            ))}
          </Tbody>
        </Table>
      </Box>
      <Button onClick={oderHandler} right='25%' m={4} pos="absolute">push</Button>
      <Box>the totale : {fianenc.revenue}  </Box>
    </div>
  )
}