import { useState, useEffect } from "react";

let Phase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

// const TYPING_INTERVAL = 150;
// const PAUSE_MS = 1000;
// const DELETING_INTERVAL = 50;

export const useQuoteTypedSuperPower = (
  typingWords,
  typingInterval,
  pausingMs,
  deletingInterval
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [phase, setPhase] = useState(Phase.Typing);

  const [typedSuperPower, setTypedSuperPower] = useState("");

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedSuperPower = typingWords[selectedIndex].slice(
          0,
          typedSuperPower.length + 1
        );

        if (nextTypedSuperPower === typedSuperPower) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedSuperPower(nextTypedSuperPower);
        }, typingInterval);

        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typedSuperPower) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(typingWords[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = typingWords[selectedIndex].slice(
          0,
          typedSuperPower.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSuperPower(nextRemaining);
        }, deletingInterval);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, pausingMs);
        return () => clearTimeout(timeout);
    }
  }, [typingWords, typedSuperPower, phase, selectedIndex]);

  return typedSuperPower;
};
