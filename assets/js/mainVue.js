$(document).ready(function () {
    const app = Vue.createApp({
        data() {
            return {
                dateList: getDates(),
                matchList: []
            }
          },
          methods: {
            dateFilter(){

            }
          }
      })

      app.mount('#vueapp')
});

function getDates() {
    let dates = [];
    for (let index = 0; index < 11; index++) {
            dates.push({
                'day': moment().add(index, 'day').format('DD'),
                'month': moment().add(index, 'day').format('MMMM')
            });
    
            if(index ==  11 - 1){
               return dates
            }
    }
}