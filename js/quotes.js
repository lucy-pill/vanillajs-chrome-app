const QUOTES = [
  {
    quote: 'In training, you listen to your body. In competition, you tell your body to shut up.',
    author: 'Rich Froning Jr.',
  },
  {
    quote: 'To be a champion, you must act like a champion.',
    author: 'Jamie Lewis',
  },
  {
    quote: 'You shall gain, but you shall pay with sweat, blood, and vomit.',
    author: 'Pavel Tsatsouline',
  },
  {
    quote: 'If something stands between you and your success, move it. Never be denied.',
    author: 'Dwayne ‘The Rock’ Johnson',
  },
  {
    quote: 'You have to push past your perceived limits, push past that point you thought was as far as you can go.',
    author: 'Drew Brees',
  },
  {
    quote: 'Discipline is the bridge between your bodybuilding goals and bodybuilding success.',
    author: 'Felicity Luckey',
  },
  {
    quote: 'If you think lifting weights is dangerous, try being weak. Being weak is dangerous.',
    author: 'Bret Contreras',
  },
  {
    quote: 'It’s hard to beat a person who never gives up.',
    author: 'Babe Ruth',
  },
  {
    quote: 'The pain of discipline is nothing like the pain of disappointment.',
    author: 'Justin Langer',
  },
  {
    quote: 'Take care of your body. It’s the only place you have to live.',
    author: 'Jim Rohn',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const min = Math.ceil(0);
const max = Math.floor(QUOTES.length);

const index  = Math.floor(Math.random() * (max - min) + min);
quote.innerText = QUOTES[index].quote;
author.innerText = QUOTES[index].author;
