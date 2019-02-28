const express = require('express')
const router = new express.Router()
const config = require('../../config.json')
const cors = require('cors')
const request = require('request')
const fetch = require('node-fetch')

router.get('/sources', cors(), async (req, res) => {
  let apiUrl = new URL(config.newsApi.apiUrl + 'sources?language=en&country=us')

  await fetch(apiUrl, {
    method: 'GET',
    time: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'apikey ' + config.newsApi.apiKey
    }
  })
    .then(response => {
      res.status(response.status)
      response.json().then(result => {
        res.json(result)
      })
    })
    .catch(error => {
      console.log(error)
    })
})

// router.get("/everything", cors(), (req, res) => {
//   try {
//     console.log(new Date().getSeconds());
//     request(
//       {
//         method: "get",
//         url: config.newsApi.apiUrl + "everything?",
//         headers: {
//           Authorization: "apikey " + config.newsApi.apiKey
//         },
//         qs: req.query,
//         json: true
//       },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           console.error(body.message);
//           return res.status(response.statusCode).json(body);
//         }
//         res.status(response.statusCode).json(body);
//       }
//     );
//     console.log(new Date().getSeconds());
//   } catch (error) {
//     console.error(error);
//   }
// });

router.get('/everything', cors(), async (req, res) => {
  let apiUrl = new URL(config.newsApi.apiUrl + 'everything?')
  if (req.query) {
    apiUrl.search = new URLSearchParams(req.query)
  }
  await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'apikey ' + config.newsApi.apiKey
    }
  })
    .then(response => {
      res.status(response.status)
      response.json().then(result => {
        res.json(result)
      })
    })
    .catch(error => {
      console.log(error)
    })
})
router.get('/top-headlines', cors(), async (req, res) => {
  let apiUrl = new URL(config.newsApi.apiUrl + 'top-headlines?')
  if (req.query) {
    apiUrl.search = new URLSearchParams(req.query)
  }
  await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'apikey ' + config.newsApi.apiKey
    }
  })
    .then(response => {
      res.status(response.status)
      response.json().then(result => {
        res.json(result.articles)
      })
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router
