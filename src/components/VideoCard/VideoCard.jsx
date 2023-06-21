import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './main.scss'

const VideoCard = ({video}) => {
  // console.log(video.snippet.channelId);
  return (
    
      <Card sx={{width: '320px', boxShadow: "none", borderRadius: 0}}>
        <Link to={`/video/${video.id.videoId}`}>
          <CardMedia sx={{width: '360px', height: '190px'}} image={video?.snippet.thumbnails?.high?.url} />
        </Link>
        
        <CardContent sx={{background: '#111', color: '#fff', height: '200px', position: 'relative'}}>
          <Link to={`/video/${video.id.videoId}`}>
            <>
              <Typography my={'5px'} sx={{opacity: '0.4'}}>
                  {moment(video?.snippet?.publishedAt).fromNow()}
              </Typography>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                  {video?.snippet?.title.slice(0, 45)}
              </Typography>
              <Typography sx={{opacity: '0.6'}}>
              {video?.snippet?.description.slice(0, 50)}
              </Typography>
            </>
          </Link>
          <Link to={`/channel/${video.snippet.channelId}`}>
            <Stack
              direction={'row'}
              position={'absolute'}
              bottom={'10px'}
              alignItems={'center'}
              gap={'5px'}
            >
              <Avatar src={video?.snippet?.thumbnails?.high?.url} />
              <Typography variant="subtitle2" color={'gray'}>
                {video?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize: '12px', color: 'gray', mt: '12px', ml: '5px'}} />
              </Typography>
            </Stack>
          </Link>
        </CardContent>
      </Card>
   
  )
}

export default VideoCard
