import { Box, Text, Image, Stack } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = (props) => {
  const { id, userName, fullName, imageUrl, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      overflow="hidden"
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center" spacing={4}>
        {/* Imageの親コンテナとしてBoxを設定します */}
        <Box
          borderRadius="full"
          boxSize="160px" // 'boxsize'を'boxSize'に修正します
          overflow="hidden"
          m="auto"
        >
          {/* ImageコンポーネントをBoxコンテナ内に配置します */}
          <Image
            src={imageUrl}
            alt={userName}
            boxSize="full"
            objectFit="cover"
          />
        </Box>
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
};
