import { Heading, Box, AspectRatio, SimpleGrid, Flex, } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from '../axios';
import ProductCard from '../components/ProductCard'
import ButtonToAddPage from "../components/ButtonToAddPage";
import AddComment from "../components/AddComment";
import CommentList from "../components/CommentList";

export default function VideoDetail() {
    const { id } = useParams();
    const [videos, setVideos] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`videos/${id}`);
            setVideos(response.data);
            console.log(response);
        };
        fetchData();
        // console.log(videos);
        
    },[id])
    return (
        <div>
            <Heading mb = { "28px" }textAlign={"center"}>Video Detail</Heading>
            <ButtonToAddPage id= {id} data="product"/>

            <Flex p="10px" direction={['column', 'row']} spacing={4}>
                { videos &&
                <Box flex={['none', '3']} pb={"10px"}>
                    <AspectRatio alignContent={'center'} maxW='1080px' ratio={16/9}>
                        <iframe
                            title='Product Video'
                            src={videos.videoThumbnail}
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
                }
                <Box bgColor='green.100' flex={['none', '1']} overflowY="scroll" maxHeight="600px" ml={[0, 4]}>
                    <Heading as={"h6"} textAlign={"Center"}>Product List</Heading>
                    <SimpleGrid p="10px" columns={3} spacing={3} minChildWidth={150}>  
                        {
                            videos && videos?.productList.map((product) => (
                                <Box key={product.id} width="100%" minWidth="100px" >
                                    <ProductCard key={product.id} product={product}/>
                                </Box>
                            ))
                        }
                    </SimpleGrid>
                </Box>
            </Flex>
            <Box w="full" p={4}>
                <AddComment />
                <Box bgColor='gray.200'  border={"solid 1px"} verflowY="scroll" minHeight="600px" m={3}>
                    <CommentList />
                </Box>
            </Box>
            
        </div>
    )
}