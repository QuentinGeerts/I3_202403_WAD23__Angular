import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordCheckValidator(control: AbstractControl): ValidationErrors | null {

    if (control.value.password.length === 0)
        return { passwordRequired: "Le mot de passe est requis." };

    if (control.value.passwordCheck.length === 0)
        return { passwordCheckRequired: "La vérification du mot de passe est requise." };

    // Tester le format du mot de passe

    if (control.value.password !== control.value.passwordCheck)
        return { twoPasswordError: 'Les mots de passe sont différents.' };


    return null;
}