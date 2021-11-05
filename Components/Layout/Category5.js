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

export default function Category5() {
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
          <Tab label="The Boy in the Box" {...a11yProps(0)} />
          <Tab label="The Ice Box Murders" {...a11yProps(1)} />
          <Tab label="The Chicago Tylenol Murders" {...a11yProps(2)} />
          <Tab label="The Girl Scout Murders" {...a11yProps(3)} />
          <Tab label="Issei Sagawa" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h4> The Boy in the Box </h4> 
      In February 1957, a college student stumbled upon the remains of a young boy in the woods of Philadelphia and reported his gruesome discovery to the police. The boy was found badly beaten and laid to rest inside an old bassinet box. His identity was unknown.

Several people came forward with information relating to the case, but the police were not able to verify anyone’s testimony. One woman, Martha, claimed that her abusive mother bought the boy. Under their roof, he was subjected to physical and sexual abuse. What made the police take interest in Martha’s story was her knowledge of details that had not been released to the public. She claimed that shortly before the boy was beaten to death, he ate baked beans, which corroborated the autopsy. She also claimed that he was bathed before his death, which matched the coroner’s finding of water-pruned fingers. Though Martha’s testimony seemed to match the evidence, her substantial history of mental illness made her an unreliable witness. 

Related: 29 Unsolved Murders That Will Send Shivers Down Your Spine 

Another lead came from a psychic who accurately described a foster home near where the boy had been found, without ever having seen it. Remington Bristow, an employee at the examiner’s office, followed the psychic’s directions to the foster house. Inside, he discovered a bassinet matching the description of the bassinet box the boy was found in. He also found blankets similar to the one that was wrapped around the boy’s body. Because there was no real incriminating evidence against the foster parents, Bristow’s findings were dismissed as well. 

62 years later, the case of the Boy in the Box has gone cold. Facial reconstruction technology has provided mock images of what the boy might have looked like alive, but no one has ever come forward to claim him. DNA and dental testing have also been attempted, with no success thus far. The identity of the Boy in the Box remains unknown to this day. 
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h4> The Ice Box Murders </h4> 
      In 1965, Fred and Edwina Rogers were living in Houston along with their grown son, Charles. The family mostly kept to themselves in their quiet neighborhood, especially given Charles’s reclusive and antisocial behavior. In fact, many neighbors were not even aware that Charles lived at home with his parents, because he left the house each day before dawn and didn’t return until well after nightfall.

When a family member hadn’t heard from the Rogers in several days, he called the Houston police for a welfare check on his elderly aunt and uncle. The patrolmen were unable to locate Fred and Edwina, but they noticed food sitting on the dining room table. They opened the fridge and noticed numerous packages of meat, neatly stacked atop one another. Then they noticed two human heads in the vegetable bin. Additional officers arrived on the stomach-turning scene and slowly removed the packages full of dismembered body parts from the fridge. The remains were that of Fred and Edwina Rogers. The police deduced that Edwina had been brutally beaten and shot, while Fred suffered forceful trauma to the head. His eyes had been gouged out and his genitalia removed. The couples’ innards had been flushed down the toilet. Charles was nowhere to be found.
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h4> The Chicago Tylenol Murders </h4> 
      In September of 1982, a 12-year-old girl in Chicago passed away shortly after ingesting an Extra Strength Tylenol. That same day, a man died in a hospital after taking the same pill. Two of his family members followed. Over the course of the next few weeks, more seemingly healthy people in Chicago dropped dead, and the only thing they had in common was taking Extra Strength Tylenol shortly before their untimely death. 

As bottles were recalled by Johnson & Johnson, it was discovered that many of the Extra Strength Tylenol pills had been laced with potassium cyanide. Once this was made public, Johnson & Johnson issued numerous ads and warnings to customers to avoid the product. The company began working fervently on a triple-sealed package that would prevent tampering. 

James William Lewis of New York City contacted Johnson & Johnson claiming that he was responsible for tampering with the bottles and filling the capsules with cyanide. He demanded $1 million in exchange for him to stop. He was arrested for the crime and although he wasn’t found guilty, he was still imprisoned for extortion. 

Even after Johnson & Johnson fortified their Tylenol bottles against tampering, the widespread news of what had happened in Chicago prompted crimes of a similar nature all around the country. Several more people died from cyanide poison found in other over-the-counter medication. 

The Chicago Tylenol Murders is one of the few true crime stories to spark real change in the country. The quality control of pharmaceuticals increased tenfold, as did the security of their packaging. Although the FBI didn’t have enough evidence to convict anyone of the crime, it is widely believed that James William Lewis and his wife were indeed responsible. 
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h4> The Girl Scout Murders </h4> 
      In the summer of 1977, three young Girl Scouts staying at an Oklahoma campsite were raped and murdered. The girls—Lori, Michelle, and Doris—were between the ages of eight and ten. About two months before the murders, a camp counselor found a disturbing note in her belongings. The culprit promised to murder three children at the camp. Knowing that young campers enjoy telling scary stories around the campfire, the camp counselor dismissed the threatening note as nothing more than a prank—a decision she would come to regret.

Early in the morning of June 13, the girls’ bodies were found in their sleeping bags out on the trail leading to the camp showers. The only evidence that their killer left behind was a red flashlight and a bloody footprint. 

Related: 8 Strange, Unsolved Crimes That Are Sure to Haunt You

The prime suspect in the Oklahoma Girl Scout Murders was Gene Leroy Hart, an escaped convict. Hart had been raised about a mile from Camp Scott and at the time of the murders he was at large after escaping from prison, where he had been serving time for burglary, kidnapping, and rape. A local jury acquitted Hart of the crime, citing a lack of evidence. However, Oklahoma police consider the case solved.

To this day, no one knows if Gene Leroy Hart got away with murder, or if the true killer was someone else entirely. Either way, the girls’ killer never saw justice.
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h4> Issei Sagawa </h4> 
      This cannibal became a local celebrity after signing himself out of a Japanese mental institution in 1986. Issei Sagawa came from a wealthy family and had exhibited cannibalistic urges from an early age, even engaging in bestiality. At 23, he made his first attempt at eating human flesh, breaking into a woman’s house to cut off some of her flesh. He was caught and charged with attempted rape.

Later, he would move to France to earn his Ph.D in literature. It would be then, at the age of 32, that Sagawa would kill and eat his classmate Renée Hartevelt. He admitted to luring the 25-year-old Dutch woman to his apartment under the guise of working on poetry. He said he chose her for her beauty and health—two things he believed he lacked. After shooting her in the neck, he ate various parts of her body over the course of two days. He then attempted to dump her body (including two suitcases of her dismembered body parts) into a lake in the Bois de Boulogne, but was caught in the act.

After being held for two years in police custody, Sagawa was deemed legally insane in French court and was ordered to be held indefinitely in a mental health institution. After being deported to Japan, he was declared sane by Japanese psychologists and so was able to sign himself out of care.
      </TabPanel>
    </div>
  );
}
