window.onload = function () {
                var r = Raphael("holder"),
                    pie = r.piechart(320, 240, 100, [55, 20, 13, 32, 5, 1, 2, 10], { legend: ["%%.%% - Enterprise Users", "IE Users"], legendpos: "west", href: ["http://raphaeljs.com", "http://g.raphaeljs.com"]});

                r.text(320, 100, "Interactive Pie Chart").attr({ font: "20px sans-serif" });
                pie.hover(function () {
                    this.sector.stop();
                    this.sector.scale(1.1, 1.1, this.cx, this.cy);

                    if (this.label) {
                        this.label[0].stop();
                        this.label[0].attr({ r: 7.5 });
                        this.label[1].attr({ "font-weight": 800 });
                    }
                }, function () {
                    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

                    if (this.label) {
                        this.label[0].animate({ r: 5 }, 500, "bounce");
                        this.label[1].attr({ "font-weight": 400 });
                    }
                });
            };