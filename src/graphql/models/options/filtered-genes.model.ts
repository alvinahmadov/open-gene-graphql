import { Field, ObjectType } from '@nestjs/graphql';
import { Pagination }        from './pagination.model';

@ObjectType()
export class FilteredGenesOptions
{
	@Field()
	objTotal: number;
	@Field(() => Pagination)
	pagination: Pagination;
}
