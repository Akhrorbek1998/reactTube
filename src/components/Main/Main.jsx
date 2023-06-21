import { useState, useEffect } from 'react'
import { Stack, Box, Container, Typography } from '@mui/material'
import { Category, Videos } from '../'
import { ApiService } from '../../service/api.service'

import './main.scss'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);


  const selectedCategoryHandler = category => setSelectedCategory(category)

  useEffect(()=> {
    const getData = async ()=> {
      try {
        const request = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(request.data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData();

  }, [selectedCategory])

  console.log(videos);

  return (
    <Stack>
        <Category selectedCategory={selectedCategory} selectedCategoryHandler={selectedCategoryHandler} />
        <Box p={2} sx={{height: '90vh'}}>
          <Container maxWidth={'90%'}>
            <Typography variant={'h4'} fontWeight={'bold'} mb={2} >
              {selectedCategory} <span className='category-title'>videos</span>
            </Typography>
            <Videos videos={videos} />
          </Container>
        </Box>
    </Stack>
  )
}

export default Main
