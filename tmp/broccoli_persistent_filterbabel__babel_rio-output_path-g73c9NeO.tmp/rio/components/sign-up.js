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
    currentStep: 1,
    actions: {
      nextStep: function nextStep(event) {
        var advancedStep = this.get('currentStep') + 1;
        this.set('currentStep', advancedStep);
        var step1 = false;
        var step2 = false;
        var step3 = false;
        var step4 = false;
        if (advancedStep === 2) {
          step2 = true;
        }
        if (advancedStep === 3) {
          step3 = true;
        }
        if (advancedStep === 4) {
          step4 = true;
        }
        this.set('step1', step1);
        this.set('step2', step2);
        this.set('step3', step3);
        this.set('step4', step4);
      }
    }
  });
});