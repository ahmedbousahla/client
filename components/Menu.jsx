import Link from "next/link";

import { Flex, Heading,  Text, Icon } from "@chakra-ui/react";
import {  FiPlus, FiShoppingCart , FiPackage } from "react-icons/fi";
import {  MdQueryStats } from "react-icons/md";


export default function Menu() {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex flexDir="column" justifyContent="space-between" h="100vh">
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
          >
            Stock.
          </Heading>
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="sidebar-items">
              <Link href="/">
                <Flex>
                  <Icon as={FiShoppingCart} fontSize="2xl" />
                  <Text color="#fff" cursor={"pointer"}>
                    Home
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/add">
                <Flex>
                  <Icon as={FiPlus} fontSize="2xl" />
                  <Text color="#fff" cursor={"pointer"}>
                  Adding a product
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items"><Link
              href="/about"              
            >
              <Flex className="sidebar-items">
                <Icon as={FiPackage} fontSize="2xl" />
                <Text color="#fff">stock</Text>
              </Flex>
            </Link></Flex>
            <Flex className="sidebar-items"><Link
              href="/about"              
            >
              <Flex className="sidebar-items">
                <Icon as={MdQueryStats} fontSize="2xl" />
                <Text color="#fff">statistic</Text>
              </Flex>
            </Link></Flex>
          </Flex>
        </Flex>
        
      </Flex>
    </Flex>
  );
}
