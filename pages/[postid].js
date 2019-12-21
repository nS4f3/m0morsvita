import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Blog = ({post}) => (
    <div>
    <div className="contanier">
      <h1>Mors Et Vita!</h1>

      <div className="devider-hero">
        
      </div>

      <div className="Blog-title">
      <h2>
        <Link href={post.slug}>
    <a>{post.title}</a>

        </Link>
      </h2>
    
  
   
  
  
  
      </div>
      <div className="devider">
        
      </div>


      <div className="post-back">
        <img src={post.back}></img>

      
    </div>
  
      <div className="devider">
        
      </div>
      <div className="Blog-post">

        <div className="blog">
        <ReactMarkdown source={post.details}/>
            
        
     </div>

  

  
      </div>
  
      </div>
  
    
      <style global jsx>{`
       
  .blog {
    border-radius: 10px 20px;
    border: solid 1px #cccccc;
    max-width:800px;
    width:100%;
    margin:10px;
    margin-top:30px;
    margin: 0 auto;
  }
  
  .Blog-title {
    border-radius: 10px 20px;
    border: solid 1px #cccccc;
    max-width:370px;
    width:100%;
    margin:10px;
    margin 0 auto;
    margin-bottom:30px;
  }
  
  .devider-hero {
    max-width:370px;
    width:100%;
    border-radius: 10px 20px;
    border: .3px solid  #f45c73;
    margin: 0 auto;
    margin-bottom:30px;
  }
  
  
  .devider {
    max-width:800px;
    width:100%;
    border-radius: 10px 20px;
    border: .3px solid  #f45c73;
    margin: 0 auto;
    margin-bottom:10px;
  }
  
  
  
  
  }
  .Blog-post {
    margin:20px;
    max-width:800px;
    width:100%;
    text-align:center;
    display:inline-block;
    margin: 0 auto;
    
  
  
  
  }
  
  .contanier {
    align-items:center;
    text-align:center;
    margin: 0 auto;
  }
  
  .footer {
  
  
    border-radius: 15px 30px;
    border : .2px solid #cccccc;
    max-width:800px;
    width:100%;
    text-align:center;
    margin: 0 auto;
  
   
  
  
  }


  .post-back {
    margin:0 auot;
    border-radius: 5px 10px;
    border: solid #cccccc 1px;
    width:100%;
    height:250px;
    margin: 10px;

  }

  img {
    heigh:100%;
    width:100%;
    margin:0 auot;
    marin: 5px;
  }
  ul li {
    list-style:none;
  }

  a {
    text-decoration:none;
    color: #f06540 ;
  }
      `}</style>
  
    </div>

  );
  
Blog.getInitialProps = async ({ req, query }) => {
    const res = await fetch(`https://morsvita.herokuapp.com/api/post/${query.postid}`);
    const json = await res.json();
    return { post:json.post };
  };
  
  
  export default Blog;
  
  
