import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
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
    width: 120, // Adjust based on your layout
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

interface OMNavFileInfoProps {
  assignedTo: string;
  orderInfo: {
    firmName: string;
    orderDate: string;
    lockboxNumber: string;
    batchReferenceNumber: string;
    noOfChecks: string;
  };
  summaryInfo: {
    calculatedGross: string;
    reportedNet: string;
    calculatedNet: string;
    netDifference: string;
    accountNo: string;
  };
}

const OMNavFileInfo: React.FC<OMNavFileInfoProps> = ({
  assignedTo,
  orderInfo,
  summaryInfo,
}) => {
  const classes = useStyles();
  const noInfo = "N/A";

  return (
    <div className={classes.fileDetailsWrap}>
      <Grid container className={classes.fileDetailsContainer}>
        <Grid item sm={12}>
          {/* Assigned To */}
          <div className={classes.detail}>
            <Typography
              variant="h6"
              className={classes.subtitle}
              color="textSecondary"
            >
              Assigned To:
            </Typography>
            <div className={classes.info}>
              <Typography variant="body2" color="textPrimary">
                {assignedTo || noInfo}
              </Typography>
            </div>
          </div>

          {/* Order Info */}
          <div className={classes.detail}>
            <Typography
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
              variant="h6"
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
  );
};

export default OMNavFileInfo;
