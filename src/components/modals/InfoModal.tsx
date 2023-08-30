import { CharStatus } from "../../lib/enums/status";
import { Cell } from "../grid/Cell";
import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the LINGO in 5 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status={CharStatus.Correct}
        />
        <Cell value="U" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status={CharStatus.Correct}
        />
        <Cell value="L" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Two occurances of the letter T in their correct spots.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="R" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status={CharStatus.Present}
        />
        <Cell value="O" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          value="O"
          isRevealing={true}
          isCompleted={true}
          status={CharStatus.Absent}
        />
        <Cell
          value="R"
          isRevealing={true}
          isCompleted={true}
          status={CharStatus.Absent}
        />
        <Cell
          value="A"
          isRevealing={true}
          isCompleted={true}
          status={CharStatus.Absent}
        />
        <Cell
          value="N"
          isRevealing={true}
          isCompleted={true}
          status={CharStatus.Absent}
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status={CharStatus.Absent}
        />
        <Cell
          value="E"
          isRevealing={true}
          isCompleted={true}
          status={CharStatus.Absent}
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        None of these letters appear in the word.
      </p>
    </BaseModal>
  );
};
