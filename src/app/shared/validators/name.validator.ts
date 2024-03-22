import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator (control: AbstractControl): ValidationErrors | null {

    if (control.value === "") return { requis: "Champ obligatoire" };
    if (control.value.length < 2) return { minLength: "Votre nom doit contenir au moins 2 caractères." }
    if (control.value === "test") return { notATest: "Vous n'êtes pas un test. :)" }

    return null;

}
