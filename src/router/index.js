import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index'
import Comment from '../views/comment'
import Edit from '../views/edit'
import List from '../views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/c',
      component: Comment
    },
    {
      path: '/b',
      component: Edit
    },
    {
      path: '/l',
      component: List
    }
  ]
})
