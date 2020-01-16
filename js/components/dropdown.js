import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div>
          <span v-if="data.Required" class="badge badge-danger mr-1">必填</span>
          <h5 class="d-inline">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <select class="dropdown form-control" v-model="data.Answer" @change="hello">
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
    hello() {
      if (this.ScoreEnable) {
        this.$emit('show');
      }
    },
  },
  extends: dropdown_literal_date,
});
