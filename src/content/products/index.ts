import cz from './cz.json';
import czcn from './czcn.json';
import cc from './cc.json';
import wcn from './wcn.json';
import dcp from './dcp.json';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'cake' | 'cookie';
  price?: string | null;
  tags: string[];
  descriptionShort: string;
  descriptionLong: string;
  ingredients: string[];
  allergens: {
    contains: string[];
    mayContain: string[];
  };
  origin: {
    madeIn: string;
    production: string;
    notes: string[];
  };
  nutrition: {
    disclaimer: string;
    per100g?: Record<string, number | string>;
    perServing?: Record<string, number | string>;
  };
  storage: string;
  pairing: string;
  images: {
    hero: string;
    gallery?: string[];
  };
  updatedAt: string;
};

export const PRODUCTS: Product[] = [cz, czcn, cc, wcn, dcp] as Product[];
