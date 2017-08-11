# Forge-Serverless-HelloWorld

This is the 'hello world' example for Forge viewer. It runs a Serverless NodeJS+[Express](http://expressjs.com/) application on AWS Lambda.  It uses ClaudiaJs to configure AWS API gateway automagically.

## Running the example

1. run `npm install` to grab the dependencies
3. run `npm run deploy` to send everything up to AWS Lambda

The second step will print out a URL you can use to access the express app.

## Updating the app

1. Change, say, [`app.js`](app.js)
2. (Optionally) use `npm install <PACKAGE NAME> -S` to install additional dependencies (always save them to `package.json` using `-S`)
3. Run `npm run update` to send the new version up to AWS. No need to generate the proxy again

## More information and limitations

See the [Running Express Apps in AWS Lambda](https://claudiajs.com/tutorials/serverless-express.html) tutorial.
