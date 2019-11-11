import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('number', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div class="d-flex">
          <p class="required" v-if="data.Required">*</p>
          <h5 style="margin-bottom: 0;">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <div class="input literal mt-2 mt-md-0 ml-3 ml-md-2">
          <input type="number" class="form-control" v-model="data.Answer" />
          <div class="line"></div>
        </div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
