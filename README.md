# React + Redux + Webpack + Hapi + Mongoose Starter

Install:
```
git clone git@bitbucket.org:omnibusinc/react-redux-webpack-hapi-mongoose.git
cd react-redux-webpack-hapi-mongoose
npm install
```

Mongo setup
  * config options for mongo are defined in /config/server.config.development.js
  * Default database name is 'rrwhm'
  * Create a collection called 'examples'
  * Insert a document like: 
```
{
    "example" : "value from Mongo"
}
```

Running full app (API Server and SPA concurrently):
```
npm start
```

Running API Server ONLY (OSX):
```
npm run server
```

Running API Server ONLY (Windows):
```
npm run server
OR (because the above command isn't always reliable on Windows)
./rrwhm-start.sh
```

Running SPA ONLY:
```
npm run dev
```
