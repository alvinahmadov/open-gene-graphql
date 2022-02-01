import { Field, Int, ObjectType } from '@nestjs/graphql';

import { IGene, Nullable, MethylationCorrelation } from 'common';
import
{
	AgeRelatedProcesses,
	AgingMechanisms,
	AssociatedDiseaseCategories,
	AssociatedDiseases,
	HumanProteinAtlas,
	Origin,
	ProteinClasses,
	Researches,
	SelectionCriteria,
	TimestampObject,
	Terms
}                                                  from 'graphql/models';

export declare const Any: import("graphql").GraphQLScalarType;

@ObjectType()
export class Gene implements IGene
{
	@Field(() => Int)
	public id: number;
	@Field(() => String)
	public accCds: string;
	@Field(() => String)
	public accOrf: string;
	@Field(() => Any)
	public accPromoter: any;
	@Field(() => [AgingMechanisms])
	public agingMechanisms: AgingMechanisms[];
	@Field(() => [String])
	public aliases: string[];
	@Field(() => String)
	public band: string;
	@Field(() => String)
	public commentAgingEN: string;
	@Field(() => [SelectionCriteria], Nullable)
	public commentCause: SelectionCriteria[];
	@Field(() => String)
	public commentEvolution: string;
	@Field(() => String)
	public commentEvolutionEN: string;
	@Field(() => Object)
	public commentsReferenceLinks: { [p: number]: string };
	@Field(() => AssociatedDiseaseCategories, Nullable)
	public diseaseCategories?: AssociatedDiseaseCategories;
	@Field(() => AssociatedDiseases, Nullable)
	public diseases?: AssociatedDiseases;
	@Field(() => [Any])
	public expression: Array<any>;
	@Field(() => Int, Nullable)
	public expressionChange?: number;
	@Field(() => String)
	public expressionEN: string;
	@Field(() => Origin, Nullable)
	public familyOrigin: Origin;
	@Field(() => [AgeRelatedProcesses])
	public functionalClusters: AgeRelatedProcesses[];
	@Field()
	public homologueTaxon: string;
	@Field(() => HumanProteinAtlas)
	public human_protein_atlas: HumanProteinAtlas;
	@Field(() => Int)
	public locationEnd: number;
	@Field(() => Int)
	public locationStart: number;
	@Field()
	public methylationCorrelation: MethylationCorrelation;
	@Field(() => String)
	public name: string;
	@Field(() => Int)
	public ncbiId: number;
	@Field(() => Int)
	public orientation: number;
	@Field(() => Origin, Nullable)
	public origin: Origin;
	@Field(() => Any)
	public orthologs: { [p: string]: string };
	@Field(() => [ProteinClasses])
	public proteinClasses: ProteinClasses[];
	@Field(() => String)
	public proteinDescriptionOpenGenes: string;
	@Field(() => String)
	public proteinDescriptionUniProt: string;
	@Field(() => Int)
	public rating: number;
	@Field(() => String)
	public references: string;
	@Field(() => Researches)
	public researches: Researches;
	@Field(() => String)
	public symbol: string;
	@Field(() => Terms, Nullable)
	public terms?: Terms;
	@Field(() => TimestampObject, Nullable)
	public timestamp: TimestampObject;
	@Field(() => String)
	public uniprot: string;
	@Field(() => String)
	public why: string;
}
