import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Category2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Krystal Beslanowitch" {...a11yProps(0)} />
          <Tab label="Sherri Miller and Pam Jackson" {...a11yProps(1)} />
          <Tab label=" Pamela Shelley" {...a11yProps(2)} />
          <Tab label="Ranya Rison" {...a11yProps(3)} />
          <Tab label="Sara Lynn Wineski" {...a11yProps(4)} />
          <Tab label="Maria Ridulph" {...a11yProps(5)} />
          <Tab label="Patricia Beard" {...a11yProps(6)} />
          <Tab label="Anna Palmer" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h3> Cold Case Murder of Krystal Beslanowitch, 1995 : Solved through forensic technologies.</h3> <br/>
A determined cop who was the original investigator into the murder of Krystal Beslanowitch 18 years ago in Utah helped bring resolution to this case. As The Huffington Post reports, Sheriff Todd Bonner just couldn’t let the case go. Beslanowitch was 17 years old when she died from a crushing blow to the skull. A prostitute, her body was found in 1995 along the Provo River. Leads at the time only led to dead-ends, but investigators finally got somewhere in 2013, when new forensic technologies, taking a full day, were used to extract touch DNA from the granite rock that crushed her skull. In fact, a tool called a forensic vacuum allowed for the DNA extraction. The DNA matched to a Joseph Michael Simpson, who had been a resort bus driver in the area at the time. Simpson, now 46, was arrested in Florida in September of this year.
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3> The Disappearance of Sherri Miller and Pam Jackson, 1971 : Solved by a fisherman. </h3> <br/>
An alert fisherman may have helped solve this cold case, which has been unresolved since 1971. In that year, Sherri Miller and Pam Jackson, both 17, disappeared while driving on rural roads to a party at a gravel pit in a 1960 Studebaker Lark. In September of 2013, a fisherman near the state’s Brule Creek noticed a car submerged upside down in the water. NPR reports that the vehicle was removed from the creek the following day, and skeletal remains, thought to be of the two girls, were found inside. Indeed, as NPR reports, the creek was less than half a mile from the gravel pit that the girls were headed to and the license plate and a hubcap from the vehicle, although badly decomposed, matched the vehicle the girls were driving. Even though it looks like this 42-year-old cold case may be solved, it might never be known what happened to lead to the Studebaker ending up in the creek.


      </TabPanel>
      <TabPanel value={value} index={2}>
      <h3> Death of Pamela Shelley, 2001 : Solved through a guilty plea.</h3> <br/> 
Pamela Shelley died en route to a hospital in 2001 after she was found with a gunshot wound to the head in the Texas home that she shared with her boyfriend. Not long before, she had split up with her husband, and moved with her two children from Arkansas to Texas into the home of Ronnie Joe Hendrick, an old family friend. Investigators initially ruled her death a suicide, but the case was re-opened seven years later at the insistence of investigator Carl Bowen, who had been on patrol and responded to the initial incident, according to the Victoria Advocate. Bowen never felt quite right about the suicide ruling, and enough evidence was eventually gathered to indict Hendrick in October 2012 with a trial set for September 2013. A few days prior to the trial, a showing of “Cold Justice” featuring Shelley’s case showed it was not possible for her to shoot herself in the head from the angle done. A mistrial occurred, but Hendrick, instead, plead guilty to a charge of murder. He was sentenced to 22 years in prison. The outcome helps prove true what Shelley’s brother, Donald Curlee, had always suspected: “There was never a doubt in my mind that she didn’t do it,” he told the Victoria Advocate.


      </TabPanel>
      <TabPanel value={value} index={3}>
      <h3> Murder of Ranya Rison, 1993 : Solved by new testimony. </h3> <br/>
