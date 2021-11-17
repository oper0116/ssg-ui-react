import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { SystemIcon } from '../../components/icons';

export default {
  title: '디자인시스템 테마/메뉴',
};

export const Default = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="outline"
            colorScheme="gray"
            rightIcon={
              isOpen ? (
                <SystemIcon icon="chevron_up" width={5} />
              ) : (
                <SystemIcon icon="chevron_down" width={5} />
              )
            }
          >
            {isOpen ? '메뉴 닫기' : '메뉴 열기'}
          </MenuButton>
          <MenuList>
            <MenuItem>메뉴아이템</MenuItem>
            <MenuItem>메뉴아이템</MenuItem>
            <MenuItem>메뉴아이템</MenuItem>
            <MenuItem>메뉴아이템</MenuItem>
            <MenuItem as="a" href="#">
              메뉴아이템 링크
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
