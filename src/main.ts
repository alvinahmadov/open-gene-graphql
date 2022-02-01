import { LogLevel }    from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule }   from './app.module';
import { env }         from './env';

function toNestLogLevel(level: string): LogLevel
{
	switch(level)
	{
		case "trace":
			return "verbose";
		case "info":
			return "log";
		case "debug":
			return "debug";
		case "error":
		case "fatal":
			return "error";
		case "warn":
			return "warn";
		default:
			return "log";
	}
}

async function bootstrap()
{
	const app = await NestFactory.create(AppModule, {
		logger: [toNestLogLevel(env.LOG_LEVEL)]
	});
	await app.listen(env.PORT, env.HOST);
}

bootstrap().catch(err => console.debug(err));
