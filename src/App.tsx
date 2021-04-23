import React, { useState, useEffect } from 'react';
import s from './App.module.css';

const testStr =
  '-- --- == === != !== =!= =:= =/= <= >= && &&& &= ++ +++ *** ;; !! ?? ?: ?. ?= <: :< :> >: <> <<< >>> << >> || -| _|_ |- ||- |= ||= ## ### #### #{ #[ ]# #( #? #_ #_( #: #! #= ^= <$> <$ $> <+> <+ +> <*> <* *> </ </> /> <!-- <#-- --> -> ->> <<- <- <=< =<< <<= <== <=> <==> ==> => =>> >=> >>= >>- >- >-- -< -<< >-> <-< <-| <=| |=> |-> <-> <~~ <~ <~> ~~ ~~> ~> ~- -~ ~@ [||] |] [| |} {| [< >] |> <| ||> <|| |||> <||| <|> ... .. .= .- ..< .? :: ::: := ::= :? :?> // /// /* */ /= //= /== @_ __';

export const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount((count) => count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className={s.app}>
      <header className={s.header}>
        {count}
        <p>{testStr}</p>
        <code>{testStr}</code>
      </header>
    </div>
  );
};
