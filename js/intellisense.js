const _javascript = {
    //표준 개체 : Number, Math, Date, String, Array
    //기본 타입 : number, string, boolean, symbol, undefined
    object : 
    ['array','boolean','date','math','number','string','window','history','keywords','location','document','element','node','events'],
    keywords :{
        tags : [
            'abstract','arguments','await','boolean','break','byte','case','catch','char','class','const','continue','debugger','default','delete','do',
            'double','else','enum','eval','export','extends','false','final','finally','float','for','function','goto','if','implements','import',
            'in','instanceof','int','interface','let','long','native','new','null','package','private','protected','public','return','short','static',
            'super','switch','synchronized','this','throw','throws','transient','true','try','typeof','var','void','volatile','while','with','yield',
            'undefined', 'NaN'
        ]
    },
    predefined :
    [
        'eval()','isFinite()','isNaN()','parseFloat()','parseInt()','decodeURL()','decodeURLComponent()','encodeURL()','encodeURLComponent()','escape()','unescape()','Number()','String()','Boolean()','Object()'
    ],
    //object에 따른 분류
    array :{
        methods : [
            'reverse()','concat()','sort()','push()','pop()','shift()','join()','indexOf()','lastIndexOf()','firstIndexOf()'
        ],
        properties : [
            'length', 'constructor','prototype'
        ]
    },
    boolean :{
        methods : [
            'toSource()','toString()','valueOf()'
        ],
        properties : [
            'constructor','prototype'
        ]
    },
    date :{
        methods : [
            'Date()','getDate()','getDay()','getFullYear()','getHours()','getMilliseconds()','getMinute()','getMonth()','getTime()','setDate()','setHours()','setMilliseconds()','setTime()'
        ],
        properties : [
            'constructor','prototype'
        ]
    },
    math :{
        methods : [
            'max()','min()','round()','ceil()','floor()','exp()','pow()','abs()','random()','sqrt()','sin()','cos()'
        ],
        properties : [
            'PI','E','LN2','LN10','LOG2E','LOG10E','SQRT2','SQRT1_2'
        ]
    },
    number :{
        methods : [
            'toExponential()','toFixed()','toLocaleString()','toPrecision()','toString()','valueOf()'
        ],
        properties : [
            'constructor','prototype','MAX_VALUE','MIN_VALUE','NEGATIVE_INFINITY','POSITIVE_INFINITY'
        ]
    },
    string :{
        methods : [
            'charAt()','concat()','toLowerString()','toUpperString()','indexOf()','lastIndexOf()'
        ],
        properties : [
            'length', 'constructor','prototype'
        ]
    },
    window :{
        methods : [
            'close()','open()','moveBy()','moveTo()','resizeBy()','resizeTo()','setTimeout()','clearTimeout()'
        ],
        properties : [
            'closed','console','event','frameElement','frames','fullScreen','innerHeight','innerWidth','length','location','localStorage','name',
            'navigator','parent','screenX','screenY','scrollbars','scrollX','scrollY','status','toolbar','window'
        ],
        child : [
            'history', 'document'
        ]
    },
    history : {
        methods : [
            'go()', 'back()','forward()'
        ],
        properties : [
            'length'
        ]
    },
    location : {
        methods : [
            'assign()','reload()','replace()','toString()'
        ],
        properties : [
            'href','protocol','host','hostname','port','pathname','search','hash'
        ]
    },
    document : {
        methods : [
            'close()','open()','write()','getElementById()','getElementsByName()','getElementsByTagName()','getElementsByClassName()','querySelector()','querySelectorAll()'
        ],
        properties : [
            'anchors','body','cookie','doctype','documentElement','documentURL','forms','head','hidden','images','location','readyState','title','URL'
        ]
    },
    element : {
        methods : [
            'getAttribute()','getAttributeNames()','getBoundingClientRect()','getClientRects()','remove()'
        ],
        properties : [
            'attributes','classList','className','clientHeight','clientLeft','clientTop','clientWidth','id','innerHTML','localName','tabName'
        ]
    },
    node : {
        methods : [
          'appendChild()','cloneNode()','contains()','hasChildNodes()','insertBefore()','isEqualNode()','removeChild()','replaceChild()'  
        ],
        properties : [
            'childNodes','firstChild','lastChild','nextSibling','nodeName','nodeType','nodeValue','parentNode','parentElement','textContent'
        ]
    },
    events : {
        events : [
            'addEventListener()','removeEventListener()','dispatchEvent()'
        ]
    }
};
const _html = {
    object : 
    ['Tags', 'Attributes','Events','Canvas'],
    Tags : {
        tags : [
            '!DOCTYPE','a','abbr','address','area','article','aside','audio','b','base','bdi','bdo',
            'blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data',
            'datalist','dd','del','details','dfn','dialog','div','dl','dt','em','embed','fieldset','figcaption',
            'figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe',
            'img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav',
            'noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress',
            'q','rp','rt','ruby','s','samp','script','section','small','source','span','strong','style','sub',
            'summary','sup','svg','table','tbody','td','template','textarea','tfoot','th','thread','time','title',
            'tr','track','u','ul','var','video','wbr'
        ]
    },
    Attributes : {
        properties : [
            'accesskey','class','countenteditable','dir','draggable','hidden','id','lang','spellcheck','style','tabindex','title','translate'
        ]
    },
    Events : {
        events : [
            'onafterprint','onbeforeprint','onbeforeunload','onerror','onhashchange','onload','onmessage','onoffline','ononline','onpagehide','onpageshow',
            'onpopstate','onresize','onstorage','onunload','onblur','onchange','oncontextmenu','onfocus','oninput','oninvalid','onrest','onsearch','onselect','onsubmit',
            'onkeydown','onkeypress','onkeyup',
            'onclick','ondblclick','onmousedown','onmousemove','onmouseout','onmouseover','onmouseup','onmousewheel','onwheel',
            'ondrag','ondragend','ondragenter','ondragleave','ondragover','ondragstart','ondrop','onscroll',
            'oncopy','oncut','onpaste',
            'ontoggle'
        ]
    },
    Canvas : {
        methods : [
            'createLinearGradient()','createPattern()','createRadialGradient()','addColorStop()','rect()','fillRect()','strokeRect()','clearRect()',
            'fill()','stroke()','beginPath()','moveTo()','closePath()','lineTo()','clip()','quadraticCurveTo()','bezierCurveTo()','arc()','arcTo()','isPointInPath()',
            'scale()','rotate()','translate()','transform()','setTransform()',
            'fillText()','strokeText()','measureText()',
            'drawImage()','createImageData()','getImageData()','putImageData()',
            'save()','restore()','createEvent()','getContext()','toDataURL()'
        ],
        properties : [
            'fillStyle','strokeStyle','shadowColor','shadowBlur','shadowOffsetX','shadowOffsetY',
            'lineCap','lineJoin','lineWidth','miterLimit','font','textAlign','textBaseline','width','height','data','globalAlpha','globalCompositeOperation'
            
        ]
    }
}
const _css = {
    object : ['CSS','Selectors','Functions'],
    CSS : {
        properties : [
            'align-content','align-items','align-self','all','animation','animation-delay','animation-direction','animation-duration','animation-fill-mode','animation-iteration-count','animation-name','animation-play-state','animation-timing-function',
            'backface-visibility','background','background-attachment','background-blend-mode','background-clip','background-color','background-image','background-origin','background-position','background-repeat','background-size',
            'border','border-bottom','border-bottom-color','border-bottom-left-radius','border-bottom-right-radius','border-bottom-style','border-bottom-width','border-collapse','border-color',
            'border-image','border-image-outset','border-image-repeat','border-image-slice','border-image-source','border-image-width','border-left','border-left-color','border-left-style','border-left-width','border-radius',
            'border-right','border-right-color','border-right-style','border-right-width','border-spacing','border-style','border-top','border-top-color','border-top-left-radius','border-top-right-radius','border-top-style','border-top-width','border-width',
            'bottom','box-decoration-break','box-shadow','box-sizing','break-after','break-before','break-inside','caption-side','caret-color','@charset','clear','clip','color','column-count','column-fill','column-gap','column-rule','column-rule-color','column-rule-style','column-rule-width','column-span','column-width',
            'columns','content','counter-increment','counter-reset','cursor','direction','display','empty-cells','filter','flex','flex-basis','flex-direction','flex-flow','flex-grow','flex-shrink','flex-wrap','float','font',
            '@font-face','font-family','font-feature-settings','@font-feature-values','font-kerning','font-language-override','font-size','font-size-adjust','font-stretch','font-style','font-synthesis',
            'font-variant','font-variant-alternates','font-variant-caps','font-variant-east-asian','font-variant-ligatures','font-variant-numeric','font-variant-position','font-weight',
            'gap','grid','grid-area','grid-auto-columns','grid-auto-flow','grid-auto-rows','grid-column','grid-column-end','grid-column-gap','grid-column-start','grid-gap','grid-row','grid-row-end','grid-row-gap','grid-row-start',
            'grid-template','grid-template-areas','grid-template-columns','grid-template-rows','hanging-punctuation','height','hyphens','image-rendering','@import','isolation',
            'justify-content','@keyframes','left','letter-spacing','line-break','line-height','list-style','list-style-image','list-style-position','list-style-type',
            'margin','margin-bottom','margin-left','margin-right','margin-top','mask','mask-clip','mask-composite','mask-image','mask-mode','mask-origin','mask-position','mask-repeat','mask-size','mask-type',
            'max-height','max-width','@media','min-height','min-width','mix-blend-mode','object-fit','object-position','opacity','order','orphans','outline','outline-color','outline-offset','outline-style','outline-width',
            'overflow','overflow-wrap','overflow-x','overflow-y','padding','padding-bottom','padding-left','padding-right','padding-top','page-break-after','page-break-before','page-break-inside',
            'perspective','perspective-origin','pointer-events','position','quotes','resize','right','row-gap','scroll-behavior','tab-size','table-layout',
            'text-align','text-align-last','text-combine-upright','text-decoration','text-decoration-color','text-decoration-line','text-decoration-style','text-indent','text-justify','text-orientation','text-overflow','text-shadow','text-transform','text-underline-position',
            'top','transform','transform-origin','transform-style','transition','transition-delay','transition-duration','transition-property','transition-timing-function',
            'unicode-bidi','user-select','vertical-align','visibility','white-space','widows','width','word-break','word-spacing','word-wrap','writing-mode','z-index'
        ]
    },
    Selectors : {
        tags : [
            ':active','::after','::before',':checked',':default',':default',':disabled',':empty',':enabled',':first-child','::first-letter','::first-line',':first-of-type',
            ':focus',':fullscreen',':hover',':in-range',':indeterminate',':invalid',':last-child',':last-of-type',':link','::marker',
            ':not()',':only-of-type',':only-child',':optional',':out-of-range','::placeholder',':read-only',':read-write',':required',
            ':root','::selection',':target',':valid',':vistied'
        ]
    },
    Functions : {
        methods : [
            'attr()','calc()','conic-gradient()','counter()','cubic-bezier()','hsl()','hsla()','linear-gradient()','max()','min()','radial-gradient()',
            'repeating-conic-gradient()','repeating-linear-gradient()','repeating-radial-gradient()','rgb()','rgba()','var()'
        ]
    }
    
}