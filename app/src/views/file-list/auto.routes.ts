const routes: RouteConfig[] = [
  {
    name: 'FileList',
    path: '/table-list',
    windowOptions: {
      title: '文件列表',
    },
    createConfig: {
      saveWindowBounds: true,
    },
  },
]

export default routes
