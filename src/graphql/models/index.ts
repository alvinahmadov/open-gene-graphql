import {
	AssociatedDiseaseCategoriesScalar,
	AssociatedDiseasesScalar,
}                     from './associated-diseases.model';
import { TermScalar } from './gene-onthology.model';

export * from './aging-mechanisms.model';
export * from './associated-diseases.model';
export * from './gene.model';
export * from './gene-onthology.model';
export * from './generic.model';
export * from './genes.model';
export * from './human-protein-atlas.model';
export * from './origin.model';
export * from './researches.model';
export * from './enums';
export * from './options';
export * from './orthologs.model';

export const SCALARS = [
	AssociatedDiseaseCategoriesScalar,
	AssociatedDiseasesScalar,
	TermScalar
]
