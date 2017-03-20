function createPost() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("body").value;

  // make post template and HTML
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postFn = _.template(postTemplate);
  var postHTML = postFn({'title': title, 'body': body, 'author': author});

  // make page template
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageFn = _.template(pageTemplate);

  // create the comments template and HTML
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsFn = _.template(commentsTemplate)
  var commentsHTML = commentsFn()

  // create the page HTML with the post and comments HTML's, and add to main
  main = document.getElementsByTagName("main")[0]
  var pageHTML = pageFn({'post': postHTML, 'comments': commentsHTML});
  main.innerHTML += pageHTML
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
