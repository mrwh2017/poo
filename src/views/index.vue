<template lang="html">
  <div class="template">
    <img src="src/assets/03.jpg" alt="" class="post-ae">
    <section class="post" @click="add()">
        <h3>春晓</h3>
        <ul class="poem-list">
          <li>春眠不觉晓，</li>
          <li>处处闻啼鸟 。</li>
          <li>夜来风雨声，</li>
          <li>花落知多少 。</li>
          <!-- <li>春眠不觉晓，</li>
          <li>处处闻啼鸟 。</li>
          <li>夜来风雨声，</li>
          <li>花落知多少 。</li> -->
        </ul>
        <div class="auther">
          <section class="auther__avatar">
            <!-- <img src="src/assets/03.jpg" alt="auther"> -->
          </section>
          <section class="auther__info">
            <span class="auther__info-name">孟浩然</span>
            <span class="auther__info-date">2017年11月14日发布</span>
          </section>
        </div>
        <div class="expender">
          <div class="expender__content">
            Heading West by Audionautix is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/...)
Artist: http://audionautix.com/
 Cool Ride by Audionautix is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/...)
Artist: http://audionautix.com/
          </div>
          <span class="expender__btn" @click.stop="expend()">
            {{msg}}
          </span>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      toggle: true,
      msg: '展开'
    }
  },
  methods: {
    add(){
      const img = this.$el.querySelector('.post-ae')
      const post = this.$el.querySelector('.post')
      const auther = this.$el.querySelector('.auther')
      const expender = this.$el.querySelector('.expender')
      img.classList.toggle('img-ex')
      post.classList.toggle('post-ex')
      auther.classList.toggle('auther-ae')
      expender.classList.toggle('expender-ae')
    },
    expend(){
      this.toggle = !this.toggle
      this.msg = this.toggle? '展开' : '收起'
      const expender__content = this.$el.querySelector('.expender__content')
      expender__content.classList.toggle('expender__content-toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.template{
  max-width: 640px;
  width: 100%;
  text-align: center;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(45, 101, 224);
}
.post-ae{
  transition: all 0.3s ease;
  max-width: 320px;
  width: 100%;
  margin-top: 80px;
  height: auto;
  box-shadow: 0 2px 4px 0 #ececec;
  border-radius: 5px;
  background-color: #eee;
}
.post{
  transition: all 0.2s ease;
  width: 80%;
  padding-top: 130px;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-top: -120px;
  height: 200px;
  background-color: #e7e4e4;
  border-radius: 5px;
  // overflow: hidden;
  h3{
    padding-top: 30px;
  }
}
.poem-list{
  margin-top: 20px;
  li{
    display: block;
    line-height: 1.6;
    margin-left: 18px;
  }
}

.img-ex{
  max-width: 100%;
  margin-top: 0;
  border-radius: 0;
  box-shadow: none;
}
.post-ex{
  width: 100%;
  // transform: scale3d(1.2, 1, 1);
  padding-top: 20px;
  padding-bottom: 50px;
  margin-top: -4px;
  border-radius: 0;
  height: auto;
}

.auther{
  display: flex;
  margin-left: 30px;
  align-items: center;
  position: relative;
  bottom: -50px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.1s 0.2s ease;
}
.auther__avatar{
  width: 24px;
  height: 24px;
  background-color: rgb(84, 150, 247);
  border-radius: 50%;
  margin-right: 16px;
}
.auther__info{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.auther__info-date{
  font-size: 10px;
  color: #666;
}

.auther-ae{
  opacity: 1;
  bottom: -50px;
  transform: translate3d(0, -20px, 0);
}

.expender{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  // bottom: -70px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.1s 0.2s ease;
}
.expender__content{
  text-align: justify;
  max-height: 60px;
  overflow: hidden;
  line-height: 1.4;
}
.expender__btn{
  margin-top: 20px;
}
.expender-ae{
  opacity: 1;
  bottom: -70px;
  transform: translate3d(0, -20px, 0);
}
.expender__content-toggle{
  max-height: inherit;
}
</style>
