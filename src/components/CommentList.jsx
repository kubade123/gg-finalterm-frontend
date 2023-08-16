/* eslint-disable react/prop-types */
import { Spinner, Text, VStack, Box } from '@chakra-ui/react';
import useFetchData from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';

function CommentList() {
  const { id } = useParams();
  const url = `videos/${id}/comments`
  const { data, isLoading, error } = useFetchData(url)

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <VStack spacing={4} align="stretch">
      {data.commentList?.map((comment) => (
        <Box
          key={comment._id} // Assuming each comment has a unique "_id"
          p={3}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Text fontSize="sm" color="gray.600">
            <strong>{comment.username}</strong>
          </Text>
          <Text fontSize="sm" color="gray.600">
            {comment.comment}
          </Text>
          <Text fontSize="xs" color="gray.400">
            {new Date(comment.timestamp).toLocaleString()} {/* Assuming you have a "createdAt" timestamp in your comment */}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default CommentList;