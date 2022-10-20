/**
 * Strategy
 */
export const STRATEGIES = [
  "Thematic",
  "Factors",
  "Equity Income",
  "Capital Strength",
  "Currency Hedge",
  "ESG",
] as const;
export type Strategy = typeof STRATEGIES[number];

/**
 * Asset Class
 */
export const EQUITIES = ["All Cap", "Large Cap", "Small Cap"] as const;
export type Equity = typeof EQUITIES[number];

export const FIXED_INCOMES = ["Government", "Currency"] as const;
export type FixedIncome = typeof FIXED_INCOMES[number];

export type AssetClass = Equity | FixedIncome;

/**
 * Market & Region
 */
export const MARKETS = ["Developed", "Emerging"] as const;
export type Market = typeof MARKETS[number];

export const EUROPEAN_COUNTRIES = [
  "Eurozone",
  "Germany",
  "Switzerland",
  "United Kingdom",
] as const;
export type EuropeanCountry = typeof EUROPEAN_COUNTRIES[number];

export const NORTH_AMERICAN_COUNTRIES = ["United States", "Canada"] as const;
export type NorthAmericanCountry = typeof NORTH_AMERICAN_COUNTRIES[number];

export type Country = EuropeanCountry | NorthAmericanCountry;

export const PARENT_REGIONS = [
  "Asia Pacific",
  "Europe",
  "Global",
  "North America",
] as const;
export type ParentRegion = typeof PARENT_REGIONS[number];
export type Region = ParentRegion | Country;

export const REGIONS: (ParentRegion | { [key in ParentRegion]?: Country[] })[] =
  [
    "Asia Pacific",
    { Europe: [...EUROPEAN_COUNTRIES] },
    "Global",
    { "North America": [...NORTH_AMERICAN_COUNTRIES] },
  ];

/**
 * Product Style
 */
export const PRODUCT_STYLES = ["index", "active"];
export type ProductStyle = typeof PRODUCT_STYLES[number];
