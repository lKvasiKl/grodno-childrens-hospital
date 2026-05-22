export const MENU_ITEM_TYPE = {
  INTERNAL: 'internal',
  EXTERNAL: 'external',
} as const;

export type MenuItem = {
  key: string;
  label: string;
  children?: MenuItem[];
} & (
  | {
      type: typeof MENU_ITEM_TYPE.INTERNAL;
    }
  | {
      type: typeof MENU_ITEM_TYPE.EXTERNAL;
      href: string;
    }
  | {
      type?: never;
      key: string;
      label: string;
      children: MenuItem[];
    }
);
