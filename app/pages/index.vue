<template>
  <button @click="test.news.notices()">공지</button>
  <button @click="test.news.events()">이벤트</button>
  <button @click="test.news.alarms()">알림</button>
  <button @click="test.auctions.options()">경매장-옵션</button>
  <button @click="test.auctions.items()">경매장-아이템</button>
  <button @click="test.markets.options()">거래소-옵션</button>
  <button @click="test.markets.itemId()">거래소-아이템아이디</button>
  <button @click="test.markets.items()">거래소-아이템</button>
  <button @click="test.gamecontents.calendar()">캘린더</button>

  <button @click="test.characters.siblings('미르오스')">원정대</button>
  <button @click="test.armories.profiles('미르오스')">프로필</button>
  <button @click="test.armories.equipment('미르오스')">장비</button>
  <button @click="test.armories.avatars('미르오스')">아바타</button>
  <button @click="test.armories.combatSkills('미르오스')">스킬</button>
  <button @click="test.armories.engravings('미르오스')">각인</button>
  <button @click="test.armories.cards('미르오스')">카드</button>
  <button @click="test.armories.gems('미르오스')">보석</button>
  <button @click="test.armories.colosseums('미르오스')">증명의 전장</button>
  <button @click="test.armories.collectibles('미르오스')">수집형 포인트</button>
  <button @click="test.armories.arkpassive('미르오스')">아크 패시브</button>
  <button @click="test.armories.arkgrid('미르오스')">아크 그리드</button>

  <main>
    
  </main>
</template>
<script setup></script>
