const express = require("express");
const Mixpanel = require('mixpanel');
const cors = require("cors");

const mixpanel = Mixpanel.init('543892648c352a75e1d29129f2843747');

// track an event with optional properties


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    mixpanel.track('Fuck off Event', {
        distinct_id: "trial@outlook.com"
    });

    res.send("Event")
});

app.get("/create", (req, res) => {
    mixpanel.alias('trial@outlook.com');

    mixpanel.people.set('last@outlook.com', {
        $first_name: 'Last',
        $last_name: 'LAst',
        $email: 'last@outlook.com',
        $region: 'WEST-Africa',
        age: "90",
        $country_code: '+234',
        $created: (new Date('Jul 26 2021')).toISOString(),
        plan: 'free',
    });
    
    // mixpanel.identify('trial@outlook.com');

    // mixpanel.people.delete_user("11111%$%C2%A31113%$%C2%A39874647uk*&^");
    res.send("React")
})

const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on Port${PORT}`));
