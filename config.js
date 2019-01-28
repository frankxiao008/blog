module.exports = {
    port:3000,
    name:'Saihong Xiao personal website.',
    describe:'这是李湘华的个人网站',
    //mongodb: 'mongodb://localhost:27017/myblog',
    // mongodb:'mongodb://<dbuser>:<dbpassword>@ds113855.mlab.com:13855/myblog',
    mongodb: 'mongodb://myblog:Xshseneca1*@ds113855.mlab.com:13855/myblog',
    dbInfo:{
        success:'database connection succeed!!!!',
        error:'database connection failed!!!!'
    },
    pageSize:10,
    showPages:7,
    session:{
        secret:'myblog',
        name:'myblog',
        maxAge:1800000
    }
}