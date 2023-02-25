const convertJsonToENV: (json: string) => string = (json: string): string => {
    const stringBuilder:string[] = [];
    const jsonObj = JSON.parse(json);
    for (const key in jsonObj) {
        if (Object.hasOwnProperty.call(jsonObj, key)) {
            stringBuilder.push(`${key}=${jsonObj[key]}`)
        }
      } 
    return stringBuilder.join("\n");
}

interface MyJSONObject {
    [key: string]: any;
  }

const convertENVtoJSON:(env:string) => string = (env:string):string =>{
    const json:MyJSONObject = {};
    const lines = env.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
    
        if (line.startsWith('#')) {
          continue;
        }
    
        const [key, value] = line.split('=').map(str => str.trim());
        json[key] = value;
      }
    console.log(JSON.stringify(json));
    return JSON.stringify(json,null,2);
}
  

export {convertJsonToENV,convertENVtoJSON}