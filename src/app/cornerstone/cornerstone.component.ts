import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import Hammer from 'hammerjs'
import * as cornerstoneMath from 'cornerstone-math'
// Cornerstone Libraries
import * as cornerstone from 'cornerstone-core/dist/cornerstone.js'
import * as cornerstoneTools from 'cornerstone-tools'
import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader'

cornerstoneTools.external.$ = $
cornerstoneTools.external.Hammer = Hammer
cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.cornerstoneMath = cornerstoneMath
cornerstoneWebImageLoader.external.$ = $
cornerstoneWebImageLoader.external.cornerstone = cornerstone
cornerstoneWebImageLoader.external.cornerstoneMath = cornerstoneMath

@Component({
  selector: 'app-cornerstone',
  templateUrl: './cornerstone.component.html',
  styleUrls: ['./cornerstone.component.css']
})
export class CornerstoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        // Enable Canvas
        let canvas = $('.image-canvas')[0]
        cornerstone.enable(canvas)
        // ImageId that matches our registered image loader's 'http:' prefix
        // The webImageLoader uses this to make an xhr request to fetch an image
        // Under the hood, it creates a cornerstone "Image" object needed for display
        const imageUrl = 'https://rawgit.com/dannyrb/cornerstone-vuejs-poc/master/static/simple-study/1.2.276.0.74.3.1167540280.200511.112514.1.1.10.jpg'
        cornerstone.loadImage(imageUrl).then(function (image) {
          // Display our loaded image on the target canvas
          cornerstone.displayImage(canvas, image)

          // Enable Inputs
          cornerstoneTools.mouseInput.enable(canvas)
          cornerstoneTools.touchInput.enable(canvas)
          // Mouse
          cornerstoneTools.wwwc.activate(canvas, 1) // left click
          cornerstoneTools.pan.activate(canvas, 2) // middle click
          cornerstoneTools.zoom.activate(canvas, 4) // right click
          // Touch / Gesture
          cornerstoneTools.wwwcTouchDrag.activate(canvas) // - Drag
          cornerstoneTools.zoomTouchPinch.activate(canvas) // - Pinch
          cornerstoneTools.panMultiTouch.activate(canvas) // - Multi (x2)
        })
  }

}
