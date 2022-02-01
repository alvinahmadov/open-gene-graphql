import { Scalar }          from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

export class Orthologs
{
	[p: string]: string
}

@Scalar('Orthologs', (type) => Orthologs)
export class OrthologsScalar
{
	description = 'Orthologs';
	
	/**
	 * Parses value got from the client
	 * Used for mutations or input types
	 * */
	parseValue(value: object): Orthologs
	{
		let orthologs = new Orthologs()
		
		for(const [k, v] of Object.entries(value))
		{
			orthologs[k] = v.toString();
		}
		
		return orthologs;
	}
	
	/**
	 * Serializes value for sending to the client
	 * */
	serialize(value: Orthologs): object
	{
		return new Object(value);
	}
	
	// TODO: Implement for further development
	parseLiteral(ast: ValueNode): Orthologs
	{
		if(ast.kind === Kind.OBJECT)
		{
			let orthologs = new Orthologs();
			
			for(const field of ast.fields)
			{
				console.debug({
					              scalar:   'OrthologsScalar',
					              astField: field,
					              type:     typeof (field)
				              });
			}
			
			return orthologs;
		}
		return null;
	}
}
