import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CodeIcon from "@mui/icons-material/Code";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Roadmap",
          "Backlog",
          "Board",
          "Code",
          "Project Pages",
          "Add Shortcuts",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {(() => {
                switch (text) {
                  case "Roadmap":
                    return <FormatAlignCenterIcon />;
                  case "Backlog":
                    return <FormatAlignRightIcon />;
                  case "Board":
                    return <ViewColumnIcon />;
                  case "Code":
                    return <CodeIcon />;
                  case "Project Pages":
                    return <ContentPasteIcon />;
                  case "Add Shortcuts":
                    return <PostAddIcon />;
                }
              })()}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Project Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="side-bar">
      <div className="pages">
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={true}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
}
