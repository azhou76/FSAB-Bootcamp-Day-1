import { Box, Button, Text } from '@chakra-ui/react'
import {useState} from "react"

function Card() {
    const [isClicked, setIsClicked] = useState(false);

    return <div>
        <Box maxW= 'sm' borderWidth= 'lpx' borderRadius= 'lg' p={4}>
            <Text fontSize='5xl'>Title</Text>
            <Text fontSize='sm'>This is body text...</Text>
            <Text>{isClicked ? "hi" : "bye"}</Text>
            <Button colorScheme='blue' onClick={() => setIsClicked(true)}>Click me</Button>
        </Box>
    </div>
}

export default Card;