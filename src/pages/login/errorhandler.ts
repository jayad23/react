export const loginErrorHandler = (msn: string) => {
	const msnCut = msn.split("/")[1];
	const keyDashless = msnCut.replaceAll("-", "");
	const keyDotless = keyDashless.replaceAll(".", "");
	const keyBraceless = keyDotless.replace(")", "");

	const message = {
		toomanyrequests: "Has intentado muchas veces, por favor espera unos minutos.",
		usernotfound: "Este usuario no se encuentra registrado.",
		wrongpassword: "La contraseña es incorrecta.",
		emailalreadyinuse: "Ya existe un usuario con este correo",
	};
	return message[keyBraceless as keyof typeof message];
};
