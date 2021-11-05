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

export default function Category4() {
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
          <Tab label="Rodney Alcala(1943–2021)" {...a11yProps(0)} />
          <Tab label="Zodiac Killer" {...a11yProps(1)} />
          <Tab label="Richard Ramirez(1960–2013)" {...a11yProps(2)} />
          <Tab label="Ted Bundy(1946–1989)" {...a11yProps(3)} />
          <Tab label="Charles II of England(1630–1685)" {...a11yProps(4)} />
          <Tab label="Charles Ng(1960–)" {...a11yProps(5)} />
          <Tab label="Edmund Kemper(1948–)" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Rodney Alcala was an American serial killer whose good looks and high IQ helped him lure victims. His 1978 appearance on the television show 'The Dating Game' resulted in his nickname of "The Dating Game Killer."
<h4>Who Was Rodney Alcala? </h4>
Serial killer Rodney James Alcala murdered at least nine women and girls across the United States in the 1970s, though his true death toll could number more than 100. He spent time in prison for sexual assault and other crimes in the 1970s but continued to rape and kill when he was free. Autopsies of some Alcala victims revealed that he would strangle women, then wait for them to regain consciousness before the final kill. Alcala also sometimes arranged the corpses of women he'd murdered in poses. In 2010, photos taken by Alcala decades earlier were made public to try to identify other victims. He has been behind bars since his July 1979 arrest for the abduction and murder of a 12-year-old girl. Alcala was sentenced to death in California but died of natural causes in 2021.

<h4> Early Life </h4>
Alcala was born as Rodrigo Jacques Alcala-Buquor in San Antonio, Texas, on August 23, 1943. He moved to Mexico with his family when he was around 8 years old and his father abandoned the family while they were in Mexico. Alcala, his siblings and mother later relocated to Los Angeles.
At the age of 17, Alcala joined the army. He was discharged in 1964, after suffering a breakdown and being diagnosed with an antisocial personality disorder.

He attended California State University, then transferred to UCLA. He graduated with a fine arts degree in 1968. After fleeing California that year, Alcala used his John Berger alias to enroll in New York University, where he took a class with Roman Polanski.
<h4> First Arrest </h4>
After fleeing the scene of his 1968 attack on 8-year-old Tali Shapiro, Alcala traveled to the East Coast. In 1971 he was included on the FBI's Most Wanted list. Some girls at an arts camp in New Hampshire recognized their counselor, who was using the name John Berger, from this list. They told the camp's dean and Alcala was soon arrested, though he was able to plead to the lesser charge of child molestation and served just 34 months.

Though he was a registered sex offender, Alcala managed to land a job with The Los Angeles Times as a typesetter in September 1977.

His past conviction for sexual assault prompted California police to interview Alcala in March 1978 as a potential suspect in the Hillside Strangler killings, another set of serial murders that occurred in California in the 1970s. Alcala was cleared of those crimes, and police did not realize they had actually spoken with a different serial killer.
<h4> 'The Dating Game Killer'</h4>
In September 1978, Alcala appeared as Bachelor No. 1 on The Dating Game, a TV show that had men and women cheekily interview prospective dates, sight unseen. At the time he was a convicted child molester but the show did not run a background check.

Alcala was introduced as "a successful photographer, who got his start when his father found him in the darkroom at the age of 13, fully developed." When asked by Cheryl Bradshaw, his prospective date, to describe what kind of meal he'd be, he answered, "I'm called 'The Banana' and I look really good... Peel me."

Alcala's use of charm and innuendo won him a date with Bradshaw. However, when they met face-to-face she felt Alcala was "acting really creepy" and opted not to go out with him.      
<h4> Victims</h4>
Alcala was a tall and good-looking man who often told women he was a fashion photographer who wanted to take photos for a contest. His intelligence and charm could make him persuasive. A woman who missed a date with Alcala because he'd been arrested in 1979 later told People, "He was so easy to trust. He had a way of talking to people that really put them at ease."

In the 1970s, Alcala killed Cornelia Crilley, 23, and Ellen Hover, 23, both residents of New York City. Crilley was raped and strangled with her own stockings in her apartment in June 1971. Hover disappeared on July 15, 1977, leaving behind a calendar that stated she was meeting with "John Berger." Her remains were discovered in New York's Westchester County in 1978. Alcala pleaded guilty to these murders in 2012. He received a sentence of 25 to life, though it will only be served if California releases him from custody.
Alcala was arrested in July 1979 for the abduction and murder of 12-year-old Robin Samsoe of Huntington Beach, California. He was convicted on these charges in 1980. Four years later this conviction was overturned as the jury had improperly been told about Alcala's criminal record. Another trial in 1986 resulted in a second guilty verdict, but in 2001 this was also overturned on a technicality. While in custody Alcala wrote the book You, the Jury (1994), in which he argued he was innocent.

Before Alcala was re-tried a third time for Samsoe's death, advances in the world of DNA and other crime scene analysis provided evidence tying him to more crimes (he'd been forced to provide a DNA sample). At his next trial, which took place in 2010, Alcala was again charged with killing Samsoe. Part of the case against him was a pair of gold earrings linked to Samsoe that had been found in his Seattle storage locker. Alcala played clips from The Dating Game that he said proved he was already wearing gold earrings in 1978, but these didn't convince the jury.

