import { Box, Flex, Icon, Link, VStack, Text } from '@chakra-ui/react';
import { FcBusinessman, FcBusinesswoman, FcAssistant } from 'react-icons/fc';
const Sidebar = () => {
  return (
    <Flex direction="column" h="100vh" p={4} py={8} px={14}>
      <Box mb={20}>Logo</Box>
      <Box>
        <Text fontSize="xx-large" fontWeight="bold" mb={16}>
          Catagories
        </Text>
        <VStack spacing={4}>
          <Link>
            <Icon as={FcBusinessman} /> Men
          </Link>
          <Link>
            <Icon as={FcBusinesswoman} /> Women
          </Link>
        </VStack>
      </Box>
      <Flex justifyContent="flex-end" flexDirection="column" flex="1">
        <Box>
          <Icon as={FcAssistant} />
          Help
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
