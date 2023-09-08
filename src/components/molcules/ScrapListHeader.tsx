import { Box, Button, Typography } from '@mui/material';

import theme from '../../assets/styles/theme';

interface ScrapListHeaderProps {
    count: number,
    type: string,
}

function ScrapListHeader({ count, type }: ScrapListHeaderProps) {
    return (
        <Box
            sx={{
                p: '24px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                    }}
                >
                    <Typography
                        variant='h1'
                        color={theme.color.Gray_090}
                        sx={{
                            fontWeight: '600',
                            lineHeight: '160%',
                        }}
                    >
                        스크랩 {type}
                    </Typography>
                    <Typography
                        variant='h6'
                        color={theme.color.Gray_070}
                        sx={{
                            fontWeight: '600',
                            lineHeight: '150%',
                        }}
                    >
                        {count} 개
                    </Typography>
                </Box>
                <Button
                    color='primary'
                    variant='contained'
                >
                    + 스크랩 추가
                </Button>
            </Box>
        </Box>
    )
}

export default ScrapListHeader
