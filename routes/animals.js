import express from "express";
import { pets } from "./pets.js"

const animalsRouter = express.Router();
const petEmojis = {
    dogs: '🐶(uncomment code to see dogs)',
    cats: '🐱(uncomment code to see cats)',
    rabbits: '🐰 (uncomment code to see rabbits)',
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
                        <div style="width: 100%; object-fit: cover; overflow: hidden;">
                            <img src="${pet.url}" alt="${pet.name}">
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