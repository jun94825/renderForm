import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('email', {
  template: `
    <div class="question" v-if="display">
      <div class="d-flex align-items-center flex-wrap">
        <div>
          <span v-if="data.Required" class="badge badge-danger mr-1">必填</span>
          <h5 class="d-inline">{{ index + 1 }}. {{ data.Title }} : </h5>
        </div>
        <div class="input literal mt-2 mt-md-0 ml-3 ml-md-2">
          <input type="email" class="mt-1" v-model="data.Answer" placeholder="請輸入您的 E-mail" />
          <div class="line"></div>
        </div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
