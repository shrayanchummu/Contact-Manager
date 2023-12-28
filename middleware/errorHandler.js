const { constants } = require("../constants");

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.send({
                title:"VALIDATION ERROR",
                message:err.message,
                stackTrace:err.stack
            });
            break;
            case constants.UNAUTHORIZED:
            res.send({
                title:"UNAUTHORIZED",
                message:err.message,
                stackTrace:err.stack
            });
            break;
            case constants.FORBIDDEN:
            res.send({
                title:"FORBIDDEN",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.send({
                title:"NOT FOUND",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.send({
                title:"SERVER ERROR",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        default:
            break;
    }
    
};

module.exports=errorHandler;