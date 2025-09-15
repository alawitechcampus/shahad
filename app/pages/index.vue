<template lang="pug">
  <main-card>
    template(#cardHead)
      <top-section></top-section>
      <profileTags/>
      <tabsSection/>
  </main-card> 
  <copyRights/>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
  position: absolute;
  left: -10px;
}
::-webkit-scrollbar-track {
  background: #f0f0f035;
}
::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #f0f0f077;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #cdcdcd;
}
</style>
