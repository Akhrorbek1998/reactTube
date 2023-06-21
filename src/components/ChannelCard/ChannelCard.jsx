import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ video }) => {
  // console.log(video)
  return (
    <Box 
      sx={{
        boxShadow: "none",
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '356px',
        height: '326px',
        margin: 'auto',
        marginTop: '-100px'
      }}
    >
      <Link to={`/channel/${video?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <CardMedia
            image={video?.snippet?.thumbnails?.default?.url}
            alt={video?.snippet?.title}
            sx={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              mb: 2,
              border: '1px solid #e3e3e3'
            }}
          />
          <Typography variant={'h6'}>
            {video?.snippet?.title}{' '}
            <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: '5px'}} />
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray'}} >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
