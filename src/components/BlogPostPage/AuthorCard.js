import {
  Box,
  Text,
  VStack,
  Link,
  useColorModeValue,
  HStack,
  Icon
} from '@chakra-ui/react';

import ExternalLink from '../ExternalLink';
import { SiExpo } from 'react-icons/si';

const AuthorCard = () => {
  const textMode = useColorModeValue('black', 'white');
  return (
    <Box
      borderRadius="md"
      padding="8px 12px"
      alignItems="center"
      border="1px solid #805AD5"
    >
      <HStack justifyContent="flex-start">
        <VStack alignItems="stretch" as="section" pt={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="600" color={textMode}>
              <Link href="/about">Aman Mittal</Link>{' '}
              <Text fontSize="sm" color="purple.500" as="i">
                author
              </Text>
            </Text>
            <HStack justifyContent="flex-end">
              <Link
                isExternal
                href="https://github.com/sponsors/amandeepmittal?frequency=one-time"
              >
                <Text fontSize="13px" color="purple.500" fontWeight="bold">
                  Buy me coffee
                </Text>
              </Link>
              <Box>&nbsp;</Box>
              <Link isExternal href="https://github.com/amandeepmittal">
                <Text fontSize="13px" color="purple.500" fontWeight="bold">
                  GitHub
                </Text>
              </Link>
              <Box>&nbsp;</Box>
              <Link isExternal href="https://twitter.com/amanhimself">
                <Text fontSize="13px" color="purple.500" fontWeight="bold">
                  X
                </Text>
              </Link>
            </HStack>
          </HStack>
          <Text fontSize="md" color={textMode}>
            I&apos;m a software developer and a technical writer. On this blog,
            I write about my learnings in software development and technical
            writing.
          </Text>
          <Text fontSize="md" color={textMode}>
            Currently, working as the documentation lead at{' '}
            <span role="img" aria-label="expo">
              <Icon as={SiExpo} w={3} h={3} display="inline" />
            </span>{' '}
            <ExternalLink href="https://expo.dev/">Expo</ExternalLink>. Read
            more about me on the{' '}
            <ExternalLink href="https://amanhimself.dev/about/">
              About page
            </ExternalLink>
            .
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AuthorCard;
