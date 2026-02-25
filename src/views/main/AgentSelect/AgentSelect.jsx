'use client';
import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Typography,
    Dialog,
    DialogContent,
    Popover,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

const AgentSelect = ({ agents }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showFilterPopup, setShowFilterPopup] = useState(false);

    const [tempAgent, setTempAgent] = useState('Все агенты');
    const [appliedAgent, setAppliedAgent] = useState('Все агенты');
    const [isStepConfirm, setIsStepConfirm] = useState(false);

    const handleSelectAgent = (agent) => {
        setTempAgent(agent);
        setIsStepConfirm(true);
    };

    const handleApply = () => {
        setAppliedAgent(tempAgent);
        setIsOpen(false);
        setShowFilterPopup(false);
        setIsStepConfirm(false);
    };

    const handleReset = () => {
        setTempAgent('Все агенты');
        setAppliedAgent('Все агенты');
        setIsOpen(false);
        setShowFilterPopup(false);
        setIsStepConfirm(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowFilterPopup(false);
    };

    const isChanged = tempAgent !== appliedAgent;

    const FilterBody = (
        <Box sx={{ width: 343, maxWidth: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2.5,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'var(--font-family), sans-serif',
                        fontWeight: 500,
                        fontSize: 20,
                        letterSpacing: '-0.02em',
                        color: '#191919',
                    }}
                >
                    Фильтры
                </Typography>
                <IconButton
                    size="small"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            {!isStepConfirm ? (
                <Stack spacing={0}>
                    {agents.map((agent) => (
                        <Button
                            key={agent}
                            onClick={() => handleSelectAgent(agent)}
                            sx={{
                                justifyContent: 'space-between',
                                px: 0,
                                py: 1.75,
                                borderBottom: '1px solid #F0F2F5',
                                borderRadius: 0,
                                textTransform: 'none',
                                color: '#191919',
                                fontSize: 16,
                                fontFamily: 'var(--font-family), sans-serif',
                            }}
                        >
                            <Box component="span">{agent}</Box>
                            {tempAgent === agent && (
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#6E41E2',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {'<'}
                                </Box>
                            )}
                        </Button>
                    ))}
                </Stack>
            ) : (
                <Box
                    onClick={() => setIsStepConfirm(false)}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 2,
                        py: 1.5,
                        border: '1px solid #DCE9FE',
                        borderRadius: 2,
                        color: '#191919',
                        fontSize: 16,
                        fontFamily: 'var(--font-family), sans-serif',
                        mb: 3,
                        cursor: 'pointer',
                    }}
                >
                    <Box component="span">{tempAgent}</Box>
                    <Box component="span">⌵</Box>
                </Box>
            )}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                    mt: 2,
                }}
            >
                <Button
                    fullWidth
                    onClick={handleApply}
                    disabled={!isChanged}
                    sx={{
                        py: 1.75,
                        borderRadius: 1.5,
                        fontSize: 16,
                        fontWeight: 600,
                        textTransform: 'none',
                        color: '#fff',
                        background: isChanged
                            ? 'linear-gradient(180deg, #5573e9 0%, #5c10c2 100%)'
                            : '#a3a3a3',
                        '&.Mui-disabled': {
                            backgroundColor: '#a3a3a3',
                            color: '#fff',
                        },
                        '&:hover': {
                            background: isChanged
                                ? 'linear-gradient(180deg, #4c67d0 0%, #5110af 100%)'
                                : '#a3a3a3',
                        },
                    }}
                >
                    Применить фильтры
                </Button>

                {(appliedAgent !== 'Все агенты' || tempAgent !== 'Все агенты') && (
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleReset}
                        sx={{
                            py: 1.75,
                            borderRadius: 1.5,
                            fontSize: 16,
                            fontWeight: 600,
                            textTransform: 'none',
                            borderColor: '#5931cf',
                            color: '#6E41E2',
                        }}
                    >
                        Сбросить
                    </Button>
                )}
            </Box>
        </Box>
    );

    const handleDesktopButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen((prev) => !prev);
    };

    const handleMobileButtonClick = () => {
        setShowFilterPopup(true);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                fontFamily: 'var(--font-family), sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
        >
            {!isMobile && (
                <Button
                    variant="outlined"
                    onClick={handleDesktopButtonClick}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 1,
                        color: '#6E41E2',
                        fontWeight: 500,
                        fontSize: 16,
                        backgroundColor: '#fff',
                        borderRadius: 2,
                        px: 1.5,
                        py: 1,
                        minWidth: 200,
                        textTransform: 'none',
                        borderColor: '#F0F2F5',
                    }}
                >
                    {appliedAgent}
                </Button>
            )}

            {isMobile && (
                <IconButton
                    onClick={handleMobileButtonClick}
                    sx={{
                        width: 40,
                        height: 40,
                        background: 'linear-gradient(135deg, #6E41E2 0%, #5329BE 100%)',
                        borderRadius: 2.5,
                        color: '#fff',
                    }}
                >
                    <FilterListIcon />
                </IconButton>
            )}

            <Popover
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        mt: 1.5,
                        borderRadius: 2,
                        p: 2,
                        boxShadow: '0 4px 15px 2px rgba(0, 0, 0, 0.15)',
                        border: '1px solid #F0F2F5',
                    },
                }}
            >
                {FilterBody}
            </Popover>

            <Dialog
                open={showFilterPopup}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: 2.5,
                        p: 2,
                        width: '100%',
                        maxWidth: 343,
                        mx: 'auto',
                    },
                }}
            >
                <DialogContent sx={{ p: 0 }}>{FilterBody}</DialogContent>
            </Dialog>
        </Box>
    );
};

export default AgentSelect;