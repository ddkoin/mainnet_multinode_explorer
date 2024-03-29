import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timestampFilter' })

export class TimestampPipeFilter implements PipeTransform {

    transform(timestamp: number): any {

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        // Epoch time
        var d = new Date(Date.UTC(2016, 0, 1, 17, 0, 0, 0));
        var t = (d.getTime() / 1000);

        var d = new Date((timestamp + t) * 1000);

        var month = monthNames[d.getUTCMonth()];

        var day = d.getUTCDate();

        if (day < 10) {
            day = parseInt("0" + day);
        }

        var h = d.getUTCHours();
        var m = d.getUTCMinutes();
        var s = d.getUTCSeconds();
        var ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12; // the hour '0' should be '12'

        if (h < 10) {
            h = parseInt("0" + h);
        }

        if (m < 10) {
            m = parseInt("0" + m);
        }

        if (s < 10) {
            s = parseInt("0" + s);
        }

        return month + "-" + day + "-" + d.getUTCFullYear() + " " + h + ":" + m + ":" + s + " " + ampm + " +UTC";
    }
}

