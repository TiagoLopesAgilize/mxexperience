export const config = {
    // HOST : "http://localhost:3000",
    //HOST : "http://10.42.0.18:3000",

    //HOST_BLOCK_CHAIN :'http://45.55.144.89:3001',
    HOST:'http://45.55.144.89:80',
    WSS:'http://45.55.144.89:8000',
    //HOST_BLOCK_CHAIN_PAIR : "ws://45.55.144.89:6001",
    //HOST_BLOCK_CHAIN : "http://167.99.239.159:3001",
    //HOST : "http://167.99.239.159:3300",
    //WSS:'http://167.99.239.159:4555',

    HOST_BLOCK_CHAIN_PAIR : "ws://167.99.239.159:6001",
    HOST_BLOCK_CHAIN : "http://167.99.239.159/ws",
    //HOST_BLOCK_CHAIN : "http://167.99.239.159:3001",
    //HOST : "http://167.99.239.159",
    //WSS:'ws://167.99.239.159:8000',
    JWT_TOKEN_NAME: 'token',
    EMAIL_REGEXP : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // Passwords should be at least 8 characters long and should contain one number, one character and one special character.
    PASSWORD_REGEXP : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
}
