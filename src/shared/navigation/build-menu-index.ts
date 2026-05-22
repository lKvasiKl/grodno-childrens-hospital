import type { MenuItem } from './types';

export const buildMenuIndex = (
  items: MenuItem[],
  map = new Map<string, MenuItem>(),
): Map<string, MenuItem> => {
  for (const item of items) {
    map.set(item.key, item);
    if (item.children) buildMenuIndex(item.children, map);
  }

  return map;
};
