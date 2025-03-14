db = db.getSiblingDB('admin');

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [
        {role: 'root', db: 'admin'}
    ]
});

db = db.getSiblingDB('smartpot');

db.createCollection('usuarios');
db.usuarios.insertMany([
    {
        "_id": ObjectId("672811d1c78d172fd8a89775"),
        "name": "Pedro",
        "lastname": "Perez",
        "email": "juan.perez@example.com",
        "create_at": ISODate("2025-03-014T00:20:07.973Z"),
        "password": "$2a$12$GC.NPn9b78Qp6Q9zzQfGveFHplXEL6wkbGOoEXMYT9nDIWykJka46", //Password123@
        "role": "USER",
        "_class": "smartpot.com.api.Models.Entity.User"
    }
]);