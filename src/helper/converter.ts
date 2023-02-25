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

    for (let line of lines) {
        const parts = line.split('=');
        if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim().replace(/"/g, '');
        json[key] = value;
        }
    }
    console.log(JSON.stringify(json));
    return JSON.stringify(json,null,2);
}
  

export {convertJsonToENV,convertENVtoJSON}