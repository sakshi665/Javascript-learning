//object destructuring

const band={
    bandName:"led",
    famous: "stairway to heaven",
    year:1998,
    anotherfamous:1968
}

// const bandName=band.bandName;
// const famous = band.famous;
// console.log(bandName,famous)

// const {bandName,famous} = band;
// console.log(bandName);

let {bandName,famous,...restpro}=band;
console.log(bandName);
console.log(restpro);