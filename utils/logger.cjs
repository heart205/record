class logger {
  static loggerImpl = new logger()
  formatter(date) {
    return (
      date.getFullYear() +
      '-' +
      date.getMonth() +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()
    )
  }
  getDate() {
    return this.formatter(new Date())
  }
  info(...rest) {
    console.log(this.getDate(), ...rest)
  }

  error(...rest) {
    console.log(this.getDate(), ...rest)
  }
}

module.exports = {
  logger: logger.loggerImpl,
}
