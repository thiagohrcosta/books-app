import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function BookCard({key, title, author, cover}) {
  return (
    <Container
      margin={'50px auto'}
    >
      <Box
        maxW='sm'
        borderWidth='1px'
        bgColor={'gray.100'}
        borderRadius='lg'
        width={400}
        height={300}
        display='flex'
      >
        <Image
          src={cover}
          alt={"Cover"}
          marginTop={-10}
          paddingLeft={2}
          width={200}
        />
        <Box
          padding={4}
        >
          <Text
            color={'gray.800'}
            fontWeight='bold'
            textTransform={'uppercase'}
          >
            {author}
          </Text>
        </Box>
      </Box>

    </Container>
  )
}
