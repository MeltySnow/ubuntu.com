import {
  getPaymentInformation,
  getRenewalInformation,
} from "../set-modal-info.js";

import * as paymentMethods from "./fixtures/payment-methods.js";
import * as renewalData from "./fixtures/renewal-data.js";

describe("getPaymentInformation", () => {
  describe("given a visa payment method object", () => {
    it("should return an object of appropriate values that can be added to the DOM", () => {
      expect(getPaymentInformation(paymentMethods.visa)).toEqual({
        cardText: "Visa ending 6789",
        cardExpiry: "04/29",
        cardImage: "832cf121-visa.png",
        email: "hello@example.com",
        name: "Joe Bloggs",
      });
    });
  });

  describe("given a payment method object with a brand we don't recognise", () => {
    it("should return an object of appropriate values that can be added to the DOM", () => {
      expect(getPaymentInformation(paymentMethods.unknownBrand)).toEqual({
        cardText: "Foo ending 6789",
        cardExpiry: "04/29",
        cardImage: null,
        email: "hello@example.com",
        name: "Joe Bloggs",
      });
    });
  });
});

describe("getRenewalInformation", () => {
  describe("given a renewal data object", () => {
    it("should return an object of appropriate values that can be added to the DOM", () => {
      expect(getRenewalInformation(renewalData.advancedDesktop)).toEqual({
        endDate: "21 May 2021",
        name: "Renew &ldquo;uai-testing&rdquo;",
        products: "UA Infra Advanced Desktop",
        quantity: "5 &#215; US$25/year",
        startDate: "21 May 2020",
        total: "$125",
      });
    });
  });
});
