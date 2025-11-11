<template>
  <client-only>
    <div class="full">
      <div id="div-profile"></div>
      <div class="column full">
        <div class="preset"></div>
        <div class="full">
          <div class="full lui-tab__content profile-equipment">
            <div class="profile-equipment__character">
              <img :src="profiles.CharacterImage" alt="창술사" />
              <div class="list_emblem"></div>
              <div class="honor_info">
                <span class="honor_grade" :data-honor-grade="honerGrade(profiles.HonorPoint)">명예</span>
                <span class="honor_point">{{ profiles.HonorPoint }}</span>
              </div>
            </div>
            <div class="profile-equipment__slot" v-if="activeTab == 'equipment'">
              <div class="slot_left">
                <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in armors">
                  <div class="slot_img"><img :src="item.Icon" alt="" /></div>
                </div>
                <div class="slot" :data-grade="dataGrade(weapon.Grade)">
                  <div class="slot_img"><img :src="weapon.Icon" alt="" /></div>
                </div>
              </div>
              <div class="slot_right">
                <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in accessories">
                  <div class="slot_img"><img :src="item.Icon" alt="" /></div>
                  <div class="accessory_option">
                    <span :class="grade" v-for="grade in item.option_grade"></span>
                  </div>
                </div>
                <div class="slot12" :data-grade="dataGrade(bracelet.Grade)">
                  <div class="slot_img"><img :src="bracelet.Icon" alt="" /></div>
                </div>
                <div class="slot13" :data-grade="dataGrade(stone.Grade)">
                  <div class="slot_img"><img :src="stone.Icon" alt="" /></div>
                </div>
                <div class="slot17" :data-grade="dataGrade(orb.Grade)">
                  <div class="slot_img"><img :src="orb.Icon" alt="" /></div>
                </div>
              </div>
              <div class="option_total">
                <div class="elixir"><font style="color: #ffd200">회심 2</font></div>
              </div>
            </div>
            <div class="profile-avatar__slot" v-if="activeTab == 'avatar'">
              <div class="slot1" data-grade="4" data-item="E210dcdd_012"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4500.png" alt="" /></div>
              <div class="slot1-1" data-grade=""></div>
              <div class="slot2" data-grade=""></div>
              <div class="slot3" data-grade="4" data-item="E210dcdd_013"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4496.png" alt="" /></div>
              <div class="slot3-1" data-grade=""></div>
              <div class="slot4" data-grade=""></div>
              <div class="slot5" data-grade=""></div>
              <div class="slot6" data-grade="4" data-item="E210dcdd_014"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4497.png" alt="" /></div>
              <div class="slot6-1" data-grade="3" data-item="E210dcdd_021"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_6504.png" alt="" /></div>
              <div class="slot7" data-grade="4" data-item="E210dcdd_015"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4498.png" alt="" /></div>
              <div class="slot7-1" data-grade="3" data-item="E210dcdd_022"><img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_6505.png" alt="" /></div>
              <div class="slot8" data-grade=""></div>
            </div>
          </div>
          <div id="div-ability">
            <div class="profile-ability-basic">
              <h4>기본 특성</h4>
              <ul>
                <li>
                  <span>공격력</span> <span>169026</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 적에게 주는 피해를 계산할 때 기준이 되는 값입니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 힘, 민첩, 지능과 무기 공격력을 기반으로 증가한 기본 공격력은 <font color="#99ff99">146082</font> 입니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 공격력 증감 효과로 공격력이 <font color="#99ff99">22944</font> 증가되었습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>최대 생명력</span> <span>312779</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 캐릭터의 최대 생명력을 나타냅니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 체력으로 최대 생명력이 <font color="#99ff99">187908</font> 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 생명 활성력으로 최대 생명력이 <font color="#99ff99">49.80%</font> 증가되었습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="profile-ability-battle" v-if="activeTab == 'equipment'">
              <h4>전투 특성</h4>
              <ul>
                <li>
                  <span>치명</span> <span>173</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 치명타 적중률이 <font color="#99ff99">6.19%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">32</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>특화</span> <span>1655</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 타격 시 듀얼 게이지 회복량이 <font color="#99ff99">82.86%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 집중 스킬의 피해량이 <font color="#99ff99">99.44%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 각성 스킬의 피해량이 <font color="#99ff99">36.17%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">32</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>제압</span> <span>79</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 피격이상 및 상태이상 대상에게 주는 피해량이 <font color="#99ff99">4.84%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 무력화 대상에게 주는 피해량이 <font color="#99ff99">5.64%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">36</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>신속</span> <span>549</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 공격 속도가 <font color="#99ff99">9.43%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 이동 속도가 <font color="#99ff99">9.43%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 스킬 재사용 대기시간이 <font color="#99ff99">11.78%</font> 감소합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">32</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>인내</span> <span>69</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물리 방어력이 <font color="#99ff99">5.64%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 마법 방어력이 <font color="#99ff99">5.64%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 보호막 효과가 <font color="#99ff99">1.76%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 생명력 회복 효과가 <font color="#99ff99">2.46%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">28</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>숙련</span> <span>75</span>
                  <div class="profile-ability-tooltip" v-if="false">
                    <ul>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 상태이상 공격 지속시간이 <font color="#99ff99">3.22%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 상태이상 피해 지속시간이 <font color="#99ff99">2.68%</font> 감소합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 무력화 피해량이 <font color="#99ff99">2.14%</font> 증가합니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 물약 및 원정대 레벨 보상 효과로 <font color="#99ff99">32</font>만큼 영구적으로 증가되었습니다.</textformat>
                      </li>
                      <li>
                        <textformat indent="-21" leftmargin="10"><font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.</textformat>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="profile-ability-tendency" v-if="activeTab == 'avatar'">
              <h4>성향</h4>
              <div class="chart-states-wrap" id="chart-states-wrap">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand"></div>
                  <div class="chartjs-size-monitor-shrink"></div>
                </div>
                <canvas id="chart-states" width="201" height="176" style="display: block; width: 201px; height: 176px" class="chartjs-render-monitor"></canvas>
                <div class="states_box">
                  <span class="states-01">
                    지성<span class="figure"><em>670</em></span>
                  </span>
                  <span class="states-02">
                    담력<span class="figure"><em>681</em></span>
                  </span>
                  <span class="states-03">
                    매력<span class="figure"><em>626</em></span>
                  </span>
                  <span class="states-04">
                    친절<span class="figure"><em>613</em></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script setup>
