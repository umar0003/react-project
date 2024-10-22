const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Серверро эҷод кунед
const app = express();
const PORT = 5000;

// Миёнаравҳо (middleware)
app.use(cors());
app.use(bodyParser.json());

// Пайвастшавӣ бо MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Сохтани модел
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    service: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

// Маршрут барои фиристодани маълумот
app.post('/contact', async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            service,
            message
        });
        await newContact.save();
        res.status(201).json({ message: 'Message saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Гӯш кардани сервер
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
