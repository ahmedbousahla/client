import React, { useEffect } from "react";

import Link from "next/link";

import { Flex, Heading, Text, IconButton, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { setRevenue, setExpense } from "../store/slices/financeSlice";
import { order } from "../store/slices/productSlice";

import TableArea from "./TableArea";




export default function ContentArea() {
  const list = useSelector((state) => state.product);
  const finance = useSelector((state) => state.finance);
  const dispatch = useDispatch();

  // const currentDate = getCurrentDate();
 

  useEffect(() => {
    let revenueCount = 0;
    let expenseCount = 0;

    // loop to complete values ​​in income and expense
    for (let i in list) {
      if (list[i].category === "Venda") {
        revenueCount += list[i].totalValue;
      } else {
        expenseCount += list[i].totalValue;
      }
    }

    dispatch(setRevenue(revenueCount));
    dispatch(setExpense(expenseCount));
  }, [list]);

  return (
    <Flex
      w="85%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      background="#fff"
    >
      
      {/* <Flex flexDir="row">
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
          Revenues
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            {finance.revenue}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
          Expenses
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl" mb={2}>
            {finance.expense}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
          Balance
          </Text>
          <Text
            color={
              finance.revenue - finance.expense >= 0 ? "#00ff00" : "#ff0000"
            }
            fontWeight="bold"
            fontSize="2xl"
          >
            {finance.revenue - finance.expense}
          </Text>
        </Flex>
      </Flex> */}

      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
         
          </Heading>
          <Text fontSize="small" color="gray" ml={4}>
            {/* {formatCurrentMonth(currentDate)} */}
          </Text>
        </Flex>
        <Flex gap={10}>
          <Button onClick={() => dispatch(order())}>
            <Text fontWeight="normal" fontSize="16">
              ORDENAR [A-Z]
            </Text>
          </Button>
          <Link href="/add">
            <IconButton icon={<FiPlus />} />
          </Link>
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
           <TableArea />
         
        </Flex>
      </Flex>
    </Flex>
  );
}
