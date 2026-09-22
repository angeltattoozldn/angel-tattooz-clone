export interface KeywordTarget {
  id: string;
  query: string;
  category: 'GENERIC' | 'HIGH_INTENT' | 'SPECIALIST';
  targetTier: 'TOP_3_MAP_PACK';
  priority: 'CRITICAL' | 'HIGH';
}

export const COMMERCIAL_KEYWORD_BASKET: KeywordTarget[] = [
  // 1. Generic Authority Basket
  { id: 'gen-1', query: 'tattoo shop near me', category: 'GENERIC', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'gen-2', query: 'tattoo studio near me', category: 'GENERIC', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'gen-3', query: 'tattoo artist near me', category: 'GENERIC', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
  { id: 'gen-4', query: 'tattoo shop', category: 'GENERIC', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
  { id: 'gen-5', query: 'tattoo studio', category: 'GENERIC', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },

  // 2. High-Intent / Consideration Basket
  { id: 'int-1', query: 'best tattoo studio', category: 'HIGH_INTENT', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'int-2', query: 'best tattoo shop', category: 'HIGH_INTENT', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
  { id: 'int-3', query: 'best tattoo artist', category: 'HIGH_INTENT', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
  { id: 'int-4', query: 'first tattoo studio', category: 'HIGH_INTENT', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'int-5', query: 'tattoo consultation', category: 'HIGH_INTENT', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },

  // 3. Specialist / High-Value Service Basket
  { id: 'spec-1', query: 'tattoo cover up', category: 'SPECIALIST', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'spec-2', query: 'best tattoo cover up', category: 'SPECIALIST', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'spec-3', query: 'fine line tattoo', category: 'SPECIALIST', targetTier: 'TOP_3_MAP_PACK', priority: 'CRITICAL' },
  { id: 'spec-4', query: 'realism tattoo', category: 'SPECIALIST', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
  { id: 'spec-5', query: 'custom tattoo', category: 'SPECIALIST', targetTier: 'TOP_3_MAP_PACK', priority: 'HIGH' },
];
