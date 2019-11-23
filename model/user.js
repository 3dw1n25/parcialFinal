const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);

var User = require("./models/user"); // Importa modelo

// Crear un nuevo usuario pasando un objeto con los valores de cada propiedad
new User({
    name: "po",
    type: "bear",
    clasification: "mammal",
    legs: 4,
    fur: "yes"

}).save(); // ejecutar el método save