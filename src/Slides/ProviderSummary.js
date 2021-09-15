import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import blankImg from "../images/blank.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
    display: "inline",
  },
}));

export default function ProviderSummary(props) {
  const classes = useStyles();
  useEffect(() => {
    props.setAppbarTitle({
      title: "",
      subtitle: "",
      icon: blankImg,
    });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <Typography variant="h4">Emory's Commitment:</Typography>
        <Typography variant="h1">100% clean energy by 2035.</Typography>
      </div>
      <br />
      <div className={classes.slideContainer}>
        <Grid container>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h4">Emory's Solar Portfolio:</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h1" className={classes.portfolioText}>
              5.5
            </Typography>
            <Typography variant="h3" className={classes.portfolioText}>
              MW
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Solar Capacity
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h1" className={classes.portfolioText}>
              15K
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Solar Panels
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h1" className={classes.portfolioText}>
              16
            </Typography>
            <br />
            <Typography variant="h4" className={classes.portfolioText}>
              Total Sites
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
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