In addition, he faced charges for assaulting and strangling four women in California in the late 1970s: 18-year-old Jill Barcomb, who was killed in November 1977, 27-year-old Georgia Wixted, 27, who was raped, beaten and strangled in December 1978, 32-year-old Charlotte Lamb, who was killed in June 1978 and 21-year-old Jill Parenteau, who was killed in June 1979. Alcala opted to represent himself during the court proceedings. In February 2010 he was found guilty of all five murders. He was sentenced to death in March 2010.

In 2016 Alcala was charged with the 1977 killing of Christine Ruth Thornton in Wyoming, though prosecutors opted not to extradite him to stand trial. Authorities also believe he killed Pamela Lambson in the San Francisco Bay Area in the fall of 1977. However, DNA collected at that crime scene was too degraded to test, so he was not charged with the crime.
      </TabPanel>
      <TabPanel value={value} index={1}>
      he Zodiac Killer took credit for several murders in the San Francisco Bay Area in the late 1960s. He was never caught.
<h4> Who Was the Zodiac Killer? </h4>
The self-proclaimed Zodiac Killer was directly linked to at least five murders in Northern California in 1968 and 1969 and may have been responsible for more. He taunted police and made threats through letters sent to area newspapers from 1969 to 1974, before abruptly ceasing communication. Despite intensive investigations, no one was ever arrested for the crimes and the case remains open. The mystery surrounding the murders has been the subject of numerous books and movies, including director David Fincher's acclaimed 2007 feature Zodiac.

<h4> Zodiac Killer Letters, Symbol & Cipher </h4>
On August 1, 1969, the San Francisco Examiner, San Francisco Chronicle and Vallejo Times-Herald each received an identical handwritten letter in an envelope without a return address. Beginning, “Dear Editor: I am the killer of the 2 teenagers last Christmas at Lake Herman,” the letters contained details from the Zodiac Killer’s murders that only the killer could have known. The killer went on to threaten further attacks if the letters weren’t printed on the front page of the papers.
Each letter closed with a symbol consisting of a circle with a cross through it, in what would come to be known as the Zodiac Killer’s symbol. The letters were also each accompanied by one part of a three-part cipher that he claimed contained his identity.

While Bay Area police departments, with the support of the FBI, worked feverishly to track down the killer, another letter soon arrived at the San Francisco Examiner. Beginning, “Dear Editor: This is the Zodiac speaking,” it also described the murders in detail and taunted police for not having been able to crack his code or catch him.
Several days later, high school teacher Donald Harden and his wife, Bettye, were able to solve the cipher. "I like killing people because it is so much fun," it read. "It is more fun than killing wild game in the forest because man is the most dangerous animal of all."

Three days after the fourth known Zodiac killing, the 1969 murder of taxi driver Paul Stine, the San Francisco Chronicle received a letter claiming the crime. Written in the same erratic print as the Zodiac's previous letters, it gave the details of Stine’s murder and was accompanied by a bloody scrap of Stine’s shirt. At the end of the letter, the killer mused that he would next shoot out the tire of a school bus and "pick off the kiddies as they come bouncing out."
<h4> Zodiac Killer Movies</h4>
The Zodiac Killer was the inspiration for the psychopath in the 1971 Clint Eastwood classic Dirty Harry, which includes a scene involving a school bus full of children being hijacked.

