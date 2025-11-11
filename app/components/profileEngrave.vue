<template>
  <client-only>
    <div class="profile-ability-engrave">
      <h4>각인 효과</h4>
      <div class="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper">
          <ul class="swiper-slide swiper-slide-active" style="width: 287px; opacity: 1; transform: translate3d(0px, 0px, 0px)">
            <li>
              <span><font color="#FF6000">기습의 대가</font> <em class="emoticon_tooltip_engrave_grade_relic" width="27" height="27" vspace="-8"></em>x <font color="#FF6000">0</font></span>
              <div class="profile-ability-tooltip">
                <p>적에게 주는 피해가 <font color="#99ff99">4.80%</font> 증가하며, 백어택 성공 시 피해량이 추가로 <font color="#99ff99">15.00%</font> 증가한다.</p>
              </div>
            </li>
            <li>
              <span><font color="#FF6000">돌격대장</font> <em class="emoticon_ability_stone_blue" width="17" height="26" vspace="-7"></em><font color="#00b5ff">Lv.1</font> <em class="emoticon_tooltip_engrave_grade_relic" width="27" height="27" vspace="-8"></em>x <font color="#FF6000">4</font></span>
              <div class="profile-ability-tooltip">
                <p>이동속도 증가량의 <font color="#99ff99">55.50%</font> 만큼 적에게 주는 피해량이 증가한다.</p>
              </div>
            </li>
            <li>
              <span><font color="#FF6000">원한</font> <em class="emoticon_tooltip_engrave_grade_relic" width="27" height="27" vspace="-8"></em>x <font color="#FF6000">4</font></span>
              <div class="profile-ability-tooltip">
                <p>보스 및 레이드 몬스터에게 주는 피해가 <font color="#99ff99">21.00%</font> 증가하지만, 받는 피해가 <font color="#ff9999">20.00%</font> 증가한다.</p>
              </div>
            </li>
          </ul>
          <ul class="swiper-slide swiper-slide-next" style="width: 287px; opacity: 0; transform: translate3d(-287px, 0px, 0px)">
            <li>
              <span><font color="#FF6000">저주받은 인형</font> <em class="emoticon_ability_stone_blue" width="17" height="26" vspace="-7"></em><font color="#00b5ff">Lv.3</font> <em class="emoticon_tooltip_engrave_grade_relic" width="27" height="27" vspace="-8"></em>x <font color="#FF6000">4</font></span>
              <div class="profile-ability-tooltip">
                <p>적에게 주는 피해가 <font color="#99ff99">22.25%</font> 증가하지만, 받는 모든 회복 효과가 <font color="#ff9999">25.00%</font> 감소한다.</p>
              </div>
            </li>
            <li>
              <span><font color="#FF6000">마나 효율 증가</font> <em class="emoticon_tooltip_engrave_grade_relic" width="27" height="27" vspace="-8"></em>x <font color="#FF6000">4</font></span>
              <div class="profile-ability-tooltip">
                <p>마나 회복 속도가 <font color="#99ff99">20.00%</font> 증가하며, 마나를 사용하는 스킬이 적에게 주는 피해가 <font color="#99ff99">16.00%</font> 증가한다.</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-option">
          <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-disabled="true"></div>
          <div class="swiper-pagination swiper-pagination-fraction"><span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">2</span></div>
          <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  </client-only>
</template>
<script setup></script>
