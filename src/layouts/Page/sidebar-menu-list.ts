
export type MenuItem = {
  id: number;
  ordinalNum: number;
  index: string | number;
  title: string;
  routeName: string;
  icon: string | null;
  children: Array<MenuItem> | [];
  permission?: (user: any) => boolean;
  isAdmin: boolean;
};

// const userCanAny = (...args: Array<string | Array<string>>) => (user: UserInfo) => {
//   const flatPermissions = flatten(args);
//   const permitted = hasPermission(flatPermissions, false, user);
//   if (!permitted) {
//     console.warn(`${user.email} failed permission check(any) for [${flatPermissions}]`);
//   }

//   return permitted;
// };

const menuItemsList: Array<MenuItem> = [
  {
    id: 1,
    ordinalNum: 1,
    title: 'Осмотр учреждений',
    routeName: 'admin_board',
    index: '1',
    icon: 'tune',
    children: [],
    isAdmin: true,
    // permission: userCanAny(permissionSet.service.list),
  },
  {
    id: 1,
    ordinalNum: 1,
    title: 'Параметры учреждений',
    routeName: 'setting_house_admin',
    index: '1',
    icon: 'tune',
    children: [],
    isAdmin: true,
    // permission: userCanAny(permissionSet.service.list),
  },
  {
    id: 2,
    ordinalNum: 2,
    title: 'Показатели школы',
    routeName: 'director_board',
    index: '2',
    icon: 'tune',
    children: [],
    isAdmin: false,
    // permission: userCanAny(permissionSet.service.list),
  },
  // {
  //   id: 3,
  //   ordinalNum: 3,
  //   title: 'Настройки устройства',
  //   routeName: 'setting_device',
  //   index: '3',
  //   icon: 'tune',
  //   children: [],
  //   // permission: userCanAny(permissionSet.service.list),
  // },
  {
    id: 4,
    ordinalNum: 4,
    title: 'Реагирование показателей',
    routeName: 'control_page',
    index: '4',
    icon: 'tune',
    children: [],
    isAdmin: true,
    // permission: userCanAny(permissionSet.service.list),
  },
  {
    id: 4,
    ordinalNum: 4,
    title: 'Параметры учреждений',
    routeName: 'setting_house',
    index: '4',
    icon: 'tune',
    children: [],
    isAdmin: false,

    // permission: userCanAny(permissionSet.service.list),
  },
];

export default menuItemsList;
