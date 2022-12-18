import {Box,Text,Button, Heading} from '@chakra-ui/react'
import {ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'

const Pagination=({page,handleNext,handlePrev})=>{
    return (
        <Box  gap='4' m='auto' display='flex'>
            <Button disabled={page<=1} as='h4' size='md' onClick={handlePrev}>
               <ChevronLeftIcon/> Prev</Button>
            <Button>{page}</Button>
            <Button  as='h4' size='md' onClick={handleNext} >Next  <ChevronRightIcon/></Button>
        </Box>
    )
}

export {Pagination}