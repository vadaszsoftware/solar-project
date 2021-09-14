import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
}));

export default function ProviderSummary(props) {
  const classes = useStyles();
  props.setAppbarTitle("");

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
            <Typography variant="h2" display="inline">
              5.5
            </Typography>
            <Typography variant="h4" display="inline">
              MW
            </Typography>
            <Typography variant="h4">Solar Capacity</Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h2">15K</Typography>
            <Typography variant="h4">Solar Panels</Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h2">16</Typography>
            <Typography variant="h4">Total Sites</Typography>
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
