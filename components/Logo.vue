<template>
  <div class="avatar-container">
    <a-avatar :src="require('~/assets/d1.png')" class="resume-logo" />
  </div>
</template>
<style lang="scss">
.avatar-container {
  text-align: center;

  .resume-logo {
    animation: 1s appear;
    width: 128px;
    height: 128px;
    line-height: 128px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
