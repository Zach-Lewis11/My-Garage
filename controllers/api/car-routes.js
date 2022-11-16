const router = require('express').Router();
const { Cars } = require('../../models');


// Add a new car to users garage
router.post('/car', async (req, res) => {
    try {
      const dbCarData = await Cars.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        user_id: req.body.user_id,
      });
  
      res.status(200).json(dbCarData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Delete a car from users garage
router.delete('/:id', async (req, res) =>{
    try {
        const carData = await Cars.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!carData) {
            res.status(404).json({ message: 'No car found with this id!' });
            return;
          }
        res.status(200).json(carData);
    } catch (err) {
        res.status(500).json(err);
    } 
});