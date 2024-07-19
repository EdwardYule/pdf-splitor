new Vue({
  el: '#app',
  data() {
    return {
      string: "1,5,24,35,45,55,57,61,68,75,90,95,128,132,135,139,149,159,176,184,187,191,206,217,233,238,246,249,253,256,265,270,280,291,293,297,305,313,323,328",
      offset: "27",
      total: "366",
      result: "",
      formattedResult: "",
    }
  },
  methods: {
    confirm(){
      const list = this.string.split(',');
      const result = [`1-${this.offset}`];
      // list.forEach((e, i) => {
      //   const current = +e;
      //   const next = +list[i + 1];
      //   const offset = +this.offset;
      //   if(i == 0){
      //     result.push(`${1}-${next + offset - 1}`)
      //     return;
      //   }
      //   if(i == list.length - 1){
      //     return;
      //   }
      //   if(i == list.length - 2){
      //     result.push(`${current + offset}-${next}`)
      //     return;
      //   }
      //   result.push(`${current + offset}-${next + offset - 1}`)
      // })
      list.forEach((e, i) => {
        const current = +e;
        const next = +list[i + 1];
        const offset = +this.offset;
        if(i == list.length - 1){
          result.push(`${current + offset}-${this.total}`)
        }else{
          result.push(`${current + offset}-${next + offset - 1}`)
        }
      });
      this.result = result.join(',');
    },
    split(result){
      if(result.length <= 128) return [result];
      const last = result.slice(0, 128).lastIndexOf(",");
      console.log(last)
      return [result.slice(0, last), ...this.split(result.slice(last + 1))];
    }
  },
  created(){
    // test
    this.confirm();
    this.formattedResult = this.split(this.result);
  }
})