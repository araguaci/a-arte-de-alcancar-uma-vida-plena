<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = this.$route.params.file
      const pdfUrl = '/o-pequeno-livro-de-tradicoes-japonesas' + file + '.pdf'
      // window.open(pdfUrl, '_blank')
    }
  }
}
</script>
