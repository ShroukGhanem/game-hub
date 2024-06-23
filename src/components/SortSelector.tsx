import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Order By</MenuButton>
      <MenuList>
        <MenuItem>Placeholder</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
