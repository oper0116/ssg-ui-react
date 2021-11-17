/* eslint-disable react/prop-types */
import { Box, HStack, Radio, RadioGroup, Stack, useRadio, useRadioGroup } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/라디오',
};

export const Default = (args) => {
  const [value, setValue] = React.useState('radio1');

  return (
    <RadioGroup name="radio-group" onChange={setValue} value={value} {...args}>
      <HStack spacing={5}>
        <Radio value="radio1">라디오1</Radio>
        <Radio value="radio2">라디오2</Radio>
        <Radio value="radio3">라디오3</Radio>
      </HStack>
    </RadioGroup>
  );
};
Default.args = {
  colorScheme: 'primary',
  size: 'md',
};
Default.argTypes = {
  colorScheme: {
    control: {
      type: 'select',
      options: ['primary', 'gray'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const isDisabled = () => {
  return (
    <RadioGroup name="radio-group" value="radio2">
      <HStack spacing={5}>
        <Radio value="radio1" isDisabled>
          라디오
        </Radio>
        <Radio value="radio2" isDisabled>
          라디오
        </Radio>
      </HStack>
    </RadioGroup>
  );
};
isDisabled.storyName = 'isDisabled';

export const Size = () => {
  return (
    <Stack>
      {['sm', 'md', 'lg'].map((size) => (
        <RadioGroup key={size} name={size} size={size} value={`${size}1`}>
          <HStack spacing={5}>
            <Radio value={`${size}1`}>라디오1</Radio>
            <Radio value={`${size}2`}>라디오2</Radio>
          </HStack>
        </RadioGroup>
      ))}
    </Stack>
  );
};

const CustomRadioCardExample = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'primary',
          color: 'white',
          borderColor: 'primary',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const CustomRadioButtons = () => {
  const options = ['라디오1', '라디오2', '라디오3'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: '라디오 그룹',
    defaultValue: '라디오1',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadioCardExample key={value} {...radio}>
            {value}
          </CustomRadioCardExample>
        );
      })}
    </HStack>
  );
};
