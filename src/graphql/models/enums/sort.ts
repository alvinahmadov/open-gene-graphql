import { registerEnumType } from '@nestjs/graphql'

export enum ESortOptions
{
	Default          = 'default',
	CriteriaQuantity = 'criteriaQuantity'
}

registerEnumType(ESortOptions, { name: 'SortOptions' });
