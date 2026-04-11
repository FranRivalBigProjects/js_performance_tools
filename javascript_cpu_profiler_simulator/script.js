function analyze(){
let input=document.getElementById('input').value||"";

let insights = "";
if(input.includes("setInterval")) insights += "Potential memory leak (interval).<br>";
if(input.includes("while(true)")) insights += "CPU intensive loop detected.<br>";
if(input.includes("Promise")) insights += "Async flow detected.<br>";
if(input.includes("await")) insights += "Async/await usage detected.<br>";
if(input.includes("addEventListener")) insights += "Check for unremoved listeners.<br>";
if(input.length > 1000) insights += "Heavy script. Performance impact.<br>";

document.getElementById('result').innerHTML =
"<b>Performance Insights:</b><br>" + insights;
}
