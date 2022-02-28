<template>
  <section class="rtl-examples">
    <HTMLExamples />
    <CSSExamples />
    <RTLCSSExamples />
  </section>
</template>
<script>
import HTMLExamples from "@/modules/RtlExamples/components/HTMLExamples.vue";
import CSSExamples from "@/modules/RtlExamples/components/CSSExamples.vue";
import RTLCSSExamples from "@/modules/RtlExamples/components/RTLCSSExamples.vue";
export default {
  name: "RtlExamples",
  components: { HTMLExamples, CSSExamples, RTLCSSExamples },
};
</script>
<style lang="scss" scoped>
/*!rtl:begin:ignore*/
.rtl-examples {
  display: flex;
  justify-content: center;
  & > * {
    border: 1px solid $default-line-color;
    border-right: none;
    &:last-child {
      border-right: 1px solid $default-line-color;
    }
  }
}
/*!rtl:end:ignore*/
</style>
