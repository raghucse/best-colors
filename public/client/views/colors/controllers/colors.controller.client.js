(function () {
    angular
        .module("WebAppMaker")
        .controller("ColorsController", ColorsController);

    function ColorsController($routeParams,$location) {
        var vm = this;

        function init() {
            var img = new Image();
            img.src = '../../image/deep_warm.png';
            var canvas = document.getElementById('warm-canvas');
            var ctx = canvas.getContext('2d');
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
                img.style.display = 'none';
            };
            var color = document.getElementById('color');
            function pick(event) {
                var x = event.layerX;
                var y = event.layerY;
                var pixel = ctx.getImageData(x, y, 1, 1);
                var data = pixel.data;
                var hex = "#" + ("000000" + rgbToHex(data[0], data[1], data[2])).slice(-6);
                color.style.background =  hex;
                color.textContent = hex;
            }
            canvas.addEventListener('mousemove', pick);
        }
        init();

        function submitColor(event) {
        }

        function rgbToHex(r, g, b) {
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        }
    }
})();
