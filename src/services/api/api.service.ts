import { Injectable }    from '@nestjs/common';
import { HttpService }   from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable }    from 'rxjs';

import { IFilterOptions, IPagingOptions }          from 'common';
import { FilteredGenes, ESortOptions, ESortOrder } from 'graphql/models';
import { env }                                     from 'env';

type QueryArgs = Record<string, any>;

@Injectable()
export class ApiService
{
	static readonly endpoint = env.OPENGENE_API_ENDPOINT;
	
	constructor(private httpService: HttpService) {}
	
	public searchGenes(
			lang: string,
			paging?: IPagingOptions,
			filter?: IFilterOptions,
			sortBy?: ESortOptions,
			sortOrder?: ESortOrder
	): Observable<AxiosResponse<FilteredGenes>>
	{
		const query = ApiService._parseQuery(
				{ 'lang': lang },
				paging,
				{ 'filter': filter },
				{ 'sortBy': sortBy },
				{ 'sortOrder': sortOrder }
		);
		
		return this.httpService.get<FilteredGenes>(
				`${ApiService.endpoint}/gene/search?${query}`
		);
	}
	
	private static _parseQuery(...args: QueryArgs[]): string
	{
		let query: string = "";
		
		for(const arg of args)
		{
			if(!arg)
				continue;
			
			for(const entry of Object.entries(arg))
			{
				if(!entry || entry[1] === undefined)
					continue;
				query += `${entry[0]}=${entry[1]}&`;
			}
		}
		
		if(query.endsWith('&'))
			query = query.substring(0, query.length - 1);
		
		return query;
	}
}
