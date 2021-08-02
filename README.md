# Fuze Challenge

This project was developed to fulfill the challenge proposed by Fuze.

<hr>

## Steps to run this project:

<hr>

- Install git
```
sudo apt-get install git-all
```
- Clone this repo

```
git clone https://github.com/Spoock01/fuze-challenge.git
```
- Install Node and Yarn

```
sudo snap install node --classic
sudo npm install --global yarn
```

- Open the `backend` folder inside `fuze-challenge` folder and run:
```
yarn
```

- Open the `frontend` folder inside `fuze-challenge` folder and run:
```
yarn
```

- Run this command:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

<hr>

### Running the backend:

- Open the `backend` folder and run:

```
yarn dev
```

### Running the frontend:

- Open the `frontend` folder and run:

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## License
[MIT](https://choosealicense.com/licenses/mit/)