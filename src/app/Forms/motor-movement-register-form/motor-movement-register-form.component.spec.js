"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var motor_movement_register_form_component_1 = require("./motor-movement-register-form.component");
describe('MotorMovementRegisterFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [motor_movement_register_form_component_1.MotorMovementRegisterFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(motor_movement_register_form_component_1.MotorMovementRegisterFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=motor-movement-register-form.component.spec.js.map