import {
  Menu,
  MenuList,
  MenuButton as ChakraMenuButton,
  Button,
  MenuDivider,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react'
import { CaretDown } from 'phosphor-react'

import { Transaction, LogoutButton, Accounts } from '@/components'

export const MenuButton = () => {
  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    isClosable: true,
    duration: 3000,
  })

  const variant = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
    },
    {
      fallback: undefined,
    },
  )

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
        <Transaction variant={variant} toast={toast} />
        <Accounts variant={variant} toast={toast} />
        <MenuDivider />
        <LogoutButton />
      </MenuList>
    </Menu>
  )
}
