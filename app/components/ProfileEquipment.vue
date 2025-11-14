<template>
  <div class="profile-info column">
    <div class="level-info"></div>
    <div class="game-info__title">
      <div>칭호</div>
      <div>알록달록한</div>
    </div>
    <div class="game-info__guild">
      <div>길드</div>
      <div>밥무</div>
    </div>
    <div class="level-info__pvp">
      <div>PVP</div>
      <div>5급</div>
    </div>
    <div class="game-info__wisdom">
      <div>영지</div>
      <div>Lv.70 미르오스의 영지</div>
    </div>
    <div class="special-info column">
      <div>특수 장비</div>
      <div class="special-info__slot">
        <div class="slot" data-grade="5">
          <div class="slot_img">
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_312.png" alt="" />
          </div>
        </div>
        <div class="slot" data-grade="5">
          <div class="slot_img">
            <img src="https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_308.png" alt="" />
          </div>
        </div>
        <div class="slot" data-grade="">
          <div class="slot_img">
            <!-- <img src="" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="arkpassive__title">
      <div class="substitute">절정</div>
    </div>
    <div class="arkpassive--info">
      <div class="arkpassive_evolution column">
        <div class="point">120</div>
        <div class="stigma_info"> <font color="#FFD200">6랭크</font> 27레벨 </div>
      </div>
      <div class="arkpassive_enlightenment column">
        <div class="point">101</div>
        <div class="stigma_info"> <font color="#FFD200">6랭크</font> 28레벨 </div>
      </div>
      <div class="arkpassive_leap column">
        <div class="point">70</div>
        <div class="stigma_info"> <font color="#FFD200">6랭크</font> 27레벨 </div>
      </div>
    </div>
  </div>
  <div class="column full">
    <div class="preset"></div>
    <div class="full">
      <div class="profile-equipment column full">
        <div class="profile-equipment__character">
          <img :src="profiles.CharacterImage" :alt="profiles.CharacterClassName" />
        </div>
        <div class="profile-equipment__slot" v-if="activeTab == 'equipment'">
          <div class="slot_left column">
            <template v-for="type in equipmentType.left">
              <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot_img">
                  <img :src="item.Icon" alt="" />
                </div>
              </div>
            </template>
          </div>
          <div class="slot_right column">
            <template v-for="type in equipmentType.right">
              <div class="slot" :class="item.class" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot_img">
                  <img :src="item.Icon" alt="" />
                </div>
                <div class="accessory_option column" v-if="item.option_grade">
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
                    <img :src="item.Icon" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-bottom column">
          <div class="tab">
            <div :class="{ active: activeTab == 'equipment' }" @click="activeTab = 'equipment'">장비</div>
            <div :class="{ active: activeTab == 'avatar' }" @click="activeTab = 'avatar'">아바타</div>
          </div>
          <div class="honor_info" v-if="activeTab == 'equipment'">
            <div class="honor_grade" :data-honor-grade="dataHonorGrade(profiles.HonorPoint)"></div>
            <div class="honor_text">명예</div>
            <div class="honor_point">{{ profiles.HonorPoint }}</div>
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
