<template lang="html">
  <section class="comment">
    <ul class="comment-list">
      <li class="body__thumbnail">
        <img src="" alt="">
      </li>
      <li class="body__main">
        <div class="main__info">
          <span class="main-name">JACKET</span>
          <span class="main-date">13 小时前</span>
        </div>
        <div class="main__content">
          hmmm...
          they made the new stufffff😥﻿
        </div>
        <div class="main__toolbar">
          <div class="toolbar-reply-btn">
            reply
          </div>
          <span class="toolbar-reply-count">11</span>
          <span class="toolbar-vote-up">up</span>
          <span class="toolbar-vote-down">down</span>
        </div>
        <div class="main__more" v-if="sub">
          <span>查看回复</span>
        </div>
        <sub-edit></sub-edit>
      </li>
    </ul>
  </section>
</template>

<script>
import subEdit from './subEdit'

export default {
  name: 'edit',
  data(){
    return {
      // sub: true
    }
  },
  props: {
    sub: {
      type: Boolean,
      default: false
    }
  },
  components: {
    subEdit
  }
}
</script>

<style lang="scss" scoped>
.comment{
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}
.comment-list{
  display: flex;
  flex-direction: row;
}
.body__thumbnail{
  width: 40px;
  height: 40px;
  background-color: rgb(84, 150, 247);
  border-radius: 50%;
  margin-right: 16px;
}

.body__main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.main__info{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  padding-top: 5px;
}
.main__content{
  font-size: 14px;
  line-height: 1.5;
}
.main-date{
  color: #666;
  margin-left: 8px;
}
.main__toolbar{
  margin-left: 5px;
  margin-top: 3px;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 10px 0;
}
.main__toolbar span{
  margin-left: 16px;
}

.toolbar-reply-btn{
  background-color: rgb(42, 186, 181);
  padding: 2px 5px;
}
.main__more{
  font-size: 14px;
  padding: 10px 8px;
  margin-left: -8px;
}
</style>
