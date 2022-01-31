import { Scalar }          from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

export class AssociatedDisease
{
	constructor(disease: any = null)
	{
		if(disease)
		{
			this.icdId = disease['icdId'];
			this.icdName = disease['icdName'];
			this.name = disease['name'];
		}
	}
	
	public icdId: string;
	public icdName: string;
	public name: string;
}

export class AssociatedDiseaseCategory
{
	constructor(adc: object = null)
	{
		if(adc && adc.hasOwnProperty('icdCategoryName'))
		{
			this.icdCategoryName = adc['icdCategoryName'];
		}
	}
	
	public icdCategoryName: string = "";
}

export class AssociatedDiseases
{
	[n: string]: AssociatedDisease;
}

export class AssociatedDiseaseCategories
{
	[categoryIcdCode: string]: AssociatedDiseaseCategory;
}

@Scalar('AssociatedDiseases', (type) => AssociatedDiseases)
export class AssociatedDiseasesScalar
{
	description = 'List of associated diseases';
	
	/**
	 * Parses value got from the client
	 * Used for mutations or input types
	 * */
	parseValue(value: object): AssociatedDiseases
	{
		let ad = new AssociatedDiseases()
		
		for(const [k, v] of Object.entries(value))
		{
			ad[k] = new AssociatedDisease(v);
		}
		
		return ad;
	}
	
	/**
	 * Serializes value for sending to the client
	 * */
	serialize(value: AssociatedDiseases): object
	{
		return new Object(value);
	}
	
	// TODO: Implement for further development
	parseLiteral(ast: ValueNode): AssociatedDiseases
	{
		if(ast.kind === Kind.OBJECT)
		{
			let ad = new AssociatedDiseases();
			
			for(const field of ast.fields)
			{
				console.debug({
					              scalar:   'AssociatedDiseaseCategories',
					              astField: field,
					              type:     typeof (field)
				              });
			}
			
			return ad;
		}
		return null;
	}
}

@Scalar('AssociatedDiseaseCategories', (type) => AssociatedDiseaseCategories)
export class AssociatedDiseaseCategoriesScalar
{
	description = 'Categories of associated disease';
	
	/**
	 * Parses value got from the client
	 * Used for mutations or input types
	 * */
	parseValue(value: object): AssociatedDiseaseCategories
	{
		let adc = new AssociatedDiseaseCategories()
		
		for(const [k, v] of Object.entries(value))
		{
			adc[k] = new AssociatedDiseaseCategory(v);
		}
		
		return adc;
	}
	
	/**
	 * Serializes value for sending to the client
	 * */
	serialize(value: AssociatedDiseaseCategories): Object
	{
		return new Object(value); // value sent to the client
	}
	
	// TODO: Implement for further development
	parseLiteral(ast: ValueNode): AssociatedDiseaseCategories
	{
		if(ast.kind === Kind.OBJECT)
		{
			let ad = new AssociatedDiseaseCategories();
			
			for(const field of ast.fields)
			{
				console.debug({
					              scalar:   'AssociatedDiseaseCategories',
					              astField: field,
					              type:     typeof (field)
				              });
			}
			
			return ad;
		}
		return null;
	}
}
