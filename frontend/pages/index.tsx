import type { NextPage } from 'next'
import Card from '../components/Card';
import Comment from '../components/Comment';
import { Button, Container, HStack, Spacer, Text, VStack, propNames } from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import { useState, useEffect } from "react";
import axios from "axios";

const Home: NextPage = () => {
    // TODO: Implement this NextPage!
    // return <Card/>

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
  
    useEffect(() => {
        axios.get("http://localhost:8080/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
    }, [])
  
    return (
        <>
            <Container border='1px' borderColor='purple' maxW='xl' centerContent>
                {posts?.length === 0 && <Text>No posts</Text>}
                {posts?.map(post => <Post key={post._id} title={post.title} body={post.body} postedAt={new Date(post.createdAt)}/>)}
            </Container>
            
           <NewPostModal isOpen={open} onClose={() => setOpen(false)} />
       </>
   );
}



    // function UserProfile() should go into a new component and
    // call it in the bottom-most return statement in this home file
    
    //function UserProfile() {
    //     const [post, setPost] = useState<{title: string; body: string; createdAt: Date}>();
    //     const [isLoading, setIsLoading] = useState(true); // should be true by default

    //     useEffect(() => {
    //         // fetch data here
    //         axios.get('http://localhost:8080/posts')
    //             .then((response) => {
    //                 // handle success
    //                 setPost(response.data);
    //                 setIsLoading(false);
    //             })
    //             .catch((error) => {
    //                 // handle error
    //                 console.log(error);
    //             })
    //     }, []);

    //     // return !isLoading ? (!isLoading && post.map((p) => <Post title={p.title} body={p.body} createdAt={p.createdAt}>)))
    //     // : <h1>Loading posts…</h1>
    // //}

    // return <div>
    //     <Container maxW= 'xl' centerContent>
    //         {post?.length === 0 && <Text>No posts</Text>}
    //         {post?.map(p => <Post key={p._id} title={p.title} body={p.body} postedAt={new Date(p.createdAt)}/>)}
    //     </Container>
    //     <Post title="Cappuh Delts" body="Anotha one" />
    //     <Comment content="I like pizza" postedAt="7:55pm on 2/16/22" />
    //     <NewPostModal />
    // </div>;
// }

export default Home

//postedAt={new Date()}/>
// postedAt={new Date()}/>