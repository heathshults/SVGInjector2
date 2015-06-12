{"version":3,"file":"./svg-injector.min.js","sources":["./svg-injector.js"],"names":["window","document","SVGInjector","options","this","init","svgCache","injections","requestQueue","ranScripts","config","env","SVG_NS","XLINK_NS","DEFAULT_SPRITE_CLASS_NAME","DEFAULT_SPRITE_CLASS_ID_NAME","DEFAULT_FALLBACK_CLASS_NAMES","DEFAULT_REMOVESTYLES_CLASS_NAME","prototype","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","count","elements","evalScripts","pngFallback","onlyInjectVisiblePart","keepStylesClass","spriteClassName","spriteClassIdName","removeStylesClass","removeAllStyles","fallbackClassName","prefixStyleTags","spritesheetURL","prefixFragIdClass","forceFallbacks","replaceNoSVGClass","querySelector","writeDefaultClass","inject","onDoneCallback","eachCallback","undefined","length","elementsLoaded","ctx","forEach","call","element","injectElement","svg","el","onElementInjectedCallback","imgUrl","getAttribute","getSpriteIdFromClass","setAttribute","fallbackUrl","imgUrlSplitByFId","split","test","perElementFallback","pop","replace","isArray","setFallbackClassNames","isFunction","svgElemSetClassName","removeFallbackClassNames","indexOf","push","loadSvg","getEnv","symbolId","classNames","className","slice","curClassName","idx","fallbackClassNames","curClassNames","uniqueClasses","prefixIdReferences","suffix","def","attribute","newName","defs","attr","elem","definitions","querySelectorAll","g","defLen","id","usingElements","h","usingElementsLen","copyAttributes","svgElemSource","svgElemTarget","attributesToIgnore","curAttr","i","attributes","item","name","value","cloneSymbolAsSVG","svgSymbol","createElementNS","childNodes","child","appendChild","cloneNode","doPrefixStyleTags","styleTag","injectCount","srcArr","origPrefixClassName","regex","RegExp","newPrefixClassName","textContent","getClassList","svgToCheck","curClassAttr","classes","curClass","cloneSvg","sourceSvg","fragId","svgElem","newSVG","viewBox","viewBoxAttr","symbolAttributesToFind","curClassList","setViewboxOnNewSVG","symbolElem","getElementById","SVGSymbolElement","SVGViewElement","selector","Math","abs","parseInt","x","y","SVGSVGElement","prop","removeAttribute","SVGUseElement","referencedSymbol","getAttributeNS","substr","join","fragIdClassName","queueRequest","fileName","callback","fragmentId","processRequestQueue","url","requestQueueElem","len","index","setTimeout","onLoadSVG","urlArr","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","css","head","style","createElement","type","styleSheet","cssText","createTextNode","noSVGClassName","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","at","dataAttr","presARAttr","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","removeChild","l","scriptsToEvalLen","styleTags","svgClassList","parentNode","replaceChild","list","hash","out","hasOwnProperty","unshift","obj","constructor","apply","Object","toString","newClassNames","curClasses","Array","fn","scope","TypeError","module","exports","define","amd"],"mappings":"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"}