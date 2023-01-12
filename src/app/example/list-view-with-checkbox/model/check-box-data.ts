export interface IListCheckBox {
  id: number;
  item: string;
  isCheecked: boolean;
}

export class checkBoxList {
  listData = [
    {
      id: 1,
      item: 'First',
      isCheecked: false,
    },
    {
      id: 2,
      item: 'Second',
      isCheecked: false,
    },
    {
      id: 3,
      item: 'Third',
      isCheecked: false,
    },
    {
      id: 4,
      item: 'Fourth',
      isCheecked: false,
    },
    {
      id: 5,
      item: 'Fifth',
      isCheecked: false,
    },
  ];
}
