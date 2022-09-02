interface INavItem {
  item: string;
  id: number;
  url: string;
}

export const navItems: INavItem[] = [
  { item: 'Клавиатуры', id: 1, url: 'keyboard' },
  { item: 'Мыши', id: 2, url: 'mouse' },
  { item: 'Аудио', id: 3, url: 'audio' },
  { item: 'Аксессуары', id: 4, url: 'accessories' },
  { item: 'Сборки и ремонт', id: 5, url: 'repair' },
];
