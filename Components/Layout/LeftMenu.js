import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Category1 from './Category1'
import Category2 from './Category2';
import Category3 from './Category3';
import Category4 from './Category4';
import Category5 from './Category5';
import Category6 from './Category6';
import Category7 from './Category7';
import Category8 from './Category8';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  },
  tabs: {
    borderRight: `3px solid ${theme.palette.divider}`,
  },
}));

export default function LeftMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Unsolve" {...a11yProps(0)} />
            <Tab label="Solve" {...a11yProps(1)} />
            <Tab label="Kidnapping" {...a11yProps(2)} />
            <Tab label="Serial Killers" {...a11yProps(3)} />
            <Tab label="Hate Crimes" {...a11yProps(4)} />
            <Tab label="Homicide" {...a11yProps(5)} />
            <Tab label="Robbering" {...a11yProps(6)} />
            <Tab label="Sexual Harrasment" {...a11yProps(7)} />
          </Tabs>
        </Grid>
        <Grid item item xs={12} sm={8} md={9}>
          <TabPanel value={value} index={0}>
            <Category1/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Category2/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Category3/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Category4/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Category5/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Category6/>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Category7/>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Category8/>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
