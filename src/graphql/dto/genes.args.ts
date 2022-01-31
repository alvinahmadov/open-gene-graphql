import { Field, ArgsType } from '@nestjs/graphql';

import { Nullable } from 'common';
import {
	FilterOptions,
	PagingOptions,
	ESortOptions,
	ESortOrder
}                   from 'graphql/models';

@ArgsType()
export class SearchGenesArgs
{
	@Field(() => String, { defaultValue: "en" })
	lang: string;
	
	@Field(() => PagingOptions, Nullable)
	paging?: PagingOptions;
	
	@Field(() => FilterOptions, Nullable)
	filter?: FilterOptions;
	
	@Field(() => ESortOptions, { nullable: true, defaultValue: ESortOptions.Default })
	sortBy?: ESortOptions;
	
	@Field(() => ESortOrder, { nullable: true, defaultValue: ESortOrder.DESC })
	sortOrder?: ESortOrder;
}
