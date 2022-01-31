import { cleanEnv, str, bool, ValidatorSpec } from 'envalid';

require('dotenv').config({ path: '.env' });

export type Environments = 'production' | 'development' | 'test';

export interface Environment
{
	// Development environment
	isDev: boolean;
	// Testing environment
	isTest: boolean;
	// Production environment
	isProd: boolean;
	
	NODE_ENV: Environments;
	
	// Exposed hostname (e.g. localhost)
	HOST: string;
	// Exposed port (e.g. 5500)
	PORT: string;
	
	// Open Gene API endpoint for service
	OPENGENE_API_ENDPOINT: string;
	
	// Path to the logging and temporary
	// files
	LOG_PATH: string;
	
	// Languages that supported by the service,
	// separated by comma in .env file
	AVAILABLE_LOCALES: string;
	
	// Level of log messages on core module
	LOG_LEVEL?: string;
	
	// Apollo Service
	APOLLO_KEY?: string;
	APOLLO_GRAPH_ID?: string;
	APOLLO_GRAPH_VARIANT?: string;
	APOLLO_SCHEMA_REPORTING: boolean;
}

export const env: Readonly<Environment> = cleanEnv(
		process.env,
		{
			isProd:   bool({ default: false }),
			NODE_ENV: str({
				              choices: ['production', 'development', 'test'],
				              default: 'development'
			              }) as ValidatorSpec<Readonly<Environment>['NODE_ENV']>,
			
			HOST: str({ default: 'http://localhost' }),
			PORT: str({ default: '5500' }),
			
			OPENGENE_API_ENDPOINT: str({}),
			
			AVAILABLE_LOCALES: str({ default: '' }),
			
			LOG_PATH:   str({ default: './tmp/logs' }),
			LOG_LEVEL:  str({
				                choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
				                default: 'error'
			                }),
			APOLLO_KEY: str({
				                desc:
						                'Apollo Engine Key (optional, see https://www.apollographql.com/docs/platform/schema-registry)',
				                default: ''
			                }),
			
			APOLLO_GRAPH_ID:      str({
				                          desc:    'Apollo graph id',
				                          default: ''
			                          }),
			APOLLO_GRAPH_VARIANT: str(
					{ default: 'current' }
			),
			
			APOLLO_SCHEMA_REPORTING: bool({ default: false }),
			
		}
);
