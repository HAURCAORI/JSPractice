const _javascript = {
    //표준 개체 : Number, Math, Date, String, Array
    //기본 타입 : number, string, boolean, symbol, undefined
    object : 
    ['array','boolean','date','math','number','string','window','history','location','document','element','node','events'],
    keywords :
    [
        'abstract','arguments','await','boolean','break','byte','case','catch','char','class','const','continue','debugger','default','delete','do',
        'double','else','enum','eval','export','extends','false','final','finally','float','for','function','goto','if','implements','import',
        'in','instanceof','int','interface','let','long','native','new','null','package','private','protected','public','return','short','static',
        'super','switch','synchronized','this','throw','throws','transient','true','try','typeof','var','void','volatile','while','with','yield',
        'undefined', 'NaN'
    ],
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
            '<!DOCTYPE>','<a>','<abbr>','<address>','<area>','<article>','<aside>','<audio>','<b>','<base>','<bdi>','<bdo>',
            '<blockquote>','<body>','<br>','<button>','<canvas>','<caption>','<cite>','<code>','<col>','<colgroup>','<data>',
            '<datalist>','<dd>','<del>','<details>','<dfn>','<dialog>','<div>','<dl>','<dt>','<em>','<embed>','<fieldset>','<figcaption>',
            '<figure>','<footer>','<form>','<h1>','<h2>','<h3>','<h4>','<h5>','<h6>','<head>','<header>','<hr>','<html>','<i>','<iframe>',
            '<img>','<input>','<ins>','<kbd>','<label>','<legend>','<li>','<link>','<main>','<map>','<mark>','<meta>','<meter>','<nav>',
            '<noscript>','<object>','<ol>','<optgroup>','<option>','<output>','<p>','<param>','<picture>','<pre>','<progress>',
            '<q>','<rp>','<rt>','<ruby>','<s>','<samp>','<script>','<section>','<small>','<source>','<span>','<strong>','<style>','<sub>',
            '<summary>','<sup>','<svg>','<table>','<tbody>','<td>','<template>','<textarea>','<tfoot>','<th>','<thread>','<time>','<title>',
            '<tr>','<track>','<u>','<ul>','<var>','<video>','<wbr>'
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