import interact from 'interactjs'

// This is a modified version of the orginal file but some of the chnages has been forgotten (see modification by searching keyword "Note")
// Attribute data-x and data-y are changed to data_x and data_y because I don't know how to use "-" within am object's name
interact('.resize_drag')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    margin: 10,
    listeners: {
      move(event) {
        var target = event.target

        //Note: added code for find the scale of the transform componenet 
        var scale = getScale(event)
        //---------------------------------------------------------------------------
        // console.log(transformString)
        // console.log(transformString.substring(scaleIndexStart,scaleIndexEnd))
        var x = (parseFloat(target.getAttribute('data_x')) || 0)
        var y = (parseFloat(target.getAttribute('data_y')) || 0)

        // update the element's style
        target.style.width = event.rect.width / scale + 'px'
        target.style.height = event.rect.height / scale + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left / scale
        y += event.deltaRect.top / scale

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data_x', x)
        target.setAttribute('data_y', y)
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 30, height: 30 }
      })
    ],

    inertia: false
  })

interact('.resize_drag')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener(event) {
  var target = event.target
  //Note: added code for find the scale of the transform componenet 
  var scale = getScale(event)
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data_x')) || 0) + event.dx / scale
  var y = (parseFloat(target.getAttribute('data_y')) || 0) + event.dy / scale

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data_x', x)
  target.setAttribute('data_y', y)
}

function getScale(event) {
  var target = event.target

  //Note: added code for find the scale of the transform componenet 
  var canvasElement = target.parentElement
  var TransformComponentElement = canvasElement.parentElement
  var transformString = TransformComponentElement.style.transform
  var scaleStart = transformString.indexOf("scale")
  scaleStart = scaleStart + transformString.substring(scaleStart).indexOf("(")
  var scaleEnd = transformString.substring(scaleStart).indexOf(")")
  var scale = transformString.substring(scaleStart + 1, scaleStart + scaleEnd)
  return scale ? scale : 1
}



// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener