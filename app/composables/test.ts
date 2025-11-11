const baseUrl = "https://developer-lostark.game.onstove.com";
const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1OTEifQ.oZUpR_ZdnZFAM-O-gfrt52--ks9n7RG-Ey0kRnltTKo_skyzoAlFg1UBROUtWGJRdmqVmzFypLpecggLybjevxcxdPNZZOyumNNdnuRAMgnfOojkcJPbKejsiQ_LbSX8O0CdvQz9oyX49xlbq6ja5lh12z5tPu-HUj-o5_2rganpTw9l8ws30WMn3EpCuuDDRutqbthpYZ-0iUVPE6pry3oOK6BnO04qrP5fOy7v1nlslAknQscxAfTya7VxkPyMmASZdfVzLL2vAcZel1j2eyiTuqn4J6adgdfssAZCsP10oWhuNW7eiYvnsoTvtQGbSx1q40kZfQ8VbtEqCnUoqA";

const get = async (path: string, params = {}) => {
  try {
    const response = await $fetch(baseUrl + path, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      query: params,
    });
    console.log(response);
    return response;
  } catch (error) {}
};

const post = async (path: string, params = {}) => {
  try {
    const response = await $fetch(baseUrl + path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: params,
    });
    console.log(response);
    return response;
  } catch (error) {}
};

const news = {
  async notices() {
    try {
      return await get(`/news/notices`, {});
    } catch (error) {}
  },
  async events() {
    try {
      return await get(`/news/events`, {});
    } catch (error) {}
  },
  async alarms() {
    try {
      return await get(`/news/alarms`, {});
    } catch (error) {}
  },
};

const characters = {
  async siblings(characterName: String) {
    try {
      return await get(`/characters/${characterName}/siblings`, {});
    } catch (error) {}
  },
};

const armories = {
  async profiles(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/profiles`, {});
    } catch (error) {}
  },
  async equipment(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/equipment`, {});
    } catch (error) {}
  },
  async avatars(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/avatars`, {});
    } catch (error) {}
  },
  async combatSkills(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/combat-skills`, {});
    } catch (error) {}
  },
  async engravings(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/engravings`, {});
    } catch (error) {}
  },
  async cards(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/cards`, {});
    } catch (error) {}
  },
  async gems(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/gems`, {});
    } catch (error) {}
  },
  async colosseums(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/colosseums`, {});
    } catch (error) {}
  },
  async collectibles(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/collectibles`, {});
    } catch (error) {}
  },
  async arkpassive(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/arkpassive`, {});
    } catch (error) {}
  },
  async arkgrid(characterName: String) {
    try {
      return await get(`/armories/characters/${characterName}/arkgrid`, {});
    } catch (error) {}
  },
};

const auctions = {
  async options() {
    try {
      return await get(`/auctions/options`, {});
    } catch (error) {}
  },
  async items() {
    try {
      let params = {
        ItemLevelMin: 0,
        ItemLevelMax: 0,
        ItemGradeQuality: null,
        ItemUpgradeLevel: null,
        ItemTradeAllowCount: null,
        SkillOptions: [
          {
            FirstOption: null,
            SecondOption: null,
            MinValue: null,
            MaxValue: null,
          },
        ],
        EtcOptions: [
          {
            FirstOption: null,
            SecondOption: null,
            MinValue: null,
            MaxValue: null,
          },
        ],
        Sort: "BIDSTART_PRICE",
        CategoryCode: 0,
        CharacterClass: "string",
        ItemTier: null,
        ItemGrade: "string",
        ItemName: "string",
        PageNo: 0,
        SortCondition: "ASC",
      };
      return await post(`/auctions/items`, params);
    } catch (error) {}
  },
};

const markets = {
  async options() {
    try {
      return await get(`/markets/options`, {});
    } catch (error) {}
  },
  async itemId(itemId: String) {
    try {
      return await get(`/markets/items/${itemId}`, {});
    } catch (error) {}
  },
  async items() {
    try {
      let params = {
        Sort: "GRADE",
        CategoryCode: 0,
        CharacterClass: "string",
        ItemTier: null,
        ItemGrade: "string",
        ItemName: "string",
        PageNo: 0,
        SortCondition: "ASC",
      };
      return await post(`/markets/items`, params);
    } catch (error) {}
  },
};

const gamecontents = {
  async calendar() {
    try {
      return await get(`/gamecontents/calendar`, {});
    } catch (error) {}
  },
};

export default {
  news,
  characters,
  armories,
  auctions,
  markets,
  gamecontents,
};
