"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var no_load_test_results_form_component_1 = require("./no-load-test-results-form.component");
describe('NoLoadTestResultsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [no_load_test_results_form_component_1.NoLoadTestResultsFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(no_load_test_results_form_component_1.NoLoadTestResultsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=no-load-test-results-form.component.spec.js.map