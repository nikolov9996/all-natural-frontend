import { Grid } from "@mui/material"
import { MainGridBox } from "./Layout.styles"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <MainGridBox container flexDirection='column'  >
            <Grid item sx={{ height: 80, backgroundColor: 'chartreuse' }}> this will be navBar</Grid>
            {children}
        </MainGridBox>
    )
}

export default Layout