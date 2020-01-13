<template>
  <section class="section">
    <mofu-logo/>
    <div class="content">
    <h1 class="title is-1">Yuta Kurotaki</h1>
    <dragon/>
      <h2 class="title is-2">About</h2>
      <p>Yuta Kurotaki is Software Engineer at <a href="https://suzuri.jp/" target="_blank">SUZURI</a> and <a href="https://people.suzuri.jp/" target="_blank">SUZURI People</a> of GMO Pepabo, Inc.<br>
      He is interested in Human Computer Interaction/Integration, Human Information Processing, Blockchain, Drums, Kickboxing.</p>
      <h2 class="title is-2">Profile</h2>
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
      <h2 class="title is-2">Publications</h2>
        <ul>
          <li>東京工業大学エンジニアリングデザインプロジェクト 著, 齊藤滋規 著, 坂本啓 著, 竹田陽子 著, 角征典 著, 大内孝子 編, <a href="https://www.shoeisha.co.jp/book/detail/9784798153858" target="_blank">エンジニアのためのデザイン思考入門</a>, 翔泳社, 2017年12月15日.</li>
          <li><a href="http://gihyo.jp/magazine/wdpress/archive/2016/vol92" target="_blank">Web開発新人研修 手を動かして学ぶ開発の全体像 第4章, WEB+DB PRESS Vol.92</a>, 技術評論社, 2016年4月23日.</li>
        </ul>
      <h2 class="title is-2">Projects</h2>
        <ul>
          <li><a href="https://github.com/kurotaky/bancor" target="_blank">bancor: Ruby implementation of bancor protocol</a></li>
          <li><a href="https://titech-edp.github.io/2016-edp-bc/#tocAnchor-1-1-4" target="_blank">CycleChanger - 東京工業大学エンジニアリングデザインプロジェクト(EDP)</a></li>
          <li><a href="http://railsgirls.com/tokyo.html" target="_blank">Rails Girls Tokyo Coach</a></li>
          <li><a href="http://ommf.iamas.ac.jp/makers/72" target="_blank">口内環境の改善をサポートするIoT歯ブラシスタンド「migaco」</a></li>
          <li><a href="https://mameblo.com/" target="_blank">日本の豊かなブログサービス まめぶろ</a></li>
          <li><a href="https://www.shibafoo.com/" target="_blank">元Logpiユーザのためのコミュニティ シバフ</a></li>
        </ul>
      <h2 class="title is-2">Presentations</h2>
        <ul>
          <li><a href="https://rubykaigi.org/2018/presentations/kurotaky.html#may31" target="_blank">bancor: Token economy made with Ruby - RubyKaigi 2018</a></li>
          <li><a href="https://kurotaky.hatenablog.com/entry/2017/03/28/211836" target="_blank">CycleChanger - Slush Tokyo 2017</a></li>
          <li><a href="https://rubyassociation.doorkeeper.jp/events/36358" target="_blank">新規事業の成長を支えるRuby - Ruby Business Users Conference 2016</a></li>
          <li><a href="https://2015.rubyconf.tw/" target="_blank">Enterprise Rails Application Tips - RubyConf Taiwan 2015</a></li>
        </ul>
      <h2 class="title is-2">Paper/International Conference</h2>
        <ul>
          <li>
            Yuta Kurotaki, Hisao Shiizuka, Measurment and Clasification of the Affective Value of Drum Rhythm Patterns,<br>
            Third IEEE International Conference on Intelligent Networking and Collaborative Systems(IEEE INCoS2011), 872-875, 2011-12.<br>
            <a href="https://ieeexplore.ieee.org/document/6132925/" target="_blank">https://ieeexplore.ieee.org/document/6132925/</a>
          </li>
          <li>
            Yuta Kurotaki, Hisao Shiizuka, Evaluation of Feelings Received from the Rhythms of Percussive Timbre and Relationships between Affective Values,<br>
            Advances in Intelligent Decision Technologies Proceedings of the Second KES International Symposium IDT 2010, Springer, 631-639, 2010-07-30.<br>
            <a href="https://link.springer.com/chapter/10.1007/978-3-642-14616-9_62" target="_blank">https://link.springer.com/chapter/10.1007/978-3-642-14616-9_62</a>
          </li>
        </ul>
      <h2 class="title is-2">Links</h2>
        <ul>
          <li><a href="https://github.com/kurotaky" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/kurotaky" target="_blank">Twitter</a></li>
          <li><a href="https://www.facebook.com/kurotaky" target="_blank">Facebook</a></li>
          <li><a href="https://kurotaky.hatenablog.com/" target="_blank">Blog</a></li>
          <li><a href="https://speakerdeck.com/kurotaky" target="_blank">Speakerdeck</a></li>
        </ul>
      <h2 class="title is-2">Contact</h2>
      <p>mailto: yuta.kurotaki at gmail.com</p>
    </div>
  </section>
</template>

<script>
import MofuLogo from "~/components/MofuLogo.vue";
import Dragon from "~/components/Dragon.vue";
import "bulma/css/bulma.css";

export default {
  components: {
    MofuLogo,
    Dragon
  }
};
</script>

<style>
.image.mo-fu {
  width: 300px;
}
.image.bitcoin {
  width: 300px;
}
</style>
