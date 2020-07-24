"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var motor_name_plate_details_form_component_1 = require("./motor-name-plate-details-form.component");
describe('MotorNamePlateDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [motor_name_plate_details_form_component_1.MotorNamePlateDetailsFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(motor_name_plate_details_form_component_1.MotorNamePlateDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=motor-name-plate-details-form.component.spec.js.map