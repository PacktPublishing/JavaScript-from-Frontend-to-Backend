const Counter = {
  data() {
    return {
      count : parseInt(this.start),  // we initialize the count to the value of start
    }
  },
  template : "{{time()}} &nbsp;&nbsp; The counter is: {{count}}, double is: {{countX2}}",
  created() {
    var timer = setInterval(() => {
      this.count += 1;
    }, 1000)
  },
  methods : {
    time() {
     // return time as HH:MM:SS
     var date = new Date();
     var hour = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();
     if (hour < 10) hour = "0" + hour;
     if (min < 10) min = "0" + min;
     if (sec < 10) sec = "0" + sec;
     return "" + hour + ":" + min + ":" + sec + " ";
    }
  },
  computed : {
    countX2() {
      return 2 * this.count;
    }
  },
  props : [
    "start"
  ]
}

export default Counter;