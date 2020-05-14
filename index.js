const record = [
  {year: "2019", result: "N/A"},
  {year: "2018", result: "L"},
  {year: "2017", result: "N/A"},
  {year: "2016", result: "N/A"},
  {year: "2015", result: "N/A"},
  {year: "2014", result: "N/A"},
  {year: "2013", result: "N/A"},
  {year: "2012", result: "N/A"},
  {year: "2011", result: "N/A"},
  {year: "2010", result: "N/A"},
  {year: "2020", result: "W"}
]

function superbowlWin(array) {
  let result = array.find( record => record.result === "W")
  if (result) {
    return result.year;
  } else {
    return result;
  }
  
}