<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.13s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
