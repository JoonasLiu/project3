const express = require('express')
const router = express.Router()
const Henkilo = require('../models/henkilo')


//Listataan kaikki henkilöt
router.get('/getall', async (req, res) => {
    try {
        const henkilot = await Henkilo.find()
        res.json(henkilot)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

//Listataan yksi henkilö
 router.get('/:id', getHenkilo, (req, res) => {
    res.json(res.henkilo)
})

//Luodaan uusi henkilö
router.post('/add', async (req, res) => {
    const henkilo = new Henkilo ({
        name: req.body.name,
        whyHyva: req.body.whyHyva
    })
    try {
        const newHenkilo = await henkilo.save()
        res.status(201).json(newHenkilo)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})

//Muokataan henkilön kenttää
router.patch('/update/:id', getHenkilo, async (req, res) => {
    if (req.body.name != null) {
        res.henkilo.name = req.body.name
    }
    if (req.body.whyHyva != null) {
        res.henkilo.whyHyva = req.body.whyHyva
    }
    try {
        const updatedHenkilo = await res.henkilo.save()
        res.json(updatedHenkilo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Poistetaan henkilö       
router.delete('/delete/:id', getHenkilo, async (req, res) => {
   try {
    await res.henkilo.remove()
    res.json({ message: 'Deleted Henkilo' })
   } catch (err) {
    res.status(500).json({ message: err.message })
   }
})

//Hakee henkilön id:n perusteella tietokannasta
async function getHenkilo(req, res, next) {
    try {
        henkilo = await Henkilo.findById(req.params.id)
        if (henkilo == null) {
            return res.status(404).json({ message: 'Cannot find henkilo'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.henkilo = henkilo
    next()
}

module.exports = router