<template>
  <div class="container">
    <div class="section-card">
      <div class="section-head">
        <h3>Fraction Rupiah Calculator</h3>
      </div>
      <div class="section-body">
        <form @submit="calculateFractionRupiah($event)" class="form-container">
          <div class="input-form">
            <input type="text" v-model="inputAmount" placeholder="Enter Amount Rupiah">
            <div class="error-message">
              <span v-for="error in errors" :key="error">{{ error }}</span>
            </div>
          </div>
          <button type="submit" class="btn-submit">Calculate</button>
          <div class="fraction-title">
            <h4>Results :</h4>
          </div>

          <div class="fraction-results">
            <span
              v-for="fraction in listFractions"
              v-bind:class="['chips-fraction-' + fraction.amount]"
              :key="fraction.amount"
            >{{ fraction.qty }}x {{ fraction.amount | currencyFormat }}</span>
            <span v-if="leftFraction">left {{ leftFraction | currencyFormat }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ERROR_MSG, AVAILABLE_FRACTIONS } from "../../utils/constants";

export default {
  title() {
    return `Fraction Page Calculator`;
  },
  data() {
    return {
      errors: [],
      inputAmount: "",
      availableFractions: AVAILABLE_FRACTIONS,
      listFractions: [],
      leftFraction: 0
    };
  },
  methods: {
    calculateFractionRupiah(e) {
      let currentAmount = this.inputAmount.replace(/[^\d,]+/g, "");
      currentAmount = +currentAmount.replace(",", ".");
      this.listFractions = [];
      this.errors = [];
      this.leftFraction = 0;

      // //check invalid separator
      let regInvalidSeparator = /^[0-9]+(,[0-9]{3,})+$/g;
      if (regInvalidSeparator.test(this.inputAmount)) {
        this.errors.push(ERROR_MSG.INVALID_SEPARATOR);
      }

      let regSpaceInNumber = /^[0-9]+(\s[0-9]{1,})+$/g;
      if (regSpaceInNumber.test(this.inputAmount)) {
        this.errors.push(ERROR_MSG.INVALID_SPACING);
      }

      let regInvalidCharacterPosition = /^[0-9]+(\s[a-zA-Z]{1,})+$/g;
      if (regInvalidCharacterPosition.test(this.inputAmount)) {
        this.errors.push(ERROR_MSG.INVALID_POSITION);
      }

      if (!currentAmount) {
        this.errors.push(ERROR_MSG.NOT_NULL);
      }

      if (this.errors.length <= 0 && currentAmount) {
        // // // Looping current amount until zero
        while (currentAmount != 0) {
          let fraction = this.availableFractions.find(x => currentAmount >= x);

          // if amount have fractions, push to fractions and calculate left amount;
          if (fraction) {
            let d = this.listFractions.find(x => x.amount == fraction);
            if (d) {
              d.qty += 1;
            } else {
              let objFraction = { amount: fraction, qty: 1 };
              this.listFractions.push(objFraction);
            }
            currentAmount -= fraction;
          } else {
            // if amount no have fractions, fill leftFractions and set current amount to zero;
            this.leftFraction = currentAmount;
            currentAmount -= currentAmount;
          }
        }
      }

      e.preventDefault();
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    currencyFormat: function(value) {
      if (!value) return "";
      let formatValue = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(+value);
      return formatValue;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fraction-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
  box-shadow: 1px 1px 3px #bfffe6;
  background: #d8f2f4;
  min-height: 235px;
  padding: 12px;
  align-content: flex-start;
}

.fraction-results span {
  padding: 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  margin: 4px 8px;
  background: #173f5f;
  box-shadow: 1px 1px 11px #173f5f;
}

.fraction-title {
  text-align: left;
  font-size: 14px;
  color: #565656;
}

.fraction-results span.chips-fraction-100000 {
  background: #ed5565;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #ff8e8e;
}

.fraction-results span.chips-fraction-50000 {
  background: #fb6e52;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #ff7559;
}

.fraction-results span.chips-fraction-20000 {
  background: #ffce55;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #ffce55;
}

.fraction-results span.chips-fraction-10000 {
  background: #a0d468;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #a0d468;
}

.fraction-results span.chips-fraction-5000 {
  background: #48cfae;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #48cfae;
}

.fraction-results span.chips-fraction-1000 {
  background: #4fc0e8;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #4fc0e8;
}

.fraction-results span.chips-fraction-500 {
  background: #ac91ee;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #ac91ee;
}

.fraction-results span.chips-fraction-100 {
  background: #ec87bf;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #ec87bf;
}

.fraction-results span.chips-fraction-50 {
  background: #5b9deb;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 1px 1px 12px #5b9deb;
}
</style>
