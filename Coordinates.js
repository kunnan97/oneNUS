export const coords = {
    "UHC": [1.298944, 103.776102],
    "Opp UHC": [1.298778, 103.775603],
    "KR MRT": [1.294818, 103.784464],
    "Opp KR MRT": [1.294920, 103.784603],
    "UHall": [1.297230, 103.778674],
    "Opp UHall": [1.297529, 103.778122],
    "LT 27": [1.297443, 103.780995],
    "S 17": [1.297513, 103.781328],
    "YiH": [1.298899, 103.774380],
    "Opp YiH": [1.298977, 103.774192],
    "Raffles Hall": [1.300973, 103.772701],
    "Museum": [1.301080, 103.773701],
    "CLB": [1.296599, 103.772513],
    "IT": [1.297208, 103.772698],
    "Ventus": [1.295362, 103.770610],
    "LT 13": [1.294888, 103.770588],
    "AS 5": [1.293469, 103.771947],
    "Opp NUSS": [1.293289, 103.772483],
    "Biz 2": [1.293309, 103.775112],
    "Opp HSSML": [1.292824, 103.774973],
    "TCOMS": [1.293763, 103.776446],
    "Opp TCOMS": [1.293836, 103.776981],
    "PGP Hse 7": [1.293173, 103.777815],
    "PGP Hse 15": [1.293110, 103.777806],
    "PGP": [1.291820, 103.780482],
    "PGP R": [1.291003, 103.781022],
    "The Jap Sch": [1.300760, 103.769922],
    "EA": [1.300599, 103.770171],
    "BG MRT": [1.322748, 103.815151],
    "College Green": [1.323344, 103.816294],
    "OTH Building": [1.319891, 103.817782],
    "UTown": [1.303644, 103.774635],
    "KV": [1.302125, 103.769115],
    "KR Bus Terminal": [1.294285, 103.769801],
    "Com 2": [1.294350, 103.773793],
};

export const outputNearestBusStop = latlng => {
    const RADIUS = 6378.16;
    const radian = x => {
        return x * Math.PI / 100;
    }
    let shortest = Number.POSITIVE_INFINITY;
    let nearestBusStop;
    const busStops = Object.keys(coords);
    
    const lat1 = latlng.lat;
    const lng1 = latlng.lng;

    busStops.forEach(busStop => {
        const lat2 = coords[busStop][0];
        const lng2 = coords[busStop][1];
        const dlat = radian(lat2 - lat1);
        const dlng = radian(lng2 - lng1);

        const a = 
            (Math.sin(dlat / 2) * Math.sin(dlat / 2)) +
            (Math.cos(radian(lat1)) * Math.cos(radian(lat2))
            * (Math.sin(dlng / 2) * Math.sin(dlng / 2))
            );
        const angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const dist = angle * RADIUS;

        if (shortest > dist) {
            shortest = dist;
            nearestBusStop = busStop;
        }
    });
    return nearestBusStop;
}

export const busRoutes = {
    "A1": {
        init: coords.PGP,
        dest: null,
        wayPoints: [
            coords["KR MRT"],
            coords["LT 27"],
            coords.UHall,
            coords["Opp UHC"],
            coords.YiH,
            coords.CLB,
            coords["LT 13"],
            coords["AS 5"],
            coords["Com 2"],
            coords["Biz 2"],
            coords["Opp TCOMS"],
            coords["PGP Hse 7"]
        ]
    },

    "A2": {
        init: coords.PGP,
        dest: null,
        wayPoints: [
            coords["PGP Hse 15"],
            coords.TCOMS,
            coords["Opp HSSML"],
            coords["Opp NUSS"],
            coords["Com 2"],
            coords.Ventus,
            coords.IT,
            coords["Opp YiH"],
            coords.Museum,
            coords.UHC,
            coords["Opp UHall"],
            coords["S 17"],
            coords["Opp KR MRT"]
        ]
    },
    
    "B1": {
        init: coords["KR Bus Terminal"],
        dest: coords["Biz 2"],
        wayPoints: [
            coords.IT,
            coords["Opp YiH"],
            coords.UTown,
            coords.YiH,
            coords.CLB,
            coords["LT 13"],
            coords["AS 5"]
        ]
    },

    "B2": {
        init: coords["Opp HSSML"],
        dest: coords["KR Bus Terminal"],
        wayPoints: [
            coords["Opp NUSS"],
            coords.Ventus,
            coords.IT,
            coords["Opp YiH"],
            coords.UTown,
            coords["Raffles Hall"],
            coords.EA
        ]
    },

    "C": {
        init: coords["KR Bus Terminal"],
        dest: null,
        wayPoints: [
            coords["The Jap Sch"],
            coords.KV,
            coords.Museum,
            coords.UTown,
            coords.UHC,
            coords["Opp UHall"],
            coords["S 17"],
            coords["LT 27"],
            coords.UHall,
            coords["Opp UHC"],
            coords.UTown,
            coords["Raffles Hall"],
            coords.EA
        ]
    },

    "D1": {
        init: coords["Opp HSSML"],
        dest: coords["Biz 2"],
        wayPoints: [
            coords["Opp NUSS"],
            coords["Com 2"],
            coords.Ventus,
            coords.IT,
            coords["Opp YiH"],
            coords.Museum,
            coords.UTown,
            coords.YiH,
            coords.CLB,
            coords["LT 13"],
            coords["AS 5"],
            coords["Com 2"]
        ]
    },

    "D2": {
        init: coords["Opp TCOMS"],
        dest: coords.TCOMS,
        wayPoints: [
            coords.PGP,
            coords["KR MRT"],
            coords["LT 27"],
            coords.UHall,
            coords["Opp UHC"],
            coords.Museum,
            coords.UTown,
            coords.UHC,
            coords["Opp UHall"],
            coords["S 17"],
            coords["Opp KR MRT"],
            coords["PGP R"]
        ]
    },

    "BTC1": {
        init: coords["KR Bus Terminal"],
        dest: coords["OTH Building"],
        wayPoints: [
            coords.KV,
            coords.Museum,
            coords.YiH,
            coords.CLB,
            coords["LT 13"],
            coords["AS 5"],
            coords["Biz 2"],
            coords.PGP,
            coords["College Green"]
        ]
    },

    "BTC2": {
        init: coords["OTH Building"],
        dest: coords["KR Bus Terminal"],
        wayPoints: [
            coords["BG MRT"],
            coords.Museum,
            coords.EA,
        ]
    },

    "A1E": {
        init: coords["KR MRT"],
        dest: coords.PGP,
        wayPoints: [
            coords["LT 27"],
            coords["Opp UHC"],
            coords.CLB,
            coords["Biz 2"]
        ]
    },

    "A2E": {
        init: coords.Ventus,
        dest: coords["Opp KR MRT"],
        wayPoints: [
            coords.IT,
            coords["S 17"]
        ]
    }
};