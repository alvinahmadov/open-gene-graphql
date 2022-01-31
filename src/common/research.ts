export interface IResearch
{
	doi: string;
	pmid: string;
	comment: string;
}

export interface IResearches
{
	additionalEvidences: IResearch[];
	ageRelatedChangesOfGene: IResearch[];
	geneAssociatedWithLongevityEffects: IResearch[];
	geneAssociatedWithProgeriaSyndromes: IResearch[];
	increaseLifespan: IResearch[];
	interventionToGeneImprovesVitalProcesses: IResearch[];
	proteinRegulatesOtherGenes: IResearch[];
}
