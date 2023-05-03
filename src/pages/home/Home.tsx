import React from 'react'
import { getUsers } from '../../db/endpoints';
import { useQuery } from 'react-query';
import {Box, Button, CardMedia, Grid, Typography} from '@mui/material';

const Home = () => {
  const { data } = useQuery({ queryKey: "gt-users", queryFn: getUsers });
  return (
    <Grid container spacing={2}>
      {
        data && data?.data.map((user: any) => (
          <Grid 
            item key={user.id} 
            xs={12} sm={6} md={4} lg={3}
            sx={{ borderRadius: "8px", overflow: "hidden"}}
          >
            <Box
              component="div"
              sx={{
                border: "1px solid grey",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
                gap: "5px",
                pb: 2
              }}
            >
              <Typography variant="subtitle1" component="p">{user.login}</Typography>
              <Box>
                <CardMedia
                  component="img"
                  image={user.avatar_url}
                  sx={{ width: { xs: "400px", sm: "200px" } }}
                />
              </Box>
              <Button color="secondary" size="small" variant="contained">Ver más</Button>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Home