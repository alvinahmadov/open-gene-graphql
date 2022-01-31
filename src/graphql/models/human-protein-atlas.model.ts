import { Field, ObjectType }  from '@nestjs/graphql';
import { IHumanProteinAtlas } from 'common';

@ObjectType()
export class HumanProteinAtlas implements IHumanProteinAtlas
{
	@Field(() => [String])
	public antibody: string[];
	@Field(() => [String])
	public biologicalProcess: string[];
	@Field()
	public chromosome: string;
	@Field(() => [String])
	public diseaseInvolvement: string[];
	@Field()
	public ensembl: string;
	@Field()
	public evidence: string;
	@Field()
	public gene: string;
	@Field()
	public geneDescription: string;
	@Field(() => [String])
	public geneSynonym: string[];
	@Field(() => [String])
	public molecularFunction: string[];
	@Field()
	public position: string;
	@Field(() => [String])
	public proteinClass: string[];
	@Field(() => [String])
	public subcellularAdditionalLocation: string[];
	@Field(() => [String])
	public subcellularLocation: string[];
	@Field(() => [String])
	public subcellularMainLocation: string[];
	@Field(() => [String])
	public uniprot: string[];
}
