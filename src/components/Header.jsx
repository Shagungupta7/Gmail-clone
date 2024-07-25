
import { AppBar, Toolbar, styled,InputBase,Box } from '@mui/material';
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined,
    AccountCircleOutlined
} from '@mui/icons-material';
import { gmaillogo } from '../constant/constant'; 
import { ClassNames } from '@emotion/react';


const StyledAppBar = styled(AppBar)({
    background: '#f6f8fc',
    boxShadow: 'none',
    color: '#5c646c',
})

const Searchwrapper = styled(Box)({
    background: '#eaf1fb',
    marginLeft: 80,
    borderRadius: 25,
    minWidth: 660,
    maxWidth: 500,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    '& > div': {
        width: '100%',
        padding: '0 10px',
    },
    color: '#444444',
});

const Optionwrapper = styled(Box) ({
    width: '100%' ,
    display: 'flex',
    justifyContent: 'end',
    '& > svg' : {
        marginLeft: 20,
    },
    color: '#5c646c',
})

const Header = ({toggleDrawer}) => {
    return(
        <StyledAppBar position = "static">
            <Toolbar>
                <MenuIcon color = '#444444' onClick = {toggleDrawer}/>
                <img src={gmaillogo} alt="logo" style = {{ width: 110, marginLeft: 15 }}/>
                <Searchwrapper>
                    <Search color = "#5c646c" />
                    <InputBase 
                        placeholder='Search mail'
                    />
                    <Tune color = "#5c646c" />
                </Searchwrapper>
                <Optionwrapper>
                    <HelpOutlineOutlined color = "#5c646c" />
                    <SettingsOutlined color="#5c646c"/>
                    <AppsOutlined color="#5c646c"/>
                    <AccountCircleOutlined color='#5c646c' />
                </Optionwrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header; 