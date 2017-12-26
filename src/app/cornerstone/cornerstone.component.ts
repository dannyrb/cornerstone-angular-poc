import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import Hammer from 'hammerjs'
import * as cornerstoneMath from 'cornerstone-math'
import * as dicomParser from 'dicom-parser'
// Cornerstone Libraries
import * as cornerstone from 'cornerstone-core/dist/cornerstone.js'
import * as cornerstoneTools from 'cornerstone-tools'
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader'
//import * as cornerstoneWebImageLoader from 'cornerstone-web-image-loader'

cornerstoneTools.external.$ = $
cornerstoneTools.external.Hammer = Hammer
cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.cornerstoneMath = cornerstoneMath

//cornerstoneWebImageLoader.external.$ = $
//cornerstoneWebImageLoader.external.cornerstone = cornerstone
//cornerstoneWebImageLoader.external.cornerstoneMath = cornerstoneMath

cornerstoneWADOImageLoader.external.cornerstone = cornerstone

var config = {
  webWorkerPath : '/assets/cornerstoneWADOImageLoaderWebWorker.js',
  taskConfiguration: {
      'decodeTask' : {
          codecsPath: '/assets/cornerstoneWADOImageLoaderCodecs.js'
      }
  }
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

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
        const wadoImageUrl = 'wadouri:https://www.asteris.biz/Keystone/ImageDownload.aspx?ClinicCode=TESTKEYSTONE&ImageId=e9833676-1895-1f7c-1117-ffffff171206&ImageType=DicomImage&FrameIndex=0'
        cornerstone.loadImage(wadoImageUrl).then(function (image) {
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
