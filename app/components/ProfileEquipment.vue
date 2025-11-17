<template>
  <div class="profile-info column">
    <div class="gap-item column">
      <div class="level-info column">
        <div class="top-space"></div>
        <div class="diamond-glow">
          <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_lance_master.png" alt="창술사" class="class-icon" />
        </div>
        <div class="level-info-text">{{ profiles.CharacterClassName }}</div>
        <div class="level-info-text cornsilk">{{ profiles.CharacterName }}</div>
        <div class="level-info-text gold">Lv.{{ profiles.CharacterLevel }}</div>
        <div class="bottom-space"></div>
        <div class="level-info__expedition">
          <div></div>
          <div class="level-info-text gold">{{ profiles.ExpeditionLevel }}</div>
        </div>
      </div>
      <div class="game-info__title profile-item">
        <div>{{ profiles.Title }}</div>
      </div>
      <div class="game-info__guild profile-item">
        <div class="guild">{{ profiles.GuildName }}</div>
      </div>
      <div class="level-info__pvp profile-item">
        <div class="gold">{{ profiles.PvpGradeName }}</div>
      </div>
      <div class="game-info__wisdom profile-item">
        <div class="gold">Lv.{{ profiles.TownLevel }}</div>
        <div class="cornsilk">{{ profiles.TownName }}</div>
      </div>
      <div class="special-info profile-item gray">특수장비</div>
    </div>
    <div class="special-info__slot">
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('나침반')">
        <div class="slot_img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('부적')">
        <div class="slot_img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('문양')">
        <div class="slot_img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
    </div>
    <div class="arkpassive__title">
      <div class="substitute">절정</div>
    </div>
    <div class="arkpassive--info">
      <div class="arkpassive_evolution column">
        <div class="point-info">
          <div class="point">120</div>
        </div>
        <div class="stigma_info">
          <div class="gold">6랭크</div>
          <div>27레벨</div>
        </div>
      </div>
      <div class="arkpassive_enlightenment column">
        <div class="point-info">
          <div class="point">101</div>
        </div>
        <div class="stigma_info">
          <div class="gold">6랭크</div>
          <div>28레벨</div>
        </div>
      </div>
      <div class="arkpassive_leap column">
        <div class="point-info">
          <div class="point">70</div>
        </div>
        <div class="stigma_info">
          <div class="gold">6랭크</div>
          <div>27레벨</div>
        </div>
      </div>
    </div>
    <div class="button"></div>
  </div>
  <div class="column full">
    <div class="preset"></div>
    <div class="full">
      <div class="profile-equipment column full">
        <div class="profile-equipment__character">
          <img :src="profiles.CharacterImage" :alt="profiles.CharacterClassName" />
        </div>
        <div class="div-top">
          <div class="preset-title" v-if="activeTab == 'equipment'">장비 프리셋</div>
          <div class="toggle-detail" :class="{ 'toggle-on': showDetail }" v-if="activeTab == 'equipment'" @click="showDetail = !showDetail">
            <div class="full">
              <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="9" r="8" />
                <line x1="15" y1="15" x2="21" y2="21" />
              </svg>
            </div>
            <div class="toggle-button">
              <div class="toggle"></div>
            </div>
          </div>
          <div class="preset-title" v-if="activeTab == 'avatar'">아바타 프리셋</div>
        </div>
        <div class="profile-equipment__slot" v-if="activeTab == 'equipment'">
          <div class="slot_left column">
            <template v-for="type in equipmentType.left">
              <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot_img">
                  <img :src="item.Icon" alt="" v-if="item.Icon" />
                </div>
              </div>
            </template>
          </div>
          <div class="slot_right column">
            <template v-for="type in equipmentType.right">
              <div class="slot" :class="item.class" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot_img">
                  <img :src="item.Icon" alt="" v-if="item.Icon" />
                </div>
                <div class="accessory_option column" v-if="item.option_grade && !showDetail">
                  <div :class="grade" v-for="grade in item.option_grade"></div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="profile-avatar__slot" v-if="activeTab == 'avatar'">
          <div :class="`slot_${key} column`" v-for="(horizontal, key) in avatarsType">
            <div :class="`slot_${key} column`" v-for="(vertical, key) in horizontal">
              <div v-for="type in vertical">
                <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getAvatarsItem(type)">
                  <div class="slot_img">
                    <img :src="item.Icon" alt="" v-if="item.Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-bottom column">
          <div class="tab">
            <div class="gray" :class="{ active: activeTab == 'equipment' }" @click="activeTab = 'equipment'">장비</div>
            <div class="gray" :class="{ active: activeTab == 'avatar' }" @click="activeTab = 'avatar'">아바타</div>
          </div>
          <div class="honor_info" v-if="activeTab == 'equipment'">
            <div class="honor_grade" :data-honor-grade="dataHonorGrade(profiles.HonorPoint)"></div>
            <div class="honor_text">명예</div>
            <div class="honor_point gold">{{ profiles.HonorPoint }}</div>
            <div class="honor_guide"></div>
          </div>
        </div>
      </div>
      <div class="profile-ability">
        <div class="profile-ability-basic"></div>
        <div class="profile-ability-battle" v-if="activeTab == 'equipment'"></div>
        <div class="profile-ability-tendency" v-if="activeTab == 'avatar'"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const activeTab = ref("equipment");
const showDetail = ref(false);
const profiles = ref({});
const equipment = ref([]);
const avatars = ref([]);
const equipmentType = ref({ left: ["투구", "어깨", "상의", "하의", "장갑", "무기"], right: ["목걸이", "귀걸이", "반지", "팔찌", "어빌리티 스톤", "보주"] });
const avatarsType = ref({ left: { top: ["무기", "악기"], bottom: ["발걸음", "잠김", "잠김"] }, right: { top: ["머리", "얼굴1", "얼굴2"], bottom: ["상의", "하의"] } });

onMounted(async () => {
  profiles.value = await test.armories.profiles("미르오스");
  equipment.value = await test.armories.equipment("미르오스");
  avatars.value = await test.armories.avatars("미르오스");
});

function getEquipmentItem(type) {
  let itemList = equipment.value.filter((item) => item.Type == type).map((item) => ({ ...item }));
  switch (type) {
    case "귀걸이":
    case "반지":
      if (itemList.length == 0) {
        itemList = [{}, {}];
      }
      if (itemList.length == 1) {
        itemList.push({});
      }
    case "목걸이":
      if (itemList.length == 0) {
        itemList = [{}];
      }
      for (let item of itemList) {
        if (Object.values(item).length > 0) {
          let option_grade = [];
          let tooltip = JSON.parse(item.Tooltip);
          for (let key in tooltip) {
            if (containsString(tooltip[key], "연마 효과")) {
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
      }
      break;
    case "팔찌":
      if (itemList.length == 0) {
        itemList = [{}];
      }
      for (let item of itemList) {
        item.class = "bracelet";
      }
      break;
    case "어빌리티 스톤":
      if (itemList.length == 0) {
        itemList = [{}];
      }
      for (let item of itemList) {
        item.class = "stone";
      }
      break;
    case "보주":
      if (itemList.length == 0) {
        itemList = [{}];
      }
      for (let item of itemList) {
        item.class = "orb";
      }
      break;
    default:
  }
  if (itemList.length == 0) {
    itemList = [{}];
  }
  return itemList;
}

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

function dataHonorGrade(grade) {
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

function getAvatarsItem(type) {
  let itemList = avatars.value.filter((item) => item.Type == type + " 아바타").map((item) => ({ ...item }));
  if (itemList.length == 0) {
    itemList = [{}];
  }
  return itemList;
}
</script>
