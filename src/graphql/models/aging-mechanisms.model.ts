import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IAgingMechanisms }       from 'common';

@ObjectType()
export class AgingMechanisms implements IAgingMechanisms
{
	@Field(() => Int)
	public id: string;
	@Field()
	public name: string;
}
