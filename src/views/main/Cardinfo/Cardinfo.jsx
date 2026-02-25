import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const Cardinfo = ({ title, value, icon, subValue }) => {
    return (
        <Card
            elevation={1}
            sx={{
                borderRadius: 2,
                p: 2.5,
                width: 418,
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px 0 rgba(100, 100, 100, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minWidth: 300,
            }}
        >
            <CardContent
                sx={{
                    p: 0,
                    '&:last-child': { pb: 0 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: 'var(--font-family), sans-serif',
                                fontWeight: 600,
                                fontSize: 40,
                                lineHeight: '120%',
                                letterSpacing: '-0.02em',
                                color: '#191919',
                            }}
                        >
                            {value}
                        </Typography>
                        {subValue && (
                            <Typography
                                component="span"
                                sx={{
                                    ml: 0.5,
                                    width: 55,
                                    height: 32,
                                    fontFamily: 'var(--font-family), sans-serif',
                                    fontWeight: 600,
                                    fontSize: 20,
                                    lineHeight: '120%',
                                    letterSpacing: '-0.02em',
                                    color: '#191919',
                                }}
                            >
                                {subValue}
                            </Typography>
                        )}
                    </Box>
                    <Box
                        sx={{
                            borderRadius: 2,
                            width: 48,
                            height: 48,
                            backgroundColor: '#f5f7fb',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {icon}
                        </Box>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        mt: 2.5,
                        fontFamily: 'var(--font-family), sans-serif',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '120%',
                        color: '#343434',
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cardinfo;