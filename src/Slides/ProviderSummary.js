import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
    display: "inline",
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "20vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "12vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "8vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "6vh",
    },
  },
}));

export default function ProviderSummary(props) {
  const classes = useStyles();
  const { info, orgData } = props;
  // console.log("orgData: ", orgData);

  return (
    <div>
      <div className={classes.spacer} />
      <div className={classes.slideContainer}>
        <Typography variant="h4">{orgData.orgName}'s Commitment:</Typography>
        <Typography variant="h1">100% clean energy by 2035.</Typography>
      </div>
      <br />
      <div className={classes.slideContainer}>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4">
              {orgData.orgName}'s Solar Portfolio:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h1" className={classes.portfolioText}>
              {orgData.totalPower / 1000}
            </Typography>
            <Typography variant="h3" className={classes.portfolioText}>
              kW
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Solar Capacity
            </Typography>
          </Grid>
          {/* <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h1" className={classes.portfolioText}>
              ~15K
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Solar Panels
            </Typography>
          </Grid> */}
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h1" className={classes.portfolioText}>
              {orgData.totalSites}
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Total Sites
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

/*


export default function ProviderSummary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

*/
