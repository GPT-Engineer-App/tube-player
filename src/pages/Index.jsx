import { Box, Flex, Image, Text, VStack, Heading, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";

// Example data for video list
const videos = [
  {
    id: 1,
    title: "Nature Walk",
    thumbnail: "https://images.unsplash.com/photo-1594269488736-54c3cc230507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB3YWxrfGVufDB8fHx8MTcxNDUxNDU0MHww&ixlib=rb-4.0.3&q=80&w=1080",
    src: "https://www.example.com/video1.mp4",
  },
  {
    id: 2,
    title: "City Life",
    thumbnail: "https://images.unsplash.com/photo-1518242007602-8d2524b53ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlmZXxlbnwwfHx8fDE3MTQ1MTQ1NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    src: "https://www.example.com/video2.mp4",
  },
  {
    id: 3,
    title: "Ocean Waves",
    thumbnail: "https://images.unsplash.com/photo-1514747975201-4715db583da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTcxNDUxNDU0MXww&ixlib=rb-4.0.3&q=80&w=1080",
    src: "https://www.example.com/video3.mp4",
  },
];

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <Box p={5}>
      <Heading mb={4}>Video Tube</Heading>
      <Flex direction={{ base: "column", md: "row" }}>
        <AspectRatio ratio={16 / 9} flex="1" mb={{ base: 5, md: 0 }}>
          <iframe title="Video Player" src={currentVideo.src} allowFullScreen />
        </AspectRatio>
        <VStack spacing={4} align="stretch" ml={{ md: 5 }} maxWidth="sm">
          {videos.map((video) => (
            <Flex key={video.id} align="center" p={2} onClick={() => setCurrentVideo(video)} cursor="pointer">
              <Image src={video.thumbnail} boxSize="100px" mr={2} />
              <Text flex="1">{video.title}</Text>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