It had not been quite clear what happened to Rayna Rison when, at age 16, she disappeared in 1993, to be found dead a month later in an Indiana pond by a fisherman. The case was ruled a homicide and in 1993 aired on “America’s Most Wanted.” It remained unsolved until just this year when an arrest was made involving her former boyfriend, Jason Tibbs, now 38. In August, prosecutors charged Tibbs with allegedly strangling her to death following an argument about the two of them getting back together, reports the NW Times. It was not forensic evidence, but the July 2013 testimony of a former friend, Eric Freeman, who said he saw Tibbs strangle Rison and then assisted him in disposing of her body in the pond. The defense has questioned the credibility of Freeman’s statement, given that prosecutors offered him immunity. It’s not clear what the outcome of the criminal proceedings against Tibbs will be, but at least Rison’s family now has some idea of what might have happened when she disappeared that evening after work in 1993.
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h3>Murder of Sara Lynn Wineski, 2005 : Solved through DNA evidence.</h3> <br/>
Sadly enough, when the death of a homeless or transient person occurs, not as much attention might be given to solving the crime. This was not the case with transient Sara Lynn Wineski, who was found strangled and raped outside a then-Ronald McDonald House in St. Petersburg, Fla., in 2005. Screams were heard about 11 p.m. on May 21, 2005, reported 10-News, but it was not until the following afternoon that her body was found under a deck behind the house. DNA evidence was collected at the scene, but progress had never been made until this year when it was linked to Raymond Samuels, aged 31 as of this writing (November, 2013). He has been in prison since 2006 in Ohio for attempted murder and kidnapping and will be extradited to Florida. Investigators indicate that Samuels, also a transient, was in the area at the time of Wineski’s death. According to investigators, it was DNA that was imperative to solving this crime, and, as a result, Samuels now faces first-degree murder charges.
      </TabPanel>
      <TabPanel value={value} index={5}>
      <h3>The murder of Maria Ridulph, 1957 : Solved through a deathbed confession of a mother.</h3> <br/>
Fifty-five years after 7-year-old Maria Ridulph was taken from the streets of Sycamore, Ill., to be found choked and stabbed to death, a 72-year-old security guard, Jack McCullough, was arrested for the crime. However, it wasn’t forensic evidence that led police to re-investigate McCullough as a potential suspect, but the deathbed confession of his mother in 1994 who said she lied about his alibi, according to The Huffington Post. In 2008, McCullough’s half-sister passed on this information to the police. McCullough had been one of about 100 potential suspects, but seemed to have a rock-solid alibi at the time of the murder. His mother had backed up his whereabouts. However, with her admission about her alibi, police reinvestigated McCullough, who was sentenced to life in prison in 2012 for the crime.
      </TabPanel>
      <TabPanel value={value} index={6}>
     <h3> The murder of Patricia Beard, 1981 : Solved through DNA evidence.</h3> <br/>
The strangulation death of Patricia Beard in her studio apartment back in 1981 in Denver became the 100th rape or murder to be solved by Denver Cold Case Team in July 2013 of this year. Beard, 32, at the time was mentally disabled and had not been heard from by family or friends in several days. She was eventually found partially clothed and dead on her bed, according to The Denver Post. DNA evidence from a post-mortem crime scene kit was found in 2011 and was entered into a database, but it was not until this year that a match was found. That match resulted in charges brought against Hector Bencomo-Hinojos, 53, a Pennsylvania man. He denied ever knowing Beard, but DNA evidence indicates he had had sexual contact with Beard within the hours following her death. His wife painted him as a violent man. Bencomo-Hinojos now faces charges of first-degree murder.
      </TabPanel>
      <TabPanel value={value} index={7}>
      <h3> The murder of Anna Palmer, 1998 :Solved through DNA evidence.</h3> <br/>
It was DNA evidence that led to a conviction in the 1998 murder case of 10-year-old Anna Palmer who was attacked and killed outside of her own front door in Salt Lake City, according to KSL.com. The crime was heinous, and included multiple stab wounds to her body, but following the crime, investigators had no witnesses, little evidence, and no apparent suspects, the news station reports. However, in 2009, forensic analysts were called in to assist in the case, and they decided to examine the girl’s fingernails for DNA samples. Using visible and alternative light sources to look for DNA not belonging to the girl, they made a hit, and matched it to a man named Matthew Brock, who had lived a block away at the time of the her murder and was age 19 then. Brock was already in prison serving a 10-year sentence for a sex-related crime with a child, and he pled guilty in 2011 to an aggravated murder charge in the death of Anna Palmer and is now in prison for life.
      </TabPanel>
    </div>
  );
}
