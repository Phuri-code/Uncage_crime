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

export default function Category6() {
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
          <Tab label="Ronald Gene Simmons" {...a11yProps(0)} />
          <Tab label="Covina massacre" {...a11yProps(1)} />
          <Tab label="Marcus Wesson" {...a11yProps(2)} />
          <Tab label="2010 Appomattox shootings" {...a11yProps(3)} />
          <Tab label="2015 Tyrone shooting" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h4> Ronald Gene Simmons Sr. (July 15, 1940 – June 25, 1990) </h4> was an American spree killer who killed 16 people over a week-long period in Arkansas in 1987. A retired military serviceman, Simmons murdered fourteen members of his family, including a daughter he had sexually abused and the child he had fathered with her, as well as a former co-worker, and a stranger; he also wounded four others.

Simmons was sentenced to death sixteen times, and after refusing to appeal his sentence, was executed in Arkansas on June 25, 1990.
<h4> Early life and military career </h4>
Ronald Gene Simmons was born on July 15, 1940, in Chicago, Illinois, to Loretta and William Simmons. On January 31, 1943, William Simmons died of a stroke and within a year, Simmons's mother had remarried, this time to William D. Griffen, a civil engineer for the U.S. Army Corps of Engineers. In 1946, the corps moved Griffen to Little Rock, Arkansas, the first of several transfers that would take the family across central Arkansas over the next decade.[2]

On September 15, 1957, Simmons dropped out of school and joined the U.S. Navy, and was first stationed at Naval Station Bremerton in Washington, where he met Bersabe Rebecca "Becky" Ulibarri, whom he married in New Mexico on July 9, 1960. Over the next 18 years, the couple had seven children. In 1963, Simmons left the navy, and approximately two years later joined the U.S. Air Force. During his 20-year military career, Simmons was awarded a Bronze Star Medal, the Republic of Vietnam Gallantry Cross for his service as an airman, and the Airforce Ribbon for Excellent Marksmanship. Simmons retired from the air force and military service on November 30, 1979, with the rank of master sergeant.

On April 3, 1981, Simmons was being investigated by the Cloudcroft, New Mexico Department of Human Services for allegations that he had fathered a child with his 17-year-old daughter, Sheila, whom he had been sexually abusing.[1] Fearing arrest, Simmons fled New Mexico in late 1981 with his family, first to Ward, Arkansas, in Lonoke County, and then to Dover, Arkansas, in Pope County in the summer of 1983. The family took up residence on a 13-acre tract of land 6.5 miles north of Dover that would become known as Mockingbird Hill. The residence was constructed of two older-model mobile homes joined to form one large home, neither of which had a telephone nor indoor plumbing, and was surrounded by a makeshift privacy fence which was as high as 10-feet tall in some places.[1]

Simmons worked a string of low-paying jobs in the nearby town of Russellville, Arkansas. He quit a position as an accounts receivable clerk at Woodline Motor Freight after numerous reports of inappropriate sexual advances and went to work at a Sinclair Mini Mart for approximately a year and a half before quitting on December 18, 1987.
<h4> Murder spree </h4>
<h4> Dover </h4>
Shortly before Christmas 1987, Simmons decided to kill all the members of his family. On the morning of December 22, he first killed his wife Rebecca and eldest son Gene by shooting them with a .22-caliber pistol and then killed his three-year-old granddaughter Barbara by strangulation. Simmons dumped the bodies in a cesspit he had forced his children to dig previously. Simmons then waited for his other children to return to the house, and after their arrival, he told them he had presents for them, but wanted to give them one at a time. He first killed his daughter, 17-year-old Loretta, whom Simmons strangled and held under the water in a rain barrel. The three other children, Eddy, Marianne, and Becky, were then killed in the same way.

Around mid-day on December 26, the remaining members of the family arrived for their Christmas visit. The first to be killed was Simmons' son Billy and his wife Renata, who were both shot dead. He then strangled and drowned their 20-month-old son, Trae. Simmons shot and killed his oldest daughter, Sheila (whom he had sexually abused), and her husband, Dennis McNulty. Simmons then strangled his child by Sheila, seven-year-old Sylvia Gail, and finally his 21-month-old grandson Michael. Simmons laid the bodies of his whole family in neat rows in the lounge. All the corpses were covered with coats except that of Sheila, who was covered by Rebecca Simmons' best tablecloth. The bodies of the two grandsons were wrapped in plastic sheeting and left in abandoned cars at the end of the lane. After the murders, Simmons went for a drink in a local bar, then returned to the house and, apparently oblivious to the corpses lined up around him, spent the rest of the evening and the following day drinking beer and watching television.

<h4> Russellville </h4>
On the morning of December 28, Simmons drove into Russellville, walked into a law office, and killed the receptionist, a young woman named Kathy Kendrick. Simmons had previously been infatuated with Kendrick, but she had rejected him. He next went to an oil company office, where he shot dead a man named J.D. Chaffin and wounded the owner, Rusty Taylor, and then drove on to a convenience store where he had previously worked, shooting and wounding two more people. Afterwards, Simmons went to the office of the Woodline Motor Freight Company, where he shot and wounded a woman. Simmons then simply sat in the office and chatted with one of the secretaries while waiting for the police. When they arrived, Simmons handed over his gun and surrendered without any resistance.      
<h4> Conviction </h4>
Simmons was charged with 16 counts of murder, found guilty, and sentenced to death. He refused to appeal his death sentence, stating, "To those who oppose the death penalty - in my particular case, anything short of death would be cruel and unusual punishment."[8]

John Bynum successfully prosecuted the case. Simmons was first tried for the Russellville crimes, and a jury convicted him of capital murder and sentenced him to death. He made an additional statement, under oath, supporting his sentence:

I, Ronald Gene Simmons, Sr., want it to be known that it is my wish and my desire that absolutely no action by anybody be taken to appeal or in any way change this sentence. It is further respectfully requested that this sentence be carried out expeditiously.

The trial court conducted a hearing concerning Simmons' competence to waive further proceedings, and concluded that his decision was knowing and intelligent.

Simmons became the subject of the United States Supreme Court Case Whitmore v. Arkansas when another death row inmate, Jonas Whitmore, attempted, unsuccessfully, to force an appeal of Simmons' case.[9]

<h4> Execution </h4>
While on death row, Simmons had to be separated from other prisoners as his life was threatened constantly. This was because he refused to appeal his death sentence; the other prisoners believed Simmons was damaging their chances of beating their own death sentences.

On May 31, Arkansas governor (later President) Bill Clinton signed Simmons' execution warrant, and on June 25, 1990, he died by the method he had chosen, lethal injection in the Cummins Unit.[10] None of his surviving relatives would claim the body, and he was buried in a potter's field.  
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h4> Covina massacre </h4>
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
"Sylvia Pardo" redirects here. For the Mexican painter, see Silvia Pardo.
Covina massacre
Part of mass shootings in the United States
Bruce Jeffrey Pardo.jpg
Bruce Jeffrey Pardo
Wikimedia | © OpenStreetMap
Location	Covina, California, United States
Date	December 24, 2008
c. 11:30 p.m. (UTC-8)
Target	Ex-wife and her family
Attack type	Mass murder, murder-suicide, torching
<h4> Weapons </h4>
Four semi-automatic handguns
Homemade flamethrower
Deaths	10 (including the perpetrator)
Injured	3 (2 from gunfire)
Perpetrator	Bruce Jeffrey Pardo
The Covina massacre occurred on December 24, 2008, in Covina, a city in the suburbs of Los Angeles, California, United States. Nine people[1] were killed, either by gunshot wounds or in an arson fire inside a house at 1129 East Knollcrest Drive, where a Christmas Eve party was being held.[2] The perpetrator, 45-year-old Bruce Jeffrey Pardo, who had entered the house wearing a Santa suit, died from a self-inflicted gunshot to the head at his brother's residence in the early hours of the morning after the attack. Authorities cited marital problems as a possible motive for the violence; reports indicated that Pardo's divorce had been finalized on December 18, one week before the massacre.[3] Three people, including Pardo's ex-wife and his former in-laws, were initially declared missing pending identification of their bodies.[4]
<h4> Attack </h4> 
At approximately 11:30 p.m. PST, Bruce Jeffrey Pardo, dressed in a Santa Claus suit, knocked on the door of his former in-laws' house, occupied by about 25 people, with a gift-wrapped package containing a rolling air compressor converted to deliver gasoline from it and at least 4 9mm semi-automatic handguns;. Moments after the door opened, Pardo pulled out the handguns and immediately shot his 8-year-old niece Katrina Yuzefpolsky, the daughter of Leticia Yuzefpolsky, a sister of Sylvia Pardo,[5] as she ran to greet him, injuring her in the face. He then fired indiscriminately at fleeing party-goers. Police speculate that Pardo may have stood over and pointedly executed some of the victims, using the other handguns.[6]

After the shootings, Pardo unwrapped the package containing the compressor, and used it to spray gasoline to set the home ablaze.[7][8] Nine people died from either gunfire or flames, and three others were wounded: Yuzefpolsky was shot in the face with severe but non-life-threatening injuries, a 16-year-old girl shot and wounded in the back, and a 20-year-old woman who suffered a broken ankle jumping out of the second-floor window.[8][9] There was one survivor who called the authorities during the attack, after escaping to a neighbor's house.[10] The resulting fire soared approximately 40 to 50 feet and took 80 firefighters an hour-and-a-half to extinguish. Due to the intensity of the fire, identification of the victims was done with dental and medical records.  
Suspect's death and aftermath
After the attack, Pardo put on his street clothes and drove his Dodge Caliber rental car to his brother's house in Sylmar about 30 miles away from the crime scene, where he was later found dead from a self-inflicted gunshot wound.[6] His brother was not present in the home at the time of Pardo's death.[8] It was initially believed that Pardo intended to flee to Canada by plane since he had bought an airline ticket to a flight on Air Canada.[citation needed] However, it was subsequently discovered that the flight itinerary, on Northwest Airlines, was from Los Angeles to Moline, Illinois (with a layover in Minnesota). Pardo had called days before to tell a high school friend that he was planning to visit but investigators were unsure if he actually intended to visit or if the flight was to fool investigators.[11] He had visited the friend before in October 2008. Other reports stated that the Santa suit had melted during the flamethrower portion of the attack and had adhered to his skin so not all of it could be removed.

However, suffering from severe third-degree burns on his arms stemming from the blaze, Pardo decided to go against the initial plan.[6][8] Police found $17,000 in cash cling-wrapped on his legs inside a girdle. His rental car, parked one block from his brother's house, had remnants of his Santa suit. Also recovered from the scene were four 13-round capacity handguns that were empty, and at least 200 rounds of ammunition.[6] Suggesting that what had been inside the car was being treated as a threat, a bomb squad while attempting to remove a portion of the Santa suit with a robot, accidentally started a fire in the vehicle, burning and destroying it.[9] At Pardo's house in Montrose, police had recovered five empty boxes for semiautomatic handguns, a Benelli M2 Tactical shotgun and a container for high-octane fuel tank gasoline. They also found what was described as a "virtual bomb factory" in his home.[8]    
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h4> Marcus Wesson </h4> 
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
Marcus Delon Wesson
Marcus Wesson mug shot.jpg
Born	August 22, 1946 (age 75)
Kansas[1]
Parent(s)	Benjamin[2] and Carrie Wesson[1]
Conviction(s)	Murder
Criminal penalty	Death[3]
Details
Date	March 12, 2004
Location(s)	Fresno, California
Target(s)	Family
Killed	9
Weapons	Stainless-steel Ruger MK II Target .22 caliber handgun
Marcus Delon Wesson (born August 22, 1946) is an American criminal convicted of nine counts of first-degree murder and 14 sex crimes, including the rape and molestation of his underage daughters. His victims were his own children, fathered by incestuous relationships with his daughters and nieces, as well as the children by his wife.[1][4] He has been described as the worst mass murderer of Fresno, California.[5]
<h4> Early life and education</h4>    
Marcus Wesson was born in Kansas, the eldest of four children of Benjamin and Carrie Wesson. He was raised as a member of the Seventh-day Adventist Church.[6] Wesson claimed that his mother was a religious fanatic. His father was an alcoholic and child abuser who abandoned the family when Wesson was a child.[7] By the early 1960s, the family had moved to San Bernardino, California.

After dropping out of high school, Wesson joined the Army, serving from 1966 to 1968 as an ambulance driver.[8][9] Shortly after leaving the military, Wesson moved in with an older woman, Rosemary Solorio and her eight children in San Jose, California.[8] In 1971, Solorio gave birth to Wesson's son. In 1974, Wesson began sexually abusing Solorio's eight-year-old daughter, Elizabeth.[10] Wesson married Elizabeth Solorio when she turned 14 and he was 27.[9] Four months later, she gave birth to her first child. Eventually the couple had 10 children together, including one infant who died.[9][11]

One of Elizabeth's younger sisters left her own seven children with them, claiming to be unable to care for them due to a drug problem. Wesson never held a steady job; he lived off welfare, and had his adult children work and give him all of their earnings.[12][13] In 1989, Wesson was convicted of welfare fraud and perjury.[14][15][16] The family often lived in run-down shacks, boats, and vacant houses.[9]

Wesson was abusive toward his wife and children. He prevented Elizabeth from participating in the children's upbringing. He homeschooled the children and taught them from his own handwritten Bible that focused on Jesus Christ being a vampire. He told the children that he was God and had them refer to him as "Master" or "Lord". He taught the children to be prepared for Armageddon and said that the girls were destined to become Wesson's future wives. Wesson's school "curriculum" involved teaching girls oral sex as young as 8 or 9.[9] Their domestic responsibilities included washing Wesson's dreads and scratching his armpits and head.[9] The girls were not allowed to talk to their male siblings or their mother.[10] Both male and female children were physically abused.[10] Wesson sexually abused two daughters and three nieces, beginning at age eight.[11] Each of the five girls became pregnant as a result.
<h4> Murders </h4> 
Prior to March 12, 2004, Wesson had declared his intention to relocate his daughters and their children to Washington state, where Wesson's parents lived.[17] On March 12, 2004, several members of Wesson's extended family, along with two nieces who rebelled against him, converged on his family compound demanding the release of their children.[17][18] Fresno police were summoned to what was described as a child custody issue, and a standoff ensued.[5] Wesson told the police to wait at the door and disappeared into the home. When he came back to the door, his clothes were bloodied.[9]

Fresno police testified they did not hear gunshots being fired shortly after, though other witnesses present at the standoff testified they did hear gunshots fired at that time.[19] In the aftermath, police discovered nine bodies, including two of Wesson's daughters and a total of seven of their children, in a bedroom filled with antique coffins.[17][19] Each victim had been fatally shot through the eye. Wesson's other children, who were not present inside the house, survived the incident.
      </TabPanel>
      <TabPanel value={value} index={3}>
      The 2010 Appomattox shootings was a mass murder in Appomattox, Virginia that occurred on January 19, 2010. 40 year-old Christopher Bryan Speight shot his sister, her husband, and her son and daughter at their home, as well as four other people. He then escaped into a forest and shot at a police helicopter searching for him, but eventually surrendered himself to authorities. On February 15, 2013, Speight was sentenced to life imprisonment.
      <h4> Shooting </h4> 
The incident began on January 19, 2010, when police were called to a road outside Appomattox on a report of a man who required medical attention. When police arrived, they were fired on by the suspect, Christopher Bryan Speight, who also fired on a police helicopter, forcing it to make an emergency landing. Shortly afterwards, the suspect fled to a wooded area, where a force of more than a hundred police officers surrounded him. Police found three people dead in a house co-owned by the gunman (his sister and the house's co-owner, Lauralee Sipe, and her husband, Dwayne Sipe, both 38, and their four-year-old son, Joshua), and four others dead outside the house, with the last victim dying on the road.[1] Police said that the victims were both men and women, and all were previously acquainted with the suspect. Speight was believed to have acted alone.[2]

He surrendered on January 20, near the same wooded area where police thought he had been surrounded. He was wearing a bulletproof vest, but was not carrying the high-powered rifle believed to be the weapon used.

Prior to his surrender, police put a school and local businesses on lockdown, and advised residents to lock their houses and not go outside. Police were concerned that Speight's house had been rigged with explosives, and a bomb squad searched the building the morning after the attack.[1] Explosives were found both inside and around the building, and were detonated safely.[2] The house had sat unsecured for more than twelve hours as state police assumed local deputies had secured the house, and vice versa.

Speight was employed as a security guard for Old Dominion Security at the time of the incident.
      </TabPanel>
      <TabPanel value={value} index={4}>
      On February 26, 2015, a gunman shot and killed seven people in several locations across the town of Tyrone, Missouri, an unincorporated community approximately 95 miles east of Springfield. The gunman, identified as 36-year-old Joseph Jesse Aldridge, was found dead of a self-inflicted gunshot wound the next day. It was the worst mass murder in the history of Texas County, which previously had experienced an average of one homicide per year.
      <h4> Shootings </h4> 
Police were alerted to the shootings at 10:15 p.m. CT Thursday, when a 15-year-old girl ran to a neighbor's home to say she heard gunshots in her home and fled. Deputies responded and found her parents, Garold and Julie Aldridge, dead inside the home. A 1/4 mile away, officers found Garold's brother Harold and his wife Janell shot to death inside their bedroom. As a result, police began checking all of the houses in Tyrone, urging citizens to stay inside their residences and lock their doors.

Less than three miles away, Darrell and Martha Shriver were both shot in their home. While Darrell died from his wounds, Martha survived and managed to identify the suspect as Joseph Jesse Aldridge as she was being taken to a hospital in Springfield. She also had a relative check on the well-being of her son Carey and his family. The relative found Carey and his wife Valirea dead on the floor of their bedroom, and their son sleeping unharmed in another bedroom.[3][4][5][6] The entire shooting spree occurred within a three-mile radius of Tyrone.[7] All of the crime scenes showed no signs of forced entry into the homes.[8]

An elderly woman connected to the shootings died from natural causes.[9] Authorities believe the gunman started the shooting spree after finding his mother, the aforementioned elderly woman, dead on a couch from an illness for which she had been under a doctor's care,[10] though this was unconfirmed.[11] The disease was clarified in an autopsy to be metastatic lung cancer,[12] although according to the woman's brother, it was breast cancer.[13] A relative feared the woman did not die from the disease, and had instead been smothered to death by Aldridge.[14] The woman was identified as 74-year-old Alice L. Aldridge.[15]

At around 5:30 a.m. on February 27, the gunman was found dead inside a pickup truck situated in the middle of a two-lane highway.[16][17] He was southeast of Summersville in neighboring Shannon County, located about fifteen or twenty miles away from the scenes of the shootings. He died of a self-inflicted gunshot wound earlier that day.[18][7][19][14] A Rock Island Armory 1911 .45-caliber handgun, believed to be the same one used in the shootings, was recovered from the truck along with a stash of ammunition.[11][3] The shootings were the worst mass murder in the history of Texas County, Missouri, which had an average of one homicide per year.
<h4> Perpetrator </h4>
Joseph Aldridge
Born	Joseph Jesse Aldridge
c. 1979
Died	February 27, 2015 (aged 36)
Shannon County, Missouri
Cause of death	Suicide by gunshot
Nationality	American
Joseph Jesse Aldridge (c. 1979 – February 27, 2015) was identified as the gunman in the shootings.[2] He was a cousin of the named male victims.[5] On June 15, 2007, Aldridge was arrested in Howell County for felony marijuana possession, during which he was found to have a Ruger 22/45 .22-caliber pistol in his possession. On May 2, 2008, he was sentenced to 21 months in a federal prison for owning the pistol. He was released three years later, though a judge added six months of his arrest to his sentence in 2011 at the request of Aldridge's probation officer. He was also ordered to undergo mental health and substance abuse counseling. Aldridge was known to local law enforcement, although his criminal history was described as minor. His record at the time of the shooting barred him from owning guns.[3][20][12][21]

Aldridge was described as a recluse by relatives. Arkansas Democrat-Gazette reported that he was involved in a feud with a cousin, who was one of the victims in the shootings, and that Aldridge and several other members of his extended family were having tense relations between one another following a fistfight involving Aldridge's brother.[14] According to a relative of the Shriver family and other residents of Tyrone, Aldridge had asked Darrell Shriver, one of the slain victims and a neighbor of his, for a job at a cabinet store he owned prior to the shootings, but was turned down. He had also reportedly threatened to kill other residents.
     
      </TabPanel>
    </div>
  );
}
