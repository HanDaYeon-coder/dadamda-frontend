import styled from 'styled-components';
import { Box } from '@mui/material';

import theme from '../../assets/styles/theme';
import { googleLoginURL } from '../../secret';
import googleLogo from '../../assets/icons/btn_google_light_normal_ios.svg';

import ColumnContainer from '../atoms/ColumnContainer';
import LoginButton from '../atoms/LoginButton';

function LoginModal() {
    const oAuthHandler = (): void => {
        window.location.href = googleLoginURL;
    };

    return (
        <Box>
            <TextContainer>
                <DefaultTypography>다담다 서비스를 사용하기 위해</DefaultTypography>
                <DefaultTypography>로그인해주세요.</DefaultTypography>
            </TextContainer>
            <ButtonContainer>
                <ColumnContainer style={{ width: '100%', gap: "10px" }}>
                    <LoginButton
                        text={'구글로 시작하기'}
                        iconSource={googleLogo}
                        style={{ color: theme.color.icon_color, backgroundColor: 'white' }}
                        onClick={oAuthHandler}
                    />
                </ColumnContainer>
            </ButtonContainer>
        </Box>
    );
}

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: center;
    padding-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`

const DefaultTypography = styled.span`
    font-size: 14px;
`

const EmpasizedTypography = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export default LoginModal;