let activeTab = ref("equipment");
let profiles = ref({});
let equipment = ref([]);
let armors = ref([]);
let weapon = ref({});
let accessories = ref([]);
let bracelet = ref({});
let stone = ref({});
let orb = ref({});
onMounted(async () => {
  profiles.value = await test.armories.profiles("미르오스");
  equipment.value = await test.armories.equipment("미르오스");
  armors.value = equipment.value.filter((item) => item.Name.startsWith("+") && item.Type != "무기");
  weapon.value = equipment.value.find((item) => item.Type == "무기");
  accessories.value = equipment.value.filter((item) => item.Type == "목걸이" || item.Type == "귀걸이" || item.Type == "반지");
  for (let item of accessories.value) {
    let option_grade = [];
    let tooltip = JSON.parse(item.Tooltip);
    for (let key in tooltip) {
      if (containsString(tooltip[key], "연마 효과")) {
        console.log(tooltip[key].value.Element_001);
        let parser = new DOMParser();
        let html = parser.parseFromString(tooltip[key].value.Element_001, "text/html");
        for (let font of html.querySelectorAll("FONT")) {
          switch (font.color) {
            case "00B5FF":
              option_grade.push("item_grade_low");
              break;
            case "CE43FC":
              option_grade.push("item_grade_medium");
              break;
            case "FE9600":
              option_grade.push("item_grade_high");
              break;
            default:
          }
        }
        item["option_grade"] = option_grade;
      }
    }
  }
  bracelet.value = equipment.value.find((item) => item.Type == "팔찌");
  stone.value = equipment.value.find((item) => item.Type == "어빌리티 스톤");
  orb.value = equipment.value.find((item) => item.Type == "보주");
});

function containsString(obj, search) {
  if (typeof obj === "string") {
    return obj.includes(search);
  } else if (Array.isArray(obj)) {
    return obj.some((item) => containsString(item, search));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.values(obj).some((value) => containsString(value, search));
  }
  return false;
}

function honerGrade(grade) {
  if (Number(grade) < 100) {
    return 1;
  } else if (Number(grade) < 300) {
    return 2;
  } else if (Number(grade) < 500) {
    return 3;
  } else if (Number(grade) < 1000) {
    return 4;
  } else {
    return 5;
  }
}

function dataGrade(grade) {
  switch (grade) {
    case "일반":
      return 0;
    case "고급":
      return 1;
    case "희귀":
      return 2;
    case "영웅":
      return 3;
    case "전설":
      return 4;
    case "유물":
      return 5;
    case "고대":
      return 6;
    default:
      return 0;
  }
}
</script>
