import { IOrigin } from './origin';

type AssociatedDiseaseCategories = any;
type AssociatedDiseases = any;

export interface IGenericItem
{
	id: string;
	name: string;
}

export interface IAgingMechanisms extends IGenericItem {}

export interface ISelectionCriteria extends IGenericItem {}

export interface IAgeRelatedProcesses extends IGenericItem {}

export interface IProteinClasses extends IGenericItem {}

export interface ITimestampObject
{
	changed: string;
	created: string;
}

export interface IGeneralGeneInfo
{
	id: number;
	symbol: string;
	agingMechanisms: IAgingMechanisms[];
	aliases: string[];
	commentCause?: ISelectionCriteria[];
	diseaseCategories?: AssociatedDiseaseCategories;
	diseases?: AssociatedDiseases;
	expressionChange?: number;
	functionalClusters: IAgeRelatedProcesses[];
	proteinClasses: IProteinClasses[];
	terms?: any;
	name: string;
	familyOrigin?: IOrigin;
	origin?: IOrigin;
	ncbiId: number;
	uniprot: string;
	timestamp?: ITimestampObject | string;
	homologueTaxon: string;
	methylationCorrelation: string;
}
