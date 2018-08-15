<template>
  <section class="container">
    <div>
      <mofu-logo/>
      <h2 class="subtitle">Yuta Kurotaki</h2>
      <h3>About</h3>
      <p>Yuta Kurotaki is Software Engineer <a href="https://suzuri.jp/" target="_blank">SUZURI</a> and <a href="https://people.suzuri.jp/" target="_blank">SUZURI People</a> at GMO Pepabo, Inc.<br>
      I'm interested in Human Information Processing, Human Computer Interaction, FinTech.</p>
      <h3>Profile</h3>
      <div class='profile'>
        <ul>
          <li>
          April 2012 - Present, Senior Software Engineer, <a href="https://pepabo.com/" target="_blank">GMO Pepabo, Inc.</a>
          </li>
          <li>
          April 2009 - September 2011, Master of Informatics, <a href="https://www.kogakuin.ac.jp/" target="_blank">Kogakuin University</a>
          </li>
          <li>
          April 2005 - March 2009, Bachelor of Engineering, <a href="http://rikou.kanto-gakuin.ac.jp/" target="_blank">Kanto Gakuin University</a>
          </li>
        </ul>
      </div>
      <h3>Publications</h3>
      <div class='profile'>
        <ul>
          <li><a href="https://www.shoeisha.co.jp/book/detail/9784798153858" target="_blank">エンジニアのためのデザイン思考入門</a>, 翔泳社, 2017年12月15日.</li>
          <li><a href="http://gihyo.jp/magazine/wdpress/archive/2016/vol92" target="_blank">Web開発新人研修 手を動かして学ぶ開発の全体像, WEB+DB PRESS Vol.92</a>, 技術評論社, 2016年4月23日.</li>
        </ul>
      </div>
      <h3>Projects</h3>
      <div class='profile'>
        <ul>
          <li><a href="https://medium.com/titech-eng-and-design" target="_blank">東京工業大学エンジニアリングデザインプロジェクト(EDP)</a></li>
          <li><a href="http://ommf.iamas.ac.jp/makers/72" target="_blank">口内環境の改善をサポートするIoT歯ブラシスタンド「migaco」</a></li>
          <li><a href="https://mameblo.com/" target="_blank">日本の豊かなブログサービス まめぶろ</a></li>
          <li><a href="https://www.shibafoo.com/" target="_blank">元Logpiユーザのためのコミュニティ シバフ</a></li>
        </ul>
      </div>
      <h3>Links</h3>
      <div class="links">
        <ul>
          <li><a href="https://github.com/kurotaky" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/kurotaky" target="_blank">Twitter</a></li>
          <li><a href="https://www.facebook.com/kurotaky" target="_blank">Facebook</a></li>
          <li><a href="https://kurotaky.hatenablog.com/" target="_blank">Blog</a></li>
          <li><a href="https://speakerdeck.com/kurotaky" target="_blank">Speakerdeck</a></li>
        </ul>
      </div>
      <h3>Contact</h3>
      <p>mailto: yuta.kurotaki at gmail.com</p>
    </div>
  </section>
</template>

<script>
import MofuLogo from '~/components/MofuLogo.vue'

export default {
  components: {
    MofuLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

h3 {
  padding-top: 30px;
}

.profile ul {
  list-style: none;
}

.profile li {
  text-align: left;
}

.links ul {
  list-style: none;
  display: table;
  table-layout: fixed;
  border-spacing: 10px;
}

.links li {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

a {
  color: #526488;
}

.links a {
  font-size: 18px;
  color: #526488;
  display: block;
  text-decoration: none;
}

img{
  max-width: 300px;
  height: auto;
}
</style>
