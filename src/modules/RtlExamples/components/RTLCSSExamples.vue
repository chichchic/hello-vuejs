<template>
  <section class="rtlcss-examples">
    <header>
      <h1>RTLCSS</h1>
    </header>
    <article>
      <section class="ltr-wrapper">
        <h2>left to right</h2>
        <ul class="bullet-list">
          <li>abc</li>
          <li>123</li>
        </ul>
        <ol class="number-list">
          <li v-for="num in 3" :key="num">{{ num }}</li>
        </ol>
        <section class="binary-div-wrapper">
          <div>div L</div>
          <div>div R</div>
        </section>
        <section class="image-text-wrapper">
          <img
            :src="require('@/assets/images/himedi_logo_signature.png')"
            alt="image-example"
          />
          text
        </section>
        <section class="binary-button-wrapper">
          <button>button1</button>
          <button>button2</button>
        </section>
        <section class="row-div-wrapper">
          <div v-for="num in 5" :key="num">{{ num }}</div>
        </section>
        <section class="row-input-wrapper">
          <input type="text" v-for="idx in 3" :key="idx" :value="idx" />
        </section>
        <section class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>header1</th>
                <th>header2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="textarea-wrapper">
          <textarea name="textarea" cols="20" rows="3" class="textarea">
This statement is used for testing.</textarea
          >
        </section>
      </section>
      <section class="rtl-wrapper">
        <h2>right to left</h2>
        <ul class="bullet-list">
          <li>abc</li>
          <li>123</li>
        </ul>
        <ol class="number-list">
          <li v-for="num in 3" :key="num">{{ num }}</li>
        </ol>
        <section class="binary-div-wrapper">
          <div>div L</div>
          <div>div R</div>
        </section>
        <section class="image-text-wrapper">
          <img
            :src="require('@/assets/images/himedi_logo_signature.png')"
            alt="image-example"
          />
          text
        </section>
        <section class="binary-button-wrapper">
          <button>button1</button>
          <button>button2</button>
        </section>
        <section class="row-div-wrapper">
          <div v-for="num in 5" :key="num">{{ num }}</div>
        </section>
        <section class="row-input-wrapper">
          <input type="text" v-for="idx in 3" :key="idx" :value="idx" />
        </section>
        <section class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>header1</th>
                <th>header2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="textarea-wrapper">
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
  name: "RTLCSSExamples",
  mounted() {
    this.addStyleSheet("app.rtl.css");
  },
  destroyed() {
    document
      .querySelectorAll("link[rel=stylesheet]")
      .forEach((e) => e.parentNode.removeChild(e));
    this.addStyleSheet("app.css");
  },
  methods: {
    addStyleSheet(path) {
      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.type = "text/css";
      link.href = "/css/" + path;
      document.head.appendChild(link);
    },
  },
};
</script>
<style lang="scss" scoped>
.rtlcss-examples {
  header {
    padding: 0.5rem 0;
  }
  article {
    display: flex;
    border-top: 1px solid $default-line-color;
  }

  h1 {
    font-size: 1.4rem;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    color: white;
    background-color: $primary-color;
  }
}
/*!rtl:rename*/
.ltr-wrapper {
  direction: ltr;
  /*!rtl:rename*/
  ul,
  ol {
    padding-left: 2rem;
  }
  /*!rtl:rename*/
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
    font-size: inherit;
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
</style>
