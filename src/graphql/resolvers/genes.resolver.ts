import { Args, Query, Resolver } from '@nestjs/graphql';
import { map, Observable }       from 'rxjs';

import { SearchGenesArgs } from 'graphql/dto/genes.args';
import { FilteredGenes }   from 'graphql/models/genes.model';
import { ApiService }      from 'services/api/api.service';

@Resolver(() => FilteredGenes)
export class GenesResolver
{
	constructor(private apiService: ApiService) {}
	
	@Query(() => FilteredGenes)
	public search(@Args() args: SearchGenesArgs): Observable<FilteredGenes>
	{
		const { lang, paging, filter, sortBy, sortOrder } = args;
		
		return this.apiService
		           .searchGenes(lang, paging, filter, sortBy, sortOrder)
		           .pipe(map(r => r.data));
	}
}
