import PageTitle from "../../common/PageTitle/PageTitle";
import RedirectLink from "../../common/RedirectLink/RedirectLink";

const NotFound: React.FC = () => (
  <section>
    <PageTitle title="There is no such page" />
    <RedirectLink link="/" text="go to home page" justify={true} />
  </section>
);

export default NotFound;
