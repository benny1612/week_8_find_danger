import fs from "fs/promises";

export async function GetPeopleList() {
  const res = await fetch(`https://spiestestserver-8l55.onrender.com/people`);
  try {
    const data = await res.text();
    fs.writeFile("PEOPLE.json", data, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("File written successfully!");
    });

    const js_data = JSON.parse(data);
    return js_data;
  } catch (error) {
    console.error("Failed to load data");
  }
}

export async function GetCallRecordst() {
  const res = await fetch(
    `https://spiestestserver-8l55.onrender.com/transcriptions`
  );
  try {
    const data = await res.text();
    fs.writeFile("TRANSCRIPTIONS.json", data, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("File written successfully!");
    });

    const js_data = JSON.parse(data);
    return js_data;
  } catch (error) {
    console.error("Failed to load data");
  }
}

export async function SearchPeoplebyName(name) {
  const file = await fs.readFile("./PEOPLE.json", "utf8");

  const js_file = JSON.parse(file);
  const result =js_file.filter((person) => person.name==name)
  if (result.length >0){
    console.log (result)}else{console.log("person not found")}
  }



export async function SearchPeoplebyAge(age) {
  const file = await fs.readFile("./PEOPLE.json", "utf8");

  const js_file = JSON.parse(file);
 const result =js_file.filter((person) => person.age==age)
  if (result.length >0){
    console.log (result)}else{console.log("person not found")}
  }


export async function FindDangerousPeople() {
  const file = await fs.readFile("./TRANSCRIPTIONS.json", "utf8");
  const js_file = JSON.parse(file);
  const dangers_calls=js_file.filter((element)=>
      element.content.toLowerCase().includes("death") ||
      element.content.toLowerCase().includes("knife") ||
      element.content.toLowerCase().includes("bomb") ||
      element.content.toLowerCase().includes("attack")
    )
     
console.log(dangers_calls)

    
  }
// await GetCallRecordst();
// await FindDangerousPeople();
// export const get_p= await GetPeopleList()