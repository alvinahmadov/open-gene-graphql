import { Module }        from '@nestjs/common';
import { HttpModule }    from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { join }          from 'path';

import { RESOLVERS } from 'graphql/resolvers';
import { SCALARS }   from 'graphql/models';
import { SERVICES }  from 'services';

@Module({
	        imports:   [
		        HttpModule,
		        GraphQLModule.forRoot({
			                              autoSchemaFile: join(process.cwd(), 'schema.gql'),
			                              sortSchema:     false,
			                              debug:          true,
			                              playground:     true,
		                              }),
	        ],
	        providers: [...SERVICES, ...SCALARS, ...RESOLVERS],
        })
export class AppModule {}
