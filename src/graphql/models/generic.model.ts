import { Field, ObjectType } from '@nestjs/graphql';
import {
	IAgeRelatedProcesses,
	IProteinClasses,
	ISelectionCriteria,
	ITimestampObject
}                            from 'common';

@ObjectType()
export class TimestampObject implements ITimestampObject
{
	@Field()
	changed: string;
	@Field()
	created: string;
}

@ObjectType()
export class ProteinClasses implements IProteinClasses
{
	@Field(() => String)
	public id: string;
	@Field(() => String)
	public name: string;
}

@ObjectType()
export class SelectionCriteria implements ISelectionCriteria
{
	@Field(() => String)
	public id: string;
	@Field(() => String)
	public name: string;
}

@ObjectType()
export class AgeRelatedProcesses implements IAgeRelatedProcesses
{
	@Field(() => String)
	public id: string;
	@Field(() => String)
	public name: string;
}
