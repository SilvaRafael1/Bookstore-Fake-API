import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./css/NavLinkStyle.css"


function NavBar() {
    return (
        <List component="nav">
            <ListItem components="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="h6"><NavLink to={"/books/"} className="nav-link">Home</NavLink></Typography>
                </ListItemText>
                <ListItemText inset>
                    <Typography color="inherit" variant="h6"><NavLink to={"/createBook/"} className="nav-link">Criar Livro</NavLink></Typography>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default NavBar;