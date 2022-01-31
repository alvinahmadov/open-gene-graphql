import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IOrigin, Nullable }      from 'common';

@ObjectType()
export class Origin implements IOrigin
{
	@Field()
	public age: string;
	@Field(() => Int, Nullable)
	public id: number;
	@Field(() => Int, Nullable)
	public order: number;
	@Field()
	public phylum: string;
}
