let StateReturn: [unknown, Function];

// const useState = (state: unknown): StateReturn => {
//   const setState = (newState: unknown) => {
//     state = newState;
//   };

//   return [state, setState];
// };

type Pretender = {
  name: string;
  scores: number;
};

const pretenders: Pretender[] = [];

type MVPPretender = [Pretender, Pretender, Pretender];

const getMVVPPretender = (pretenders: Pretender[]): MVPPretender => {
  const sortedArr = [...pretenders].sort(
    (a: Pretender, b: Pretender): number => b.scores - a.scores
  );
  //   return sortedArr.slice(0, 3);
  // return [sortedArr[0], sortedArr[1], sortedArr[1]]
  return sortedArr.slice(0, 3) as MVPPretender;
};

const MVPPretenders: MVPPretender = getMVVPPretender(pretenders);
console.log(MVPPretenders);
