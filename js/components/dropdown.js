import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div>
          <span v-if="data.Required" class="badge badge-danger mr-1">必填</span>
          <h5 class="d-inline">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <select class="dropdown" v-model="data.Answer" @change="hello(data)" disabled>
          <option value="">請選擇</option>
          <option
            v-for="(item, index) in data.Options"
            :key="index"
            :value="item.Guid"
            >{{ item.Value }}</option
          >
        </select>
      </div>
    </div>
  `,
  methods: {
    hello(data) {
      // 比對 Guid 代入分數
      data.Options.forEach(item => {
        if (item.Guid === data.Answer) {
          data.QuestionScore = item.OptionScore;
        }
      });
    },
  },
  extends: dropdown_literal_date,
});
