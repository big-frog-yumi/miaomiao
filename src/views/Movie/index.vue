<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>

      <keep-alive>
        <router-view/>
        <!--针对二级路由-->
      </keep-alive>
    </div>
    <TabBar />
    <router-view name="detail"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import { messageBox } from '@/components/JS'

export default {
  name: 'Movie',
  components: {
    Header,
    TabBar,
  },
  mounted () {
    setTimeout(() => {
      this.axios.get('/api/getLocation').then((res) => {
        var msg = res.data.msg;
        if (msg == 'ok') {
          var nm = res.data.data.nm;
          var id = res.data.data.id;

          if(this.$store.state.id==id){return;}
          messageBox({
            title: '定位',
            content: nm,
            cancel: '取消',
            ok: '切换定位',
            handleOk () {
              window.localStorage.setItem('nowNm', nm);
              window.localStorage.setItem('nowId', id);
              window.location.reload();
            }
          })
        }
      })
    }, 3000);
  },
}
</script>

<style scoped>
#content .movie_menu {
  width: 100%;
  vertical-align: middle;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  float: left;
  width: 80px;
  text-align: center;
  margin-left: 20px;
  height: 100%;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
  margin-top: 10px;
}
.movie_menu .hot_item {
  float: left;
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 12px 12px;
  font-weight: 700;
  vertical-align: inherit;
}
.movie_menu .hot_item.active {
  float: left;
  vertical-align: inherit;
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
.slide-enter-active {
  animation: 13s detailMove;
}
@keyframes detailMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>