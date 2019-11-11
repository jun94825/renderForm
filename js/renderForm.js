import './components/radio.js';
import './components/checkbox.js';
import './components/dropdown.js';
import './components/literal.js';
import './components/date.js';
import './components/number.js';
import './components/email.js';
import './components/english.js';

Vue.component('render-form', {
  data() {
    return {
      form: {},
    };
  },
  template: `
    <div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col">
            <div class="title">
              <p>{{ form.Title }}</p>
            </div>
            <div class="description">
              <p>{{ form.Description }}</p>
            </div>
            <component
              v-for="(item, index) in form.Questions"
              :key="index"
              :data="item"
              :index="index"
              :is="item.Type"
              :id="item.Guid"
            ></component>
          </div>
        </div>
      </div>
    </div>
  `,
  watch: {
    form() {
      /* 隱藏跳題 */
      this.$nextTick(() => {
        this.form.Questions.forEach(Question => {
          if (Question.Type !== 'checkbox') {
            Question.Options.forEach(Option => {
              if (Question.Answer === Option.Guid) {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: true });
                });
              } else {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: false });
                });
              }
            });
          } else {
            if (Question.Answer.length === 0) {
              Question.Options.forEach(Option => {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: false });
                });
              });
            } else {
              Question.Answer.forEach(guid => {
                Question.Options.forEach(Option => {
                  if (guid !== Option.Guid) {
                    Option.Binding.forEach(Guid => {
                      eventBus.$emit('connect', { Guid, status: false });
                    });
                  }
                });
              });
            }
          }
        });
      });
    },
  },
  methods: {
    getFormJSON() {
      const origin = JSON.parse(JSON.stringify(this.form));

      this.form.Questions.forEach(item => {
        if (item.Type !== 'checkbox') {
          if (item.Answer.length > 0) {
            const arr = [];
            arr.push(item.Answer);
            item.Answer = arr;
          } else {
            item.Answer = [];
          }
        }
      });

      const edited = JSON.stringify(this.form);

      this.form = origin;

      return edited;
    },
    renderForm(obj) {
      obj.Questions.forEach(item => {
        if (item.Type !== 'checkbox') {
          if (item.Answer.length === 1) {
            item.Answer = item.Answer[0];
          } else {
            item.Answer = '';
          }
        }
      });

      this.form = obj;
    },
    checkRequired() {
      /*
        除了確認該題目是否為必填而且答案是否為空值之外，
        如果題目是必填但沒有出現在畫面上則忽略該題，
        沒有出現在畫面上的意思是該題有被綁定但父題選取的選項並沒有選到讓該題顯示的選項。
      */
      const visibleQuesList = this.form.Questions.filter(item => {
        return document.getElementById(item.Guid);
      });

      return !visibleQuesList.some(
        item => item.Required && item.Answer.length === 0
      );

      // return !this.form.Questions.some(
      //   item => item.Required && item.Answer.length === 0
      // );
    },
    checkEmail() {
      const hello = this.form.Questions.filter(item => {
        return item.Type === 'email';
      });

      let res = true;

      hello.forEach(item => {
        if (!this.validateEmail(item.Answer)) {
          res = false;
        }
      });

      return res;
    },
    validateEmail(email) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(String(email).toLowerCase());
    },
  },
});

const vm = new Vue({
  el: '#app',
});

window.jun = {
  getRenderFormJS: vm.$refs.apple.getFormJSON,
  renderForm: vm.$refs.apple.renderForm,
  checkRequired: vm.$refs.apple.checkRequired,
  checkEmail: vm.$refs.apple.checkEmail,
};
