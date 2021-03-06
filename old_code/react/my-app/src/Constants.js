const INTERACTION_CONSTANTS = {
    INTERACTION_TYPES: {
        SELECTION: 'Selection',
        ZOOM: 'Zoom',
        PAN: 'Pan',
        FILTER: 'Filter',
        SORT: 'Sort',
        BRUSH: 'Brush',
        HIGHLIGHT: 'Highlight'
    },
    INTERACTION_TARGETS: {
        CATEGORICAL: 'Categorical',
        CONTINUOUS: 'Continuous',
        EDGE: 'Edge',
        BACKGROUND: 'Background',
        LEGEND: 'Legend',
        TEXT: 'Text',
        BRUSH_BOX: 'Brush box',
        BRUSH_BOX_EDGE: 'Brush box edge',
        AXIS: 'axis'
    },
    INPUT_EVENTS: {
        SCROLL: 'scroll',
        LEFT_CLICK: 'left_click',
        RIGHT_CLICK: 'right_click',
        DBL_CLICK: 'dblclick',
        MOUSE_DOWN: 'mousedown',
        MOUSE_UP: 'mouseup',
        SHIFT: 'shift',
        HOVER_OVER: 'mouseover',
        HOVER_LEAVE: 'mouseleave'
    },
    SVG_TYPE: {
        SVG_CONTAINER: "svg",
        SVG_GROUP: "g",
        SVG_MARK: ["circle", "ellipse", "polygon"]
        // SVG_MARK: ["circle", "ellipse", "line", "polygon", "polyline", "rect", "path"]
    }
    
}

export default INTERACTION_CONSTANTS;
