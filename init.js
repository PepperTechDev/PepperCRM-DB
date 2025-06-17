db = db.getSiblingDB('admin');

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [
        {role: 'root', db: 'admin'}
    ]
});

db = db.getSiblingDB('peppercrm');

db.createCollection('users');
db.usuarios.insertMany([
    {
        "_id": ObjectId("672acb984eeb4a3443fd435b"),
        "name": "Sebastian",
        "lastname": "Lopez",
        "email": "sebastian.lopez@example.com",
        "create_at": ISODate("2024-11-06T01:50:44.073Z"),
        "password": "$2a$12$D4mjd6hkEDlbbXmHrB0uI.C5mz69.4jgGbE/g/GWw6ElWhEUKmwwq",
        "role": "USER",
        "_class": "peppercrm.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("67e766494e8594516a84f699"),
        "name": "pedro",
        "lastname": "Pérez",
        "email": "usuario@example.com",
        "create_at": ISODate("2025-03-29T03:17:29.000Z"),
        "password": "$2a$10$j53D2ciSMHE0joUwRr8YU.ijLq4Cpz.g9Fu2fKVfOGgfJwa7pqxte",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("680076069a8d16726e6d6df1"),
        "name": "Sebastian",
        "lastname": "Lopez",
        "email": "sebastianlopezosorno2005@gmail.com",
        "create_at": ISODate("2024-11-06T01:50:44.073Z"),
        "password": "$2a$12$D4mjd6hkEDlbbXmHrB0uI.C5mz69.4jgGbE/g/GWw6ElWhEUKmwwq",
        "role": "USER",
        "_class": "peppercrm.api.Models.Entity.User"
    },
    {
        "_id": ObjectId("681d80971a87195c1dfe07f7"),
        "name": "Lucas",
        "lastname": "Oscar",
        "email": "lucas@example.com",
        "create_at": ISODate("2025-05-09T04:12:07.000Z"),
        "password": "$2a$10$pOmC43JexH.Duev54H5Rv.ZYySz5Yllgb9nbRAVuoe.l5GbMxf0G2",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681d81ca1a87195c1dfe07f8"),
        "name": "Juanes",
        "lastname": "quiz",
        "email": "Juanes@example.com",
        "create_at": ISODate("2025-05-09T04:17:13.000Z"),
        "password": "$2a$10$0L8b5/taSQjosBzMwSHPoOWriwBve1juTI5q8I1w7z.QKLJLn6Mh2",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681d8206585c565e98b75bc8"),
        "name": "Luista",
        "lastname": "Papet",
        "email": "Luista@example.com",
        "create_at": ISODate("2025-05-09T04:18:14.000Z"),
        "password": "$2a$10$oIm0Q13mxgRLYbOCQnakTOuY8giLIC2VPBhzIsQU.lNggTh471Ir.",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681d85987d40964664ce7846"),
        "name": "Doncan",
        "lastname": "didi",
        "email": "doncan@example.com",
        "create_at": ISODate("2025-05-09T04:33:28.000Z"),
        "password": "$2a$10$9gM0RanXgI.RFVHYI9vClODmeH2aqpzS6o3yGLPvVwYFxOvVF5X82",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681d87aa2d8efb79f786032d"),
        "name": "clark",
        "lastname": "kent",
        "email": "clark.kent@example.com",
        "create_at": ISODate("2025-05-09T04:42:18.000Z"),
        "password": "$2a$10$3jp.aLxpnpVwxuZBOL.oZOs0K4PIdA9InVFqxCtVI5jNWmVLFX.la",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681e583e12b26318ebec2e23"),
        "name": "Jhoan",
        "lastname": "Escobar",
        "email": "jhoan.63@hotmail.com",
        "create_at": ISODate("2025-05-09T19:32:14.000Z"),
        "password": "$2a$10$Bi8/kIX1Hq3ka8SG8ltkquEpfUoi3v0VxKJziZnumERFc/NR8TASG",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681e7c247f2cf964cf0a3b0d"),
        "name": "Blessdas",
        "lastname": "Rojas",
        "email": "bles@gmail.com",
        "create_at": ISODate("2025-05-09T22:05:24.000Z"),
        "password": "$2a$10$0vLv/qg7xcGeN6yJ391RI.Fwyk.VCymAUhjJ/wYEuo9pcZoKO1W4a",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("681e7fc57f2cf964cf0a3b0e"),
        "name": "Juan",
        "lastname": "Alvarez",
        "email": "usuario@example.com",
        "create_at": ISODate("2025-05-09T22:20:52.000Z"),
        "password": "$2a$10$AmVZjfVjq/ZuzToCuc2Syu6.86SU2MR4vFzA4HyddCpzTs5m3946O",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("682fe70a405eaa35d4dd40f6"),
        "name": "Mariangel",
        "lastname": "Sierra",
        "email": "mariangel.sierra@example.com",
        "create_at": ISODate("2025-05-23T03:10:02.000Z"),
        "password": "$2a$10$LRhQkwsSq5cwc1CHMM4lZOOOsMdkNVhvWHBlUQmHhMLxUmWGfPD.W",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    },
    {
        "_id": ObjectId("6830ecc9f72a7868ff67ee9b"),
        "name": "Memo",
        "lastname": "Ortiz",
        "email": "david@poli.edu.co",
        "create_at": ISODate("2025-05-23T21:46:49.000Z"),
        "password": "$2a$10$q8jLLpBNofK0X0yKHXX7cuJpT22ABxHOAD9Mmkxa8LofGMqTCiHMu",
        "_class": "peppertech.crm.api.Users.Model.Entity.User"
    }
]);

