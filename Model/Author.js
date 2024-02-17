class Author {
    constructor(name, email, password) {
      this.id = Date.now(); // Just for simplicity, you may use UUIDs or a proper ID generator
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = Author;