Years later, Robert Graysmith's writing fueled the creation of David Fincher's critically acclaimed Zodiac, which hit the big screen in 2007 with Jake Gyllenhaal, Mark Ruffalo and Robert Downey Jr. in starring roles.

      </TabPanel>
      <TabPanel value={value} index={2}>
      Dubbed the 'Night Stalker,' Richard Ramirez was an American serial killer who killed at least 14 people and tortured dozens more before being captured in 1985.
<h4> Who Was Richard Ramirez? </h4>
Richard Ramirez was an American serial killer who killed at least 14 people and raped and tortured at least two dozen more, mostly during the spring and summer of 1985. After developing epilepsy as a child, he became a heavy drug user and cultivated an interest in Satanism, which became a calling card for investigators at his crime scenes. Apprehended in August 1985, Ramirez was sentenced to death at the conclusion of his trial in 1989. He spent the remainder of his days at California's San Quentin Prison, before dying from cancer on June 7, 2013, at age 53.

<h4> Early Life </h4>
Ramirez was born Ricardo Leyva Muñoz Ramírez on February 29, 1960, in El Paso, Texas, the fifth child of Mexican immigrants Mercedes and Julian Ramírez. Known as Richard or Ricky, Ramirez reportedly sustained multiple head injuries at an early age; after he was knocked unconscious by a swing at age 5, he began experiencing epileptic fits.

As an adolescent, Ramirez was heavily influenced by his older cousin, Miguel, who had recently returned from fighting in the Vietnam War. The two smoked marijuana together as Miguel told Ramirez about the torture and mutilation he had inflicted on several Vietnamese women, corroborating these stories with photographic evidence. At age 13, Ramirez witnessed his cousin murder his wife.
Dropping out of school in the ninth grade, Ramirez was arrested for the first time in 1977, for marijuana possession. He soon moved to California, progressing to cocaine addiction and burglary, and cultivating an interest in Satanism. He was arrested twice in the Los Angeles area for auto theft, in 1981 and again in 1984, and noticeably began to neglect his personal hygiene.     
<h4> Murders </h4>
Theft turned to violence with Ramirez's (then) first known murder on June 28, 1984; the victim was 79-year-old Jennie Vincow, who was sexually assaulted, stabbed and killed during a burglary in her own home. What followed was a spree of brutal murders, rapes and robberies, leaving dozens of victims in its wake.

Ramirez next struck nearly nine months later. On March 17, 1985, he attacked Maria Hernandez, who managed to escape, and then killed her roommate, Dayle Okazaki. Not satisfied with these assaults, he also shot and killed Tsai-Lian Yu the same evening, spurring a media frenzy that saw Ramirez dubbed the "Valley Intruder" by the press.    
Just 10 days later, on March 27, Ramirez murdered 64-year-old Vincent Zazzara and Zazzara's 44-year-old wife, Maxine, using an attack style that would become a pattern for the killer: The husband was shot first, then the wife was brutally assaulted and stabbed to death. In this case, Ramirez also gouged out Maxine Zazzara's eyes.

A full-scale police operation yielded no concrete results, and Ramirez repeated his attack pattern on pensioners William and Lillie Doi in May 1985. Over the next few months, his murder rate escalated, claiming another dozen victims in a frenzy of burglary, assault and brutal violence, complete with Satanic rituals. The Los Angeles Police Department responded by putting together a dedicated task force, with the FBI stepping in to assist.

The relentless media and police pressure, aided with descriptions from his surviving victims, forced Ramirez to leave the L.A. area that August. He journeyed north to San Francisco, where he took two more victims, Peter and Barbara Pan, on August 17. His unmistakable M.O., complete with Satanic symbolism, meant that the "Valley Intruder" moniker was no longer applicable; the press quickly coined a new name, the "Night Stalker," as most of his assaults took place at night in his victims' homes. 

<h4> Arrest </h4>
Ramirez's actions on his final night of terror, on August 24, 1985, soon led to his capture. First, he was spotted outside a Mission Viejo home, where he unwittingly left a footprint, before the witness took note of his car and license plate. Later, after Ramirez raped another woman at her home (and shot her fiance), the victim provided a detailed description of her assailant, who had forced her to swear her love for Satan.

