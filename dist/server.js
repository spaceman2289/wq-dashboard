(()=>{var e={587:(e,t,n)=>{const o=n(127),r=n(960),{parseISO:a,isValid:s}=n(879),i=n(212),c=n(545),d=o.Router();var p;d.get("/sites",((e,t,n)=>{t.json(c)})),d.get("/data/:startDate/:endDate",(p=async(e,t,n)=>{const o={start:a(e.params.startDate),end:a(e.params.endDate)};if(!s(o.start)||!s(o.end))return n(r(400,"Dates must be in ISO format."));const c=await i(o);null===c?t.sendStatus(204):t.json(c)},(e,t,n)=>{p(e,t,n).catch(n)})),e.exports=d},212:(e,t,n)=>{const o=n(376),r=n(670),{add:a,format:s,parse:i,parseISO:c,isBefore:d}=n(879),{SalinityRecord:p}=n(567),y="yyyy-MM-dd",u=[91602,91404,91601,39481,39485];async function l(e){const t=`https://my.sfwmd.gov/dbhydroplsql/web_io.report_process?v_dbkey=${u.join("%2F")}&${function(e){return`v_period=uspec&v_start_date=${s(e.start,"yyyyMMdd")}&v_end_date=${s(e.end,"yyyyMMdd")}`}(e)}&v_report_type=format6&v_target_code=file_csv&v_run_mode=onLine&v_js_flag=Y`;console.log("Requesting data from SFWMD"),console.time("Response received from SFWMD");const n=await o({method:"GET",url:t,transformResponse:m});return console.timeEnd("Response received from SFWMD"),n.data}function m(e){const{datasets:t,rows:n}=function(e){const t=e.replace(/\s*$/,"\n").split(/\n|\r\n/),n=t.slice(1,2+u.length).join("\n"),o=t.slice(2+u.length).join("\n");return{datasets:r(n,{columns:!0,relaxColumnCountMore:!0}),rows:r(o,{columns:!0})}}(e),o={};for(let e of t)o[e.DBKEY]=S(e);for(let e of n)["","E"].includes(e.Qualifer)&&(o[e.DBKEY].data.push(g(e)),"flow"===o[e.DBKEY].dataType&&(o[e.DBKEY].total+=f(e)));return o}function S(e){const t={dataType:e.TYPE.toLowerCase(),unit:e.UNITS,data:[]};return"flow"===t.dataType&&(t.total=0),t}function g(e){const t=i(e["Daily Date"],"dd-LLL-yyyy",new Date),n=isNaN(e["Data Value"])?null:Number(e["Data Value"]);return{x:s(t,y),y:n}}function f(e){return 60*e["Data Value"]*60*24/43560}function x(e){const t=[];let n=c(e[0].x),o=0;for(;o<e.length;)d(n,c(e[o].x))?t.push({x:s(n,y),y:null}):o++,n=a(n,{days:1});return e.concat(t).sort(b)}function b(e,t){return e.x<t.x?-1:e.x>t.x?1:0}async function L(e){return{"John's Island":await P("John's Island",e),"Munyon Island":await P("Munyon Island",e)}}async function P(e,t){return{dataType:"salin",unit:"PSU",data:(await p.find({site:e,date:{$gte:t.start,$lte:t.end}},{date:1,salinity:1,_id:0})).map((e=>({x:s(e.date,y),y:e.salinity})))}}e.exports=async function(e){const t={...await l(e),...await L(e)};return 0===Object.values(t).map((e=>e.data.length)).reduce(((e,t)=>e+t))?null:function(e){for(let t of Object.values(e))t.data.length<=1||(t.data=x(t.data));return e}(t)}},776:(e,t,n)=>{const o=n(725);e.exports=o({contentSecurityPolicy:{directives:{...o.contentSecurityPolicy.getDefaultDirectives(),"connect-src":["'self'","https://api.mapbox.com","https://events.mapbox.com"],"img-src":["'self'","data:"],"script-src":["'self'","blob:"]}}})},567:(e,t,n)=>{const o=n(619),r=new(0,o.Schema)({date:{type:Date,required:!0},site:{type:String,required:!0,enum:["John's Island","Munyon Island"]},salinity:{type:Number,min:0}});r.index({date:1,site:1},{unique:!0}),e.exports.SalinityRecord=o.model("SalinityRecord",r)},545:e=>{"use strict";e.exports=JSON.parse('[{"name":"LWL-1","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.057506,26.843595]}},{"name":"LWL-2","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.049525,26.821559]}},{"name":"LWL-4","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.037939,26.802273]}},{"name":"LWL-5","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.046028,26.781331]}},{"name":"LWL-6","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.047136,26.765337]}},{"name":"LWL-7","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.047087,26.726742]}},{"name":"LWL-8","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.044161,26.686898]}},{"name":"LWL-10","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.043945,26.661006]}},{"name":"LWL-11","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.04465,26.615192]}},{"name":"LWL-13","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.046148,26.584037]}},{"name":"LWL-15","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.044503,26.55664]}},{"name":"LWL-16","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.046403,26.54485]}},{"name":"LWL-17","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.052006,26.53904]}},{"name":"LWL-18","type":"Grab Sample","geometry":{"type":"Point","coordinates":[-80.053664,26.528881]}},{"name":"LWL-19","dbkey":"39481","type":"SFWMD Sonde/Autosampler","geometry":{"type":"Point","coordinates":[-80.044164,26.615551]}},{"name":"LWL-20A","dbkey":"39485","type":"SFWMD Sonde/Autosampler","geometry":{"type":"Point","coordinates":[-80.047308,26.676611]}},{"name":"Munyon Island","dbkey":"Munyon Island","type":"ERM Salinity Sonde","geometry":{"type":"Point","coordinates":[-80.044936,26.810422]}},{"name":"John\'s Island","dbkey":"John\'s Island","type":"ERM Salinity Sonde","geometry":{"type":"Point","coordinates":[-80.040887,26.643564]}},{"name":"S-44","dbkey":"91602","type":"SFWMD Control Structure","geometry":{"type":"Point","coordinates":[-80.080553,26.817237]}},{"name":"S-155","dbkey":"91404","type":"SFWMD Control Structure","geometry":{"type":"Point","coordinates":[-80.055042,26.644692]}},{"name":"S-41","dbkey":"91601","type":"SFWMD Control Structure","geometry":{"type":"Point","coordinates":[-80.056806,26.53912]}}]')},376:e=>{"use strict";e.exports=require("axios")},670:e=>{"use strict";e.exports=require("csv-parse/lib/sync")},879:e=>{"use strict";e.exports=require("date-fns")},127:e=>{"use strict";e.exports=require("express")},54:e=>{"use strict";e.exports=require("express-static-gzip")},725:e=>{"use strict";e.exports=require("helmet")},960:e=>{"use strict";e.exports=require("http-errors")},619:e=>{"use strict";e.exports=require("mongoose")},150:e=>{"use strict";e.exports=require("morgan")},622:e=>{"use strict";e.exports=require("path")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=n(622),t=n(127),o=n(54),r=n(960),a=n(619),s=n(150),i=n(587),c=n(776);a.connect(process.env.DATABASE_URL,{useNewUrlParser:!0,useUnifiedTopology:!0,useFindAndModify:!0,useCreateIndex:!0});const d=a.connection;d.on("error",console.error.bind(console,"Connection error:")),d.on("open",(()=>{console.log(`Connected to database: ${d.host}:${d.port}/${d.name}`)}));const p=t();p.use(c),p.use("/",o(__dirname,{enableBrotli:!0,index:!1})),p.use(s("combined")),p.get("/",((t,n,o)=>{n.sendFile(e.join(__dirname,"index.html"))})),p.use("/api",i),p.all("*",((e,t,n)=>{t.redirect("/")})),p.use(((e,t,n,o)=>{r.isHttpError(e)?(n.status(e.statusCode),n.send(`Error: ${e.message}`)):(console.error(e.stack||e.message),n.status(500),n.send("An unexpected error occurred."))}));const y=process.env.PORT||3e3;p.listen(y,(()=>{console.log(`Production server listening on ${y}`)}))})()})();