import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IPagingOptions }         from 'common';

@ObjectType()
export class Pagination implements IPagingOptions
{
	@Field(() => Int)
	page: number
	@Field(() => Int)
	pageSize: number
	@Field(() => Int)
	pagesTotal: number
}
