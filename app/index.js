var http = require('http')
var express = require('express')
var morgan = require('morgan')
var mongo = require('mongodb').MongoClient
var winston = require('winston')

// Logging
winston.emitErrs = true
const logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			timestamp: true,
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
})

logger.stream = {
	write: function (message) {
		logger.debug(message.replace(/\n$/, ''))
	}
}

// Express and middlewares
const app = express()
app.use(
  // Log requests
	morgan(':method :url :status :response-time ms - :res[content-length]', {
		stream: logger.stream
	})
)

const MONGO_URL = 'mongodb://db:27017/users'

let db
if (MONGO_URL) {
	mongo.connect(MONGO_URL, null, function (err, db_) {
		if (err) {
			logger.error(err)
		} else {
			db = db_
		}
	})
}

app.use(function (req, res, next) {
	if (!db) {
		// Database not connected
		mongo.connect(MONGO_URL, null, function (err, db_) {
			if (err) {
				logger.error(err)
				res.sendStatus(500)
			} else {
				db = db_
				next()
			}
		})
	}

	next()
})

// Hello, World route
app.get('/', function (req, res) {
	res.send('Hello, World')
})

// Actual query
app.get('/users', function (req, res) {
	var collection = db.collection('users')
	collection.find().toArray(function (err, results) {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
			return
		}
		res.json(results)
	})
})

// Standalone server setup
var port = process.env.PORT || 8080
http.createServer(app).listen(port, function (err) {
	if (err) {
		logger.error(err)
	} else {
		logger.info('Listening on http://localhost:' + port)
	}
})
