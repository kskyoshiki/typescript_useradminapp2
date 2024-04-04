import { IconButton } from '@chakra-ui/react';
import { VFC } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
  isOpen: boolean;
};

export const MenuIconButton: VFC<Props> = (props) => {
  const { onOpen, isOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
};