Ramirez's abandoned car was found a few days later, complete with enough of a fingerprint to make a match, and his criminal record enabled the police to finally put a name to the "Night Stalker." National TV and print media coverage featuring his prison photo, along with a series of clues from witnesses and survivors, led to Ramirez's capture on August 31, after he was badly beaten by East L.A. residents while attempting two carjackings.
Trial, Conviction and Sentencing
Ramirez waited in jail as his trial was continuously pushed off, the delay marked by a series of motions and bickering between the prosecutors and defense attorney. Because the geographical spread of the crimes also complicated the scope of the trial with jurisdictional issues, some of the charges against Ramirez were dropped in order to expedite what was becoming a long journey to justice.

The jury selection process finally moved forward on July 22, 1988, and the trial itself commenced the following January. During this time, Ramirez attracted a cult-like following of supporters, many of whom were black-clad Satan worshipers. Ramirez himself often dressed in black, along with dark shades, for his courtroom appearances.

Yet another delay occurred when one juror was found murdered on August 14, 1989, but rumors that Ramirez had orchestrated her death proved unfounded. On September 20, 1989, the jury finally returned a unanimous guilty verdict on 43 charges, including 13 counts of murder, five counts of attempted murder, 11 sexual assault charges and 14 burglary charges.

Two weeks later, the same jury recommended the death sentence on 19 counts. Leaving the courtroom, Ramirez responded, "Hey, big deal, death always comes with the territory. I'll see you in Disneyland." The convicted murderer was formally sentenced to death in the gas chamber on November 7, 1989, and was sent to San Quentin Prison in California to spend the remainder of his days.

<h4> Final Years, Wife and Death </h4>
While incarcerated, Ramirez married one of his supporters, 41-year-old Doreen Lioy, in 1996. His long-awaited appeal finally made it to the California State Supreme Court in 2006, before being rejected.  
      </TabPanel>
      <TabPanel value={value} index={3}>
      American serial killer and rapist Ted Bundy was one of the most notorious criminals of the late 20th century, known to have killed at least 20 women in the 1970s. He was executed in the electric chair in 1989.
<h4> Who Was Ted Bundy? </h4> 
Ted Bundy was a 1970s serial murderer, rapist and necrophiliac. He was executed in Florida's electric chair in 1989. His case has since inspired many novels and films about serial killers.

<h4> Ted Bundy's Parents and Siblings</h4>
Eleanor Louise Cowell, who went by Louise, was 22 years old and unmarried when she gave birth to her son Ted. Ted's father may have been Lloyd Marshall, an Air Force veteran and a Penn State graduate, according to Ann Rule, a coworker of Ted's and the author of the book The Stranger Beside Me. Other sources had Ted's father's name as Jack Worthington, while some rumors had it that his father was also his grandfather. Because Ted's birth certificate lists his father as "unknown," his biological father's identity may never be confirmed.

In 1951, Louise married Johnnie Bundy. While Ted took his name, he reportedly didn't have much respect for his stepfather, whom he resented for being too uneducated and working class. Johnnie and Louise had several children together. 

Louise was working as a secretary at the University of Puget Sound and still married to Johnnie in the 1970s when Ted was accused of his crimes. She refused to believe the charges for years, although she changed her stance after he confessed.
<h4> Early Life </h4>
Bundy was born in Burlington, Vermont, on November 24, 1946. Bundy started life as his mother's secret shame, as his illegitimate birth humiliated her deeply religious parents. Louise delivered Ted at a home for unwed mothers in Vermont and later brought her son to her parents in Philadelphia.

To hide the fact he was an illegitimate child, Bundy was raised as the adopted son of his grandparents and was told that his mother was his sister. Eleanor moved with Bundy to Tacoma, Washington, a few years later, and soon married his stepfather Johnnie.

From all appearances, Bundy grew up in a content, working-class family. He showed an unusual interest in the macabre at an early age. Around the age of 3, he became fascinated by knives. A shy but bright child, Bundy did well in school but not with his peers. 

As a teenager, a darker side of his character started to emerge. Bundy liked to peer in other people's windows and thought nothing of stealing things he wanted from other people.
<h4> Education </h4>
Bundy graduated from the University of Washington with a degree in psychology in 1972. He had been accepted to law school in Utah, although he would never earn his degree. 

While a student at the University of Washington, Bundy fell in love with a wealthy, pretty young woman from California. She had everything that he wanted: money, class and influence. He was devastated by their breakup. Many of Bundy's later victims resembled his college girlfriend—attractive students with long, dark hair. 

