Raphael(function () {
                var r = Raphael("holder"),
                    easingx = document.getElementById("easingx"),
                    easingy = document.getElementById("easingy"),
                    run = document.getElementById("run"),
                    set = r.set(r.circle(300, 200, 8),r.circle(200, 100, 8),r.circle(100, 200, 8),r.circle(200, 300, 8),r.circle(200, 200, 8)).attr({stroke: "none", fill: "#666"}),
                    c = r.circle(200, 200, 10).attr({stroke: "#fff", "stroke-width": 4}),
                    fade = function (id) {
                        return function () {
                            set[id].attr({fill: "#fff", r: 12}).animate({fill: "#666", r: 8}, 500);
                        };
                    };

                
                run.onclick = function () {
                    var ex = easingx.value,
                        ey = easingy.value;
                    c.stop().animate({
                        "20%": {cy: 200, easing: ey, callback: fade(0)},
                        "40%": {cy: 100, easing: ey, callback: fade(1)},
                        "60%": {cy: 200, easing: ey, callback: fade(2)},
                        "80%": {cy: 300, easing: ey, callback: fade(3)},
                        "100%": {cy: 200, easing: ey, callback: fade(4)}
                    }, 5000).animate({
                        "20%": {cx: 300, easing: ex},
                        "40%": {cx: 200, easing: ex},
                        "60%": {cx: 100, easing: ex},
                        "80%": {cx: 200, easing: ex},
                        "100%": {cx: 200, easing: ex}
                    }, 5000);
                };
            });