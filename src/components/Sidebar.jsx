
import { Drawer} from "@mui/material";
import Sidebarcontent from "./Sidebarcontent";

const Sidebar = ({openDrawer}) => {

    return (
        <Drawer
        anchor='left'
        open = {openDrawer}
        hideBackdrop = 'true'
        ModalProps={{
            keepMounted: true,
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop: '64px',
                width: 250,
                background: '#f6f8fc',
                borderRight: 'none',
                height: 'calc(100vh-64px)'  
            }
        }}
        >
            <Sidebarcontent />
        </Drawer>
    )
}

export default Sidebar;