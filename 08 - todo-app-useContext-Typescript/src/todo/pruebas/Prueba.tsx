export function doubleF(n: number) {
  return n * 2;
}

const Prueba = () => {
  // input
  const xs: Array<number> = [1, 2, 3];

  // transformation
  const double = (n: number): number => n * 2;

  // result: I want an array where each `xs`' element is doubled
  const ys: Array<number> = [];
  for (let i = 0; i <= xs.length; i++) {
    ys.push(double(xs[i]));
  }
  return (
    <>
      <div>
        <h3>{xs}</h3>
      </div>
    </>
  );
};

export default Prueba;
