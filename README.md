# heroku training

## point

app.js

```js
process.env.PORT || 3000
```

package.json

```json
  "engines": {
    "node": "9.11.1",
    "npm":  "5.6.0"
  }
```

Procfile

```
web: node app.js
```

## command

```bash
heroku login
# ssh-keygen -t rsa -C "xxxxx@gmail.com"
# heroku keys:add ~/.ssh/id_rsa_heroku.pub
heroku create app-sample

git remote add heroku git@github.com:high-u/heroku-node-deploy-training.git
git push heroku master
heroku open
```
