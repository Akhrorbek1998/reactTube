import { Box, Container } from '@mui/material';
import { Stack } from '@mui/system';
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Videos } from '..';
import { ApiService } from '../../service/api.service';
import ChannelCard from '../ChannelCard/ChannelCard';

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  useEffect(()=> {
    const getData = async ()=> {
      try {
        const requestChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        console.log(requestChannelDetail);
        setChannelDetail(requestChannelDetail.data.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        // console.log(dataVideo.data.items)
        setVideos(dataVideo.data.items)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  return (
    <Box minHeight={'95vh'} mt={'1vh'}>
      <Box>
        <Box 
          width={'100%'} 
          height={'300px'} 
          zIndex={10} 
          sx={{backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`, 
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} 
        />
        <ChannelCard video={channelDetail} />
      </Box>
      <Stack sx={{padding: '25px'}}>
        <Videos videos={videos} />
      </Stack>
    </Box>
  )
}

export default Channel
