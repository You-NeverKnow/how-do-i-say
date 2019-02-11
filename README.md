## What is this project?
An International Phonetic Symbol dictionary. Type an IPA symbol in the search box, or a list of symbols, and it will return a set of words they appear in. Currently, it does not have an IPA keyboard, but I plan to add it as soon as I get time from school. As of now, you might use http://ipa.typeit.org/full/. 

![](https://media.giphy.com/media/1P01VCSs34QCBS7nhb/giphy.gif)

## Rationale
My name written in English has non-standard character combinations. Moreover, these combinations are pronounced differently in the Indian English dialect. In International Phonetic Alphabet (IPA), its written as either "əðvəɪʔ" or "əðvaʔ".

So every time I had to introduce myself to someone, this conversation would take place: 
'Hi. I'm Advait.'
'Wait. How did you say that!?'
I would repeat myself, only to be met with even more confused looks.

First time this happened, I picked up words from English language that had pronunciations corresponding to phonemes in my name. So I would say A-d-v-a-i-t as in 
> 'a': first 'a' in again, alive  
> 'd': 'the' or 'th' in those.  
> 'va': 'va' in vain  
> 't': 't' in butter, or the Spanish 't' of burrito.  

While fun at first, it got pretty boring for me to introduce my name with same letter-word combinations every time. I wanted to switch things up, and come up with new words to express the pronunciation of my name. However, coming up with new words based on pronunciation was harder than I imagined. What I needed was a dictionary of IPA symbols. There wasn't one available online, so I created one myself. 

## How do I run it?
You will need to download the backend app from https://github.com/You-NeverKnow/how-do-i-say-server.
For prototyping, a subset of database is stored in `remaining-db` and `database.json` in `database/manual_db/` folder. The MongoDB schema looks like the one in `database.json`.
* Run the python script `convert-db-json.py` in that folder to generate the appropriate schema from `remaining-db`.
* Start a MongoDB server on port 27017 `mongod --db-path <folder of your choice>`.
* Run the express.js script from `database/` to add documents from `database.json` and `remaining.json` in `database/manual_db/` to the database.
* Start the express REST API server with `node app.js` from root folder. It will run on port 8000.

From this project,
* Start the frontend app by typing `yarn start` in the its directory. It will start the app on port 3000.

Doing forget to install dependencies with `yarn install` before doing any of above steps!

## Future work
- [ ] Pop-up IPA keyboard that works with React
- [ ] Tooptips for pronouncing each symbol
- [ ] Automation in creating index positions of an IPA symbol from word-IPA pairs
- [ ] Option to show more word examples for a character
- [ ] Animations, and better UI
- [ ] Multiple accent support. Right now the app returns symbols according to only American English accent.
- [ ] Support for dipthongs and long vowels.
