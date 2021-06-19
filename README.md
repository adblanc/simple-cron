
# Simple cron

To simply build cron string using an expressive API


## Installation 

```bash 
  yarn add @ablanc/simple-cron

  # or using npm

  npm install @ablanc/simple-cron
```
    
## Usage/Examples

```js
const { every } = '@ablanc/simple-cron'

every(5).seconds() // */5 * * * * *
every(5).minutes() // */5 * * * *
every(5).hours()   // * */5 * * *
every(5).days()    // * * */5 * *
every(5).months()  // * * * */5 *
every(5).years()   // * * * * */5
```

  
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

  