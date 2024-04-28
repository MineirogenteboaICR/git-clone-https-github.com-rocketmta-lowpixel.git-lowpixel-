local imports = {
    ui = exports.pixel_ui;
}
SVG = {}



function SVG:createButton (id, width, height)
    local raw = string.format([[
        <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="%s" height="%s" rx="3" fill="white" fill-opacity="0.94"/>
        </svg>
    ]], width, height, width, height, width, height) 
    

    return imports.ui:createSvg(id, raw, width, height);
end