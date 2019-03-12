const menus = [{
  id: '1',
  name: '首页',
  icon: 'home',
  path: '/'
}, {
//   id: '2',
//   name: '销售',
//   subNavs: [{
//     id: '2-1',
//     name: '销售登记'
//   }, {
//     id: '2-2',
//     name: '销售明细'
//   }, {
//     id: '2-3',
//     name: '销售报表'
//   }]
// }, {
//   id: '3',
//   name: '采购',
//   subNavs: [{
//     id: '3-1',
//     name: '采购登记'
//   }, {
//     id: '3-2',
//     name: '采购明细'
//   }, {
//     id: '3-3',
//     name: '采购报表'
//   }]
// }, {
  id: '4',
  name: '记账',
  subMenus: [{
    id: '4-1',
    name: '记账登记'
  }, {
    id: '4-2',
    name: '记账明细'
  }, {
    id: '4-3',
    name: '记账报表'
  }]
}, {
//   id: '5',
//   name: '报表',
//   subNavs: [{
//     id: '5-1',
//     name: '汇总报表'
//   }, {
//     id: '5-2',
//     name: '采购报表'
//   }, {
//     id: '5-3',
//     name: '销售报表'
//   }, {
//     id: '5-4',
//     name: '记账报表'
//   }]
// }, {
  id: '6',
  name: '设置',
  icon: 'settings',
  path: '/settings/user',
  expand: true,
  subMenus: [{
    id: '6-2',
    name: '系统设置',
    icon: 'airplay', // settings_applications
    path: '/settings/system'
  }, {
    id: '6-3',
    name: '人员管理',
    icon: 'supervisor_account',
    path: '/settings/user'
  }]
}]
export default menus
