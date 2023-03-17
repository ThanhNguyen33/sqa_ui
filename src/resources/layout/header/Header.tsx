import { Avatar, Box, Divider, Grid, GridItem, IconButton, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Stack, Text } from "@hope-ui/solid";
import { Outlet, useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import femaleAvt from "../../../assets/female.png";
import SideBar from "../../../components/sidebar/SideBar";
import styles from './Header.module.css';

const Header: Component = () => {

    const [showSettings, setShowSettings] = createSignal(false)
    const [showSideBar, setShowSideBar] = createSignal(false)
    
    const navigate = useNavigate();

    const navigateToSettings = () => {
        setShowSettings(true);
        navigate('/wallet/settings')
    }

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar()) // side bar will have 30% total width of the screen
    }

    return (
        <>
            { !showSettings() && 
                <div class="d-flex" style={{
                    width: "100%",
                }}>
                    <SideBar showSideBar={showSideBar()}/>
                    <Box
                        className={styles.header}
                    >
                        <Grid 
                            templateColumns="repeat(23, 1fr)" 
                            gap="$1" 
                            paddingLeft={10} 
                            paddingRight={10}
                            height="100%"
                            width="100%"
                        >
                            <GridItem colSpan={21}>
                                <Box className="d-flex" alignItems="center" height="100%">
                                    <IconButton variant="ghost" aria-label="hamburgerBar" icon={<i class="fa-solid fa-bars" style={{transform: "scale(1.5)"}}/>} onClick={toggleSideBar}/>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={2} className="d-flex justify-conten-flex-start align-items-center" height="100%" width="max-content">
                                <Popover triggerMode="hover">
                                    <PopoverTrigger as={Box} width="auto" className="d-flex justify-content-center align-items-center" cursor="pointer">
                                        <Avatar name="avatar" src={femaleAvt} marginRight={10} cursor="inherit" onClick={navigateToSettings}/>
                                        <Text cursor="inherit" margin={0} onClick={navigateToSettings} color="wheat">UserName</Text>
                                    </PopoverTrigger>
                                    <PopoverContent borderRadius={20} width={150} cursor="pointer">
                                        <PopoverArrow/>
                                        <Stack direction={{ "@initial": "column", "@md": "column" }} className="fc" padding={5} cursor="inherit">
                                            <Box className="d-flex justify-content-center align-items-center" width="100%" gap="$2">
                                                <i class="fa-solid fa-user" />
                                                <Text>Profile</Text>
                                            </Box>
                                            <Divider />
                                            <Box className="d-flex justify-content-center align-items-center" width="100%" gap="$2">
                                                <i class="fa-solid fa-right-from-bracket" />
                                                <Text>Logout</Text>
                                            </Box>
                                        </Stack>
                                    </PopoverContent>
                                </Popover>
                            </GridItem>
                        </Grid>
                    </Box>
                    <main id="content_area">  
                        <Outlet />
                    </main>
                </div>
            }
        </>
    )
}

export default Header