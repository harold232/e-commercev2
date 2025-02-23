import { Button, Grid, Typography, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Grid
                className='bg-black text-white text-center mt-10'
                container
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    py: 3
                }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant='h6'>Company</Typography>
                    <div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>About</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Blog</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Press</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Jobs</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Partners</Button></div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant='h6'>Solutions</Typography>
                    <div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Marketing</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Analytics</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Commerce</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Insights</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Support</Button></div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant='h6'>Documentation</Typography>
                    <div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Guides</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>API Status</Button></div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant='h6'>Legal</Typography>
                    <div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Claim</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Privacy</Button></div>
                        <div><Button className="pb-5" variant='h6' sx={{ textTransform: 'capitalize' }}>Terms</Button></div>
                    </div>
                </Grid>
                <Grid
                    className='pt-20'
                    item
                    xs={12}
                >
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by {' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>
                        {' '} from {' '}
                        <Link href="https://www.flaticon.com" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}

export default Footer;
