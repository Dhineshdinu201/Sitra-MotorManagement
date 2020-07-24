"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var no_load_power_measurement_form_component_1 = require("./no-load-power-measurement-form.component");
describe('NoLoadPowerMeasurementFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [no_load_power_measurement_form_component_1.NoLoadPowerMeasurementFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(no_load_power_measurement_form_component_1.NoLoadPowerMeasurementFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=no-load-power-measurement-form.component.spec.js.map