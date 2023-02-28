// Objects

// Basic object definition

let book = {
              title:  "The Catcher in the Rye",
              author: "J.D. Salinger",
              published: 1951,
              keywords: ["classics","banned","nostalgia"]
};

console.log("Title = " + book.title);
console.log("Author = " + book.author);
console.log("Published in " + book.published);
console.log("Keywords = " + book.keywords);
console.log("Third keyword = " + book.keywords[2]);

let book2 = {
              title: "Hamlet",
              published: 1608,
              author: {
                        firstName: "William",
                        lastName: "Shakespeare",
                      }
              };

console.log("Author first name = " + book2.author.firstName);

let book3 = {
              title: "Hamlet",
              published: 1608,
              author: {
                        firstName: "William",
                        lastName: "Shakespeare",
                      },

              getAuthorName: function() {
                    return this.author.firstName + " " + this.author.lastName;
                    }
              };

console.log("Author name = " + book3.getAuthorName());

let rectangle = { width: 5, height: 10,
                  get area() {
                        return this.width*this.height;
                      },
                  set area(value) {
                        this.width = Math.sqrt(2.0*value);
                        this.height = this.width/2.0;
                      }
                  };

let area = rectangle.area;// calls getter method!
console.log("area = " + area);

rectangle.area = 200; // calls setter method!
console.log("width = " + rectangle.width);
console.log("height = " + rectangle.height);

let rectangle2 = rectangle; //rectangle2 and rectangle both point to the same memory location!!!
rectangle2.area = 800; // update rectangle2 area .. this then also updates rectangle area!!!
console.log("width = " + rectangle.width);
console.log("height = " + rectangle.height);
