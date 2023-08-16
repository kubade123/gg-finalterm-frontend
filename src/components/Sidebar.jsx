import { List, ListItem, ListIcon, } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"


export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={HamburgerIcon} color="white" />
          Video List
        </NavLink>
      </ListItem>
    </List>
  )
}