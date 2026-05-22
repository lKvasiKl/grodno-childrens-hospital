import type { MenuProps } from 'antd';
import { type MenuItem } from './types';

export const mapMenuItems = (items: MenuItem[]): MenuProps['items'] =>
  items.map((item) => ({
    key: item.key,
    label: item.label,
    children: item.children ? mapMenuItems(item.children) : undefined,
  }));
