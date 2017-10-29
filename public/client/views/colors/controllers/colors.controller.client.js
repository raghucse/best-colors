(function () {
    angular
        .module("WebAppMaker")
        .controller("ColorsController", ColorsController);

    var colors = {

    };

    function ColorsController($routeParams,$location) {
        var vm = this;

        function init() {
          initImage('../image/warm.png', 'warm-canvas');
          initImage('../image/deep_warm.png', 'deep-warm-canvas');
          initImage('../image/cool.png', 'cool-canvas');
          initImage('../image/deep cool.png', 'deep-cool-canvas');
        }
        init();

        function initImage(src, id) {
          var img = new Image();
          img.src = src;
          var canvas = document.getElementById(id);
          var ctx = canvas.getContext('2d');
          img.onload = function() {
              var dimensions = scaleByRes(.1, img);
              //console.log(`Current dimensions: ${dimensions.width}, ${dimensions.height}`);
              canvas.width = dimensions.width; //change size of canvas based on scaling
              canvas.height = dimensions.height;
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              img.style.display = 'none';
          };
          var color = document.getElementById('color');
          function pick(event) {
              var x = event.layerX;
              var y = event.layerY;
              var pixel = ctx.getImageData(x, y, 1, 1);
              var data = pixel.data;
              var hex = "#" + ("000000" + rgbToHex(data[0], data[1], data[2])).slice(-6);
              color.textContent = hex;
          }
          canvas.addEventListener('click', pick);
        }

        function submitColor(event) {
        }

        function rgbToHex(r, g, b) {
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        }
    }

    function scaleByRes(resolution, image) {
      return {
        width: image.width * resolution,
        height: image.height * resolution
      };
    }

    function scaleByPixels(scaleByWidth, pixels, image) {
      if(scaleByWidth)
        return scaleByRes(pixels / image.width, image);
      else
        return scaleByRes(pixels / image.height, image);
    }
})();
