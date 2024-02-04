const express = require('express')
const {configDotenv} = require("dotenv")
const app = express()
const cors = require('cors')
require("dotenv").config()

const PORT = process.env.PORT || 8888

// Middleware
app.use(cors())
app.use(express.json())


// datperfect38
// 4OVH3dREXdzpEGpl

// MongoDB

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        // Database & Collection
        const menuCollections = client.db("datfood").collection("menus");
        const cartCollections = client.db("datfood").collection("cartItems")

        // All menu items operators
        app.get('/menu', async (req, res) => {
            const result = await menuCollections.find().toArray();
            res.send(result)
        })

        // All carts operator
        app.post('/carts', async (req, res) => {
            const cartItem = req.body;
            const result = await cartCollections.insertOne(cartItem);
            res.send(result)
        })

        // Get carts (using Email)
        app.get('/carts', async (req, res) => {
            const email = req.query.email;
            const filter = {email: email};
            const result = await cartCollections.find(filter).toArray();
            res.send(result)
        })

        // Get Specific carts
        app.get('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await cartCollections.findOne(filter);
            res.send(result)
        })

        // Delete items from carts
        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }; // Ensure ObjectId conversion
            const result = await cartCollections.deleteOne(filter);
            res.send(result);
        });

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})