import { CodeOff, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Button,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import React, { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor:"red"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  // color:"black",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  // padding:"0 10px",
  // borderRadius:theme.shape.borderRadius
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  // padding:"0 10px",
  // borderRadius:theme.shape.borderRadius
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar sx={{backgroundColor:"purple"}}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          RUDR CODES
        </Typography>
        <CodeOff sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Button variant="contained" color="secondary">Hello</Button> */}
        <Search>
          <InputBase placeholder="search.." sx={{ width: "100%" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setopen(true)}
            // we have passed the event in the onClick and onClose functions but haven't used them ,if we'll not pass them the event it will still work
          />
        </Icons>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Rudransh</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
