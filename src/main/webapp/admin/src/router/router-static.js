import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiye from '@/views/modules/qiye/list'
    import discusszhaopinxinxi from '@/views/modules/discusszhaopinxinxi/list'
    import forum from '@/views/modules/forum/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import discussqiye from '@/views/modules/discussqiye/list'
    import yingpinzhiwei from '@/views/modules/yingpinzhiwei/list'
    import gerenjianli from '@/views/modules/gerenjianli/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import discussgerenjianli from '@/views/modules/discussgerenjianli/list'
    import config from '@/views/modules/config/list'
    import pingjiaqiye from '@/views/modules/pingjiaqiye/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
          ,{
	path: '/discusszhaopinxinxi',
        name: '招聘信息评论',
        component: discusszhaopinxinxi
      }
          ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
          ,{
	path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }
          ,{
	path: '/discussqiye',
        name: '企业评论',
        component: discussqiye
      }
          ,{
	path: '/yingpinzhiwei',
        name: '应聘职位',
        component: yingpinzhiwei
      }
          ,{
	path: '/gerenjianli',
        name: '个人简历',
        component: gerenjianli
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/discussgerenjianli',
        name: '个人简历评论',
        component: discussgerenjianli
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/pingjiaqiye',
        name: '评价企业',
        component: pingjiaqiye
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
