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

export default function ScrollableTabsButtonAuto() {
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
          <Tab label="JonBenet Ramsey" {...a11yProps(0)} />
          <Tab label="Rogers Park" {...a11yProps(1)} />
          <Tab label="Jack the Ripper" {...a11yProps(2)} />
          <Tab label="Rachel Mellon" {...a11yProps(3)} />
          <Tab label="NASA astronaut's" {...a11yProps(4)} />
          <Tab label="Semaj Crosby " {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h3>Who killed JonBenet Ramsey?

More than 24 years later, authorities are still trying to answer that question. </h3><br/>
      JonBenét's parents initially thought she had been kidnapped during the night. In a 911 call just before 6 a.m., her mother Patsy Ramsey was inconsolable as she told the dispatcher that her daughter was missing and that she'd found a ransom note at the bottom of her stairs.

JonBenet Ramsey's half-brother recalls day of the murder: 'This case can be solved'

The three-page long note said in part that if JonBenét's parents called the authorities, she would die, and asked for $118,000. It also said that JonBenét's parents would receive a call from the supposed kidnapper "tomorrow" between 8 a.m. and 10 a.m.

Police arrived shortly after the 911 call and began investigating the scene for clues about the kidnapper.

Forensic psychiatrist who consulted on JonBenet Ramsey case killed


John Ramsey later found JonBenét in the basement, a part of the home that police had neglected to search.

JonBenét's cause of death was determined to be strangulation with a makeshift garrote, a weapon that, in this case, involved a string wrapped around a piece of one of Patsy Ramsey's paintbrushes. The child had also suffered an 8-inch skull fracture, shocks from a stun gun and sexual abuse with a broken piece from the paintbrush used in the garrote, according to Brad Garrett, a former FBI agent and ABC News contributor who wasn't involved in JonBenét's case.

A new episode of 20/20 will provide new insight into the murder and showcases the exclusive network premiere of the video diaries of legendary detective Lou Smit, who was brought out of retirement to investigate the murder of the child beauty queen.

Smit then dedicated his life to proving the Ramsey family's innocence.
On his deathbed he requested his children and grandchildren keep his search for the killer alive.


In Smit's video diaries he reveals his theories about what happened the night JonBenet died and his belief that DNA will ultimately expose the killer.

Along with reporting by 20/20 co-Anchor Amy Robach, the two-hour program includes interviews with Lexi Marra and Jessa Van Der Woerd, Smit's granddaughters and hosts of the podcast The Victim's Shoes on JonBenet's death.

They open up to 20/20 about the list of potential suspects he left behind, his confidence that one of the names on the list is JonBenet's killer and how they've made it their family's mission to carry on their grandfather's legacy by trying to solve the case.

20/20 also features the first TV interview with John Andrew Ramsey, JonBenet's half-brother and archival interviews with the Ramsey family, detectives and more.
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3>CHICAGO (WLS) -- Two years after two targeted shootings that killed two men in Rogers Park, the killer has still not been caught.</h3> <br/>

The same masked man in suspected in the murders of Douglass Watts and Eliyahu Moscowitz.

<h4>RELATED: Masked gunman randomly targeting victims in Rogers Park, police say; 2 killed in 2 days</h4>

Watts was walking his dogs for what would be the last time the morning of Sept. 30, 2018. The 73-year-old became the first man killed, apparently at random, by the masked suspect.

The same suspect murdered Eliyahu Moscowitz as he walked the path in Loyola Park just after 10 p.m. on October 1, 2018.

<h4>RELATED: Rogers Park killer still at large 1 year after murders. </h4>

In both cases, the killer approached from behind and shot them in the head. Moscowitz was playing Pokemon Go at the time.

Police believe the killer was captured on surveillance video just moments after the first murder. His only identifying feature was a distinctive limp. He remains at large.

<h4>RELATED: Surveillance video released of masked suspect in Rogers Park shootings. </h4>
"You have two innocent men that were murdered," said community activist Raul Montes. "We need resources allocated again, to try to open this case. Because people haven't heard anything. People are asking where is this case going, what are the leads, it's like gone. It's like another cold case."

Montes added another $5,000 to a reward for information that now stands at $155,000. And yet, the trail appears to have gone cold, a disquieting fact for those who live and work in Rogers Park, and regularly attends the CAPS meetings.

"We get pretty much no updates because they say it's an ongoing investigation," said Bill Morton, Rogers Park Chamber of Commerce. "This is a citywide issue, but this one is our issue. And we don't know if he's still here, if he's gone. We have no information about what's going on."

Watts' husband said, "He and I were together for 15 years. I still can't believe it happened. It's been very challenging and frustrating, not knowing anything more than the day that this happened. I don't know that his will ever be resolved."

The weapon used in the murders was linked to two more crimes in the months that followed, but police have said the gun may have changed hands. The person who pulled the trigger was never found in those cases, either.

<h4>FURTHER COVERAGE:
Shooting of 73-year-old man walking dogs in Rogers Park may have been botched robbery attempt, police say
Rogers Park families celebrate Halloween, refuse to live in fear; killer still at large
Menorah lit in Rogers Park to honor shooting victim, masked killer still at large. </h4>
      </TabPanel>
      <TabPanel value={value} index={2}>
     <h3> Jack the Ripper was an unidentified serial killer active in the largely impoverished areas in and around the Whitechapel district of London in 1888. In both the criminal case files and contemporary journalistic accounts, the killer was called the Whitechapel Murderer and Leather Apron.</h3> <br/>

Attacks ascribed to Jack the Ripper typically involved female prostitutes who lived and worked in the slums of the East End of London. Their throats were cut prior to abdominal mutilations. The removal of internal organs from at least three of the victims led to proposals that their killer had some anatomical or surgical knowledge. Rumours that the murders were connected intensified in September and October 1888, and numerous letters were received by media outlets and Scotland Yard from individuals purporting to be the murderer. The name "Jack the Ripper" originated in a letter written by an individual claiming to be the murderer that was disseminated in the media. The letter is widely believed to have been a hoax and may have been written by journalists in an attempt to heighten interest in the story and increase their newspapers' circulation. The "From Hell" letter received by George Lusk of the Whitechapel Vigilance Committee came with half of a preserved human kidney, purportedly taken from one of the victims. The public came increasingly to believe in a single serial killer known as "Jack the Ripper", mainly because of both the extraordinarily brutal nature of the murders and media coverage of the crimes.

Extensive newspaper coverage bestowed widespread and enduring international notoriety on the Ripper, and the legend solidified. A police investigation into a series of eleven brutal murders committed in Whitechapel and Spitalfields between 1888 and 1891 was unable to connect all the killings conclusively to the murders of 1888. Five victims—Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes, and Mary Jane Kelly—are known as the "canonical five" and their murders between 31 August and 9 November 1888 are often considered the most likely to be linked. The murders were never solved, and the legends surrounding these crimes became a combination of historical research, folklore, and pseudohistory, capturing public imagination to the present day.
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h3>Rachel Mellon age progression image released 25 years after disappearance from Bolingbrook</h3> <br/>
      BOLINGBROOK, Ill. (WLS) -- The National Center for Missing & Exploited Children has released an age progression picture of what Rachel Mellon may look like now 25 years after her disappearance from Bolingbrook.

Mellon was 13 years old when she disappeared from her home on January 31,1996. <br/>
She was last seen wearing yellow sweatpants, a pink top, red house-slippers and was wrapped in a blue blanket.

RELATED: Rachel Mellon's disappearance from Bolingbrook home remains unsolved 25 years later

The age progression image created by the National Center for Missing & Exploited Children shows what she might look like now at age 38.

Mellon's father, Jeff Skemp, recently spoke with the I-Team about her disappearance. He said he would like to see justice for his daughter in the form of an arrest and conviction for Rachel's abductor and likely killer. He said his daughter lives only in his heart now.

"I know she's in a better place," said Skemp. "And she's not suffering." <br/>
BOLINGBROOK, Ill. (WLS) -- Twenty-five years ago this Sunday, a Bolingbrook teenager vanished without a trace.

No one has ever been charged in the disappearance of Rachel Mellon - and she's never been found.

As that sad anniversary approaches, Rachel's father talked to the I-Team about one of Chicago's most inexplicable crime mysteries and how it began on a bitter cold day, Jan. 31, 1996.

Jeff Skemp said he would like to see justice for his daughter in the form of an arrest and conviction for Rachel's abductor and likely killer. He said his daughter lives only in his heart now.

"I know she's in a better place," said Skemp. "And she's not suffering."

Rachel Mellon was a popular, smart seventh grader. She was last seen alive when she stayed home sick from school in her family's Bolingbrook home.

Her stepfather Vincent Mellon was the only other person there that day.

"Whoever did this, and I have my suspicions about what happened, did a really good job of covering up," Skemp said. "And that's the problem."

Mellon told police he left only to take their dog for a walk and that hours later he realized Rachel was gone. From the start police considered him their prime suspect, especially after he flunked key parts of a lie detector test.

"I didn't really look around the neighborhood as far as thinking you know something might be suspicious," Mellon said in 1996 interview with ABC-7. "So, I didn't know what to say other than I didn't notice anything out of the ordinary at that point."

Skemp said he can't criticize police, but that they missed a chance to find her body.

"I think that if the police searched, their garage.. the night that they first got called there, especially knowing how many times they've been called to that house ... If they searched that garage and open up the trunk of that car that didn't run ... I bet they find her, right then and there," he said.

The I-Team spoke Thursday with retired Des Plaines police chief Bill Kushner, who solved several cold cases in his long career.

"Sooner or later, time and guilt catch up with people. Maybe it's a family member that knew something and decided not to tell because they were trying to protect someone," Kushner said. "Maybe it's the individual who's responsible for the disappearance themselves finally realizes that they're getting down near the end of the road and they want to make peace, somewhere there's a break."

Vince Mellon and Rachel's mother Amy moved to Tennessee years ago. The phone numbers listed for the couple were either disconnected or there was no answer.

Bolingbrook police said in a written statement Thursday the case is still "active" and evidence preserved, awaiting possible scientific advancements. Even though public attention might help their investigation, Bolingbrook police would not do a television interview, explaining they have "no new information" to provide.

Skemp said if his daughter were around today, amid the pandemic, she would be "on the frontlines fighting against racial injustice, social injustice, police corruption...doing everything within her power to help those of us who are struggling and suffering."

"That makes me happy," he said.


      </TabPanel>
      <TabPanel value={value} index={4}>
     <h3> NASA astronaut's estranged spouse accused of filing false claim of crime in space. </h3> <br/>
     HOUSTON, Texas -- The estranged wife of a NASA astronaut has been accused of falsely claiming her spouse accessed her bank account from space.

Summer Worden is accused of allegedly filing the false complaint against astronaut Anne McClain twice--first with the FTC in March 2019 and later in July 2019 during an interview with NASA's Inspector General.

Worden claimed in Aug. 2019 McClain illegally accessed her financial records while aboard the International Space Station in an effort to gain custody of Worden's young son, Briggs.

Worden brought an FTC complaint against McClain for identity theft, potentially the first criminal allegation from space. She alleged McClain used a space station computer to access her bank account on Earth without her permission.
Worden's parents then filed a complaint about the issue with NASA.

At the time, McClain's lawyer said she was only monitoring the account to ensure the boy's well being.

But, the Wordens alleged McClain put strenuous demands on their family, including that she be able to legally adopt Briggs. Worden said she told McClain, "no," which she claimed McClain did not respect.

Worden's mother, Beth, had said, "It seems like Anne (McClain) controls our life. We have to be home at 7 o'clock, three nights a week, so she can FaceTime with him (Briggs). Well that's the time that we're eating dinner, just getting home from soccer practice."

While in space, McClain tried to get a gag order to seal the court fight but was denied.

McClain later tweeted a statement, saying:

<h4> "There's unequivocally no truth to these claims. We've been going through a painful, personal separation that's now unfortunately in the media. I appreciate the outpouring of support and will reserve comment until after the investigation. I have total confidence in the IG process."
According to the indictment, Worden maintained multiple accounts at her bank. She allegedly shared access to her online accounts with McClain until at least Jan. 31, 2019.

Worden claimed she had opened a new account on Sept. 2018 and reset her login information in order to prevent McClain from accessing them. However, the indictment alleges she actually opened the account in April 2018 and didn't change her login information until Jan. 2019.

Worden is expected to make her initial appearance in court on April 13. If convicted, she faces up to five years in prison for each count and a possible $250,000 maximum fine.</h4>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h3>Waiting for Justice: New details in the Semaj Crosby murder case. </h3><br/>
      CHICAGO (WLS) -- The I-Team goes inside the investigation of an unsolved tragedy. It has been two years and there is still no justice for Semaj Crosby who was found dead inside her south suburban home in the early hours of April 27, 2017. Will County Sheriff's detectives are pleading with the public to come forward with information.

Law enforcement describe it as an unthinkable crime. Seventeen-month-old Semaj was reported missing and then was discovered under the family's couch. Investigators said she was purposely placed there and they want to know by whom. Police said there are still five people of interest in the case, one or more who are responsible for Semaj's murder.

According to Dan Jungles, Will County Sheriff Deputy Chief of Investigations, the people of interest are Sheri Gordon, Semaj's mother; Darlene Crosby, Semaj's paternal grandmother; Lakerisha Crosby, Semaj's aunt; Tamika Sims, who is a family friend; and a minor who has not been named.
Neil Patel, attorney for Sheri Gordon, said she has cooperated with police and wants justice in the case. Patel said she did not do anything wrong and is a victim along with her daughter. Patel was in the room when Semaj's body was found under the couch.

"It was a very difficult thing to see," Patel said.
Deputy Chief Jungles has supervised the case since the beginning. He said there is no doubt in his mind that one of the five individuals at Semaj's house is responsible for what happened to her.

"I believe that there are other individuals out of the five that know exactly what happened," he said.
amika Sims said she has cooperated extensively with police and was asked as recently as a few months ago to help with the investigation. Sims told the I-Team she distanced herself from Darlene and Lakerisha Crosby when she said their stories started to change. She said she had nothing to do with the murder or the cover-up, and she wants her name cleared.

"I have nothing to hide," said Sims.

There is still a lot of finger pointing and rumors surrounding the case, according to police. Deputy Chief Jungles said these are the facts: Semaj's cause of death was asphyxia and her toxicology was clear.
The fire that destroyed the family home a week and a half after Semaj's death was ruled an arson by the state fire marshal. Investigators said any additional evidence still in the home would have been destroyed.

The Will County Sheriff's detectives working on the case will keep Semaj's picture on their desks until the case is solved. Deputy Chief Jungles said his goal is to hold somebody accountable for the murder of this child.

"We have a feeling as to what happened but you know whether or not we can prove that in court is another story. I would like to think someone will come forward because this is an innocent child. No child deserves that," he said.

Documents from DCFS detail 11 different child protection investigations involving Semaj's family between 2015 and 2017, when the toddler was murdered.

<h3>RELATED: Two child deaths two years apart have DCFS back on hotseat. </h3> <br/>

Three investigations were initiated for reported safety issues with Semaj's brother. Additional investigations a result of allegations of child neglect and abuse in the home.

DCFS was criticized after Semaj's death for not doing more to protect her.
      </TabPanel>
    </div>
  );
}
