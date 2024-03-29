 window.onload = function () {
                var r = Raphael("holder"),
                    fin = function () {
                        this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
                    },
                    fout = function () {
                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
                    },
                    fin2 = function () {
                        var y = [], res = [];
                        for (var i = this.bars.length; i--;) {
                            y.push(this.bars[i].y);
                            res.push(this.bars[i].value || "0");
                        }
                        this.flag = r.popup(this.bars[0].x, Math.min.apply(Math, y), res.join(", ")).insertBefore(this);
                    },
                    fout2 = function () {
                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
                    },
                    txtattr = { font: "12px sans-serif" };
                
                r.text(160, 8, "Single Series Chart").attr(txtattr);
                r.text(480, 8, "Multiline Series Stacked Chart").attr(txtattr);
                r.text(160, 248, "Multiple Series Chart").attr(txtattr);
                r.text(480, 248, "Multiline Series Stacked Chart\nColumn Hover").attr(txtattr);
                
                r.barchart(10, 10, 300, 220, [[55, 20, 13, 32, 5, 1, 2, 10]]).hover(fin, fout);
                r.hbarchart(330, 10, 300, 220, [[55, 20, 13, 32, 5, 1, 2, 10], [10, 2, 1, 5, 32, 13, 20, 55]], {stacked: true}).hover(fin, fout);
                r.hbarchart(10, 250, 300, 220, [[55, 20, 13, 32, 5, 1, 2, 10], [10, 2, 1, 5, 32, 13, 20, 55]]).hover(fin, fout);
                var c = r.barchart(330, 250, 300, 220, [[55, 20, 13, 32, 5, 1, 2, 10], [10, 2, 1, 5, 32, 13, 20, 55]], {stacked: true, type: "soft"}).hoverColumn(fin2, fout2);
            };