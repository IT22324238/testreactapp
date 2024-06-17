import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

const UserForm = (props) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}> 
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                    component={'label'} 
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <TextField 
                    type='number'
                    id='id'
                    size='small'
                    name='id'
                    sx={{ width: '100%' }}
                    value={''}
                    onChange={e => {}}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                    component={'label'} 
                    htmlFor='name'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    Name
                </Typography>
                <TextField 
                    type='text'
                    id='name'
                    name='name'
                    size='small'
                    sx={{ width: '100%', }}
                    value={''}
                    onChange={e => {}}
                />
            </Grid>

            
                <Button
                    variant="contained"
                    sx={{
                        margin:'auto',
                        marginLeft:'20px',
                        marginTop:'25px', 
                        backgroundColor: '#00c6e6',
                        color: '#000000',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                        },
                    }}
                >
                    Submit
                </Button>
            
        </Grid>
    );
}

export default UserForm;
