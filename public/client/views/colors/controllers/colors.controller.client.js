(function () {
    angular
        .module("WebAppMaker")
        .controller("ColorsController", ColorsController);

    function ColorsController($location,$rootScope,colorService, $timeout) {
        var vm = this;
        vm.searchItems = searchItems;
        vm.setTab = setTab;
        vm.isSet = isSet;
        var tab;
        var myMap;

        function init() {
            tab = 1;
          initImage('../image/warm.png', 'warm-canvas');
          initImage('../image/deep_warm.png', 'deep-warm-canvas');
          initImage('../image/cool.png', 'cool-canvas');
          initImage('../image/deep cool.png', 'deep-cool-canvas');
          myMap = new Map();
          var keystring = ['#ff5d5d' , '#ff8471', '#ff7979', '#fe9e94', '#e9c944', '#ffe153', '#ffff4b', '#ffff99', '#ff1515', '#ff4747', '#ff355f', '#ff7896', '#073eff', '#0099ff', '#00b0ac', '#01ffff', '#884fe7', '#b833ff', '#d05bff', '#9981ff', '#00b100', '#47d547', '#00da8c', '#aeff5d', '#e52b01', '#dd6349', '#fe794a', '#fef996', '#e59e00', '#e9c200', '#f9e700', '#fffa97', '#6b0019', '#a52017', '#f62301', '#fe5042', '#004442', '#2e4a64', '#2c5e5e', '#18a396', '#4a1f6b', '#553948', '#7331a9', '#9c5d0', '#104010', '#605e00', '#017048', '#adc8ad','#00b7c0', '#00c8b0', '#5ccc9c', '#90ecc2', '#d53746', '#ff5363', '#fb6d75', '#ff97bc', '#cea48c', '#ffdeb3', '#fff8e7', '#ffffc', '#d75bae', '#ff5dae', '#ff85d6', '#ffabfff', '#379bff', '#11ccff', '#8fc7ff', '#8ae3ea', '#93478a', '#9154ea', '#bc85ff', '#cfa7ff', '#6082b6', '#778899', '#b0c4de', '#c0c0c0', '#dadbdd','#00009e', '#1919ff', '#4369e1', '#0085be', '#4600c8', '#5615f7', '#6d62d4', '#ebddff', '#004225', '#01675d', '#00743d', '#d2ffd2', '#b4013a', '#c80010', '#e2003c', '#ff0000', '#392f26', '#570000', '#6c002b', '#ffffd2', '#a61967', '#e20097', '#fc2cc6', '#ff57bb'];
          var setkeystring = ['orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'red', 'red', 'red', 'red', 'blue','blue','blue','blue','purple','purple','purple','purple','green', 'green', 'green', 'green',  'beige', 'beige', 'beige', 'beige', 'beige','green', 'green', 'green', 'green', 'orange', 'orange', 'orange', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'red', 'red', 'red', 'red', 'navy', 'navy', 'navy', 'navy', 'purple', 'purple', 'purple', 'purple', 'brown', 'brown', 'brown', 'brown', 'brown','soft emerald', 'soft teal', 'cool green', 'soft green', 'watermelon', 'rose', 'cool red', 'cool pink', 'rose brown', 'rose beige', 'soft yellow', 'soft white', 'orchid soft fuchsia', 'mauve', 'soft raspberry', 'azure', 'soft blue', 'baby blue', 'soft turquoise', 'soft plum', 'soft violet', 'lavender', 'periwinkle', 'blue grey', 'soft charcoal', 'soft cool grey', 'silver','navy blue', 'navy blue', 'navy blue', 'navy blue', 'violet', 'violet', 'violet', 'violet', 'green', 'green', 'green', 'green', 'red', 'red', 'red', 'red', 'red', 'red', 'red','red','red','red','red','red','black', 'black', 'black', 'black', 'black'];
          for (var index=0;index<keystring.length;index++) {
              myMap.set(keystring[index],setkeystring[index]);
          }
        }
        init();

        function setTab(newTab){
            tab = newTab;
        }

        function isSet(tabNum){
            return tab === tabNum;
        }

        function searchItems() {
            colorService
                .searchItem(vm.color+" "+vm.searchQuery)
                .then(function (data) {
                $rootScope.items = data.items;
                $timeout(function(){
                    $location.path("/list");
                    })

            });
        }

        function initImage(src, id) {
          var img = new Image();
          img.src = src;
          var canvas = document.getElementById(id);
          var ctx = canvas.getContext('2d');
          img.onload = function() {
              //var dimensions = scaleByRes(.1, img);
              console.log(document.getElementsByClassName('main-col')[0].offsetWidth);
              var dimensions = scaleByPixels(true, document.getElementsByClassName('main-col')[0].offsetWidth, img);
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
              console.log("000000" + rgbToHex(data[0], data[1], data[2]).slice(-6));
              var hex = "#" + ("000000" + rgbToHex(data[0], data[1], data[2])).slice(-6);
              color.style.background = hex;
              color.textcontent = hex;
              vm.color = myMap.get(hex);
          }
          canvas.addEventListener('click', pick);
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
