import { Field, ObjectType }      from '@nestjs/graphql';
import { IResearch, IResearches } from 'common';

@ObjectType()
class RegulatedGene
{
	@Field()
	public id: number;
	@Field()
	public symbol: string;
	@Field()
	public name: string;
	@Field()
	public ncbiId: number;
}

@ObjectType()
class InterventionResult
{
	@Field()
	public id: string;
	@Field()
	public name: string;
}

@ObjectType({ isAbstract: true })
export abstract class Research implements IResearch
{
	@Field()
	public doi: string;
	@Field()
	public pmid: string;
	@Field()
	public comment: string;
}

@ObjectType()
export class AgeRelatedChanges extends Research
{
	@Field()
	public changeType: string;
	@Field()
	public sample: string;
	@Field()
	public modelOrganism: string;
	@Field()
	public organismLine: string;
	@Field()
	public ageFrom: string;
	@Field()
	public ageTo: string;
	@Field()
	public valueForMale: string;
	@Field()
	public valueForFemale: string;
	@Field()
	public valueForAll: string;
	@Field()
	public measurementType: string;
}

@ObjectType()
export class IncreaseLifespan extends Research
{
	@Field()
	public interventionType: string;
	@Field()
	public interventionResult: string;
	@Field()
	public modelOrganism: string;
	@Field()
	public organismLine: string;
	@Field()
	public age: string;
	@Field()
	public genotype: '+-' | '--' | string;
	@Field()
	public valueForMale: string;
	@Field()
	public valueForFemale: string;
	@Field()
	public valueForAll: string;
}

@ObjectType()
export class InterventionAffectsAgingProcess extends Research
{
	@Field()
	public geneIntervention: string;
	@Field()
	public modelOrganism: string;
	@Field()
	public organismLine: string;
	@Field(() => [InterventionResult])
	public interventionDeteriorates: InterventionResult[];
	@Field(() => [InterventionResult])
	public interventionImproves: InterventionResult[];
	@Field()
	public interventionResult: string;
	@Field()
	public vitalProcess: string;
	@Field()
	public age: string;
	@Field()
	public genotype: string;
	@Field()
	public sex: string;
}

@ObjectType()
export class ProteinRegulatesGenes extends Research
{
	@Field()
	public proteinActivity: string;
	@Field()
	public regulationType: string;
	@Field(() => RegulatedGene)
	public regulatedGene: RegulatedGene;
}

@ObjectType()
export class LongevityEffects extends Research
{
	@Field()
	public allelicPolymorphism: string;
	@Field()
	public allelicVariant: string;
	@Field()
	public changeType: string;
	@Field()
	public dataType: string;
	@Field()
	public longevityEffect: string;
	@Field()
	public modelOrganism: string;
	@Field()
	public sex: string;
}

@ObjectType()
export class ProgeriaSyndromes extends Research
{
	@Field()
	public progeriaSyndrome: string;
}

@ObjectType()
export class AdditionalEvidences extends Research {}

@ObjectType()
export class Researches implements IResearches
{
	@Field(() => [AdditionalEvidences])
	public additionalEvidences: AdditionalEvidences[];
	@Field(() => [AgeRelatedChanges])
	public ageRelatedChangesOfGene: AgeRelatedChanges[];
	@Field(() => [LongevityEffects])
	public geneAssociatedWithLongevityEffects: LongevityEffects[];
	@Field(() => [ProgeriaSyndromes])
	public geneAssociatedWithProgeriaSyndromes: ProgeriaSyndromes[];
	@Field(() => [IncreaseLifespan])
	public increaseLifespan: IncreaseLifespan[];
	@Field(() => [InterventionAffectsAgingProcess])
	public interventionToGeneImprovesVitalProcesses: InterventionAffectsAgingProcess[];
	@Field(() => [ProteinRegulatesGenes])
	public proteinRegulatesOtherGenes: ProteinRegulatesGenes[];
}