By the mid-1970s, Bundy had transformed himself, becoming more outwardly confident and active in social and political matters. He even got a letter of recommendation from the Republican governor of Washington after working on his campaign.

READ MORE: How Ted Bundy’s Education Facilitated His Career as a Serial Killer

<h4> Victims </h4>
Bundy confessed to 36 killings of young women across several states in the 1970s, but experts believe that the final tally may be closer to 100 or more. The exact number of women Bundy killed will never been known. His killings usually followed a gruesome pattern: He often raped his victims before beating them to death.

While there is some debate as to when Bundy started killing, most sources say that he began his murderous rampage around 1974. Around this time, many women in the Seattle area and in nearby Oregon went missing. Stories circulated about some of the victims last being seen in the company of a young, dark-haired man known as "Ted." He often lured his victims into his car by pretending to be injured and asking for their help. Their kindness proved to be a fatal mistake.
<h4> How Ted Bundy Was Caught </h4>
In the fall of 1974, Bundy moved to Utah to attend law school, and women began disappearing there as well. The following year, he was pulled over by the police. A search of his vehicle uncovered a cache of burglary tools—a crowbar, a face mask, rope and handcuffs. He was arrested for possession of these tools and the police began to link him to much more sinister crimes.

In 1975, Bundy was arrested in the kidnapping of Carol DaRonch, one of the few women to escape his clutches. He was convicted and received a one-to-15-year jail sentence.
Bundy escaped from prison twice in 1977. The first time, he was indicted on murder charges for the death of a young Colorado woman and decided to act as his own lawyer in the case. During a trip to the courthouse library, he jumped out a window and made his first escape. He was captured eight days later.

In December, Bundy escaped from custody again. He climbed out of a hole he made in the ceiling of his cell, having dropped more than 30 pounds to fit through the small opening. Authorities did not discover that Bundy was missing for 15 hours, giving the serial killer a big head start on the police.

<h4> Chi Omega Sorority House Break-In </h4>
After Bundy's second escape from prison, he eventually made his way to Tallahassee, Florida. On the night of January 14, 1978, Bundy broke into the Chi Omega sorority house at Florida State University. He attacked four of the young female residents, killing two of them. On February 9, Bundy kidnapped and murdered a 12-year-old girl named Kimberly Leach. 

These crimes marked the end of his murderous rampage, as he was soon pulled over by the police that February.Bundy escaped from prison twice in 1977. The first time, he was indicted on murder charges for the death of a young Colorado woman and decided to act as his own lawyer in the case. During a trip to the courthouse library, he jumped out a window and made his first escape. He was captured eight days later.

In December, Bundy escaped from custody again. He climbed out of a hole he made in the ceiling of his cell, having dropped more than 30 pounds to fit through the small opening. Authorities did not discover that Bundy was missing for 15 hours, giving the serial killer a big head start on the police.

Chi Omega Sorority House Break-In
After Bundy's second escape from prison, he eventually made his way to Tallahassee, Florida. On the night of January 14, 1978, Bundy broke into the Chi Omega sorority house at Florida State University. He attacked four of the young female residents, killing two of them. On February 9, Bundy kidnapped and murdered a 12-year-old girl named Kimberly Leach. 

These crimes marked the end of his murderous rampage, as he was soon pulled over by the police that February.

      </TabPanel>
      <TabPanel value={value} index={4}>
      Charles II was the monarch of England, Scotland and Ireland during much of the latter half of the 17th century, marking the Restoration era.
<h4> Who Was Charles II of England? </h4> 
After the execution of his father, Charles II lived in exile until he was crowned King of England, Ireland and Scotland in 1661. His reign marking the Restoration period, Charles was known for his cavorting lifestyle and feuds with Parliament. He converted to Catholicism just before his death in London on February 6, 1685.

<h4> Early Life </h4> 
When Charles II was born in St. James’s Palace in London, England, on May 29, 1630, signs of political turmoil were on the horizon in England. Two years prior, his father, King Charles I, had reluctantly agreed to the passage of the Petition of Right, which placed limits on the king’s authority.

In 1642, civil war broke out between Parliament and Charles I over his claim of divine right to rule. By the end of the decade, Parliament, led by the Puritan Oliver Cromwell, was victorious. Charles II fled to France, and Charles I was executed in 1649.

