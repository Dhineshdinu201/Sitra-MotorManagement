"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var motor_burnt_out_reasons_master_form_component_1 = require("./motor-burnt-out-reasons-master-form.component");
describe('MotorBurntOutReasonsMasterFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [motor_burnt_out_reasons_master_form_component_1.MotorBurntOutReasonsMasterFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(motor_burnt_out_reasons_master_form_component_1.MotorBurntOutReasonsMasterFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=motor-burnt-out-reasons-master-form.component.spec.js.map