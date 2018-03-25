<template>
  <section class="container">
    <div>
      <mofu-logo/>
      <h2 class="subtitle">Yuta Kurotaki</h2>
      <h2>Links</h2>
      <div class="links">
        <ul>
          <li><a href="https://github.com/kurotaky" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/kurotaky" target="_blank">Twitter</a></li>
          <li><a href="http://kurotaky.hatenablog.com/" target="_blank">Blog</a></li>
          <li><a href="https://speakerdeck.com/kurotaky" target="_blank">Speakerdeck</a></li>
        </ul>
      </div>
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
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
