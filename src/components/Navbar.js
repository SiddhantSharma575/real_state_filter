import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { ChevronDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import React from 'react'

const Navbar = () => {
    return (
        <Box display="flex" justifyContent="space-around" alignItems="center" h="60px" background="rgb(251,250,255)" >
            <Text display="flex" alignItems="center" fontSize={21} fontWeight="bold">
                <TriangleUpIcon color="rgb(111,101,239)" w={8} h={8} />
                Estatery
            </Text>
            <List display="flex" alignItems="center" >
                <ListItem cursor="pointer" background="rgb(232,230,251)" >
                    <Text p={1} fontWeight="500" fontSize={14}>Rent</Text>
                </ListItem>
                <ListItem ml="6" cursor="pointer">
                    <Text fontWeight="500" fontSize={14} >Buy</Text>
                </ListItem>
                <ListItem ml="6" cursor="pointer">
                    <Text fontWeight="500" fontSize={14}>Sell</Text>
                </ListItem>
                <ListItem ml="6" display="flex" alignItems="center" cursor="pointer">
                    <Text fontWeight="500" fontSize={14} >Manage Property</Text>
                    <ChevronDownIcon />
                </ListItem>
                <ListItem ml="6" display="flex" alignItems="center" cursor="pointer">
                    <Text fontWeight="500" fontSize={14} >Resources</Text>
                    <ChevronDownIcon />
                </ListItem>
            </List>
            <Box display="flex" alignItems='center'>
                <Button colorScheme='blue' variant='outline'>
                    Log In
                </Button>
                <Button ml={4} colorScheme='blue'>Sign Up</Button>
            </Box>
        </Box >
    )
}

export default Navbar