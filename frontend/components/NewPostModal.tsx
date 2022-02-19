import { FC, FormEvent, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Text, Button, Input, Textarea, VStack, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import axios from "axios";
import { useDisclosure } from '@chakra-ui/react'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal: FC<Props> = () => {
  // TODO: Fill out this handleSubmit function!
  function handleSubmit(e: any) {
    e.preventDefault(); // this line must be called 
    //console.log(email)
    axios.post('http://localhost:8080/posts', {
      title: e.target.title.value,
      body: e.target.body.value
    })
      .then((response) => {
        // handle success...
        location.reload()
      })
      .catch((error) => {
        // handle error...
        console.log(error);
      })
  }

  // const [title1, setTitle1] = useState("")

  // const handleChange1 = (event: any) => {
  //   setTitle1(event.target.value);
  // }

  // const [body1, setBody1] = useState("")

  // const handleChange2 = (event: any) => {
  //   setBody1(event.target.value);
  // }

  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO: Implemnt a NewPostModal!
  return <div>

    <Button colorScheme='blue' onClick={onOpen}>New Post</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Share with your friends!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel >Give your post a title!</FormLabel>
              <Input name="title"/>
              <Input name="body"/>
              <FormHelperText>Caption your post!</FormHelperText>
            </FormControl>

            <Button colorScheme='green' type="submit">Submit Post</Button>
          </form>

        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
            </Button>
        

        </ModalFooter>
      </ModalContent>
    </Modal>

  </div>




}

export default NewPostModal;
