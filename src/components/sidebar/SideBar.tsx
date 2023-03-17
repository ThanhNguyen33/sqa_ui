import { Box, Heading, Text, VStack } from "@hope-ui/solid";
import { Component, createEffect, JSX, Show, splitProps } from "solid-js";
import style from "./SideBar.module.css";
import _ from "lodash";

type SideBarProps = {
  showSideBar: boolean;
} & JSX.HTMLAttributes<HTMLButtonElement>

const SideBar : Component<SideBarProps> = (props) => {

  const [dataStyle] = splitProps(props, ["showSideBar"])

  const dashBoardKey = [
    {
      label: "Dashboard",
      icon: "fa-solid fa-house",
    },
    {
      label: "My wallet",
      icon: "fa-solid fa-wallet",
      childs: [
        {
          label: "User wallet",
          icon: "fa-solid fa-money-check-dollar",
        },
        {
          label: "Transaction History",
          icon: "fa-solid fa-right-left",
        },
      ]
    },
    {
      label: "Profile",
      icon: "fa-solid fa-user",
    },
    {
      label: "Settings",
      icon: "fa-solid fa-gear",
    }
  ]

    return (
        <Box className={`${dataStyle.showSideBar ? style.slide_out_animation : style.hide_sidebar} vh-100`} backgroundColor="#212e55">
          <Box height="20vh" minHeight="100px">
            This is the side bar
          </Box>
          <VStack className="d-flex justify-content-center align-items-center">
            {
              dashBoardKey.map((item) => {
                return (
                  <div class={`${item.label} ${style.dashboard_menu_item} d-flex justify-content-flex-start align-items-center w-100 pl-5`}>
                    <i class={item.icon} style={{
                      color: "#a3a8c8"
                    }}/>
                    <Text 
                      cursor="default" 
                      margin={0} 
                      color="#a3a8c8"
                      fontWeight={600}
                      size="xl"
                      paddingLeft={15} 
                      _hover={{
                        color: "white"
                      }}
                    >
                      {item.label}
                    </Text>
                    <Show
                      when={item.childs}
                      fallback={<></>}
                    >
                      <i class="fa-solid fa-caret-down" style={{
                        color: "#a3a8c8",
                        "margin-left": "25px"
                      }}/>
                    </Show>
                  </div>
                )
              })
            }
          </VStack>
        </Box>
    )
}

export default SideBar;