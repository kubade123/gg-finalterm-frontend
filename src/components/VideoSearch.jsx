import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// eslint-disable-next-line react/prop-types
function VideoSearch({ onSearch }) {
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <InputGroup pb={"20px"}>
      <Input
        placeholder="Search videos..."
        onChange={handleSearch}
      />
      <InputRightElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputRightElement>
    </InputGroup>
  );
}

export default VideoSearch;