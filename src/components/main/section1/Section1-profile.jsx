import ProfileMain from './Profile-main';
import './Section1-profile.css';

function Section1({ folderOwner, folderName }) {
  return (
    <section className="section1">
      <ProfileMain folderOwner={folderOwner} folderName={folderName} />
    </section>
  );
}
export default Section1;
