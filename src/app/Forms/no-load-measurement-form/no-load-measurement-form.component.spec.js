"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var no_load_measurement_form_component_1 = require("./no-load-measurement-form.component");
describe('NoLoadMeasurementFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [no_load_measurement_form_component_1.NoLoadMeasurementFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(no_load_measurement_form_component_1.NoLoadMeasurementFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=no-load-measurement-form.component.spec.js.map