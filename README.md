## MAGIC SHOP: BTS QUOTES API 💜

Magic Shop can be a place of refuge for the heartbroken, a place of healing for the disturbed, and a place of love for those who are lonely. “Magic Shop” tries comforts ARMYs who are in pain.

| Method | URL | Description| Example|
|--- |--- |--- |--- | 
| GET | GET/quotes | returns all quotes from data  | https://magicshop-api.vercel.app/quotes
| GET| GET/quote/id/:id | returns the quote by the searched id | https://magicshop-api.vercel.app/quote/id/7
| GET| GET/quote/member/:member| returns the quote by the searched member (RM, Jin, SUGA, J-hope, Jimin, V & Jungkook) | https://magicshop-api.vercel.app/quote/member/Jungkook
| GET| GET/quote/random| returns a random quote | https://magicshop-api.vercel.app/quote/random

When the user makes a GET request to GET/quotes

- If there's an error in return the quotes from the data:
  * respond with HTTP status code 404.
  * return the following JSON object: 
  ~~~ 
  { Error: "Quote not found" } 
  ~~~
  
When the user makes a GET request to GET/quote/id/:id

- If there's an error in return the quotes from the data:
  * respond with HTTP status code 404.
  * return the following JSON object: 
  ~~~ 
  { Error: "Member not found" } 
  ~~~
  
## Run the project
 ```
# clone the repository
git clone https://github.com/dev-aclara/MagicShop-API

# enter project folder
cd magicshop

# install the dependencies
$ npm install 

# start the server
$ npm start

# browser access mode
accesss http://localhost:21262
```

## Developed by

Ana Clara Mansano Pereira, computer science studen UNIFAI - Adamantina, São Paulo

Inspiration: [BTS QUOTES API](https://github.com/oanhgle/bangtan-api)

<p align="center">
 <a href="https://www.linkedin.com/in/ana-clara-mansano-5051011ab/" target="_blank" rel="noopener noreferrer"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" alt="Python" height="40" style="vertical-align:top; margin:4px"></a>
 <a href="mailto:anacmans@outlook.com"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" alt="Python" height="40" style="vertical-align:top; margin:4px"></a>
</p>
  
