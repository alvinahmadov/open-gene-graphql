import { InputType, Field } from '@nestjs/graphql';
import { IFilterOptions }   from 'common';

@InputType()
export class FilterOptions implements IFilterOptions
{
	@Field({ nullable: true })
	byDiseases?: string;
	@Field({ nullable: true })
	byDiseaseCategories?: string;
	@Field({ nullable: true })
	byAgeRelatedProcess?: string;
	@Field({ nullable: true })
	byExpressionChange?: string;
	@Field({ nullable: true })
	bySelectionCriteria?: string;
	@Field({ nullable: true })
	byAgingMechanism?: string;
	@Field({ nullable: true })
	byProteinClass?: string;
}
