import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles, Theme } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { ChevronRightOutlined, ExpandMore } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: (props: any) => props.drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.grey[100],
    width: (props: any) => props.drawerWidth,
    top: (props: any) => (props.topMargin ? props.topMargin : 113),
    height: "calc(100% - 51px)",
    zIndex: 10,
  },
  list: {
    padding: 0,
    color: theme.palette.text.primary,
  },
  listCollapsed: {
    "& .MuiListItem-button": {
      justifyContent: "center",
    },
  },
  linkItem: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    textTransform: "uppercase",
    transition: ".3s all",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  collapseToggleIconBtn: {
    marginRight: theme.spacing(1),
    background: "transparent",
  },
}));

interface OMLeftNavProps {
  menuCollapsed: boolean;
  setMenuCollapse: (menuCollapsed: boolean) => void;
  topMargin?: number;
  children?: React.ReactNode;
}

const OMLeftNav: React.FC<OMLeftNavProps> = ({
  menuCollapsed,
  setMenuCollapse,
  topMargin,
  children,
}) => {
  const [drawerWidth, setDrawerWidth] = useState(menuCollapsed ? 72 : 311);
  const classes = useStyles({ drawerWidth, topMargin });

  useEffect(() => {
    setDrawerWidth(menuCollapsed ? 72 : 311);
  }, [menuCollapsed]);

  const handleMenuCollapse = () => {
    setMenuCollapse(!menuCollapsed);
  };

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        {/* Render children when menu is expanded */}
        {children && !menuCollapsed && <>{children}</>}

        {/* List of navigation items */}
        <List
          className={clsx(classes.list, {
            [classes.listCollapsed]: menuCollapsed,
          })}
        >
          <ListItem
            button
            className={classes.linkItem}
            onClick={() => {
              // Example handler for navigation
            }}
          >
            <ListItemIcon>
              {/* Replace with your navigation icon */}
              <ChevronRightOutlined />
            </ListItemIcon>
            <ListItemText primary="Navigation Item 1" />
          </ListItem>
          <ListItem
            button
            className={classes.linkItem}
            onClick={() => {
              // Example handler for navigation
            }}
          >
            <ListItemIcon>
              {/* Replace with your navigation icon */}
              <ChevronRightOutlined />
            </ListItemIcon>
            <ListItemText primary="Navigation Item 2" />
          </ListItem>
        </List>

        {/* Expand/Collapse button */}
        <div>
          <IconButton
            aria-label="Collapse Menu Toggle"
            className={classes.collapseToggleIconBtn}
            onClick={handleMenuCollapse}
          >
            {menuCollapsed ? <ChevronRightOutlined /> : <ExpandMore />}
          </IconButton>
        </div>
      </Drawer>
    </nav>
  );
};

export default OMLeftNav;
