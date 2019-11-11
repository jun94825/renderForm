import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div class="d-flex">
          <p class="required" v-if="data.Required">*</p>
          <h5 style="margin-bottom: 0;">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <select class="dropdown" v-model="data.Answer">
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
  extends: dropdown_literal_date,
});
