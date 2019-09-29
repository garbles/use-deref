import { useState, useEffect } from "react";
import { loading, ready, error, Result } from "result-object";

export const useDeref = <T>(fn: () => Promise<T>): Result<T, any> => {
  const [result, setResult] = useState<Result<T, any>>(() => loading());

  useEffect(() => {
    fn().then(value => setResult(ready(value)), err => setResult(error(err)));
  }, []);

  return result;
};
