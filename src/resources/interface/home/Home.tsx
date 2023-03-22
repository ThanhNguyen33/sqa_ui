import { Box, Grid, GridItem, Heading, Text, VStack } from '@hope-ui/solid';
import { Component, createEffect } from 'solid-js';
import * as api from "../../../api/traffic";

const Home : Component = () => {
    
    createEffect(() => {
        api.getQueryWithCredential('products')
        .then(res => {
            console.log(res); 
        })
    })

    return (
        <div style={{
            padding: "50px 10px 10px 30px",
            height: "auto"
        }}>
            <VStack alignItems="flex-start">
                <Heading fontWeight={700} cursor="default" size="5xl" color="white">
                    Dashboard
                </Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap="$3" height="250px" width="100%">
                    <GridItem padding="10px 30px 10px 0">
                        <Box className="d-flex justify-content-center align-items-center" 
                            background="linear-gradient(270deg,#7beafe,#1c8cfa)" 
                            height="100%"
                            borderRadius={20}
                        >
                            <VStack>
                                <Heading fontWeight={600} cursor="default" size="3xl" color="white">
                                    Total balance
                                </Heading>
                                <Text>
                                    $1000
                                </Text>
                            </VStack>
                        </Box>
                    </GridItem>
                    <GridItem padding="10px 10px">
                        <Box className="d-flex justify-content-center align-items-center"
                            background="linear-gradient(90deg,#3adf9e,#b3fb5b)"
                            height="100%"
                            borderRadius={20}
                        >

                        </Box>
                    </GridItem>
                    <GridItem padding="10px 10px 10px 30px">
                        <Box className="d-flex justify-content-center align-items-center"
                            background="linear-gradient(90deg,#fc516a,#ff7e76)"
                            height="100%"
                            borderRadius={20}
                        >

                        </Box>
                    </GridItem>
                </Grid>
                <div style={{
                    height: "100%"
                }}>
                    dsdsd
                </div>
            </VStack>
        </div>
    )
}

export default Home;