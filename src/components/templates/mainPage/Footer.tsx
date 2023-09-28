import { Box, Typography, Link, Grid } from '@mui/material';
import theme from '@/assets/styles/theme';

const Footer = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            background: theme.color.Gray_020,
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Grid container spacing={1} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
            }}>
                <Grid item xs={12} sm={5}>
                    <Typography>(주) 다담다</Typography>
                    <Typography sx={{ fontSize: '0.625rem', }}>서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩 7층(06151)</Typography>
                    <Typography sx={{ fontSize: '0.625rem', }}>기업 또는 이용 문의: dadamda.corporation@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography sx={{ fontSize: '0.625rem', }}>
                        <Link href='/privacy' target="_blank" underline="none" style={{
                            textDecoration: 'none',
                            color: theme.color.text_gray_color,
                        }}>
                            개인 정보 처리 방침
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography sx={{ fontSize: '0.625rem', }}>COPYRIGHT 2023 dadamda Co. All RIGHTS RESERVED.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
