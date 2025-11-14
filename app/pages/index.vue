<template>
  <div class="lostark-pc column">
    <div class="title">캐릭터 정보</div>
    <div class="profile-tab column full">
      <div class="menu">
        <div :class="{ active: activeTab == 'equipment' }" @click.prevent="activeTab = 'equipment'">장비</div>
        <div :class="{ active: activeTab == 'engrave' }" @click.prevent="activeTab = 'engrave'">각인</div>
        <div :class="{ active: activeTab == 'jewel' }" @click.prevent="activeTab = 'jewel'">보석</div>
        <div :class="{ active: activeTab == 'card' }" @click.prevent="activeTab = 'card'">카드</div>
        <div :class="{ active: activeTab == 'arkgrid' }" @click.prevent="activeTab = 'arkgrid'">아크 그리드</div>
        <div></div>
      </div>
      <div class="full">
        <profile-equipment v-if="activeTab == 'equipment'"></profile-equipment>
        <profile-engrave v-if="activeTab == 'engrave'"></profile-engrave>
        <profile-jewel v-if="activeTab == 'jewel'"></profile-jewel>
        <profile-card v-if="activeTab == 'card'"></profile-card>
        <profile-arkgrid v-if="activeTab == 'arkgrid'"></profile-arkgrid>
      </div>
    </div>
  </div>
</template>
<script setup>
let activeTab = ref("equipment");
</script>
