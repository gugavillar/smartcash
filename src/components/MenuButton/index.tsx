import {
  Menu,
  MenuList,
  MenuButton as ChakraMenuButton,
  Button,
  MenuDivider,
} from '@chakra-ui/react'
import { CaretDown } from 'phosphor-react'

import { Transaction, LogoutButton, Accounts } from '@/components'

export const MenuButton = () => {
  return (
    <Menu placement="bottom-end">
      <ChakraMenuButton
        as={Button}
        leftIcon={<CaretDown />}
        bg="blue.400"
        color="white"
        _hover={{ bg: 'blue.400' }}
        _active={{ bg: 'blue.400' }}
      >
        Menu
      </ChakraMenuButton>
      <MenuList zIndex="banner" border="none" boxShadow="2xl" color="black">
        <Transaction />
        <Accounts />
        <MenuDivider />
        <LogoutButton />
      </MenuList>
    </Menu>
  )
}
