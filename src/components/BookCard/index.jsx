import { Box, Button, Container, Image, Text } from "@chakra-ui/react";

export default function BookCard({
  key,
  title,
  year,
  description,
  author,
  cover
}) {
  return (
    <Container
      margin={'50px auto'}
    >
      <Box
        borderWidth='1px'
        bgColor={'gray.100'}
        borderRadius='lg'
        width={500}
        height={300}
        display='flex'
      >
        <Box>
          <Image
            src={cover}
            alt={"Cover"}
            marginTop={-10}
            marginLeft={2}
            marginBottom={10}
            height={300}
            minWidth={200}
            boxShadow={'lg'}
          />
        </Box>
        <Box
          padding={4}
        >
          <Box
            display='flex'
            flexDirection='column'
          >
            <Text>
              {title}
            </Text>
            <Text
              color={'gray.800'}
              fontWeight='bold'
              textTransform={'uppercase'}
            >
              by {author}
            </Text>
            <Text>
              ({year})
            </Text>
          </Box>
          <Text
          >
            {description.substring(0, 120)}...
          </Text>
          <Button
              colorScheme='blue'
              width={100}
              margin={'10px 0px'}
            >More</Button>
        </Box>
      </Box>

    </Container>
  )
}
