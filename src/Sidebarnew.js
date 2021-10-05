import { faCode, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import * as React from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const PersistentDrawerLeft = (props) => {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const arrayitem = [
    {
      text: "Roadmap",
      onClick: () => {
        history.push("/Roadmap");
      },
    },
    {
      text: "Backlog",
      onClick: () => {
        history.push("/Backlog");
      },
    },
    {
      text: "Board",
      onClick: () => {
        history.push("/Board");
      },
    },
    {
      text: "Code",
      onClick: () => {
        history.push("/Code");
      },
    },
    {
      text: "ProjectPages",
      onClick: () => {
        history.push("/ProjectPages");
      },
    },
    {
      text: "AddShortcuts",
      onClick: () => {
        history.push("/AddShortcuts");
      },
    },
    {
      text: "ProjectSettings",
      onClick: () => history.push("/ProjectSettings"),
    },
  ];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <div>
              <ChevronRightIcon />
            </div>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Jira Software
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div className="hello">
            <OpenInNewOffIcon />
            <div className="second">
              <li>newproject</li>
            </div>
          </div>
          <div className="right">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />

        <List>
          {arrayitem.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemIcon>
                  {index === 0 && <FormatAlignCenterIcon />}
                  {index === 1 && <FormatAlignRightIcon />}
                  {index === 2 && <CalendarViewWeekIcon />}
                  {index === 3 && <FontAwesomeIcon icon={faCode} />}
                  {index === 4 && <ListAltIcon />}
                  {index === 5 && <PostAddIcon />}
                  {index === 6 && <FontAwesomeIcon icon={faCog} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>Welcome..!</Typography>
      </Main>
    </Box>
  );
};

export default withRouter(PersistentDrawerLeft);
