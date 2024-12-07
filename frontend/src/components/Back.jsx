import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Back.css';
import { useNavigate } from "react-router-dom";

const theme = createTheme()

const Back = ({link}) => {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveReturnBlock link={link} />
        </ThemeProvider>
    );
}

const ResponsiveReturnBlock = ({link}) => {
    const isComputer = useMediaQuery(theme => theme.breakpoints.up("lg"));
    const navigate = useNavigate();

    return (
        <div className="return" onClick={() => {navigate(link)}}>
            <ArrowBackIcon style={{
                fontSize: isComputer ? '40px' : '30px',
                marginRight: '20px'
            }} />
            <div style={{
                fontSize: isComputer ? '28px' : '21px'
            }}>
                Back
            </div>
        </div>
    );
}

export default Back;