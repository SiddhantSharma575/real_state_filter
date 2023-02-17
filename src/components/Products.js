import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Divider, Flex, Image, Input, InputGroup, InputRightElement, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { BiBed, BiBath, } from "react-icons/bi"
import { TbSquareRotated } from "react-icons/tb"
import { data } from "../data/dummyData"
import { house_type } from '../data/housetype'
import { locations } from "../data/locations"
import { prices } from "../data/price"

const Products = () => {
    const [property, setProperty] = useState(data);
    const [location, setLocation] = useState("")
    const [selDate, setSelDate] = useState("")
    const [price, setPrice] = useState("")
    const [htype, setHtype] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        setProperty(data)

        if (location) {
            setProperty((prev) => {
                return prev.filter((pro) => pro.location.includes(location))
            })
        }
        if (selDate) {
            let d1 = new Date(selDate)
            setProperty((prev) => {
                return prev.filter((prev) => {
                    if (d1 <= new Date(prev.available_date)) {
                        return true;
                    } else {
                        return false;
                    }
                })
            })
        }
        if (price) {
            let bounds = price.split("-");
            let lowerBound = Number(bounds[0].substring(1));
            let upperBound = Number(bounds[1].substring(1))
            setProperty((prev) => {
                return prev.filter((pr) => {
                    if (Number(pr.price.substring(1)) >= lowerBound && Number(pr.price.substring(1)) <= upperBound) {
                        return true;
                    } else {
                        return false;
                    }
                })
            })
        }

        if (htype && htype !== "All") {
            setProperty((prev) => {
                return prev.filter((pr) => {
                    if (pr.property_type === htype) {
                        return true;
                    } else {
                        return false;
                    }
                })
            })
        }
    }
    return (
        <Box w="100%" h="max-content" background="rgb(248,247,253)">
            <Box display="flex" alignItems="center" justifyContent="space-around">
                <Text mt={6} fontWeight="bold" fontSize={26}>Search Properties to rent</Text>
                <InputGroup mt={6} w={200}>
                    <Input variant="outline" placeholder='Search properties...' size="md" w={200} />
                    <InputRightElement children={<SearchIcon color="blue" />} />
                </InputGroup>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-evenly" background="#fff" w="65%" ml="270" mt="10" p="3">
                <Box>
                    <Text color="rgb(203,202,207)">Location</Text>
                    <Select mt={1} value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Select Location'>
                        {
                            locations.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))
                        }
                    </Select>
                </Box>
                <div style={{ height: '3rem', width: "0.1rem", background: "rgb(243,243,243)" }}></div>
                <Box>
                    <Text color="rgb(203,202,207)" >When</Text>
                    <Input mt={1} placeholder="Select Date & Time" size="md" type="date" value={selDate} onChange={(e) => setSelDate(e.target.value)} />
                </Box>
                <div style={{ height: '3rem', width: "0.1rem", background: "rgb(243,243,243)" }}></div>
                <Box>
                    <Text color="rgb(203,202,207)">Price</Text>
                    <Select mt={1} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Select Price...">
                        {
                            prices.map((pr, idx) => (
                                <option key={idx} value={pr}>{pr}</option>
                            ))
                        }
                    </Select>
                </Box>
                <div style={{ height: '3rem', width: "0.1rem", background: "rgb(243,243,243)" }}></div>
                <Box>
                    <Text color="rgb(203,202,207)">Property Type</Text>
                    <Select mt={1} value={htype} onChange={(e) => setHtype(e.target.value)} placeholder="Select House Type...">
                        {
                            house_type.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))
                        }
                    </Select>
                </Box>
                <div style={{ height: '3rem', width: "0.1rem", background: "rgb(243,243,243)" }}></div>
                <Button onClick={handleSearch} colorScheme="blue">Search</Button>
            </Box>

            <SimpleGrid ml="20" mt="10" spacing={4} column={3} templateColumns="repeat(3,1fr)" rowGap="5" columnGap="2">
                {
                    property.map((singleProp) => (
                        <Card w={350} key={singleProp.id} cursor="pointer">
                            <CardBody>
                                <Image w={350} h={200} src={singleProp.image}
                                    borderRadius="1g" />
                                <Stack>
                                    <Flex alignItems="center" justifyContent="space-between" mt="3">
                                        <Flex alignItems="center">
                                            <Text color="blue" fontSize={22} fontWeight="700">{singleProp.price}</Text>
                                            <Text color="rgb(200,200,202)" fontSize={16}>/month</Text>
                                        </Flex>
                                        <AiOutlineHeart size={22} />
                                    </Flex>
                                    <Text color="black" fontSize={22} fontWeight="800">{singleProp.name}</Text>
                                    <Text color="rgb(200,200,202)" fontWeight="500" >{singleProp.address}</Text>
                                    <Divider />
                                    <Flex alignItems="center">
                                        <Flex alignItems="center">
                                            <BiBed color="blue" />
                                            <Text color="rgb(200,200,202)" ml={2}>{singleProp.beds} Beds</Text>
                                        </Flex>
                                        <Flex alignItems="center" ml={2}>
                                            <BiBath color="blue" />
                                            <Text color="rgb(200,200,202)" ml={2}> {singleProp.bath} BathRooms</Text>
                                        </Flex>
                                        <Flex alignItems="center" ml={2}>
                                            <TbSquareRotated color="blue" />
                                            <Text color="rgb(200,200,202)" ml={2}>{singleProp.size} m/sq</Text>
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}

export default Products