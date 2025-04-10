import jdmArticle1 from './assets/r34.jpg';
import jdmArticle2 from './assets/stnace.jpg';
import jdmArticle3 from './assets/vs.jpg';

const articles = [
  {
    id: 1,
    name: "r34-skyline-gtr",
    title: "The Legend of the R34 Skyline GT-R",
    excerpt: "Why the R34 remains the holy grail for JDM enthusiasts worldwide",
    image: jdmArticle1,
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Legends",
    content: [
      "The Nissan Skyline GT-R R34 is arguably the most iconic JDM car of all time...",
      "Introduced in 1999, the R34 featured advanced technology like the ATTESA E-TS Pro all-wheel drive system...",
      "Its RB26DETT twin-turbo inline-6 engine became legendary for its tunability..."
    ]
  },
  {
    id: 2,
    name: "jdm-stance-culture",
    title: "The Art of JDM Stance",
    excerpt: "From bosozoku to VIP: Understanding Japanese car subcultures",
    image: jdmArticle2,
    date: "May 28, 2023",
    readTime: "6 min read",
    category: "Culture",
    content: [
      "Japanese car culture has developed unique styling movements...",
      "Bosozoku style features extreme modifications and flamboyant exhaust systems...",
      "VIP style focuses on luxury sedans with aggressive lowering and deep-dish wheels..."
    ]
  },
  {
    id: 3,
    name: "2jz-vs-rb26",
    title: "2JZ vs RB26: The Ultimate JDM Engine Showdown",
    excerpt: "Technical breakdown of Japan's most legendary powerplants",
    image: jdmArticle3,
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "Engineering",
    content: [
      "The Toyota 2JZ and Nissan RB26 are the two most revered Japanese engines...",
      "While the 2JZ is known for its iron block strength, the RB26 features a more advanced twin-turbo setup...",
      "Both engines regularly produce 1000+ horsepower in tuned applications..."
    ]
  }
];

export default articles;