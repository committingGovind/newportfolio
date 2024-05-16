import { useState, useEffect } from "react";

let Phase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

export const useTypedSuperPower = (typingWords) => {
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
        }, TYPING_INTERVAL);

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
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
    }

    if (phase === Phase.Pausing) return;
  }, [typingWords, typedSuperPower, phase, selectedIndex]);

  return typedSuperPower;
};
