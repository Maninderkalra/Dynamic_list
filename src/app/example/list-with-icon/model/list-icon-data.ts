export interface ISimpleListIcon {
  id: number;
  item: string;
  icon?: string;
}

export class simpleListIconClass {
  listData = [
    {
      id: 1,
      item: 'First',
      icon: 'fa-user-circle',
    },
    {
      id: 2,
      item: 'Second',
      icon: 'fa-user',
    },
    {
      id: 3,
      item: 'Third',
      icon: 'fa-user-circle',
    },
    {
      id: 4,
      item: 'Fourth',
      icon: 'fa-user-circle',
    },
    {
      id: 5,
      item: 'Fifth',
      icon: 'fa-user',
    },
  ];
}
