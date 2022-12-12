const createElementHelper = (type, textContent, className) => {
  let newElement = document.createElement(type);
  newElement.textContent = textContent;
  newElement.className = className;
  return newElement;
};

/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let myTable = createElementHelper("table", "", "myTable");
document.body.appendChild(myTable);

let myTableHead = createElementHelper("tr", "", "");
myTable.appendChild(myTableHead);

let myTh = tableInfo.tableHeader.map((e) => {
  let myThElement = createElementHelper("th", e, "");
  return myThElement;
});
myTableHead.append(...myTh);

let myTableBody = tableInfo.tableContent.map((e) => {
  let bodyList = createElementHelper("tr", "", "");
  bodyList.innerHTML = `<td>${e["Student Name"]}</td>
  <td>${e["Age"]}</td>
  <td>${e["Phone"]}</td>
  <td>${e["Address"]}</td>`;
  return bodyList;
});

myTable.append(...myTableBody);
/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let myOl = createElementHelper("ol", "orderedList", "myOl");
document.body.appendChild(myOl);

let myList = list.map((e) => {
  let myLi = createElementHelper("li", e, "myLi");
  return myLi;
});

myOl.append(...myList);

let myUl = createElementHelper("ul", "unorderedList", "myUl");
document.body.appendChild(myUl);

let myList1 = list.map((e) => {
  let myLi = createElementHelper("li", e, "myLi");
  return myLi;
});

myUl.append(...myList1);

/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let myDrop = createElementHelper("select", "", "mySelect");
document.body.appendChild(myDrop);

let myOption = dropDownList.map((e) => {
  let myChoice = createElementHelper("option", e.content, "");
  myChoice.value = e.value;
  return myChoice;
});
myDrop.append(...myOption);
