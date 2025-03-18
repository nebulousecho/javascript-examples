// Randomly drafts wrestlers in the WWE 2K24 game into different brands.

const brands = ['raw', 'smackdown', 'nxt']; // The containers.

// The data:
const talent = [
  `AJ Styles`,
  `Akira Tozawa`,
  `Alba Fyre`,
  `Alexa Bliss`,
  `Andre Chase`,
  `Angel Garza`,
  `Angelo Dawkins`,
  `Apollo Crews`,
  `Ashante "Thee" Adonis`,
  `Asuka`,
  `Austin Theory`,
  `Axiom`,
  `Baron Corbin`,
  `Bayley`,
  `Becky Lynch`,
  `Bianca Belair`,
  `Big E`,
  `Blair Davenport`,
  `Bobby Lashley`,
  `Braun Strowman`,
  `Bron Breakker`,
  `Bronson Reed`,
  `Brooks Jensen`,
  `Brutus Creed`,
  `Butch`,
  `Cameron Grimes`,
  `Candice LeRae`,
  `Carmella`,
  `Carmelo Hayes`,
  `Cedric Alexander`,
  `Chad Gable`,
  `Channing “Stacks” Lorenzo`,
  `Charlotte Flair`,
  `Chelsea Green`,
  `Cody Rhodes`,
  `Cora Jade`,
  `Cruz Del Toro`,
  `Dakota Kai`,
  `Damian Priest`,
  `Damon Kemp`,
  `Dexter Lumis`,
  `Dijak`,
  `Dominik Mysterio`,
  `Drew Gulak`,
  `Drew McIntyre`,
  `Duke Hudson`,
  `Elton Prince`,
  `Erik`,
  `Fallon Henley`,
  `Finn Balor`,
  `Gigi Dolin`,
  `Giovanni Vinci`,
  `Grayson Waller`,
  `Gunther`,
  `Humberto`,
  `Ilja Dragunov`,
  `Indi Hartwell`,
  `Isla Dawn`,
  `Ivar`,
  `Ivy Nile`,
  `IYO SKY`,
  `Jacy Jayne`,
  `JD McDonagh`,
  `Jey Uso`,
  `Jimmy Uso`,
  `Jinder Mahal`,
  `Joaquin Wilde`,
  `Joe Coffey`,
  `Joe Gacy`,
  `Johnny Gargano`,
  `Josh Briggs`,
  `Julius Creed`,
  `Karl Anderson`,
  `Karrion Kross`,
  `Katana Chance`,
  `Kayden Carter`,
  `Kevin Owens`,
  `Kit Wilson`,
  `Kofi Kingston`,
  `LA Knight`,
  `Liv Morgan`,
  `Logan Paul`,
  `Ludwig Kaiser`,
  `Luke Gallows`,
  `Mark Coffey`,
  `Maxxine Dupri`,
  `Michin Mia Yim`,
  `Montez Ford`,
  `MVP`,
  `Natalya`,
  `Nathan Frazer`,
  `Nikki Cross`,
  `Nikkita Lyons`,
  `Noam Dar`,
  `Omos`,
  `Otis`,
  `Piper Niven`,
  `R-Truth`,
  `Randy Orton`,
  `Raquel Rodriguez`,
  `Rey Mysterio`,
  `Rhea Ripley`,
  `Ricochet`,
  `Ridge Holland`,
  `Robert Roode`,
  `Roman Reigns`,
  `Roxanne Perez`,
  `Sami Zayn`,
  `Sanga`,
  `Santos Escobar`,
  `Scarlett`,
  `SCRYPTS`,
  `Seth "Freakin" Rollins`,
  `Shayna Baszler`,
  `Sheamus`,
  `Shinsuke Nakamura`,
  `Shotzi`,
  `Solo Sikoa`,
  `Sonya Deville`,
  `Tamina`,
  `Tegan Nox`,
  `The Miz`,
  `Thea Hail`,
  `Tiffany Stratton`,
  `Tommaso Ciampa`,
  `Tony D'Angelo`,
  `Trick Williams`,
  `Tyler Bate`,
  `Valhalla`,
  `Veer Mahaan`,
  `Wendy Choo`,
  `Wes Lee`,
  `Wolfgang`,
  `Xavier Woods`,
  `Xia Li`,
  `Zelina Vega`,
  `Zoey Stark`,
];

// Initialize variables to track who has been picked, which roster they are assigned to, and which brand index we're on.
let selected = [];
let rosters = {};
let brandCount = 0;

// Function to select a random wrestler by index.
const getDraftedTalentIndex = () => {
  return Math.floor(Math.random() * talent.length);
}

// Initialize empty arrays for each brand in the "brands" object.
brands.map(brand => rosters[brand] = []);

// Loop through the list of wrestlers.
for (let i = 0; i < talent.length; i++) {
  let draftedTalentIndex = getDraftedTalentIndex(); // Get a random wrestler.
  
  while (selected.includes(talent[draftedTalentIndex])) { // If the wrestler has already been drafted...
    draftedTalentIndex = getDraftedTalentIndex();         // ...get another random wrestler, rinse, repeat. 
  }
  
  selected.push(talent[draftedTalentIndex]); // Add this wrestler to the array of wrestlers that have already been drafted.
  rosters[brands[brandCount]].push(talent[draftedTalentIndex]); // AND draft (add) this wrestler to their new brand.
  
  brandCount = (brandCount + 1) < brands.length ? brandCount + 1 : 0; // If we're on the last brand index, go back to 0, otherwise advance by 1.
}

console.log(rosters); // Console log the final list of wrestlers assigned to their brands.