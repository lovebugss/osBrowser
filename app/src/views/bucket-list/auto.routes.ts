const routes: RouteConfig[] = [
  {
    name: 'BucketList',
    path: '/bucket-list',
    windowOptions: {
      title: '存储桶',
    },
    createConfig: {
      saveWindowBounds: true,
    },
  },
]

export default routes
