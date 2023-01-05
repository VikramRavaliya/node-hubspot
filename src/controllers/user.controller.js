import dotenv from 'dotenv';
import fetch from "node-fetch";


class UserController {

    addPage = async (req, res, next) => {
        res.render('add', {
            name: '',
            author: '',
            key:''
        })
    };

    allPage = async (req, res, next) => {
        fetch(`https://api.hubapi.com/content/api/v2/pages`, {
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
                // console.log(data)
                res.send(data)
            })
            .catch(error => console.error(error));
    };

    getPage = async (req, res, next) => {
        // const id = req.params.id
        const id = 96710367119;
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
                // console.log(data)
                // res.send(data)
                // return res.status(200).send({ ...data });
                return Promise.resolve(data);
                // res.render('index', {data});
                next();
            })
            .catch(error => console.error(error));
    };

    create = async (req, res, next) => {
        // res.send('test')
        // let liveKey = req.body.liveKey;
        // let livePageId = req.body.livePageId;
        // let portalKey = req.body.portalKey;
        // console.log(liveKey,',', livePageId,',', portalKey)

        const data =  this.getPage(req);
        console.log(data)

        // fetch(`https://api.hubapi.com/content/api/v2/pages`, {
        //     method: 'POST',
        //     body: JSON.stringify(
        //         req.body
        //     ),
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        //     },
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         // console.log(data)
        //         res.send('data insert successfully !')
        //     })
        //     .catch(error => console.error(error));
    };


}

export default new UserController;