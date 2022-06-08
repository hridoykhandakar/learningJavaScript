let i = 9;
let bottoles;

while (i >= 0) {
  if (i == 1) {
    bottoles = "bottole";
  } else {
    bottoles = "bottoles";
  }
  console.log(
    `${i} ${bottoles} of beer on the wall, ${i} ${bottoles} of beer.`
  );
  console.log("");
  if (i == 1) {
    console.log(
      `Take one down and pass it around, no more bottles of beer on the wall.`
    );
  } else {
    console.log(
      `Take one down and pass it around, ${i - 1} of beer on the wall.`
    );
  }

  i--;
}

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
