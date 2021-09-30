var webmaps =
  [
    ["California Department of Forestry and Fire Protection Wildfire Incidents Map",
    "https://www.fire.ca.gov/incidents/",
    "The map shows the location and extent of all current wildfires in the state of California. The map is based on an ESRI Basemap and has vector polygons showing wildfire extent as well as flame emoticons indicating the presence of a wildfire. One of its strengths is its ability to zoom in and out with ease, while one of its drawbacks is that one is not able to gather information from the fires by mousing over them. Relevant information is located next to the map for each fire. This map is meant for the public, as fire researchers would probably use more detailed fire information. An example of the GIS functionality used in this map is the extensive use of vector polygons. The primary purpose of this map is to show the location and extent of California wildfires. This map is more intuitive than many others that I have seen, however it is not as intuitive as the New York Times web map. This map shows relevant information yet is not particularly interactive."
    ],
    ["New York Times United States COVID-19 Risk Map",
    "https://www.nytimes.com/interactive/2021/us/covid-cases.html",
    "The Covid Risk Map displays Covid data by county for all counties that have data available. It has 7 tabs, Hot Spots (which displays the average daily cases per 100,000 people per county, Hospitalized (which shows the total number of people currently hospitalized with Covid-19), Vaccinations (which shows the percentage of residents that are fully vaccinated), Risk Levels (which displays the CDC risk level per county), Total Cases (which shows the current amount of total cases per county), Deaths (which shows the total amount of Covid deaths that have occured since the beginning of the pandemic), and Per Capita (showing the amount of people per capita who have contracted Covid at some point). The main strength of this map is that it is very interactive. Users are able to zoom in and out with ease and hover their mouse over a particular county to bring up its relevant information. The main problem with this map in my opinion is that its most prominent tab (the per 100,000 residents) is highly inaccurate in sparsely populated areas. There are many counties that are graded very poorly in this metric because they have high rates per 100,000 yet have significantly less than 100,000 residents. For example, North Slope Borough (the northernmost county in Alaska) has a rate of 155 per 100,000 rating despite only having 15 total cases. This can be very misleading when compared against a county like Worcester County which has significantly higher case numbers yet only has 22 cases per 100,000. The primary purpose of this map is to display country wide Covid-19 data on the same map, and allow viewers to compare different parts of the country with ease. The main GIS Functionality is geocoding, as each vector file (displaying county outlines) is able to display many different types of Covid-19 data. This map is meant to be viewable by anyone, researcher and civilian alike. It is designed to contain a lot of information but still be readable. The site is very intuitive, viewers are able to zoom in and out seamlessly and easily view the data displayed by each county. One thing I would recommend is to add the ability to compare two counties side by side."
    ]
  ];

//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);

// //A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.writeln(user_name);

//x = 22;
//const y = 33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);
//
// document.writeln("<button onclick='condition()'>Conditional Test</button>")
// function condition() {
//   x = confirm("Are you sure you want to proceed?");
//   if(x){
//     document.writeln("You choose Okay!");
//   }
//   else{
//     document.writeln("You choose Cancel!");
//   }
// }
//
//
// arr = ["Joe", "April", "Mark", "Sara"];
// for (var i=0; i < arr.length; i++){
//   document.writeln(arr[i],"<br>");
// }

function welcome()
{
  let a = "Please enter your name here.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a webpage
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

// document.write(welcome());
// // document.write(message);

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
