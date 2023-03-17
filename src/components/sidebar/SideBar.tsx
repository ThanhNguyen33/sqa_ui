import { Box, Text, VStack } from "@hope-ui/solid";
import { Component, createSignal, JSX, Show, splitProps } from "solid-js";
import style from "./SideBar.module.css";
import _ from "lodash";

type SideBarProps = {
  showSideBar: boolean;
} & JSX.HTMLAttributes<HTMLButtonElement>

const SideBar : Component<SideBarProps> = (props) => {

  const [dataStyle] = splitProps(props, ["showSideBar"])

  const [dashBoardKey, setDashBoardKey] = createSignal([
    {
      label: "Dashboard",
      icon: "fa-solid fa-house",
    },
    {
      label: "My wallet",
      icon: "fa-solid fa-wallet",
      show_childs: false,
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
      show_childs: false,
      childs: [
        {
          label: "General Settings",
          icon: "fa-solid fa-list-check",
        },
        {
          label: "FAQs",
          icon: "fa-solid fa-clipboard-question",
        },
        {
          label: "Contact",
          icon: "fa-solid fa-phone",
        }
      ]
    }
  ])

  const setShowChildsComponent = (index: number) => {
    const newDashBoardKey = _.chain(dashBoardKey()).map((item, idx) => {
      if(idx === index){
        item.show_childs = !item.show_childs
      }
      return item
    }).toArray().value()
    setDashBoardKey(newDashBoardKey)
  }

  return (
      <Box className={`${dataStyle.showSideBar ? style.slide_out_animation : style.hide_sidebar} vh-100`} backgroundColor="#212e55">
        <Box height="15vh" minHeight="70px">
          
        </Box>
        <VStack className="d-flex justify-content-center align-items-center">
          {
            dashBoardKey().map((item, index) => {
              return (
                <div class={`${item.label} ${style.dashboard_menu_item} w-100 pl-4 pr-1`}>
                  <div class="d-flex justify-content-flex-start align-items-center" onClick={() => setShowChildsComponent(index)} style={{
                    "min-height": "50px",
                    position: "relative",
                  }}>
                    <i class={item.icon} style={{
                      color: "inherit",
                    }}/>
                    <Text 
                      cursor="default" 
                      margin={0} 
                      color="inherit"
                      fontWeight={600}
                      size="xl"
                      paddingLeft={15}
                    >
                      {item.label}
                    </Text>
                    <Show
                      when={item.childs}
                      fallback={<></>}
                    >
                      <i class={`${style.menu_icon} fa-solid fa-caret-down`} style={{
                        color: "inherit",
                        position: "absolute",
                        right: "20px",
                        ...(item.show_childs && {
                          transform: "rotate(90deg)"
                        })
                      }}/>
                    </Show>
                  </div>
                  <div>
                    <Show
                      when={item.childs && item.show_childs}
                      fallback={<></>}
                    >
                      {
                        item.childs?.map(it => {
                          return(
                            <div class={`${it.label} ${style.dashboard_menu_item_child} d-flex justify-content-flex-start align-items-center w-100 pl-4`}>
                              <i class={it.icon} style={{
                                color: "inherit",
                              }}/>
                              <Text 
                                cursor="default" 
                                margin={0} 
                                color="inherit"
                                fontWeight={600}
                                size="xl"
                                paddingLeft={15}
                              >
                                {it.label}
                              </Text>
                            </div>
                          )
                        })
                      }
                    </Show>
                  </div>
                </div>
              )
            })
          }
        </VStack>
      </Box>
  )
}

export default SideBar;