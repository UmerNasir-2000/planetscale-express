import { pino } from 'pino';

const logger = pino({
    transport: {
      target: 'pino-pretty'
    },
    level: 'info',
    timestamp: true,
});

export default logger;