# API Micro Service: URL Shortener Microservice

## Description

This project is part of the **FCC Apis And Microservices Certification**.

## User stories

1. I can `POST` a _URL_ to <https://fcc-url-shortener-api-project.herokuapp.com/api/shorturl/new> and I will receive a shortened _URL_ in the `JSON` response.
   Example : `{ "original_url": "http://www.google.com", "short_url": "https://fcc-url-shortener-api-project.herokuapp.com/api/shorturl/fnTIVrbAh" }`
2. If I pass an **invalid** _URL_ that doesn't follow the `http(s)://www.example.com(/more/routes)` format, the `JSON` response will contain an error like `{"error":"invalid URL"}`
   _HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module._
3. When I visit the shortened _URL_, it will redirect me to my original link.

## Short URL Creation

example: `POST` <https://fcc-url-shortener-api-project.herokuapp.com/api/shorturl/new> - `https://www.google.com`

Coded with music, coffe and love by _Claudio Cortese_
