<template>
  <section class="css-examples">
    <header>
      <h1>CSS</h1>
      <select v-model="unicodeBidi">
        <option disabled value="unicode-bidi">unicode-bidi</option>
        <option value="normal">normal</option>
        <option value="embed">embed</option>
        <option value="bidi-override">bidi-override</option>
        <option value="isolate">isolate</option>
        <option value="isolate-override">isolate-override</option>
        <option value="plaintext">plaintext</option>
      </select>
    </header>
    <article>
      <section class="ltr-wrapper">
        <h2>left to right</h2>
        <ul class="bullet-list" :style="directionStyle('ltr')">
          <li>abc</li>
          <li>123</li>
        </ul>
        <ol class="number-list" :style="directionStyle('ltr')">
          <li v-for="num in 3" :key="num">{{ num }}</li>
        </ol>
        <section class="binary-div-wrapper" :style="directionStyle('ltr')">
          <div>div L</div>
          <div>div R</div>
        </section>
        <section class="image-text-wrapper" :style="directionStyle('ltr')">
          <img
            :src="require('@/assets/images/himedi_logo_signature.png')"
            alt="image-example"
          />
          text
        </section>
        <section class="binary-button-wrapper" :style="directionStyle('ltr')">
          <button>button1</button>
          <button>button2</button>
        </section>
        <section class="row-div-wrapper" :style="directionStyle('ltr')">
          <div v-for="num in 5" :key="num">{{ num }}</div>
        </section>
        <section class="row-input-wrapper" :style="directionStyle('ltr')">
          <input type="text" v-for="idx in 3" :key="idx" :value="idx" />
        </section>
        <section class="table-wrapper">
          <table>
            <thead :style="directionStyle('ltr')">
              <tr>
                <th>header1</th>
                <th>header2</th>
              </tr>
            </thead>
            <tbody :style="directionStyle('ltr')">
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="textarea-wrapper">
          <textarea
            name="textarea"
            cols="20"
            rows="3"
            class="textarea"
            :style="directionStyle('ltr')"
          >
This statement is used for testing.</textarea
          >
        </section>
      </section>
      <section class="rtl-wrapper">
        <h2>right to left</h2>
        <ul class="bullet-list" :style="directionStyle('rtl')">
          <li>abc</li>
          <li>123</li>
        </ul>
        <ol class="number-list" :style="directionStyle('rtl')">
          <li v-for="num in 3" :key="num">{{ num }}</li>
        </ol>
        <section class="binary-div-wrapper" :style="directionStyle('rtl')">
          <div>div L</div>
          <div>div R</div>
        </section>
        <section class="image-text-wrapper" :style="directionStyle('rtl')">
          <img
            :src="require('@/assets/images/himedi_logo_signature.png')"
            alt="image-example"
          />
          text
        </section>
        <section class="binary-button-wrapper" :style="directionStyle('rtl')">
          <button>button1</button>
          <button>button2</button>
        </section>
        <section class="row-div-wrapper" :style="directionStyle('rtl')">
          <div v-for="num in 5" :key="num">{{ num }}</div>
        </section>
        <section class="row-input-wrapper" :style="directionStyle('rtl')">
          <input type="text" v-for="idx in 3" :key="idx" :value="idx" />
        </section>
        <section class="table-wrapper">
          <table>
            <thead :style="directionStyle('rtl')">
              <tr>
                <th>header1</th>
                <th>header2</th>
              </tr>
            </thead>
            <tbody :style="directionStyle('rtl')">
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="textarea-wrapper" :style="directionStyle('rtl')">
          <textarea name="textarea" cols="20" rows="3" class="textarea">
This statement is used for testing.</textarea
          >
        </section>
      </section>
    </article>
  </section>
</template>
<script>
export default {
  name: "CSSExamples",
  data: () => ({
    unicodeBidi: "isolate",
  }),
  methods: {
    directionStyle(direction) {
      return { direction, unicodeBidi: this.unicodeBidi };
    },
  },
};
</script>
<style lang="scss" scoped>
/*!rtl:begin:ignore*/
.css-examples {
  * {
    unicode-bidi: inherit;
  }
  header {
    padding: 0.5rem 0;
    position: relative;
    select {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
    }
  }
  article {
    display: flex;
    border-top: 1px solid $default-line-color;
  }
  ul,
  ol {
    padding-left: 2rem;
  }
  h1 {
    margin: 0;
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1rem;
    color: white;
    background-color: $primary-color;
  }
}
.ltr-wrapper,
.rtl-wrapper {
  &:not(:last-child) {
    border-right: 1px solid $default-line-color;
  }
  & > * {
    padding: 1rem;
    &:not(:last-child) {
      border-bottom: 1px solid $default-line-color;
    }
  }
}
.bullet-list {
}
.number-list {
}
.binary-div-wrapper {
  display: flex;
  justify-content: space-evenly;
  div {
    width: 5rem;
    border: 1px solid $default-line-color;
  }
}
.image-text-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 5rem;
    margin-right: 0.5rem;
  }
}
.binary-button-wrapper {
  display: flex;
  justify-content: space-evenly;
}
.row-div-wrapper {
  display: flex;
  justify-content: space-evenly;
  & > * {
    border: 1px solid $default-line-color;
    padding: 1rem;
  }
}
.row-input-wrapper {
  display: flex;
  justify-content: space-evenly;
  input {
    padding: 0 1rem;
    width: 5rem;
  }
}
.table-wrapper {
  display: flex;
  justify-content: center;
  table,
  td {
    border: 1px solid $default-line-color;
  }

  thead,
  tfoot {
    background-color: $default-line-color;
    color: #fff;
  }
}
.textarea-wrapper {
}
/*!rtl:end:ignore*/
</style>
