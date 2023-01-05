import express from 'express';
import fetch from "node-fetch";

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // const id = req.params.id
    const id = '96710367119';
    // res.send(id)
    fetch(`https://api.hubapi.com/content/api/v2/pages/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // res.render('index', { title: 'Express' });
            // res.render('index',{data:''});
            // console.log(data)
            res.send(data)
        })
        .catch(error => console.error(error));
    // res.render('index', { title: 'Express' });
});

export default router;