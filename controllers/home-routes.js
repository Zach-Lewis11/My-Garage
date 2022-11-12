const router = require('express').Router();
const { User, Cars } = require('../models');

// GET all users for homepage
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: Cars,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user
router.get('/user/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbUserData = await User.findByPk(req.params.id, {
        include: [
          {
            model: Cars,
            attributes: [
              'id',
              'make',
              'model',
              'year',
            ],
          },
        ],
      });
      const user = dbUserData.get({ plain: true });
      res.render('user', { user, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one car
router.get('/car/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbCarsData = await C.findByPk(req.params.id);

      const car = dbPaintingData.get({ plain: true });

      res.render('car', { car, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;