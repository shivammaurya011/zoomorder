const Location = require("../models/location.model")

const locationController = {
    addLocation: async(req, res)=>{
        try{
            const {area, city, country} = req.body
            const newLocation = new Location({
                area,
                city,
                country
            })
            await newLocation.save()
            res.status(201).json({ message: 'Location added successfully.' });
        }catch(error){
            console.error('Error in adding location controller:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getLocation: async(req, res)=>{
        try {
            const allLocation = await Location.find();
            res.status(200).json(allLocation);
          } catch (error) {
            console.error('Error in getAllLocation controller:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
}

module.exports = locationController