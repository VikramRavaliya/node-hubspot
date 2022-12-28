import dotenv from 'dotenv';
import fetch from "node-fetch";


class UserController {

    create = async (req, res, next) => {
        // res.send(req.body)
        fetch(`https://api.hubapi.com/content/api/v2/pages`, {
            method: 'POST',
            body: JSON.stringify(
                req.body
            ),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                res.send('data insert successfully !')
            })
            .catch(error => console.error(error));
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
        const id = req.params.id
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
                // console.log(data)
                res.send(data)
            })
            .catch(error => console.error(error));
    }


}

export default new UserController;