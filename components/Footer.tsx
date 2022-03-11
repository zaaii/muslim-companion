import { Divider, Link, Stack, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Stack bg="gray.900" textColor="white" p={4}>
      <Text textAlign="center">
        This is a open source project, you can see the source code at{' '}
        <Link
          color="green.400"
          href="https://github.com/hare451g/muslim-companion"
        >
          @hare451g
        </Link>
        &apos;s GitHub
      </Text>
      <Divider />
      <Text textAlign="center">
        Written by{' '}
        <Link color="green.400" href="https://twitter.com/sadevva_">
          @sadevva_
        </Link>
      </Text>
      <Text textAlign="center">
        Build with{' '}
        <Link color="green.400" href="https://vercel.com">
          Vercel
        </Link>
      </Text>
      <Text textAlign="center">
        Super powered with{' '}
        <Link color="green.400" href="https://github.com/sutanlab/quran-api">
          Qur&apos;an API
        </Link>{' '}
        by{' '}
        <Link color="green.400" href="https://github.com/sutanlab">
          Sutanlab
        </Link>
      </Text>
    </Stack>
  );
}
