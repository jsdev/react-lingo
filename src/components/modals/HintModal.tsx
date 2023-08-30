import { BaseModal } from "./BaseModal";

const styles = {
  margin: "0 auto",
};
const percent = {
  textAlign: "right",
};
const heightHidden = {
  opacity: 0,
  fontSize: "0em",
  overflow: "hidden",
};

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const HintModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Highest probability opening"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <table style={styles}>
        <thead style={heightHidden}>
          <tr>
            <th>percent</th>
            <th>opening</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-right pr-3">12%</td>
            <td>AR</td>
          </tr>
          <tr>
            <td className="text-right pr-3">26%</td>
            <td>BA</td>
          </tr>
          <tr>
            <td className="text-right pr-3">26%</td>
            <td>CO</td>
          </tr>
          <tr>
            <td className="text-right pr-3">32%</td>
            <td>DE</td>
          </tr>
          <tr>
            <td className="text-right pr-3">27%</td>
            <td>EN</td>
          </tr>
          <tr>
            <td className="text-right pr-3">21%</td>
            <td>FO</td>
          </tr>
          <tr>
            <td className="text-right pr-3">25%</td>
            <td>GA</td>
          </tr>
          <tr>
            <td className="text-right pr-3">29%</td>
            <td>HO</td>
          </tr>
          <tr>
            <td className="text-right pr-3">54%</td>
            <td>IN</td>
          </tr>
          <tr>
            <td className="text-right pr-3">29%</td>
            <td>JU</td>
          </tr>
          <tr>
            <td className="text-right pr-3">32%</td>
            <td>KI</td>
          </tr>
          <tr>
            <td className="text-right pr-3">31%</td>
            <td>LA</td>
          </tr>
          <tr>
            <td className="text-right pr-3">29%</td>
            <td>MA</td>
          </tr>
          <tr>
            <td className="text-right pr-3">32%</td>
            <td>NE</td>
          </tr>
          <tr>
            <td className="text-right pr-3">26%</td>
            <td>OU</td>
          </tr>
          <tr>
            <td className="text-right pr-3">24%</td>
            <td>PA</td>
          </tr>
          <tr>
            <td className="text-right pr-3">100%</td>
            <td>QU</td>
          </tr>
          <tr>
            <td className="text-right pr-3">55%</td>
            <td>RE</td>
          </tr>
          <tr>
            <td className="text-right pr-3">17%</td>
            <td>ST</td>
          </tr>
          <tr>
            <td className="text-right pr-3">17%</td>
            <td>TO</td>
          </tr>
          <tr>
            <td className="text-right pr-3">58%</td>
            <td>UN</td>
          </tr>
          <tr>
            <td className="text-right pr-3">33%</td>
            <td>VI</td>
          </tr>
          <tr>
            <td className="text-right pr-3">34%</td>
            <td>WI</td>
          </tr>
          <tr>
            <td className="text-right pr-3">100%</td>
            <td>YE</td>
          </tr>
          <tr>
            <td className="text-right pr-3">33%</td>
            <td>ZA</td>
          </tr>
        </tbody>
      </table>
    </BaseModal>
  );
};
