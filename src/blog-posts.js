export const getPosts = () => {

    return [

        {
            title:"Hayat (?)",
            slug:"hayat",
            details:require("./posts/hayat.md").default,
            date:"20 Aralık 2019",
            back: "static/images/hayat.png",
        
        },

    {
        title:"Neden AŞK?",
        slug:"neden-ask",
        details:require('./posts/neden-ask.md').default,
        date:"21 Aralık 2019",
        back: "/static/images/neden.png",

 },
 {
     title:"Nahl 15(?)",
     slug:"nahl-15",
     details:require("./posts/nahl-15.md").default,
     date:"16 Haziran 2019",

}



];

 }