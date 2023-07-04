import { CloseIcon } from "@chakra-ui/icons";
import { Badge, Flex, Text } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
    >
      <Flex align="center">
        <Text mr={1}>{user.name}</Text>
        {admin === user._id && <Text fontSize="xs">(Admin)</Text>}
        <CloseIcon ml={1} onClick={() => handleFunction(user)} />
      </Flex>
    </Badge>
  );
};

export default UserBadgeItem;
