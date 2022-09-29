const bcrypt = require("bcrypt");

function run() {
  const passCrypt = bcrypt.hashSync("999999", 10);
  console.log(passCrypt);

  const comparMe = bcrypt.compareSync(
    "999999",
    "$2b$10$sWrOUWCXB2L//GvKBcZmiOTL2q8QiFKPrD7jl20wzAG6wbXf0Btfq"
  );

  console.log(comparMe);
}

// run();
console.log(process.env);
