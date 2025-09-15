<template lang="pug">
  .copy-rights(class="position-absolute")
    //- .text © 2024 Shahad_Hairstylest. All rights reserved.
    .social
      .actions(class="d-flex flex-column justify-center ga-1 text-center")
        NuxtLink(class="w-100" :to="'/'" target="_blank"  rel="noopener" title="Shahad Hairstylest")
          span.w-100 All rights reserved. © {{ new Date().getFullYear() }} Shahad Hairstylest.
        NuxtLink(:to="'mailto:saggafff@gmail.com'" target="_blank"  rel="noopener" title="+966 573556321")
          span Design with &lt;3 by Alawi
</template>

<style lang="scss" scoped>
.copy-rights {
  width: 220px;
  font-family:  sans-serif;
  font-size: 10px;
  color: #ffffff;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 767px) {
    bottom: 10px;

  }
  a {
    color: #ffffffa8;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ffffff;
    }
  }
}
</style>