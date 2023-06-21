import { Box, Container, Typography } from '@mui/material'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Videos} from '../'
import { ApiService } from '../../service/api.service'


function Search() {
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  console.log(videos);

  useEffect(()=> {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.data.items)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [id])

  return (
    <Box p={2} sx={{height: '90vh'}} >
      <Container maxWidth={'90%'}> 
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: 'crimson'}}>{id}</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Search
