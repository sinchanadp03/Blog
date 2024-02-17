class Blog {
    constructor(title, content, authorId) {
      this.id = Date.now(); // Just for simplicity, you may use UUIDs or a proper ID generator
      this.title = title;
      this.content = content;
      this.authorId = authorId;
    }
  }
  
  module.exports = Blog;
  