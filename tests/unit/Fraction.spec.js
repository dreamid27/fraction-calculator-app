import { shallowMount } from "@vue/test-utils";
import FractionComponent from "@/components/FractionComponent.vue";
import { ERROR_MSG } from "../../utils/constants";

describe("FractionComponent.vue", () => {
  it("Check With Valid Input", () => {
    const wrapper = shallowMount(FractionComponent);
    const form = wrapper.find("form");
    const input =  wrapper.find("input");

    // Test With Separator
    input.setValue("18.215");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(15);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([
      { amount: 10000, qty: 1 },
      { amount: 5000, qty: 1 },
      { amount: 1000, qty: 3 },
      { amount: 100, qty: 2 }
    ]);

    // Test With Currency
    input.setValue("Rp17500");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(0);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([
      { amount: 10000, qty: 1 },
      { amount: 5000, qty: 1 },
      { amount: 1000, qty: 2 },
      { amount: 500, qty: 1 }
    ]);

    // Test With Precision After Comma
    input.setValue("Rp17.500,00");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(0);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([
      { amount: 10000, qty: 1 },
      { amount: 5000, qty: 1 },
      { amount: 1000, qty: 2 },
      { amount: 500, qty: 1 }
    ]);

    // Test With Currency, Separator And Precision
    input.setValue("Rp17.500,00");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(0);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([
      { amount: 10000, qty: 1 },
      { amount: 5000, qty: 1 },
      { amount: 1000, qty: 2 },
      { amount: 500, qty: 1 }
    ]);

    // Test With Leading Zero in Decimal and Separator
    input.setValue("005.000");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(0);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([{ amount: 5000, qty: 1 }]);

    // Test With Leading Zero in Decimal
    input.setValue("001000");
    form.trigger("submit");

    expect(wrapper.vm.leftFraction).toBe(0);
    expect(wrapper.vm.errors).toEqual([]);
    expect(wrapper.vm.listFractions).toEqual([{amount: 1000, qty: 1}]);
  });

  it("Validate Invalid Input With Separator", () => {
    const wrapper = shallowMount(FractionComponent);
    const form = wrapper.find("form");

    wrapper.setData({ inputAmount: "17,500" });
    form.trigger("submit");
    expect(wrapper.vm.errors).toEqual([ERROR_MSG.INVALID_SEPARATOR]);
    expect(wrapper.vm.listFractions).toEqual([]);
  });

  it("Validate Invalid Input Spacing", () => {
    const wrapper = shallowMount(FractionComponent);
    const form = wrapper.find("form");

    wrapper.setData({ inputAmount: "2 500" });
    form.trigger("submit");
    expect(wrapper.vm.errors).toEqual([ERROR_MSG.INVALID_SPACING]);
    expect(wrapper.vm.listFractions).toEqual([]);
  });

  it("Validate Invalid Input Position Currency", () => {
    const wrapper = shallowMount(FractionComponent);
    const form = wrapper.find("form");

    wrapper.setData({ inputAmount: "3000 Rp" });
    form.trigger("submit");
    expect(wrapper.vm.errors).toEqual([ERROR_MSG.INVALID_POSITION]);
    expect(wrapper.vm.listFractions).toEqual([]);
  });

  it("Validate Invalid Input Null", () => {
    const wrapper = shallowMount(FractionComponent);
    const form = wrapper.find("form");

    wrapper.setData({ inputAmount: "Rp " });
    form.trigger("submit");
    expect(wrapper.vm.errors).toEqual([ERROR_MSG.NOT_NULL]);
    expect(wrapper.vm.listFractions).toEqual([]);
  });
});
