export default {
    jwtSecret: "CoolSecretHere",
    icesHookKey: "somecoolkey", // Should be set in the ices.py module for ices0
    trackStorage: "../files/tracks/", // Relative to this folder where config.ts exists.
    icecast: {
        host: "localhost",
        port: "8000",
        password: "hackme",
        streamName: "SelfRadio Stream",
        genre: "someGenre",
        mountPoint: "/stream",
        moduleType: "python"
    }
}