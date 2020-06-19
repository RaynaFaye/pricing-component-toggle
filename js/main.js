new Vue({
  el: '#app',
  data: {
    checkState: false,
    prices: [199.99, 249.99, 399.99],
    monthlyPrices: [],
    cardData: [
      {
        listItems: ['Basic', 199.99, '500 GB', 2, 3],
      },
      {
        listItems: ['Professional', 249.99, '1 TB', 5, 10],
      },
      {
        listItems: ['Master', 399.99, '2 TB', 10, 20],
      },
    ],
  },
  watch: {
    checkState() {
      if (this.checkState === true) {
        this.monthlyPrices = [];
        for (i = 0; i < this.cardData.length; i++) {
          this.monthlyPrices.push(this.cardData[i].listItems[1] / 10);
          this.cardData[i].listItems[1] = (this.cardData[i].listItems[1] / 10).toString().slice(0, 5);
        }
      } else {
        for (i = 0; i < this.monthlyPrices.length; i++) {
          this.cardData[i].listItems[1] = this.monthlyPrices[i] * 10;
        }
      }
    },
  },
});
