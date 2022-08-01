const express = require('express')
const ruta = express.Router();
const poha = require('../model/poha')
const dolencias_poha = require('../model/dolencias_poha');
const poha_planta = require('../model/poha_planta');


/*s
ruta.get('/getmedicinal/:iddolencias-:te-:mate-:terere-:idplanta', async (req, res) => {
    console.log("entra en get--------")
    console.log(req.params)
    try {
        var rspoha = await poha.findAll({
            include: [
                { model: poha_planta, },
                {
                    model: dolencias_poha, where: {
                        iddolencias: req.params.iddolencias,
                    }
                }
            ],
        })

        console.log("Sale en get--------")

        //console.log(rspoha)

        res.json(rspoha);

    } catch (error) {
        console.log(error)
    }
})
*/


ruta.get('/get/', async (req, res) => {
    const rs_poha = await poha.findAll({
        include: [
            { model: poha_planta },
            { model: dolencias_poha }
        ]
    });
    res.json(rs_poha);
})



ruta.get('/get/:idpoha', async (req, res) => {
    const rs_poha = await poha.findByPk(req.params.idpoha, {
        include: [
            { model: poha_planta },
            { model: dolencias_poha }
        ]
    });
    res.json(rs_poha);
})

ruta.post('/post/', async (req, res) => {
    try {
        const pohaguardado = await poha.create(req.body);
        const rs_poha = await poha.findByPk(pohaguardado.idpoha, {
            include: [
                { model: poha_planta },
                { model: dolencias_poha }
            ]
        });
        res.json(rs_poha);
    } catch (error) {
        console.log(error)
    }
})

ruta.put('/put/:idpoha', async (req, res) => {
    const rs_poha = await poha.update(req.body, { where: { idpoha: req.params.idpoha } });
    res.json(rs_poha);
})

ruta.delete('/delete/:idpoha', async (req, res) => {
    const rs_poha = await poha.destroy({ where: { idpoha: req.params.idpoha } });
    res.json(rs_poha);
})


module.exports = ruta;