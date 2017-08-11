'use strict'
const express = require('express')
const forge = require('forge-apis')
const app = express()


const FORGE_CLIENT_ID = "<insert forge id>";
const FORGE_CLIENT_SECRET = "<insert forge secret>";
const URN = "urn:<insert document id here>";

// gets oauth token from Forge API
const oAuth2TwoLegged = new forge.AuthClientTwoLegged(
	FORGE_CLIENT_ID,
	FORGE_CLIENT_SECRET,
	['viewables:read'])


// Send options as a javascript file to the viewer
app.get('/js/init.js', (req, res) => {
	oAuth2TwoLegged.authenticate().then( function(restoken) {
		res.send(` 
		options = {
			accessToken: "${restoken.access_token}",
			env: "AutodeskProduction",
			urn: "${URN}"
		};
		`);
		console.log(`ForgeToken: ${restoken.access_token}`);
	});
})

// handle static files
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

// to debug locally with nodejs ...
// app.listen(3000) // <--  uncomment this line, and run >node app.js

module.exports = app
