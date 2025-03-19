import char1 from "@public/assets/character/user/toeflF.svg";
import char2 from "@public/assets/character/user/toeflM.svg";
import char3 from "@public/assets/character/user/ieltsF.svg";
import char4 from "@public/assets/character/user/ieltsM.svg";

export const charList = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    role: "TOEFL Specialist",
    src: char1,
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          {`Sarah Chen - TOEFL Writing & Reading Specialist "Hi! I'm Sarah, a 21-year-old Literature major at Columbia University. Being raised in three different countries made me fall in love with languages! I started tutoring when I noticed my classmates struggling with essays. My secret weapon? I turn boring grammar rules into fun stories (my famous 'pizza paragraph method' actually started as a late-night study session joke!). When I'm not tutoring or buried in books, I run a study blog where I share writing tips. My friends say I have this weird talent for making academic writing sound less scary"`}
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    role: "TOEFL Specialist",
    src: char2,
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          {`Marcus Rodriguez - TOEFL Speaking & Listening Expert "Hey! Marcus here, Broadcasting and Communications junior at NYU! I run our campus radio show 'Morning Buzz' and started helping international students with English after becoming friends with my exchange student roommate. Between radio shifts and classes, I host speaking clubs where we discuss everything from movies to memes. Fun fact: I learned my best teaching techniques from my experience in improv club! My motto? If you're not having fun while learning, you're doing it wrong!"`}
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    role: "IELTS Expert",
    src: char3,
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          {`Aisha Williams - IELTS Academic Trainer "Hello! I'm Aisha, third-year Linguistics student and total language nerd! I discovered my passion for teaching while helping my study group ace their IELTS. Being a part of the International Students Association opened my eyes to different learning styles. I love breaking down complex academic texts using social media analogies (wait till you hear how I explain cohesion using TikTok trends!). Currently juggling research assistant work with tutoring, but teaching English is honestly my stress relief!"`}
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    role: "IELTS Expert",
    src: char4,
    ctaText: "View More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          {`James Chen - IELTS Strategy Coach "James here, final year Education major with a minor in Psychology. After acing my own IELTS with a perfect score, I started helping other students crack the code. I'm that guy who creates detailed study schedules and test strategies for everyone in class (yes, I'm proudly Type A!). Between my classes and internship at the university's learning center, I've helped over 50 students improve their scores. My friends call me 'The Test Whisperer' - probably because I'm a bit obsessed with exam patterns!"`}
        </p>
      );
    },
  },
];
