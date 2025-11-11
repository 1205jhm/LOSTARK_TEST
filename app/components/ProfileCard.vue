<template>
  <div id="profile-card" class="lui-tab__content profile-card">
    <div id="card-tab" class="profile-card__list">
      <div class="card-set__button">
        <button type="button" id="btnCardSet" data-cardlist="[0,1,2,3,4,5]" data-cardsetindex="0">세트효과0</button>
      </div>
      <ul id="cardList" class="card-list">
        <li data-cardindex="0">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_000">
            <strong><font color="#F99200">발탄</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_00_2.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
        <li data-cardindex="1">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_001">
            <strong><font color="#F99200">에키드나</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_03_6.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
        <li data-cardindex="2">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_002">
            <strong><font color="#F99200">에스더 루테란</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_02_3.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
        <li data-cardindex="3">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_003">
            <strong><font color="#F99200">악몽의 아브렐슈드</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_04_7.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
        <li data-cardindex="4">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_004">
            <strong><font color="#F99200">라제니스를 이끄는 니나브</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_05_7.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
        <li data-cardindex="5">
          <div class="card-slot" data-grade="5" data-awake="5" data-awakemax="5" data-item="C210dcdd_005">
            <strong><font color="#F99200">절망의 카멘</font></strong>
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_04_6.png" alt="" />
            <div class="card-awake"><div class="awake"></div></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="profile-card__text">
      <h4>장착 중인 카드 효과</h4>
      <div class="profile-card__content">
        <ul id="cardSetList" class="card-effect">
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 2세트</div>
            <div class="card-effect__dsc">수속성 피해 감소 +10.00%</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 4세트</div>
            <div class="card-effect__dsc">수속성 피해 감소 +10.00%</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 6세트</div>
            <div class="card-effect__dsc">수속성 피해 감소 +10.00%</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 6세트 (12각성합계)</div>
            <div class="card-effect__dsc">공격 속성을 뇌속성으로 변환</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 6세트 (18각성합계)</div>
            <div class="card-effect__dsc">뇌속성 피해 +7.00%</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 6세트 (24각성합계)</div>
            <div class="card-effect__dsc">뇌속성 피해 +4.00%</div>
          </li>
          <li data-cardsetindex="0">
            <div class="card-effect__title">날랜 뇌전의 숨결 6세트 (30각성합계)</div>
            <div class="card-effect__dsc">뇌속성 피해 +4.00%</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
