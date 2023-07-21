const routes: RouteConfig[] = [
  {
    name: 'Login',
    path: '/login',
    windowOptions: {
      title: 'Login',
      resizable: false,
      minimizable: false,
      maximizable: false,
      fullscreenable: false,
      width: 300,
      height: 240,
    },
    createConfig: {
      hideMenus: true,
    },
  },
]

export default routes
