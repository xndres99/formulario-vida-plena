
const { Router } =require('express');
const router=Router();

const admin=require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:'https://saludplena-2e1da-default-rtdb.firebaseio.com/'
});

const db=admin.database();




router.get('/', (req,res)=>{
    res.render('index')

});

router.post('/new-contact', (req, res) => {
   // console.log(req.body);

    const newContact = {
        edad:req.body.edad,
        sexo:req.body.sexo,
        tratamiento:req.body.tratamiento,
        fecha:req.body.fecha,
        tipoEnfermedad:req.body.tipoEnfer,
        contactoCovid:req.body.contactoCovid,
        tipoAtencion:req.body.tipoAtencion,
        zona:req.body.zona,
        secuelas:req.body.secuelas
    };
    db.ref('informacion').push(newContact);

    res.send('received');
});

module.exports = router;