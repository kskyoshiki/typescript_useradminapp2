import { Button } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

type Props = {
  disabled?: boolean;
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.600"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
