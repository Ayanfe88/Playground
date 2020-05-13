const ArrBlogPosts = [];

function insertPost(res, req){
    ArrBlogPosts.push(req.body);
  res.send(req.body)
  ArrBlogPosts.push(req.body);
}
function getAllPost(req, res){
    res.send(ArrBlogPosts);
}

function getOne(res, req){
    const index = req.params.id-1;
   const post =  ArrBlogPosts[req.params.index];
   res.send(post);
}
 module.exports = {
     insertPost,
     getAllPost,
     getOne,
 }