
# Canvas Api's

Api to create welcome and farewell images and image manipulation


## API Reference

#### Get welcome image

```http
  GET /api/maker/welcome
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Participant name |
| `gpname` | `string` | **Required**. Group name |
| `member` | `number` | **Required**. Member count |
| `pp` | `url` | **Required**. Profile url |
| `bg` | `url` | **Required**. Background url |

#### Get goodbay image

```http
  GET /api/maker/goodbay
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Participant name |
| `gpname` | `string` | **Required**. Group name |
| `member` | `number` | **Required**. Member count |
| `pp` | `url` | **Required**. Profile url |
| `bg` | `url` | **Required**. Background url |

## Demo

https://canvas-api.onrender.com/


## Deployment

To install all dependencies

```bash
  npm install
```

To run this project

```bash
  npm run start
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Authors

- [@DavidModzz](https://www.github.com/DavidModzz)

