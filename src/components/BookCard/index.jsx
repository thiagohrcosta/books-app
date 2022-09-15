import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function BookCard({
  key,
  title,
  year,
  description,
  author,
  cover
}) {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <Container
      margin={'50px auto'}
    >
      <Box
        borderWidth='1px'
        bgColor={darkMode == false ? 'gray.100' : 'gray.700'}
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
              {title} ({year})
            </Text>
            <Text
              color={darkMode == true ? 'gray.100' : 'gray.800'}
              fontWeight='bold'
              textTransform={'uppercase'}
            >
              by {author}
            </Text>
          </Box>
          <Text
          >
            {description.substring(0, 120)}...
          </Text>
          <Button
              bgColor={darkMode == true ? 'blue.400' : 'blue.500'}
              color={'white'}
              width={100}
              margin={'10px 0px'}
            >More</Button>
        </Box>
      </Box>

    </Container>
  )
}
