import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";

import "./main.scss"
import { Videos } from "..";

const VideoDetail = ({video}) => {
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  const [reletedVideo, setReletedVideo] = useState([])


  useEffect(()=> {
    const getData = async ()=> {
      try {
        const request = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)

        const reletedRequest = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        
        setVideoDetail(request.data.items[0])
        setReletedVideo(reletedRequest.data.items);
      } catch (error) {
        console.log(error);        
      }
    };
    getData()
  }, [id]);

  return (
    <Box minHeight={'90vh'} mb={10} p={5}>
      {videoDetail && 
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box width={'72%'}>

          <ReactPlayer 
            className="video-player" 
            url={`https://www.youtube.com/watch?v=${id}`}
            controls  
          />

          <>
            <Typography variant="h5" fontWeight='bold' pt={2}>
              {videoDetail.snippet.title}
            </Typography>

            <Stack direction={'row'} justifyContent={"space-between"} py={1} >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}> 
                <Stack direction={'row'} alignItems={'center'} gap={'5px'} marginTop={'5px'} >
                  <Avatar
                    src={videoDetail.snippet.thumbnails.default.url}
                    alt={videoDetail.snippet.channelTitle}
                  />
                  <Typography variant="subtitle2" color='gray'>
                    {videoDetail.snippet.channelTitle}
                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                  </Typography>
                </Stack>
              </Link>

              <Stack direction={'row'} gap={'20px'} alignItems='center' py={1} >
                <Stack sx={{opacity: '0.7'}} direction={'row'} gap={'3px'} alignItems='center' >
                  <Visibility />
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} view
                </Stack>
                <Stack sx={{opacity: '0.7'}} direction={'row'} gap={'3px'} alignItems='center' >
                  <FavoriteOutlined />
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                </Stack>
                <Stack sx={{opacity: '0.7'}} direction={'row'} gap={'3px'} alignItems='center' >
                  <MarkChatRead />
                  {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comment
                </Stack>
              </Stack>

            </Stack>

            <Stack>
              <Typography variant="subtitle" sx={{opacity:' 0.7'}}>
                {videoDetail.snippet.description.slice(0, 500)}
              </Typography>
            </Stack>
          </>


          {videoDetail && videoDetail.snippet.tags.map((item, index) => (
            <Chip 
              className="chip-btn"
              label={item}
              key={index}          
              sx={{marginTop: '10px', cursor: 'pointer', background: '#fff'}}    
              deleteIcon={<Tag />}
              onDelete={()=> {}}
              variant='outlined'
            />
          ))}

        </Box>
        <Box className="suggested-block" width={'25%'}>x
          <Videos videos={reletedVideo} />
        </Box>
      </Box>}
    </Box>
  )
}

export default VideoDetail
