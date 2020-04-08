const customResponses = {
    success(payload) {
        return this.status(200).json({
            code: 200,
            payload,
        });
    },

    created(){
        return this.status(201).json({
            code:201,
            message:"Created",
        })
    },

    unauthorized() {
        return this.status(401).json({
            code: 401,
            message: "unauthorized",
        });
    },

    notFound() {
        return this.status(404).json({
            code: 404,
            error: "not_found",
        });
    },
};

module.exports = (req, res, next) => {
    Object.assign(res, customResponses);
    next();
};