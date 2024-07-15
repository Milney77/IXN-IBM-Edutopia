import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "20px",
                },
            },
        },
    },
});

export default Theme;