During the 11-year period of Interregnum, Charles was forbidden from being crowned king. Supporters in Scotland offered him the throne if he supported home rule. Inexperienced and untested in battle, Charles led a force into England but was quickly defeated at the Battle of Worcester, in 1651. Charles fled to the continent and spent nearly a decade in exile, forced to move from one country to another due to Cromwell’s reach.
<h4> The Restoration </h4>
The English republican government collapsed following Cromwell’s death in 1658, and Charles was reinstated to the throne in 1661. In his restoration agreement with Parliament, he was given a standing army and allowed to purge officials responsible for his father’s execution. In exchange, Charles II agreed to honor the Petition of Right and accept a limited income.     
By this point, Charles was cynical and self-indulgent, less skilled in governing than in surviving adversity. Like his father, he believed he possessed the divine right to rule, but unlike Charles I, he didn’t make it his priority. The Royal Court was notorious for its wine, women and song, and Charles became known as the “Merry Monarch” for his indulgence in hedonistic pleasures.

<h4>Later Years</h4> 
In 1670, Charles signed a treaty with French King Louis XIV in which he agreed to convert to Catholicism and support France’s war against the Dutch in return for subsidies. The French assistance allowed him a little more breathing room in his dealings with Parliament.
Charles’s wife, Queen Catherine, failed to produce a male heir, and by 1677 many feared his Catholic brother, James, Duke of York, would assume the throne. To appease the public, Charles arranged for his niece, Mary, to wed the Protestant William of Orange.

A year later, the “Popish Plot” to assassinate the king emerged. Further investigation revealed no conspiracy existed, but anti-Catholic hysteria in Parliament led to false accusations against Charles’s chief advisor, Lord Danby. Tired of the conflict, Charles dissolved Parliament in 1679 and ruled alone for his remaining years.

On his death bed, Charles finally went through with his promise to convert to Catholicism, angering many of his subjects. He passed away in London’s Whitehall Palace on February 6, 1685.       
      </TabPanel>
      <TabPanel value={value} index={5}>
      Charles Ng is a Chinese American mass murderer who was sentenced to death after torturing and killing up to 25 people at Leonard Lake’s California ranch.
<h4> Who Is Charles Ng? </h4>
At 18, Charles Ng obtained a student visa to study in the United States. After joining the Marines he was caught stealing military weapons and served three years at Leavenworth. Upon his release, Ng moved in with Leonard Lake and the two began a campaign of abduction, rape and murder. Once caught, Ng was sent to San Quentin and sentenced to death.

<h4> Early Years </h4>
Charles Chitat Ng was born on December 24, 1960, in Hong Kong, China. The son of a wealthy businessman, Ng was a rebellious teenager who was frequently caught stealing and was expelled from several schools. At 18, Ng obtained a student visa to study in the United States, where he briefly attended the College of Notre Dame in Belmont, California, before dropping out. After being charged in relation to a hit-and-run offense, Ng lied about his birthplace and joined the Marines. Once again he was caught stealing, this time military weapons, and he served three years in Leavenworth Prison.

<h4> Meeting Leonard Lake and Murders </h4>
Upon his release, Ng moved in with Leonard Lake, a deviant whom he had met prior to serving at Leavenworth. He and Lake began a campaign of abduction, rape and murder based from Lake's remote cabin. Altogether, the bodies of seven men, three women, two baby boys and 45 pounds of bone fragments would be recovered from the cabin site.
The killings came to an end only through chance. Having broken the vise they were using to torture their victims, Lake and Ng drove into town to get a replacement. The clerk at the lumberyard spotted Ng trying to shoplift the vise and called the police. When they arrived, Ng had departed on foot. Upon being arrested, Lake gave the police the name of his partner and then swallowed two cyanide pills he had taped to the collar of his shirt. Ng, however, had disappeared.   
<h4> The Aftermath </h4> 
In Ng's absence, the police began to investigate Lake's cabin. In addition to the corpses and body parts, they also unearthed caches of weapons, personal effects from the victims and even videotapes of Lake and Ng raping and killing in their bunker.

It was Ng's habit of shoplifting that proved his undoing. Leaving a Calgary, Alberta, shop, Ng was challenged by security guards over grocery items in his bag. He drew a gun, and in the ensuing struggle one of the officers was shot in the hand. Canadian police charged him with robbery, attempted robbery, possession of a firearm and attempted murder. More importantly, U.S. authorities now knew where he was.    
<h4> Trial </h4>
After a protracted extradition, complicated by Ng's lies over his nationality, he was finally brought back to face trial in California in 1991. Ng tried everything to delay the trial, frequently firing his lawyers, changing the location of the trial and even applying to defend himself.

