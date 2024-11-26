// Filename: OrderInfoPanel.tsx

import React from "react";
import { Drawer, IconButton, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { OrderType, SummaryType } from "./types";
import { ExpandArrow, CollapseArrow } from "./utility"; // Import the icons

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props: any) => (props.isVisible ? 311 : 72),
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    backgroundColor: theme.palette.grey[100],
    width: (props: any) => (props.isVisible ? 311 : 72),
    top: 64, // Adjust according to your header height
    height: "calc(100% - 64px)",
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
  collapseToggleIconBtn: {
    marginRight: theme.spacing(1),
    background: "transparent",
  },
  fileDetailsWrap: {},
  fileDetailsContainer: {
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  detailLast: {
    marginBottom: 0,
  },
  subtitle: {
    width: 150,
    whiteSpace: "nowrap",
  },
  info: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginLeft: theme.spacing(2),
  },
}));

interface OrderInfoPanelProps {
  isVisible: boolean;
  onCollapse: () => void;
  onExpand: () => void;
  orderInfo: OrderType;
  summaryInfo: SummaryType;
}

const OrderInfoPanel: React.FC<OrderInfoPanelProps> = ({
  isVisible,
  onCollapse,
  onExpand,
  orderInfo,
  summaryInfo,
}) => {
  const classes = useStyles({ isVisible });

  const noInfo = "N/A";

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        {isVisible && (
          <div className={classes.fileDetailsWrap}>
            <Grid container className={classes.fileDetailsContainer}>
              <Grid item sm={12}>
                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Firm Name:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {orderInfo.firmName || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Order Date:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {orderInfo.orderDate || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Lockbox Number:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {orderInfo.lockboxNumber || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Batch/Ticket Reference Number:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {orderInfo.batchReferenceNumber || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    No. of Checks:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {orderInfo.noOfChecks || noInfo}
                    </Typography>
                  </div>
                </div>

                {/* Summary Info */}
                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Calculated Gross:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {summaryInfo.calculatedGross || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Reported Net:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {summaryInfo.reportedNet || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Calculated Net:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {summaryInfo.calculatedNet || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Net Difference:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {summaryInfo.netDifference || noInfo}
                    </Typography>
                  </div>
                </div>

                <div className={classes.detail}>
                  <Typography
                    variant="subtitle2"
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    Account No:
                  </Typography>
                  <div className={classes.info}>
                    <Typography variant="body2" color="textPrimary">
                      {summaryInfo.accountNo || noInfo}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
        <div>
          <IconButton
            aria-label="Collapse Menu Toggle"
            className={classes.collapseToggleIconBtn}
            onClick={isVisible ? onCollapse : onExpand}
          >
            {isVisible ? <CollapseArrow /> : <ExpandArrow />}
          </IconButton>
        </div>
      </Drawer>
    </nav>
  );
};

export default OrderInfoPanel;
