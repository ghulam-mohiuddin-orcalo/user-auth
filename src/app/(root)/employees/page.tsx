'use client'
import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import { useAppSelector } from '@/redux/store/store'
import { useGetPostsQuery } from '@/redux/services/posts'

function AboutPage() {
  const { data, error, isLoading } = useGetPostsQuery({})
  const count = useAppSelector((state) => state.counter.value)

  return (
    <Box>
      <Typography variant="h6">{count}</Typography>
      {isLoading && <Typography>Loading...</Typography>}
      <Grid container spacing={2}>
        {data && (
          data?.map((post) => (
            <Grid key={post._id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{post.faqQuestion}</Typography>
                  <Typography variant="body2">{post.faqCategory.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default AboutPage