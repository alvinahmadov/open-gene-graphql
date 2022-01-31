import {
	ObjectType, CustomScalar,
	Field, Scalar
}                          from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

export class Term
{
	object: {
		n: number;
		string;
	};
}

@Scalar('Term', (type) => Term)
export class TermScalar implements CustomScalar<object, Term>
{
	description = 'Unknown';
	
	/**
	 * Parses value got from the client
	 * Used for mutations or input types
	 * */
	parseValue(value: object): Term
	{
		let term = new Term()
		
		term.object.n = value['n'];
		term.object.string = value['string'];
		return term;
	}
	
	/**
	 * Serializes value for sending to the client
	 * */
	serialize(value: Term): object
	{
		return new Object(value);
	}
	
	// TODO: Check for further development
	parseLiteral(ast: ValueNode): Term
	{
		if(ast.kind === Kind.OBJECT)
		{
			let term = new Term();
			for(const field of ast.fields)
			{
				if(field.value.kind === Kind.INT || field.value.kind === Kind.FLOAT)
				{
					term.object.n = Number(field.value.value);
				}
				else
				{
					term.object.string = field.value;
				}
			}
			return term;
		}
		return null;
	}
}

@ObjectType()
export class Terms
{
	@Field(() => [Term])
	biological_process: Term[];
	@Field(() => [Term])
	cellular_component: Term[];
	@Field(() => [Term])
	molecular_activity: Term[];
}