The trial finally took place in 1999 and lasted eight months. The jury deliberated for two weeks before finding Ng guilty of the murder of six men, three women and two baby boys. He was sentenced to death.

In 2001, a San Francisco judge found Ng and Lake responsible for the death of missing auto trader Paul Cosner. Ng is currently at San Quentin prison in California. No execution date has been set, as he is appealing his conviction.
      </TabPanel>
      <TabPanel value={value} index={6}>
      Serial killer Edmund Kemper killed six young women in the Santa Cruz, California, area and several members of his family.
<h4> Who Is Edmund Kemper? </h4>
Edmund Kemper, at age 15, killed both his grandparents to "see what it felt like." Upon release, he drifted, picking up and releasing female hitchhikers. But he soon stopped letting them go, killing six young women in the Santa Cruz, California, area in the 1970s. In 1973 he killed his mother and her friend before turning himself in.

<h4> Early Life </h4> 
Kemper was born on December 18, 1948, in Burbank, California, the middle child of E. E. and Clarnell Kemper. After his parents’ divorce in 1957, he moved with his mother and two sisters to Montana. Kemper had a difficult relationship with his alcoholic mother, as she was very critical of him, and he blamed her for all of his problems. When he was 10 years old, she forced him to live in the basement, away from his sisters, whom she feared he might harm in some way. 

Signs of trouble began to emerge early. Kemper had a dark fantasy life, sometimes dreaming about killing his mother. He cut off the heads of his sisters' dolls and even coerced the girls into playing a game he called "gas chamber," in which he had them blindfold him and lead him to a chair, where he pretended to writhe in agony until he "died." His first victims were the family cats. At ten he, buried one of them alive and the second, 13 year-old Kemper slaughtered with a knife. He went to live with his father for a time, but ended up back with his mother, who decided to send the troubled teenager to live with his paternal grandparents in North Fork, California.
<h4> Grandparents' Murder </h4>
Kemper hated living on his grandparents' farm. Before going to North Fork, he had already begun learning about firearms, but his grandparents took away his rifle after he killed several birds and other small animals. On August 27, 1964, Kemper finally turned his building rage on his grandparents. The 15-year-old shot his grandmother in the kitchen after an argument, and when his grandfather returned home, Kemper went outside and shot him by his car and then hid the body. 
Afterward, he called his mother, who told him to call the police and tell them what happened. Later, Kemper would say that he shot his grandmother "to see what it felt like." He added that he had killed his grandfather so that the man wouldn't have to find out that his wife had been murdered. For his crimes, Kemper was handed over to the California Youth Authority. He underwent a variety of tests, which determined that he had a very high IQ, but also suffered from paranoid schizophrenia. Kemper was eventually sent to Atascadero State Hospital, a maximum-security facility for mentally ill convicts.
<h4> Release </h4>
In 1969, Kemper was released at the age of 21. Despite his prison doctors' recommendation that he does not live with his mother, because of her past abuse and his psychological issues involving her, he rejoined her in Santa Cruz, California, where she had moved after ending her third marriage to take a job with the University of California. While there, Kemper attended community college for a time and worked a variety of jobs, eventually finding employment with the Department of Transportation in 1971. 

Kemper had applied to become a state trooper, but he was rejected because of his size — he weighed around 300 pounds and was 6 feet 9 inches tall, which led to his nickname “Big Ed.” However, he did hang around some of the Santa Cruz police officers. One gave him a training-school badge and handcuffs, while another let him borrow a gun, according to Whoever Fights Monsters by Robert K. Ressler and Tom Shachtman. Kemper even had a car that resembled a police cruiser. 

The same year he began working for the highway department, Kemper was hit by a car while out on his motorcycle. His arm was badly injured, and he received a $15,000 settlement in the civil suit he filed against the car’s driver. Unable to work, Kemper turned his mind toward other pursuits. He noticed a large number of young women hitchhiking in the area. In the new car he bought with some of his settlement money, Kemper began storing the tools he thought he might need to fulfill his murderous desires, including a gun, a knife and handcuffs. 
      </TabPanel>
    </div>
  );
}
