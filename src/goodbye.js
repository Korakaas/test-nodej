const { bye } = require('../service/greetings')

const goodbye = () => {
  return bye('Bob')
}

module.exports = goodbye
