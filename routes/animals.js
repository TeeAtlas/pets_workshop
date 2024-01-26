import express from "express";

const pets = {
    dogs: [
      {
        name: 'Spot',
        age: 2,
        breed: 'Dalmatian',
        description: 'Spot is an energetic puppy who seeks fun and adventure!',
        url: 'https://placedog.net/500/280',
      },
      {
        name: 'Shadow',
        age: 4,
        breed: 'Border Collie',
        description:
          'Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!',
        url: 'https://placedog.net/540/205',
      },
    ],
    cats: [
      {
        name: 'Snowflake',
        age: 1,
        breed: 'Tabby',
        description:
          'Snowflake is a playful kitten who loves roaming the house and exploring.',
        url: 'http://placekitten.com/500/500',
      },
    ],
    // rabbits: [
    //   {
    //     name: 'Easter',
    //     age: 4,
    //     breed: 'Mini Rex',
    //     description:
    //       'Easter is a sweet, gentle rabbit who likes spending most of the day sleeping.',
    //     url: 'https://loremflickr.com/320/240/rabbit?lock=7',
    //   },
    // ],
  };

const animalsRouter = express.Router();
const petEmojis = {
    dogs: '🐶',
    cats: '🐱',
    rabbits: '🐰',
};

animalsRouter.get('/:pet_type', (req, res) => {
    const petType = req.params.pet_type;
    const petData = pets[petType];

    if (!petData) {
        const emoji = petEmojis[petType] || '🐾'; //set paw emoji as default
        res.status(404).send(`<h1>Currently no ${emoji} ${petType} available, but please come back soon😊!</h1>`)
    } else {
        let html = `<h1>List of ${petType}</h1>`;
        html += '<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">';
        petData.forEach((pet, index) => {
            html += `<div style="margin: 10px; text-align: center;">
                        <a href="${pet.url}" style="text-decoration: none;"><h2>${pet.name}</h2></a><br>
                        <div style="width: 20em; object-fit: cover; overflow: hidden;">
                            <img src="${pet.url}" alt="${pet.name}" style="width: 100%; height: 100%;">
                        </div><br>
                        Age: ${pet.age}<br>
                        Breed: ${pet.breed}<br>
                        Description: ${pet.description}    
                    </div>`;
        });
        html += '</div>';
        res.send(html);
        console.log(html)
    }
});

animalsRouter.get('/:pet_type', (req, res) => {
    const petType = req.params.pet_type;
    const petData = pets[petType];

    if (!petData) {
        res.status(404).send(`<h1>Currently no ${petType} available, but please come back soon &#x1F600;!</h1>`)
    } else {
        let html = `<h1>List of ${petType}</h1>`;
        html = html + '<ul style="list-style-type: none">';
        petData.forEach((pet, index) => {
            html += `<li><a href="/animals/${petType}/${index}" style="text-decoration: none;">${pet.name}</a><br><img src="${pet.url}" alt="${pet.name}" style="width: 200px;"></li>`;
        });
        html = html + '</ul>';
        res.send(html);
        console.log(html)
    }
})

export default animalsRouter;