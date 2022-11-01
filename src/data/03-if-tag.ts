// If
export const ifInput = `<p>{{#if year3 > year2}}</p><p>We are doing great!</p><p>{{#else}}</p><p>We should improve!</p><p>{{#endif}}</p>`;
export const ifData = JSON.stringify({
    year1: 100,
    year2: 200,
    year3: 300,
    percent: 0.5
});