<template>
  <div class="profile-info column">
    <div class="column gap6">
      <div class="level-info column">
        <div class="class-img">
          <div class="diamond">
            <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_lance_master.png" alt="창술사" />
          </div>
        </div>
        <div class="class-name height40">{{ profiles.CharacterClassName }}</div>
        <div class="height40 cornsilk">{{ profiles.CharacterName }}</div>
        <div class="height40 gold">Lv.{{ profiles.CharacterLevel }}</div>
        <div class="expedition-level-info column">
          <div class="height40"></div>
          <div class="height40 gold">{{ profiles.ExpeditionLevel }}</div>
        </div>
      </div>
      <div class="profile-item height40">{{ profiles.Title }}</div>
      <div class="guild profile-item height40">{{ profiles.GuildName }}</div>
      <div class="profile-item height40 gold">{{ profiles.PvpGradeName }}</div>
      <div class="profile-item height40">
        <div class="gold">Lv.{{ profiles.TownLevel }}</div>
        <div class="cornsilk">{{ profiles.TownName }}</div>
      </div>
      <div class="profile-item height40 gray">특수장비</div>
    </div>
    <div class="special-info-slot">
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('나침반')">
        <div class="slot-img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('부적')">
        <div class="slot-img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
      <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem('문장')">
        <div class="slot-img">
          <img :src="item.Icon" alt="" v-if="item.Icon" />
        </div>
      </div>
    </div>
    <div class="arkpassive-title height40" v-if="arkpassive.IsArkPassive">절정 이거 어디서 가져오냐</div>
    <div class="arkpassive-info">
      <template v-if="arkpassive.IsArkPassive">
        <div class="evolution column">
          <div class="point-img height50">
            <div class="point">{{ arkpassive.Points[0].Value }}</div>
          </div>
          <div class="height50 gap6">
            <div class="gold">{{ arkpassive.Points[0].Description.split(" ")[0] }}</div>
            <div>{{ arkpassive.Points[0].Description.split(" ")[1] }}</div>
          </div>
        </div>
        <div class="enlightenment column">
          <div class="point-img height50">
            <div class="point">{{ arkpassive.Points[1].Value }}</div>
          </div>
          <div class="height50 gap6">
            <div class="gold">{{ arkpassive.Points[1].Description.split(" ")[0] }}</div>
            <div>{{ arkpassive.Points[1].Description.split(" ")[1] }}</div>
          </div>
        </div>
        <div class="leap column">
          <div class="point-img height50">
            <div class="point">{{ arkpassive.Points[1].Value }}</div>
          </div>
          <div class="height50 gap6">
            <div class="gold">{{ arkpassive.Points[1].Description.split(" ")[0] }}</div>
            <div>{{ arkpassive.Points[1].Description.split(" ")[1] }}</div>
          </div>
        </div>
      </template>
    </div>
    <div class="height40"></div>
  </div>
  <div class="column full">
    <div class="height50"></div>
    <div class="full">
      <div class="profile-equipment column">
        <div class="character-img">
          <img :src="profiles.CharacterImage" :alt="profiles.CharacterClassName" />
        </div>
        <div class="equipment-title height40">
          <div class="preset-title" v-if="activeTab == 'equipment'">장비 프리셋</div>
          <div class="toggle-detail" :class="{ active: showDetail }" v-if="activeTab == 'equipment'" @click="showDetail = !showDetail">
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
        <div class="profile-equipment-slot" v-if="activeTab == 'equipment'">
          <div class="slot-left column">
            <template v-for="type in equipmentType.left">
              <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot-img">
                  <img :src="item.Icon" alt="" v-if="item.Icon" />
                </div>
              </div>
            </template>
          </div>
          <div class="slot-right column">
            <template v-for="type in equipmentType.right">
              <div class="slot" :class="item.class" :data-grade="dataGrade(item.Grade)" v-for="item in getEquipmentItem(type)">
                <div class="slot-img">
                  <img :src="item.Icon" alt="" v-if="item.Icon" />
                </div>
                <div class="accessory_option column" v-if="item.option_grade && !showDetail">
                  <div :class="grade" v-for="grade in item.option_grade"></div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="profile-avatar-slot" v-if="activeTab == 'avatar'">
          <div :class="`slot-${key} column`" v-for="(horizontal, key) in avatarsType">
            <div :class="`slot-${key} column`" v-for="(vertical, key) in horizontal">
              <div class="slot-box" v-for="type in vertical">
                <div class="slot" :data-grade="dataGrade(item.Grade)" v-for="item in getAvatarsItem(type)">
                  <div class="slot-img">
                    <img :src="item.Icon" alt="" v-if="item.Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="equipment-tab height40">
          <div class="gray" :class="{ active: activeTab == 'equipment' }" @click="activeTab = 'equipment'">장비</div>
          <div class="gray" :class="{ active: activeTab == 'avatar' }" @click="activeTab = 'avatar'">아바타</div>
        </div>
        <div class="honor-box">
          <div class="honor-info height40" v-if="activeTab == 'equipment'">
            <div class="honor-grade" :data-honor-grade="dataHonorGrade(profiles.HonorPoint)"></div>
            <div class="honor-title">명예</div>
            <div class="honor-point gold">{{ profiles.HonorPoint }}</div>
            <div class="honor-guide"></div>
          </div>
        </div>
      </div>
      <div class="profile-ability column">
        <div class="level-info2 column">
          <div class="column">
            <div class="ability-title">장착 아이템 레벨</div>
            <div class="item-level-value">{{ profiles.ItemAvgLevel }}</div>
          </div>
          <div class="column">
            <div class="ability-title">전투력</div>
            <div class="combat-power-value">{{ profiles.CombatPower }}</div>
          </div>
        </div>
        <div class="profile-ability-basic column">
          <div class="ability-title">기본 특성</div>
          <div class="ability-value">
            <div class="gold">공격력</div>
            <div v-if="profiles.Stats">{{ profiles.Stats[7].Value }}</div>
          </div>
          <div class="ability-value">
            <div class="gold">최대 생명력</div>
            <div v-if="profiles.Stats">{{ profiles.Stats[6].Value }}</div>
          </div>
        </div>
        <div class="profile-ability-battle full" v-if="activeTab == 'equipment'"></div>
        <div class="profile-ability-tendency full" v-if="activeTab == 'avatar'"></div>
        <div class="detail-button">상세정보</div>
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
const arkpassive = ref({});
const equipmentType = ref({ left: ["투구", "어깨", "상의", "하의", "장갑", "무기"], right: ["목걸이", "귀걸이", "반지", "팔찌", "어빌리티 스톤", "보주"] });
const avatarsType = ref({ left: { top: ["무기", "악기"], bottom: ["발걸음", "잠김", "잠김"] }, right: { top: ["머리", "얼굴1", "얼굴2"], bottom: ["상의", "하의"] } });

onMounted(async () => {
  profiles.value = await test.armories.profiles("미르오스");
  equipment.value = await test.armories.equipment("미르오스");
  avatars.value = await test.armories.avatars("미르오스");
  arkpassive.value = await test.armories.arkpassive("미르오스");
  await test.armories.engravings("미르오스");
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
