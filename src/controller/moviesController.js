module.exports = {
    list: (req, res)=>{
        res.render("movie-list");
    },
    detail: (req, res)=> {
        res.render("movie-detail");
    },

};