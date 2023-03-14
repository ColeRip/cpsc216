let rectangle = { width: 5,
                  aspect_ratio: 2,

                  get area() {
                        return this.width*this.width/this.aspect_ratio;
                      },

                  get height() {
                        return this.width/this.aspect_ratio;
                  },

                  set height(value) {
                    this.height = value;
                  },

                  set area(value) {
                        this.width = Math.sqrt(this.aspect_ratio*value);
                        height(this.width/this.aspect_ratio);
                      }

                  };

var width = prompt("Enter the rectangle width: ");
rectangle.width = width;

var aspect = prompt("Enter the rectangle aspect ratio (w/h): ");
rectangle.aspect_ratio = aspect;

let area = rectangle.area;
let height = rectangle.height;

//console.log(rectangle.width);
//console.log(rectangle.height);
//console.log(rectangle.aspect_ratio);
//console.log(rectangle.area);

let okPressed = window.confirm("Would you like to see a popup window?");

if (okPressed) {
  let myWindow = window.open("","","width=350, height=200");
  myWindow.document.writeln("<h1>Rectangle Properties</h1>");
  myWindow.document.writeln("<table>");
  myWindow.document.writeln("<tr>");
  myWindow.document.writeln("<th>Width</th>");
  myWindow.document.writeln("<th>Height</th>");
  myWindow.document.writeln("<th>Aspect Ratio</th>");
  myWindow.document.writeln("<th>Area</th>");
  myWindow.document.writeln("</tr>");
  myWindow.document.writeln("<tr>");
  myWindow.document.writeln("<td>" + rectangle.width + "</td>");
  myWindow.document.writeln("<td>" + rectangle.height + "</td>");
  myWindow.document.writeln("<td>" + rectangle.aspect_ratio + "</td>");
  myWindow.document.writeln("<td>" + rectangle.area + "</td>");
  myWindow.document.writeln("</tr>");
  myWindow.document.writeln("</table>");
}
