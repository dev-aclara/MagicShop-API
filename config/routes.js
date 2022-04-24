const express = require('express');
const routes = express.Router();

let data = [
    { id: 1, quote: "I do believe your galaxy", source: "Lyrics - Magic Shop", member:"RM" },
    { id: 2, quote: "It's okay to believe, the Magic Shop will comfort you", source: "Lyrics - Magic Shop", member:"Jimin"},
    { id: 3, quote: "I want to take away your sadness, and pain", source: "Lyrics - Magic Shop", member:"SUGA"},
    { id: 4, quote: "Even all the scars from your mistakes make up your constellation", source: "Lyrics - Answer: Love Myself ", member:"Jimin" },
    { id: 5, quote: "Don't disappear 'cause you're a big existence", source: "Lyrics - Mikrokosmos", member:"RM & SUGA" },
    { id: 6, quote: "Erase all sad memories, hold my hand and smile", source: "Lyrics - 2!3!", member:"Jungkook" },
    { id: 7, quote: "I will be by your side... More brightly in the dark night", source: "Lyrics - Moon", member:"Jin" },
    { id: 8, quote: "Please stay, please stay there a little longer", source: "Lyrics - Spring Day", member:"Jin" },
    { id: 9, quote: "I'm the one I should love in this world", source: "Lyrics - Epiphany", member:"Jin" },
    { id: 10, quote: "Forever, we are young", source: "Lyrics - Young Forever", member:"BTS" },
    { id: 11, quote: "Even when I fall and hurt myself I keep running towards my dream", source: "Lyrics - Epilogue: Young Forever", member:"Jin" },
    { id: 12, quote: "We're too young and immature to give up, you idiot", source: "Lyrics - INTRO : Never Mind", member:"SUGA" },
    { id: 13, quote: "It's alright to stop", source: "Lyrics - Paradise", member:"V" },
    { id: 14, quote: "It's alright to not have a dream", source: "Lyrics - Paradise", member:"Jungkook & Jimin" },
    { id: 15, quote: "Who says a dream must be something grand", source: "Lyrics - Paradise", member:"RM" },
    { id: 16, quote: "Stop runnin' for nothin' my friend", source: "Lyrics - Paradise", member:"BTS" },
    { id: 17, quote: "Go your own way Even if you live one day", source: "Lyrics - No More Dream", member:"J-Hope" },
    { id: 18, quote: "Just go, I wanna live right now", source: "Lyrics - So What", member:"RM" },
    { id: 19, quote: "In the moment you want to give up shout out louder So what", source: "Lyrics - So What", member:"J-Hope" },
    { id: 20, quote: "We are connected by sound", source: "Lyrics - Lights", member:"Jin" },
    { id: 21, quote: "We can walk forward without fear, you & I", source: "Lyrics - Lights", member:"V" },
    { id: 22, quote: "No one is perfect", source: "Lyrics - Lights", member:"Jungkook" },
    { id: 23, quote: "But it's okay sometimes so show weakness", source: "Lyrics - Lights", member:"Jimin" },
    { id: 24, quote: "It's okay to be you", source: "Lyrics - Lights", member:"Jungkook" },
    { id: 25, quote: "Don't lie to yourself any more", source: "Lyrics - Lights", member:"Jungkook" },
    { id: 26, quote: "No matter how far apart we are your light shines on me", source: "Lyrics - Lights", member:"Jimin & Jungkook" },
    { id: 27, quote: "You got me", source: "Lyrics - Mikrokosmos", member:"Jimin" },
    { id: 28, quote: "You shine brighter than anyone else", source: "Lyrics - Mikrokosmos", member:"SUGA" },
    { id: 29, quote: "I got you", source: "Lyrics - Mikrokosmos", member:"Jin" },
    { id: 30, quote: "Shine, dream, smile", source: "Lyrics - Mikrokosmos", member:"BTS" },
    { id: 31, quote: "With you I'mma feel rich", source: "Lyrics - Home", member:"Jungkook" },
    { id: 32, quote: "With you, anywhere will be my home", source: "Lyrics - Home", member:"Jimin" },
    { id: 33, quote: "Your love your love your love, I want that", source: "Lyrics - Home", member:"Jungkook" },
    { id: 34, quote: "We are we are together, bulletproof", source: "Lyrics - We Are Bulletproof: The Eternal", member:"V" },
    { id: 35, quote: "Yeah we are not seven, with you", source: "Lyrics  - We Are Bulletproof: The Eternal", member:"Jungkook" },
    { id: 36, quote: "It all passes, someday, for sure, certainly", source: "Lyrics - (everythingoes) ft. Nell", member:"RM" },
    { id: 37, quote: "Everything goes", source: "Lyrics - (everythingoes) ft. Nell", member:"RM" },
    { id: 38, quote: "You are the reason that i smile everyday. So i hope i am your reason to smile as well", source: "Final speech PTD Vegas", member:"Jungkook" },
    { id: 39, quote: "What I really want to tell you all is that I’m so happy these days. I’m happy because of you guys", source: "Final speech PTD Vegas", member:"Jimin" },
    { id: 40, quote: " Rather be dead than cool (I'd rather die than live without passion). That's my life motto", source: "Interview", member:"Jungkook" },
    { id: 41, quote: "Let us forgive ourselves", source: "Fancafe 150827", member:"RM" },
    { id: 42, quote: "Having someone who believes in you like that is in itself a good thing", source: "Agust D - Skit", member:"SUGA" },
    { id: 43, quote: "Never forget to cherish yourself", source: "Jin, BE Concept Photo", member:"Jin" },
    { id: 44, quote: "I live so I love", source: "Lyrics - Trivia 承: Love", member:"RM" },
    { id: 45, quote: "We were always meant to be", source: "Lyrics - Trivia 承: Love", member:"RM" },
    { id: 46, quote: "Live however you want, it's your life anyway", source: "Lyrics - Trivia 承: Love", member:"Jungkook" },
    { id: 47, quote: "You should be your light", source: "Lyrics - 약속 (Promise)", member:"Jimin" },
    { id: 48, quote: "You are the leader of your own life", source: "BTS Dear Class of 2020", member:"J-Hope" },
    { id: 49, quote: "I want to walk this path with you", source: "Lyrics -  Still With You", member:"Jungkook" },
    { id: 50, quote: "My heart is beating 'cause of you", source: "Lyrics - With you", member:"Jimin" },
]


// returns all quotes from data 
routes.get('/quotes', (req, res) => {
    res.status(200).json(data);
})

//returns the quote by the searched id
routes.get("/quote/id/:id",  (req, res) => {
    const quote = data.find((quote) => parseInt(quote.id) === parseInt(req.params.id));

    if (!quote) {
        return res.status(404).json({ Error: "Quote not found" });
    }
    return res.status(200).json({
        //Spread syntax
        ...quote,
    });
});

// returns the quote by the searched member (RM, Jin, SUGA, J-hope, Jimin, V & Jungkook)
routes.get("/quote/member/:member",  (req, res) => {
    const findMember = req.params.member;
    let quotes = data.filter((bts) => bts.member === findMember);
  
    if (!quotes.length){
        return res.status(404).json({ Error: "User not found" });
    }
    quotes = quotes.map((bts) => bts.quote);
  
    return res.status(200).json(quotes);
  });

// returns a random quote
routes.get("/quote/random", (req, res) => {
    const random = data[Math.floor(Math.random() * data.length)];
    res.status(200).json({
        id: random.id, 
        quote: random.quote, 
        source: random.source, 
        member: random.member 
    });
  });

module.exports = routes