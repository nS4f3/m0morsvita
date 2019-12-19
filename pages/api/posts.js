// const posts = [{
// title:"sdsadsadsad",
// details:"skmdasklmdslamd",
// date:"sdadasdsadasda",

// },
// {
//     title:"asdsadasdasd",
//     details:"weoqıewpqoeoqwe",
//     date:"sdsdasd313",

// }];

// export default (req,res) => {
//     res.json({posts})
// }


// second try

import {getPosts} from "../../src/blog-posts";

export default (req,res) => {
    const posts = getPosts(); 
     res.json({posts})
 }