/* eslint-disable react/prop-types */
import { Heading, Card, CardHeader, CardBody, Box, Image,AspectRatio, LinkBox, LinkOverlay} from "@chakra-ui/react"

function extractYouTubeVideoId(url) {
    const pattern = /\/embed\/([a-zA-Z0-9_-]+)$/; // Regular expression pattern to match the video ID
    const match = url.match(pattern); // Use the pattern to extract the video ID from the URL
    if (match && match.length > 1) {
        return match[1]; // Return the captured video ID
    } else {
        return null; // Return null if the pattern doesn't match the URL
    }
}

export default function VideoCard({ video }) {
    return (
        <LinkBox as='article'>
            <Card minH={"300x"}>
                <CardHeader minH={"125px"}>
                    <LinkOverlay href={`/video/${video.id}`}>
                        <Box>
                            <Heading>{video.title}</Heading>
                        </Box>
                    </LinkOverlay>
                </CardHeader>
                <CardBody>
                    <AspectRatio maxW='400px' ratio={4 / 3}>
                        <Image src={`https://img.youtube.com/vi/${extractYouTubeVideoId(video.thumbnail)}/sddefault.jpg`} objectFit='cover' />
                    </AspectRatio>
                </CardBody>
                {/* <CardFooter>
                    <Text>{video.description}</Text>
                </CardFooter> */}
            </Card>
        </LinkBox>
    );
  }