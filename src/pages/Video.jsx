/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Heading,  SimpleGrid, Spinner, Box } from "@chakra-ui/react"
import useFetchData from '../hooks/useFetchData';
import VideoCard from "../components/VideoCard";
import ButtonToAddPage from "../components/ButtonToAddPage";
import VideoSearch from "../components/VideoSearch";

export default function Video() {
    const url = "videos";
    const { data, isLoading, error } = useFetchData(url)
    const [filteredVideos, setFilteredVideos] = useState(data);

    const handleSearch = (query) => {
        const filtered = data.videoList.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredVideos(filtered);
    };

    if (isLoading) {
        return <Spinner />;
    }
    
      if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
        <VideoSearch onSearch={handleSearch} />
        <Heading mb = { "28px" }textAlign={"center"}>Video List</Heading>
        <ButtonToAddPage data="video"/>
        <SimpleGrid p="10px" columns={4} spacing={3} minChildWidth={250}>
            {/* {console.log(videos.data)} */}
            
            {
                filteredVideos? ( filteredVideos?.map((video) => (
                    <Box key={video.id}>
                        <VideoCard video={video}/>
                    </Box>
                ))
                ) : data.videoList.map((video) => (
                    <Box key={video.id} min>
                        <VideoCard video={video}/>
                    </Box>
                ))

            }
        </SimpleGrid>
        </>
    )
}