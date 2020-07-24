"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var full_load_measuremnt_form_component_1 = require("./full-load-measuremnt-form.component");
describe('FullLoadMeasuremntFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [full_load_measuremnt_form_component_1.FullLoadMeasuremntFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(full_load_measuremnt_form_component_1.FullLoadMeasuremntFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=full-load-measuremnt-form.component.spec.js.map