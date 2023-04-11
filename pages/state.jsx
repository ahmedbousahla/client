
import Head from "next/head";
import ContentArea from "../components/ContentArea";

import Menu from "../components/Menu";

import {  Flex, Heading} from "@chakra-ui/react";

export default function State() {

  

 

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
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Heading
            textAlign={"center"}
            align={"center"}
            fontWeight="normal"
            mb={12}
            letterSpacing="tight"
          >
            The products
          </Heading>
          <ContentArea />
        </Flex>
      </Flex>
    </>
  );
}
