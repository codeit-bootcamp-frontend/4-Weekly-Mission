import '../css/Shared.css';
import Headerfolder from '../components/folderpage/Headerfolder';
import Gnbfolder from '../components/folderpage/Gnbfolder';
import Mainfolder from '../components/folderpage/Mainfolder';
import Footer from '../components/Footer';
import { FooterVisibility, GnbVisibility } from '../hooks/useComponentVisible';

function Folder() {
  return (
    <FooterVisibility>
      <GnbVisibility>
        <Headerfolder />
        <Gnbfolder />
        <Mainfolder />
        <Footer />
      </GnbVisibility>
    </FooterVisibility>
  );
}

export default Folder;
