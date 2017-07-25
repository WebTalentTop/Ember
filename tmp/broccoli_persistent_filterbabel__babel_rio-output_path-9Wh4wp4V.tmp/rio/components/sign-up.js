define('rio/components/sign-up', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    totalSteps: 4,
    name: '',
    email: '',
    company: '',
    mobile: '',
    currentStep: 1,
    validateError: ' ',
    emailValidate: function emailValidate(val) {
      var format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return format.test(val);
    },
    requiredValidate: function requiredValidate(val) {
      if (val !== undefined && val.trim().length !== 0) return true;
      return false;
    },

    actions: {
      hideError: function hideError() {
        this.set('validateError', ' ');
      },
      nextStep: function nextStep() {
        var currentStep = this.get('currentStep');
        var step1 = false;
        var step2 = false;
        var step3 = false;
        var step4 = false;
        var step5 = false;
        if (currentStep === 1) {
          if (this.requiredValidate(this.get('name'))) {
            step2 = true;
            this.set('currentStep', currentStep + 1);
            this.set('validateError', ' ');
          } else {
            step1 = true;
            this.set('validateError', 'Name field is required!');
          }
        }
        if (currentStep === 2) {
          if (this.emailValidate(this.get('email'))) {
            step3 = true;
            this.set('currentStep', currentStep + 1);
            this.set('validateError', ' ');
          } else {
            step2 = true;
            this.set('validateError', 'You have entered an invalid e-mail address. Please try again!');
          }
        }
        if (currentStep === 3) {
          step4 = true;
          this.set('currentStep', currentStep + 1);
        }
        if (currentStep === 4) {
          step5 = true;
          this.set('currentStep', currentStep + 1);
        }
        this.set('step1', step1);
        this.set('step2', step2);
        this.set('step3', step3);
        this.set('step4', step4);
        this.set('step5', step5);
      },
      prevStep: function prevStep() {
        var prevStep = this.get('currentStep') - 1;
        this.set('currentStep', prevStep);
        var step1 = false;
        var step2 = false;
        var step3 = false;
        var step4 = false;
        if (prevStep < 2) {
          step1 = true;
        }
        if (prevStep === 2) {
          step2 = true;
        }
        if (prevStep === 3) {
          step3 = true;
        }
        if (prevStep === 4) {
          step4 = true;
        }
        this.set('validateError', ' ');
        this.set('step1', step1);
        this.set('step2', step2);
        this.set('step3', step3);
        this.set('step4', step4);
      }
    }
  });
});