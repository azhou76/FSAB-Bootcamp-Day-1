import {FC} from "react";
import {Box, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt?: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    console.log(postedAt)
    // TODO: Implemnt a Post!
    return <div>
    <Box maxW= 'sm' m={2} bg= 'magenta' borderWidth= 'lpx' borderRadius= 'lg' p={4}>
        <Text fontSize='5l'>Title: {title}</Text>
        <Text fontSize='l'>Body: {body}</Text>
        <Text fontSize='sm'>Posted at {postedAt?.toString()}</Text>
    </Box>
</div>;
}

export default Post;