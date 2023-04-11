
import React, { useEffect } from "react";
import Link from "next/link";
import { setRevenue, setExpense } from "../store/slices/financeSlice";

import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";

import { Flex, Heading, Text } from "@chakra-ui/react";


import Menu from "../components/Menu";

import Cart from "@/components/Cart";

export default function Home() {

  const list = useSelector((state) => state.product);
  const finance = useSelector((state) => state.finance);
  const dispatch = useDispatch();


 

  useEffect(() => {
    let revenueCount = 0;
    let expenseCount = 0;

    // loop to complete values ​​in income and expense
    // for (let i in list) {
    //   if (list[i].category === "Venda") {
    //     revenueCount += list[i].totalValue;
    //   } else {
    //     expenseCount += list[i].totalValue;
    //   }
    // }

    dispatch(setRevenue(revenueCount));
    dispatch(setExpense(expenseCount));
  }, [list]);

  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - ContentArea */}
        <Flex
      w={'full'}
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      background="#fff"
    >
      <Heading fontWeight="normal" mb={12} letterSpacing="tight">
      Welcome        
      </Heading>
      {/* <Flex flexDir="row">
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#fffff"
          borderRadius={10}
          minW="150px"
        >
          
          
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#fffff"
          borderRadius={10}
          minW="150px"
        >
          
          
        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="300px"
        >
          <Text color="#ccc" fontSize="sm">
          Cost
          </Text>
          <Text
            
            fontWeight="bold"
            fontSize="2xl"
          >
            30
          </Text>
        </Flex>
      </Flex> */}

      
      <Flex flexDir="column">
        <Flex overflow="auto">
            <Cart />
          
        </Flex>
      </Flex>
    </Flex>
      </Flex>
    </>
  );
}
