const jwt = require("jsonwebtoken");

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  console.log("Faltan argumentos");
}

function singToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option === "sign") {
  console.log(singToken({ sub: nameOrToken }, secret))
} else if (option === 'verify') {
  console.log(verifyToken(nameOrToken, secret))
} else {
  console.log("Las opciones deben ser sign or verify")
}
