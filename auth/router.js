const { Router } = require("express");
const { toJWT } = require("./jwt");
const bcrypt = require("bcryptjs")
const AdminUser = require("../adminUser/model")
const auth = require("./middleware")

const router = Router()

router.post("/login", (request, response, next) => {
  const {name, password} = request.body

  if (name && password){
    AdminUser.findOne({
      where: {
        name: name
      }
    })
    .then(entity => {
      if(!entity){
        response.status(400).send({message: "Not allowd to login in"})

      }  else if (bcrypt.compareSync(password, entity.password)) {
        response.send({
          jwt: toJWT({ userId: entity.id }),
          name: entity.name
        });
      } else {
        response.status(400).send({
          message: "Password was incorrect"
        });
      }
    })
    .catch(error => {
      console.error(error);
      response.status(500).send({
        message: "Something went wrong"
      });
    });
} else {
  response.status(400).send({
    message: "Please fill in a valid name & password"
  });
}
});

router.get("/secret-endpoint", auth, (request, response, next) => {
response.send({
  message: `Thanks for visting the secret endpoint ${request.user.name}. `
});
});

module.exports = router;
