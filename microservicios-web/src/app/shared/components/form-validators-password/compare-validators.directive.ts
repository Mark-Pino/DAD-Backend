import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
export function compareValidators(controlNameToCompare: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
        if (c.value === null || c.value.length === 0) {
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            const subscription: Subscription = controlToCompare.valueChanges.subscribe( () =>  {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? {'compare': true} : null;
    }

}


@Directive({
    selector: '[compare]',
    providers: [{provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true}]
})
export class CompareValidatorDirective implements Validator {
    // @ts-ignore
  @Input('compare') controlNameToCompare: string;

    validate(c: AbstractControl): ValidationErrors | null {
        return compareValidators(this.controlNameToCompare)(c);
    }
}
