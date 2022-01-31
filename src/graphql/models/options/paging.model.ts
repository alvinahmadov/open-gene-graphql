import { InputType, Field, Int }    from '@nestjs/graphql';
import { IPagingOptions, Nullable } from 'common';

@InputType()
export class PagingOptions implements IPagingOptions
{
	@Field(() => Int, Nullable)
	public page?: number;
	@Field(() => Int, Nullable)
	public pageSize?: number;
}
