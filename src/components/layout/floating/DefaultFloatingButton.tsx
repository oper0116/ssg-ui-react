import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';

const getThemeStyles = (theme: 'white' | 'white.on' | 'black' | 'black.on') => {
  switch (theme) {
    case 'black.on':
      return {
        bgColor: 'black',
        color: 'white',
      };
    case 'black':
      return {
        bgColor: 'blackAlpha.500',
        color: 'white',
      };
    case 'white.on':
      return {
        bgColor: 'white',
        color: 'black',
      };
    case 'white':
    default:
      return {
        border: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        bgColor: 'whiteAlpha.900',
        color: 'black',
      };
  }
};

interface Props extends ButtonProps {
  theme?: 'white' | 'white.on' | 'black' | 'black.on' | undefined;
}
const DefaultFloatingButton = forwardRef<Props, 'button'>(
  ({ theme = 'white', children, ...rest }, ref) => {
    const themeStyles = getThemeStyles(theme);
    return (
      <Button
        variant="unstyled"
        display="flex"
        w={10}
        h={10}
        boxShadow="lg"
        borderRadius="15px"
        {...themeStyles}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

export default DefaultFloatingButton;
