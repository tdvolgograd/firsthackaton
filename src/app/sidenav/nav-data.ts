import {INavbarData} from "./helper";

export const navbarData:INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon:'fa-solid fa-house',
    label:'Dashboard'

  },
  {
    routeLink: 'products',
    icon:'fa-solid fa-globe',
    label:'Products',
    // items:[
    //   {
    //     routeLink: 'products/level1.1',
    //     label:'Prod1',
    //     items: [
    //       {
    //         routeLink: 'products/level2.1',
    //         label:'Prod1level2.1'
    //       },
    //       {
    //         routeLink: 'products/level2.2',
    //         label: 'Prod1level2.2',
    //         items: [
    //           {
    //             routeLink: 'products/level3.1',
    //             label: 'Product1level3.1'
    //           },
    //           {
    //             routeLink: 'products/level3.2',
    //             label: 'Product1level3.2'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     routeLink: 'products/level1.2',
    //     label:'Prod2',
    //   }
    // ],

  },
  {
    routeLink: 'coupens',
    icon:'fa-solid fa-ghost',
    label:'Coupens',
    // items:[
    //   {
    //     routeLink:'coupens/list',
    //     label:'List Coupens'
    //   },
    //   {
    //     routeLink:'coupens/create',
    //     label:'Create Coupens'
    //   },
    //   {
    //     routeLink:'coupens/delete',
    //     label:'Delete Coupens'
    //   },
    // ]

  },{
    routeLink: 'media',
    icon:'fa-solid fa-key',
    label:'Chek'

  },{
    routeLink: 'pages',
    icon:'fa-solid fa-network-wired',
    label:'Cloud'

  },{
    routeLink: 'settings',
    icon:'fa-solid fa-user-secret',
    label:'Settings',
    expanded: false,
    items: [
      {
        routeLink: 'settings/profile',
        label:'Profile',
        about:'Loremsdgdfgdfgdfgdfgdfgdfgdfgdfgdfg'
      },
      {
        routeLink: 'settings/customize',
        label:'Customize',
        about:'lorem ipsum ertyrtyrtyhurtyjhu'

      }
    ]

  },
  {
    routeLink: 'statistic',
    icon:'fa-solid fa-key',
    label:'Cloud'

  }
]
