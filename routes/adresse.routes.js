//* script qui sert à renseigner les routes spécifiques aux utilisateurs et à associer pour chaque route une méthode du controlleur importé à exécuter
// il sera importé dans le fichier d'entrée index.js

/// imports de module et scripts nécessaires
// import d'express qui servira à importe le router
const express = require('express');

const auth = require('../middleware/auth');

// import du controlleur spécifique
const adresseController = require("../controllers/addr_Ctrl");
// import du router d'express  pour permettre la navigation
const router = express.Router();


// routes
router.get('/utilisateurs', auth, adresseController.findByAccount);
router.get('/list', adresseController.fetchAll);
router.get('/detail/:id', adresseController.findById);
router.post('/register', auth, adresseController.create);
router.put('/update/:id', auth, adresseController.update);
router.delete('/delete/:id', auth,  adresseController.delete);


// exporter le router pour le rendre accessible
module.exports = router;