db.createCollection('emails');
db.correos.insertMany([
    {
        "_id": ObjectId("68007bd05bc5f64f0fb58317"),
        "recipient": "sebastianlopezosorno2005@gmail.com",
        "msgBody": "Token para recuperar contraseña: eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY4MDA3NjA2OWE4ZDE2NzI2ZTZkNmRmMSIsImVtYWlsIjoic2ViYXN0aWFubG9wZXpvc29ybm8yMDA1QGdtYWlsLmNvbSIsInN1YiI6InNlYmFzdGlhbmxvcGV6b3Nvcm5vMjAwNUBnbWFpbC5jb20iLCJpYXQiOjE3NDQ4NjIxNTcsImV4cCI6MTc0NDg2NTE1N30.ITt8Wzb25xd2B8D0x5Jil-lC6wKG87NInVYdI4SAvX8",
        "subject": "Recuperar contraseña",
        "attachment": "",
        "_class": "peppertech.crm.api.Mail.Model.Entity.EmailDetails"
    },
    {
        "_id": ObjectId("6830ee31adbe59462ec64187"),
        "recipient": "david_cordoba82191@elpoli.edu.co",
        "msgBody": "Usuario, tienes una tarea que vence hoy a las 11:59 a.m.",
        "subject": "Recordatorio de Tarea",
        "_class": "peppertech.crm.api.Mail.Model.Entity.EmailDetails"
    },
    {
        "_id": ObjectId("6830eef6adbe59462ec64188"),
        "recipient": "david_cordoba82191@elpoli.edu.co",
        "msgBody": "Usuario, tienes una tarea que vence hoy a las 11:59 a.m.",
        "subject": "Recordatorio de Tarea",
        "_class": "peppertech.crm.api.Mail.Model.Entity.EmailDetails"
    },
    {
        "_id": ObjectId("6830ef702a9a7a4caab7d122"),
        "recipient": "david_cordoba82191@elpoli.edu.co",
        "msgBody": "Usuario, tienes una tarea que vence hoy a las 11:59 a.m.",
        "subject": "Recordatorio de Tarea",
        "_class": "peppertech.crm.api.Mail.Model.Entity.EmailDetails"
    },
    {
        "_id": ObjectId("6830efdd2a9a7a4caab7d123"),
        "recipient": "sebastian_lopez82221@elpoli.edu.co",
        "msgBody": "Usuario, tienes una tarea que vence hoy a las 11:59 a.m.",
        "subject": "Recordatorio de Tarea",
        "_class": "peppertech.crm.api.Mail.Model.Entity.EmailDetails"
    }
]);

db.createCollection("boards");
db.boards.insertMany([
    {
        _id: ObjectId("6850ea975cdd6631bbcfd59d"),
        name: "Kanban Project",
        description: "Project for team task management.",
        status: "ACTIVE",
        created_at: ISODate("2025-06-17T04:09:59Z"),
        start_date: ISODate("2025-06-10T14:45:23Z"),
        end_date: ISODate("2025-09-11T14:45:23Z"),
        owner: ObjectId("64a1f9b5e4b0f23d4c8a7e10"),
        administrators: [
            ObjectId("64a1f9b5e4b0f23d4c8a7e11"),
            ObjectId("64a1f9b5e4b0f23d4c8a7e15")
        ],
        editors: [ObjectId("64a1f9b5e4b0f23d4c8a7e12")],
        viewers: [ObjectId("64a1f9b5e4b0f23d4c8a7e13")],
        columns: [ObjectId("64a1f9b5e4b0f23d4c8a7e14")],
        _class: "peppertech.crm.api.Tasks.Model.Entity.Board"
    },
    {
        _id: ObjectId("6850eaf25cdd6631bbcfd59e"),
        name: "Kanban Project",
        description: "Project for team task management.",
        status: "ACTIVE",
        created_at: ISODate("2025-06-17T04:11:30Z"),
        start_date: ISODate("2025-06-10T14:45:23Z"),
        end_date: ISODate("2025-09-11T14:45:23Z"),
        owner: ObjectId("64a1f9b5e4b0f23d4c8a7e10"),
        administrators: [
            ObjectId("64a1f9b5e4b0f23d4c8a7e11"),
            ObjectId("64a1f9b5e4b0f23d4c8a7e15")
        ],
        editors: [ObjectId("64a1f9b5e4b0f23d4c8a7e12")],
        viewers: [ObjectId("64a1f9b5e4b0f23d4c8a7e13")],
        columns: [ObjectId("64a1f9b5e4b0f23d4c8a7e14")],
        _class: "peppertech.crm.api.Tasks.Model.Entity.Board"
    }
]);