const javascript = {
    object : 
    ["array","boolean","date","math","number","string","window","navigator","document","element"],
    keywords :
    [
        "abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do",
        "double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
        "in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static",
        "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"
    ],
//object에 따른 분류
    array :{
        methods : [
            "reverse()","concat()","sort()","push()","pop()","shift()","join()","indexOf()","lastIndexOf()","firstIndexOf()"
        ],
        properties : [
            "length", "constructor","prototype"
        ]
    },
    boolean :{
        methods : [
            "toSource()","toString()","valueOf()"
        ],
        properties : [
            "constructor","prototype"
        ]
    },
    date :{
        methods : [
            "Date()","getDate()","getDay()","getFullYear()","getHours()","getMilliseconds()","getMinute()","getMonth()","getTime()","setDate()","setHours()","setMilliseconds()","setTime()"
        ],
        properties : [
            "constructor","prototype"
        ]
    },
    math :{
        methods : [
            "max(,)","min(,)","round()","ceil()","floor()","exp()","pow(,)","abs()","random()","sqrt()","sin()","cos()"
        ],
        properties : [
            "PI","E","LN2","LN10","LOG2E","LOG10E","SQRT2","SQRT1_2"
        ]
    },
    number :{
        methods : [
            "toExponential()","toFixed()","toLocaleString()","toPrecision()","toString()","valueOf()"
        ],
        properties : [
            "constructor","prototype","MAX_VALUE","MIN_VALUE","NEGATIVE_INFINITY","POSITIVE_INFINITY"
        ]
    },
    string :{
        methods : [
            "charAt()","concat()","toLowerString()","toUpperString()","indexOf()","lastIndexOf()"
        ],
        properties : [
            "length", "constructor","prototype"
        ]
    },
    window :{
        methods : [
            "close()","open()","moveBy()","moveTo()","resizeBy()","resizeTo()","setTimeout()","clearTimeout()"
        ],
        properties : [
            "closed","console","document","event","frameElement","frames","fullScreen","history","innerHeight","innerWidth","length","location","localStorage","name",
            "navigator","parent","screenX","screenY","scrollbars","scrollX","scrollY","status","toolbar","window"
        ]
    },
    document : {
        methods : [
            "close()","open()","write()","getElementById()","getElementsByName()","getElementsByTagName()","getElementsByClassName()","querySelector()","querySelectorAll()"
        ],
        properties : [
            "anchors","body","doctype","documentElement","documentURL","head","hidden","images","location","readyState","title","URL"
        ]
    },

//공동 상속
    element : {
        methods : [
            "getAttribute()","getAttributeNames()","getBoundingClientRect()","getClientRects()","remove()"
        ],
        properties : [
            "attributes","classList","className","clientHeight","clientLeft","clientTop","clientWidth","id","innerHTML","localName","tabName"
        ]
    },
    node : {
        methods : [
          "appendChild()","cloneNode()","contains()","hasChildNodes()","insertBefore()","isEqualNode()","removeChild()","replaceChild()"  
        ],
        properties : [
            "childNodes","firstChild","lastChild","nextSibling","nodeName","nodeType","nodeValue","parentNode","parentElement","textContent"
        ]
    },
    event : {
        methods : [
            "addEventListener()","removeEventListener()","dispatchEvent()"
        ],
        properties : []
    }
};