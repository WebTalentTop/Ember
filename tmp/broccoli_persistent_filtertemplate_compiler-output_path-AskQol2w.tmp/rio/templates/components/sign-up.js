export default Ember.HTMLBars.template({"id":"2kDa6/I4","block":"{\"statements\":[[6,[\"unless\"],[[28,[\"step5\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"col s8 offset-s2 field-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"onboarding-container\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"step-indicator\"],[13],[0,\"\\n      Step \"],[1,[26,[\"currentStep\"]],false],[0,\"/\"],[1,[26,[\"totalSteps\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"input-container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"step1\"]]],null,{\"statements\":[[6,[\"transition-group\"],null,[[\"transition-class\"],[\"exampletwo\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"single-input-wrapper\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"id\",\"value\",\"placeholder\",\"class\"],[\"name\",[28,[\"name\"]],\"Name\",\"input-caption\"]]],false],[0,\"\\n            \"],[11,\"label\",[]],[13],[0,\"Name\"],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"step2\"]]],null,{\"statements\":[[6,[\"transition-group\"],null,[[\"transition-class\"],[\"exampletwo\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"single-input-wrapper\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"id\",\"value\",\"placeholder\",\"class\"],[\"email\",[28,[\"email\"]],\"Email\",\"input-caption\"]]],false],[0,\"\\n            \"],[11,\"label\",[]],[13],[0,\"Email Address\"],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"step3\"]]],null,{\"statements\":[[6,[\"transition-group\"],null,[[\"transition-class\"],[\"exampletwo\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"single-input-wrapper\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"id\",\"value\",\"placeholder\",\"class\"],[\"company\",[28,[\"company\"]],\"Company\",\"input-caption\"]]],false],[0,\"\\n            \"],[11,\"label\",[]],[13],[0,\"Company\"],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"step4\"]]],null,{\"statements\":[[6,[\"transition-group\"],null,[[\"transition-class\"],[\"exampletwo\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"single-input-wrapper\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"id\",\"value\",\"placeholder\",\"class\"],[\"mobile\",[28,[\"mobile\"]],\"Mobile Number\",\"input-caption\"]]],false],[0,\"\\n            \"],[11,\"label\",[]],[13],[0,\"Mobile\"],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n    \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"validate-error\"],[13],[0,\"\\n      \"],[1,[26,[\"validateError\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"btn-group\"],[13],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"step1\"]]],null,{\"statements\":[[0,\"        \"],[11,\"button\",[]],[15,\"class\",\"btn waves-effect waves-light white-text grey prev-btn\"],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"prevStep\"],null],null],[13],[0,\"\\n          Previous\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[11,\"button\",[]],[15,\"class\",\"btn waves-effect waves-light white-text next-btn blue\"],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"nextStep\"],null],null],[13],[0,\"\\n        Next Step\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"step5\"]]],null,{\"statements\":[[6,[\"transition-group\"],null,[[\"transition-class\"],[\"exampletwo\"]],{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row field-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"last-process-container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"left-board\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-input\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"caption-label\"],[13],[0,\"Name\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"content-label\"],[13],[1,[26,[\"name\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-input\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"caption-label\"],[13],[0,\"Company\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"content-label\"],[13],[1,[26,[\"company\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-input\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"caption-label\"],[13],[0,\"Email\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"content-label\"],[13],[1,[26,[\"email\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-input\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"caption-label\"],[13],[0,\"Mobile\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"content-label\"],[13],[1,[26,[\"mobile\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"right-board\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"card-input\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"caption-label\"],[13],[0,\"Verification Code\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"content-label\"],[13],[0,\"24GAFa\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[13],[0,\"\\n        \"],[11,\"input\",[]],[15,\"id\",\"agree\"],[15,\"type\",\"checkbox\"],[15,\"class\",\"material_checkbox\"],[13],[14],[0,\"\\n        \"],[11,\"label\",[]],[15,\"for\",\"agree\"],[15,\"class\",\"agree\"],[13],[0,\"Agree with terms and conditions\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn waves-effect waves-light white-text sign-up-btn\"],[13],[0,\"\\n        Sign Up\\n      \"],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}","meta":{"moduleName":"rio/templates/components/sign-up.hbs"}});