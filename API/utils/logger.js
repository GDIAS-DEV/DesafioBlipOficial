const { createLogger, transports, format } = require('winston');

// Configuração do logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
  ),
  transports: [
    new transports.Console(), // Log no console
    new transports.File({ filename: 'logs/app.log' }) // Log em arquivo
  ],
});

module.exports = logger;
