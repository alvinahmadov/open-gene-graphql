import { registerEnumType } from '@nestjs/graphql';

export enum ESortOrder
{
	DESC = 'DESC',
	ASC  = 'ASC'
}

registerEnumType(ESortOrder, { name: 'SortOrder' });
