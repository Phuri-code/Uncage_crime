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

export default function Category3() {
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
          <Tab label="Paul Joseph Fronczak" {...a11yProps(0)} />
          <Tab label="Janice Pockett" {...a11yProps(1)} />
          <Tab label="Angela Hammond" {...a11yProps(2)} />
          <Tab label="Allyson Dalton" {...a11yProps(3)} />
          <Tab label="Jacob Wetterling" {...a11yProps(4)} />
          <Tab label="Danny Goldman" {...a11yProps(5)} />
          <Tab label="Brittney Beers" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h3> Paul Joseph Fronczak (Solved!): Paul Joseph Fronczak was kidnapped as a day-old baby out of a Chicago hospital in 1964. However, this was a case that ended with good news: he was found two years later in a stroller and returned to his parents, according to CNN. At least, it seemed that way for more than 40 years. </h3> <br/>

Fronczak, who is now 56, took a DNA test in 2012 and urged his parents to do the same. The results showed Paul was not related to his parents at all. A DNA technician told him point-blank that there was “no remote way” he was their child, CNN reported. Fronczak was left wondering exactly who he is and the FBI, which initially handled the case, re-opened it.

But it wasn’t until April 2019 that the real Paul Fronczak, whose name was Kevin Baty, was discovered when Baty’s daughter submitted a DNA sample to a genealogy website. The DNA test results showed a link between Kevin Baty and Paul Fronczak’s parents, Chester and Dora Fronczak. Paul Fronczak reached out to Kevin Baty but reportedly has had little communication with him.

Before his death from cancer on April 25, 2020 (which was also his actual birth date), Kevin Baty reportedly spoke several times with his birth mother, Dora; his biological father Chester died in 2017. The kidnapper, a woman dressed as a nurse in 1964, remains unidentified but could be Lorraine Fountain, who raised Kevin Baty in Wexford County, Michigan, who died in 2004. Paul Fronczak wrote an autobiography about his mysterious upbringing, The Foundling, and lives in Nevada with his daughter.
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3> In July of 2018, the 45th anniversary of Janice Pockett’s disappearance, many people in her Tolland, Conn. town gathered together in her memory. </h3> <br/> Her older sister remembers the day that Janet went missing, as does her cousin and many others. According to Hartford’s Courant, it’s hard for people to forget that July day in 1973 when Janice, then seven, disappeared.

By all reports, she had been riding her bike and never came back. According to the Courant, her older sister recalled going out with her mom and calling her sister’s name “over and over.” Her bike was found less than a mile from her home, and a Connecticut police official commented that she must have been “snatched” on the way back. The Connecticut State Police initially investigated the case, which has been reopened repeatedly, and it remains the lead agency on the crime. Janice’s story has been featured on Discovery Network’s “Dark Minds” and a “Janice Pockett – Missing Since July 26, 1973” Facebook page contains related information.
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h3> Angela Hammond, 20, was four months pregnant when she disappeared from Clinton, Mo., in April 1991. </h3> <br/>  According to the website Unsolved, she was last said to be talking on a payphone to her boyfriend outside a grocery store about 11:45 p.m. The details indicate she told her boyfriend a pick-up truck pulled into the parking lot with a grimy-looking white man inside. Not much later, Angela’s boyfriend heard her scream, so he rushed to the store, reportedly passing a pick-up truck on his way. He heard someone yell “Robbie” out of the window, and he turned around to follow the truck, but his transmission died two miles later.

That was the last anyone saw the girl that went by ‘Angie,’ and the case has never been solved. The “Angela Hammond” Facebook page is devoted to her, and the Clinton Police Department is available to take any new details.
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h3> It’s been 22 years since Allyson Dalton, then just a baby, disappeared from her mother’s Strasburg, Va. apartment, but detectives are not giving up hope. </h3> <br/>In July of 2017, the Virginia State Police Department issued a press release along with a photo composite of the infant that went missing, saying it is still looking for leads in her case, according to 13 News Now.

So much gruesome information about the case is already known, just not what happened to the baby. Alyson’s mother, Sylena Jo Dalton, then 20, was found stabbed to death in the apartment that she shared with Allyson and her mother. In 2001, Sylena’s mother filed a wrongful death suit against Alyson’s former boyfriend, Daniel E. Pompeii, who she said was the child’s father, and responsible for kidnapping Allyson, according to the website LetsFindThem.

The Connecticut State Police say that Pompeii has not been “exonerated” as a suspect and continues to work with the Strasburg Police Department to seek clues and new information. The Forgotten Cases’ Facebook group has helped keep her and other missing persons’ stories alive and raise awareness about their disappearance.
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h3> In October 1989, Jacob Wetterling was abducted by a masked man at gunpoint in St. Joseph, Minnesota. </h3> <br/>According to CBS Minnesota, Jacob was riding his bike with his brother and a friend, and the other two boys were told to run or be shot. The masked gunman, who was identified 30 years later as Danny Heinrich, admitted in court in 2016 that he abducted, sexually assaulted, and killed Jacob Wetterling.

Fearing the police would hear his cries after being sexually assaulted, he shot Jacob Wetterling twice and buried his body on his farm. Danny Heinrich’s DNA was found on the sweatshirt of a 12-year old boy, Jared Scheierl, who was 12 when he was snatched and sexually assaulted nine months before Jacob Wetterling. Local resident and blogger Joy Baker worked with Jared Scheierl to investigate the connection between the two crimes and provide answers for the Wetterling family.

Jacob Wetterling’s abduction led Congress to pass legislation to create sex offender registries and the creation of the Zero Abuse Project, a 501(c)(3) organization dedicated to improving prevention, recognition, and response to child sexual abuse.
      </TabPanel>
      <TabPanel value={value} index={5}>
      <h3> The case of Danny Goldman, missing since 1966 out of Miami-Dade, Fla., was investigated by two agencies: the then-Dade County Sheriff’s Office and the FBI, according to the Miami Herald.</h3> <br/>

Danny was kidnapped from his home in March of 1966, the day before he turned 18. The kidnapper could not find the $10,000 in the home he demanded, so he abducted Danny instead, saying he wanted $25,000 that evening in ransom. The kidnapper never called, and Danny was never seen again.

The Miami-Dade Police Department reopened the case in 2012 when investigators went to interview Danny’s former ex-girlfriend. A high school classmate of Danny’s, also an attorney, launched the website SurfsideKidnapping.org to keep interest in the case active. That attorney’s implication? Danny is long gone, but conspiracy and cover-up are crucial elements of the crime.
      </TabPanel>
      <TabPanel value={value} index={6}>
     <h3> Britney Beers made the news again in 2012, but not in a way anyone would ever hope for. </h3> <br/>September 2012 marked 15 years since the then six-year-old went missing outside of her apartment complex in Sturgis, Mich., according to the Sturgis Journal. She was last seen sitting on a bench at about 8:45 p.m. outside of her family’s apartment complex, reports WSBT.com. Witnesses indicated that Brittney was talking to a man. A red or brown car was described as a vehicle of suspicion in the 1997 crime.

A detective with the Sturgis Police Department most recently told WSBT that the girl was probably no longer alive but that there was always “hope.” The case remained open as of 2012, with the Sturgis Police Department receiving and following up on more than 1,000 tips over the years.

In 2015, Daniel Furlong admitted to sexually assaulting, strangling, and dumping the body and bicycle of Jodi Parrack in 2007 in a cemetery in Constantine, Mich., where her mother found her. He was labeled as a person of interest in the Brittney Beers case after DNA from Parrack’s body and clothing matched the DNA swabbed from a 10-year old girl he abducted in White Pigeon who broke free after being tied up with extension cords at knifepoint.

As part of a plea deal for these crimes, in 2016, Daniel Furlong agreed to take a polygraph test about the Beers case, in which he said he did not kill Brittney Beers. The Sturgis police are not done questioning him, but he can’t be forced to take a second polygraph test. At 65 years old, Daniel Furlong was sentenced to 30 to 60 years in prison for second-degree murder charges.


      </TabPanel>
    </div>
  );
}
