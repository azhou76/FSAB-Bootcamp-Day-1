import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";

interface Props {
    content: string;
    postedAt?: Date;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implement a Comment!
    return <div>
    <Box bg='tomato' w='100%' p={4} color='white'>
        <Text fontSize='5l'>Comment: {content}</Text>
        <Text fontSize='sm'>Posted at {postedAt}</Text>
    </Box>
</div>;
    
}

export default Comment;