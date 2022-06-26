# Pic 'n Read - server
## What is this?
This repo is the basic server side for the [client application](https://github.com/NealLyonsWake/pic-n-read-client) that purely processes the API key for the 1st part of the image processing, image to text. This produces the appropriate credentials for the [Image to Text API](https://api-ninjas.com/api/imagetotext) by API Ninjas.

## How is it used?
This server is used by the Pic 'n Read client via a 'GET' request. It houses CORS in order to ensure the origin of the client is appropriately registerd with the Image to Text API.

## How can you run it in development?
1. Simply clone this repo
2. Ensure you register an account with [API Ninjas](https://api-ninjas.com/)
3. Change the name of the '.env_sample' file to '.env'
4. In the '.env' file, replace 'YOUR API KEY HERE' with your API key from you API Ninjas account
5. In your CLI type `npm run dev-start`