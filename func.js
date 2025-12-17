import fs from "fs/promises"


export async function GetPeopleList () {
  const res = await fetch(`https://spiestestserver-8l55.onrender.com/people`);
  try {
    const data = await res.text()
    fs.writeFile('PEOPLE.json', data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
    
    const js_data=JSON.parse(data)
    return js_data
  } catch (error) {
    console.error("Failed to load data");
  }
}


export async function GetCallRecordst () {
  const res = await fetch(`https://spiestestserver-8l55.onrender.com/transcriptions`);
  try {
    const data = await res.text()
    fs.writeFile('TRANSCRIPTIONS.json', data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
    
    const js_data=JSON.parse(data)
    return js_data
  } catch (error) {
    console.error("Failed to load data");
  }
}
await GetCallRecordst()


