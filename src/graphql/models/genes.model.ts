import { Field, Int, ObjectType } from '@nestjs/graphql';

import {
	IGenes,
	IFilteredGenes,
	Nullable,
	MethylationCorrelation
}                               from 'common'
import { AgingMechanisms }      from './aging-mechanisms.model';
import {
	AssociatedDiseases,
	AssociatedDiseaseCategories
}                               from './associated-diseases.model';
import { Terms }                from './gene-onthology.model';
import {
	AgeRelatedProcesses,
	ProteinClasses,
	SelectionCriteria,
	TimestampObject
}                               from './generic.model';
import { Origin }               from './origin.model';
import { FilteredGenesOptions } from './options';

@ObjectType()
export class Genes implements IGenes
{
	@Field(() => Int)
	public id: number;
	@Field()
	public name: string;
	@Field(() => [AgingMechanisms])
	public agingMechanisms: AgingMechanisms[];
	@Field(() => [String])
	public aliases: string[];
	@Field(() => [SelectionCriteria])
	public commentCause: SelectionCriteria[];
	@Field(() => AssociatedDiseaseCategories)
	public diseaseCategories: AssociatedDiseaseCategories;
	@Field(() => AssociatedDiseases, Nullable)
	public diseases?: AssociatedDiseases;
	@Field({ nullable: true })
	public ensembl?: string;
	@Field()
	public expressionChange: number;
	@Field(() => Origin)
	public familyOrigin: Origin;
	@Field(() => [AgeRelatedProcesses])
	public functionalClusters: AgeRelatedProcesses[];
	@Field()
	public homologueTaxon: string;
	@Field()
	public methylationCorrelation: MethylationCorrelation;
	@Field(() => Int)
	public ncbiId: number;
	@Field(() => Origin)
	public origin: Origin;
	@Field(() => [ProteinClasses])
	public proteinClasses: ProteinClasses[];
	@Field(() => String)
	public symbol: string;
	@Field(() => Terms, Nullable)
	public terms: Terms;
	@Field(() => TimestampObject)
	public timestamp: TimestampObject | string;
	@Field()
	public uniprot: string;
}

@ObjectType()
export class FilteredGenes implements IFilteredGenes
{
	@Field(() => [Genes])
	items: Genes[];
	
	@Field(() => FilteredGenesOptions)
	options: FilteredGenesOptions;
}
