import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {

    if (control.value.length === 0) return { requis: "Champ obligatoire" };
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value)) return { pattern: "Votre email ne respecte pas le format d'un email." }

    return null;

}