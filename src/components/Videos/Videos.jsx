import React from 'react'
import { Stack, Box } from '@mui/material';
import {ChannelCard, VideoCard} from '../';

const Videos = ({videos}) => {
  return (
    <Stack
      width={'100%'} 
      direction={'row'} 
      flexWrap={'wrap'} 
      justifyContent={'space-between'} 
      alignItems={'center'} 
      gap={2}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard video={video} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
