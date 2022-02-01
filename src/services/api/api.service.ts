import { Injectable, Logger } from '@nestjs/common';
import { HttpService }        from '@nestjs/axios';
import { AxiosResponse }      from 'axios';
import { Observable }         from 'rxjs';

import { IFilterOptions, IPagingOptions }          from 'common';
import { FilteredGenes, ESortOptions, ESortOrder } from 'graphql/models';
import { env }                                     from 'env';

type QueryArgs = Record<string, any>;

@Injectable()
export class ApiService
{
	static readonly endpoint = env.OPENGENE_API_ENDPOINT;
	private readonly logger = new Logger(ApiService.name, { timestamp: true });
	
	constructor(private httpService: HttpService) {}
	
	public searchGenes(
			lang: string,
			paging?: IPagingOptions,
			filter?: IFilterOptions,
			sortBy?: ESortOptions,
			sortOrder?: ESortOrder
	): Observable<AxiosResponse<FilteredGenes>>
	{
		this.logger.log("Executing .searchGenes(...args)", {
			lang,
			paging,
			filter,
			sortBy,
			sortOrder
		})
		
		const query = ApiService._parseQuery(
				{ 'lang': lang },
				paging,
				filter,
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
			
			for(const [key, value] of Object.entries(arg))
			{
				if(value === undefined)
					continue;
				query += `${key}=${value}&`;
			}
		}
		
		if(query.endsWith('&'))
			query = query.substring(0, query.length - 1);
		
		return query;
	}
}
