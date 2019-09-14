export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path:'city',
      component: () => import('@/components/City')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingsoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'cilist',
      component: () => import('@/components/CiList')

    },
    {
      path:'detail/1/:movieId',
      //命名视图：components
      components:{
        default: () => import('@/components/NowPlaying'),
        detail:() => import('@/views/Movie/detail')
      },
      props:{   //通过props接受movieId
        detail:true
      }
    },
    {
      path: 'detail/2/:movieId',
      components: {
        default: () => import('@/components/ComingSoon'),
        detail: () => import('@/views/Movie/detail')
      },
      props: { //通过props接受movieId
        detail: true
      }
    },
    {
      path:'/movie',
      redirect:'/movie/nowPlaying'
    }
  ]
}