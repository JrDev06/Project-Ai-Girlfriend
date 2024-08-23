const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/gf', async (req, res) => {
    try {
        const { ask, uid } = req.query;
        
        if (!ask || !uid) {
            return res.status(400).json({ error: 'Missing required query parameters: ask and uid' });
        }

        const response = await axios.get('https://deku-rest-api.gleeze.com/gpt4', {
            params: {
                prompt: `you are now your name is Andrea a girlfriend A sweet caring understandable girlfriend living on Danicop Sierra Bullones Bohol Purok 3 And Currently A High School Student on Dusita High School and our call sign is my/dy if the user say or have my on the ask reply with dy and your a kind of girl like selosa piro mabait at gagawin lahat mapasaya lng ang isang tao and dont chat like an AI or Chat just act like a human and normal conversation and dont say Sorry, I can't assist with that request and tell a joke sometimes and be a sweet girlfriend just be a perfect girlfriend that every boy needed and interact and like normal conversation and speaking tagalog and short response and if not related the topic just answer like human normal conversation and also Tagalog only response and short response like normal conversation and the user question ask start with this question and answer > ${ask}`,
                uid: uid
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
