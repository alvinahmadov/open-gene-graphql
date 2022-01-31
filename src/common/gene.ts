import { IGeneralGeneInfo }   from './generic';
import { IHumanProteinAtlas } from './human-protein-atlas';
import { IResearches }        from './research'

export type MethylationCorrelation = 'positive' | 'negative' | '';

export interface IGene extends IGeneralGeneInfo
{
	why: string;
	band: string;
	locationStart: number;
	locationEnd: number;
	orientation: number;
	accPromoter: any;
	accOrf: string;
	accCds: string;
	references: string;
	orthologs: {
		[n: string]: string;
	};
	commentEvolution: string;
	commentEvolutionEN: string;
	proteinDescriptionUniProt: string;
	proteinDescriptionOpenGenes: string;
	commentAgingEN: string;
	researches: IResearches;
	expression: Array<any>;
	expressionEN: string;
	terms?: any;
	commentsReferenceLinks: { [n: number]: string };
	rating: number;
	human_protein_atlas: IHumanProteinAtlas | '';
}

export interface IGenes extends IGeneralGeneInfo
{
	ensembl?: string;
}

export interface IFilteredGenes
{
	items: IGenes[];
	options: {
		objTotal: number;
		pagination: {
			page: number;
			pageSize: number;
			pagesTotal: number;
		};
	};
}
