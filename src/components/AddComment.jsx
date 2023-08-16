/* eslint-disable react/prop-types */
import { Input, Button, VStack } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "../axios";

function AddComment() {
  const { id } = useParams();
  const initialState = {
    username:'',
    comment:''
  };
  const { values, handleChange, resetForm } = useForm(initialState);

  const addComment = (e) => {
    e.preventDefault();

    axios
      .post(`/videos/${id}/comments`, values)
      .then(() => {
        resetForm();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <VStack align="stretch" spacing={4}>
      <Input
        type="text"
        placeholder="Add a username..."
        onChange={handleChange}
        name="username"
        value={values.username}
      />
      <Input
        type="text"
        placeholder="Add a comment..."
        onChange={handleChange}
        name="comment"
        value={values.comment}
      />
      <Button colorScheme="teal" onClick={addComment}>
        Add Comment
      </Button>
    </VStack>
  );
}

export default AddComment;
